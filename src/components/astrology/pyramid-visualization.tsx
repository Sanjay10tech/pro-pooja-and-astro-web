"use client";

import { motion } from "framer-motion";

export function PyramidVisualization() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      className="relative w-full max-w-md mx-auto"
    >
      <svg viewBox="0 0 300 250" className="w-full h-auto" aria-hidden="true">
        <defs>
          <linearGradient id="pyramidGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5CC91" />
            <stop offset="100%" stopColor="#B89552" />
          </linearGradient>
        </defs>
        
        {/* Pyramid structure */}
        <motion.path
          d="M150,30 L270,220 L30,220 Z"
          fill="none"
          stroke="url(#pyramidGold)"
          strokeWidth="2"
          initial={{pathLength: 0, opacity: 0}}
          animate={{pathLength: 1, opacity: 1}}
          transition={{duration: 2, ease: "easeInOut"}}
        />
        
        {/* Inner lines */}
        <motion.line
          x1="150" y1="30" x2="150" y2="220"
          stroke="#B89552"
          strokeWidth="1"
          opacity="0.3"
          initial={{pathLength: 0}}
          animate={{pathLength: 1}}
          transition={{duration: 1.5, delay: 0.5}}
        />
        
        {/* Decorative numbers */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => (
          <motion.text
            key={num}
            x={90 + (i % 3) * 60}
            y={80 + Math.floor(i / 3) * 50}
            fill="#B89552"
            fontSize="14"
            textAnchor="middle"
            opacity="0.4"
            initial={{opacity: 0}}
            animate={{opacity: 0.4}}
            transition={{delay: 1 + i * 0.1}}
          >
            {num}
          </motion.text>
        ))}
      </svg>
      
      {/* Floating glow effect */}
      <motion.div
        className="absolute -inset-10 bg-gold/5 blur-3xl"
        animate={{opacity: [0.3, 0.6, 0.3]}}
        transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
      />
    </motion.div>
  );
}
