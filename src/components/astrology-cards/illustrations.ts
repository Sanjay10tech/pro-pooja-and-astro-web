import type { ComponentType } from "react";
import type { IllustrationProps } from "./illustration-kit";
import { HoroscopeMatchIllustration } from "./horoscope-match-illustration";
import { KundliChartIllustration } from "./kundli-chart-illustration";
import { MuhuratClockIllustration } from "./muhurat-clock-illustration";
import { NumerologyPyramidIllustration } from "./numerology-pyramid-illustration";
import { PlanetaryOrbitsIllustration } from "./planetary-orbits-illustration";
import { ZodiacWheelIllustration } from "./zodiac-wheel-illustration";

/** Artwork and small category label for each homepage astrology service card. */
export const astrologyIllustrations = {
  "zodiac-wheel": { category: "Traditional Jyotish", Illustration: ZodiacWheelIllustration },
  "planetary-orbits": { category: "Krishnamurti Paddhati", Illustration: PlanetaryOrbitsIllustration },
  "kundli-chart": { category: "Rashi & Navamsha", Illustration: KundliChartIllustration },
  "horoscope-match": { category: "Ashtakoot Gun Milan", Illustration: HoroscopeMatchIllustration },
  "muhurat-clock": { category: "Auspicious Timing", Illustration: MuhuratClockIllustration },
  "numerology-pyramid": { category: "Pyramid Numerology", Illustration: NumerologyPyramidIllustration },
} satisfies Record<string, { category: string; Illustration: ComponentType<IllustrationProps> }>;

export type AstrologyIllustrationKey = keyof typeof astrologyIllustrations;
