"use client";

import { motion } from "framer-motion";
import {
  GOLD,
  GOLD_LIGHT,
  drawIn,
  fadeIn,
  loop,
  popIn,
  type IllustrationProps,
} from "./illustration-kit";

const HALF = 44;

/** North Indian chart (square, diagonals, diamond) as a single path. */
function chartPath(cx: number, cy: number) {
  const l = cx - HALF;
  const r = cx + HALF;
  const t = cy - HALF;
  const b = cy + HALF;
  return `M${l} ${t}H${r}V${b}H${l}Z M${l} ${t}L${r} ${b}M${r} ${t}L${l} ${b} M${cx} ${t}L${r} ${cy}L${cx} ${b}L${l} ${cy}Z`;
}

/** House 7, the bottom diamond. */
function seventhHouse(cx: number, cy: number) {
  const q = HALF / 2;
  return `${cx},${cy + HALF} ${cx - q},${cy + q} ${cx},${cy} ${cx + q},${cy + q}`;
}

const CHARTS = [
  {
    cx: 90,
    cy: 100,
    planets: [
      [90, 76],
      [53.3, 122],
      [126.7, 78],
    ],
  },
  {
    cx: 230,
    cy: 100,
    planets: [
      [230, 76],
      [193.3, 78],
      [266.7, 122],
    ],
  },
];

/** Horoscope Matching: two charts joined by a golden line that meets in the middle. */
export function HoroscopeMatchIllustration({ reduced }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="acard-match-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD_LIGHT} stopOpacity="0.4" />
          <stop offset="50%" stopColor={GOLD} stopOpacity="0.1" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Arcs embracing both charts */}
      <motion.g
        variants={fadeIn(reduced, 1.1, 1)}
        fill="none"
        stroke={GOLD}
        strokeWidth="0.6"
        strokeOpacity="0.5"
        strokeDasharray="1 3"
      >
        <path d="M90 56C122 24 198 24 230 56" className={loop("dash", true)} style={{ animationDuration: "5s" }} />
        <path d="M90 144C122 176 198 176 230 144" className={loop("dash", true)} style={{ animationDuration: "5s" }} />
      </motion.g>

      {CHARTS.map((chart, i) => (
        <g key={chart.cx}>
          <motion.rect
            x={chart.cx - HALF - 6}
            y={chart.cy - HALF - 6}
            width={HALF * 2 + 12}
            height={HALF * 2 + 12}
            rx="3"
            fill="#0B1428"
            fillOpacity="0.6"
            stroke={GOLD}
            strokeOpacity="0.2"
            strokeWidth="0.6"
            variants={fadeIn(reduced, 0.1 + i * 0.15)}
          />
          {/* House 7 (partnership) glows in both charts together */}
          <polygon
            points={seventhHouse(chart.cx, chart.cy)}
            fill={GOLD}
            fillOpacity="0.22"
            opacity="0.5"
            className={loop("breathe", true)}
            style={{ animationDuration: "3.6s" }}
          />
          <motion.path
            d={chartPath(chart.cx, chart.cy)}
            fill="none"
            stroke={GOLD_LIGHT}
            strokeWidth="0.8"
            strokeOpacity="0.75"
            strokeLinejoin="round"
            variants={drawIn(reduced, 0.2 + i * 0.15, 1.3)}
          />
          <motion.g variants={fadeIn(reduced, 1 + i * 0.15)} fill={GOLD_LIGHT}>
            {chart.planets.map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <circle cx={x} cy={y} r="3.6" opacity="0.18" />
                <circle cx={x} cy={y} r="1.7" />
              </g>
            ))}
          </motion.g>
        </g>
      ))}

      {/* Connecting line: both halves reach for the centre */}
      <motion.path
        d="M134 100H151M169 100H186"
        stroke={GOLD_LIGHT}
        strokeWidth="0.6"
        strokeOpacity="0.3"
        variants={fadeIn(reduced, 0.9)}
      />
      <g fill="none" stroke={GOLD_LIGHT} strokeWidth="1.2" strokeLinecap="round">
        <motion.path d="M134 100H152" variants={drawIn(reduced, 0.9, 0.8)} />
        <motion.path d="M186 100H168" variants={drawIn(reduced, 0.9, 0.8)} />
      </g>
      <motion.g variants={fadeIn(reduced, 1.6)} fill="none" stroke={GOLD_LIGHT} strokeWidth="1.2" strokeDasharray="2 4">
        <path d="M134 100H152" className={loop("dash")} />
        <path d="M186 100H168" className={loop("dash")} />
      </motion.g>

      {/* Matching emblem with a soft pulse */}
      <motion.g variants={popIn(reduced, 1.5, 0.4)}>
        <circle cx="160" cy="100" r="18" fill="url(#acard-match-glow)" />
        <circle
          cx="160"
          cy="100"
          r="9"
          fill="none"
          stroke={GOLD_LIGHT}
          strokeWidth="0.7"
          opacity="0"
          className={loop("pulse", true)}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <g fill="none" stroke={GOLD_LIGHT} strokeWidth="0.9">
          <circle cx="156.5" cy="100" r="5.5" />
          <circle cx="163.5" cy="100" r="5.5" />
        </g>
        <circle cx="160" cy="100" r="1.3" fill={GOLD_LIGHT} />
      </motion.g>
    </svg>
  );
}
