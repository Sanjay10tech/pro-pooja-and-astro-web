"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_OUT, loop } from "./illustration-kit";
import { astrologyIllustrations, type AstrologyIllustrationKey } from "./illustrations";
import { useCardTilt, useFinePointer } from "./use-card-tilt";

interface EntranceContext {
  index: number;
  reduced: boolean;
}

/** Staggered fade-up; with reduced motion the card only fades. */
const entrance: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: ({ index, reduced }: EntranceContext) => ({
    opacity: 1,
    y: 0,
    transition: reduced
      ? { opacity: { duration: 0.4 }, y: { duration: 0 } }
      : { duration: 0.65, ease: EASE_OUT, delay: (index % 3) * 0.12 },
  }),
};

/** Faint fixed star field shared by every illustration stage. */
const STAGE_STARS = [
  [14, 18, 0.8],
  [52, 12, 0.5],
  [96, 30, 0.6],
  [134, 8, 0.5],
  [190, 14, 0.7],
  [236, 8, 0.5],
  [306, 22, 0.8],
  [8, 70, 0.6],
  [312, 92, 0.6],
  [20, 146, 0.7],
  [300, 64, 0.5],
  [12, 188, 0.6],
  [74, 184, 0.5],
  [128, 192, 0.7],
  [196, 188, 0.5],
  [252, 194, 0.6],
  [310, 176, 0.7],
];

function StageStars() {
  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="#F3EBDD">
        {STAGE_STARS.map(([cx, cy, r], i) => {
          const twinkles = i % 3 === 0;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              opacity="0.5"
              className={twinkles ? loop("twinkle", true) : undefined}
              style={twinkles ? { animationDuration: "5s", animationDelay: `${-i * 0.6}s` } : undefined}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Fine gold corner marks that draw inward on hover. */
function StageCorners() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-2.5 opacity-60 transition duration-500 ease-out group-hover:opacity-100 motion-safe:group-hover:scale-[0.97]"
    >
      <span className="absolute left-0 top-0 h-3.5 w-3.5 rounded-tl-md border-l border-t border-gold-light/70" />
      <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-tr-md border-r border-t border-gold-light/70" />
      <span className="absolute bottom-0 left-0 h-3.5 w-3.5 rounded-bl-md border-b border-l border-gold-light/70" />
      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-br-md border-b border-r border-gold-light/70" />
    </span>
  );
}

interface AstrologyServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  illustration: AstrologyIllustrationKey;
  href: string;
  index: number;
}

/**
 * Homepage astrology service card: animated illustration on top, copy below.
 * Mouse users get a 3D tilt and hover light; touch screens get press feedback.
 */
export function AstrologyServiceCard({
  title,
  description,
  icon: Icon,
  illustration,
  href,
  index,
}: AstrologyServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const onScreen = useInView(cardRef);
  const reduced = Boolean(useReducedMotion());
  const finePointer = useFinePointer();
  const { tiltStyle, glowStyle, handlers } = useCardTilt(finePointer && !reduced);
  const { category, Illustration } = astrologyIllustrations[illustration];

  return (
    <motion.div
      variants={entrance}
      custom={{ index, reduced }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative h-full"
      {...handlers}
    >
      {/* Golden glow beneath the lifted card */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 bottom-0 top-10 rounded-3xl opacity-0 shadow-[0_26px_60px_-12px_rgba(184,149,82,0.38)] transition-opacity duration-500 group-hover:opacity-100"
      />

      <motion.article
        ref={cardRef}
        data-acard-active={onScreen}
        style={{ ...tiltStyle, transformPerspective: 1100 }}
        className={cn(
          "relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-gold/20",
          "bg-[linear-gradient(160deg,#16243F_0%,#0F1A31_45%,#0A1326_100%)] shadow-[0_20px_44px_-28px_rgba(0,0,0,0.95)]",
          "transition-[translate,scale] duration-500 ease-out motion-safe:group-hover:-translate-y-1.5 motion-safe:active:scale-[0.985]",
          "has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-gold/70 has-[a:focus-visible]:ring-offset-2 has-[a:focus-visible]:ring-offset-background"
        )}
      >
        {/* Gold border illumination (hover, or press on touch screens) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl border border-gold/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100"
        />
        {/* Top edge highlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/70 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Light that follows the mouse */}
        <motion.span
          aria-hidden="true"
          style={glowStyle}
          className="pointer-events-none absolute -inset-1/2 -z-10 bg-[radial-gradient(circle_at_center,rgba(229,204,145,0.11),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Faint celestial pattern */}
        <span aria-hidden="true" className="vedic-pattern pointer-events-none absolute inset-0 -z-10 opacity-50" />

        {/* Illustration stage */}
        <div className="relative mx-3 mt-3 aspect-[16/10] overflow-hidden rounded-xl border border-gold/15 bg-[radial-gradient(ellipse_at_50%_45%,rgba(184,149,82,0.16)_0%,rgba(16,28,53,0.55)_45%,#091124_85%)]">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(229,204,145,0.16),transparent_62%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
          <StageStars />
          <div className="absolute inset-0 transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.045]">
            <Illustration reduced={reduced} />
          </div>
          <StageCorners />
        </div>

        {/* Copy */}
        <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light/85">
            <Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-gold" />
            <span>{category}</span>
            <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
          </p>
          <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-gold xl:text-xl">
            {title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">{description}</p>
          <div className="mt-auto pt-5">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-sm font-medium text-gold after:absolute after:inset-0 after:content-['']"
            >
              <span className="relative">
                Explore Service
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold-light/70 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </span>
              <span className="sr-only">: {title}</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
