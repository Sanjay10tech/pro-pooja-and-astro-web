"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
  MapPin,
  User,
  ChevronDown,
  CalendarDays,
  Sparkles,
  PenLine,
  ArrowUpRight,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";
import { ContactHeroBackground } from "@/components/contact/contact-hero-background";
import { BRAND, WHATSAPP_LINK } from "@/lib/constants";
import {
  contactFormSchema,
  type ContactFormData,
  generateWhatsAppMessage,
} from "@/lib/validations/booking";

const poojaOptions = [
  // Astrology Services
  "Vedic Astrology Consultation",
  "KP Astrology Consultation",
  "Birth Chart Analysis",
  "Horoscope Matching",
  "Birth Time Rectification",
  "Hebrew Pyramid Numerology",
  "Marriage Muhurat Selection",
  "Auspicious Date Selection",
  "Vaastu Consultation",
  // 16 Poojas
  "Gruhapravesha",
  "Sathyanarayana Pooja & Udyapan",
  "Vaastu Pooja",
  "Sudarshana Aradhana",
  "Sarvatobhadra Mandala Aradhana",
  "Adityadi Navagraha Shanti",
  "Nakshatra Shanti",
  "Dushta Janana Nakshatra Shanti",
  "Tripadi Nakshatra Shanti",
  "Narayana Bali",
  "Sarpa Sanskar",
  "Ashlesha Bali Pooja",
  "Navagraha Japa",
  "Mahamrityunjaya Japa",
  "Lakshmi Venkateshwara Kalyanotsava",
  "Girija Kalyanotsava",
  // 10 Homa & Havan
  "Mahaganapathi Homa",
  "Navagraha Homa",
  "Mahamrityunjaya Homa",
  "Lakshmi Narayana Hrudaya Parayana & Homa",
  "Rudra Homa",
  "Aghora Rudra Homa",
  "Mahasudarshana Homa",
  "Rakshoghna Homa",
  "Chandi Parayana & Homa",
  "Ashtavadhana Seva",
  "Other",
];

/* ── Enquiry section styling (presentation only) ── */
const fieldClass =
  "peer w-full rounded-xl border border-gold/15 bg-background/70 py-3 pl-11 pr-4 text-sm text-text placeholder:text-muted/50 transition-all duration-200 hover:border-gold/35 focus:border-gold/70 focus:bg-background focus:outline-none focus:shadow-[0_0_0_3px_rgba(184,149,82,0.16)]";
const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-text/75";
const iconClass =
  "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/55 transition-colors duration-200 peer-focus:text-gold";
const textareaIconClass =
  "pointer-events-none absolute left-4 top-4 h-4 w-4 text-gold/55 transition-colors duration-200 peer-focus:text-gold";
const errorClass = "mt-1.5 text-xs text-red-400";
const sideCardClass =
  "relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-secondary to-primary p-6";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", phone: "", email: "", pooja: "", preferredDate: "", location: "", message: "" },
  });

  const watchedPooja = watch("pooja");
  const watchedDate = watch("preferredDate");
  const watchedName = watch("name");
  const watchedLocation = watch("location");

  const dynamicWhatsAppUrl = `https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    generateWhatsAppMessage({
      pooja: watchedPooja,
      date: watchedDate,
      name: watchedName,
      location: watchedLocation,
    })
  )}`;

  const onSubmit = async (data: ContactFormData) => {
    // In production: submit to API
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageTransition>
        <section className="min-h-[70vh] flex items-center justify-center py-20 bg-background">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center px-4"
          >
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-gold" />
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-3">
              Enquiry Sent Successfully!
            </h1>
            <p className="text-muted mb-8">
              R. Anand&apos;s team will get back to you within 2 hours. For faster response,
              chat with us on WhatsApp.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1da851] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Continue on WhatsApp
              </a>
              <Link
                href="/"
                className="text-sm text-gold hover:text-gold-light transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
        {/* Custom animated celestial background (no images) */}
        <ContactHeroBackground />
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text mb-4">
              Get in Touch
            </h1>
            <p className="text-muted text-base sm:text-lg md:text-xl mb-8 sm:mb-10">
              Reach out to R. Anand for Vedic Astrology consultations, Pooja bookings, or Vaastu guidance.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/talk-to-us">
                <Button variant="gold" size="lg">
                  Book a Service
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-[#25D366]/50 text-text hover:bg-[#25D366] hover:border-[#25D366]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Talk on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ CONTACT INFO CARDS ═══════════════════════ */}
      <section className="py-12 md:py-16 -mt-12 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Phone, label: "Call Us", value: BRAND.phone, href: `tel:${BRAND.phone}` },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat Now", href: WHATSAPP_LINK },
              { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
              { icon: Phone, label: "Consult", value: "Book Now", href: "/talk-to-us" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-secondary border border-gold/20 rounded-xl p-5 text-center hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-xs text-muted mb-1">{item.label}</p>
                <p className="text-sm font-medium text-text group-hover:text-gold transition-colors truncate max-w-full">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FORM + SIDEBAR ═══════════════════════ */}
      <section className="relative py-12 md:py-20 bg-background">
        {/* Section pattern: fine gold dot lattice fading out around the form */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(184,149,82,0.2) 1px, transparent 1.4px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 70% 60% at 30% 45%, black 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 30% 45%, black 0%, transparent 75%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[22px] bg-gradient-to-br from-gold/55 via-gold/10 to-gold/40 p-px shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)]"
              >
                <div className="relative overflow-hidden rounded-[21px] bg-primary px-5 py-7 sm:px-9 sm:py-10">
                  {/* Corner ornaments */}
                  <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 h-5 w-5 rounded-tl-md border-l border-t border-gold/50" />
                  <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 h-5 w-5 rounded-tr-md border-r border-t border-gold/50" />
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 rounded-bl-md border-b border-l border-gold/50" />
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 rounded-br-md border-b border-r border-gold/50" />

                  {/* Slow-turning mandala watermark */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 200 200"
                    fill="none"
                    stroke="#B89552"
                    className="cbg-loop cbg-spin pointer-events-none absolute -right-20 -top-20 h-64 w-64 opacity-[0.12] sm:h-80 sm:w-80"
                  >
                    <circle cx="100" cy="100" r="96" strokeWidth="0.6" strokeDasharray="2 4" />
                    <circle cx="100" cy="100" r="70" strokeWidth="0.6" />
                    {Array.from({ length: 12 }, (_, i) => (
                      <path
                        key={i}
                        d="M100 8 Q112 54 100 100 Q88 54 100 8"
                        strokeWidth="0.6"
                        transform={`rotate(${i * 30} 100 100)`}
                      />
                    ))}
                    <rect x="54" y="54" width="92" height="92" strokeWidth="0.6" />
                    <rect x="54" y="54" width="92" height="92" strokeWidth="0.6" transform="rotate(45 100 100)" />
                  </svg>

                  <div className="relative">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-2">
                  Send Us an Enquiry
                </h2>
                <p className="text-muted">
                  Fill in the details and we&apos;ll get back to you within 2 hours.
                </p>
                <div aria-hidden="true" className="mt-5 mb-8 flex items-center gap-2">
                  <span className="h-px w-12 bg-gradient-to-r from-gold/70 to-gold/20" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                  <span className="h-px flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="c-name" className={labelClass}>
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          id="c-name"
                          {...register("name")}
                          className={fieldClass}
                          placeholder="Your full name"
                        />
                        <User className={iconClass} aria-hidden="true" />
                      </div>
                      {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="c-phone" className={labelClass}>
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          id="c-phone"
                          {...register("phone")}
                          className={fieldClass}
                          placeholder="+91 98765 43210"
                        />
                        <Phone className={iconClass} aria-hidden="true" />
                      </div>
                      {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="c-email" className={labelClass}>
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="c-email"
                        type="email"
                        {...register("email")}
                        className={fieldClass}
                        placeholder="your@email.com"
                      />
                      <Mail className={iconClass} aria-hidden="true" />
                    </div>
                    {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Pooja */}
                    <div>
                      <label htmlFor="c-pooja" className={labelClass}>
                        Select Service *
                      </label>
                      <div className="relative">
                        <select
                          id="c-pooja"
                          {...register("pooja")}
                          className={`${fieldClass} cursor-pointer appearance-none pr-10 [&>option]:bg-primary [&>option]:text-text`}
                        >
                          <option value="">Choose a Service</option>
                          {poojaOptions.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                        <Sparkles className={iconClass} aria-hidden="true" />
                        <ChevronDown
                          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/60 transition-colors duration-200 peer-focus:text-gold"
                          aria-hidden="true"
                        />
                      </div>
                      {errors.pooja && <p className={errorClass}>{errors.pooja.message}</p>}
                    </div>

                    {/* Date */}
                    <div>
                      <label htmlFor="c-date" className={labelClass}>
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          id="c-date"
                          type="date"
                          {...register("preferredDate")}
                          className={`${fieldClass} [color-scheme:dark]`}
                        />
                        <CalendarDays className={iconClass} aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="c-location" className={labelClass}>
                      Location
                    </label>
                    <div className="relative">
                      <input
                        id="c-location"
                        {...register("location")}
                        className={fieldClass}
                        placeholder="Bangalore, Chennai, Mysore..."
                      />
                      <MapPin className={iconClass} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="c-message" className={labelClass}>
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="c-message"
                        rows={4}
                        {...register("message")}
                        className={`${fieldClass} resize-none`}
                        placeholder="Any specific requirements or questions..."
                      />
                      <PenLine className={textareaIconClass} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Submit + WhatsApp */}
                  <div className="flex flex-col sm:flex-row gap-3 border-t border-gold/10 pt-6 mt-2">
                    <Button variant="gold" size="lg" type="submit" className={isSubmitting ? "opacity-70" : ""}>
                      <Send className="w-4 h-4" />
                      {isSubmitting ? "Sending..." : "Send Enquiry"}
                    </Button>
                    <a href={dynamicWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" size="lg" type="button" className="w-full sm:w-auto border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366]">
                        <MessageCircle className="w-4 h-4" />
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </form>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                {/* Working Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={sideCardClass}
                >
                  <div aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/30">
                      <Clock className="w-5 h-5 text-gold" />
                    </span>
                    <h3 className="font-serif text-base font-semibold text-gold">Working Hours</h3>
                  </div>
                  <ul className="space-y-3.5 text-sm">
                    <li className="flex items-baseline gap-3">
                      <span className="text-muted">Monday – Saturday</span>
                      <span aria-hidden="true" className="flex-1 border-b border-dotted border-gold/25" />
                      <span className="font-medium text-text">6:00 AM – 9:00 PM</span>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="text-muted">Sunday</span>
                      <span aria-hidden="true" className="flex-1 border-b border-dotted border-gold/25" />
                      <span className="font-medium text-text">7:00 AM – 7:00 PM</span>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="text-muted">Festival Days</span>
                      <span aria-hidden="true" className="flex-1 border-b border-dotted border-gold/25" />
                      <span className="font-medium text-gold">24/7 Available</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Quick Connect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={sideCardClass}
                >
                  <div aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                  <h3 className="font-serif text-base font-semibold text-gold mb-4">Quick Connect</h3>
                  <div className="space-y-3">
                    <a href={`tel:${BRAND.phone}`} className="group flex items-center gap-3 rounded-xl border border-gold/10 bg-background/40 px-3.5 py-3 transition-all duration-200 hover:border-gold/35 hover:bg-gold/[0.06]">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/25">
                        <Phone className="w-4 h-4 text-gold" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted">Call Now</p>
                        <p className="text-sm font-medium text-text">{BRAND.phone}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-gold/50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" aria-hidden="true" />
                    </a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl border border-[#25D366]/25 bg-[#25D366]/[0.07] px-3.5 py-3 transition-all duration-200 hover:border-[#25D366]/45 hover:bg-[#25D366]/15">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 ring-1 ring-[#25D366]/30">
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted">WhatsApp</p>
                        <p className="text-sm font-medium text-text">Chat Instantly</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#25D366]/60 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#25D366]" aria-hidden="true" />
                    </a>
                    <a href={`mailto:${BRAND.email}`} className="group flex items-center gap-3 rounded-xl border border-gold/10 bg-background/40 px-3.5 py-3 transition-all duration-200 hover:border-gold/35 hover:bg-gold/[0.06]">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/25">
                        <Mail className="w-4 h-4 text-gold" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted">Email</p>
                        <p className="text-sm font-medium text-text [overflow-wrap:anywhere]">{BRAND.email}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-gold/50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>

                {/* Response Guarantee */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/[0.08] via-primary to-primary p-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                      <span
                        aria-hidden="true"
                        className="cbg-loop cbg-spin absolute inset-0 rounded-full border border-dashed border-gold/50"
                        style={{ animationDuration: "40s" }}
                      />
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15">
                        <CheckCircle2 className="w-6 h-6 text-gold" />
                      </span>
                    </span>
                    <div>
                      <p className="text-sm font-medium text-text">Guaranteed Response</p>
                      <p className="text-xs text-muted">Within 2 hours during working hours</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ LOCATION MAP ═══════════════════════ */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Address */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-3">
                  Our Location
                </h2>
                <p className="text-muted mb-6">
                  Visit us or book an in-person consultation in Bangalore.
                </p>
              </div>

              <div className="glass-panel gold-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text mb-2">Address</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      No.137A & 137B, 11th Cross,<br />
                      Vishnupriya Nilaya, 1st Floor,<br />
                      Shirdi Saibaba Layout,<br />
                      Vidyamanya Nagar, Andrahalli,<br />
                      Bangalore – 560091
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Vishnupriya+Nilaya,+Shirdi+Saibaba+Layout,+Vidyamanya+Nagar,+Andrahalli,+Bangalore+560091"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-gold text-sm hover:text-gold-light transition-colors"
                    >
                      Get Directions
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
              className="w-full"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gold/20">
                <iframe
                  src="https://www.google.com/maps?q=Vishnupriya+Nilaya,+Shirdi+Saibaba+Layout,+Vidyamanya+Nagar,+Andrahalli,+Bangalore+560091&output=embed"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="R. Anand Location in Bangalore"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ LOCATION CALLOUT ═══════════════════════ */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel gold-border rounded-2xl p-8 md:p-12"
          >
            <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-serif font-bold text-gold mb-3">
              Serving Bangalore &amp; South India
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
              R. Anand offers both in-person ceremonies at your location and online consultations for Vedic Astrology, Vaastu, and Numerology — serving families across Bangalore, Karnataka, and South India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="gold" size="md">
                  <MessageCircle className="w-4 h-4" />
                  Discuss on WhatsApp
                </Button>
              </a>
              <Link href="/astrology">
                <Button variant="secondary" size="md">
                  View Online Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
