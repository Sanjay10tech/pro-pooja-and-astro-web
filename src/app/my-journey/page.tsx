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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";

/* ───────────────────────── DATA ───────────────────────── */

const timeline = [
  {
    title: "Pashupatinath Devasthan, Nepal",
    description:
      "I have conducted various types of yagas and havans at the Pashupatinath Devasthan in Nepal. These included rituals such as Rugveda Yaga, Laghu Rudra Havan, Shata Chandi Havan, Ganapathi Homa, Sudharshana Yagam, and Chandi Havana.",
    highlight: "International Vedic rituals",
  },
  {
    title: "Kashi Varanasi Temple",
    description:
      "I have had the privilege of visiting and performing Pooja and abhisheka, such as Rudrabhishek to Lord Shiva and Ganga Pooja, at the renowned and illustrious Kashi Varanasi Temple.",
    highlight: "Rudrabhishek & Ganga Pooja",
  },
  {
    title: "Karnataka — Prominent Personalities",
    description:
      "At the residence of MLA Gopalaiah in Kamakshipalya, a Navagraha Pooja and Havan were conducted. In Huliyurdurga, Tumkur, a Shata Chandi Yaga was organized at the Vidya Chowdeshwari Temple.",
    highlight: "Trusted by leaders",
  },
  {
    title: "Bhudihala, Tumkur & Karnataka Media",
    description:
      "At Bhudihala, Tumkur, I participated in sacred Ayuta Chandi Yaga and other rituals with nearly 3,000 Pandits, dedicated to Mahakali, Mahalaxmi, and Chandika Durga Parameswari. I have also conducted Homa, Yaga, Pooja, Land Pooja, and Griha Pravesh ceremonies for prominent personalities in Karnataka, with coverage by Kannada media.",
    highlight: "3,000+ Pandits gathering",
  },
  {
    title: "Dakshin Kashi Gokarna & Mysore",
    description:
      "In revered locations like Dakshin Kashi Gokarna and Mysore Talakaveri Kshetra Shrirangapattana, I conduct Moksh Narayan Bali, Tripindi Shradha, Sarva Prayaschitta, and Tila Homa, each performed with utmost devotion and precision.",
    highlight: "Sacred Kshetra rituals",
  },
  {
    title: "Film Director Shrikant Sharma, Bengaluru",
    description:
      "I had the privilege of conducting sacred Yagas and Poojas for renowned film director Shrikant Sharma in Kanakapura, Bengaluru. These included Ganapati Pratishthapana and consecration ceremonies for Lord Shiva, Subramanya, and Durga, along with special Homas and rituals during various occasions.",
    highlight: "Celebrity ceremonies",
  },
];

const values = [
  {
    icon: BookOpen,
    title: "Tradition",
    description:
      "Every ritual follows the exact procedures laid down in ancient Vedic scriptures. We never take shortcuts or compromise on authenticity.",
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
      "Bhakti drives everything we do. Each ceremony is performed not as a service, but as an offering to the divine.",
    sanskrit: "भक्ति",
  },
  {
    icon: Heart,
    title: "Authenticity",
    description:
      "No modern dilutions. No theatrical performances. Just pure, authentic Vedic rituals as they were meant to be experienced.",
    sanskrit: "प्रामाणिकता",
  },
];

const experienceStats = [
  { value: "28+", label: "Years of Vedic Learning", icon: BookOpen },
  { value: "10,000+", label: "Ceremonies Performed", icon: Calendar },
  { value: "50+", label: "Experienced Pandits", icon: Users },
  { value: "15+", label: "Types of Rituals", icon: Star },
  { value: "5,000+", label: "Families Served", icon: Heart },
  { value: "4.9/5", label: "Devotee Rating", icon: Award },
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f14] via-charcoal to-[#1a0f14]" />
        
        {/* Subtle Vedic Pattern */}
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />

        {/* Pandit Image — Right Side (Desktop/Tablet) */}
        <div className="absolute top-0 right-0 bottom-0 w-[45%] lg:w-[40%] hidden md:block">
          <img
            src="/images/pandit-manoj.jpg"
            alt="Dattatreya Bhat Bhadti"
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: "center 20%" }}
          />
          {/* Left fade — blends image into dark background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f14] via-[#1a0f14]/70 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f14] via-transparent to-transparent" />
          {/* Top fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f14]/40 via-transparent to-transparent" />
          {/* Warm maroon atmospheric tint */}
          <div className="absolute inset-0 bg-maroon/10" />
        </div>

        {/* Mobile: Pandit as subtle background */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="/images/pandit-manoj.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f14] via-[#1a0f14]/80 to-[#1a0f14]/60" />
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
              className="inline-flex items-center gap-2 bg-saffron/15 backdrop-blur-sm border border-saffron/25 px-5 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-saffron" />
              <span className="text-sm font-semibold text-white">Dattatreya Bhat Bhadti</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              My Journey
            </h1>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-md">
              A journey rooted in devotion, tradition and Vedic knowledge — 
              spanning decades of spiritual service to thousands of families.
            </p>

            {/* Languages */}
            <p className="text-sm text-saffron/80 mt-4">
              <span className="text-white/60 font-medium">Languages Known:</span>{" "}
              Kannada, Marathi, Hindi, English, Goa-Konkani, Tamil, Telugu, Tulu, Karwar Konkani
            </p>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-10 flex items-center gap-2 text-white/40"
            >
              <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
                <div className="w-1 h-2 bg-white/50 rounded-full" />
              </div>
              <span className="text-xs">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ 2. PERSONAL STORY ═══════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Portrait — 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative lg:col-span-2"
            >
              <div className="relative aspect-[3/4] max-h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/images/pandit-story.jpg"
                  alt="Dattatreya Bhat Bhadti performing pooja"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-saffron/30 rounded-2xl -z-10" />
              {/* Experience badge */}
              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-maroon text-white px-5 py-3 rounded-xl shadow-xl">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-xs text-white/70">Years of Devotion</p>
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
              <span className="text-saffron-dark font-medium text-sm uppercase tracking-widest mb-3 block">
                The Story Behind the Mission
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-maroon mb-5 leading-tight">
                From 10+ Years of Devotion to a Trusted Purohit
              </h2>
              <div className="space-y-4 text-charcoal leading-[1.75] text-[15px]">
                <p>
                  I have over 10 years of experience in performing Pooja, Homa, and Havan, 
                  with a deep connection to the sacred traditions of Gokarna. I have been 
                  performing these rituals daily at the renowned Gokarna Mahabaleshwaram Temple, 
                  known as South Kashi, following authentic Vedic practices with devotion and sincerity.
                </p>
                <p>
                  My journey as a Purohit has been shaped by Vedic knowledge, spiritual discipline, 
                  and years of dedicated practice. With every ceremony, I strive to preserve the 
                  sanctity of our ancient traditions while making the experience meaningful and 
                  accessible for every devotee.
                </p>
                <p>
                  Over the years, my journey has taken me beyond Gokarna, giving me the opportunity 
                  to perform sacred rituals and ceremonies across different parts of India. These 
                  experiences have enriched my knowledge of diverse Vedic traditions and strengthened 
                  my commitment to serving devotees with sincerity.
                </p>
              </div>

              {/* Highlighted Quote */}
              <div className="mt-7 bg-ivory border-l-[3px] border-saffron rounded-r-lg px-5 py-4">
                <p className="text-maroon font-serif italic text-base md:text-[17px] leading-relaxed">
                  <span className="text-saffron text-xl not-italic mr-1">✦</span>
                  &ldquo;My purpose is simple — to preserve our sacred traditions and help every 
                  devotee experience them with faith, authenticity, and devotion.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 3. JOURNEY TIMELINE ═══════════════════════ */}
      <section className="py-20 md:py-32 bg-ivory-dark relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 vedic-pattern opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-saffron-dark font-medium text-sm uppercase tracking-widest mb-3 block">
              The Path of Devotion
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-maroon">
              My Journey Through the Years
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-maroon/40 via-saffron/40 to-maroon/40" />

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
                  <div className="w-4 h-4 bg-saffron rounded-full border-4 border-ivory-dark shadow-md" />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[45%] ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-ivory-dark hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-serif text-xl font-semibold text-maroon mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-light text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <p className="text-saffron-dark text-xs font-semibold flex items-center gap-1.5 md:justify-end">
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

      {/* ═══════════════════════ 4. VALUES ═══════════════════════ */}
      <section className="py-20 md:py-32 bg-maroon relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-5" />
        {/* Decorative */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-saffron/10 rounded-full"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-saffron font-medium text-sm uppercase tracking-widest mb-3 block">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Values We Live By
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
              These four pillars guide every ceremony, every interaction, and every moment of our service.
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
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center h-full hover:bg-white/10 transition-all duration-300">
                  {/* Sanskrit */}
                  <p className="text-saffron/60 text-2xl font-bold mb-3">
                    {value.sanskrit}
                  </p>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-saffron/30 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-saffron" />
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 6. PHOTO STORY ═══════════════════════ */}
      <section className="py-16 md:py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-saffron font-medium text-sm uppercase tracking-widest mb-3 block">
              Visual Story
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Moments of Devotion
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
              A glimpse into the daily life of spiritual service and sacred ceremonies.
            </p>
          </motion.div>

          {/* Masonry Gallery — manual column distribution for true masonry */}
          {/* Desktop: 4 cols | Laptop: 3 cols | Tablet: 2 cols | Mobile: 1 col */}
          
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
                <div className="relative rounded-lg overflow-hidden cursor-pointer">
                  <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-medium">{photo.title}</p>
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
                  <div className="relative rounded-lg overflow-hidden cursor-pointer">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-white text-xs font-medium">{photo.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {photoStory.filter((_, i) => i % 2 === 1).map((photo, index) => (
                <motion.div key={photo.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 + 0.05, duration: 0.4 }} className="group">
                  <div className="relative rounded-lg overflow-hidden cursor-pointer">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-white text-xs font-medium">{photo.title}</p></div>
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
                  <div className="relative rounded-lg overflow-hidden cursor-pointer">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-white text-xs font-medium">{photo.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {photoStory.filter((_, i) => i % 4 === 1).map((photo, index) => (
                <motion.div key={photo.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 + 0.05, duration: 0.4 }} className="group">
                  <div className="relative rounded-lg overflow-hidden cursor-pointer">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-white text-xs font-medium">{photo.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {photoStory.filter((_, i) => i % 4 === 2).map((photo, index) => (
                <motion.div key={photo.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 + 0.1, duration: 0.4 }} className="group">
                  <div className="relative rounded-lg overflow-hidden cursor-pointer">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-white text-xs font-medium">{photo.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-4 hidden xl:flex">
              {photoStory.filter((_, i) => i % 4 === 3).map((photo, index) => (
                <motion.div key={photo.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 + 0.15, duration: 0.4 }} className="group">
                  <div className="relative rounded-lg overflow-hidden cursor-pointer">
                    <img src={photo.image} alt={photo.title} className="w-full h-auto block group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><p className="text-white text-xs font-medium">{photo.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 7. FINAL CTA ═══════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/images/cta-bg.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-maroon/90" />
        <div className="absolute inset-0 vedic-pattern opacity-10" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative Om */}
            <div className="w-16 h-16 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-saffron text-3xl font-serif">ॐ</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Looking for an Experienced Pandit?
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Let us bring the same devotion, authenticity, and Vedic knowledge 
              to your sacred ceremony. Book a consultation today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/talk-to-us">
                <Button variant="gold" size="lg">
                  Book a Pandit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/50 text-white hover:bg-white hover:text-maroon"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
