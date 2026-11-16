import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories, Wisdom & Tradition — Blog",
  description:
    "Explore articles on Vedic knowledge, spiritual practices, astrology insights, and pooja guides from SaiAstroPooja.",
  openGraph: {
    title: "Stories, Wisdom & Tradition — SaiAstroPooja Blog",
    description:
      "Explore the depth of Vedic knowledge, spiritual practices, and astrology through our curated articles.",
    type: "website",
    siteName: "SaiAstroPooja",
    locale: "en_IN",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
