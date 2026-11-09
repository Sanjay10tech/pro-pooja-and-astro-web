import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for R. Anand. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect your name, email, phone number, booking details, and information provided during Pujari registration.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to manage bookings, provide services, communicate with you, and improve our website.",
  },
  {
    title: "Data Security",
    content:
      "We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may use trusted third-party services for authentication, hosting, payments, database management, and other website functionality.",
  },
  {
    title: "Your Privacy Rights",
    content:
      "You may contact us to request access, correction, or deletion of your personal information, subject to applicable requirements.",
  },
];

export default function PrivacyPolicyPage() {
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
              <Shield className="w-6 h-6 text-maroon" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-maroon">
              Privacy Policy
            </h1>
          </div>
          <p className="text-charcoal-light text-sm">
            Last updated: August 2026
          </p>
          <p className="text-charcoal/80 mt-4 leading-relaxed">
            At R. Anand, we value your privacy and are committed to
            protecting your personal information. This policy outlines how we
            handle your data.
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
            Questions about your privacy?
          </h3>
          <p className="text-charcoal/70 text-sm leading-relaxed">
            If you have any questions or concerns about this Privacy Policy,
            please{" "}
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
