"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

/*
 * Animated "photographic" background for the Gallery hero — no raster images.
 * Layers: navy base, drifting golden bokeh orbs, a slowly turning camera
 * aperture (iris blades + focus ring), scrolling film-strip bands at the top
 * and bottom edges, a soft light-leak sweep, twinkling dust and a vignette.
 *
 * Positions are deterministic (identical server/client markup). Loops are CSS
 * keyframes tagged `cbg-loop`, so they pause offscreen via `data-cbg-active`
 * and stop under prefers-reduced-motion (see globals.css).
 */

type Orb = {
  left: number; top: number; size: number; rim: boolean; hue: "gold" | "amber" | "blue";
  drift: "a" | "b"; duration: number; delay: number; mobile: boolean;
};

const ORBS: Orb[] = Array.from({ length: 13 }, (_, i) => ({
  left: (i * 29 + 6) % 96,
  top: (i * 41 + 12) % 88,
  size: 56 + ((i * 37) % 150),
  rim: i % 3 === 0,
  hue: i % 5 === 0 ? "blue" : i % 2 === 0 ? "gold" : "amber",
  drift: i % 2 === 0 ? "a" : "b",
  duration: 18 + (i % 6) * 4,
  delay: (i * 1.7) % 12,
  mobile: i % 2 === 0,
}));

const DUST = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 43 + 9) % 100,
  top: (i * 59 + 17) % 100,
  size: 1 + (i % 3) * 0.5,
  delay: (i * 0.53) % 4,
  duration: 3 + (i % 4),
  mobile: i % 2 === 0,
}));

const ORB_COLOR = {
  gold: "229,204,145",
  amber: "214,150,72",
  blue: "96,120,200",
} as const;

function orbBackground(o: Orb) {
  const c = ORB_COLOR[o.hue];
  return o.rim
    ? `radial-gradient(circle, rgba(${c},0.16) 0%, rgba(${c},0.10) 52%, rgba(${c},0.30) 60%, rgba(${c},0.06) 64%, transparent 67%)`
    : `radial-gradient(circle, rgba(${c},0.28) 0%, rgba(${c},0.10) 40%, transparent 68%)`;
}

const polar = (r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: +(100 + r * Math.cos(a)).toFixed(2), y: +(100 + r * Math.sin(a)).toFixed(2) };
};

function Aperture() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      {/* Outer focus ring with scale ticks */}
      <circle cx="100" cy="100" r="97" stroke="rgba(229,204,145,0.22)" strokeWidth="0.4" />
      <circle cx="100" cy="100" r="90" stroke="rgba(184,149,82,0.18)" strokeWidth="0.35" strokeDasharray="1 2.5" />
      {Array.from({ length: 60 }, (_, i) => {
        const a = polar(97, i * 6);
        const b = polar(i % 5 === 0 ? 91 : 94, i * 6);
        return (
          <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
            stroke="rgba(229,204,145,0.24)" strokeWidth={i % 5 === 0 ? 0.55 : 0.3} />
        );
      })}
      {/* Iris blades: each blade edge runs from the outer housing to the inner opening */}
      <circle cx="100" cy="100" r="78" stroke="rgba(184,149,82,0.2)" strokeWidth="0.5" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = polar(78, i * 45);
        const b = polar(30, i * 45 + 105);
        const c = polar(78, i * 45 + 34);
        return (
          <g key={i}>
            <path d={`M${a.x} ${a.y} L${b.x} ${b.y}`} stroke="rgba(229,204,145,0.17)" strokeWidth="0.5" />
            <path d={`M${a.x} ${a.y} Q100 100 ${c.x} ${c.y}`} stroke="rgba(184,149,82,0.08)" strokeWidth="0.4" />
          </g>
        );
      })}
      <circle cx="100" cy="100" r="30" stroke="rgba(229,204,145,0.28)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="12" stroke="rgba(229,204,145,0.35)" strokeWidth="0.5" />
    </svg>
  );
}

function FilmStrip({ reverse = false, className }: { reverse?: boolean; className?: string }) {
  return (
    <div className={cn("absolute inset-x-0 h-7 overflow-hidden border-y border-gold/15 bg-background/50", className)}>
      <div
        className={cn("cbg-loop absolute inset-y-0 left-0", reverse ? "gbg-strip-rev" : "gbg-strip")}
        style={{ width: "calc(100% + 260px)" }}
      >
        <div
          className="absolute inset-x-0 top-1/2 h-2.5 -translate-y-1/2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(229,204,145,0.32) 0 12px, transparent 12px 26px)",
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}

export function GalleryHeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref);

  return (
    <div
      ref={ref}
      data-cbg-active={active}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Base navy */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary to-background" />

      {/* Golden bokeh */}
      {ORBS.map((o, i) => (
        <div
          key={i}
          className={cn("absolute", !o.mobile && "hidden sm:block")}
          style={{ left: `${o.left}%`, top: `${o.top}%`, width: o.size, height: o.size }}
        >
          <div
            className={cn("cbg-loop w-full h-full rounded-full", o.drift === "a" ? "cbg-drift-a" : "cbg-drift-b")}
            style={{
              background: orbBackground(o),
              animationDuration: `${o.duration}s`,
              animationDelay: `-${o.delay}s`,
            }}
          />
        </div>
      ))}

      {/* Camera aperture behind the heading */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] lg:w-[600px] lg:h-[600px]">
        <div className="cbg-loop cbg-spin absolute inset-0" style={{ animationDuration: "140s" }}>
          <Aperture />
        </div>
        <div className="absolute inset-[38%]">
          <div
            className="cbg-loop cbg-breathe w-full h-full rounded-full"
            style={{ background: "radial-gradient(circle, rgba(229,204,145,0.22) 0%, rgba(184,149,82,0.08) 50%, transparent 72%)" }}
          />
        </div>
      </div>

      {/* Readability halo behind the heading and subtitle */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: "radial-gradient(ellipse 70% 30% at 50% 52%, rgba(8,15,32,0.6) 0%, transparent 100%)" }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{ background: "radial-gradient(ellipse 36% 34% at 50% 50%, rgba(8,15,32,0.6) 0%, transparent 100%)" }}
      />

      {/* Light-leak sweep (desktop) */}
      <div className="absolute inset-0 hidden md:block">
        <div
          className="cbg-loop cbg-motion-only gbg-sweep absolute -inset-y-1/4 w-1/3"
          style={{ background: "linear-gradient(100deg, transparent 0%, rgba(214,150,72,0.10) 45%, rgba(229,204,145,0.14) 50%, transparent 100%)" }}
        />
      </div>

      {/* Twinkling dust */}
      {DUST.map((d, i) => (
        <span
          key={i}
          className={cn("cbg-loop cbg-twinkle absolute rounded-full bg-gold-light opacity-40", !d.mobile && "hidden sm:block")}
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `-${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}

      {/* Film-strip bands */}
      <FilmStrip className="top-3 opacity-60" />
      <FilmStrip reverse className="bottom-3 opacity-60" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(8,15,32,0.65) 100%)" }}
      />
    </div>
  );
}
