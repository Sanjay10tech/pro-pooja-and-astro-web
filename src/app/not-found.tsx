"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-gold font-serif text-4xl font-bold">404</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gold mb-3">
          Page Not Found
        </h1>
        <p className="text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let us guide you back to the right path.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <Button variant="gold" size="md">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="secondary" size="md">
              View Services
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
