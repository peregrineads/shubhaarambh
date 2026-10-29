"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
};

function useEntrance(direction: MotionProps["direction"], delay: number) {
  const reduced = useReducedMotion();
  const offsets = {
    up: { y: 46 },
    left: { x: -45 },
    right: { x: 45 },
    scale: { y: 24, scale: 0.96 },
  };
  return {
    initial: reduced ? false as const : { opacity: 0, ...offsets[direction ?? "up"] },
    whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.12 as const },
    transition: { duration: reduced ? 0 : 0.85, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export function InnerReveal({ children, className, delay = 0, direction = "up" }: MotionProps) {
  const entrance = useEntrance(direction, delay);
  return <motion.div className={`inner-reveal ${className ?? ""}`} {...entrance}>{children}</motion.div>;
}

export function InnerArticle({ children, className, delay = 0, direction = "up" }: MotionProps) {
  const entrance = useEntrance(direction, delay);
  return <motion.article className={`inner-reveal ${className ?? ""}`} {...entrance}>{children}</motion.article>;
}

export function InnerSection({ children, className, delay = 0, direction = "up" }: MotionProps) {
  const entrance = useEntrance(direction, delay);
  return <motion.section className={`inner-reveal ${className ?? ""}`} {...entrance}>{children}</motion.section>;
}
