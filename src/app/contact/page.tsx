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
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";
import { BRAND, WHATSAPP_LINK } from "@/lib/constants";
import {
  contactFormSchema,
  type ContactFormData,
  generateWhatsAppMessage,
} from "@/lib/validations/booking";

const poojaOptions = [
  "Vedic Astrology Consultation",
  "KP Astrology",
  "Birth Chart Analysis",
  "Kundli Milan",
  "Muhurat",
  "Gruhapravesha",
  "Sathyanarayana Pooja",
  "Nakshatra Shanti",
  "Navagraha Japa",
  "Mahamrityunjaya Japa",
  "Mahamrityunjaya Homa",
  "Navagraha Homa",
  "Other",
];

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
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-2">
                  Send Us an Enquiry
                </h2>
                <p className="text-muted mb-8">
                  Fill in the details and we&apos;ll get back to you within 2 hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="c-name" className="block text-sm font-medium text-text mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="c-name"
                        {...register("name")}
                        className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="c-phone" className="block text-sm font-medium text-text mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="c-phone"
                        {...register("phone")}
                        className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="c-email" className="block text-sm font-medium text-text mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Pooja */}
                    <div>
                      <label htmlFor="c-pooja" className="block text-sm font-medium text-text mb-1.5">
                        Select Service *
                      </label>
                      <select
                        id="c-pooja"
                        {...register("pooja")}
                        className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
                      >
                        <option value="">Choose a Service</option>
                        {poojaOptions.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      {errors.pooja && <p className="text-red-500 text-xs mt-1">{errors.pooja.message}</p>}
                    </div>

                    {/* Date */}
                    <div>
                      <label htmlFor="c-date" className="block text-sm font-medium text-text mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        id="c-date"
                        type="date"
                        {...register("preferredDate")}
                        className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="c-location" className="block text-sm font-medium text-text mb-1.5">
                      Location
                    </label>
                    <input
                      id="c-location"
                      {...register("location")}
                      className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
                      placeholder="Bangalore, Chennai, Mysore..."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="c-message" className="block text-sm font-medium text-text mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      rows={4}
                      {...register("message")}
                      className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm resize-none"
                      placeholder="Any specific requirements or questions..."
                    />
                  </div>

                  {/* Submit + WhatsApp */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
                  className="bg-secondary border border-gold/20 rounded-xl p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-gold" />
                    <h3 className="font-serif text-base font-semibold text-gold">Working Hours</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted">Monday – Saturday</span>
                      <span className="font-medium text-text">6:00 AM – 9:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted">Sunday</span>
                      <span className="font-medium text-text">7:00 AM – 7:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted">Festival Days</span>
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
                  className="glass-panel gold-border rounded-xl p-6"
                >
                  <h3 className="font-serif text-base font-semibold text-gold mb-4">Quick Connect</h3>
                  <div className="space-y-3">
                    <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 bg-white/5 border border-gold/10 rounded-lg px-4 py-3 hover:bg-gold/10 hover:border-gold/30 transition-colors">
                      <Phone className="w-4 h-4 text-gold" />
                      <div>
                        <p className="text-xs text-muted">Call Now</p>
                        <p className="text-sm font-medium text-text">{BRAND.phone}</p>
                      </div>
                    </a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg px-4 py-3 hover:bg-[#25D366]/20 transition-colors">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <div>
                        <p className="text-xs text-muted">WhatsApp</p>
                        <p className="text-sm font-medium text-text">Chat Instantly</p>
                      </div>
                    </a>
                    <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 bg-white/5 border border-gold/10 rounded-lg px-4 py-3 hover:bg-gold/10 hover:border-gold/30 transition-colors">
                      <Mail className="w-4 h-4 text-gold" />
                      <div>
                        <p className="text-xs text-muted">Email</p>
                        <p className="text-sm font-medium text-text">{BRAND.email}</p>
                      </div>
                    </a>
                  </div>
                </motion.div>

                {/* Response Guarantee */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gold/5 border border-gold/20 rounded-xl p-5 text-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-sm font-medium text-text">Guaranteed Response</p>
                  <p className="text-xs text-muted">Within 2 hours during working hours</p>
                </motion.div>
              </div>
            </div>
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
              Available Across Karnataka &amp; South India
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
              R. Anand offers both in-person ceremonies at your location and online consultations
              for Vedic Astrology, Vaastu, and Numerology — serving families across South India.
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
