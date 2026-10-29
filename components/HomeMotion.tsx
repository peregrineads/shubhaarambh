"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
};

/** Small, independent reveals mean each part of the page enters as it is reached. */
export function HomeReveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const reduced = useReducedMotion();
  const from = direction === "left" ? { x: -45 } : direction === "right" ? { x: 45 } : direction === "scale" ? { scale: 0.94, y: 24 } : { y: 38 };
  return <motion.div className={`home-reveal ${className ?? ""}`} initial={reduced ? false : { opacity: 0.25, ...from }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

const MotionLink = motion.create(Link);
export function HomeRevealLink({ children, className, href, delay = 0 }: { children: ReactNode; className: string; href: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <MotionLink href={href} className={`home-reveal ${className}`} initial={reduced ? false : { opacity: 0.25, y: 55, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</MotionLink>;
}

export function HomeParallax({ children }: { children: ReactNode }) {
  const target = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return <motion.div ref={target} aria-hidden="true" style={{ position: "absolute", inset: "-12% 0", y: reduced ? 0 : y }}>{children}</motion.div>;
}
