import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse photos of our pooja ceremonies, sacred spaces, and spiritual events with R. Anand.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
