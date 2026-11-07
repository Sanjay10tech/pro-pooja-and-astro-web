"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
  Star,
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
  "Rudrabhisheka",
  "Maha Ganapati Pooja",
  "Navagraha Shanti Pooja",
  "Pitru Pooja & Shradh",
  "Maha Mrityunjaya Pooja",
  "Satyanarayana Pooja",
  "Maha Havan",
  "Abhishekam",
  "Griha Pravesh",
  "Wedding Ceremony",
  "Astrology Consultation",
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
        <section className="min-h-[70vh] flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center px-4"
          >
            <div className="w-20 h-20 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-saffron-dark" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-maroon mb-3">
              Enquiry Sent Successfully!
            </h1>
            <p className="text-charcoal-light mb-8">
              Our team will get back to you within 2 hours. For faster response, 
              chat with us on WhatsApp.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                Continue on WhatsApp
              </a>
              <Link
                href="/"
                className="text-sm text-maroon hover:text-maroon-light transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon-dark to-charcoal" />
        <div className="absolute inset-0 vedic-pattern opacity-5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Let&apos;s Talk About Your Pooja
            </h1>
            <p className="text-white/70 text-base sm:text-lg md:text-xl mb-8 sm:mb-10">
              Our team is here to help you choose the right pooja and Pandit.
            </p>

            {/* Primary CTAs */}
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
                  className="border-white/40 text-white hover:bg-[#25D366] hover:border-[#25D366]"
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
              { icon: Phone, label: "Call Us", value: BRAND.phone, href: `tel:${BRAND.phone}`, color: "bg-primary/10" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat Now", href: WHATSAPP_LINK, color: "bg-[#25D366]/10" },
              { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}`, color: "bg-gold/10" },
              { icon: Phone, label: "Consult", value: "Book Now", href: "/talk-to-us", color: "bg-gold/10" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl border border-ivory-dark p-5 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className="w-5 h-5 text-maroon" />
                </div>
                <p className="text-xs text-charcoal-light mb-1">{item.label}</p>
                <p className="text-sm font-medium text-charcoal group-hover:text-maroon transition-colors truncate max-w-full">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FORM + SIDEBAR ═══════════════════════ */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-2">
                  Send Us an Enquiry
                </h2>
                <p className="text-charcoal-light mb-8">
                  Fill in the details and we&apos;ll get back to you within 2 hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="c-name" className="block text-sm font-medium text-charcoal mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="c-name"
                        {...register("name")}
                        className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-sm"
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="c-phone" className="block text-sm font-medium text-charcoal mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="c-phone"
                        {...register("phone")}
                        className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-sm"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="c-email" className="block text-sm font-medium text-charcoal mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-sm"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Pooja */}
                    <div>
                      <label htmlFor="c-pooja" className="block text-sm font-medium text-charcoal mb-1.5">
                        Select Pooja *
                      </label>
                      <select
                        id="c-pooja"
                        {...register("pooja")}
                        className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-sm"
                      >
                        <option value="">Choose a Pooja</option>
                        {poojaOptions.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      {errors.pooja && <p className="text-red-500 text-xs mt-1">{errors.pooja.message}</p>}
                    </div>

                    {/* Date */}
                    <div>
                      <label htmlFor="c-date" className="block text-sm font-medium text-charcoal mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        id="c-date"
                        type="date"
                        {...register("preferredDate")}
                        className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="c-location" className="block text-sm font-medium text-charcoal mb-1.5">
                      Location
                    </label>
                    <input
                      id="c-location"
                      {...register("location")}
                      className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-sm"
                      placeholder="Gokarna, Bangalore, Mumbai..."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="c-message" className="block text-sm font-medium text-charcoal mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      rows={4}
                      {...register("message")}
                      className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-sm resize-none"
                      placeholder="Any specific requirements or questions..."
                    />
                  </div>

                  {/* Submit + WhatsApp */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button variant="primary" size="lg" type="submit" className={isSubmitting ? "opacity-70" : ""}>
                      <Send className="w-4 h-4" />
                      {isSubmitting ? "Sending..." : "Send Enquiry"}
                    </Button>
                    <a href={dynamicWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" size="lg" type="button" className="w-full sm:w-auto border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white">
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
                  className="bg-white rounded-xl border border-ivory-dark p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-saffron" />
                    <h3 className="font-serif text-base font-semibold text-maroon">Working Hours</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-charcoal-light">Monday – Saturday</span>
                      <span className="font-medium text-charcoal">6:00 AM – 9:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-charcoal-light">Sunday</span>
                      <span className="font-medium text-charcoal">7:00 AM – 7:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-charcoal-light">Festival Days</span>
                      <span className="font-medium text-saffron-dark">24/7 Available</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Quick Connect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-maroon rounded-xl p-6 text-white"
                >
                  <h3 className="font-serif text-base font-semibold mb-4">Quick Connect</h3>
                  <div className="space-y-3">
                    <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors">
                      <Phone className="w-4 h-4 text-gold" />
                      <div>
                        <p className="text-xs text-white/60">Call Now</p>
                        <p className="text-sm font-medium">{BRAND.phone}</p>
                      </div>
                    </a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366]/20 rounded-lg px-4 py-3 hover:bg-[#25D366]/30 transition-colors">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <div>
                        <p className="text-xs text-white/60">WhatsApp</p>
                        <p className="text-sm font-medium">Chat Instantly</p>
                      </div>
                    </a>
                    <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors">
                      <Mail className="w-4 h-4 text-saffron" />
                      <div>
                        <p className="text-xs text-white/60">Email</p>
                        <p className="text-sm font-medium">{BRAND.email}</p>
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
                  className="bg-saffron/10 border border-saffron/20 rounded-xl p-5 text-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-saffron-dark mx-auto mb-2" />
                  <p className="text-sm font-medium text-charcoal">Guaranteed Response</p>
                  <p className="text-xs text-charcoal-light">Within 2 hours during working hours</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MAP / LOCATION ═══════════════════════ */}
      <section id="map" className="py-16 md:py-20 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-saffron-dark font-medium text-xs uppercase tracking-widest mb-3 block">
                Our Location
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-4">
                Visit Us
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6 text-sm">
                Find us easily and connect with us for authentic Pooja, Homa, Havan 
                and traditional spiritual services.
              </p>

              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-5 h-5 text-saffron mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal text-sm mb-0.5">
                    Gokarna Sarva Poojas – Pandit and Astrologer in Gokarna
                  </p>
                  <p className="text-charcoal-light text-sm">
                    Kotiteertha Road, Nagabeedi, Gokarna – 581326,<br />
                    Tq: Kumata, Dist: U.K., Karnataka
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kotiteertha+Road,+Nagabeedi,+Gokarna+581326,+Kumta,+Uttara+Kannada,+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-maroon text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-maroon-light transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions →
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-maroon text-maroon px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-maroon hover:text-white transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Talk to Us
                </a>
              </div>

              {/* Google Reviews */}
              <div className="mt-8 bg-white rounded-xl border border-ivory-dark p-5">
                <h3 className="font-serif font-semibold text-charcoal text-base mb-2 text-center">
                  Google Reviews
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-saffron fill-saffron" />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-charcoal">4.8</span>
                  <span className="text-sm text-charcoal-light">(179+ reviews)</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kotiteertha+Road,+Nagabeedi,+Gokarna+581326,+Kumta,+Uttara+Kannada,+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-maroon font-medium underline underline-offset-2 hover:text-maroon-light transition-colors"
                >
                  Check our verified Google Reviews
                </a>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-ivory-dark"
            >
              <iframe
                src="https://www.google.com/maps?q=Kotiteertha%20Road%2C%20Nagabeedi%2C%20Gokarna%20581326%2C%20Kumta%2C%20Uttara%20Kannada%2C%20Karnataka&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gokarna Sarva Poojas Location - Gokarna"
                className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
