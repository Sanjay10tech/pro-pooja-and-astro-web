"use client";

import { motion } from "framer-motion";

export function ZodiacWheelAdvanced({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "w-40 h-40 md:w-48 md:h-48",
    medium: "w-64 h-64 md:w-80 md:h-80",
    large: "w-96 h-96 md:w-[500px] md:h-[500px]"
  };
  
  return (
    <motion.div
      className={`relative ${sizeClasses[size]}`}
      initial={{opacity: 0, scale: 0.9}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 1}}
    >
      <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200" aria-hidden="true">
        {/* Outer circle */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#B89552" strokeWidth="0.5" opacity="0.3" />
        
        {/* 12 zodiac symbols positioned in circle */}
        {[
          { symbol: "♈", angle: 0 },
          { symbol: "♉", angle: 30 },
          { symbol: "♊", angle: 60 },
          { symbol: "♋", angle: 90 },
          { symbol: "♌", angle: 120 },
          { symbol: "♍", angle: 150 },
          { symbol: "♎", angle: 180 },
          { symbol: "♏", angle: 210 },
          { symbol: "♐", angle: 240 },
          { symbol: "♑", angle: 270 },
          { symbol: "♒", angle: 300 },
          { symbol: "♓", angle: 330 }
        ].map((zodiac, i) => {
          const rad = (zodiac.angle * Math.PI) / 180;
          const x = 100 + 80 * Math.cos(rad - Math.PI / 2);
          const y = 100 + 80 * Math.sin(rad - Math.PI / 2);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#B89552"
              fontSize="14"
              opacity="0.8"
            >
              {zodiac.symbol}
            </text>
          );
        })}
        
        {/* Inner decorative elements */}
        <circle cx="100" cy="100" r="60" fill="none" stroke="#B89552" strokeWidth="0.3" opacity="0.2" />
        <circle cx="100" cy="100" r="3" fill="#E5CC91" opacity="0.6" />
      </svg>
    </motion.div>
  );
}
