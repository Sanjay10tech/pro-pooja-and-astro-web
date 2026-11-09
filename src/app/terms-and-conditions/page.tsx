import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using R. Anand's website and services.",
};

const sections = [
  {
    title: "Use of Website",
    content:
      "Users must use Marathi Sarva Puja only for lawful purposes and provide accurate information.",
  },
  {
    title: "Puja & Pandit Booking",
    content:
      "Bookings depend on service availability, Pujari availability, selected date, time, and location.",
  },
  {
    title: "Payments & Cancellation",
    content:
      "Payments, cancellations, rescheduling, and refunds are subject to the applicable booking conditions.",
  },
  {
    title: "Pujari Registration",
    content:
      "Pujaris must provide accurate information. Marathi Sarva Puja may review, approve, suspend, or remove Pujari profiles when necessary.",
  },
  {
    title: "Service & Website Availability",
    content:
      "We aim to provide reliable services, but temporary interruptions or changes may occur due to technical issues, maintenance, or circumstances beyond our control.",
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
            Last updated: August 2026
          </p>
          <p className="text-charcoal/80 mt-4 leading-relaxed">
            By using the R. Anand website, you agree to the
            following terms and conditions. Please read them carefully.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-ivory-dark"
            >
              <h2 className="font-serif text-xl md:text-2xl font-semibold text-maroon mb-3">
                {index + 1}. {section.title}
              </h2>
              <p className="text-charcoal/80 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 bg-maroon/5 rounded-xl p-6 md:p-8 border border-maroon/10">
          <h3 className="font-serif text-lg font-semibold text-maroon mb-2">
            Have questions about these terms?
          </h3>
          <p className="text-charcoal/70 text-sm leading-relaxed">
            If you have any questions or need clarification, please{" "}
            <Link
              href="/contact"
              className="text-maroon font-medium hover:text-saffron-dark underline transition-colors"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
