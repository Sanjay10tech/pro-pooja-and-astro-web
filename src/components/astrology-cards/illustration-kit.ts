import type { Transition, Variants } from "framer-motion";

/**
 * Shared helpers for the homepage astrology card illustrations.
 *
 * Reveal animations use the "hidden" / "visible" variant labels, which every
 * illustration inherits from its card's scroll entrance. Ambient loops are
 * plain CSS (`acard-*` rules in globals.css) so they can be paused offscreen,
 * trimmed on touch screens and switched off for reduced motion.
 */

export interface IllustrationProps {
  /** User prefers reduced motion: reveal everything at once. */
  reduced: boolean;
}

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const INSTANT: Transition = { duration: 0 };

/** Stroke draws itself in once the card scrolls into view. */
export function drawIn(reduced: boolean, delay: number, duration = 1.2): Variants {
  return {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: reduced
        ? INSTANT
        : {
            pathLength: { delay, duration, ease: EASE_OUT },
            opacity: { delay, duration: 0.2 },
          },
    },
  };
}

/** Fades an element in once the card scrolls into view. */
export function fadeIn(reduced: boolean, delay: number, duration = 0.8): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduced ? INSTANT : { delay, duration, ease: "easeOut" },
    },
  };
}

/** Fades and grows an element from its own centre. */
export function popIn(reduced: boolean, delay: number, from = 0.6): Variants {
  return {
    hidden: { opacity: 0, scale: from },
    visible: {
      opacity: 1,
      scale: 1,
      transition: reduced ? INSTANT : { delay, duration: 0.7, ease: EASE_OUT },
    },
  };
}

type LoopName =
  | "spin"
  | "spin-reverse"
  | "float"
  | "twinkle"
  | "breathe"
  | "pulse"
  | "flash"
  | "dash"
  | "sway";

/**
 * Class names for an ambient CSS loop. Secondary loops are dropped on touch
 * screens so each illustration keeps a single, lightweight movement there.
 */
export function loop(name: LoopName, secondary = false) {
  return `acard-loop acard-${name}${secondary ? " acard-secondary" : ""}`;
}

/** Rounds to 2 decimals so server and client markup always match. */
export function round(value: number) {
  return Math.round(value * 100) / 100;
}

/** Point on a circle. 0° is 12 o'clock and angles grow clockwise. */
export function polar(cx: number, cy: number, r: number, deg: number): [number, number] {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [round(cx + r * Math.cos(rad)), round(cy + r * Math.sin(rad))];
}

export const GOLD = "#B89552";
export const GOLD_LIGHT = "#E5CC91";
export const CREAM = "#F3EBDD";
