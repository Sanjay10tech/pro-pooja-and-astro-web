import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "The spiritual journey of R. Anand — from learning ancient Vedic scriptures to serving families with authentic rituals and astrology consultations.",
};

export default function MyJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
