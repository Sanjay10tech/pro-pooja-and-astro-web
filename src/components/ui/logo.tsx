"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BRAND, BRAND_LOGO } from "@/lib/constants";

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

  // Size configurations (the logo artwork is near-square; it is never cropped)
  const containerClass = isNavbar
    ? "w-12 h-12 md:w-14 md:h-14"
    : isXl
    ? "w-24 h-24 md:w-28 md:h-28"
    : size === "lg"
    ? "w-14 h-14 md:w-16 md:h-16"
    : size === "sm"
    ? "w-9 h-9"
    : "w-11 h-11 md:w-12 md:h-12";

  const content = (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* Official logo on a light chip so the purple/orange artwork stays legible on dark backgrounds */}
      <div
        className={cn(
          "relative shrink-0 rounded-xl bg-[#FFF8EC] ring-1 ring-gold/40 shadow-md p-1",
          containerClass
        )}
      >
        <div className="relative w-full h-full">
          <Image
            src={BRAND_LOGO.src}
            alt={`${BRAND.name} logo`}
            fill
            sizes={isXl ? "112px" : "56px"}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className={cn(isNavbar ? "hidden md:block" : "hidden sm:block")}>
          <p
            className={cn(
              "font-serif font-bold leading-tight",
              isNavbar ? "text-[17px] lg:text-[19px]" : isXl ? "text-xl md:text-2xl" : "text-lg md:text-xl",
              light ? "text-gold" : "text-gold"
            )}
          >
            {BRAND.name}
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
      <Link href="/" className="group" aria-label={`${BRAND.name} - Home`}>
        {content}
      </Link>
    );
  }

  return content;
}
