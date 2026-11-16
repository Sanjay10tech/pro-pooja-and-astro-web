"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";
import { BRAND, WHATSAPP_LINK } from "@/lib/constants";
import { generateBookingId } from "@/lib/validations/booking";
import { buildBookingMessage, buildWhatsAppUrl, formatBookingDate } from "@/lib/whatsapp";

const STORAGE_KEY = "saiastropooja:booking-draft";
const PHONE_REGEX = /^[+]?[\d\s-]{10,15}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormData = {
  pooja: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  notes: string;
};

const EMPTY_FORM: FormData = { pooja: "", date: "", time: "", name: "", phone: "", email: "", location: "", notes: "" };

/** Local (not UTC) today as YYYY-MM-DD, so "today" is correct for the customer. */
function todayLocalISO() {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${mm}-${dd}`;
}

/** Validation for one step of the booking flow. */
function getStepErrors(step: number, data: FormData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (step === 1 && !data.pooja) errors.pooja = "Please select a pooja";
  if (step === 2) {
    if (!data.date) errors.date = "Please select a date";
    else if (data.date < todayLocalISO()) errors.date = "Please choose today or a future date";
    if (!data.time) errors.time = "Please select a time";
  }
  if (step === 3) {
    if (data.name.trim().length < 2) errors.name = "Please enter your name";
    if (!PHONE_REGEX.test(data.phone.trim())) errors.phone = "Please enter a valid phone number";
    if (data.email.trim() && !EMAIL_REGEX.test(data.email.trim())) errors.email = "Please enter a valid email";
    if (data.location.trim().length < 2) errors.location = "Please enter your location";
  }
  return errors;
}

/* ───────────────────────── DATA ───────────────────────── */

const poojaOptions = [
  // Astrology Services
  { value: "vedic-astrology", label: "Vedic Astrology Consultation" },
  { value: "kp-astrology", label: "KP Astrology Consultation" },
  { value: "birth-chart", label: "Birth Chart Analysis" },
  { value: "horoscope-matching", label: "Horoscope Matching" },
  { value: "birth-time-rectification", label: "Birth Time Rectification" },
  { value: "hebrew-pyramid-numerology", label: "Hebrew Pyramid Numerology" },
  { value: "marriage-muhurat", label: "Marriage Muhurat Selection" },
  { value: "muhurat", label: "Auspicious Date Selection" },
  { value: "vaastu-consultation", label: "Vaastu Consultation" },
  // 16 Poojas
  { value: "gruhapravesha", label: "Gruhapravesha" },
  { value: "sathyanarayana-pooja-udyapan", label: "Sathyanarayana Pooja & Udyapan" },
  { value: "vaastu-pooja", label: "Vaastu Pooja" },
  { value: "sudarshana-aradhana", label: "Sudarshana Aradhana" },
  { value: "sarvatobhadra-mandala-aradhana", label: "Sarvatobhadra Mandala Aradhana" },
  { value: "adityadi-navagraha-shanti", label: "Adityadi Navagraha Shanti" },
  { value: "nakshatra-shanti", label: "Nakshatra Shanti" },
  { value: "dushta-janana-nakshatra-shanti", label: "Dushta Janana Nakshatra Shanti" },
  { value: "tripadi-nakshatra-shanti", label: "Tripadi Nakshatra Shanti" },
  { value: "narayana-bali", label: "Narayana Bali" },
  { value: "sarpa-sanskar", label: "Sarpa Sanskar" },
  { value: "ashlesha-bali-pooja", label: "Ashlesha Bali Pooja" },
  { value: "navagraha-japa", label: "Navagraha Japa" },
  { value: "mahamrityunjaya-japa", label: "Mahamrityunjaya Japa" },
  { value: "lakshmi-venkateshwara-kalyanotsava", label: "Lakshmi Venkateshwara Kalyanotsava" },
  { value: "girija-kalyanotsava", label: "Girija Kalyanotsava" },
  // 10 Homa & Havan
  { value: "mahaganapathi-homa", label: "Mahaganapathi Homa" },
  { value: "navagraha-homa", label: "Navagraha Homa" },
  { value: "mahamrityunjaya-homa", label: "Mahamrityunjaya Homa" },
  { value: "lakshmi-narayana-hrudaya-parayana-homa", label: "Lakshmi Narayana Hrudaya Parayana & Homa" },
  { value: "rudra-homa", label: "Rudra Homa" },
  { value: "aghora-rudra-homa", label: "Aghora Rudra Homa" },
  { value: "mahasudarshana-homa", label: "Mahasudarshana Homa" },
  { value: "rakshoghna-homa", label: "Rakshoghna Homa" },
  { value: "chandi-parayana-homa", label: "Chandi Parayana & Homa" },
  { value: "ashtavadhana-seva", label: "Ashtavadhana Seva" },
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
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bookingId, setBookingId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "failed">("idle");
  const [whatsappBlocked, setWhatsappBlocked] = useState(false);
  const [restored, setRestored] = useState(false);

  // Guards against double clicks and against creating the same booking twice.
  const submittingRef = useRef(false);
  const savedIdRef = useRef("");

  // Restore an in-progress booking (e.g. after returning from WhatsApp or a refresh).
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const raw = window.sessionStorage.getItem(STORAGE_KEY);
        if (raw) {
          const saved = JSON.parse(raw);
          if (saved?.formData) setFormData({ ...EMPTY_FORM, ...saved.formData });
          if (typeof saved?.bookingId === "string" && saved.bookingId) {
            setBookingId(saved.bookingId);
            if (saved.saveStatus === "saved") savedIdRef.current = saved.bookingId;
          }
          if (saved?.saveStatus) setSaveStatus(saved.saveStatus);
          const savedStep = Number(saved?.step);
          if (savedStep >= 1 && savedStep <= 5 && (savedStep < 5 || saved?.bookingId)) setStep(savedStep);
        }
      } catch {
        // Ignore unreadable drafts.
      }
      setRestored(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!restored) return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ formData, bookingId, saveStatus, step }));
    } catch {
      // Storage can be unavailable (private mode); the booking still works.
    }
  }, [restored, formData, bookingId, saveStatus, step]);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const nextStep = () => {
    const stepErrors = getStepErrors(step, formData);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) setStep((s) => Math.min(s + 1, 5));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const selectedPooja = poojaOptions.find((p) => p.value === formData.pooja);

  const buildMessageFor = (id: string) =>
    buildBookingMessage({
      bookingId: id,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: selectedPooja?.label ?? "",
      date: formData.date,
      time: formData.time,
      location: formData.location,
      notes: formData.notes,
    });

  const saveBooking = async (id: string) => {
    if (savedIdRef.current === id) return; // already stored: never create it twice
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, bookingId: id }),
      });
      if (res.ok) {
        savedIdRef.current = id;
        setSaveStatus("saved");
      } else {
        setSaveStatus("failed");
      }
    } catch {
      setSaveStatus("failed");
    }
  };

  const submitBooking = () => {
    if (submittingRef.current) return;

    // Validate the whole booking, not just the last step.
    for (const s of [1, 2, 3]) {
      const stepErrors = getStepErrors(s, formData);
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        setStep(s);
        return;
      }
    }

    submittingRef.current = true;
    setIsSubmitting(true);

    // Keep the existing ID when there is one, otherwise create it once.
    const id = bookingId || generateBookingId();
    setBookingId(id);

    // Open the ADMIN's WhatsApp chat immediately (inside the click, so browsers do not block it).
    const win = window.open(buildWhatsAppUrl(buildMessageFor(id)), "_blank");
    if (win) win.opener = null;
    setWhatsappBlocked(!win);

    setStep(5);
    void saveBooking(id).finally(() => {
      submittingRef.current = false;
      setIsSubmitting(false);
    });
  };

  const startNewBooking = () => {
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    savedIdRef.current = "";
    submittingRef.current = false;
    setFormData(EMPTY_FORM);
    setErrors({});
    setBookingId("");
    setSaveStatus("idle");
    setWhatsappBlocked(false);
    setIsSubmitting(false);
    setStep(1);
  };

  const confirmWhatsAppUrl = bookingId ? buildWhatsAppUrl(buildMessageFor(bookingId)) : buildWhatsAppUrl();

  return (
    <PageTransition>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative py-12 md:py-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 celestial-glow" />
        <div className="absolute inset-0 vedic-pattern opacity-[0.03]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text mb-3">
              Book Your Sacred Ceremony
            </h1>
            <p className="text-muted text-base md:text-lg max-w-xl mx-auto">
              Follow these simple steps to book R. Anand for your pooja or consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ PROGRESS BAR ═══════════════════════ */}
      <section className="py-6 bg-secondary/60 border-b border-gold/20 sticky top-16 sm:top-18 md:top-20 z-30 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {STEPS.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className={`flex flex-col items-center ${i > 0 ? "ml-2 sm:ml-0" : ""}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      step > s.num
                        ? "bg-gold text-background"
                        : step === s.num
                        ? "bg-primary border border-gold text-gold shadow-[0_0_8px_rgba(184,149,82,0.3)]"
                        : "bg-secondary border border-secondary text-muted"
                    }`}
                  >
                    {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                  </div>
                  <span className="text-[9px] sm:text-xs text-muted mt-1 hidden sm:block">{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`h-0.5 w-4 sm:w-8 md:w-12 mx-1 sm:mx-2 rounded ${step > s.num ? "bg-gold" : "bg-secondary"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ STEP CONTENT ═══════════════════════ */}
      <section className="py-10 md:py-14 min-h-[50vh] bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {/* STEP 1: SELECT POOJA */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gold mb-2">Select Your Service</h2>
                <p className="text-muted text-sm mb-6">Choose the sacred ceremony or consultation you wish to book.</p>
                {errors.pooja && <p className="text-red-500 text-xs mb-3">{errors.pooja}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {poojaOptions.map((pooja) => (
                    <button
                      key={pooja.value}
                      onClick={() => updateField("pooja", pooja.value)}
                      className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        formData.pooja === pooja.value
                          ? "border-gold bg-gold/10 shadow-sm"
                          : "border-secondary bg-secondary hover:border-gold/30"
                      }`}
                    >
                      <p className={`font-medium text-sm ${formData.pooja === pooja.value ? "text-gold" : "text-text"}`}>{pooja.label}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: DATE & TIME */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gold mb-2">Select Date &amp; Time</h2>
                <p className="text-muted text-sm mb-6">When would you like the ceremony or consultation performed?</p>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Preferred Date *</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => updateField("date", e.target.value)}
                      className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-gold text-sm"
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Time Slot *</label>
                    {errors.time && <p className="text-red-500 text-xs mb-2">{errors.time}</p>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => updateField("time", slot)}
                          className={`p-3 rounded-lg border-2 text-sm transition-all ${
                            formData.time === slot
                              ? "border-gold bg-gold/10 text-gold font-medium"
                              : "border-secondary bg-secondary text-muted hover:border-gold/30"
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
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gold mb-2">Your Details</h2>
                <p className="text-muted text-sm mb-6">Tell us about yourself so we can contact you.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Full Name *</label>
                      <input type="text" value={formData.name} onChange={(e) => updateField("name", e.target.value)} className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold text-sm" placeholder="Your full name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Phone *</label>
                      <input type="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold text-sm" placeholder="+91 98765 43210" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold text-sm" placeholder="your@email.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Location *</label>
                    <input type="text" value={formData.location} onChange={(e) => updateField("location", e.target.value)} className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold text-sm" placeholder="Bangalore, Chennai, Mysore..." />
                    {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Special Notes</label>
                    <textarea value={formData.notes} onChange={(e) => updateField("notes", e.target.value)} rows={3} className="w-full px-4 py-3 bg-secondary/50 border border-gold/20 rounded-lg text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold text-sm resize-none" placeholder="Any special requirements..." />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: REVIEW */}
            {step === 4 && (
              <motion.div key="step4-review" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gold mb-2">Review Your Booking</h2>
                <p className="text-muted text-sm mb-6">Please confirm all details before submitting.</p>
                <div className="bg-secondary/80 border border-gold/20 rounded-2xl overflow-hidden">
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gold/10">
                      <span className="text-sm text-muted">Service</span>
                      <span className="text-sm font-medium text-text">{selectedPooja?.label}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gold/10">
                      <span className="text-sm text-muted">Date</span>
                      <span className="text-sm font-medium text-text">{formatBookingDate(formData.date)}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gold/10">
                      <span className="text-sm text-muted">Time</span>
                      <span className="text-sm font-medium text-text">{formData.time}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gold/10">
                      <span className="text-sm text-muted">Name</span>
                      <span className="text-sm font-medium text-text">{formData.name}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gold/10">
                      <span className="text-sm text-muted">Phone</span>
                      <span className="text-sm font-medium text-text">{formData.phone}</span>
                    </div>
                    {formData.email.trim() && (
                      <div className="flex justify-between items-center gap-4 pb-3 border-b border-gold/10">
                        <span className="text-sm text-muted">Email</span>
                        <span className="text-sm font-medium text-text break-all text-right">{formData.email}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center pb-3 border-b border-gold/10">
                      <span className="text-sm text-muted">Location</span>
                      <span className="text-sm font-medium text-text">{formData.location}</span>
                    </div>
                    {formData.notes.trim() && (
                      <div className="flex justify-between items-start gap-4 pb-3 border-b border-gold/10">
                        <span className="text-sm text-muted shrink-0">Notes</span>
                        <span className="text-sm font-medium text-text text-right break-words min-w-0">{formData.notes}</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-gold/5 p-4 border-t border-gold/10">
                    <p className="text-xs text-muted text-center">
                      Final pricing confirmed after consultation. No payment required now.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: CONFIRMATION */}
            {step === 5 && (
              <motion.div key="step5-confirm" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-2">
                  Your Booking Summary Is Ready
                </h2>
                <p className="text-muted mb-2 max-w-lg mx-auto">
                  {whatsappBlocked
                    ? "Your browser blocked WhatsApp from opening. Tap the button below to open it."
                    : "WhatsApp should now be open with your booking message."}{" "}
                  Press <strong className="text-text">Send</strong> in WhatsApp to deliver it to the {BRAND.name} team.
                  Your request reaches us only after you press Send.
                </p>
                {saveStatus === "failed" && (
                  <p className="text-xs text-muted mb-2">
                    We could not save this request online. Sending it on WhatsApp is enough for us to receive it.
                  </p>
                )}
                <div className="mb-8" />

                {/* Booking Summary */}
                <div className="bg-secondary/80 border border-gold/20 rounded-2xl p-6 max-w-md mx-auto text-left mb-8">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-xs text-muted">Booking ID</span>
                      <span className="text-xs font-bold text-gold">{bookingId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-muted">Service</span>
                      <span className="text-xs font-medium text-text">{selectedPooja?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-muted">Date &amp; Time</span>
                      <span className="text-xs font-medium text-text text-right">{formatBookingDate(formData.date)} · {formData.time}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href={confirmWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="bg-[#25D366] hover:bg-[#1da851]">
                      <MessageCircle className="w-5 h-5" />
                      Send Booking on WhatsApp
                    </Button>
                  </a>
                  <Link href="/">
                    <Button variant="secondary" size="lg">
                      Back to Home
                    </Button>
                  </Link>
                </div>
                <div className="mt-4">
                  <button onClick={startNewBooking} className="text-xs text-muted hover:text-gold underline underline-offset-4">
                    Start a new booking
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-gold/10">
              {step > 1 ? (
                <button onClick={prevStep} className="flex items-center gap-2 text-sm font-medium text-muted hover:text-gold transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div />
              )}
              {step < 4 ? (
                <Button variant="gold" size="md" onClick={nextStep}>
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
        <section className="py-12 bg-secondary/30 border-t border-gold/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted text-sm mb-4">
              Prefer to talk directly? Reach R. Anand instantly:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1da851] transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 bg-gold text-background px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gold-light transition-colors">
                <Phone className="w-4 h-4" /> Call {BRAND.phone}
              </a>
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
