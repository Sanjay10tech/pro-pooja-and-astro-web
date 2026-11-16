import { BRAND } from "@/lib/constants";

/**
 * Central WhatsApp helpers. Every WhatsApp link on the site must be built here
 * (or via WHATSAPP_LINK in constants) so they all point to the same ADMIN chat.
 * The admin number lives in BRAND.whatsappNumber (override: NEXT_PUBLIC_WHATSAPP_NUMBER).
 */

/** Digits-only admin number, as wa.me expects (no "+", spaces or dashes). */
export const ADMIN_WHATSAPP_DIGITS = BRAND.whatsappNumber.replace(/\D/g, "");

/** Click-to-chat URL for the admin. With a message, the chat opens with the text pre-filled. */
export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${ADMIN_WHATSAPP_DIGITS}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export interface BookingMessageInput {
  bookingId: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  date: string;
  time: string;
  location?: string;
  notes?: string;
}

/** "2026-11-12" -> "12 November 2026". Falls back to the raw value if it is not an ISO date. */
export function formatBookingDate(value: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;
  const [, y, m, d] = match.map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

const clean = (value: string | undefined, fallback: string, max = 500) => {
  const text = (value ?? "").replace(/\s+/g, " ").trim();
  if (!text) return fallback;
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
};

/** Professional booking summary that the customer sends to the admin on WhatsApp. */
export function buildBookingMessage(input: BookingMessageInput): string {
  return [
    `🙏 NEW BOOKING REQUEST – ${BRAND.name}`,
    "",
    `Booking ID: ${input.bookingId}`,
    "",
    "CUSTOMER DETAILS",
    `Name: ${clean(input.name, "-")}`,
    `Mobile: ${clean(input.phone, "-")}`,
    `Email: ${clean(input.email, "Not provided")}`,
    "",
    "BOOKING DETAILS",
    `Service: ${clean(input.service, "-")}`,
    `Date: ${formatBookingDate(input.date)}`,
    `Time: ${clean(input.time, "-")}`,
    `Location: ${clean(input.location, "Not provided")}`,
    `Additional Details: ${clean(input.notes, "None")}`,
    "",
    "Please review this booking and contact the customer for confirmation.",
    "",
    "Thank you!",
    BRAND.name,
  ].join("\n");
}
