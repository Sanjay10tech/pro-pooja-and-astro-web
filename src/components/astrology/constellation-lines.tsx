"use client";

import { motion } from "framer-motion";

export function ConstellationLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B89552" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E5CC91" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <motion.path
        d="M100,50 L200,100 L150,180 L80,150 Z"
        stroke="url(#goldGradient)"
        strokeWidth="0.5"
        fill="none"
        initial={{pathLength: 0, opacity: 0}}
        animate={{pathLength: 1, opacity: 1}}
        transition={{duration: 3, ease: "easeInOut"}}
      />
      <motion.path
        d="M300,80 L400,120 L380,200"
        stroke="url(#goldGradient)"
        strokeWidth="0.5"
        fill="none"
        initial={{pathLength: 0, opacity: 0}}
        animate={{pathLength: 1, opacity: 1}}
        transition={{duration: 3, delay: 0.5, ease: "easeInOut"}}
      />
    </svg>
  );
}
