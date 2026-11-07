"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
  tag?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
  tag,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "mb-8 md:mb-10",
        centered && "text-center",
        className
      )}
    >
      {tag && (
        <span
          className={cn(
            "text-sm font-medium uppercase tracking-widest mb-3 block",
            "text-gold"
          )}
        >
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-bold mb-2",
          light ? "text-text" : "text-gold"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-text/70" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-0.5 w-14 rounded-full",
          centered && "mx-auto",
          "bg-gold"
        )}
        aria-hidden="true"
      />
      {/* Diamond accent */}
      <div
        className={cn("w-2 h-2 rotate-45 bg-gold mx-auto mt-2")}
        aria-hidden="true"
      />
    </motion.div>
  );
}
