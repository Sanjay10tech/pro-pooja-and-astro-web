"use client";

import { Share2, MessageCircle, Link2 } from "lucide-react";
import { useSyncExternalStore } from "react";

const subscribeNoop = () => () => {};

interface Props {
  title: string;
  excerpt: string;
  variant: "sidebar" | "bar";
}

export function BlogShare({ title, excerpt, variant }: Props) {
  // Set after mount so server markup and first client render match (hydration-safe).
  const shareUrl = useSyncExternalStore(
    subscribeNoop,
    () => window.location.href,
    () => ""
  );

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} — R. Anand ${shareUrl}`)}`;

  const copyOrShare = () => {
    if (navigator.share) navigator.share({ title, url: shareUrl }).catch(() => {});
    else navigator.clipboard?.writeText(shareUrl);
  };

  if (variant === "sidebar") {
    return (
      <div className="flex gap-2">
        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
          aria-label="Share on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
        <button
          onClick={copyOrShare}
          className="w-9 h-9 bg-gold/10 hover:bg-gold text-gold hover:text-primary rounded-lg flex items-center justify-center transition-all duration-200"
          aria-label="Copy link"
        >
          <Link2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => {
            if (navigator.share) navigator.share({ title, text: excerpt, url: shareUrl }).catch(() => {});
          }}
          className="w-9 h-9 bg-gold/10 hover:bg-gold text-gold hover:text-primary rounded-lg flex items-center justify-center transition-all duration-200"
          aria-label="Share"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={whatsappShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg text-sm font-medium"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
      <button
        onClick={copyOrShare}
        className="flex items-center gap-2 bg-gold/10 text-gold px-4 py-2.5 rounded-lg text-sm font-medium"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>
      <button
        onClick={() => navigator.clipboard?.writeText(shareUrl)}
        className="flex items-center gap-2 border border-secondary text-text px-4 py-2.5 rounded-lg text-sm font-medium"
      >
        <Link2 className="w-4 h-4" />
        Copy Link
      </button>
    </div>
  );
}
