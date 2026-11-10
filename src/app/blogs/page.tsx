import { BlogBrowser } from "@/components/blog/blog-browser";
import { getAllSummaries } from "@/lib/blog-loader";

export default function BlogsPage() {
  const posts = getAllSummaries();
  return <BlogBrowser posts={posts} />;
}
