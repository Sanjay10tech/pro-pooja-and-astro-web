"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Users,
  Award,
  BookOpen,
  Quote,
  MessageCircle,
  Sun,
  Moon,
  Shield,
  User,
  Compass,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageTransition } from "@/components/layout/page-transition";
import { AstrologyServiceCard } from "@/components/astrology-cards/astrology-service-card";
import { WHATSAPP_LINK } from "@/lib/constants";

/* ───────────────────────── DATA ───────────────────────── */

const trustStats = [
  {
    icon: Star,
    value: "15+",
    label: "Years Astrology Practice",
    sub: "Vedic, KP, Vaastu & Numerology",
  },
  {
    icon: BookOpen,
    value: "10+",
    label: "Years Pooja Experience",
    sub: "Traditional Krishna Yajurveda",
  },
  {
    icon: Award,
    value: "MA",
    label: "Astrology Qualification",
    sub: "B.Sc, MBA, PG Jyothir Vaastu, PhD Pursuing",
  },
  {
    icon: Users,
    value: "5",
    label: "Languages",
    sub: "Telugu, Tamil, Kannada, Hindi, English",
  },
];

const astrologyServices = [
  {
    icon: Sun,
    title: "Vedic Astrology",
    description:
      "Traditional Vedic Astrology from family lineage — birth chart, Dasha, Yoga identification and life guidance rooted in the Vedas. 15 years of dedicated practice in Vedic Astrology, learned from grandfather.",
    illustration: "zodiac-wheel" as const,
  },
  {
    icon: Star,
    title: "KP System",
    description:
      "Krishnamurti Paddhati — major expertise in precise house-cusp analysis for accurate predictions on career, marriage and major life events. 15 years of practice in KP System Astrology.",
    illustration: "planetary-orbits" as const,
  },
  {
    icon: Moon,
    title: "Birth Chart Analysis",
    description:
      "Comprehensive Rashi and Navamsha chart preparation with planetary positions and detailed life-area predictions. Backed by 15 years of experience in Vedic and KP Astrology.",
    illustration: "kundli-chart" as const,
  },
  {
    icon: Users,
    title: "Horoscope Matching",
    description:
      "Traditional Ashtakoot Gun Milan with Dosha assessment and relationship compatibility guidance. Expert analysis using 15 years of practice in Vedic Astrology.",
    illustration: "horoscope-match" as const,
  },
  {
    icon: Compass,
    title: "Muhurat Consultation",
    description:
      "Selection of the most auspicious date and time for weddings, business launches, Griha Pravesh and travel. Traditional Vedic principles applied with 15 years of expertise.",
    illustration: "muhurat-clock" as const,
  },
  {
    icon: Shield,
    title: "Name Change Consultation",
    description:
      "Hebrew Pyramid Numerology and astrology-backed name analysis and correction for individuals and businesses. 15 years of practice in Numerology and Vaastu consultation.",
    illustration: "numerology-pyramid" as const,
  },
];

const poojaServices = [
  {
    title: "Gruhapravesha",
    description:
      "Sacred housewarming ceremony to purify your new home and invite divine blessings for a prosperous family life.",
    image: "/images/services/gruhapravesha.webp",
  },
  {
    title: "Sathyanarayana Pooja & Udyapan",
    description:
      "Invoke Lord Vishnu's blessings for prosperity, health and success in all life endeavors.",
    image: "/images/services/sathyanarayana-pooja-udyapan.webp",
  },
  {
    title: "Vaastu Pooja",
    description:
      "Harmonize the five elements in your home or office to attract positive energy and prosperity.",
    image: "/images/services/vaastu-pooja.webp",
  },
  {
    title: "Sudarshana Aradhana",
    description:
      "Powerful prayer to Lord Sudarshana for protection, destruction of negativity and spiritual well-being.",
    image: "/images/services/sudarshana-aradhana.webp",
  },
  {
    title: "Narayana Bali",
    description:
      "Sacred ritual for ancestral peace, freeing souls from suffering and bringing family blessings.",
    image: "/images/services/narayana-bali.webp",
  },
  {
    title: "Sarpa Sanskar",
    description:
      "Remedy for Sarpa Dosha, seeking blessings from serpent deities for protection and prosperity.",
    image: "/images/services/sarpa-sanskar.webp",
  },
  {
    title: "Mahaganapathi Homa",
    description:
      "Sacred fire ritual to Lord Ganesha for removing obstacles and ensuring success in new ventures.",
    image: "/images/services/mahaganapathi-homa.webp",
  },
  {
    title: "Mahamrityunjaya Homa",
    description:
      "Powerful fire ceremony invoking Lord Shiva for health, longevity and liberation from fear of death.",
    image: "/images/services/mahamrityunjaya-homa.webp",
  },
];

const serviceCategories = [
  {
    icon: Star,
    label: "Astrology",
    sub: "Vedic Jyotish Guidance",
    href: "/astrology",
  },
  {
    icon: BookOpen,
    label: "Pooja Services",
    sub: "Sacred Vedic Ceremonies",
    href: "/services",
  },
  {
    icon: Sparkles,
    label: "Homa & Havan",
    sub: "Sacred Fire Rituals",
    href: "/services",
  },
  {
    icon: Compass,
    label: "Vaastu & Numerology",
    sub: "Space & Number Harmony",
    href: "/astrology",
  },
];

const testimonials = [
  {
    name: "Suresh & Kavitha Rao",
    location: "Bangalore",
    text: "R. Anand's birth chart analysis was remarkably accurate. His guidance helped us navigate a difficult period with confidence. The consultation was thorough and his remedies genuinely helped.",
    rating: 5,
    service: "Vedic Astrology",
  },
  {
    name: "Priya Venkataraman",
    location: "Chennai",
    text: "We consulted R. Anand for our Gruhapravesha and it was performed beautifully. His KP astrology insights for the muhurat were precise and the entire ceremony was deeply spiritual.",
    rating: 5,
    service: "Gruhapravesha",
  },
  {
    name: "Arun & Deepa Iyer",
    location: "Hyderabad",
    text: "The horoscope matching for our children's marriage was done with great care and knowledge. R. Anand explained every aspect clearly and we felt completely at ease with his guidance.",
    rating: 5,
    service: "Horoscope Matching",
  },
];

/* ───────────────────────── STAR FIELD COMPONENT ───────────────────────── */

// Deterministic star positions — identical array to astrology/page.tsx to avoid hydration mismatch
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

/* ───────────────────────── ZODIAC WHEEL ───────────────────────── */

const RASHI_SYMBOLS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

function ZodiacWheel() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      className="absolute w-[420px] h-[420px] md:w-[600px] md:h-[600px] pointer-events-none"
      aria-hidden="true"
    >
      {RASHI_SYMBOLS.map((symbol, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const radius = 46; // percent
        return (
          <div
            key={symbol}
            className="absolute text-gold/40 text-base md:text-xl font-serif"
            style={{
              top: `${50 + radius * Math.sin(angle)}%`,
              left: `${50 + radius * Math.cos(angle)}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {symbol}
          </div>
        );
      })}
      {/* Outer ring border */}
      <div className="absolute inset-0 rounded-full border border-gold/15" />
    </motion.div>
  );
}

/* ───────────────────────── ORBITAL RINGS ───────────────────────── */

function OrbitalRings() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute w-[480px] h-[480px] md:w-[680px] md:h-[680px] border border-gold/15 rounded-full"
      />
      {/* Middle ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute w-[340px] h-[340px] md:w-[480px] md:h-[480px] border border-gold/10 rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold/60 rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-gold/30 rounded-full" />
      </motion.div>
      {/* Inner ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-gold/8 rounded-full"
      >
        <div className="absolute top-0 right-1/4 -translate-y-1/2 w-1.5 h-1.5 bg-white/20 rounded-full" />
      </motion.div>
    </div>
  );
}

/* ───────────────────────── HOMEPAGE ───────────────────────── */

export default function HomePage() {
  return (
    <PageTransition>
      {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Deep space gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(184,149,82,0.12) 0%, transparent 60%), linear-gradient(to bottom, #080F20 0%, #101C35 60%, #080F20 100%)",
          }}
        />

        {/* Star field */}
        <StarField />

        {/* Zodiac wheel — centred behind the text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ZodiacWheel />
        </div>

        {/* Orbital rings */}
        <OrbitalRings />

        {/* Subtle vedic pattern overlay */}
        <div className="absolute inset-0 vedic-pattern opacity-[0.04]" />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm border border-gold/20 px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold/90">
                R. Anand — Purohit &amp; Vedic Astrologer
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-text leading-tight mb-6"
            >
              Discover Your Path
              <br />
              <span className="text-gold">Through Vedic Wisdom</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-gold font-medium mb-4"
            >
              15 Years of Dedicated Practice in Vedic Astrology, KP System, Vaastu &amp; Numerology.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="text-sm sm:text-base text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Traditional Vedic Astrology family background with KP System expertise. Sacred Pooja, Homa &amp; Havan services performed with devotion in the tradition of Krishna Yajurveda.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/astrology">
                <Button variant="gold" size="lg">
                  Book Astrology Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-gold/30 text-text hover:bg-gold/10 backdrop-blur-sm"
                >
                  Explore Pooja Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

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
      </section>

      {/* ═══════════════════════ 2. TRUST STATS ═══════════════════════ */}
      <section className="py-10 sm:py-12 md:py-14 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {trustStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-1">
                  {stat.value}
                </div>
                <div className="text-text/80 font-medium text-sm mb-1">{stat.label}</div>
                <div className="text-muted text-xs leading-relaxed">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 3. ASTROLOGY SERVICES ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-background relative overflow-hidden">
        {/* Celestial glow */}
        <div className="celestial-glow absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Vedic Astrology Services"
            subtitle="Ancient wisdom for modern life — personalized guidance for every life question"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {astrologyServices.map((service, index) => (
              <AstrologyServiceCard
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                illustration={service.illustration}
                href="/astrology#services"
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/astrology">
              <Button variant="gold" size="lg">
                View All Astrology Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 4. POOJA SERVICES ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Sacred Pooja Services"
            subtitle="Traditional rituals performed with devotion in the Krishna Yajurveda tradition"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {poojaServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
              >
                <div className="bg-primary border border-secondary hover:border-gold/20 rounded-2xl overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                  {/* Ritual illustration */}
                  <div className="h-36 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`Illustration of ${service.title} ritual`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-serif text-[22px] sm:text-[25px] leading-snug font-semibold text-gold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed flex-grow mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-3 pt-3 border-t border-secondary">
                      <Link href="/services">
                        <Button variant="secondary" size="sm" className="border-gold/30 text-text/80 hover:border-gold/60 hover:text-gold">
                          View Details
                        </Button>
                      </Link>
                      <Link href="/contact" className="ml-auto">
                        <Button variant="gold" size="sm">
                          Book
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="secondary" size="lg" className="border-gold/30 text-text hover:border-gold/60 hover:bg-gold/10">
                View All Pooja Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 5. ABOUT VIDEO ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md md:max-w-2xl rounded-2xl bg-secondary border border-gold/30 relative overflow-hidden">
              <video
                src="/videos/r-anand-about.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-auto block object-cover object-center"
                aria-label="Video of a sacred Vedic fire ritual"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ 6. SERVICE CATEGORIES ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Service Areas"
            subtitle="Comprehensive Vedic guidance for every aspect of your life"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((cat, index) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={cat.href}>
                  <div className="glass-panel rounded-2xl p-6 text-center hover:border-gold/40 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors duration-300">
                      <cat.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-gold mb-1">
                      {cat.label}
                    </h3>
                    <p className="text-muted text-sm">{cat.sub}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 7. TESTIMONIALS ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Clients Say"
            subtitle="Experiences shared by those who have received guidance from R. Anand"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="glass-panel rounded-2xl p-6 md:p-8 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-gold/40 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-muted text-sm leading-relaxed flex-grow mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                      <span className="text-gold font-serif font-bold text-sm">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-text text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted">
                        {testimonial.location} &bull; {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 8. FINAL CTA ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-background relative overflow-hidden">
        {/* Celestial glow */}
        <div className="celestial-glow absolute inset-0 pointer-events-none" />
        <StarField />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles className="w-10 h-10 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text mb-6">
              Begin Your Vedic Journey
            </h2>
            <p className="text-muted text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Seek authentic Vedic guidance from an experienced astrologer and purohit. 
              Clarity, direction, and divine blessings await.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="gold" size="lg">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-gold/30 text-text hover:bg-[#25D366] hover:border-[#25D366] hover:text-white"
                >
                  <MessageCircle className="w-5 h-5" />
                  Talk on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
