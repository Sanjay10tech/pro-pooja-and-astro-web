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
  Calendar,
  Shield,
  Eye,
  Heart,
  Compass,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";

/* ───────────────────────── DATA ───────────────────────── */

const astrologyServices = [
  {
    icon: Sun,
    title: "Janam Kundli Analysis",
    description:
      "Comprehensive birth chart preparation and detailed analysis of planetary positions, Dashas, Yogas, and life predictions.",
    price: "₹2,100",
    duration: "60 min consultation",
  },
  {
    icon: Heart,
    title: "Kundli Milan (Matchmaking)",
    description:
      "Traditional Ashtakoot Gun Milan with deep compatibility analysis, Dosha assessment, and relationship guidance.",
    price: "₹1,500",
    duration: "45 min consultation",
  },
  {
    icon: Compass,
    title: "Career & Finance Guidance",
    description:
      "Astrological insights on career direction, business timing, financial growth periods, and professional success.",
    price: "₹2,500",
    duration: "60 min consultation",
  },
  {
    icon: Calendar,
    title: "Muhurat Selection",
    description:
      "Selection of the most auspicious date and time for weddings, business launches, travel, and important events.",
    price: "₹1,000",
    duration: "30 min consultation",
  },
  {
    icon: Shield,
    title: "Dosha Nivaran Guidance",
    description:
      "Identification and remedies for Mangal Dosha, Kaal Sarp Dosha, Pitru Dosha, Shani Dosha, and other afflictions.",
    price: "₹3,000",
    duration: "75 min consultation",
  },
  {
    icon: Star,
    title: "Varshphal (Annual Predictions)",
    description:
      "Year-ahead predictions covering all life areas with monthly breakdown, key dates, and personalized guidance.",
    price: "₹1,800",
    duration: "45 min consultation",
  },
];

const whyChoose = [
  {
    icon: Eye,
    title: "Authentic Jyotish Shastra",
    description: "Rooted in ancient Vedic astrology texts — not modern pop astrology or generalized horoscopes.",
  },
  {
    icon: User,
    title: "Experienced Astrologers",
    description: "Our Jyotishis have 20+ years of study and practice in traditional Vedic astrological systems.",
  },
  {
    icon: Shield,
    title: "Actionable Remedies",
    description: "Every consultation provides specific, practical remedies — mantras, gemstones, poojas, and lifestyle guidance.",
  },
  {
    icon: Heart,
    title: "Compassionate Guidance",
    description: "We approach every chart with care and sensitivity. No fear-based predictions — only empowering insights.",
  },
];

/* ───────────────────────── STAR FIELD COMPONENT ───────────────────────── */

function StarField() {
  // Use deterministic positions to avoid hydration mismatch
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
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.3, 1],
          }}
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

/* ───────────────────────── CELESTIAL RING COMPONENT ───────────────────────── */

function CelestialRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-saffron/10 rounded-full"
      />
      {/* Middle ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full"
      >
        {/* Planet markers */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-saffron/60 rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-white/40 rounded-full" />
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-saffron/40 rounded-full" />
      </motion.div>
      {/* Inner ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-saffron/8 rounded-full"
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
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0D0A1A]">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A1A] via-[#1A0F2E] to-maroon-dark" />

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
              className="inline-flex items-center gap-2 bg-saffron/10 backdrop-blur-sm border border-saffron/20 px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-saffron" />
              <span className="text-sm font-medium text-saffron/90">Vedic Jyotish Shastra</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Guidance Written{" "}
              <span className="text-saffron">in the Stars</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
              Discover what the celestial bodies have charted for your life. 
              Our Vedic astrologers use ancient Jyotish wisdom to illuminate your 
              past, present, and the path ahead.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#consultation-form">
                <Button variant="gold" size="lg">
                  Request Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
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
          >
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-saffron/60 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ ZODIAC TICKER ═══════════════════════ */}
      <section className="bg-charcoal py-4 overflow-hidden">
        <div className="zodiac-ticker-track flex whitespace-nowrap">
          {/* First copy */}
          <div className="flex items-center shrink-0">
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♈</span> Mesha (मेष)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♉</span> Vrishabha (वृषभ)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♊</span> Mithuna (मिथुन)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♋</span> Karka (कर्क)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♌</span> Simha (सिंह)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♍</span> Kanya (कन्या)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♎</span> Tula (तुला)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♏</span> Vrushchik (वृश्चिक)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♐</span> Dhanu (धनु)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♑</span> Makara (मकर)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♒</span> Kumbha (कुंभ)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♓</span> Meena (मीन)</span>
          </div>
          {/* Duplicate copy for seamless loop */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♈</span> Mesha (मेष)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♉</span> Vrishabha (वृषभ)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♊</span> Mithuna (मिथुन)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♋</span> Karka (कर्क)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♌</span> Simha (सिंह)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♍</span> Kanya (कन्या)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♎</span> Tula (तुला)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♏</span> Vrushchik (वृश्चिक)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♐</span> Dhanu (धनु)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♑</span> Makara (मकर)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♒</span> Kumbha (कुंभ)</span>
            <span className="flex items-center gap-2 px-6 md:px-8 text-white text-sm md:text-base"><span className="text-lg text-saffron">♓</span> Meena (मीन)</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 2. ASTROLOGY INTRODUCTION ═══════════════════════ */}
      <section className="py-14 sm:py-20 md:py-28">
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
              <div className="max-w-sm mx-auto relative rounded-2xl overflow-hidden shadow-md">
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
              <span className="text-saffron-dark font-medium text-sm uppercase tracking-widest mb-3 block">
                Ancient Wisdom, Timeless Guidance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-6 leading-tight">
                The Science of Vedic Astrology
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Jyotish Shastra — the &ldquo;Science of Light&rdquo; — is one of the oldest 
                  and most sophisticated astrological systems in the world. Rooted in the Vedas, 
                  it maps the positions of celestial bodies at the exact moment of your birth to 
                  reveal the cosmic blueprint of your life.
                </p>
                <p>
                  Unlike superficial sun-sign astrology, Vedic astrology considers the Moon sign 
                  (Rashi), Ascendant (Lagna), planetary periods (Dasha), and the influence of all 
                  nine Grahas to provide deeply personalized and accurate guidance.
                </p>
                <p>
                  Our astrologers carry forward this tradition with decades of study, providing 
                  not just predictions, but actionable remedies rooted in scripture.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 3. BIRTH CHART CONSULTATION ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-ivory-dark relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-saffron-dark font-medium text-sm uppercase tracking-widest mb-3 block">
                Foundation of All Predictions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-6">
                Janam Kundli — Your Cosmic Blueprint
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
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
                    <CheckCircle2 className="w-5 h-5 text-saffron-dark shrink-0 mt-0.5" />
                    <span className="text-charcoal text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <a href="#consultation-form">
                <Button variant="primary" size="lg">
                  Get Your Kundli Prepared
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
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
                {/* North Indian style Kundli shape */}
                <div className="absolute inset-0 border-2 border-maroon/30 rotate-45 bg-white shadow-lg" />
                <div className="absolute inset-8 border border-maroon/20 rotate-45" />
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-ivory-dark rounded-lg px-4 py-2 shadow-sm rotate-0 z-10">
                    <p className="text-maroon font-serif font-bold text-lg">जन्म कुण्डली</p>
                    <p className="text-charcoal-light text-xs text-center">Birth Chart</p>
                  </div>
                </div>
                {/* House numbers */}
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map(
                  (num, i) => {
                    const angle = (i * 30 - 90) * (Math.PI / 180);
                    const radius = 42;
                    return (
                      <div
                        key={num}
                        className="absolute text-xs font-medium text-maroon/50"
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

      {/* ═══════════════════════ 4. HOROSCOPE GUIDANCE ═══════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Moon className="w-10 h-10 text-saffron mx-auto mb-4" />
            <span className="text-saffron-dark font-medium text-sm uppercase tracking-widest mb-3 block">
              Ongoing Guidance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-6">
              Personalized Horoscope Guidance
            </h2>
            <p className="text-charcoal-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Life is not static, and neither are the stars. As planets transit and Dasha 
              periods change, new opportunities and challenges arise. Our ongoing horoscope 
              guidance helps you navigate every phase with confidence and clarity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Monthly Predictions",
                description: "Detailed monthly guidance based on your personal chart and current planetary transits.",
                icon: Calendar,
              },
              {
                title: "Transit Analysis",
                description: "How major planetary movements (Saturn, Jupiter, Rahu) affect your specific chart.",
                icon: Compass,
              },
              {
                title: "Dasha Guidance",
                description: "Navigate Mahadasha and Antardasha periods with targeted advice and remedies.",
                icon: Clock,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-ivory-dark p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-maroon" />
                </div>
                <h3 className="font-serif text-base font-semibold text-maroon mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 5. MUHURAT CONSULTATION ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-maroon relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-5" />
        <StarField />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-saffron font-medium text-sm uppercase tracking-widest mb-3 block">
                Auspicious Timing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Muhurat — The Power of Right Timing
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                In Vedic tradition, the timing of an event determines its outcome. A Muhurat 
                is the selection of the most auspicious moment — when planetary alignments 
                support success, harmony, and divine blessings for your endeavor.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Whether it&apos;s a wedding, business launch, property purchase, or travel — 
                the right Muhurat can mean the difference between struggle and effortless success.
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
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg"
                  >
                    <Star className="w-3 h-3 text-saffron shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
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
                {/* Panchang representation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-saffron/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-6 rounded-full border border-white/10"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-10 h-10 text-saffron/60 mx-auto mb-2" />
                    <p className="text-white/80 font-serif font-semibold text-sm">शुभ मुहूर्त</p>
                    <p className="text-white/40 text-xs mt-1">Auspicious Moment</p>
                  </div>
                </div>
                {/* Time markers */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-3 bg-saffron/30 rounded-full"
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

      {/* ═══════════════════════ 7. SERVICES CARDS ═══════════════════════ */}
      <section id="services" className="py-16 md:py-24 bg-ivory relative overflow-hidden">
        {/* Vedic astrology decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] border border-maroon/[0.04] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[650px] md:h-[650px] border border-saffron/[0.05] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] border border-maroon/[0.03] rounded-full" />
          <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-saffron/20 rounded-full" />
          <div className="absolute top-[70%] right-[20%] w-1 h-1 bg-maroon/15 rounded-full" />
          <div className="absolute bottom-[25%] left-[25%] w-1 h-1 bg-saffron/15 rounded-full" />
          <div className="absolute top-[35%] right-[10%] w-1.5 h-1.5 bg-maroon/10 rounded-full" />
        </div>

        <div className="relative">
          {/* Heading */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-saffron-dark font-medium text-sm uppercase tracking-widest mb-3 block">
                Our Offerings
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-3">
                Astrology Consultation Services
              </h2>
              <p className="text-charcoal-light text-base md:text-lg max-w-2xl mx-auto mb-4">
                Comprehensive Vedic astrology services for every aspect of life
              </p>
              <div className="w-16 h-0.5 bg-saffron mx-auto" />
            </motion.div>
          </div>

          {/* Auto-scrolling carousel */}
          <div className="overflow-hidden">
            <div className="zodiac-ticker-track flex gap-5 py-2" style={{ animationDuration: "22s" }}>
              {/* First set */}
              {astrologyServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl border border-saffron/10 p-5 w-[270px] sm:w-[300px] md:w-[340px] shrink-0 flex flex-col hover:shadow-lg hover:border-saffron/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 border border-saffron/[0.06] rounded-full pointer-events-none" />
                  <div className="absolute -top-3 -right-3 w-16 h-16 border border-maroon/[0.04] rounded-full pointer-events-none" />
                  <div className="relative w-11 h-11 bg-maroon/10 group-hover:bg-maroon rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-105">
                    <service.icon className="w-5 h-5 text-maroon group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-maroon mb-1.5">{service.title}</h3>
                  <p className="text-charcoal-light text-xs leading-relaxed flex-grow mb-3">{service.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-ivory-dark">
                    <span className="text-[10px] text-charcoal-light bg-ivory-dark px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />{service.duration}
                    </span>
                    <Link href="/contact" className="text-xs font-medium text-maroon hover:text-saffron-dark transition-colors">
                      Consult Now →
                    </Link>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {astrologyServices.map((service) => (
                <div
                  key={`dup-${service.title}`}
                  aria-hidden="true"
                  className="bg-white rounded-2xl border border-saffron/10 p-5 w-[270px] sm:w-[300px] md:w-[340px] shrink-0 flex flex-col hover:shadow-lg hover:border-saffron/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 border border-saffron/[0.06] rounded-full pointer-events-none" />
                  <div className="absolute -top-3 -right-3 w-16 h-16 border border-maroon/[0.04] rounded-full pointer-events-none" />
                  <div className="relative w-11 h-11 bg-maroon/10 group-hover:bg-maroon rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-105">
                    <service.icon className="w-5 h-5 text-maroon group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-maroon mb-1.5">{service.title}</h3>
                  <p className="text-charcoal-light text-xs leading-relaxed flex-grow mb-3">{service.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-ivory-dark">
                    <span className="text-[10px] text-charcoal-light bg-ivory-dark px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />{service.duration}
                    </span>
                    <Link href="/contact" className="text-xs font-medium text-maroon hover:text-saffron-dark transition-colors">
                      Consult Now →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 8. WHY CHOOSE US ═══════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-saffron-dark font-medium text-sm uppercase tracking-widest mb-3 block">
              Trust & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-4">
              Why Choose Our Guidance
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
                <div className="w-16 h-16 bg-saffron/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-saffron-dark" />
                </div>
                <h3 className="font-serif text-base font-semibold text-maroon mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="py-14 md:py-18 bg-[#0D0A1A] relative overflow-hidden">
        <StarField />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-8 h-8 text-saffron mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Stars Have a Message for You
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
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
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Phone className="w-5 h-5" />
                  Speak to an Astrologer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
