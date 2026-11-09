export const BRAND = {
  name: "R. Anand",
  title: "Purohit | Pandit | Vedic & KP Astrologer",
  tagline: "Discover Your Path Through Vedic Wisdom",
  description: "Expert Vedic Astrology, KP Astrology, Jyothir Vaastu, Numerology consultations and traditional Pooja & Homa services in Bangalore. 15 years of practice.",
  whatsappNumber: "+918123235638",
  email: "anandradhakrishna@gmail.com",
  phone: "+91 8123235638",
  address: "No.137A & 137B, 11th Cross, Vishnupriya Nilaya, 1st Floor, Shirdi Saibaba Layout, Vidyamanya Nagar, Andrahalli, Bangalore – 560091",
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
