// Validates all blog markdown files (required fields, duplicate slugs, missing images).
import { getAllPosts } from "../src/lib/blog-loader.ts";

try {
  const posts = getAllPosts();
  console.log(`OK: ${posts.length} published post(s)`);
  for (const p of posts) {
    console.log(` - ${p.featured ? "[featured] " : ""}${p.slug} (${p.date})${p.image ? "" : "  !! cover image missing"}`);
  }
} catch (e) {
  console.error(String(e.message ?? e));
  process.exit(1);
}
