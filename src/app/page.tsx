"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Users,
  Calendar,
  Award,
  Sparkles,
  Phone,
  BookOpen,
  MapPin,
  Shield,
  Heart,
  ChevronRight,
  CheckCircle2,
  Quote,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageTransition } from "@/components/layout/page-transition";
import { WHATSAPP_LINK } from "@/lib/constants";

/* ───────────────────────── DATA ───────────────────────── */

const trustStats = [
  { icon: Users, value: "15+", label: "Years of Experience", sub: "in South Kashi's famous Gokarna & Bangalore" },
  { icon: BookOpen, value: "11K+", label: "Pujas Performed", sub: "in different states of India" },
  { icon: Calendar, value: "1K+", label: "Pujas & Havan Knowledge", sub: "like Rigveda yaga, Ganapathi homa etc." },
  { icon: Heart, value: "9+", label: "Languages Known", sub: "Marathi, Kannada, Hindi, English, Telugu etc." },
];

const popularServices = [
  {
    title: "Rudrabhisheka",
    description: "Sacred bathing of Shivalinga with holy substances while chanting powerful Rudra mantras for divine blessings.",
    price: "₹5,100",
    image: "/images/rudrabhisheka.jpg",
  },
  {
    title: "Ganapati Pooja",
    description: "Invoke Lord Ganesha's grace to remove obstacles and ensure success in new beginnings and ventures.",
    price: "₹3,100",
    image: "/images/ganapati-pooja.jpg",
  },
  {
    title: "Marriage Puja",
    description: "Complete Vedic wedding rituals performed with authenticity, grace, and spiritual depth for a blessed and harmonious married life.",
    price: "₹21,000",
    image: "/images/marriage-pooja.jpg",
  },
  {
    title: "Udaka Shanti",
    description: "Sacred water purification ceremony invoking divine blessings for peace, prosperity, and protection of the home and family.",
    price: "₹5,500",
    image: "/images/udaka-shanti.jpg",
  },
  {
    title: "Satyanarayana Pooja",
    description: "Invoke Lord Vishnu's blessings for prosperity, health, and success in all your life endeavors.",
    price: "₹4,100",
    image: "/images/satyanarayana-pooja.jpg",
  },
  {
    title: "Griha Pravesh Puja",
    description: "Sacred housewarming ceremony to purify your new home, invite positive energies, and seek blessings for a happy family life.",
    price: "₹7,500",
    image: "/images/griha-pravesh.jpg",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Experienced Purohits",
    description: "Every pandit on our platform is traditionally trained with 10-25 years of experience in Vedic rituals.",
  },
  {
    icon: BookOpen,
    title: "Authentic Vedic Rituals",
    description: "Ceremonies performed exactly as prescribed in ancient scriptures — no shortcuts, no compromises.",
  },
  {
    icon: Shield,
    title: "Transparent Booking",
    description: "Clear pricing, no hidden costs. Know exactly what's included before you book your pooja.",
  },
  {
    icon: Heart,
    title: "Personalised Seva",
    description: "Every ceremony customized to your gotra, nakshatra, and specific spiritual needs.",
  },
];

const howItWorks = [
  { step: "01", title: "Choose Pooja", description: "Browse our comprehensive list of Vedic ceremonies and select the one you need." },
  { step: "02", title: "Choose Pandit", description: "View profiles, experience, and ratings to select the right pandit for your ceremony." },
  { step: "03", title: "Select Date", description: "Pick an auspicious date or let us suggest the best muhurat for your pooja." },
  { step: "04", title: "Confirm Booking", description: "Confirm your booking, make the advance payment, and prepare for divine blessings." },
];

const testimonials = [
  {
    name: "Rajesh & Meera Kulkarni",
    location: "Bangalore",
    text: "The Rudrabhisheka performed by Pandit Raghunath was deeply moving. His chanting was powerful and authentic. Our family felt truly blessed. The entire process from booking to completion was seamless.",
    rating: 5,
    service: "Rudrabhisheka",
  },
  {
    name: "Suresh Hegde",
    location: "Mumbai",
    text: "We traveled from Mumbai to Gokarna for our Pitru Pooja. The arrangements were perfect, the pandit was very knowledgeable, and explained every step. Highly recommend their services.",
    rating: 5,
    service: "Pitru Pooja",
  },
  {
    name: "Priya & Arun Nair",
    location: "Goa",
    text: "Our Griha Pravesh was performed beautifully. Pandit Subrahmanya ji made sure our entire family understood the significance of each ritual. It was a divine experience.",
    rating: 5,
    service: "Griha Pravesh",
  },
];

const galleryPhotos = [
  { id: 1, title: "Rudrabhisheka at Mahabaleshwar", image: "/images/gallery-1.webp" },
  { id: 2, title: "Ganapati Pooja Setup", image: "/images/gallery-2.webp" },
  { id: 3, title: "Sacred Havan Ceremony", image: "/images/gallery-3.webp" },
  { id: 4, title: "Navagraha Pooja Mandal", image: "/images/gallery-4.webp" },
  { id: 5, title: "Wedding Ceremony", image: "/images/gallery-5.webp" },
  { id: 6, title: "Gokarna Beach Temple", image: "/images/gallery-6.webp" },
];

const latestBlogs = [
  {
    title: "The Spiritual Significance of Rudrabhisheka in Gokarna",
    excerpt: "Discover why performing Rudrabhisheka in the sacred land of Gokarna carries special spiritual potency...",
    date: "August 12, 2026",
    readTime: "6 min",
    slug: "#",
  },
  {
    title: "How to Choose the Right Pandit for Your Ceremony",
    excerpt: "Finding an experienced and authentic pandit is crucial for any Vedic ceremony. Here's what to look for...",
    date: "August 5, 2026",
    readTime: "4 min",
    slug: "#",
  },
  {
    title: "Understanding Navagraha Dosha and Its Remedies",
    excerpt: "Learn about the nine planetary influences in your horoscope and the specific poojas that can bring balance...",
    date: "July 28, 2026",
    readTime: "8 min",
    slug: "#",
  },
];

/* ───────────────────────── VIDEO COMPONENT ───────────────────────── */

function VideoSection() {
  return (
    <section className="py-12 md:py-16 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience the Sacred Tradition"
          subtitle="See how our traditional Vedic rituals are performed with devotion and authenticity."
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Video Container - 16:9, always playing, muted, looping */}
          <div className="relative aspect-video bg-charcoal">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/videos/gokarna-pooja.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── HOMEPAGE ───────────────────────── */

export default function HomePage() {
  return (
    <PageTransition>
      {/* ═══════════════════════ 1. HERO SECTION ═══════════════════════ */}
      <section className="relative min-h-[600px] sm:min-h-[650px] md:min-h-[750px] flex items-center justify-center overflow-hidden">
        {/* Background Image — provided hero image */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/images/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center md:object-center"
            style={{ objectPosition: "center 30%" }}
          />
        </motion.div>

        {/* Dark cinematic overlay — maroon-charcoal tint for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(46,42,38,0.55) 0%, rgba(92,22,41,0.35) 50%, rgba(46,42,38,0.65) 100%)",
          }}
        />
        
        {/* Subtle Vedic Pattern */}
        <div className="absolute inset-0 vedic-pattern opacity-[0.06]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 sm:pt-16 pb-16 sm:pb-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-charcoal/40 backdrop-blur-sm border border-saffron/30 px-3 sm:px-5 py-2 rounded-full mb-6 sm:mb-8"
            >
              <Sparkles className="w-4 h-4 text-saffron" />
              <span className="text-sm font-medium text-white/90">
                Trusted by 10,000+ Devotees
              </span>
            </motion.div>

            {/* Logo Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-md"
            >
              Gokarna Sarva Poojas
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg md:text-xl lg:text-2xl text-saffron font-medium mb-4 drop-shadow-sm"
            >
              Authentic Vedic Pooja & Experienced Pandit Seva
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed drop-shadow-sm"
            >
              Find and book experienced Pandits for your sacred ceremonies in Gokarna. 
              Traditional rituals performed with devotion, precision, and spiritual depth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
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
                  className="border-white/50 text-white hover:bg-white hover:text-maroon backdrop-blur-sm"
                >
                  Explore Pooja Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ 3. TRUST STATS ═══════════════════════ */}
      <section className="py-10 sm:py-12 md:py-14 bg-maroon">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-6">
            {trustStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-saffron" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white font-medium text-sm mb-1">{stat.label}</div>
                <div className="text-white/50 text-xs leading-relaxed">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 4. POPULAR POOJA SERVICES ═══════════════════════ */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Popular Pooja Services"
            subtitle="Most sought-after Vedic ceremonies performed by our experienced pandits"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {popularServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
              >
                <div className="bg-white rounded-xl border border-ivory-dark overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-maroon/10 via-ivory-dark to-saffron/10 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center">
                        <BookOpen className="w-7 h-7 text-maroon/40" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-serif text-xl font-semibold text-maroon mb-2 group-hover:text-maroon-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-light text-sm leading-relaxed flex-grow mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-ivory-dark">
                      <Link
                        href="/services"
                        className="text-sm font-medium text-charcoal-light hover:text-maroon transition-colors flex items-center gap-1"
                      >
                        View Details <ChevronRight className="w-3 h-3" />
                      </Link>
                      <Link href="/talk-to-us" className="ml-auto">
                        <Button variant="primary" size="sm">
                          Book Pandit
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="secondary" size="lg">
                View All Pooja Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 5. SERVICE CATEGORIES ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="We provide a range of services"
            subtitle="Seamless and Reverent Puja Services Delivered to Your Doorstep"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {/* Puja */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="group"
            >
              <Link href="/services">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                  <img
                    src="/images/puja-service.jpg"
                    alt="Puja Services"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="text-center"
                    >
                      <div className="w-14 h-14 bg-saffron/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-saffron/40 transition-colors duration-300">
                        <BookOpen className="w-7 h-7 text-saffron" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-serif">Puja</h3>
                      <p className="text-white/70 text-sm mt-1">Sacred Vedic Ceremonies</p>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Havan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <Link href="/services">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                  <img
                    src="/images/havan-service.jpg"
                    alt="Havan Services"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="text-center"
                    >
                      <div className="w-14 h-14 bg-saffron/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-saffron/40 transition-colors duration-300">
                        <Sparkles className="w-7 h-7 text-saffron" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-serif">Havan</h3>
                      <p className="text-white/70 text-sm mt-1">Sacred Fire Rituals</p>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Astrology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link href="/astrology">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                  <img
                    src="/images/astrology-service.jpg"
                    alt="Astrology Services"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="text-center"
                    >
                      <div className="w-14 h-14 bg-saffron/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-saffron/40 transition-colors duration-300">
                        <Star className="w-7 h-7 text-saffron" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-serif">Astrology</h3>
                      <p className="text-white/70 text-sm mt-1">Vedic Jyotish Guidance</p>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* E-Puja */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <Link href="/services">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                  <img
                    src="/images/epuja-service.jpg"
                    alt="E-Puja Services"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="text-center"
                    >
                      <div className="w-14 h-14 bg-saffron/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-saffron/40 transition-colors duration-300">
                        <Phone className="w-7 h-7 text-saffron" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-serif">E-Puja</h3>
                      <p className="text-white/70 text-sm mt-1">Online Pooja Services</p>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 6. VIDEO SECTION ═══════════════════════ */}
      <VideoSection />

      {/* ═══════════════════════ 7. WHY CHOOSE US ═══════════════════════ */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us"
            subtitle="What sets Gokarna Sarva Poojas apart from other services"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="text-center group"
              >
                <div className="w-14 h-14 bg-maroon/10 group-hover:bg-maroon rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-maroon group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-maroon mb-2">
                  {feature.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 8. GOKARNA SECTION ═══════════════════════ */}
      <section className="py-14 md:py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/images/gokarna-bg.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 bg-saffron/20 px-4 py-1.5 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-saffron" />
                <span className="text-sm font-medium text-saffron">Sacred Pooja Seva</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Authentic Pooja Services in Gokarna
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
                Experience traditional Vedic poojas performed with devotion, proper rituals, 
                and authentic spiritual practices.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                From Rudrabhisheka and Ganapati Pooja to special ceremonies and sacred rituals, 
                our experienced Pandits help you perform every pooja with care and tradition.
              </p>
              <Link href="/services">
                <Button variant="gold" size="lg">
                  Explore Pooja Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 9. HOW IT WORKS ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-ivory-dark relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Gokarna Sarva Poojas Works"
            subtitle="A simple and seamless process to book your sacred ceremony"
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {/* Connecting line between cards (desktop only) */}
            <div className="hidden lg:block absolute top-[72px] left-[14%] right-[14%] h-[2px]">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-saffron/60 via-maroon/30 to-saffron/60 origin-left"
              />
            </div>

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-ivory-dark group"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 bg-saffron rounded-full flex items-center justify-center text-charcoal text-xs font-bold shadow-md ring-4 ring-ivory-dark">
                1
              </div>
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-maroon/10 group-hover:bg-maroon/15 rounded-full flex items-center justify-center mx-auto mt-4 mb-4 transition-colors duration-300"
              >
                <Sparkles className="w-7 h-7 text-maroon" />
              </motion.div>
              <h3 className="font-serif text-base font-semibold text-maroon mb-2">
                Choose Your Pooja <span className="text-xs opacity-60">🪔</span>
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Pick a puja according to your preference
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-ivory-dark group"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 bg-saffron rounded-full flex items-center justify-center text-charcoal text-xs font-bold shadow-md ring-4 ring-ivory-dark">
                2
              </div>
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-maroon/10 group-hover:bg-maroon/15 rounded-full flex items-center justify-center mx-auto mt-4 mb-4 transition-colors duration-300"
              >
                <MessageCircle className="w-7 h-7 text-maroon" />
              </motion.div>
              <h3 className="font-serif text-base font-semibold text-maroon mb-2">
                Connect With Your Pandit <span className="text-xs opacity-60">🙏</span>
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Talk to us on WhatsApp for further details
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-ivory-dark group"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 bg-saffron rounded-full flex items-center justify-center text-charcoal text-xs font-bold shadow-md ring-4 ring-ivory-dark">
                3
              </div>
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-maroon/10 group-hover:bg-maroon/15 rounded-full flex items-center justify-center mx-auto mt-4 mb-4 transition-colors duration-300"
              >
                <CheckCircle2 className="w-7 h-7 text-maroon" />
              </motion.div>
              <h3 className="font-serif text-base font-semibold text-maroon mb-2">
                Confirm Your Booking <span className="text-xs opacity-60">✨</span>
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Get your confirmation for booking
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-ivory-dark group"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 bg-saffron rounded-full flex items-center justify-center text-charcoal text-xs font-bold shadow-md ring-4 ring-ivory-dark">
                4
              </div>
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-maroon/10 group-hover:bg-maroon/15 rounded-full flex items-center justify-center mx-auto mt-4 mb-4 transition-colors duration-300"
              >
                <Phone className="w-7 h-7 text-maroon" />
              </motion.div>
              <h3 className="font-serif text-base font-semibold text-maroon mb-2">
                Prepare for Your Pooja <span className="text-xs opacity-60">🌸</span>
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Receive all the information via email, SMS, and WhatsApp
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/talk-to-us">
              <Button variant="primary" size="lg">
                Book Your Puja Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 10. TESTIMONIALS ═══════════════════════ */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Devotees Say"
            subtitle="Real experiences from families who trusted us with their sacred ceremonies"
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
                <div className="bg-white rounded-xl border border-ivory-dark p-6 md:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-saffron/40 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-saffron fill-saffron" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-charcoal-light text-sm leading-relaxed flex-grow mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-ivory-dark">
                    <div className="w-10 h-10 bg-maroon/10 rounded-full flex items-center justify-center">
                      <span className="text-maroon font-serif font-bold text-sm">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-charcoal-light">
                        {testimonial.location} • {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 13. FINAL CTA ═══════════════════════ */}
      <section className="py-14 md:py-20 bg-maroon relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-10" />
        {/* Decorative circles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-saffron/5 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-saffron/5 rounded-full"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles className="w-10 h-10 text-saffron mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Begin Your Sacred Journey
            </h2>
            <p className="text-white/80 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with experienced pandits in Gokarna and bring divine blessings into your life. 
              Your spiritual journey is just one click away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/talk-to-us">
                <Button variant="gold" size="lg">
                  Book a Pandit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/60 text-white hover:bg-[#25D366] hover:border-[#25D366]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Talk to Us on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
