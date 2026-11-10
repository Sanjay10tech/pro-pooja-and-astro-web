"use client";

import { motion } from "framer-motion";

/** Client wrapper so server-rendered blog pages can keep their framer-motion animations. */
export const MotionDiv = motion.div;
