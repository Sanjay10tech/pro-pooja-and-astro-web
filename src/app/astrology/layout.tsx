import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vedic & KP Astrology Services in Bangalore | R. Anand — 15 Years Experience",
  description:
    "Expert Vedic Astrology and KP System consultations in Bangalore. Birth chart analysis, horoscope matching, birth time rectification, marriage muhurat, and Hebrew Pyramid Numerology. Traditional family background with 15 years of practice.",
  keywords: [
    "Vedic Astrologer Bangalore",
    "KP Astrologer",
    "KP System of Astrology",
    "Horoscope Matching",
    "Birth Time Rectification",
    "Marriage Muhurat",
    "Hebrew Pyramid Numerology",
    "Auspicious Date Selection",
    "Jyothir Vaastu",
    "Birth Chart Analysis",
    "R. Anand",
  ],
  openGraph: {
    title: "Vedic & KP Astrology Services in Bangalore | R. Anand",
    description:
      "Expert Vedic Astrology and KP System consultations. Birth chart analysis, horoscope matching, birth time rectification, and Hebrew Pyramid Numerology. 15 years of practice.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic & KP Astrology Services | R. Anand",
    description:
      "Expert Vedic Astrology and KP System consultations in Bangalore. Traditional family background with 15 years of practice.",
  },
};

export default function AstrologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
