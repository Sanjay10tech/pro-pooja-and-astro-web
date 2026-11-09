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
  type IllustrationProps,
} from "./illustration-kit";

const CX = 160;
const CY = 100;
const ORIGIN = `${CX}px ${CY}px`;

/** Planet marks drawn in an 8×8 box around 0,0. */
const MOON = { d: "M1.6 -3A3.2 3.2 0 1 0 1.6 3A3.4 3.4 0 0 1 1.6 -3Z", filled: true };
const MARS = {
  d: "M-3 0.8A2.2 2.2 0 1 0 1.4 0.8A2.2 2.2 0 1 0 -3 0.8M0.8 -0.8L3.4 -3.4M1.2 -3.4H3.4V-1.2",
  filled: false,
};
const JUPITER = { d: "M-3 -2.6C-1.4 -4 0.6 -2.8 -0.6 -0.6L-2.6 2.2H3.2M1.8 -3.8V3.8", filled: false };
const SATURN = {
  d: "M-2 -3.8V3M-3.4 -2.6H-0.6M-2 0C-0.8 -1.6 2.6 -1.6 2.6 0.8C2.6 2.2 1.2 2.8 1.4 3.8",
  filled: false,
};

const ORBITS = [
  { r: 30, duration: 18, dashed: false, planets: [{ deg: 210, size: 2.4, glyph: MOON }] },
  { r: 52, duration: 30, dashed: true, planets: [{ deg: 320, size: 2.8, glyph: MARS }] },
  {
    r: 74,
    duration: 48,
    dashed: false,
    planets: [
      { deg: 60, size: 3.6, glyph: JUPITER },
      { deg: 235, size: 3.1, glyph: SATURN },
    ],
  },
].map((orbit) => ({
  ...orbit,
  planets: orbit.planets.map((planet) => {
    const [x, y] = polar(CX, CY, orbit.r, planet.deg);
    return { ...planet, x, y };
  }),
}));

/** 27 nakshatra divisions on the outer dial. */
const DIAL_TICKS = Array.from({ length: 27 }, (_, i) => {
  const deg = (i * 360) / 27;
  const [x1, y1] = polar(CX, CY, 86, deg);
  const [x2, y2] = polar(CX, CY, i % 3 === 0 ? 92 : 89.5, deg);
  return { x1, y1, x2, y2 };
});

const CONSTELLATIONS = [
  [
    [22, 52],
    [40, 30],
    [62, 44],
    [56, 72],
    [32, 84],
  ],
  [
    [258, 150],
    [276, 128],
    [298, 140],
    [292, 170],
    [270, 180],
  ],
].map((stars) => ({
  stars,
  d: `M${stars.map(([x, y]) => `${x} ${y}`).join("L")}`,
}));

/** KP System: planets on slow orbits inside a 27-division dial. */
export function PlanetaryOrbitsIllustration({ reduced }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="acard-orbit-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD_LIGHT} stopOpacity="0.55" />
          <stop offset="45%" stopColor={GOLD} stopOpacity="0.16" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer dial */}
      <motion.g variants={fadeIn(reduced, 0.1)}>
        <circle cx={CX} cy={CY} r="86" fill="none" stroke={GOLD} strokeWidth="0.5" opacity="0.4" />
        <g stroke={GOLD} strokeWidth="0.6" strokeLinecap="round" opacity="0.5">
          {DIAL_TICKS.map((t, i) => (
            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
          ))}
        </g>
      </motion.g>

      {/* Constellation connection lines */}
      {CONSTELLATIONS.map((constellation, i) => (
        <g key={i}>
          <motion.path
            d={constellation.d}
            fill="none"
            stroke={GOLD_LIGHT}
            strokeWidth="0.6"
            strokeLinejoin="round"
            strokeOpacity="0.45"
            variants={drawIn(reduced, 0.9 + i * 0.3, 1.6)}
          />
          <motion.g variants={fadeIn(reduced, 0.8 + i * 0.3)} fill={CREAM}>
            {constellation.stars.map(([x, y], j) => (
              <circle
                key={j}
                cx={x}
                cy={y}
                r={j % 2 === 0 ? 1.6 : 1.1}
                opacity="0.8"
                className={loop("twinkle", true)}
                style={{ animationDelay: `${-(i * 5 + j) * 0.9}s` }}
              />
            ))}
          </motion.g>
        </g>
      ))}

      {/* Orbit paths */}
      {ORBITS.map((orbit, i) =>
        orbit.dashed ? (
          <motion.circle
            key={orbit.r}
            cx={CX}
            cy={CY}
            r={orbit.r}
            fill="none"
            stroke={GOLD}
            strokeWidth="0.6"
            strokeDasharray="1.5 3.5"
            strokeOpacity="0.7"
            variants={fadeIn(reduced, 0.3 + i * 0.2)}
          />
        ) : (
          <motion.circle
            key={orbit.r}
            cx={CX}
            cy={CY}
            r={orbit.r}
            fill="none"
            stroke={GOLD}
            strokeWidth="0.6"
            strokeOpacity="0.55"
            transform={`rotate(-90 ${CX} ${CY})`}
            variants={drawIn(reduced, 0.3 + i * 0.2, 1.4)}
          />
        )
      )}

      {/* Sun */}
      <motion.g variants={popIn(reduced, 0.2, 0.5)}>
        <circle cx={CX} cy={CY} r="24" fill="url(#acard-orbit-sun)" />
        <circle cx={CX} cy={CY} r="10" fill="none" stroke={GOLD_LIGHT} strokeWidth="0.5" opacity="0.6" />
        <circle cx={CX} cy={CY} r="6.5" fill={GOLD_LIGHT} />
      </motion.g>

      {/* Planets: each orbit turns at its own pace; marks stay upright */}
      {ORBITS.map((orbit, i) => (
        <g
          key={orbit.r}
          className={loop("spin")}
          style={{ transformOrigin: ORIGIN, animationDuration: `${orbit.duration}s` }}
        >
          {orbit.planets.map((planet) => (
            <motion.g key={planet.deg} variants={fadeIn(reduced, 0.9 + i * 0.25)}>
              <circle cx={planet.x} cy={planet.y} r={planet.size + 3.5} fill={GOLD} opacity="0.18" />
              <circle cx={planet.x} cy={planet.y} r={planet.size} fill={GOLD_LIGHT} />
              <g
                className={loop("spin-reverse")}
                style={{
                  transformOrigin: `${planet.x}px ${planet.y}px`,
                  animationDuration: `${orbit.duration}s`,
                }}
              >
                <path
                  d={planet.glyph.d}
                  transform={`translate(${planet.x + 8} ${planet.y - 8}) scale(1.05)`}
                  fill={planet.glyph.filled ? GOLD_LIGHT : "none"}
                  stroke={planet.glyph.filled ? "none" : GOLD_LIGHT}
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </motion.g>
          ))}
        </g>
      ))}
    </svg>
  );
}
