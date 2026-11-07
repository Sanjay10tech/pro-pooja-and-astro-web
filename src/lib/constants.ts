export const BRAND = {
  name: "R. Anand Purohit & Vedic Astrologer",
  tagline: "Authentic Vedic Wisdom, Celestial Guidance",
  description:
    "Expert Vedic Astrology, KP Astrology, Vaastu, Numerology and sacred Pooja & Homa services.",
  whatsappNumber: "+918123235638",
  email: "anandradhakrishna@gmail.com",
  phone: "+91 81232 35638",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/my-journey" },
  { label: "Astrology", href: "/astrology" },
  { label: "Pooja Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
] as const;

export const WHATSAPP_LINK = `https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, "")}`;
