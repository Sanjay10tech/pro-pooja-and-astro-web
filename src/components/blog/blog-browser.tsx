"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  BookOpen,
  User,
  Sparkles,
} from "lucide-react";
import NextImage, { type ImageProps } from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";
import type { BlogSummary } from "@/lib/blog-loader";

/** Renders nothing when a post has no cover image (the gradient + icon fallback shows instead). */
function Cover({ src, ...props }: Omit<ImageProps, "src"> & { src: string | null }) {
  return src ? <NextImage src={src} {...props} /> : null;
}

export function BlogBrowser({ posts }: { posts: BlogSummary[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = posts.find((p) => p.featured);
  const regularPosts = useMemo(() => posts.filter((p) => !p.featured), [posts]);

  const filteredPosts = useMemo(() => {
    let posts = regularPosts;

    if (selectedCategory !== "All") {
      posts = posts.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q)
      );
    }

    return posts;
  }, [selectedCategory, searchQuery, regularPosts]);

  return (
    <PageTransition>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />
        {/* Decorative editorial lines */}
        <div className="absolute top-0 left-[20%] w-px h-full bg-gold/5 hidden lg:block" />
        <div className="absolute top-0 right-[20%] w-px h-full bg-gold/5 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/10 px-4 py-1.5 rounded-full mb-6"
            >
              <BookOpen className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-medium text-gold uppercase tracking-wider">
                Journal &amp; Insights
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gold leading-[1.05] mb-5">
              Stories, Wisdom{" "}
              <span className="text-gold-light">&amp;</span> Tradition
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
              Explore the depth of Vedic knowledge, spiritual practices, and the sacred 
              heritage through our curated articles.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 max-w-md"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 bg-secondary border border-secondary rounded-xl text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold shadow-sm text-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ FEATURED ARTICLE ═══════════════════════ */}
      {featured && !searchQuery && selectedCategory === "All" && (
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/blogs/${featured.slug}`}>
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 group">
                  {/* Image — takes 7 columns for asymmetry */}
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-secondary to-gold/10">
                    <Cover
                      src={featured.image}
                      alt={featured.title}
                      fill
                      preload
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-gold/15" />
                    </div>
                    {/* Featured label */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-gold text-background px-3 py-1.5 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      <span className="text-xs font-bold uppercase tracking-wider">Featured</span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
                  </div>

                  {/* Content — takes 5 columns */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <span className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
                      {featured.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold leading-tight mb-4 group-hover:text-gold-light transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6 text-base">
                      {featured.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-text">{featured.author}</p>
                          <p className="text-[10px] text-muted">{featured.authorRole}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {featured.dateDisplay}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featured.readTime}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:text-gold-light transition-colors">
                        Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════════════ ARTICLES GRID ═══════════════════════ */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gold">
              {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
            </h2>
            <p className="text-sm text-muted">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <>
              {/* First row: 2-column editorial layout (large + small) */}
              {filteredPosts.length >= 2 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                  {/* Large card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-8"
                  >
                    <Link href={`/blogs/${filteredPosts[0].slug}`}>
                      <article className="group h-full bg-secondary border border-secondary hover:border-gold/20 rounded-2xl overflow-hidden transition-all duration-300">
                        <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary via-secondary to-gold/10">
                          <Cover
                            src={filteredPosts[0].image}
                            alt={filteredPosts[0].title}
                            fill
                            sizes="(min-width: 1024px) 66vw, 100vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <BookOpen className="w-12 h-12 text-gold/15" />
                          </div>
                          <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-300" />
                          <div className="absolute top-3 left-3 bg-secondary/90 backdrop-blur-sm text-gold text-xs font-semibold px-2.5 py-1 rounded-full">
                            {filteredPosts[0].category}
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-3 text-xs text-muted mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {filteredPosts[0].dateDisplay}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {filteredPosts[0].readTime}
                            </span>
                          </div>
                          <h3 className="font-serif text-xl md:text-2xl font-bold text-gold mb-2 group-hover:text-gold-light transition-colors leading-snug">
                            {filteredPosts[0].title}
                          </h3>
                          <p className="text-muted text-sm leading-relaxed line-clamp-2">
                            {filteredPosts[0].excerpt}
                          </p>
                          <div className="flex items-center gap-2 mt-3">
                            <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center">
                              <User className="w-3 h-3 text-gold" />
                            </div>
                            <span className="text-xs text-text">{filteredPosts[0].author}</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>

                  {/* Side column: stacked small cards */}
                  <div className="lg:col-span-4 flex flex-col gap-6">
                    {filteredPosts.slice(1, 3).map((post, index) => (
                      <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link href={`/blogs/${post.slug}`}>
                          <article className="group flex gap-4 bg-secondary border border-secondary hover:border-gold/20 rounded-xl p-3 transition-all duration-300">
                            {/* Thumbnail */}
                            <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-primary via-secondary to-gold/10 relative">
                              <Cover
                                src={post.image}
                                alt={post.title}
                                fill
                                sizes="(min-width: 768px) 112px, 96px"
                                className="object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-gold/15" />
                              </div>
                            </div>
                            {/* Text */}
                            <div className="flex flex-col justify-center min-w-0">
                              <span className="text-gold text-[10px] font-semibold uppercase tracking-wider mb-1">
                                {post.category}
                              </span>
                              <h3 className="font-serif text-sm font-semibold text-gold leading-snug mb-1.5 group-hover:text-gold-light transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              <div className="flex items-center gap-2 text-[10px] text-muted">
                                <span>{post.dateDisplay}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </article>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Remaining posts: 3-column grid with different card style */}
              {filteredPosts.length > 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pt-8 border-t border-secondary">
                  {filteredPosts.slice(3).map((post, index) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link href={`/blogs/${post.slug}`}>
                        <article className="group bg-secondary border border-secondary hover:border-gold/20 rounded-xl overflow-hidden transition-all duration-300">
                          {/* Image */}
                          <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-primary via-secondary to-gold/10">
                            <Cover
                              src={post.image}
                              alt={post.title}
                              fill
                              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <BookOpen className="w-8 h-8 text-gold/15" />
                            </div>
                            <div className="absolute top-3 left-3 bg-secondary/90 backdrop-blur text-gold text-[10px] font-semibold px-2 py-0.5 rounded-full">
                              {post.category}
                            </div>
                          </div>
                          <div className="p-4">
                            {/* Meta */}
                            <div className="flex items-center gap-3 text-xs text-muted mb-2">
                              <span>{post.dateDisplay}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                            {/* Title */}
                            <h3 className="font-serif text-base font-semibold text-gold leading-snug mb-2 group-hover:text-gold-light transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed line-clamp-2">
                              {post.excerpt}
                            </p>
                            {/* Author */}
                            <div className="flex items-center gap-2 mt-3">
                              <div className="w-5 h-5 bg-gold/10 rounded-full flex items-center justify-center">
                                <User className="w-2.5 h-2.5 text-gold" />
                              </div>
                              <span className="text-xs text-muted">{post.author}</span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-12 h-12 text-muted/30 mx-auto mb-4" />
              <p className="text-muted text-lg mb-2">No articles found.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-sm font-medium text-gold hover:text-gold-light transition-colors"
              >
                ← View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════ NEWSLETTER / CTA ═══════════════════════ */}
      <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-8 h-8 text-gold mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
              Deepen Your Spiritual Knowledge
            </h2>
            <p className="text-text/70 mb-8">
              New articles on Vedic wisdom, rituals, and sacred heritage published every week.
            </p>
            <Link href="/talk-to-us">
              <Button variant="gold" size="lg">
                Book a Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
