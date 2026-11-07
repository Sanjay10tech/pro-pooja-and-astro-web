"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol
        className={cn(
          "flex items-center gap-2 text-sm flex-wrap",
          light ? "text-white/60" : "text-muted"
        )}
      >
        <li>
          <Link
            href="/"
            className={cn(
              "flex items-center gap-1 transition-colors",
              "hover:text-gold"
            )}
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight
              className={cn(
                "w-4 h-4",
                "text-muted/50"
              )}
            />
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors",
                  "hover:text-gold"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  "font-medium",
                  "text-gold"
                )}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
