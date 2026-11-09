"use client";

import { motion } from "framer-motion";
import {
  Star,
  Sun,
  Moon,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  User,
  Users,
  Calendar,
  Shield,
  Eye,
  Heart,
  Compass,
  Home,
  Building2,
  Hash,
  Baby,
  Edit3,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";

// Note: Metadata for SEO (should be in layout or parent component for client components)
// Page Title: "Vedic & KP Astrology Services in Bangalore | R. Anand — 15 Years Experience"
// Page Description: "Expert Vedic Astrology and KP System consultations in Bangalore. Birth chart analysis, horoscope matching, birth time rectification, marriage muhurat, and Hebrew Pyramid Numerology. Traditional family background with 15 years of practice."

/* ───────────────────────── DATA ───────────────────────── */

const astrologyServices = [
  {
    icon: Sun,
    title: "Vedic Astrology Consultation",
    description:
      "Traditional birth chart analysis using classical Vedic principles, examining planetary positions, dashas (planetary periods), and transits to provide insights into life patterns, timing of events, and karmic influences.",
  },
  {
    icon: Star,
    title: "KP System of Astrology Consultation",
    description:
      "Krishnamurti Paddhati system offering precise predictions through sub-lord theory and cuspal interlinks. KP Astrology is known for its accuracy in timing events and providing specific yes/no answers to questions. R. Anand specializes in this advanced predictive technique.",
  },
  {
    icon: Moon,
    title: "Birth Chart Analysis (Natal Chart / Kundali)",
    description:
      "Comprehensive natal chart reading examining all 12 houses, planetary placements, aspects, yogas (planetary combinations), and overall chart strength. Analysis covers personality traits, strengths, challenges, career potential, relationships, health indicators, and life purpose.",
  },
  {
    icon: Compass,
    title: "Rotational Chart Analysis (Divisional Charts / Varga Charts)",
    description:
      "Detailed analysis of divisional charts (Navamsa, Dashamsa, Saptamsa, etc.) for deeper insights into specific life areas. Rotational charts reveal hidden strengths, challenges, and nuances not visible in the main birth chart.",
  },
  {
    icon: Eye,
    title: "Horary Chart Analysis (Prasna / Question-Based Astrology)",
    description:
      "Prasna astrology where a chart is cast for the exact moment a question is asked. Provides specific answers to pressing questions about career decisions, relationship queries, property matters, legal issues, and timing of events — even without birth details.",
  },
  {
    icon: Clock,
    title: "Birth Time Rectification (BTR)",
    description:
      "Systematic process of analyzing and refining uncertain or unknown birth times using past life events, physical characteristics, and key milestones. Accurate birth time is essential for precise astrological predictions. R. Anand uses both Vedic and KP methods for rectification.",
  },
  {
    icon: Heart,
    title: "Horoscope Matching (Kundali Milan)",
    description:
      "Traditional Vedic horoscope compatibility analysis for marriage. Uses the Ashtakoot (8-point) system examining Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi compatibility. Also includes analysis of 7th house, Venus, Mars placement (Manglik dosha), and Navamsa chart compatibility.",
  },
  {
    icon: Users,
    title: "Marriage Compatibility Analysis",
    description:
      "In-depth compatibility assessment beyond basic Kundali Milan. Examines emotional compatibility, mental harmony, physical attraction indicators, spiritual alignment, financial stability potential, progeny prospects, and long-term marital happiness indicators using both Vedic and KP systems.",
  },
  {
    icon: Heart,
    title: "Marriage Muhurat Selection",
    description:
      "Selection of auspicious date and time for wedding ceremonies based on bride and groom's birth charts. Traditional Vedic Muhurat analysis considers favorable nakshatras and tithis, planetary positions and transits, avoidance of inauspicious yogas, and Lagna strength at marriage time. Marriage dates are also evaluated using Hebrew Pyramid Numerology principles to support lasting marital harmony.",
  },
  {
    icon: Calendar,
    title: "Auspicious Muhurat for Life Events",
    description:
      "Electional astrology (Muhurta Shastra) to determine favorable timing for house construction muhurat, gruhapravesha muhurat (housewarming ceremony), business/shop opening, vehicle purchase, surgery/medical procedures, education commencement, and travel.",
  },
  {
    icon: Shield,
    title: "Astrological Remedies & Pooja Guidance",
    description:
      "As a Vedic scholar and Purohit performing traditional ceremonies according to Krishna Yajurveda, R. Anand can recommend and perform specific Vedic Pooja remedies based on horoscope analysis: Navagraha Shanti for planetary doshas, specific planet propitiation (Shani, Rahu, Ketu, etc.), Nakshatra Shanti for birth star afflictions, and Dosha Nivaran poojas (Kaal Sarpa, Pitra Dosha, etc.).",
  },
];

const vaastuServices = [
  {
    icon: Home,
    title: "Jyothir Vaastu Consultation",
    description:
      "Specialized Vaastu analysis combining Vedic astrology with traditional Vaastu Shastra principles for holistic space harmony. R. Anand holds a PG Diploma in Jyothir Vaastu and provides expert guidance integrating astrological and Vaastu considerations.",
  },
  {
    icon: Home,
    title: "Residential Vaastu Guidance",
    description:
      "Comprehensive analysis of your home's directions, zones and five-element balance to promote health, prosperity and peace.",
  },
  {
    icon: Building2,
    title: "Commercial Vaastu Guidance",
    description:
      "Optimize your office or business premises for growth, employee productivity and financial success through Vaastu principles.",
  },
  {
    icon: Shield,
    title: "House Construction Guidance",
    description:
      "Vaastu-aligned guidance for plot selection, house orientation, room placement and construction timing.",
  },
  {
    icon: Calendar,
    title: "Gruhapravesha Muhurat",
    description:
      "Determine the most auspicious date and time for your housewarming ceremony for a blessed and prosperous new beginning.",
  },
];

const numerologyServices = [
  {
    icon: Hash,
    title: "Hebrew Pyramid Numerology Consultation",
    description:
      "Specialized numerological system using Hebrew letter values and pyramid calculations for life path analysis, name analysis, destiny number, soul urge, personality number, and compatibility assessment.",
  },
  {
    icon: Baby,
    title: "Newborn Baby Naming",
    description:
      "Name selection based on birth date, time, destiny number, and favorable numerological vibrations. R. Anand's approach considers that the Hebrew Pyramid Ascendant should coincide with the Birth Ascendant for optimal name resonance.",
  },
  {
    icon: Edit3,
    title: "Name Correction",
    description:
      "Analysis of current name vibrations and recommendations for spelling modifications to enhance positive energy, remove obstacles, and align with favorable numerological patterns.",
  },
  {
    icon: User,
    title: "Name Change Consultation",
    description:
      "Complete name transformation recommendations for adults seeking major life changes, career shifts, or remedial purposes. Thorough analysis ensures new name supports life goals and destiny.",
  },
  {
    icon: Heart,
    title: "Marriage Date Numerology",
    description:
      "Hebrew Pyramid Numerology evaluation of wedding dates for numerological compatibility and favorable vibrations for lasting marital harmony. Careful date selection considering both astrological and numerological factors to support marital harmony.",
  },
  {
    icon: Compass,
    title: "Hebrew Pyramid Ascendant Analysis",
    description:
      "Evaluation of the Hebrew Pyramid Ascendant derived from the name, ensuring it harmonizes with the astrological birth ascendant for maximum life support and personal alignment.",
  },
];

const whyChoose = [
  {
    icon: Eye,
    title: "Traditional Family Heritage",
    description:
      "R. Anand belongs to a traditional Vedic Astrology family and learned the fundamentals from his grandfather, continuing a lineage of authentic Jyotish Shastra practice.",
  },
  {
    icon: User,
    title: "15 Years Dedicated Practice",
    description:
      "15 years of specialized practice in Vedic Astrology, KP System, Vaastu, and Hebrew Pyramid Numerology, with ongoing study to expand and update knowledge.",
  },
  {
    icon: Star,
    title: "KP System Expertise",
    description:
      "Major expertise in Krishnamurti Paddhati (KP) Astrology, known for precise predictions and accurate timing of events through advanced sub-lord theory and cuspal analysis.",
  },
  {
    icon: Shield,
    title: "Actionable Remedies & Guidance",
    description:
      "Every consultation provides specific, practical remedies — mantras, gemstones, poojas and lifestyle guidance. As a Vedic scholar and Purohit, R. Anand can perform recommended rituals.",
  },
];

/* ───────────────────────── STAR FIELD COMPONENT ───────────────────────── */

// Deterministic star positions to avoid hydration mismatch
function StarField() {
  const stars = [
    { w: 1.2, t: 8, l: 15, d: 4.2, dl: 0.3 }, { w: 2.1, t: 22, l: 45, d: 5.1, dl: 1.2 },
    { w: 1.5, t: 35, l: 72, d: 3.8, dl: 0.8 }, { w: 1.8, t: 48, l: 28, d: 6.2, dl: 2.1 },
    { w: 1.1, t: 62, l: 85, d: 4.5, dl: 0.5 }, { w: 2.3, t: 75, l: 12, d: 5.8, dl: 1.8 },
    { w: 1.4, t: 88, l: 58, d: 3.5, dl: 2.5 }, { w: 1.9, t: 15, l: 92, d: 4.8, dl: 0.2 },
    { w: 1.3, t: 42, l: 5, d: 5.5, dl: 1.5 }, { w: 2.0, t: 55, l: 38, d: 3.2, dl: 2.8 },
    { w: 1.6, t: 68, l: 65, d: 6.5, dl: 0.7 }, { w: 1.1, t: 82, l: 22, d: 4.1, dl: 1.1 },
    { w: 2.2, t: 5, l: 78, d: 5.3, dl: 2.3 }, { w: 1.7, t: 30, l: 55, d: 3.9, dl: 0.9 },
    { w: 1.4, t: 95, l: 42, d: 4.7, dl: 1.7 }, { w: 1.8, t: 18, l: 33, d: 5.6, dl: 2.6 },
    { w: 1.2, t: 72, l: 8, d: 3.4, dl: 0.4 }, { w: 2.1, t: 38, l: 88, d: 6.1, dl: 1.4 },
    { w: 1.5, t: 58, l: 48, d: 4.4, dl: 2.0 }, { w: 1.9, t: 85, l: 75, d: 5.0, dl: 0.6 },
    { w: 1.3, t: 12, l: 62, d: 3.7, dl: 1.6 }, { w: 2.0, t: 45, l: 18, d: 6.3, dl: 2.4 },
    { w: 1.6, t: 78, l: 95, d: 4.3, dl: 0.1 }, { w: 1.1, t: 25, l: 82, d: 5.4, dl: 1.3 },
    { w: 2.3, t: 92, l: 32, d: 3.6, dl: 2.7 }, { w: 1.4, t: 52, l: 52, d: 4.9, dl: 0.8 },
    { w: 1.8, t: 3, l: 25, d: 5.7, dl: 1.9 }, { w: 1.2, t: 65, l: 42, d: 3.3, dl: 2.2 },
    { w: 2.1, t: 28, l: 68, d: 6.0, dl: 0.5 }, { w: 1.5, t: 80, l: 55, d: 4.6, dl: 1.0 },
    { w: 1.9, t: 40, l: 2, d: 5.2, dl: 2.9 }, { w: 1.3, t: 98, l: 88, d: 3.1, dl: 0.3 },
    { w: 2.0, t: 10, l: 48, d: 6.4, dl: 1.5 }, { w: 1.6, t: 50, l: 75, d: 4.0, dl: 2.1 },
    { w: 1.1, t: 33, l: 15, d: 5.9, dl: 0.7 }, { w: 2.2, t: 70, l: 35, d: 3.5, dl: 1.8 },
    { w: 1.4, t: 88, l: 62, d: 4.8, dl: 2.5 }, { w: 1.7, t: 20, l: 95, d: 5.1, dl: 0.2 },
    { w: 1.2, t: 55, l: 8, d: 6.2, dl: 1.2 }, { w: 2.3, t: 42, l: 72, d: 3.8, dl: 2.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.w}px`,
            height: `${star.w}px`,
            top: `${star.t}%`,
            left: `${star.l}%`,
          }}
          animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.3, 1] }}
          transition={{
            duration: star.d,
            repeat: Infinity,
            delay: star.dl,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ───────────────────────── CELESTIAL RINGS ───────────────────────── */

function CelestialRings() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-gold/15 rounded-full"
      />
      {/* Middle ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-gold/5 rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold/60 rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-white/40 rounded-full" />
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold/40 rounded-full" />
      </motion.div>
      {/* Inner ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-gold/8 rounded-full"
      >
        <div className="absolute top-0 right-1/4 -translate-y-1/2 w-1.5 h-1.5 bg-white/30 rounded-full" />
      </motion.div>
    </div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function AstrologyPage() {
  return (
    <PageTransition>
      {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Deep space gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #080F20 0%, #101C35 50%, #080F20 100%)",
          }}
        />

        {/* Star field */}
        <StarField />

        {/* Celestial orbital rings */}
        <CelestialRings />

        {/* Subtle vedic pattern overlay */}
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm border border-gold/20 px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold/90">Vedic Jyotish Shastra</span>
            </motion.div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text leading-tight mb-6">
              Guidance Written{" "}
              <span className="text-gold">in the Stars</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10">
              Authentic Vedic Astrology, KP System, Vaastu and Numerology consultations by R. Anand — 
              with 15 years of practice in Astrology, Vaastu & Numerology, and a traditional Vedic Astrology family background.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="gold" size="lg">
                  Request Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="#services">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-gold/30 text-text hover:bg-gold/10"
                >
                  View Services
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            aria-hidden="true"
          >
            <div className="w-5 h-8 border border-gold/20 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-gold/60 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ ZODIAC TICKER ═══════════════════════ */}
      <section className="bg-primary py-4 overflow-hidden">
        <div className="zodiac-ticker-track flex whitespace-nowrap">
          {/* First copy */}
          <div className="flex items-center shrink-0">
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♈</span> Mesha (मेष)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♉</span> Vrishabha (वृषभ)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♊</span> Mithuna (मिथुन)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♋</span> Karka (कर्क)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♌</span> Simha (सिंह)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♍</span> Kanya (कन्या)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♎</span> Tula (तुला)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♏</span> Vrushchik (वृश्चिक)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♐</span> Dhanu (धनु)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♑</span> Makara (मकर)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♒</span> Kumbha (कुंभ)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♓</span> Meena (मीन)</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♈</span> Mesha (मेष)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♉</span> Vrishabha (वृषभ)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♊</span> Mithuna (मिथुन)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♋</span> Karka (कर्क)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♌</span> Simha (सिंह)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♍</span> Kanya (कन्या)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♎</span> Tula (तुला)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♏</span> Vrushchik (वृश्चिक)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♐</span> Dhanu (धनु)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♑</span> Makara (मकर)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♒</span> Kumbha (कुंभ)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-text/80 text-sm md:text-base"><span className="text-lg text-gold">♓</span> Meena (मीन)</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 2. INTRO ═══════════════════════ */}
      <section className="py-14 sm:py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="max-w-sm mx-auto relative rounded-2xl overflow-hidden border border-gold/20 shadow-lg">
                <img
                  src="/images/astrology-vedic.jpg"
                  alt="Vedic Astrology"
                  className="w-full h-auto block max-h-[380px] object-contain"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
                R. Anand&apos;s Background
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gold mb-6 leading-tight">
                Traditional Vedic Astrology Heritage
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  R. Anand belongs to a traditional Vedic Astrology family and learned the fundamentals 
                  of Vedic Astrology from his grandfather. This authentic lineage ensures deep-rooted 
                  knowledge of Jyotish Shastra — the &ldquo;Science of Light&rdquo; — one of the oldest 
                  and most sophisticated astrological systems in the world.
                </p>
                <p>
                  With 15 years of dedicated practice in Astrology, Vaastu, and Hebrew Pyramid Numerology, 
                  R. Anand continues to expand and update his knowledge through ongoing study and practice. 
                  He also brings 10 years of Sales and Marketing experience across different organizations, 
                  which enhances his professional communication skills and client-handling approach during consultations.
                </p>
                <p>
                  R. Anand specializes in multiple systems: Vedic Astrology for traditional birth chart analysis, 
                  KP System of Astrology (Krishnamurti Paddhati) for precise predictions and accurate timing, 
                  Jyothir Vaastu (PG Diploma holder) for space harmony, and Hebrew Pyramid Numerology for 
                  name analysis and life path guidance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 3. BIRTH CHART SECTION ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
                Foundation of All Predictions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gold mb-6">
                Janam Kundli — Your Cosmic Blueprint
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Your birth chart (Janam Kundli) is the foundation of all Vedic astrological 
                analysis. It captures the exact positions of all nine planets at the moment you 
                were born, creating a unique celestial map that governs your life journey.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Complete Rashi chart with planetary positions",
                  "Navamsha chart for deeper life analysis",
                  "Dasha periods (past, current, and future)",
                  "Yoga identification for strengths and blessings",
                  "Dosha assessment with severity levels",
                  "Life area predictions — career, health, relationships, wealth",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-text/80 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="gold" size="lg">
                  Get Your Kundli Prepared
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Kundli Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-72 h-72 md:w-80 md:h-80 relative">
                <div className="absolute inset-0 border-2 border-gold/30 rotate-45 bg-primary shadow-lg" />
                <div className="absolute inset-8 border border-gold/20 rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-secondary/80 rounded-lg px-4 py-2 shadow-sm rotate-0 z-10 backdrop-blur-sm">
                    <p className="text-gold font-serif font-bold text-lg">जन्म कुण्डली</p>
                    <p className="text-muted text-xs text-center">Birth Chart</p>
                  </div>
                </div>
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map(
                  (num, i) => {
                    const angle = (i * 30 - 90) * (Math.PI / 180);
                    const radius = 42;
                    return (
                      <div
                        key={num}
                        className="absolute text-xs font-medium text-gold/50"
                        style={{
                          top: `${50 + radius * Math.sin(angle)}%`,
                          left: `${50 + radius * Math.cos(angle)}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {num}
                      </div>
                    );
                  }
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 3A. BIRTH TIME RECTIFICATION (BTR) ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
            <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
              Essential for Accurate Predictions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-gold mb-6">
              Birth Time Rectification (BTR)
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Accurate birth time is the cornerstone of precise astrological predictions. Even a few minutes 
              of difference can significantly alter chart calculations, dashas, and predictions. R. Anand uses 
              systematic methods from both Vedic and KP systems to analyze and refine uncertain or unknown birth times.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Analysis of Major Life Events",
                description: "Review significant life events and their timing to correlate with planetary positions and periods.",
                icon: Calendar,
              },
              {
                title: "Cross-Verification with Dashas",
                description: "Match past events with planetary dashas and transits to narrow down the accurate birth window.",
                icon: CheckCircle2,
              },
              {
                title: "KP Cuspal Sub-Lord Analysis",
                description: "Use KP system's advanced sub-lord theory to refine birth time with high precision.",
                icon: Star,
              },
              {
                title: "Physical & Personality Traits",
                description: "Correlate physical characteristics and personality patterns with ascendant and planetary placements.",
                icon: User,
              },
              {
                title: "Key Milestone Correlation",
                description: "Analyze marriage, education, career milestones, and other major life transitions for timing validation.",
                icon: Compass,
              },
              {
                title: "Iterative Refinement",
                description: "Progressive analysis and adjustment to achieve the most accurate birth time for reliable predictions.",
                icon: Eye,
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass-panel rounded-xl p-6 h-full hover:border-gold/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-gold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button variant="gold" size="lg">
                Request BTR Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 4. HOROSCOPE GUIDANCE ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Moon className="w-10 h-10 text-gold mx-auto mb-4" />
            <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
              Ongoing Guidance
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-gold mb-6">
              Personalized Horoscope Guidance
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              As planets transit and Dasha periods change, new opportunities and challenges arise. 
              Ongoing horoscope guidance helps you navigate every phase with confidence and clarity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Monthly Predictions",
                description:
                  "Detailed monthly guidance based on your personal chart and current planetary transits.",
                icon: Calendar,
              },
              {
                title: "Transit Analysis",
                description:
                  "How major planetary movements (Saturn, Jupiter, Rahu) affect your specific chart.",
                icon: Compass,
              },
              {
                title: "Dasha Guidance",
                description:
                  "Navigate Mahadasha and Antardasha periods with targeted advice and remedies.",
                icon: Clock,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass-panel rounded-xl p-6 text-center hover:border-gold/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-gold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 5. MUHURAT ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-5" />
        <StarField />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
                Auspicious Timing
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-text mb-6">
                Muhurat — The Power of Right Timing
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                In Vedic tradition, the timing of an event determines its outcome. A Muhurat 
                is the selection of the most auspicious moment — when planetary alignments 
                support success, harmony and divine blessings for your endeavor.
              </p>
              <p className="text-muted/80 leading-relaxed mb-8">
                Whether it&apos;s a wedding, business launch, property purchase or travel — 
                the right Muhurat can make the difference between struggle and effortless success.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Wedding Muhurat",
                  "Griha Pravesh",
                  "Business Launch",
                  "Vehicle Purchase",
                  "Travel Dates",
                  "Upanayanam",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 bg-gold/5 border border-gold/10 px-3 py-2 rounded-lg"
                  >
                    <Star className="w-3 h-3 text-gold shrink-0" />
                    <span className="text-text/80 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-gold/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-6 rounded-full border border-gold/10"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-10 h-10 text-gold/60 mx-auto mb-2" />
                    <p className="text-text/80 font-serif font-semibold text-sm">शुभ मुहूर्त</p>
                    <p className="text-muted text-xs mt-1">Auspicious Moment</p>
                  </div>
                </div>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-3 bg-gold/30 rounded-full"
                    style={{
                      top: `${50 - 48 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                      left: `${50 + 48 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 6. ALL 11 ASTROLOGY SERVICES ═══════════════════════ */}
      <section id="services" className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="celestial-glow absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
              Our Offerings
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-gold mb-3">
              Astrology Consultation Services
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-4">
              Comprehensive Vedic astrology services for every aspect of life
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {astrologyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
              >
                <div className="glass-panel rounded-2xl p-6 h-full flex flex-col hover:border-gold/40 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-11 h-11 bg-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-gold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-grow mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="text-xs font-medium text-gold/70 hover:text-gold transition-colors"
                  >
                    Consult Now →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-muted text-sm text-center max-w-3xl mx-auto mt-8 leading-relaxed">
            <strong>Professional Disclaimer:</strong> Consultations provide guidance based on astrological and numerological principles. Results depend on individual karma, free will, and life circumstances. No guaranteed outcomes.
          </p>
        </div>
      </section>

      {/* ═══════════════════════ 7. VAASTU SECTION ═══════════════════════ */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
              Space Harmony
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-gold mb-3">
              Vaastu Shastra Services
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-4">
              Harmonize your living and working spaces with the five elements of nature
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaastuServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
              >
                <div className="glass-panel rounded-2xl p-6 h-full flex flex-col hover:border-gold/40 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-11 h-11 bg-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-gold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-grow mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="text-xs font-medium text-gold/70 hover:text-gold transition-colors"
                  >
                    Consult Now →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 8. NUMEROLOGY SECTION ═══════════════════════ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
              Number Wisdom
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-gold mb-3">
              Numerology Services
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-4">
              Unlock the power of numbers with Hebrew Pyramid Numerology and Vedic-aligned guidance
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {numerologyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
              >
                <div className="glass-panel rounded-2xl p-6 h-full flex flex-col hover:border-gold/40 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-11 h-11 bg-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-gold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-grow mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="text-xs font-medium text-gold/70 hover:text-gold transition-colors"
                  >
                    Consult Now →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 9. WHY CHOOSE US ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-gold font-medium text-sm uppercase tracking-widest mb-3 block">
              Trust &amp; Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-gold mb-4">
              Why Choose R. Anand&apos;s Guidance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-base font-semibold text-gold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-background relative overflow-hidden">
        <StarField />
        <div className="absolute inset-0 celestial-glow pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
              The Stars Have a Message for You
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Don&apos;t let uncertainty guide your decisions. Let ancient Vedic wisdom 
              illuminate the path meant for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="gold" size="lg">
                  Get Your Reading
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-gold/30 text-text hover:bg-gold/10"
                >
                  <Phone className="w-5 h-5" />
                  Speak to R. Anand
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
