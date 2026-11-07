"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  ArrowRight,
  BookOpen,
  Users,
  ChevronRight,
  Sparkles,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";
import { PUJA_SERVICES } from "@/lib/puja-data";

/* ───────────────────────── FILTER DATA ───────────────────────── */

const filterCategories = [
  "All Services",
  "Popular Pujas",
  "Griha Shanti",
  "Homa / Havan",
  "Festival Pujas",
  "Special Rituals",
];

const filterPurpose = [
  "Prosperity & Wealth",
  "Marriage & Relationship",
  "Health & Wellness",
  "Protection & Peace",
];

const filterDuration = ["1–2 Hours", "2–4 Hours", "Half Day", "Full Day"];

const filterAvailability = ["Online", "At Home", "Temple"];

/* ───────────────────────── SIDEBAR COMPONENT ───────────────────────── */

function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedPurpose,
  setSelectedPurpose,
  onClear,
  onClose,
  isMobile = false,
}: {
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  selectedPurpose: string;
  setSelectedPurpose: (v: string) => void;
  onClear: () => void;
  onClose?: () => void;
  isMobile?: boolean;
}) {
  return (
    <div className={`${isMobile ? "" : "sticky top-24"}`}>
      {/* Mobile close button */}
      {isMobile && (
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-ivory-dark">
          <h3 className="font-serif font-bold text-maroon text-lg">Filters</h3>
          <button onClick={onClose} className="p-2 hover:bg-ivory-dark rounded-lg" aria-label="Close filters">
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>
      )}

      {/* Filter Title (desktop) */}
      {!isMobile && (
        <h3 className="text-xs font-bold text-charcoal uppercase tracking-widest mb-5">
          Filter By
        </h3>
      )}

      {/* Category */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-maroon mb-3">Puja Category</h4>
        <div className="space-y-1.5">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? "All Services" : cat)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-maroon text-white font-medium"
                  : "text-charcoal hover:bg-ivory-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Purpose */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-maroon mb-3">Purpose</h4>
        <div className="space-y-1.5">
          {filterPurpose.map((purpose) => (
            <button
              key={purpose}
              onClick={() => setSelectedPurpose(purpose === selectedPurpose ? "" : purpose)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                selectedPurpose === purpose
                  ? "bg-maroon text-white font-medium"
                  : "text-charcoal hover:bg-ivory-dark"
              }`}
            >
              {purpose}
            </button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-maroon mb-3">Duration</h4>
        <div className="flex flex-wrap gap-2">
          {filterDuration.map((d) => (
            <span key={d} className="px-3 py-1.5 bg-ivory-dark text-charcoal-light text-xs rounded-full">
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-maroon mb-3">Availability</h4>
        <div className="flex flex-wrap gap-2">
          {filterAvailability.map((a) => (
            <span key={a} className="px-3 py-1.5 bg-ivory-dark text-charcoal-light text-xs rounded-full">
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Clear */}
      <button
        onClick={onClear}
        className="w-full text-sm font-medium text-maroon border border-maroon/30 hover:bg-maroon hover:text-white px-4 py-2.5 rounded-lg transition-all duration-200"
      >
        Clear Filters
      </button>
    </div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredServices = useMemo(() => {
    let services = PUJA_SERVICES;

    // Category filter
    if (selectedCategory !== "All Services") {
      services = services.filter((s) => s.category === selectedCategory);
    }

    // Purpose filter (searches in suitableFor)
    if (selectedPurpose) {
      const purposeMap: Record<string, string[]> = {
        "Prosperity & Wealth": ["prosperity", "wealth", "success", "abundance"],
        "Marriage & Relationship": ["marriage", "wedding", "relationship", "harmony"],
        "Health & Wellness": ["health", "longevity", "wellness", "healing"],
        "Protection & Peace": ["protection", "peace", "purification", "obstacle"],
      };
      const keywords = purposeMap[selectedPurpose] || [];
      if (keywords.length > 0) {
        services = services.filter((s) =>
          keywords.some((kw) => s.suitableFor.toLowerCase().includes(kw) || s.shortDescription.toLowerCase().includes(kw))
        );
      }
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      services = services.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.shortDescription.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.suitableFor.toLowerCase().includes(q)
      );
    }

    return services;
  }, [searchQuery, selectedCategory, selectedPurpose]);

  const clearFilters = () => {
    setSelectedCategory("All Services");
    setSelectedPurpose("");
    setSearchQuery("");
  };

  return (
    <PageTransition>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative py-16 md:py-22 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon-dark to-maroon" />
        <div className="absolute inset-0 vedic-pattern opacity-5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-saffron/20 backdrop-blur-sm border border-saffron/30 px-4 py-2 rounded-full mb-5"
            >
              <Sparkles className="w-4 h-4 text-saffron" />
              <span className="text-sm font-medium text-white/90">
                {PUJA_SERVICES.length} Sacred Ceremonies Available
              </span>
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Explore Our Pooja Services
            </h1>
            <p className="text-white/70 text-base md:text-lg">
              Choose the sacred ceremony that is right for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ MAIN CONTENT: SIDEBAR + GRID ═══════════════════════ */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* LEFT: Filter Sidebar (desktop) */}
            <aside className="hidden lg:block w-[270px] shrink-0">
              <div className="bg-white rounded-xl border border-ivory-dark p-5 shadow-sm">
                <FilterSidebar
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedPurpose={selectedPurpose}
                  setSelectedPurpose={setSelectedPurpose}
                  onClear={clearFilters}
                />
              </div>
            </aside>

            {/* RIGHT: Services Grid */}
            <div className="flex-1 min-w-0">
              {/* Top Bar: Search + Filter button (mobile) + sort */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Puja or Ritual..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-ivory-dark rounded-lg text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-saffron text-sm"
                  />
                </div>

                {/* Mobile filter button */}
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-ivory-dark rounded-lg text-sm font-medium text-charcoal hover:border-maroon transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filter
                </button>
              </div>

              {/* Results info */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg md:text-xl font-bold text-maroon">
                  All Puja Services
                  <span className="text-charcoal-light font-normal text-sm ml-2">
                    {filteredServices.length} services found
                  </span>
                </h2>
                <select className="hidden sm:block text-xs bg-white border border-ivory-dark rounded-lg px-3 py-2 text-charcoal focus:outline-none focus:ring-1 focus:ring-saffron">
                  <option>Sort by: Recommended</option>
                  <option>Duration: Short → Long</option>
                  <option>Name: A → Z</option>
                </select>
              </div>

              {/* Service Grid */}
              <AnimatePresence mode="wait">
                {filteredServices.length > 0 ? (
                  <motion.div
                    key={`${selectedCategory}-${selectedPurpose}-${searchQuery}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                  >
                    {filteredServices.map((service, index) => (
                      <motion.div
                        key={service.slug}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.3 }}
                        className="group"
                      >
                        <div className="bg-white rounded-xl border border-ivory-dark overflow-hidden shadow-sm hover:shadow-lg hover:border-maroon/10 transition-all duration-300 h-full flex flex-col">
                          {/* Image */}
                          <div className="relative h-44 bg-gradient-to-br from-maroon/10 via-ivory-dark to-saffron/10 overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <BookOpen className="w-7 h-7 text-maroon/20" />
                            </div>
                            <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm text-maroon text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                              {service.category}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-4 flex flex-col flex-grow">
                            <h3 className="font-serif text-base font-semibold text-maroon mb-1.5 group-hover:text-maroon-light transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-charcoal-light text-xs leading-relaxed mb-3 flex-grow line-clamp-2">
                              {service.shortDescription}
                            </p>

                            <div className="flex items-center gap-2 mb-3 text-[10px] text-charcoal-light">
                              <span className="flex items-center gap-1 bg-ivory-dark px-2 py-0.5 rounded-full">
                                <Clock className="w-2.5 h-2.5" />
                                {service.duration}
                              </span>
                              <span className="flex items-center gap-1 bg-ivory-dark px-2 py-0.5 rounded-full">
                                <Users className="w-2.5 h-2.5" />
                                Family
                              </span>
                            </div>

                            <div className="flex items-center gap-2 pt-3 border-t border-ivory-dark">
                              <Link href={`/poojas/${service.slug}`} className="flex-1">
                                <button className="w-full text-xs font-medium text-maroon border border-maroon/30 hover:bg-maroon/5 px-3 py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                                  Details <ChevronRight className="w-3 h-3" />
                                </button>
                              </Link>
                              <Link href="/contact" className="flex-1">
                                <button className="w-full text-xs font-medium bg-maroon text-white hover:bg-maroon-light px-3 py-2 rounded-lg transition-all">
                                  Book Pandit
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="text-center py-16">
                    <Search className="w-10 h-10 text-charcoal-light/30 mx-auto mb-4" />
                    <h3 className="text-lg font-serif font-semibold text-maroon mb-2">No services found</h3>
                    <p className="text-charcoal-light text-sm mb-4">Try a different search term.</p>
                    <button onClick={clearFilters} className="text-sm text-maroon font-medium hover:text-maroon-light">
                      ← Show all services
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/50 z-50 lg:hidden"
              onClick={() => setMobileFilterOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] max-w-[85vw] bg-white z-50 shadow-2xl p-5 overflow-y-auto lg:hidden"
            >
              <FilterSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedPurpose={selectedPurpose}
                setSelectedPurpose={setSelectedPurpose}
                onClear={clearFilters}
                onClose={() => setMobileFilterOpen(false)}
                isMobile
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══════════════════════ CUSTOM POOJA CTA ═══════════════════════ */}
      <section className="py-12 md:py-16 bg-ivory-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-ivory-dark flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-maroon mb-2">
                Don&apos;t see what you need?
              </h2>
              <p className="text-charcoal-light text-sm leading-relaxed">
                We perform all types of Vedic ceremonies. Tell us your requirements 
                and our experienced pandit will create a customized ceremony for you.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="whitespace-nowrap">
                Request Custom Pooja
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ BOTTOM CTA ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-maroon relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Experience Sacred Blessings?
            </h2>
            <p className="text-white/70 text-base mb-6 max-w-2xl mx-auto">
              Book an experienced pandit today and bring divine grace into your life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact">
                <Button variant="gold" size="lg">
                  Book a Pandit Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/50 text-white hover:bg-white hover:text-maroon"
                >
                  Have Questions? Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
