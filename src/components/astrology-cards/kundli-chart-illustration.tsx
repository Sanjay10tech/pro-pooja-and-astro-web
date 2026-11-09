"use client";

import { motion } from "framer-motion";
import { GOLD, GOLD_LIGHT, drawIn, fadeIn, loop, type IllustrationProps } from "./illustration-kit";

/*
 * North Indian (diamond) chart, 150 units square, centred on 160,100.
 * Houses run anticlockwise from the top diamond (house 1).
 */
const SQUARE = "M85 25H235V175H85Z";
const DIAGONALS = "M85 25L235 175M235 25L85 175";
const DIAMOND = "M160 25L235 100L160 175L85 100Z";

/** Kendra houses 1, 4, 7 and 10, highlighted in turn. */
const KENDRAS = [
  "160,25 197.5,62.5 160,100 122.5,62.5",
  "85,100 122.5,62.5 160,100 122.5,137.5",
  "160,175 122.5,137.5 160,100 197.5,137.5",
  "235,100 197.5,137.5 160,100 197.5,62.5",
];

/** House numbers sit beside each house's inner corner. */
const HOUSE_NUMBERS = [
  [160, 88],
  [122.5, 52],
  [110, 62.5],
  [148, 100],
  [110, 137.5],
  [122.5, 149],
  [160, 112],
  [197.5, 149],
  [210, 137.5],
  [172, 100],
  [210, 62.5],
  [197.5, 52],
];

/** Decorative placements only (Rahu and Ketu kept opposite each other). */
const PLANETS = [
  { label: "Ju", x: 160, y: 57 },
  { label: "Mo", x: 118, y: 100 },
  { label: "Su", x: 201, y: 94 },
  { label: "Me", x: 201, y: 107 },
  { label: "Ve", x: 225, y: 62.5 },
  { label: "Sa", x: 160, y: 142 },
  { label: "Ma", x: 122.5, y: 165 },
  { label: "Ra", x: 95, y: 62.5 },
  { label: "Ke", x: 225, y: 137.5 },
];

/** Birth Chart Analysis: a Kundli that draws itself, then fills with planets. */
export function KundliChartIllustration({ reduced }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="acard-kundli-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD_LIGHT} stopOpacity="0.26" />
          <stop offset="60%" stopColor={GOLD} stopOpacity="0.07" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Faint glow and celestial arcs behind the chart */}
      <motion.g variants={fadeIn(reduced, 0.1, 1.2)}>
        <circle cx="160" cy="100" r="96" fill="url(#acard-kundli-glow)" className={loop("breathe", true)} />
        <g fill="none" stroke={GOLD} strokeWidth="0.5">
          <circle cx="160" cy="100" r="104" strokeOpacity="0.22" />
          <circle cx="160" cy="100" r="118" strokeOpacity="0.12" strokeDasharray="1 4" />
        </g>
        <rect
          x="78"
          y="18"
          width="164"
          height="164"
          rx="3"
          fill="#0B1428"
          fillOpacity="0.55"
          stroke={GOLD}
          strokeOpacity="0.22"
          strokeWidth="0.6"
        />
      </motion.g>

      {/* Kendra houses glow one after another */}
      <g fill={GOLD} fillOpacity="0.16">
        {KENDRAS.map((points, i) => (
          <polygon
            key={i}
            points={points}
            opacity="0"
            className={loop("flash", true)}
            style={{ animationDelay: `${i * 1.5}s` }}
          />
        ))}
      </g>

      {/* Chart lines draw in */}
      <g fill="none" stroke={GOLD_LIGHT} strokeLinejoin="round">
        <motion.path d={SQUARE} strokeWidth="1.1" strokeOpacity="0.85" variants={drawIn(reduced, 0.25, 1.1)} />
        <motion.path d={DIAGONALS} strokeWidth="0.7" strokeOpacity="0.6" variants={drawIn(reduced, 0.6, 1.1)} />
        <motion.path d={DIAMOND} strokeWidth="0.9" strokeOpacity="0.75" variants={drawIn(reduced, 0.9, 1.1)} />
      </g>

      {/* House numbers */}
      <motion.g variants={fadeIn(reduced, 1.3)} fill={GOLD} fillOpacity="0.75" fontSize="6.5">
        {HOUSE_NUMBERS.map(([x, y], i) => (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="central">
            {i + 1}
          </text>
        ))}
      </motion.g>

      {/* Planets appear one by one */}
      <g className="font-serif" fill={GOLD_LIGHT} fontSize="9" fontWeight="600">
        {PLANETS.map((planet, i) => (
          <motion.text
            key={planet.label}
            x={planet.x}
            y={planet.y}
            textAnchor="middle"
            dominantBaseline="central"
            variants={fadeIn(reduced, 1.5 + i * 0.14, 0.6)}
          >
            {planet.label}
          </motion.text>
        ))}
      </g>
    </svg>
  );
}
