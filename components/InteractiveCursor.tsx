"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CursorMode = "normal" | "image" | "text";

/** A decorative companion to the native cursor, never an interaction target. */
export default function InteractiveCursor() {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 430, damping: 34, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 430, damping: 34, mass: 0.3 });
  const [mode, setMode] = useState<CursorMode>("normal");
  const [active, setActive] = useState(false);
  const currentMode = useRef<CursorMode>("normal");

  useEffect(() => {
    if (reducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let hasPosition = false;
    const updateMode = (next: CursorMode) => {
      if (currentMode.current !== next) {
        currentMode.current = next;
        setMode(next);
      }
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      if (!hasPosition) {
        x.jump(event.clientX); y.jump(event.clientY);
        smoothX.jump(event.clientX); smoothY.jump(event.clientY);
        hasPosition = true;
        setActive(true);
      } else {
        x.set(event.clientX); y.set(event.clientY);
      }
      const target = event.target instanceof Element ? event.target : null;
      updateMode(target?.closest("[data-cursor-text]") ? "text" : target?.closest(".gallery-tile, .service-tile") ? "image" : "normal");
    };
    const onLeave = (event: PointerEvent) => {
      if (!event.relatedTarget) { updateMode("normal"); setActive(false); hasPosition = false; }
    };
    const onBlur = () => { updateMode("normal"); setActive(false); hasPosition = false; };
    const resetMode = () => updateMode("normal");
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onLeave);
    window.addEventListener("blur", onBlur);
    window.addEventListener("scroll", resetMode, { passive: true });
    window.addEventListener("pointerdown", resetMode, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onLeave);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("scroll", resetMode);
      window.removeEventListener("pointerdown", resetMode);
    };
  }, [reducedMotion, x, y, smoothX, smoothY]);

  return <motion.div
    aria-hidden="true"
    className="interactive-cursor-sphere"
    initial={false}
    animate={{
      opacity: active && !reducedMotion && mode !== "text" ? 1 : 0,
      scale: mode === "text" ? 0.35 : mode === "image" ? 1.85 : 1,
      filter: mode === "text" ? "blur(5px)" : "blur(0px)",
    }}
    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    style={{ x: smoothX, y: smoothY, position: "fixed", top: -12, left: -12, width: 24, height: 24, borderRadius: "50%", pointerEvents: "none", zIndex: 149, background: "radial-gradient(circle, rgba(245,107,112,.2), rgba(244,181,68,.1) 55%, transparent 75%)", border: "1px solid rgba(255,249,241,.9)", boxShadow: "0 0 0 1px rgba(87,35,72,.45), 0 2px 8px rgba(50,24,44,.16)" }}
  />;
}
