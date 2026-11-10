import { Calendar, Clock, ArrowRight, ArrowLeft, User, List } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageTransition } from "@/components/layout/page-transition";
import { MotionDiv } from "@/components/blog/blog-motion";
import { BlogShare } from "@/components/blog/blog-share";
import { BlogTocMobile } from "@/components/blog/blog-toc-mobile";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-loader";

// Only slugs that exist as published markdown files are valid; everything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const images = post.image ? [{ url: post.image, alt: post.title }] : undefined;

  return {
    metadataBase: new URL(siteUrl),
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      url: `/blogs/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      images,
      locale: "en_IN",
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: post.seoTitle,
      description: post.seoDescription,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);

  return (
    <PageTransition>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative py-12 md:py-16 bg-secondary border-b border-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blogs" },
              { label: post.category, href: "/blogs" },
            ]}
          />

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4"
          >
            <span className="inline-block text-gold text-sm font-medium uppercase tracking-wider mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-light leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text">{post.author}</p>
                  {post.authorRole && <p className="text-xs text-muted">{post.authorRole}</p>}
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-secondary" />

              <div className="flex items-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{post.dateDisplay}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* ═══════════════════════ FEATURED IMAGE ═══════════════════════ */}
      <section className="py-8 md:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-[21/9] md:aspect-[2.5/1] rounded-2xl overflow-hidden bg-gradient-to-br from-gold/15 via-secondary to-gold/10 relative"
          >
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                fill
                preload
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            )}
          </MotionDiv>
        </div>
      </section>

      {/* ═══════════════════════ ARTICLE CONTENT ═══════════════════════ */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar — Table of Contents (desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28">
                {post.toc.length > 0 && (
                  <>
                    <h4 className="text-xs font-bold text-text uppercase tracking-wider mb-4 flex items-center gap-2">
                      <List className="w-3.5 h-3.5" />
                      Table of Contents
                    </h4>
                    <nav>
                      <ul className="space-y-2 border-l-2 border-secondary pl-4">
                        {post.toc.map((item) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="text-sm text-muted hover:text-gold transition-colors leading-snug block py-0.5"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </>
                )}

                <div className={post.toc.length > 0 ? "mt-8 pt-6 border-t border-secondary" : ""}>
                  <h4 className="text-xs font-bold text-text uppercase tracking-wider mb-3">
                    Share Article
                  </h4>
                  <BlogShare title={post.title} excerpt={post.excerpt} variant="sidebar" />
                </div>
              </div>
            </aside>

            {/* Mobile TOC toggle */}
            <BlogTocMobile items={post.toc} />

            {/* Main Content */}
            <article className="lg:col-span-9 max-w-none min-w-0">
              <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.html }} />

              {/* Mobile Share Bar */}
              <div className="lg:hidden mt-10 pt-6 border-t border-secondary">
                <h4 className="text-sm font-semibold text-text mb-3">Share this article</h4>
                <BlogShare title={post.title} excerpt={post.excerpt} variant="bar" />
              </div>

              {/* Author Card */}
              <div className="mt-12 bg-secondary rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <User className="w-7 h-7 text-gold/50" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-gold text-base">{post.author}</p>
                  {post.authorRole && <p className="text-xs text-muted mb-2">{post.authorRole}</p>}
                  <p className="text-sm text-muted leading-relaxed">
                    Experienced Vedic scholar and practitioner dedicated to sharing ancient wisdom
                    and making spiritual knowledge accessible to all seekers.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ RELATED ARTICLES ═══════════════════════ */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary border-t border-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related, index) => (
                <MotionDiv
                  key={related.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blogs/${related.slug}`}>
                    <article className="group flex gap-4 glass-panel rounded-xl border border-gold/20 p-4 hover:shadow-md hover:shadow-gold/10 transition-all duration-300">
                      <div className="w-28 h-28 shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-gold/10 via-secondary to-gold/8 relative">
                        {related.image && (
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            sizes="112px"
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex flex-col justify-center min-w-0">
                        <span className="text-gold text-[10px] font-semibold uppercase tracking-wider mb-1">
                          {related.category}
                        </span>
                        <h3 className="font-serif text-sm md:text-base font-semibold text-gold-light leading-snug mb-2 group-hover:text-gold transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[10px] text-muted">
                          <span>{related.dateDisplay}</span>
                          <span>•</span>
                          <span>{related.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-5" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gold-light mb-4">
              Ready to Experience These Rituals?
            </h2>
            <p className="text-muted mb-8">
              Book an experienced pandit and bring the blessings of authentic Vedic ceremonies into your life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services">
                <Button variant="gold" size="lg">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/blogs">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-gold/40 text-gold hover:bg-gold/10"
                >
                  <ArrowLeft className="w-5 h-5" />
                  All Articles
                </Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>
    </PageTransition>
  );
}
