"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";
import { BRAND, WHATSAPP_LINK } from "@/lib/constants";
import { generateWhatsAppMessage, generateBookingId } from "@/lib/validations/booking";

/* ───────────────────────── DATA ───────────────────────── */

const poojaOptions = [
  { value: "rudrabhisheka", label: "Rudrabhisheka" },
  { value: "maha-ganapati", label: "Maha Ganapati Pooja" },
  { value: "navagraha", label: "Navagraha Shanti Pooja" },
  { value: "pitru", label: "Pitru Pooja & Shradh" },
  { value: "mrityunjaya", label: "Maha Mrityunjaya Pooja" },
  { value: "satyanarayana", label: "Satyanarayana Pooja" },
  { value: "havan", label: "Maha Havan" },
  { value: "abhishekam", label: "Abhishekam" },
  { value: "griha-pravesh", label: "Griha Pravesh" },
  { value: "wedding", label: "Wedding Ceremony" },
];

const timeSlots = [
  "Early Morning (5–7 AM)",
  "Morning (7–10 AM)",
  "Mid-Day (10 AM–1 PM)",
  "Afternoon (1–4 PM)",
  "Evening (4–7 PM)",
  "Need Muhurat Suggestion",
];

const STEPS = [
  { num: 1, label: "Select Pooja" },
  { num: 2, label: "Date & Time" },
  { num: 3, label: "Your Details" },
  { num: 4, label: "Review" },
  { num: 5, label: "Confirm" },
];

/* ───────────────────────── PAGE ───────────────────────── */

export default function TalkToUsPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pooja: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    location: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bookingId, setBookingId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (step === 1 && !formData.pooja) newErrors.pooja = "Please select a pooja";
    if (step === 2) {
      if (!formData.date) newErrors.date = "Please select a date";
      if (!formData.time) newErrors.time = "Please select a time";
    }
    if (step === 3) {
      if (!formData.name || formData.name.length < 2) newErrors.name = "Please enter your name";
      if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Please enter a valid phone number";
      if (!formData.location) newErrors.location = "Please enter your location";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, 5));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const submitBooking = async () => {
    setIsSubmitting(true);
    const id = generateBookingId();
    setBookingId(id);

    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, bookingId: id }),
      });
    } catch (e) {
      // Silently handle — user still sees confirmation
    }

    setIsSubmitting(false);
    setStep(5);
  };

  const selectedPooja = poojaOptions.find((p) => p.value === formData.pooja);

  const confirmWhatsAppUrl = `https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    generateWhatsAppMessage({
      pooja: selectedPooja?.label,
      date: formData.date,
      name: formData.name,
      location: formData.location,
    })
  )}`;

  return (
    <PageTransition>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative py-12 md:py-16 bg-maroon overflow-hidden">
        <div className="absolute inset-0 vedic-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Book Your Sacred Ceremony
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto">
              Follow these simple steps to book an experienced Pandit for your pooja.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ PROGRESS BAR ═══════════════════════ */}
      <section className="py-6 bg-ivory-dark border-b border-ivory-dark sticky top-16 sm:top-18 md:top-20 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {STEPS.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className={`flex flex-col items-center ${i > 0 ? "ml-2 sm:ml-0" : ""}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      step > s.num
                        ? "bg-saffron text-charcoal"
                        : step === s.num
                        ? "bg-maroon text-white shadow-md"
                        : "bg-ivory-dark border border-ivory-dark text-charcoal-light"
                    }`}
                  >
                    {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                  </div>
                  <span className="text-[9px] sm:text-xs text-charcoal-light mt-1 hidden sm:block">{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`h-0.5 w-4 sm:w-8 md:w-12 mx-1 sm:mx-2 rounded ${step > s.num ? "bg-saffron" : "bg-ivory-dark"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ STEP CONTENT ═══════════════════════ */}
      <section className="py-10 md:py-14 min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {/* STEP 1: SELECT POOJA */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl md:text-2xl font-bold text-maroon mb-2">Select Your Pooja</h2>
                <p className="text-charcoal-light text-sm mb-6">Choose the sacred ceremony you wish to book.</p>
                {errors.pooja && <p className="text-red-500 text-xs mb-3">{errors.pooja}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {poojaOptions.map((pooja) => (
                    <button
                      key={pooja.value}
                      onClick={() => updateField("pooja", pooja.value)}
                      className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        formData.pooja === pooja.value
                          ? "border-maroon bg-maroon/5 shadow-sm"
                          : "border-ivory-dark bg-white hover:border-maroon/30"
                      }`}
                    >
                      <p className="font-medium text-charcoal text-sm">{pooja.label}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: DATE & TIME */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl md:text-2xl font-bold text-maroon mb-2">Select Date & Time</h2>
                <p className="text-charcoal-light text-sm mb-6">When would you like the ceremony performed?</p>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">Preferred Date *</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => updateField("date", e.target.value)}
                      className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-saffron text-sm"
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Time Slot *</label>
                    {errors.time && <p className="text-red-500 text-xs mb-2">{errors.time}</p>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => updateField("time", slot)}
                          className={`p-3 rounded-lg border-2 text-sm transition-all ${
                            formData.time === slot
                              ? "border-maroon bg-maroon/5 text-maroon font-medium"
                              : "border-ivory-dark bg-white text-charcoal hover:border-maroon/30"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: CUSTOMER DETAILS */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl md:text-2xl font-bold text-maroon mb-2">Your Details</h2>
                <p className="text-charcoal-light text-sm mb-6">Tell us about yourself so we can contact you.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
                      <input type="text" value={formData.name} onChange={(e) => updateField("name", e.target.value)} className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-saffron text-sm" placeholder="Your full name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">Phone *</label>
                      <input type="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-saffron text-sm" placeholder="+91 98765 43210" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-saffron text-sm" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">Location *</label>
                    <input type="text" value={formData.location} onChange={(e) => updateField("location", e.target.value)} className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-saffron text-sm" placeholder="Gokarna, Bangalore..." />
                    {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">Special Notes</label>
                    <textarea value={formData.notes} onChange={(e) => updateField("notes", e.target.value)} rows={3} className="w-full px-4 py-3 bg-ivory border border-ivory-dark rounded-lg text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-saffron text-sm resize-none" placeholder="Any special requirements..." />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: REVIEW */}
            {step === 4 && (
              <motion.div key="step4-review" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl md:text-2xl font-bold text-maroon mb-2">Review Your Booking</h2>
                <p className="text-charcoal-light text-sm mb-6">Please confirm all details before submitting.</p>
                <div className="bg-white border border-ivory-dark rounded-2xl overflow-hidden">
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-ivory-dark">
                      <span className="text-sm text-charcoal-light">Pooja</span>
                      <span className="text-sm font-medium text-charcoal">{selectedPooja?.label}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-ivory-dark">
                      <span className="text-sm text-charcoal-light">Date</span>
                      <span className="text-sm font-medium text-charcoal">{formData.date}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-ivory-dark">
                      <span className="text-sm text-charcoal-light">Time</span>
                      <span className="text-sm font-medium text-charcoal">{formData.time}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-ivory-dark">
                      <span className="text-sm text-charcoal-light">Name</span>
                      <span className="text-sm font-medium text-charcoal">{formData.name}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-ivory-dark">
                      <span className="text-sm text-charcoal-light">Phone</span>
                      <span className="text-sm font-medium text-charcoal">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-ivory-dark">
                      <span className="text-sm text-charcoal-light">Location</span>
                      <span className="text-sm font-medium text-charcoal">{formData.location}</span>
                    </div>
                  </div>
                  <div className="bg-saffron/10 p-4 border-t border-saffron/20">
                    <p className="text-xs text-charcoal-light text-center">
                      Final pricing confirmed after consultation. No payment required now.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: CONFIRMATION */}
            {step === 5 && (
              <motion.div key="step5-confirm" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <div className="w-20 h-20 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-saffron-dark" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-2">
                  Your Sacred Booking Request Has Been Received
                </h2>
                <p className="text-charcoal-light mb-8">
                  Our team will contact you within 2 hours to confirm your ceremony.
                </p>

                {/* Booking Summary */}
                <div className="bg-white border border-ivory-dark rounded-2xl p-6 max-w-md mx-auto text-left mb-8">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-xs text-charcoal-light">Booking ID</span>
                      <span className="text-xs font-bold text-maroon">{bookingId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-charcoal-light">Pooja</span>
                      <span className="text-xs font-medium text-charcoal">{selectedPooja?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-charcoal-light">Date & Time</span>
                      <span className="text-xs font-medium text-charcoal">{formData.date} • {formData.time}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href={confirmWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="bg-[#25D366] hover:bg-[#1da851]">
                      <MessageCircle className="w-5 h-5" />
                      Confirm on WhatsApp
                    </Button>
                  </a>
                  <Link href="/">
                    <Button variant="secondary" size="lg">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-ivory-dark">
              {step > 1 ? (
                <button onClick={prevStep} className="flex items-center gap-2 text-sm font-medium text-charcoal-light hover:text-maroon transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div />
              )}
              {step < 4 ? (
                <Button variant="primary" size="md" onClick={nextStep}>
                  Continue <ArrowRight className="w-4 h-4" />
                </Button>
              ) : step === 4 ? (
                <Button variant="gold" size="lg" onClick={submitBooking} className={isSubmitting ? "opacity-70" : ""}>
                  {isSubmitting ? "Submitting..." : "Confirm Booking"} <CheckCircle2 className="w-5 h-5" />
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════ ALTERNATIVE: QUICK CONTACT ═══════════════════════ */}
      {step < 5 && (
        <section className="py-12 bg-ivory-dark border-t border-ivory-dark">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-charcoal-light text-sm mb-4">
              Prefer to talk directly? Reach us instantly:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1da851] transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 bg-maroon text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-maroon-light transition-colors">
                <Phone className="w-4 h-4" /> Call {BRAND.phone}
              </a>
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
