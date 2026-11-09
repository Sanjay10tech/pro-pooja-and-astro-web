"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";
import { PUJA_SERVICES } from "@/lib/puja-data";

// TODO: Metadata cannot be exported from a 'use client' component.
// Add a layout.tsx beside this file if static metadata is needed.

const TABS = ["All", "Poojas", "Homa & Havan"] as const;
type Tab = (typeof TABS)[number];

export default function PoojaServicesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered =
    activeTab === "All"
      ? PUJA_SERVICES
      : PUJA_SERVICES.filter((s) => s.category === activeTab);

  return (
    <PageTransition>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary to-background" />
        <div className="absolute inset-0 celestial-glow" />
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm border border-gold/30 px-4 py-2 rounded-full mb-5"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">
                {PUJA_SERVICES.length} Sacred Ceremonies
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif font-bold text-text mb-4 leading-tight">
              Sacred Pooja &amp; Homa Services
            </h1>
            <p className="text-muted text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Authentic Vedic ceremonies performed by R. Anand — Purohit &amp; Vedic Astrologer,
              following the sacred Krishna Yajurveda tradition with over 10 years of experience.
            </p>

            {/* Tab Filter */}
            <div className="inline-flex items-center gap-1 bg-secondary/60 backdrop-blur-sm border border-gold/20 p-1 rounded-full">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-gold text-background shadow-sm"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES GRID ═══════════════════════ */}
      <section className="py-10 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <motion.p
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted text-sm mb-6"
          >
            Showing{" "}
            <span className="text-gold font-semibold">{filtered.length}</span>{" "}
            {activeTab === "All" ? "ceremonies" : activeTab + " ceremonies"}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  className="group"
                >
                  <div className="glass-panel gold-border rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 h-full flex flex-col">
                    {/* Ritual illustration + category badge */}
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`Illustration of ${service.title} ritual`}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                      {/* Category badge */}
                      <div className="absolute top-3 left-3 bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold text-[10px] font-semibold px-2.5 py-1 rounded-full">
                        {service.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-serif text-sm font-semibold text-gold mb-1.5 group-hover:text-gold-light transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-muted text-xs leading-relaxed mb-3 flex-grow line-clamp-3">
                        {service.shortDescription}
                      </p>

                      <div className="flex items-center gap-2 pt-3 border-t border-gold/10">
                        <Link href={`/poojas/${service.slug}`} className="flex-1">
                          <button className="w-full text-xs font-medium text-gold border border-gold/30 hover:bg-gold/10 px-3 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1">
                            Details <ArrowRight className="w-3 h-3" />
                          </button>
                        </Link>
                        <Link href="/contact" className="flex-1">
                          <button className="w-full text-xs font-medium bg-gold text-background hover:bg-gold-light px-3 py-1.5 rounded-lg transition-all">
                            Book
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════ BOTTOM CTA ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 celestial-glow" />
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-gold text-2xl font-serif">ॐ</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-text mb-3">
              Book a Sacred Ceremony
            </h2>
            <p className="text-muted text-base mb-8 max-w-2xl mx-auto">
              R. Anand performs authentic Vedic ceremonies across Karnataka and South India.
              Contact us to discuss your requirements and select the most auspicious muhurat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="gold" size="lg">
                  Book a Service
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/talk-to-us">
                <Button variant="secondary" size="lg">
                  Step-by-Step Booking
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
