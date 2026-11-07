"use client";

import { motion } from "framer-motion";
import {
  Clock,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Phone,
  MapPin,
  BookOpen,
  Camera,
  ChevronDown,
  ChevronUp,
  Sparkles,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageTransition } from "@/components/layout/page-transition";
import { getPujaBySlug, PUJA_SERVICES } from "@/lib/puja-data";
import { WHATSAPP_LINK } from "@/lib/constants";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-ivory-dark rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-ivory/50 transition-colors"
      >
        <h3 className="font-serif font-semibold text-maroon text-base pr-4">
          {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-maroon shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-charcoal-light shrink-0" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="px-5 pb-5"
        >
          <p className="text-charcoal-light text-sm leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function PujaDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const puja = getPujaBySlug(slug);

  if (!puja) {
    return (
      <PageTransition>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-maroon mb-4">Pooja Not Found</h1>
            <p className="text-charcoal-light mb-6">
              The pooja you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link href="/services">
              <Button variant="primary">
                <ArrowLeft className="w-4 h-4" />
                Back to All Services
              </Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon-dark to-charcoal" />
        <div className="absolute inset-0 vedic-pattern opacity-5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "All Puja Services", href: "/services" },
              { label: puja.title },
            ]}
            light
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-saffron/20 text-saffron text-sm font-medium px-3 py-1 rounded-full mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                {puja.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {puja.title}
              </h1>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                {puja.shortDescription}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-saffron" />
                  <span className="text-white text-sm">{puja.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-saffron" />
                  <span className="text-white text-sm">Gokarna / Home</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/talk-to-us">
                  <Button variant="gold" size="lg">
                    Book This Pooja
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="border-white/40 text-white hover:bg-white hover:text-maroon"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Ask on WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-maroon/30 via-charcoal/20 to-saffron/10 border border-white/10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white/20" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ OVERVIEW ═══════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-4">
                  About This Ceremony
                </h2>
                <p className="text-charcoal-light text-base leading-relaxed mb-8">
                  {puja.fullDescription}
                </p>

                {/* Suitable For */}
                <div className="bg-saffron/10 border border-saffron/20 rounded-xl p-5 mb-8">
                  <h3 className="font-serif font-semibold text-maroon text-base mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-saffron" />
                    Suitable For
                  </h3>
                  <p className="text-charcoal-light text-sm">{puja.suitableFor}</p>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-6">
                  Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {puja.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 bg-ivory-dark rounded-lg p-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-saffron-dark shrink-0 mt-0.5" />
                      <span className="text-charcoal text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-6">
                  What&apos;s Included
                </h2>
                <div className="bg-white rounded-xl border border-ivory-dark p-6">
                  <ul className="space-y-3">
                    {puja.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-maroon/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-maroon" />
                        </div>
                        <span className="text-charcoal text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Procedure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-6">
                  Ceremony Procedure
                </h2>
                <div className="relative">
                  <div className="absolute left-4 top-3 bottom-3 w-px bg-saffron/30" />
                  <div className="space-y-4">
                    {puja.procedure.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-4 pl-0"
                      >
                        <div className="w-8 h-8 bg-maroon text-white rounded-full flex items-center justify-center shrink-0 text-xs font-bold relative z-10">
                          {index + 1}
                        </div>
                        <span className="text-charcoal text-sm">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Required Samagri */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-4">
                  Required Samagri
                </h2>
                <p className="text-charcoal-light text-sm mb-4">
                  All materials listed below are provided by us. You don&apos;t need to arrange anything separately.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {puja.samagri.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-ivory-dark px-3 py-2 rounded-lg text-xs text-charcoal"
                    >
                      <div className="w-1.5 h-1.5 bg-saffron rounded-full shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ═══════ SIDEBAR ═══════ */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Booking Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-ivory-dark p-6 shadow-sm"
                >
                  <h3 className="font-serif text-lg font-semibold text-maroon mb-4">
                    Book This Pooja
                  </h3>

                  <p className="text-sm text-charcoal-light mb-5">
                    All inclusive • No hidden charges
                  </p>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-charcoal-light flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Duration
                      </span>
                      <span className="text-charcoal font-medium">{puja.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-charcoal-light flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Location
                      </span>
                      <span className="text-charcoal font-medium">Gokarna / Home</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-charcoal-light flex items-center gap-2">
                        <Users className="w-4 h-4" /> Participants
                      </span>
                      <span className="text-charcoal font-medium">Family</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-charcoal-light flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> Samagri
                      </span>
                      <span className="text-charcoal font-medium">Included</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link href="/talk-to-us" className="block">
                      <Button variant="primary" size="lg" className="w-full">
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#1da851] transition-all w-full"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Enquire on WhatsApp
                    </a>
                    <a
                      href="tel:+917899148582"
                      className="flex items-center justify-center gap-2 border border-ivory-dark text-charcoal px-4 py-3 rounded-lg text-sm font-medium hover:border-maroon hover:text-maroon transition-all w-full"
                    >
                      <Phone className="w-4 h-4" />
                      Call to Discuss
                    </a>
                  </div>
                </motion.div>

                {/* Pandit Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl border border-ivory-dark p-6 shadow-sm"
                >
                  <h3 className="font-serif text-base font-semibold text-maroon mb-4">
                    Your Pandit
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-maroon/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-maroon/40" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Experienced Vedic Pandit</p>
                      <p className="text-xs text-charcoal-light">15-25 years experience</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-charcoal-light">
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-saffron fill-saffron" />
                      <span>4.9/5 rating from devotees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-saffron-dark" />
                      <span>Verified & traditionally trained</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-saffron-dark" />
                      <span>Specializes in {puja.category}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ GALLERY ═══════════════════════ */}
      <section className="py-16 md:py-20 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-2">
              Ceremony Gallery
            </h2>
            <p className="text-charcoal-light">
              Glimpses of {puja.title} performed by our pandits
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-maroon/10 via-ivory to-saffron/10 flex items-center justify-center group cursor-pointer"
              >
                <Camera className="w-8 h-8 text-maroon/20 group-hover:scale-110 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-charcoal-light">
              Common questions about {puja.title}
            </p>
          </motion.div>

          <div className="space-y-3">
            {puja.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ BOOKING CTA ═══════════════════════ */}
      <section className="py-20 md:py-24 bg-maroon relative overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Book {puja.title}?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Our experienced pandit will perform this sacred ceremony with complete 
              Vedic authenticity. Book now and experience divine blessings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/talk-to-us">
                <Button variant="gold" size="lg">
                  Book This Pooja
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/50 text-white hover:bg-[#25D366] hover:border-[#25D366]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Talk to Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ OTHER SERVICES ═══════════════════════ */}
      <section className="py-16 md:py-20 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-2">
              Other Popular Services
            </h2>
            <p className="text-charcoal-light">
              Explore more sacred ceremonies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PUJA_SERVICES.filter((s) => s.slug !== puja.slug)
              .slice(0, 3)
              .map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/poojas/${service.slug}`}>
                    <div className="bg-white rounded-xl border border-ivory-dark p-5 hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-medium text-saffron-dark bg-saffron/10 px-2 py-0.5 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-base font-semibold text-maroon mb-1 group-hover:text-maroon-light transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-charcoal-light text-xs leading-relaxed line-clamp-2">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center gap-1 mt-3 text-xs font-medium text-saffron-dark group-hover:text-maroon transition-colors">
                        View Details <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="secondary" size="md">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
