"use client";

import { motion } from "framer-motion";
import {
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

/* Pyramid: apex 160,26, base on y=168, five rows. */
const APEX_X = 160;
const APEX_Y = 26;
const BASE_Y = 168;
const HALF_BASE = 82;
const ROWS = 5;
const ROW_H = (BASE_Y - APEX_Y) / ROWS;
const STEP = (HALF_BASE * 2) / ROWS;

const OUTLINE = `M${APEX_X} ${APEX_Y}L${APEX_X + HALF_BASE} ${BASE_Y}H${APEX_X - HALF_BASE}Z`;

/** Inner triangular lattice: row lines plus lines parallel to both sides. */
const LATTICE = Array.from({ length: ROWS - 1 }, (_, i) => {
  const k = i + 1;
  const y = round(APEX_Y + k * ROW_H);
  const half = round((HALF_BASE * k) / ROWS);
  const baseX = round(APEX_X - HALF_BASE + STEP * k);
  const rightEnd = [round(baseX + (HALF_BASE * (ROWS - k)) / ROWS), round(BASE_Y - ROW_H * (ROWS - k))];
  const leftEnd = [round(baseX - (HALF_BASE * k) / ROWS), round(BASE_Y - ROW_H * k)];
  return (
    `M${APEX_X - half} ${y}H${APEX_X + half}` +
    `M${baseX} ${BASE_Y}L${rightEnd[0]} ${rightEnd[1]}` +
    `M${baseX} ${BASE_Y}L${leftEnd[0]} ${leftEnd[1]}`
  );
}).join("");

/** Decorative digits, apex row first. */
const DIGITS = [[1], [7, 3], [1, 6, 6], [4, 6, 9, 6], [3, 1, 5, 4, 2]].map((row, i) =>
  row.map((value, j) => ({
    value,
    x: round(APEX_X + (j - i / 2) * STEP),
    y: round(APEX_Y + ROW_H * (i + 2 / 3)),
  }))
);

const RING_DOTS = Array.from({ length: 9 }, (_, i) => polar(160, 104, 84, i * 40));

const FLOATING = [
  { value: 9, x: 40, y: 50, size: 12, duration: 8, delay: -2 },
  { value: 3, x: 62, y: 140, size: 9, duration: 9, delay: -5 },
  { value: 7, x: 26, y: 102, size: 10, duration: 7.5, delay: -1 },
  { value: 5, x: 282, y: 44, size: 10, duration: 8.5, delay: -3.5 },
  { value: 8, x: 266, y: 128, size: 12, duration: 9.5, delay: -6 },
  { value: 2, x: 298, y: 166, size: 9, duration: 7, delay: -4 },
];

/** Name Change Consultation: a numerology pyramid that turns gently in 3D. */
export function NumerologyPyramidIllustration({ reduced }: IllustrationProps) {
  return (
    <>
      {/* Back layer: glow, slow ring and floating numbers */}
      <svg
        viewBox="0 0 320 200"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id="acard-pyramid-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={GOLD_LIGHT} stopOpacity="0.28" />
            <stop offset="60%" stopColor={GOLD} stopOpacity="0.07" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.g variants={fadeIn(reduced, 0.1, 1.2)}>
          <circle cx="160" cy="108" r="96" fill="url(#acard-pyramid-glow)" />
          <g
            className={loop("spin", true)}
            style={{ transformOrigin: "160px 104px", animationDuration: "160s" }}
          >
            <circle
              cx="160"
              cy="104"
              r="84"
              fill="none"
              stroke={GOLD}
              strokeOpacity="0.3"
              strokeWidth="0.5"
              strokeDasharray="2 5"
            />
            {RING_DOTS.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="1.4" fill={GOLD_LIGHT} opacity="0.55" />
            ))}
          </g>
        </motion.g>
        <motion.g variants={fadeIn(reduced, 1.2)} className="font-serif" fill={GOLD_LIGHT}>
          {FLOATING.map((f) => (
            <text
              key={f.value}
              x={f.x}
              y={f.y}
              fontSize={f.size}
              textAnchor="middle"
              dominantBaseline="central"
              opacity="0.45"
              className={loop("float", true)}
              style={{ animationDuration: `${f.duration}s`, animationDelay: `${f.delay}s` }}
            >
              {f.value}
            </text>
          ))}
        </motion.g>
      </svg>

      {/* Front layer: the pyramid itself, swaying in perspective */}
      <div className={`absolute inset-0 ${loop("sway")}`}>
        <svg
          viewBox="0 0 320 200"
          className="h-full w-full"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d={`M${APEX_X - HALF_BASE - 10} 176H${APEX_X + HALF_BASE + 10}`}
            stroke={GOLD}
            strokeOpacity="0.35"
            strokeWidth="0.6"
          />
          <motion.path d={OUTLINE} fill="#0B1428" fillOpacity="0.5" variants={fadeIn(reduced, 0.2, 1)} />
          <motion.path
            d={OUTLINE}
            fill="none"
            stroke={GOLD_LIGHT}
            strokeWidth="1.1"
            strokeLinejoin="round"
            variants={drawIn(reduced, 0.2, 1.2)}
          />
          <motion.path
            d={LATTICE}
            fill="none"
            stroke={GOLD}
            strokeOpacity="0.6"
            strokeWidth="0.6"
            variants={drawIn(reduced, 0.7, 1.4)}
          />
          <g className="font-serif" fill={GOLD_LIGHT} textAnchor="middle">
            {DIGITS.map((row, i) => (
              <motion.g key={i} variants={fadeIn(reduced, 1.2 + (ROWS - 1 - i) * 0.2, 0.6)}>
                {row.map((digit) => (
                  <text
                    key={digit.x}
                    x={digit.x}
                    y={digit.y}
                    fontSize={i === 0 ? 10.5 : 9}
                    fontWeight={i === 0 ? 700 : 500}
                    dominantBaseline="central"
                  >
                    {digit.value}
                  </text>
                ))}
              </motion.g>
            ))}
          </g>
          <motion.circle
            cx={DIGITS[0][0].x}
            cy={DIGITS[0][0].y}
            r="8"
            fill="none"
            stroke={GOLD_LIGHT}
            strokeWidth="0.7"
            strokeOpacity="0.8"
            variants={popIn(reduced, 2.2, 0.5)}
          />
        </svg>
      </div>
    </>
  );
}
