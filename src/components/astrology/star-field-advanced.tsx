"use client";

import { motion } from "framer-motion";

export function StarFieldAdvanced() {
  // Deterministic star positions (no randomness to avoid hydration issues)
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${(i * 17) % 100}%`,
    top: `${(i * 23) % 100}%`,
    size: ((i % 3) + 1) * 0.8,
    delay: (i * 0.08) % 4,
    duration: 3 + (i % 3)
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            top: star.top
          }}
          animate={{
            opacity: [0.1, 0.9, 0.1],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
