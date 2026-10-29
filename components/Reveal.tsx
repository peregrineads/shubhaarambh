"use client";
import { motion, useReducedMotion } from "motion/react";
export default function Reveal({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, ease: "easeOut" }}>{children}</motion.div>;
}
