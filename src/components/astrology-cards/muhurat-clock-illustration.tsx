"use client";

import { motion } from "framer-motion";
import {
  CREAM,
  GOLD,
  GOLD_LIGHT,
  drawIn,
  fadeIn,
  loop,
  polar,
  popIn,
  round,
  type IllustrationProps,
} from "./illustration-kit";

/* Calendar panel */
const COL_PITCH = 116 / 7;
const ROW_PITCH = 18.8;
const FIRST_WEEKDAY = 2;
const HIGHLIGHTED = [6, 17, 26];

const DAYS = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1;
  const slot = i + FIRST_WEEKDAY;
  return {
    day,
    x: round(32 + COL_PITCH * ((slot % 7) + 0.5)),
    y: round(64 + ROW_PITCH * (Math.floor(slot / 7) + 0.5)),
    highlighted: HIGHLIGHTED.includes(day),
  };
});

const CELLS = Array.from({ length: 35 }, (_, slot) => ({
  x: round(32 + COL_PITCH * (slot % 7) + 1.3),
  y: round(64 + ROW_PITCH * Math.floor(slot / 7) + 1.9),
}));

/* Clock face */
const CX = 236;
const CY = 100;
const ORIGIN = `${CX}px ${CY}px`;

const HOUR_TICKS = Array.from({ length: 12 }, (_, i) => {
  const quarter = i % 3 === 0;
  const [x1, y1] = polar(CX, CY, quarter ? 39 : 42, i * 30);
  const [x2, y2] = polar(CX, CY, 46.5, i * 30);
  return { x1, y1, x2, y2, quarter };
});

const MINUTE_DOTS = Array.from({ length: 60 }, (_, i) => i)
  .filter((i) => i % 5 !== 0)
  .map((i) => polar(CX, CY, 46, i * 6));

/** Auspicious window on the rim: 10:00 to 11:30. */
const WINDOW_ARC = (() => {
  const [x1, y1] = polar(CX, CY, 51.5, 300);
  const [x2, y2] = polar(CX, CY, 51.5, 345);
  return `M${x1} ${y1}A51.5 51.5 0 0 1 ${x2} ${y2}`;
})();

/** Muhurat Consultation: a Vedic calendar with auspicious dates and a slow golden clock. */
export function MuhuratClockIllustration({ reduced }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="acard-muhurat-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD_LIGHT} stopOpacity="0.28" />
          <stop offset="60%" stopColor={GOLD} stopOpacity="0.07" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Calendar */}
      <motion.g variants={fadeIn(reduced, 0.1)}>
        <rect
          x="24"
          y="38"
          width="132"
          height="126"
          rx="6"
          fill="#0B1428"
          fillOpacity="0.75"
          stroke={GOLD}
          strokeOpacity="0.4"
          strokeWidth="0.8"
        />
        <line x1="24" y1="58" x2="156" y2="58" stroke={GOLD} strokeOpacity="0.35" strokeWidth="0.6" />
        {/* Header: crescent moon, title lines, page marks */}
        <path d="M39.6 44A4.4 4.4 0 1 0 39.6 52A4.6 4.6 0 0 1 39.6 44Z" fill={GOLD_LIGHT} />
        <g stroke={GOLD_LIGHT} strokeLinecap="round">
          <line x1="48" y1="45.5" x2="92" y2="45.5" strokeWidth="1.6" strokeOpacity="0.55" />
          <line x1="48" y1="51" x2="74" y2="51" strokeWidth="1" strokeOpacity="0.3" />
        </g>
        <g fill={GOLD}>
          <circle cx="132" cy="48" r="1.4" opacity="0.5" />
          <circle cx="139" cy="48" r="1.4" opacity="0.5" />
          <circle cx="146" cy="48" r="1.4" />
        </g>
        <g fill="none" stroke={GOLD} strokeOpacity="0.14" strokeWidth="0.5">
          {CELLS.map((cell, i) => (
            <rect key={i} x={cell.x} y={cell.y} width="14" height="15" rx="2" />
          ))}
        </g>
        <g fill={CREAM} fillOpacity="0.5" fontSize="6.5">
          {DAYS.filter((d) => !d.highlighted).map((d) => (
            <text key={d.day} x={d.x} y={d.y} textAnchor="middle" dominantBaseline="central">
              {d.day}
            </text>
          ))}
        </g>
      </motion.g>

      {/* Auspicious dates */}
      {DAYS.filter((d) => d.highlighted).map((d, i) => (
        <motion.g key={d.day} variants={popIn(reduced, 1 + i * 0.3)}>
          <circle
            cx={d.x}
            cy={d.y}
            r="9.5"
            fill={GOLD}
            fillOpacity="0.2"
            opacity="0.6"
            className={loop("breathe", true)}
            style={{ animationDuration: "3.6s", animationDelay: `${i * 1.2}s` }}
          />
          <circle
            cx={d.x}
            cy={d.y}
            r="6.6"
            fill={GOLD}
            fillOpacity="0.25"
            stroke={GOLD_LIGHT}
            strokeWidth="0.8"
          />
          <text
            x={d.x}
            y={d.y}
            fill={GOLD_LIGHT}
            fontSize="6.5"
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {d.day}
          </text>
        </motion.g>
      ))}

      {/* Clock */}
      <motion.g variants={fadeIn(reduced, 0.3)}>
        <circle cx={CX} cy={CY} r="66" fill="url(#acard-muhurat-glow)" />
        <circle cx={CX} cy={CY} r="54" fill="#0B1428" fillOpacity="0.7" stroke={GOLD_LIGHT} strokeOpacity="0.7" strokeWidth="0.9" />
        <circle cx={CX} cy={CY} r="49" fill="none" stroke={GOLD} strokeOpacity="0.35" strokeWidth="0.5" />
        <g stroke={GOLD_LIGHT} strokeLinecap="round">
          {HOUR_TICKS.map((t, i) => (
            <line
              key={i}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              strokeWidth={t.quarter ? 1.4 : 0.8}
              strokeOpacity={t.quarter ? 0.95 : 0.6}
            />
          ))}
        </g>
        <g fill={GOLD}>
          {MINUTE_DOTS.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="0.35" opacity="0.6" />
          ))}
        </g>
      </motion.g>

      {/* Auspicious time window */}
      <motion.g variants={fadeIn(reduced, 1.4)}>
        <path
          d={WINDOW_ARC}
          fill="none"
          stroke={GOLD_LIGHT}
          strokeWidth="6"
          strokeOpacity="0.16"
          strokeLinecap="round"
          className={loop("breathe", true)}
        />
      </motion.g>
      <motion.path
        d={WINDOW_ARC}
        fill="none"
        stroke={GOLD_LIGHT}
        strokeWidth="2.2"
        strokeLinecap="round"
        variants={drawIn(reduced, 1.1, 1)}
      />

      {/* Hands: the minute hand sweeps slowly, the hour hand barely moves */}
      <motion.g variants={fadeIn(reduced, 0.7)} stroke={GOLD_LIGHT} strokeLinecap="round">
        <g transform={`rotate(315 ${CX} ${CY})`}>
          <g className={loop("spin")} style={{ transformOrigin: ORIGIN, animationDuration: "1440s" }}>
            <line x1={CX} y1={CY + 5} x2={CX} y2={CY - 26} strokeWidth="2.2" />
          </g>
        </g>
        <g transform={`rotate(20 ${CX} ${CY})`}>
          <g className={loop("spin")} style={{ transformOrigin: ORIGIN, animationDuration: "120s" }}>
            <line x1={CX} y1={CY + 8} x2={CX} y2={CY - 40} strokeWidth="1" />
          </g>
        </g>
        <circle cx={CX} cy={CY} r="3.2" fill={GOLD_LIGHT} stroke="none" />
        <circle cx={CX} cy={CY} r="1.2" fill="#0B1428" stroke="none" />
      </motion.g>
    </svg>
  );
}
