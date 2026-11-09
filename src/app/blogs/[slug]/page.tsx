"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  User,
  Share2,
  MessageCircle,
  Link2,
  List,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageTransition } from "@/components/layout/page-transition";
import { getBlogBySlug, getRelatedPosts, BLOG_POSTS } from "@/lib/blog-data";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogBySlug(slug);
  const [showToc, setShowToc] = useState(false);

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gold mb-4">Article Not Found</h1>
            <p className="text-muted mb-6">
              The article you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link href="/blogs">
              <Button variant="primary">
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const relatedPosts = getRelatedPosts(post);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `${post.title} — R. Anand Purohit & Vedic Astrologer`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;

  // Simple markdown-ish rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="space-y-2 mb-6 pl-4">
            {listItems.map((item, i) => (
              <li key={i} className="text-muted leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-text">$1</strong>') }} />
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (!trimmed) {
        flushList();
        return;
      }

      if (trimmed.startsWith("## ")) {
        flushList();
        const text = trimmed.replace("## ", "");
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        elements.push(
          <h2 key={index} id={id} className="text-2xl md:text-3xl font-bold text-gold mt-12 mb-4 scroll-mt-28">
            {text}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushList();
        const text = trimmed.replace("### ", "");
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-gold mt-8 mb-3">
            {text}
          </h3>
        );
      } else if (trimmed.startsWith("- ")) {
        inList = true;
        listItems.push(trimmed.replace("- ", ""));
      } else if (/^\d+\.\s/.test(trimmed)) {
        inList = true;
        listItems.push(trimmed.replace(/^\d+\.\s/, ""));
      } else {
        flushList();
        elements.push(
          <p key={index} className="text-muted leading-[1.8] mb-4" dangerouslySetInnerHTML={{
            __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-text">$1</strong>')
          }} />
        );
      }
    });

    flushList();
    return elements;
  };

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4"
          >
            {/* Category */}
            <span className="inline-block text-gold text-sm font-medium uppercase tracking-wider mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-light leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {/* Author */}
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text">{post.author}</p>
                  <p className="text-xs text-muted">{post.authorRole}</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-secondary" />

              {/* Date & Time */}
              <div className="flex items-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ FEATURED IMAGE ═══════════════════════ */}
      <section className="py-8 md:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-[21/9] md:aspect-[2.5/1] rounded-2xl overflow-hidden bg-gradient-to-br from-gold/15 via-secondary to-gold/10 relative"
          >
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ ARTICLE CONTENT ═══════════════════════ */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar — Table of Contents (desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28">
                <h4 className="text-xs font-bold text-text uppercase tracking-wider mb-4 flex items-center gap-2">
                  <List className="w-3.5 h-3.5" />
                  Table of Contents
                </h4>
                <nav>
                  <ul className="space-y-2 border-l-2 border-secondary pl-4">
                    {post.tableOfContents.map((item) => (
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

                {/* Share buttons (desktop sidebar) */}
                <div className="mt-8 pt-6 border-t border-secondary">
                  <h4 className="text-xs font-bold text-text uppercase tracking-wider mb-3">
                    Share Article
                  </h4>
                  <div className="flex gap-2">
                    <a
                      href={whatsappShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                      aria-label="Share on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({ title: post.title, url: shareUrl });
                        } else {
                          navigator.clipboard.writeText(shareUrl);
                        }
                      }}
                      className="w-9 h-9 bg-gold/10 hover:bg-gold text-gold hover:text-primary rounded-lg flex items-center justify-center transition-all duration-200"
                      aria-label="Copy link"
                    >
                      <Link2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({ title: post.title, text: post.excerpt, url: shareUrl });
                        }
                      }}
                      className="w-9 h-9 bg-gold/10 hover:bg-gold text-gold hover:text-primary rounded-lg flex items-center justify-center transition-all duration-200"
                      aria-label="Share"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile TOC toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setShowToc(!showToc)}
                className="w-full flex items-center justify-between bg-secondary border border-secondary rounded-xl px-4 py-3 text-sm font-medium text-text mb-6"
              >
                <span className="flex items-center gap-2">
                  <List className="w-4 h-4 text-gold" />
                  Table of Contents
                </span>
                <span className="text-muted">{showToc ? "−" : "+"}</span>
              </button>
              {showToc && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="bg-secondary border border-secondary rounded-xl p-4 mb-8"
                >
                  <ul className="space-y-2">
                    {post.tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={() => setShowToc(false)}
                          className="text-sm text-muted hover:text-gold transition-colors block py-0.5"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Main Content */}
            <article className="lg:col-span-9 max-w-none">
              <div className="prose-custom">
                {renderContent(post.content)}
              </div>

              {/* Mobile Share Bar */}
              <div className="lg:hidden mt-10 pt-6 border-t border-secondary">
                <h4 className="text-sm font-semibold text-text mb-3">Share this article</h4>
                <div className="flex gap-2">
                  <a
                    href={whatsappShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg text-sm font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: post.title, url: shareUrl });
                      } else {
                        navigator.clipboard.writeText(shareUrl);
                      }
                    }}
                    className="flex items-center gap-2 bg-gold/10 text-gold px-4 py-2.5 rounded-lg text-sm font-medium"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button
                    onClick={() => navigator.clipboard?.writeText(shareUrl)}
                    className="flex items-center gap-2 border border-secondary text-text px-4 py-2.5 rounded-lg text-sm font-medium"
                  >
                    <Link2 className="w-4 h-4" />
                    Copy Link
                  </button>
                </div>
              </div>

              {/* Author Card */}
              <div className="mt-12 bg-secondary rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <User className="w-7 h-7 text-gold/50" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-gold text-base">{post.author}</p>
                  <p className="text-xs text-muted mb-2">{post.authorRole}</p>
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
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blogs/${related.slug}`}>
                    <article className="group flex gap-4 glass-panel rounded-xl border border-gold/20 p-4 hover:shadow-md hover:shadow-gold/10 transition-all duration-300">
                      {/* Thumbnail */}
                      <div className="w-28 h-28 shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-gold/10 via-secondary to-gold/8 relative">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>
                      {/* Text */}
                      <div className="flex flex-col justify-center min-w-0">
                        <span className="text-gold text-[10px] font-semibold uppercase tracking-wider mb-1">
                          {related.category}
                        </span>
                        <h3 className="font-serif text-sm md:text-base font-semibold text-gold-light leading-snug mb-2 group-hover:text-gold transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[10px] text-muted">
                          <span>{related.date}</span>
                          <span>•</span>
                          <span>{related.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-5" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
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
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
