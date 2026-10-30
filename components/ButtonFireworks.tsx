"use client";

import { useEffect, useRef, useState } from "react";
import "./button-fireworks.css";

const buttonSelector = "button:not(.gallery-tile), .button, .nav-cta, .story-button, .gallery-cta-button";
const rays = Array.from({ length: 12 }, (_, index) => index);
type Burst = { x: number; y: number; spread: number; touch: boolean; id: number };

/** Decorative bursts augment buttons without changing their native interaction. */
export default function ButtonFireworks() {
  const [burst, setBurst] = useState<Burst | null>(null);
  const activeButton = useRef<Element | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    let sequence = 0;
    const findButton = (target: EventTarget | null) => target instanceof Element ? target.closest(buttonSelector) : null;
    const clear = () => {
      if (timer) clearTimeout(timer);
      timer = undefined;
      activeButton.current = null;
      setBurst(null);
    };
    const start = (button: Element, touch = false) => {
      if (reduce.matches || button.matches(":disabled, [aria-disabled='true']")) return;
      if (timer) clearTimeout(timer);
      timer = undefined;
      const rect = button.getBoundingClientRect();
      activeButton.current = button;
      setBurst({ x: rect.left + rect.width / 2, y: rect.top, spread: Math.min(72, rect.width * 0.3), touch, id: ++sequence });
      // Let a touch burst finish after release without delaying the button action.
      if (touch) timer = setTimeout(clear, 1600);
    };
    const stop = (button: Element) => {
      if (activeButton.current === button) clear();
    };
    const onOver = (event: PointerEvent) => {
      if (!finePointer.matches || event.pointerType !== "mouse") return;
      const button = findButton(event.target);
      if (!button || (event.relatedTarget instanceof Node && button.contains(event.relatedTarget))) return;
      start(button);
    };
    const onOut = (event: PointerEvent) => {
      // Touch browsers emit pointerout after a tap; let its one-shot burst finish.
      if (event.pointerType !== "mouse") return;
      const button = findButton(event.target);
      if (!button || (event.relatedTarget instanceof Node && button.contains(event.relatedTarget))) return;
      if (!button.matches(":focus-visible")) stop(button);
    };
    const onFocus = (event: FocusEvent) => {
      const button = findButton(event.target);
      if (!timer && button?.matches(":focus-visible")) start(button);
    };
    const onBlur = (event: FocusEvent) => {
      const button = findButton(event.target);
      if (!timer && button && !button.matches(":hover")) stop(button);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch" && event.pointerType !== "pen") return;
      const button = findButton(event.target);
      if (button) start(button, true);
    };
    const onPointerCancel = (event: PointerEvent) => {
      if (event.pointerType === "touch" || event.pointerType === "pen") clear();
    };
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointercancel", onPointerCancel, { passive: true });
    document.addEventListener("focusin", onFocus);
    document.addEventListener("focusout", onBlur);
    // A route change can scroll immediately after a tap. Keep its short burst alive;
    // pointercancel still clears it when a touch becomes a scroll gesture.
    const onScroll = () => { if (!timer) clear(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("blur", clear);
    reduce.addEventListener("change", clear);
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointercancel", onPointerCancel);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("focusout", onBlur);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("blur", clear);
      reduce.removeEventListener("change", clear);
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (!burst) return null;
  return <div key={burst.id} className={`button-fireworks${burst.touch ? " is-touch" : ""}`} aria-hidden="true" style={{ left: burst.x, top: burst.y }}>
    {[-1, 1].map((side) => <div className={`button-firework button-firework-${side === -1 ? "left" : "right"}`} style={{ left: side * burst.spread }} key={side}>
      <span className="firework-core" />
      {rays.map((ray) => <span className={`firework-ray firework-ray-${ray}`} key={ray} />)}
    </div>)}
  </div>;
}
