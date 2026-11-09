"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Heart,
  Shield,
  Flame,
  Users,
  Calendar,
  Award,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";

/* ───────────────────────── DATA ───────────────────────── */

const timeline = [
  {
    title: "Early Learning from Grandfather",
    description:
      "My journey into Vedic wisdom began at home, under the guidance of my grandfather — a dedicated practitioner of the Krishna Yajurveda tradition. This early exposure instilled in me a deep reverence for authentic Vedic rituals and the spiritual sciences of Jyotisha.",
    highlight: "Roots in Vedic tradition",
  },
  {
    title: "Academic Foundation — B.Sc. & MBA",
    description:
      "I pursued formal education in science (B.Sc.) and business management (MBA in Marketing), developing analytical and communication skills that complement my spiritual practice. This combination of modern education and traditional knowledge shapes my approach to consultations.",
    highlight: "Structured analytical approach",
  },
  {
    title: "10 Years Sales & Marketing Experience",
    description:
      "A decade of professional experience in Sales and Marketing across diverse organizations equipped me with strong communication, client relationship management, and analytical thinking skills. This corporate background enhances my ability to understand client needs, explain complex astrological concepts clearly, and provide practical, solution-oriented guidance.",
    highlight: "Professional communication excellence",
  },
  {
    title: "Formal Training — MA in Astrology",
    description:
      "Pursuing a Master of Arts in Astrology provided me with rigorous academic training in classical Jyotisha texts, chart analysis techniques, and predictive methods. This formal study deepened my understanding of Vedic astrological principles.",
    highlight: "MA in Astrology",
  },
  {
    title: "Jyothir Vaastu Specialisation",
    description:
      "My PG Diploma in Jyothir Vaastu enabled me to integrate Vedic astrology with spatial science. I now offer comprehensive Vaastu consultations for homes, offices, and commercial properties — blending planetary science with directional harmonics.",
    highlight: "PG Diploma in Jyothir Vaastu",
  },
  {
    title: "15 Years of Astrology Practice",
    description:
      "Over 15 years of dedicated practice in Vedic Astrology, KP System of Astrology, Jyothir Vaastu, and Hebrew Pyramid Numerology has enabled me to guide individuals and families through major life decisions with accuracy and compassion. My KP System specialization offers precise, time-bound predictions that complement traditional Vedic analysis.",
    highlight: "15 years — KP System specialist",
  },
  {
    title: "10 Years Performing Poojas & Homas",
    description:
      "For over 10 years, I have performed sacred Pooja and Homa rituals according to the Krishna Yajurveda tradition for families across Karnataka and South India. Each ceremony is an opportunity to connect individuals with divine grace.",
    highlight: "Traditional ritual services",
  },
  {
    title: "PhD Research in Astrology (Ongoing)",
    description:
      "Pursuing a PhD in Astrology reflects my commitment to advancing this sacred science beyond mere practice. My research explores the intersections of classical Jyotisha texts with contemporary applications — contributing to scholarly understanding of Vedic wisdom.",
    highlight: "PhD in Astrology — Ongoing",
  },
];

const values = [
  {
    icon: BookOpen,
    title: "Tradition",
    description:
      "Every ritual follows the exact procedures of the Krishna Yajurveda tradition. Authenticity is never compromised.",
    sanskrit: "परम्परा",
  },
  {
    icon: Shield,
    title: "Discipline",
    description:
      "Strict adherence to spiritual discipline — from personal sadhana to precise execution of every mantra and ritual step.",
    sanskrit: "अनुशासन",
  },
  {
    icon: Flame,
    title: "Devotion",
    description:
      "Bhakti drives everything. Each ceremony is performed not as a service, but as an offering to the divine.",
    sanskrit: "भक्ति",
  },
  {
    icon: Heart,
    title: "Authenticity",
    description:
      "No modern dilutions. Pure, authentic Vedic rituals and astrological guidance as the ancients intended.",
    sanskrit: "प्रामाणिकता",
  },
];

const experienceStats = [
  { value: "15+", label: "Years Astrology Practice", icon: Star },
  { value: "10+", label: "Years Pooja & Homa", icon: Calendar },
  { value: "10+", label: "Years Sales/Marketing", icon: Users },
  { value: "4", label: "Academic Degrees", icon: Award },
  { value: "KP", label: "System Specialist", icon: Sparkles },
  { value: "PhD", label: "Research Ongoing", icon: Heart },
];

const photoStory: { title: string; aspect: string; image: string }[] = [
  { title: "Sacred Ceremony", aspect: "wide", image: "/images/moment-1.jpg" },
  { title: "Vedic Rituals", aspect: "wide", image: "/images/moment-2.jpg" },
  { title: "Divine Blessings", aspect: "wide", image: "/images/moment-3.jpg" },
];

/* ───────────────────────── PAGE ───────────────────────── */

export default function MyJourneyPage() {
  return (
    <PageTransition>
      {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
      <section className="relative min-h-[520px] md:min-h-[560px] flex items-center overflow-hidden">
        {/* Dark Background Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary to-background" />

        {/* Celestial glow */}
        <div className="absolute inset-0 celestial-glow" />

        {/* Subtle Vedic Pattern */}
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />

        {/* Pandit Image — Right Side (Desktop/Tablet) */}
        <div className="absolute top-0 right-0 bottom-0 w-[45%] lg:w-[40%] hidden md:block">
          <img
            src="/images/pandit-manoj.jpg"
            alt="R. Anand — Purohit and Vedic Astrologer"
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: "center 20%" }}
          />
          {/* Left fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          {/* Top fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
          {/* Gold atmospheric tint */}
          <div className="absolute inset-0 bg-gold/5" />
        </div>

        {/* Mobile: Pandit as subtle background */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="/images/pandit-manoj.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        </div>

        {/* Hero Content — Left Side */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl lg:max-w-lg"
          >
            {/* Name Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm border border-gold/25 px-5 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold text-gold">R. Anand</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text leading-[1.1] mb-5">
              My Journey
            </h1>
            <p className="text-base md:text-lg text-text/75 leading-relaxed max-w-md">
              A journey rooted in devotion, Vedic wisdom, and 15 years of astrological and
              purohit service to families across South India.
            </p>

            {/* Languages */}
            <p className="text-sm text-gold/80 mt-4">
              <span className="text-text/60 font-medium">Languages:</span>{" "}
              Telugu, Tamil, Kannada, Hindi, English
            </p>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-10 flex items-center gap-2 text-text/30"
            >
              <div className="w-5 h-8 border border-text/20 rounded-full flex justify-center pt-1.5">
                <div className="w-1 h-2 bg-text/40 rounded-full" />
              </div>
              <span className="text-xs">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ 2. PERSONAL STORY ═══════════════════════ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Portrait — 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[500px] mx-auto lg:mx-0 lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gold/20">
                <Image
                  src="/images/pandit-story.jpg"
                  alt="R. Anand performing Vedic ceremony"
                  width={1024}
                  height={1024}
                  unoptimized
                  sizes="(min-width: 1024px) 480px, (min-width: 532px) 500px, calc(100vw - 2rem)"
                  className="w-full h-auto block object-contain object-center"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
              {/* Experience badge */}
              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-gold text-background px-5 py-3 rounded-xl shadow-xl">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-xs text-background/70">Years of Practice</p>
              </div>
            </motion.div>

            {/* Story Text — 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
                The Story Behind the Mission
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gold mb-5 leading-tight">
                From Vedic Roots to Trusted Astrologer &amp; Purohit
              </h2>
              <div className="space-y-4 text-text/80 leading-[1.75] text-[15px]">
                <p>
                  My journey into Vedic wisdom began under the guidance of my grandfather, 
                  a dedicated practitioner of the sacred Krishna Yajurveda tradition. Those 
                  early years instilled in me an unshakeable reverence for authentic Vedic 
                  science — both the ritualistic and the astrological dimensions.
                </p>
                <p>
                  Over 15 years of practice in Vedic Astrology, KP System of Astrology, 
                  Jyothir Vaastu, and Hebrew Pyramid Numerology, alongside 10+ years of 
                  performing sacred Pooja and Homa rituals for families across Karnataka and 
                  South India, have shaped my deep understanding of how Vedic wisdom transforms lives.
                </p>
                <p>
                  My 10 years of professional Sales and Marketing experience across various 
                  organizations has uniquely enhanced my consultation practice. This corporate 
                  background strengthened my ability to listen deeply, communicate complex 
                  astrological insights in accessible language, and provide practical, 
                  actionable guidance that resonates with modern life challenges while 
                  remaining rooted in authentic Vedic tradition.
                </p>
                <p>
                  My academic qualifications — B.Sc., MBA (Marketing), MA (Astrology), 
                  PG Diploma in Jyothir Vaastu, and ongoing PhD research in Astrology — 
                  reflect my belief that authentic Vedic science deserves both devoted 
                  practice and scholarly rigour. I serve families across Karnataka and 
                  South India with the same devotion I learned from my grandfather.
                </p>
              </div>

              {/* Highlighted Quote */}
              <div className="mt-7 bg-gold/5 border-l-[3px] border-gold rounded-r-lg px-5 py-4">
                <p className="text-gold font-serif italic text-base md:text-[17px] leading-relaxed">
                  <span className="text-gold text-xl not-italic mr-1">✦</span>
                  &ldquo;Vedic wisdom is not a relic of the past — it is a living science that 
                  continues to guide, heal, and illuminate the lives of those who seek it 
                  with sincerity and faith.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 3. EXPERIENCE STATS ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-2">
              Experience &amp; Qualifications
            </h2>
            <p className="text-muted text-sm">A legacy of learning, practice, and devotion</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {experienceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-panel gold-border rounded-xl p-4 text-center"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-xl font-bold text-text">{stat.value}</p>
                <p className="text-xs text-muted mt-0.5 leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 4. JOURNEY TIMELINE ═══════════════════════ */}
      <section className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
              The Path of Devotion
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gold">
              My Journey Through the Years
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`relative flex items-start gap-6 md:gap-0 mb-16 last:mb-0 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-gold rounded-full border-4 border-secondary shadow-md" />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[45%] ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div className="glass-panel border border-gold/20 hover:border-gold/40 rounded-xl p-6 transition-colors duration-300">
                    <h3 className="font-serif text-xl font-semibold text-gold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <p className="text-gold text-xs font-semibold flex items-center gap-1.5 md:justify-end">
                      <Star className="w-3 h-3" />
                      {item.highlight}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side (desktop) */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 5. VALUES ═══════════════════════ */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 celestial-glow" />
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />
        {/* Decorative */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-gold/10 rounded-full"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text mb-4">
              Values We Live By
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
              These four pillars guide every ceremony, every consultation, and every interaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group"
              >
                <div className="bg-gold/5 backdrop-blur-sm border border-gold/15 rounded-2xl p-6 text-center h-full hover:bg-gold/10 hover:border-gold/30 transition-all duration-300">
                  {/* Sanskrit */}
                  <p className="text-gold/60 text-2xl font-bold mb-3">
                    {value.sanskrit}
                  </p>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-text mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 6. PHOTO STORY ═══════════════════════ */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
              Visual Story
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-text mb-3">
              Moments of Devotion
            </h2>
            <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
              A glimpse into the daily life of spiritual service and sacred ceremonies.
            </p>
          </motion.div>

          {/* Mobile: single column */}
          <div className="flex flex-col gap-3 sm:hidden">
            {photoStory.map((photo, index) => (
              <motion.div
                key={photo.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group"
              >
                <div className="relative rounded-lg overflow-hidden cursor-pointer border border-gold/10">
                  <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-text text-xs font-medium">{photo.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tablet: 2 columns */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-3 items-start">
            <div className="flex flex-col gap-3">
              {photoStory.filter((_, i) => i % 2 === 0).map((photo, index) => (
                <motion.div key={photo.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.4 }} className="group">
                  <div className="relative rounded-lg overflow-hidden cursor-pointer border border-gold/10">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-text text-xs font-medium">{photo.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {photoStory.filter((_, i) => i % 2 === 1).map((photo, index) => (
                <motion.div key={photo.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 + 0.05, duration: 0.4 }} className="group">
                  <div className="relative rounded-lg overflow-hidden cursor-pointer border border-gold/10">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-text text-xs font-medium">{photo.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: 3-4 columns */}
          <div className="hidden lg:grid xl:grid-cols-4 lg:grid-cols-3 gap-4 items-start">
            <div className="flex flex-col gap-4">
              {photoStory.filter((_, i) => i % 4 === 0).map((photo, index) => (
                <motion.div key={photo.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.4 }} className="group">
                  <div className="relative rounded-lg overflow-hidden cursor-pointer border border-gold/10">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-text text-xs font-medium">{photo.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {photoStory.filter((_, i) => i % 4 === 1).map((photo, index) => (
                <motion.div key={photo.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 + 0.05, duration: 0.4 }} className="group">
                  <div className="relative rounded-lg overflow-hidden cursor-pointer border border-gold/10">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-text text-xs font-medium">{photo.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {photoStory.filter((_, i) => i % 4 === 2).map((photo, index) => (
                <motion.div key={photo.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 + 0.1, duration: 0.4 }} className="group">
                  <div className="relative rounded-lg overflow-hidden cursor-pointer border border-gold/10">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-text text-xs font-medium">{photo.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-4 hidden xl:flex">
              {photoStory.filter((_, i) => i % 4 === 3).map((photo, index) => (
                <motion.div key={photo.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 + 0.15, duration: 0.4 }} className="group">
                  <div className="relative rounded-lg overflow-hidden cursor-pointer border border-gold/10">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-text text-xs font-medium">{photo.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 7. FINAL CTA ═══════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 celestial-glow" />
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative Om */}
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-gold text-3xl font-serif">ॐ</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text mb-4 leading-tight">
              Connect with R. Anand
            </h2>
            <p className="text-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you seek astrological guidance, Vedic ceremony services, or Vaastu 
              consultation — R. Anand brings 15 years of authentic practice to your service.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/talk-to-us">
                <Button variant="gold" size="lg">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="secondary"
                  size="lg"
                >
                  Explore Pooja Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
