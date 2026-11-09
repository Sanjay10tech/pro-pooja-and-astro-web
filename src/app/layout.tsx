import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { WelcomePopup } from "@/components/layout/welcome-popup";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
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
    "Expert Vedic Astrology, KP Astrology, Jyothir Vaastu, Hebrew Pyramid Numerology consultations and traditional Pooja & Homa services in Bangalore. R. Anand brings 15 years of experience in Vedic & KP Astrology, Vaastu and Numerology, with traditional family background. Book your consultation today.",
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
    "Purohit Bangalore",
    "Pandit for Gruhapravesha",
    "Pooja Services Bangalore",
    "Homa Services",
    "R. Anand astrologer",
  ],
  authors: [{ name: "R. Anand" }],
  creator: "R. Anand",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "R. Anand — Purohit & Vedic Astrologer",
    title: "R. Anand — Vedic Astrologer & Purohit in Bangalore | 15 Years Experience",
    description:
      "Expert Vedic Astrology, KP Astrology, Jyothir Vaastu, Hebrew Pyramid Numerology and traditional Pooja & Homa services in Bangalore. 15 years of practice in Vedic & KP Astrology.",
  },
  twitter: {
    card: "summary_large_image",
    title: "R. Anand — Vedic Astrologer & Purohit in Bangalore",
    description:
      "Expert Vedic Astrology, KP Astrology, Jyothir Vaastu, Hebrew Pyramid Numerology and traditional Pooja & Homa services. 15 years of experience.",
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
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
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
