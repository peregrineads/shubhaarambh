"use client";

import EventMotif from "./EventMotif";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect } from "react";
import "./inner-ambience.css";

/** Quiet, pointer-responsive details; they never intercept links or form controls. */
export default function InnerAmbience({ variant }: { variant: "story" | "contact" | "gallery" }) {
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 45, damping: 20, mass: 0.8 });
  const y = useSpring(pointerY, { stiffness: 45, damping: 20, mass: 0.8 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reduced || !finePointer.matches) return;
    const move = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 30);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 22);
    };
    const reset = () => { pointerX.set(0); pointerY.set(0); };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", reset);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("blur", reset); };
  }, [pointerX, pointerY, reduced]);

  return <div className={`inner-ambience inner-ambience--${variant}`} aria-hidden="true">
    <motion.div className="inner-ambience-pointer" style={{ x: reduced ? 0 : x, y: reduced ? 0 : y }}>
      <span className="inner-ambience-orbit"><i /></span>
      <span className="inner-ambience-flower"><EventMotif kind="flower" /></span>
      <span className="inner-ambience-sparkle"><EventMotif kind="leaf" /></span>
      <span className="inner-ambience-dot" />
    </motion.div>
  </div>;
}
