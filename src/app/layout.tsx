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
    default: "R. Anand | Purohit & Vedic Astrologer",
    template: "%s | R. Anand Purohit & Vedic Astrologer",
  },
  description:
    "Authentic Vedic Astrology, KP Astrology, Vaastu, Numerology and sacred Pooja & Homa services by R. Anand — experienced Purohit and Vedic Astrologer.",
  keywords: [
    "vedic astrology",
    "KP astrology",
    "purohit",
    "pandit",
    "pooja services",
    "homa havan",
    "vaastu consultation",
    "numerology",
    "birth chart analysis",
    "horoscope matching",
    "R. Anand astrologer",
    "nakshatra shanti",
    "navagraha homa",
  ],
  authors: [{ name: "R. Anand Purohit & Vedic Astrologer" }],
  creator: "R. Anand Purohit & Vedic Astrologer",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "R. Anand Purohit & Vedic Astrologer",
    title: "R. Anand | Purohit & Vedic Astrologer",
    description:
      "Authentic Vedic Astrology, KP Astrology, Vaastu, Numerology and sacred Pooja & Homa services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "R. Anand | Purohit & Vedic Astrologer",
    description:
      "Authentic Vedic Astrology, KP Astrology, Vaastu, Numerology and sacred Pooja & Homa services.",
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
