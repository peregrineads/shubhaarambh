"use client";
import { motion, useReducedMotion } from "motion/react";

export default function FooterMotion({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return <motion.div className="footer-reveal" initial={reduced ? false : { opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
