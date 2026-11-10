"use client";

import { motion } from "framer-motion";
import { List } from "lucide-react";
import { useState } from "react";

export function BlogTocMobile({ items }: { items: { id: string; title: string }[] }) {
  const [open, setOpen] = useState(false);
  if (items.length === 0) return null;

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between bg-secondary border border-secondary rounded-xl px-4 py-3 text-sm font-medium text-text mb-6"
      >
        <span className="flex items-center gap-2">
          <List className="w-4 h-4 text-gold" />
          Table of Contents
        </span>
        <span className="text-muted">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="bg-secondary border border-secondary rounded-xl p-4 mb-8"
        >
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted hover:text-gold transition-colors block py-0.5"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
