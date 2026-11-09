"use client";

import { useRef, type CSSProperties } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

/*
 * Animated celestial background for the Contact hero — no raster images.
 * Layers: navy base, drifting nebula glows, rotating sacred-geometry mandala,
 * twinkling stars, rising golden embers, and a constellation "connection"
 * network whose lines carry travelling golden signals (desktop only).
 *
 * Every position below is computed deterministically so server and client
 * render identical markup (no hydration mismatch). Loops are CSS keyframes
 * (`cbg-*` in globals.css): they pause while offscreen and stop entirely under
 * prefers-reduced-motion.
 */

const STARS = Array.from({ length: 42 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  size: 1 + ((i * 7) % 3) * 0.6,
  delay: (i * 0.37) % 4,
  duration: 3 + (i % 4),
  gold: i % 5 === 0,
  mobile: i % 2 === 0,
}));

const EMBERS = Array.from({ length: 14 }, (_, i) => ({
  left: 6 + ((i * 61) % 88),
  bottom: (i * 13) % 30,
  size: 2 + (i % 3),
  delay: (i * 0.9) % 9,
  duration: 10 + (i % 5) * 1.5,
  drift: (i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 6),
  mobile: i % 2 === 0,
}));

/* Constellation network in a 1200×600 viewBox; clusters sit left and right of the text. */
const NODES = [
  { x: 90, y: 120 }, { x: 210, y: 70 }, { x: 300, y: 175, pulse: 0 },
  { x: 165, y: 255 }, { x: 85, y: 410 }, { x: 235, y: 470 },
  { x: 330, y: 375, pulse: 1.8 },
  { x: 905, y: 85, pulse: 0.9 }, { x: 1020, y: 160 }, { x: 1115, y: 75 },
  { x: 965, y: 300 }, { x: 1105, y: 385 }, { x: 870, y: 455, pulse: 2.7 },
  { x: 1010, y: 525 },
];

const LINKS = [
  // left cluster
  "M90 120 L210 70", "M210 70 L300 175", "M300 175 L165 255", "M165 255 L90 120",
  "M165 255 L85 410", "M85 410 L235 470", "M235 470 L330 375", "M330 375 L300 175",
  // right cluster
  "M905 85 L1020 160", "M1020 160 L1115 75", "M1020 160 L965 300", "M965 300 L1105 385",
  "M965 300 L870 455", "M870 455 L1010 525", "M1010 525 L1105 385",
  // connection arcs above and below the text
  "M300 175 Q600 10 905 85", "M330 375 Q600 590 870 455",
];

const SIGNALS = [
  { d: "M300 175 Q600 10 905 85", delay: 0, duration: 6.5 },
  { d: "M870 455 Q600 590 330 375", delay: 2.2, duration: 7.5 },
  { d: "M90 120 L210 70 L300 175", delay: 1.1, duration: 5 },
  { d: "M85 410 L235 470 L330 375", delay: 3.4, duration: 5.5 },
  { d: "M1115 75 L1020 160 L965 300", delay: 0.6, duration: 5.2 },
  { d: "M1105 385 L1010 525 L870 455", delay: 2.9, duration: 6 },
];

const polar = (cx: number, r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: +(cx + r * Math.cos(a)).toFixed(2), y: +(cx + r * Math.sin(a)).toFixed(2) };
};

function OuterRing() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      <circle cx="100" cy="100" r="98" stroke="rgba(184,149,82,0.24)" strokeWidth="0.4" strokeDasharray="1 3.5" />
      <circle cx="100" cy="100" r="92" stroke="rgba(184,149,82,0.18)" strokeWidth="0.35" />
      {Array.from({ length: 72 }, (_, i) => {
        const a = polar(100, 92, i * 5);
        const b = polar(100, i % 6 === 0 ? 86 : 89.5, i * 5);
        return (
          <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
            stroke="rgba(184,149,82,0.22)" strokeWidth={i % 6 === 0 ? 0.5 : 0.3} />
        );
      })}
      {Array.from({ length: 12 }, (_, i) => {
        const p = polar(100, 95, i * 30 + 15);
        return <circle key={i} cx={p.x} cy={p.y} r="0.9" fill="rgba(229,204,145,0.55)" />;
      })}
    </svg>
  );
}

function PetalRing() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      <circle cx="100" cy="100" r="97" stroke="rgba(229,204,145,0.12)" strokeWidth="0.35" />
      {Array.from({ length: 12 }, (_, i) => (
        <path key={`p${i}`} d="M100 4 Q113 52 100 100 Q87 52 100 4"
          transform={`rotate(${i * 30} 100 100)`}
          stroke="rgba(229,204,145,0.17)" strokeWidth="0.45" />
      ))}
      {Array.from({ length: 12 }, (_, i) => (
        <path key={`s${i}`} d="M100 30 Q106 64 100 100 Q94 64 100 30"
          transform={`rotate(${i * 30 + 15} 100 100)`}
          stroke="rgba(184,149,82,0.12)" strokeWidth="0.35" />
      ))}
    </svg>
  );
}

function InnerStar() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      <rect x="24" y="24" width="152" height="152" stroke="rgba(184,149,82,0.24)" strokeWidth="0.6" />
      <rect x="24" y="24" width="152" height="152" transform="rotate(45 100 100)"
        stroke="rgba(184,149,82,0.24)" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="78" stroke="rgba(229,204,145,0.18)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="56" stroke="rgba(184,149,82,0.16)" strokeWidth="0.5" strokeDasharray="2 3" />
      {Array.from({ length: 16 }, (_, i) => {
        const p = polar(100, 67, i * 22.5);
        return <circle key={i} cx={p.x} cy={p.y} r="1.1" fill="rgba(229,204,145,0.45)" />;
      })}
      <circle cx="100" cy="100" r="8" stroke="rgba(229,204,145,0.4)" strokeWidth="0.6" />
    </svg>
  );
}

export function ContactHeroBackground() {
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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary to-background" />

      {/* Drifting nebula glows (radial gradients, no blur filters) */}
      <div className="absolute -top-[60%] -left-[18%] w-[760px] h-[760px]">
        <div
          className="cbg-loop cbg-drift-a w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(184,149,82,0.20) 0%, rgba(184,149,82,0.06) 38%, transparent 68%)" }}
        />
      </div>
      <div className="absolute -bottom-[75%] -right-[14%] w-[860px] h-[860px]">
        <div
          className="cbg-loop cbg-drift-b w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(70,92,176,0.26) 0%, rgba(70,92,176,0.08) 40%, transparent 70%)" }}
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[380px]">
        <div
          className="cbg-loop cbg-breathe w-full h-full rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(214,128,58,0.12) 0%, transparent 65%)" }}
        />
      </div>

      {/* Rotating sacred-geometry mandala */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] sm:w-[620px] sm:h-[620px] lg:w-[760px] lg:h-[760px] opacity-80">
        <div className="cbg-loop cbg-spin absolute inset-0"><OuterRing /></div>
        <div className="cbg-loop cbg-spin-rev absolute inset-[10%]"><PetalRing /></div>
        <div className="cbg-loop cbg-spin absolute inset-[27%]" style={{ animationDuration: "90s" }}><InnerStar /></div>
        <div className="absolute inset-[44%]">
          <div
            className="cbg-loop cbg-breathe w-full h-full rounded-full"
            style={{ background: "radial-gradient(circle, rgba(229,204,145,0.3) 0%, rgba(184,149,82,0.1) 45%, transparent 72%)" }}
          />
        </div>
      </div>

      {/* Constellation connection network with travelling signals (desktop) */}
      <svg
        className="absolute inset-0 w-full h-full hidden md:block"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="rgba(184,149,82,0.22)" strokeWidth="0.8">
          {LINKS.map((d, i) => <path key={i} d={d} />)}
        </g>
        <g stroke="rgba(229,204,145,0.95)" strokeWidth="1.8" strokeLinecap="round" className="cbg-motion-only">
          {SIGNALS.map((s, i) => (
            <path
              key={i}
              d={s.d}
              pathLength={100}
              className="cbg-loop cbg-signal"
              style={{ animationDelay: `-${s.delay}s`, animationDuration: `${s.duration}s` }}
            />
          ))}
        </g>
        {NODES.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="6" fill="rgba(184,149,82,0.14)" />
            <circle cx={n.x} cy={n.y} r="2.2" fill="rgba(229,204,145,0.9)" />
            {n.pulse !== undefined && (
              <circle
                cx={n.x}
                cy={n.y}
                r="5"
                stroke="rgba(229,204,145,0.7)"
                strokeWidth="0.9"
                className="cbg-loop cbg-node-pulse cbg-motion-only"
                style={{ animationDelay: `-${n.pulse}s` }}
              />
            )}
          </g>
        ))}
      </svg>

      {/* Twinkling stars */}
      {STARS.map((s, i) => (
        <span
          key={i}
          className={cn(
            "cbg-loop cbg-twinkle absolute rounded-full opacity-40",
            s.gold ? "bg-gold-light" : "bg-text",
            !s.mobile && "hidden sm:block"
          )}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `-${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Rising golden embers (diya sparks) */}
      {EMBERS.map((e, i) => (
        <span
          key={i}
          className={cn(
            "cbg-loop cbg-rise cbg-motion-only absolute rounded-full",
            !e.mobile && "hidden sm:block"
          )}
          style={
            {
              left: `${e.left}%`,
              bottom: `${e.bottom}%`,
              width: e.size,
              height: e.size,
              background: "rgba(229,204,145,0.95)",
              boxShadow: "0 0 6px 1px rgba(229,170,90,0.75)",
              animationDelay: `-${e.delay}s`,
              animationDuration: `${e.duration}s`,
              "--cbg-drift": `${e.drift}px`,
            } as CSSProperties
          }
        />
      ))}

      {/* Cinematic vignette + blend into the next section */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(8,15,32,0.6) 100%)" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
