// Copies src/blogs/images/* to public/blog-images/ so Next can serve them.
import fs from "node:fs";
import path from "node:path";

const src = path.join(process.cwd(), "src", "blogs", "images");
const dest = path.join(process.cwd(), "public", "blog-images");

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });

let count = 0;
if (fs.existsSync(src)) {
  for (const f of fs.readdirSync(src)) {
    const from = path.join(src, f);
    if (fs.statSync(from).isFile()) {
      fs.copyFileSync(from, path.join(dest, f));
      count++;
    }
  }
}
console.log(`[blog-images] synced ${count} file(s) to public/blog-images`);
