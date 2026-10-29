"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type GalleryRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  "aria-hidden"?: boolean | "true" | "false";
};

/** A short editorial entrance that leaves reduced-motion content fully visible. */
export function GalleryReveal({ children, className, delay = 0, direction = "up", "aria-hidden": ariaHidden }: GalleryRevealProps) {
  const reduced = useReducedMotion();
  const offset = direction === "up" ? { y: 44 } : { x: direction === "left" ? -42 : 42 };

  return <motion.div
    className={`gallery-reveal ${className ?? ""}`}
    aria-hidden={ariaHidden}
    initial={reduced ? false : { opacity: 0, ...offset }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>;
}

export function GallerySparkle({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.span className={className} aria-hidden="true" animate={reduced ? undefined : { rotate: [0, 18, 0], scale: [1, 1.12, 1] }} transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}>{children}</motion.span>;
}
