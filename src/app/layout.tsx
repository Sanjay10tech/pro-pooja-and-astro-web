import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { WelcomePopup } from "@/components/layout/welcome-popup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101C35",
};

export const metadata: Metadata = {
  title: {
    default: "R. Anand — Vedic Astrologer, KP Astrologer & Purohit in Bangalore",
    template: "%s | R. Anand",
  },
  description:
    "Expert Vedic Astrology, KP Astrology, Jyothir Vaastu, Numerology consultations and traditional Pooja & Homa services in Bangalore. 15 years of practice. Book your consultation today.",
  keywords: [
    "Vedic Astrologer Bangalore",
    "KP Astrologer Bangalore",
    "Purohit Bangalore",
    "Pandit for Gruhapravesha",
    "Pooja Services Bangalore",
    "Homa Services",
    "Vaastu Consultant Bangalore",
    "Hebrew Pyramid Numerology",
    "Horoscope Matching",
    "Birth Time Rectification",
    "R. Anand astrologer",
  ],
  authors: [{ name: "R. Anand" }],
  creator: "R. Anand",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "R. Anand — Purohit & Vedic Astrologer",
    title: "R. Anand — Vedic Astrologer & Purohit in Bangalore",
    description:
      "Expert Vedic Astrology, KP Astrology, Jyothir Vaastu, Numerology and traditional Pooja & Homa services in Bangalore.",
  },
  twitter: {
    card: "summary_large_image",
    title: "R. Anand — Vedic Astrologer & Purohit in Bangalore",
    description:
      "Expert Vedic Astrology, KP Astrology, Jyothir Vaastu, Numerology and traditional Pooja & Homa services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background text-text antialiased">
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="pt-16 sm:pt-18 md:pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <WelcomePopup />
      </body>
    </html>
  );
}
