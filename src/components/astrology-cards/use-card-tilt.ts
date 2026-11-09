"use client";

import { useCallback, useSyncExternalStore, type PointerEvent } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const MAX_TILT_DEG = 6;
const SPRING = { stiffness: 170, damping: 22, mass: 0.6 };

function subscribe(onChange: () => void) {
  const query = window.matchMedia(FINE_POINTER_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * True when the primary input can hover precisely (mouse, trackpad).
 * Always false during server render and hydration, so markup never mismatches.
 */
export function useFinePointer() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(FINE_POINTER_QUERY).matches,
    () => false
  );
}

/**
 * Mouse-driven 3D tilt with spring smoothing, plus a matching offset for a
 * glow layer. Pointer handlers are only returned when `enabled`, so touch
 * screens and reduced-motion users never get pointer tracking.
 */
export function useCardTilt(enabled: boolean) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, SPRING);
  const y = useSpring(pointerY, SPRING);

  const rotateX = useTransform(y, [-0.5, 0.5], [MAX_TILT_DEG, -MAX_TILT_DEG]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-MAX_TILT_DEG, MAX_TILT_DEG]);
  const glowX = useTransform(x, [-0.5, 0.5], ["-25%", "25%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["-25%", "25%"]);

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (event.pointerType === "touch") return;
      const rect = event.currentTarget.getBoundingClientRect();
      pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
      pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
    },
    [pointerX, pointerY]
  );

  const onPointerLeave = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return {
    tiltStyle: { rotateX, rotateY },
    glowStyle: { x: glowX, y: glowY },
    handlers: enabled ? { onPointerMove, onPointerLeave } : undefined,
  };
}
