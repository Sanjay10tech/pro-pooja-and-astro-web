import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | R. Anand",
  description:
    "Privacy Policy for R. Anand – Purohit & Vedic Astrologer, explaining how personal information is collected, used, stored, shared, and protected.",
};

const sections = [
  {
    title: "Introduction",
    content: (
      <div className="space-y-4">
        <p>
          Welcome to R. Anand – Purohit &amp; Vedic Astrologer. We respect your
          privacy and are committed to protecting the personal information you
          share through our website.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store and protect
          your information when you visit our website or request our services.
        </p>
      </div>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <div className="space-y-4">
        <p>
          We may collect the following information when you contact us or
          request a consultation:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Full Name</li>
          <li>Mobile Number</li>
          <li>Email Address</li>
          <li>Residential Address, if required</li>
          <li>Date of Birth</li>
          <li>Time of Birth</li>
          <li>Place of Birth</li>
          <li>
            Horoscope-related information voluntarily shared for consultation
          </li>
          <li>Pooja or Homa booking details</li>
          <li>Other information voluntarily provided through enquiry forms.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <div className="space-y-4">
        <p>Your information may be used for:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Responding to enquiries.</li>
          <li>Managing Pooja and Homa bookings.</li>
          <li>Providing Astrology and KP Astrology consultations.</li>
          <li>Horoscope analysis and matching requests.</li>
          <li>Birth Time Rectification consultations.</li>
          <li>Vaastu and Numerology consultations.</li>
          <li>Communicating booking confirmations and updates.</li>
          <li>Improving our website and customer experience.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Information Sharing",
    content: (
      <div className="space-y-4">
        <p>We do not sell or rent your personal information to third parties.</p>
        <p>
          Information may be shared with service providers only when necessary
          to operate the website, process bookings or provide requested
          services, subject to appropriate safeguards.
        </p>
        <p>We may disclose information where required by applicable law.</p>
      </div>
    ),
  },
  {
    title: "Data Security",
    content: (
      <div className="space-y-4">
        <p>
          We take reasonable measures to protect the personal information
          submitted through our website.
        </p>
        <p>
          However, no online transmission or electronic storage method can be
          guaranteed to be completely secure.
        </p>
      </div>
    ),
  },
  {
    title: "Cookies",
    content: (
      <div className="space-y-4">
        <p>
          Our website may use cookies or similar technologies to improve
          website functionality, understand visitor activity and enhance user
          experience.
        </p>
        <p>You can manage cookies through your browser settings.</p>
      </div>
    ),
  },
  {
    title: "Third-Party Services",
    content: (
      <div className="space-y-4">
        <p>
          Our website may contain links or integrations for services such as
          WhatsApp, Google Maps and other third-party platforms.
        </p>
        <p>Their privacy practices are governed by their respective policies.</p>
      </div>
    ),
  },
  {
    title: "Your Privacy Rights",
    content: (
      <p>
        You may contact us to request access to, correction of or deletion of
        your personal information, subject to applicable legal requirements and
        record-retention obligations.
      </p>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <p>
        Our website is not intended to collect personal information directly
        from children without appropriate parental or guardian involvement.
      </p>
    ),
  },
  {
    title: "Policy Updates",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        published on this page.
      </p>
    ),
  },
  {
    title: "Contact Information",
    content: (
      <div className="space-y-4">
        <p>For privacy-related questions or requests, contact:</p>
        <address className="not-italic space-y-2">
          <p className="font-semibold">
            R. Anand – Purohit &amp; Vedic Astrologer
          </p>
          <p>
            Mobile:{" "}
            <a
              href="tel:+918123235638"
              className="text-[#7A5C24] font-medium hover:text-primary underline transition-colors focus-visible:outline-primary"
            >
              +91 8123235638
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:anandradhakrishna@gmail.com"
              className="text-[#7A5C24] font-medium hover:text-primary underline transition-colors focus-visible:outline-primary break-words"
            >
              anandradhakrishna@gmail.com
            </a>
          </p>
          <p>
            Address: No.137A &amp; 137B, 11th Cross, Vishnupriya Nilaya, 1st
            Floor, Shirdi Saibaba Layout, Vidyamanya Nagar, Andrahalli,
            Bangalore – 560091.
          </p>
        </address>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-ivory py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-maroon hover:text-gold transition-colors text-sm mb-8"
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
            Last Updated: November 2026
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-ivory-dark"
            >
              <h2 className="font-serif text-xl md:text-2xl font-semibold text-gold mb-3">
                {index + 1}. {section.title}
              </h2>
              <div className="text-[#26344A] leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
