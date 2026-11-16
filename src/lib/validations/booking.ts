import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+]?[\d\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").or(z.literal("")),
  pooja: z.string().min(1, "Please select a pooja"),
  preferredDate: z.string().optional(),
  location: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const bookingFormSchema = z.object({
  // Step 1
  pooja: z.string().min(1, "Please select a pooja"),
  // Step 2
  pandit: z.string().min(1, "Please select a pandit"),
  // Step 3
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
  // Step 4
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+]?[\d\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").or(z.literal("")),
  location: z.string().min(2, "Please enter your location"),
  notes: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export function generateWhatsAppMessage(data: {
  pooja?: string;
  date?: string;
  name?: string;
  location?: string;
}): string {
  let message = "Namaste 🙏";
  if (data.pooja) {
    message += `, I would like to enquire about ${data.pooja}`;
    if (data.location) message += ` in ${data.location}`;
    if (data.date) message += ` on ${data.date}`;
    message += ".";
  } else {
    message += ", I would like to enquire about pooja services.";
  }
  if (data.name) message += `\n\nName: ${data.name}`;
  return message;
}

export function generateBookingId(): string {
  const prefix = "SAP";
  const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}${random}`;
}
