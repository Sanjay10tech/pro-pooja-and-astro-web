# How to add a blog post

1. Copy an existing `.md` file in this folder (or `_template.md`) and rename it, e.g. `my-new-post.md`.
2. Fill in the frontmatter (the block between the `---` lines) and write the article below it.
3. Put the cover image in `src/blogs/images/` (use `.webp`, about 1200x630). Use a new file name for every new image.
4. Set `published: true` (use `false` to hide a draft).
5. Optional check: `npm run blogs:check`.
6. Commit and push to GitHub. The site rebuilds and the post appears automatically.

## Frontmatter

```yaml
---
title: "Post title"
slug: "post-title"            # lowercase, numbers, hyphens. This becomes /blogs/post-title
category: "Astrology"
date: "2026-11-11"            # YYYY-MM-DD, keep the quotes
author: "R. Anand"
authorRole: "Purohit & Vedic Astrologer"   # optional
image: "post-title.webp"      # file inside src/blogs/images/
excerpt: "One or two sentences shown on cards and in search results."
featured: false               # true = shown big at the top of the Blogs page
published: true
readTime: "5 min read"        # optional, calculated if missing
seoTitle: "Optional SEO title"             # optional
seoDescription: "Optional SEO description" # optional
related:                      # optional list of slugs
  - "another-post-slug"
---
```

Required: title, slug, category, date, author, image, excerpt. Slugs must be unique.

## Markdown supported

Headings (`#`, `##`, `###`; a `#` in the body is shown as an H2), paragraphs, **bold**, *italic*,
ordered and unordered lists, blockquotes, links, images (`![alt](images/file.webp)`), tables and code blocks.
Raw HTML is not rendered (it is shown as text) for safety.

Files starting with `_` and this README are ignored.
