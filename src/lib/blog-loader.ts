/**
 * File-based Markdown blog loader.
 * Reads every `.md` file in `src/blogs/`, validates frontmatter and renders HTML.
 * Server-only (uses node:fs). Keep this file free of local imports so scripts can load it directly.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked, type Tokens } from "marked";

export interface BlogHeading {
  id: string;
  title: string;
}

export interface BlogSummary {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  /** ISO date, e.g. 2026-11-10 */
  date: string;
  /** Human readable, e.g. November 10, 2026 */
  dateDisplay: string;
  readTime: string;
  /** Public URL of the cover image, or null when missing */
  image: string | null;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
}

export interface BlogPost extends BlogSummary {
  html: string;
  toc: BlogHeading[];
  relatedSlugs: string[];
}

export const BLOGS_DIR = path.join(process.cwd(), "src", "blogs");
export const BLOG_IMAGES_DIR = path.join(BLOGS_DIR, "images");
const PUBLIC_IMAGE_BASE = "/blog-images";

const REQUIRED = ["title", "slug", "category", "date", "author", "image", "excerpt"] as const;

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

function resolveBodyImage(src: string): string {
  if (isExternal(src) || src.startsWith("/")) return src;
  return `${PUBLIC_IMAGE_BASE}/${src.replace(/^\.?\/?(images\/)?/, "")}`;
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function normalizeDate(value: unknown, file: string): string {
  let iso: string;
  if (value instanceof Date) iso = value.toISOString().slice(0, 10);
  else iso = String(value).trim();
  if (!/^\d{4}-\d{2}-\d{2}/.test(iso) || Number.isNaN(Date.parse(iso))) {
    throw new Error(`[blog] ${file}: "date" must be YYYY-MM-DD (got "${String(value)}")`);
  }
  return iso.slice(0, 10);
}

type InlineParser = { parser: { parseInline(tokens: Tokens.Generic[]): string } };

function toSummary(p: BlogPost): BlogSummary {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    author: p.author,
    authorRole: p.authorRole,
    date: p.date,
    dateDisplay: p.dateDisplay,
    readTime: p.readTime,
    image: p.image,
    featured: p.featured,
    seoTitle: p.seoTitle,
    seoDescription: p.seoDescription,
  };
}

function renderMarkdown(body: string): { html: string; toc: BlogHeading[] } {
  const toc: BlogHeading[] = [];
  const used = new Map<string, number>();
  const marked = new Marked({ gfm: true, breaks: false });

  marked.use({
    renderer: {
      heading(this: InlineParser, { tokens, depth }: Tokens.Heading) {
        const text = this.parser.parseInline(tokens) as string;
        // Body "#" becomes h2: the page title already is the h1.
        const level = Math.max(2, depth);
        if (level === 2) {
          const plain = text.replace(/<[^>]+>/g, "");
          const base = slugifyHeading(plain) || "section";
          const n = used.get(base) ?? 0;
          used.set(base, n + 1);
          const id = n === 0 ? base : `${base}-${n}`;
          toc.push({ id, title: plain.replace(/&amp;/g, "&") });
          return `<h2 id="${id}">${text}</h2>\n`;
        }
        return `<h${level}>${text}</h${level}>\n`;
      },
      link(this: InlineParser, { href, title, tokens }: Tokens.Link) {
        const text = this.parser.parseInline(tokens) as string;
        const t = title ? ` title="${escapeHtml(title)}"` : "";
        const ext = isExternal(href) ? ` target="_blank" rel="noopener noreferrer"` : "";
        return `<a href="${escapeHtml(href)}"${t}${ext}>${text}</a>`;
      },
      image({ href, title, text }: Tokens.Image) {
        const t = title ? ` title="${escapeHtml(title)}"` : "";
        return `<img src="${escapeHtml(resolveBodyImage(href))}" alt="${escapeHtml(text)}"${t} loading="lazy" decoding="async" />`;
      },
      // Raw HTML in markdown is escaped for safety.
      html({ text }: Tokens.HTML | Tokens.Tag) {
        return escapeHtml(text);
      },
    },
  });

  return { html: marked.parse(body, { async: false }) as string, toc };
}

function resolveCover(image: string): string | null {
  if (isExternal(image) || image.startsWith("/")) return image;
  const file = path.join(BLOG_IMAGES_DIR, image);
  if (!fs.existsSync(file)) {
    console.warn(`[blog] cover image not found: src/blogs/images/${image}`);
    return null;
  }
  return `${PUBLIC_IMAGE_BASE}/${image}`;
}

let cache: BlogPost[] | null = null;

function loadAll(): BlogPost[] {
  if (cache && process.env.NODE_ENV === "production") return cache;
  if (!fs.existsSync(BLOGS_DIR)) return [];

  const files = fs
    .readdirSync(BLOGS_DIR)
    .filter((f) => f.toLowerCase().endsWith(".md") && !f.startsWith("_") && f.toLowerCase() !== "readme.md");

  const posts: BlogPost[] = [];
  const seen = new Map<string, string>();

  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOGS_DIR, file), "utf8");
    const { data, content } = matter(raw);

    const missing = REQUIRED.filter((k) => data[k] === undefined || data[k] === null || String(data[k]).trim() === "");
    if (missing.length) {
      throw new Error(`[blog] ${file}: missing required frontmatter field(s): ${missing.join(", ")}`);
    }

    const slug = String(data.slug).trim();
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      throw new Error(`[blog] ${file}: slug "${slug}" must be lowercase letters, numbers and hyphens`);
    }
    if (seen.has(slug)) {
      throw new Error(`[blog] duplicate slug "${slug}" in ${seen.get(slug)} and ${file}`);
    }
    seen.set(slug, file);

    // Unpublished posts are excluded (only an explicit false hides a post).
    if (data.published === false) continue;

    const date = normalizeDate(data.date, file);
    const { html, toc } = renderMarkdown(content.trim());
    const words = content.trim().split(/\s+/).length;

    posts.push({
      slug,
      title: String(data.title).trim(),
      excerpt: String(data.excerpt).trim(),
      category: String(data.category).trim(),
      author: String(data.author).trim(),
      authorRole: data.authorRole ? String(data.authorRole).trim() : "",
      date,
      dateDisplay: formatDate(date),
      readTime: data.readTime ? String(data.readTime).trim() : `${Math.max(1, Math.round(words / 200))} min read`,
      image: resolveCover(String(data.image).trim()),
      featured: data.featured === true,
      seoTitle: data.seoTitle ? String(data.seoTitle).trim() : String(data.title).trim(),
      seoDescription: data.seoDescription ? String(data.seoDescription).trim() : String(data.excerpt).trim(),
      html,
      toc,
      relatedSlugs: Array.isArray(data.related) ? data.related.map(String) : [],
    });
  }

  posts.sort((a, b) => (a.date === b.date ? a.title.localeCompare(b.title) : a.date < b.date ? 1 : -1));
  cache = posts;
  return posts;
}

export function getAllPosts(): BlogPost[] {
  return loadAll();
}

export function getAllSummaries(): BlogSummary[] {
  return loadAll().map(toSummary);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return loadAll().find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return loadAll().find((p) => p.featured);
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogSummary[] {
  const all = loadAll().filter((p) => p.slug !== post.slug);
  const picked: BlogPost[] = [];
  for (const s of post.relatedSlugs) {
    const found = all.find((p) => p.slug === s);
    if (found) picked.push(found);
  }
  for (const p of all.filter((p) => p.category === post.category)) {
    if (!picked.includes(p)) picked.push(p);
  }
  for (const p of all) if (!picked.includes(p)) picked.push(p);
  return picked.slice(0, limit).map(toSummary);
}

export function getCategories(): string[] {
  return ["All", ...Array.from(new Set(loadAll().map((p) => p.category)))];
}
