"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import Image from "next/image";

export function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const closePopup = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    // Defer client-only visibility until after hydration.
    const frame = window.requestAnimationFrame(() => {
      setIsMounted(true);
      setIsVisible(true);
    });

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      window.cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Welcome to R. Anand"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={closePopup}
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-sm sm:max-w-md bg-primary border border-gold/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Top decorative bar */}
            <div className="h-1.5 bg-gradient-to-r from-gold/60 via-gold to-gold/60" />

            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 w-11 h-11 sm:top-3 sm:right-3 bg-gold/20 hover:bg-gold/40 rounded-full flex items-center justify-center transition-colors z-10"
              aria-label="Close welcome popup"
            >
              <X className="w-4 h-4 text-text" />
            </button>

            {/* Content */}
            <div className="px-6 py-8 sm:px-8 sm:py-10 text-center">
              {/* Logo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 relative mx-auto mb-5 rounded-full overflow-hidden shadow-lg border-2 border-gold/30">
                <Image
                  src="/images/logo.png"
                  alt="R. Anand Logo"
                  fill
                  sizes="96px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Welcome text */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Welcome
                </span>
                <Sparkles className="w-4 h-4 text-gold" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gold mb-2">
                R. Anand
              </h2>

              <p className="text-text/70 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                Authentic Vedic Astrology, Pooja &amp; Homa Services
              </p>
            </div>

            {/* Bottom decorative bar */}
            <div className="h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
