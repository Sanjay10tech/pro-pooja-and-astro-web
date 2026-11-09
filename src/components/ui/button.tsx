"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-text border border-gold/30 hover:border-gold/60 shadow-md hover:shadow-gold/20 hover:shadow-lg",
        gold:
          "bg-gold text-background hover:bg-gold-light active:bg-gold shadow-md hover:shadow-gold/30 hover:shadow-lg font-semibold",
        secondary:
          "bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-background active:bg-gold",
        ghost:
          "bg-transparent text-gold hover:bg-gold/10 active:bg-gold/15",
        link:
          "bg-transparent text-gold underline-offset-4 hover:underline p-0 shadow-none",
      },
      size: {
        sm: "h-9 px-4 text-[15px]",
        md: "h-11 px-6 text-[15px]",
        lg: "h-12 px-7 text-[15px]",
        xl: "h-14 px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export function Button({
  className,
  variant,
  size,
  loading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {loading && <span className="spinner" aria-hidden="true" />}
      {children}
    </motion.button>
  );
}

export { buttonVariants };
