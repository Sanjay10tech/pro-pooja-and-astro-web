"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
  variant?: "default" | "glass";
}

export function Card({ children, className, hover = true, as = "div", variant = "default" }: CardProps) {
  const Component = as === "article" ? motion.article : motion.div;

  return (
    <Component
      whileHover={hover ? { y: -3 } : undefined}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "rounded-xl p-6",
        variant === "glass"
          ? "bg-white/5 backdrop-blur-md border border-gold/20 hover:border-gold/40"
          : "bg-primary border border-secondary hover:border-gold/20",
        hover && "transition-all duration-200",
        className
      )}
    >
      {children}
    </Component>
  );
}
