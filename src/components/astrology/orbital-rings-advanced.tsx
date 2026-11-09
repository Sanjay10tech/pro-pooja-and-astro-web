"use client";

import { motion } from "framer-motion";

export function OrbitalRingsAdvanced() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Outer ring - slow clockwise */}
      <motion.div
        animate={{rotate: 360}}
        transition={{duration: 150, repeat: Infinity, ease: "linear"}}
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-gold/10 rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold/40 rounded-full" />
        <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-1.5 h-1.5 bg-gold/30 rounded-full" />
      </motion.div>
      
      {/* Middle ring - medium counter-clockwise */}
      <motion.div
        animate={{rotate: -360}}
        transition={{duration: 100, repeat: Infinity, ease: "linear"}}
        className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] border border-gold/15 rounded-full"
      >
        <div className="absolute top-1/4 right-0 translate-x-1/2 w-1.5 h-1.5 bg-gold-light/40 rounded-full" />
        <div className="absolute bottom-1/3 left-0 -translate-x-1/2 w-2 h-2 bg-white/20 rounded-full" />
      </motion.div>
      
      {/* Inner ring - fast clockwise */}
      <motion.div
        animate={{rotate: 360}}
        transition={{duration: 70, repeat: Infinity, ease: "linear"}}
        className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] border border-gold/20 rounded-full"
      >
        <div className="absolute top-0 left-1/3 -translate-y-1/2 w-1.5 h-1.5 bg-gold/50 rounded-full" />
      </motion.div>
    </div>
  );
}
