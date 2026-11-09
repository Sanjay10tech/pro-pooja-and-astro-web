"use client";

import Link from "next/link";
import { Phone, Mail, Heart, MessageCircle } from "lucide-react";
import { BRAND, WHATSAPP_LINK } from "@/lib/constants";
import { Logo } from "@/components/ui/logo";

const footerServices = [
  // Featured Poojas
  "Gruhapravesha",
  "Sathyanarayana Pooja & Udyapan",
  "Vaastu Pooja",
  "Sudarshana Aradhana",
  "Sarvatobhadra Mandala Aradhana",
  "Adityadi Navagraha Shanti",
  "Nakshatra Shanti",
  "Narayana Bali",
  "Sarpa Sanskar",
];

const astrologyServices = [
  "Vedic Astrology Consultation",
  "KP Astrology Consultation",
  "Birth Chart Analysis",
  "Horoscope Matching",
  "Birth Time Rectification",
  "Hebrew Pyramid Numerology",
  "Marriage Muhurat Selection",
  "Auspicious Date Selection",
  "Vaastu Consultation",
];

export function Footer() {
  return (
    <footer className="bg-primary text-text" role="contentinfo">
      {/* Gold gradient top border */}
      <div className="h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="flex items-center gap-4">
                <Logo size="xl" showText={false} linked={true} light={true} />
                <div>
                  <p className="font-serif font-bold text-xl md:text-2xl text-gold leading-tight">
                    R. Anand
                  </p>
                  <p className="text-text/70 text-sm mt-1">
                    Purohit &amp; Vedic Astrologer
                  </p>
                </div>
              </div>
            </div>
            <p className="text-text/60 text-sm leading-relaxed mb-6">
              {BRAND.description}
            </p>
            <div className="flex gap-3">
              <a
                href={`tel:${BRAND.phone}`}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-background transition-all duration-300"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-background transition-all duration-300"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pooja Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-gold mb-4">
              Pooja &amp; Homa Services
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-text/60 hover:text-gold transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Astrology Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-gold mb-4">
              Astrology Services
            </h4>
            <ul className="space-y-2.5">
              {astrologyServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/astrology"
                    className="text-text/60 hover:text-gold transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-gold mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="text-text/60 hover:text-gold transition-colors text-sm"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-text/60 hover:text-gold transition-colors text-sm"
                >
                  {BRAND.email}
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1da851] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-text/50 text-sm">
              <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms-and-conditions" className="hover:text-gold transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
