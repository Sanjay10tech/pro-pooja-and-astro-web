import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions | R. Anand",
  },
  description:
    "Review the Terms & Conditions for R. Anand's astrology, Vaastu, numerology, Pooja and Homa services, including bookings, payments and consultations.",
};

const sections = [
  {
    title: "Introduction",
    content: (
      <div className="space-y-4">
        <p>Welcome to R. Anand – Purohit & Vedic Astrologer.</p>
        <p>
          By accessing or using this website, you agree to these Terms &
          Conditions. Please read them carefully before using our services.
        </p>
      </div>
    ),
  },
  {
    title: "Services Offered",
    content: (
      <div className="space-y-6">
        <p>Our services include:</p>

        <div className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-maroon">
            Astrology Services
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Vedic Astrology.</li>
            <li>KP System of Astrology.</li>
            <li>Horoscope Analysis.</li>
            <li>Birth Time Rectification.</li>
            <li>Horoscope Matching.</li>
            <li>Marriage Compatibility Consultation.</li>
            <li>Auspicious Muhurat Selection.</li>
            <li>Hebrew Pyramid Numerology.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-maroon">
            Pooja Services
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Gruhapravesha.</li>
            <li>Sathyanarayana Pooja & Udyapan.</li>
            <li>Vaastu and Sudarshana Aradhana.</li>
            <li>Navagraha and Nakshatra Shanthi.</li>
            <li>Narayana Bali.</li>
            <li>Sarpa Sanskar and Aslesha Bali Pooja.</li>
            <li>Navagraha and Mahamrityunjaya Japa.</li>
            <li>Other listed traditional Poojas.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-maroon">
            Homa & Havan Services
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Mahaganapathi Homa.</li>
            <li>Navagraha Homa.</li>
            <li>Mahamrityunjaya Homa.</li>
            <li>Rudra and Aghora Rudra Homa.</li>
            <li>Mahasudarshana Homa.</li>
            <li>Rakshoghna Homa.</li>
            <li>Chandi Parayana & Homa.</li>
            <li>Other listed traditional rituals.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-maroon">
            Other Services
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Vaastu Consultation.</li>
            <li>Hebrew Pyramid Numerology.</li>
            <li>Baby Naming and Name Consultation.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Booking and Enquiries",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Website booking requests are subject to confirmation.</li>
        <li>
          Submitting an enquiry does not automatically guarantee a confirmed
          appointment.
        </li>
        <li>Users must provide accurate contact and booking information.</li>
        <li>
          The date, time, location and requirements of Pooja services should be
          discussed and confirmed in advance.
        </li>
        <li>Service availability may vary.</li>
      </ul>
    ),
  },
  {
    title: "Consultation Disclaimer",
    content: (
      <div className="space-y-4">
        <p>
          Astrology, Vaastu and Numerology consultations are based on
          traditional systems and the practitioner&apos;s knowledge and
          interpretation.
        </p>
        <p>
          Consultations are intended for informational and traditional guidance
          purposes.
        </p>
        <p>
          Astrological predictions and numerological interpretations are not
          guarantees of future events or specific outcomes.
        </p>
        <p>
          They should not replace professional medical, legal, financial or
          psychological advice.
        </p>
      </div>
    ),
  },
  {
    title: "Pooja and Homa Services",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Ritual requirements should be discussed before booking.</li>
        <li>
          The required Samagri, arrangements, location and timing should be
          mutually confirmed.
        </li>
        <li>
          Additional arrangements or expenses, if any, should be communicated
          before confirmation.
        </li>
        <li>
          Ritual performance is subject to availability and practical
          arrangements.
        </li>
      </ul>
    ),
  },
  {
    title: "Payments and Charges",
    content: (
      <div className="space-y-4">
        <p>
          Applicable service charges, advance payments and other costs will be
          communicated before booking confirmation.
        </p>
        <p>
          Any payment terms will be agreed upon before the service is finalized.
        </p>
        <p>
          Do not assume that an enquiry automatically creates a payment
          obligation.
        </p>
      </div>
    ),
  },
  {
    title: "Cancellation and Rescheduling",
    content: (
      <div className="space-y-4">
        <p>
          Please contact us as early as possible if you need to cancel or
          reschedule a confirmed booking.
        </p>
        <p>
          Cancellation, refund and rescheduling terms will be communicated and
          agreed upon at the time of booking.
        </p>
        <p>
          Any applicable refund will be handled according to the agreed booking
          terms and applicable law.
        </p>
      </div>
    ),
  },
  {
    title: "User Responsibilities",
    content: (
      <div className="space-y-4">
        <p>Users agree to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide accurate information.</li>
          <li>Respect agreed appointment timings.</li>
          <li>Communicate special requirements in advance.</li>
          <li>Use the website lawfully.</li>
          <li>Avoid submitting false, misleading or harmful information.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <div className="space-y-4">
        <p>
          Website content, text, graphics, branding, images and other materials
          are protected by applicable intellectual property laws.
        </p>
        <p>
          They may not be copied, reproduced or commercially distributed
          without prior permission, except where permitted by law.
        </p>
      </div>
    ),
  },
  {
    title: "Third-Party Links",
    content: (
      <div className="space-y-4">
        <p>
          Our website may contain links to third-party platforms such as
          WhatsApp and Google Maps.
        </p>
        <p>
          We are not responsible for the content, availability or policies of
          external websites.
        </p>
      </div>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <div className="space-y-4">
        <p>
          We do not guarantee specific outcomes from Astrology, Vaastu,
          Numerology or traditional ritual services.
        </p>
        <p>
          Nothing in these terms excludes liability that cannot legally be
          excluded under applicable law.
        </p>
      </div>
    ),
  },
  {
    title: "Changes to Terms",
    content: (
      <p>
        We reserve the right to update these Terms & Conditions when necessary.
        Updated terms will be published on this page.
      </p>
    ),
  },
  {
    title: "Governing Law",
    content: (
      <p>
        These Terms & Conditions are subject to the applicable laws of India.
        Any legal disputes will be subject to the jurisdiction of competent
        courts in Bengaluru, Karnataka, subject to applicable law.
      </p>
    ),
  },
  {
    title: "Contact Information",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-maroon">
          R. Anand – Purohit & Vedic Astrologer
        </p>
        <address className="space-y-3 not-italic">
          <p>
            <strong>Mobile:</strong>{" "}
            <a
              href="tel:+918123235638"
              className="text-maroon underline transition-colors hover:text-saffron-dark"
            >
              +91 8123235638
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:anandradhakrishna@gmail.com"
              className="break-words text-maroon underline transition-colors hover:text-saffron-dark"
            >
              anandradhakrishna@gmail.com
            </a>
          </p>
          <p>
            <strong>Address:</strong> No.137A & 137B, 11th Cross, Vishnupriya
            Nilaya, 1st Floor, Shirdi Saibaba Layout, Vidyamanya Nagar,
            Andrahalli, Bangalore – 560091.
          </p>
        </address>
      </div>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <section className="min-h-screen bg-ivory py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-maroon hover:text-saffron-dark transition-colors text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-maroon" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-maroon">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-charcoal-light text-sm">
            Last Updated: November 2026
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-ivory-dark"
            >
              <h2 className="font-serif text-xl md:text-2xl font-semibold text-maroon mb-3">
                {index + 1}. {section.title}
              </h2>
              <div className="text-charcoal/80 leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
