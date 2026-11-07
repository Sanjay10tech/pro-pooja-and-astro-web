"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Size variant */
  size?: "sm" | "md" | "lg" | "xl" | "navbar";
  /** Show brand name text next to logo */
  showText?: boolean;
  /** Link to homepage when clicked */
  linked?: boolean;
  /** Additional classes for the wrapper */
  className?: string;
  /** Light text for dark backgrounds */
  light?: boolean;
}

export function Logo({
  size = "md",
  showText = true,
  linked = true,
  className,
  light = false,
}: LogoProps) {
  const isNavbar = size === "navbar";
  const isXl = size === "xl";

  // Size configurations
  const containerClass = isNavbar
    ? "w-12 h-12 md:w-14 md:h-14"
    : isXl
    ? "w-24 h-24 md:w-28 md:h-28"
    : size === "lg"
    ? "w-14 h-14 md:w-16 md:h-16"
    : size === "sm"
    ? "w-9 h-9"
    : "w-11 h-11 md:w-13 md:h-13";

  const content = (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* Logo Image */}
      <div className={cn("relative shrink-0 rounded-full overflow-hidden", containerClass)}>
        <Image
          src="/images/logo.png"
          alt="R. Anand Logo"
          fill
          sizes={isXl ? "112px" : "56px"}
          className="object-contain"
          priority
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className={cn(isNavbar ? "hidden md:block" : "hidden sm:block")}>
          <p
            className={cn(
              "font-serif font-bold leading-tight",
              isNavbar ? "text-[15px] lg:text-[17px]" : isXl ? "text-xl md:text-2xl" : "text-lg md:text-xl",
              "text-gold"
            )}
          >
            R. Anand
          </p>
          <p
            className={cn(
              "text-[10px] tracking-wider uppercase mt-0.5",
              "text-muted"
            )}
          >
            Purohit &amp; Vedic Astrologer
          </p>
        </div>
      )}
    </div>
  );

  if (linked) {
    return (
      <Link href="/" className="group" aria-label="R. Anand - Home">
        {content}
      </Link>
    );
  }

  return content;
}
