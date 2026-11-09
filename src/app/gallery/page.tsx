"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Camera, Film, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { PageTransition } from "@/components/layout/page-transition";
import { GalleryHeroBackground } from "@/components/gallery/gallery-hero-background";

/* ───────────────────────── DATA ───────────────────────── */

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  vip: boolean;
  size: "featured" | "large" | "standard";
}

// Signature Collection — cleared on request; new photos will be added here.
// Entry format: { id, src: "/images/gallery/...", title, category: "Signature Collection", vip: true, size: "featured" | "large" | "standard" }
const GALLERY_IMAGES: GalleryImage[] = [];

const sizeHeights = {
  featured: "h-[320px] sm:h-[420px] md:h-[520px] lg:h-[560px]",
  large: "h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px]",
  standard: "h-[220px] sm:h-[260px] md:h-[280px] lg:h-[320px]",
};

interface SacredFilm {
  id: number;
  src: string;
  title: string;
  category: string;
}

// Sacred Films — cleared on request; new videos will be added here.
// Entry format: { id, src: "/videos/...", title, category }
const SACRED_FILMS: SacredFilm[] = [];

/* ───────────────────────── LIGHTBOX ───────────────────────── */

function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const current = images[currentIndex];
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) onNext();
    if (distance < -50) onPrev();
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top */}
      <div className="flex items-center justify-between px-4 md:px-8 py-5 shrink-0">
        <div>
          <p className="text-white/50 text-xs">{currentIndex + 1} / {images.length}</p>
        </div>
        <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Close">
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center relative px-4 min-h-0">
        <button onClick={onPrev} className="absolute left-2 sm:left-3 md:left-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Previous">
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl w-full flex items-center justify-center"
          >
            <div className="relative w-full max-h-[70vh] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl bg-secondary flex items-center justify-center">
              <img
                src={current.src}
                alt={current.title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={onNext} className="absolute right-2 sm:right-3 md:right-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Next">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>
    </motion.div>
  );
}

/* ───────────────────────── GALLERY CARD ───────────────────────── */

function GalleryCard({ image, index, onClick }: { image: GalleryImage; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${image.size === "featured" ? "sm:col-span-2 sm:row-span-2" : image.size === "large" ? "sm:row-span-2" : ""}`}
    >
      <div
        onClick={onClick}
        className={`relative w-full ${sizeHeights[image.size]} rounded-[20px] overflow-hidden cursor-pointer group border border-gold/10 shadow-md hover:shadow-2xl hover:shadow-gold/10 transition-all duration-600`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        role="button"
        tabIndex={0}
        aria-label={`View ${image.title}`}
        onKeyDown={(e) => { if (e.key === "Enter") onClick(); }}
      >
        {/* Image with zoom */}
        <div className="absolute inset-0 group-hover:scale-[1.06] transition-transform duration-[650ms]" style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}>
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.12)] pointer-events-none" />

        {/* Hover dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Golden shimmer sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/12 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-[1400ms] ease-in-out pointer-events-none" />

        {/* Gold corner accent on hover */}
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="w-5 h-5 border-t-2 border-l-2 border-gold/60 rounded-tl-sm" />
        </div>
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="w-5 h-5 border-b-2 border-r-2 border-gold/60 rounded-br-sm" />
        </div>

        {/* View icon */}
        <div className="absolute top-4 right-4 w-9 h-9 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
          <ZoomIn className="w-4 h-4 text-white" />
        </div>

      </div>
    </motion.div>
  );
}

/* ───────────────────────── FILM CARD ───────────────────────── */

function FilmCard({ film, index }: { film: SacredFilm; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative rounded-[20px] overflow-hidden border border-gold/10 shadow-md hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 bg-secondary">
        <video
          className="w-full h-full object-cover bg-secondary"
          controls
          playsInline
          preload="metadata"
        >
          <source src={film.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
}

/* ───────────────────────── EMPTY STATE ───────────────────────── */

function EmptyMedia({ kind }: { kind: "photos" | "films" }) {
  const Icon = kind === "photos" ? Camera : Film;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto max-w-2xl overflow-hidden rounded-[22px] border border-dashed border-gold/30 bg-primary/60 px-6 py-14 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(184,149,82,0.10) 0%, transparent 65%)" }}
      />
      <div className="relative">
        <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center">
          <span
            aria-hidden="true"
            className="cbg-loop cbg-spin absolute inset-0 rounded-full border border-dashed border-gold/40"
            style={{ animationDuration: "40s" }}
          />
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/30">
            <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
          </span>
        </div>
        <p className="font-serif text-2xl text-gold">Coming Soon</p>
        <p className="mt-2 text-sm text-muted">
          {kind === "photos"
            ? "New photographs will be added here shortly."
            : "New films will be added here shortly."}
        </p>
      </div>
    </motion.div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"vip" | "all">("vip");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeTab === "vip"
    ? GALLERY_IMAGES.filter((img) => img.vip)
    : GALLERY_IMAGES.filter((img) => !img.vip);

  const openLightbox = (id: number) => {
    const index = filteredImages.findIndex((img) => img.id === id);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredImages.length;
    });
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredImages.length - 1 : prev - 1;
    });
  }, [filteredImages.length]);

  return (
    <PageTransition>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Custom animated photographic background (no images) */}
        <GalleryHeroBackground />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="relative inline-flex items-center justify-center w-14 h-14 mb-5">
              <div className="absolute inset-0 bg-gold/10 rounded-full" />
              <div className="absolute inset-[-3px] border border-gold/25 rounded-full" />
              <div className="absolute inset-[-8px] border border-gold/[0.08] rounded-full" />
              <Camera className="w-6 h-6 text-gold relative z-10" />
            </div>
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-3">
              <div className="hidden sm:flex items-center gap-1.5">
                <div className="w-1 h-1 bg-gold/40 rotate-45" />
                <div className="w-8 md:w-14 h-px bg-gradient-to-r from-transparent to-gold/40" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">Sacred Moments</h1>
              <div className="hidden sm:flex items-center gap-1.5">
                <div className="w-8 md:w-14 h-px bg-gradient-to-l from-transparent to-gold/40" />
                <div className="w-1 h-1 bg-gold/40 rotate-45" />
              </div>
            </div>
            <p className="text-muted text-sm md:text-base max-w-lg mx-auto mb-5">A glimpse into our pooja ceremonies, traditions and journey.</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
              <div className="w-1.5 h-1.5 bg-gold rotate-45" />
              <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ GALLERY ═══════════════════════ */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-10">
            <button
              onClick={() => setActiveTab("vip")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === "vip" ? "bg-gold text-background shadow-md" : "bg-secondary text-text/90 hover:bg-gold/20"}`}
            >
              Signature Collection
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === "all" ? "bg-gold text-background shadow-md" : "bg-secondary text-text/90 hover:bg-gold/20"}`}
            >
              Sacred Films
            </button>
          </div>

          {/* Editorial Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "all" ? (
                SACRED_FILMS.length === 0 ? (
                  <EmptyMedia kind="films" />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {SACRED_FILMS.map((film, index) => (
                      <FilmCard key={film.id} film={film} index={index} />
                    ))}
                  </div>
                )
              ) : filteredImages.length === 0 ? (
                <EmptyMedia kind="photos" />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4 md:gap-5">
                  {filteredImages.map((image, index) => (
                    <GalleryCard
                      key={image.id}
                      image={image}
                      index={index}
                      onClick={() => openLightbox(image.id)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filteredImages}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
