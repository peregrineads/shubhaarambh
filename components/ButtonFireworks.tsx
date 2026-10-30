"use client";

import { useEffect, useRef, useState } from "react";
import "./button-fireworks.css";

const buttonSelector = "button:not(.gallery-tile), .button, .nav-cta, .story-button, .gallery-cta-button";
const rays = Array.from({ length: 12 }, (_, index) => index);
type Burst = { x: number; y: number; spread: number };

/** Decorative bursts augment buttons without changing their native interaction. */
export default function ButtonFireworks() {
  const [burst, setBurst] = useState<Burst | null>(null);
  const activeButton = useRef<Element | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const findButton = (target: EventTarget | null) => target instanceof Element ? target.closest(buttonSelector) : null;
    const start = (button: Element) => {
      if (reduce.matches) return;
      const rect = button.getBoundingClientRect();
      activeButton.current = button;
      setBurst({ x: rect.left + rect.width / 2, y: rect.top, spread: Math.min(72, rect.width * 0.3) });
    };
    const stop = (button: Element) => {
      if (activeButton.current === button) { activeButton.current = null; setBurst(null); }
    };
    const onOver = (event: PointerEvent) => {
      if (!finePointer.matches || event.pointerType !== "mouse") return;
      const button = findButton(event.target);
      if (!button || (event.relatedTarget instanceof Node && button.contains(event.relatedTarget))) return;
      start(button);
    };
    const onOut = (event: PointerEvent) => {
      const button = findButton(event.target);
      if (!button || (event.relatedTarget instanceof Node && button.contains(event.relatedTarget))) return;
      if (!button.matches(":focus-visible")) stop(button);
    };
    const onFocus = (event: FocusEvent) => {
      const button = findButton(event.target);
      if (button?.matches(":focus-visible")) start(button);
    };
    const onBlur = (event: FocusEvent) => {
      const button = findButton(event.target);
      if (button && !button.matches(":hover")) stop(button);
    };
    const clear = () => { activeButton.current = null; setBurst(null); };
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("focusout", onBlur);
    window.addEventListener("scroll", clear, { passive: true });
    window.addEventListener("blur", clear);
    reduce.addEventListener("change", clear);
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("focusout", onBlur);
      window.removeEventListener("scroll", clear);
      window.removeEventListener("blur", clear);
      reduce.removeEventListener("change", clear);
    };
  }, []);

  if (!burst) return null;
  return <div className="button-fireworks" aria-hidden="true" style={{ left: burst.x, top: burst.y }}>
    {[-1, 1].map((side) => <div className={`button-firework button-firework-${side === -1 ? "left" : "right"}`} style={{ left: side * burst.spread }} key={side}>
      <span className="firework-core" />
      {rays.map((ray) => <span className={`firework-ray firework-ray-${ray}`} key={ray} />)}
    </div>)}
  </div>;
}
