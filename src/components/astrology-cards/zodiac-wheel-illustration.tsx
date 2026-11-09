"use client";

import { motion, type Variants } from "framer-motion";
import {
  CREAM,
  EASE_OUT,
  GOLD,
  GOLD_LIGHT,
  drawIn,
  fadeIn,
  loop,
  polar,
  popIn,
  type IllustrationProps,
} from "./illustration-kit";

const CX = 160;
const CY = 100;
const ORIGIN = `${CX}px ${CY}px`;

/** Simplified zodiac sign marks, Aries → Pisces, drawn in a 10×10 box around 0,0. */
const SIGN_GLYPHS = [
  "M0 4.6V-0.6M0 -0.6C0 -4 -2.2 -5 -3.6 -4.2C-5 -3.4 -4.6 -1.2 -3.2 -0.8M0 -0.6C0 -4 2.2 -5 3.6 -4.2C5 -3.4 4.6 -1.2 3.2 -0.8",
  "M-4.4 -4.6C-3.8 -1.6 -2 -1.3 0 -1.3C2 -1.3 3.8 -1.6 4.4 -4.6M-2.9 1.6A2.9 2.9 0 1 0 2.9 1.6A2.9 2.9 0 1 0 -2.9 1.6",
  "M-4 -4.2C-1.5 -3.3 1.5 -3.3 4 -4.2M-4 4.2C-1.5 3.3 1.5 3.3 4 4.2M-1.7 -3.6V3.6M1.7 -3.6V3.6",
  "M-3.2 -2.9C-1 -4.6 3 -4.4 4.8 -2.2M-4.7 -1.4A1.5 1.5 0 1 0 -1.7 -1.4A1.5 1.5 0 1 0 -4.7 -1.4M3.2 2.9C1 4.6 -3 4.4 -4.8 2.2M1.7 1.4A1.5 1.5 0 1 0 4.7 1.4A1.5 1.5 0 1 0 1.7 1.4",
  "M-4.5 1.8A1.9 1.9 0 1 0 -0.7 1.8A1.9 1.9 0 1 0 -4.5 1.8M-1.2 0.6C-2 -2.6 0 -4.8 2.2 -4.2C4.4 -3.6 4 -1 2.6 0.8C1.6 2.2 1.8 4.4 3.2 4.6C4 4.7 4.6 4.2 4.9 3.6",
  "M-4.6 -3.8V3.8M-4.6 -2.2C-4.6 -4.2 -1.8 -4.2 -1.8 -2.2V3.8M-1.8 -2.2C-1.8 -4.2 1 -4.2 1 -2.2V2.4C1 4.4 3.6 4.6 4.4 2.4C4.9 0.8 3.6 -0.4 2.4 0.6C1.6 1.4 1.2 3.2 1.8 4.8",
  "M-4.8 4.2H4.8M-4.8 1.6H-2C-3.4 -1 -2 -4 0 -4C2 -4 3.4 -1 2 1.6H4.8",
  "M-4.6 -3.8V3.4M-4.6 -2.2C-4.6 -4.2 -1.8 -4.2 -1.8 -2.2V3.4M-1.8 -2.2C-1.8 -4.2 1 -4.2 1 -2.2V2.8C1 4.4 2.6 4.6 4.6 3.2M3 2.3L4.8 3.1L4.2 4.9",
  "M-4.2 4.2L4.2 -4.2M0.4 -4.2H4.2V-0.4M-3.4 -0.6L0.6 3.4",
  "M-4.8 -3.4L-2.4 3.4L-0.4 -3C0.6 -4.8 2.6 -4 2.2 -1.6L1.2 2.6C0.8 4.6 3.6 5.2 4.6 3.4C5.4 1.8 3.8 0.2 2.2 1.4",
  "M-4.8 -1.2L-2.4 -3.4L0 -1.2L2.4 -3.4L4.8 -1.2M-4.8 3.4L-2.4 1.2L0 3.4L2.4 1.2L4.8 3.4",
  "M-3.6 -4.6C-1.2 -2.4 -1.2 2.4 -3.6 4.6M3.6 -4.6C1.2 -2.4 1.2 2.4 3.6 4.6M-2.4 0H2.4",
];

const TICKS = Array.from({ length: 72 }, (_, i) => {
  const long = i % 6 === 0;
  const [x1, y1] = polar(CX, CY, 88, i * 5);
  const [x2, y2] = polar(CX, CY, long ? 93 : 90.5, i * 5);
  return { x1, y1, x2, y2, long };
});

const DIVIDERS = Array.from({ length: 12 }, (_, i) => {
  const [x1, y1] = polar(CX, CY, 71, i * 30);
  const [x2, y2] = polar(CX, CY, 88, i * 30);
  return { x1, y1, x2, y2 };
});

const GLYPHS = SIGN_GLYPHS.map((d, i) => {
  const deg = i * 30 + 15;
  const [x, y] = polar(CX, CY, 79.5, deg);
  return { d, transform: `translate(${x} ${y}) rotate(${deg}) scale(0.95)` };
});

const INNER_DOTS = Array.from({ length: 12 }, (_, i) => polar(CX, CY, 60, i * 30 + 15));

function triangle(startDeg: number) {
  const points = [0, 120, 240].map((offset) => polar(CX, CY, 44, startDeg + offset));
  return `M${points.map(([x, y]) => `${x} ${y}`).join("L")}Z`;
}

const SUN_RAYS = Array.from({ length: 12 }, (_, i) => {
  const [x1, y1] = polar(CX, CY, 11, i * 30);
  const [x2, y2] = polar(CX, CY, i % 3 === 0 ? 17 : 14.5, i * 30);
  return { x1, y1, x2, y2 };
});

const PARTICLES = [
  { x: 30, y: 42, r: 1.4, duration: 7, delay: -1 },
  { x: 52, y: 150, r: 1.1, duration: 9, delay: -4 },
  { x: 22, y: 112, r: 1.7, duration: 8, delay: -2.5 },
  { x: 290, y: 50, r: 1.5, duration: 8.5, delay: -3 },
  { x: 300, y: 138, r: 1.1, duration: 7.5, delay: -5 },
  { x: 268, y: 176, r: 1.4, duration: 9.5, delay: -1.5 },
  { x: 262, y: 20, r: 1, duration: 6.5, delay: -6 },
];

/** Vedic Astrology: slowly turning zodiac wheel with a Shatkona core. */
export function ZodiacWheelIllustration({ reduced }: IllustrationProps) {
  const ringReveal: Variants = {
    hidden: { opacity: 0, rotate: -30, scale: 0.92 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: reduced ? { duration: 0 } : { delay: 0.2, duration: 1.6, ease: EASE_OUT },
    },
  };

  return (
    <svg
      viewBox="0 0 320 200"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="acard-zodiac-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD_LIGHT} stopOpacity="0.32" />
          <stop offset="55%" stopColor={GOLD} stopOpacity="0.08" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Celestial glow */}
      <motion.g variants={fadeIn(reduced, 0.1, 1.2)}>
        <circle cx={CX} cy={CY} r="100" fill="url(#acard-zodiac-glow)" />
        <circle
          cx={CX}
          cy={CY}
          r="36"
          fill="url(#acard-zodiac-glow)"
          className={loop("breathe", true)}
        />
      </motion.g>

      {/* Zodiac ring: sign marks between two bands, slowly rotating */}
      <motion.g variants={ringReveal}>
        <g className={loop("spin")} style={{ transformOrigin: ORIGIN, animationDuration: "140s" }}>
          <circle cx={CX} cy={CY} r="88" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.7" />
          <circle cx={CX} cy={CY} r="71" fill="none" stroke={GOLD} strokeWidth="0.6" opacity="0.45" />
          <g stroke={GOLD} strokeLinecap="round">
            {TICKS.map((t, i) => (
              <line
                key={i}
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
                strokeWidth={t.long ? 0.9 : 0.5}
                opacity={t.long ? 0.8 : 0.4}
              />
            ))}
          </g>
          <g stroke={GOLD} strokeWidth="0.5" opacity="0.45">
            {DIVIDERS.map((t, i) => (
              <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
            ))}
          </g>
          <g
            fill="none"
            stroke={GOLD_LIGHT}
            strokeWidth="0.85"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {GLYPHS.map((g, i) => (
              <path key={i} d={g.d} transform={g.transform} />
            ))}
          </g>
        </g>
      </motion.g>

      {/* Inner ring turns the other way */}
      <motion.g variants={fadeIn(reduced, 0.5)}>
        <g
          className={loop("spin-reverse", true)}
          style={{ transformOrigin: ORIGIN, animationDuration: "200s" }}
        >
          <circle
            cx={CX}
            cy={CY}
            r="60"
            fill="none"
            stroke={GOLD}
            strokeWidth="0.5"
            strokeDasharray="1 3"
            opacity="0.6"
          />
          {INNER_DOTS.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.1" fill={GOLD_LIGHT} opacity="0.7" />
          ))}
        </g>
      </motion.g>

      {/* Shatkona core */}
      <g fill="none" stroke={GOLD_LIGHT} strokeWidth="0.7" strokeLinejoin="round" opacity="0.55">
        <motion.path d={triangle(0)} variants={drawIn(reduced, 0.7, 1.4)} />
        <motion.path d={triangle(60)} variants={drawIn(reduced, 0.9, 1.4)} />
        <motion.circle cx={CX} cy={CY} r="44" variants={drawIn(reduced, 0.6, 1.6)} />
      </g>

      {/* Sun at the centre */}
      <motion.g variants={popIn(reduced, 1.1, 0.4)}>
        <g stroke={GOLD_LIGHT} strokeWidth="0.8" strokeLinecap="round" opacity="0.8">
          {SUN_RAYS.map((t, i) => (
            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
          ))}
        </g>
        <circle cx={CX} cy={CY} r="7.5" fill={GOLD_LIGHT} />
        <circle cx={CX} cy={CY} r="3" fill={CREAM} opacity="0.9" />
      </motion.g>

      {/* Floating gold particles */}
      <motion.g variants={fadeIn(reduced, 1.3)} fill={GOLD_LIGHT}>
        {PARTICLES.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.r}
            opacity="0.6"
            className={loop("float", true)}
            style={{ animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }}
          />
        ))}
      </motion.g>
    </svg>
  );
}
