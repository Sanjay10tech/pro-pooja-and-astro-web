import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pooja & Homa Details — R. Anand Purohit & Vedic Astrologer",
  description:
    "Detailed information about this sacred Vedic ceremony performed by R. Anand — benefits, procedure, and booking details. Authentic Krishna Yajurveda tradition across Karnataka and South India.",
};

export default function PujaDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
