"use client";

import EventMotif from "@/components/decor/EventMotif";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect } from "react";

/** Decorative details respond to a fine pointer without intercepting any controls. */
export default function HomeAtmosphere() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 55, damping: 24, mass: 0.7 });
  const y = useSpring(pointerY, { stiffness: 55, damping: 24, mass: 0.7 });

  useEffect(() => {
    if (reducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 34);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 34);
    };
    const reset = () => { pointerX.set(0); pointerY.set(0); };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", reset);
    return () => { window.removeEventListener("pointermove", onPointerMove); window.removeEventListener("blur", reset); };
  }, [pointerX, pointerY, reducedMotion]);

  return <motion.div aria-hidden="true" className="home-atmosphere" style={{ x: reducedMotion ? 0 : x, y: reducedMotion ? 0 : y }}>
    <div className="atmosphere-orbit"><span><EventMotif kind="flower" /></span></div>
    <i className="atmosphere-spark atmosphere-spark-one"><EventMotif kind="leaf" /></i>
    <i className="atmosphere-spark atmosphere-spark-two"><EventMotif kind="music" /></i>
    <i className="atmosphere-spark atmosphere-spark-three"><EventMotif kind="heart" /></i>
    <div className="atmosphere-caption">A LITTLE MAGIC<br /><span>IN EVERY MOMENT</span></div>
  </motion.div>;
}
