"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryImages, type GalleryCategory } from "@/data/gallery";

type Filter = "All Celebrations" | GalleryCategory;
const filters: Filter[] = ["All Celebrations", "Weddings", "Birthdays", "Party Nights", "Corporate", "Engagements", "Decorations"];

export default function GalleryGrid() {
  const reduced = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("All Celebrations");
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const visible = filter === "All Celebrations" ? galleryImages : galleryImages.filter((image) => image.category === filter);
  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((current) => current === null ? null : (current + 1) % visible.length), [visible.length]);
  const previous = useCallback(() => setActive((current) => current === null ? null : (current - 1 + visible.length) % visible.length), [visible.length]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) {
      dialog.close();
      triggerRef.current?.focus();
    }
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, next, previous]);

  return (
    <>
      <div className="gallery-filters" aria-label="Filter celebrations">
        {filters.map((item) => <button key={item} type="button" className={filter === item ? "is-active" : ""} aria-pressed={filter === item} onClick={() => { setFilter(item); setActive(null); }}>{item}</button>)}
      </div>
      <AnimatePresence mode="wait" initial={false}>
      <motion.div className="gallery-grid" key={filter}
        initial={reduced ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduced ? { opacity: 1 } : { opacity: 0, y: -12, pointerEvents: "none" }}
        transition={{ duration: reduced ? 0 : 0.3, ease: "easeOut" }}>
        {visible.map((image, index) => (
          <motion.button className={`gallery-tile gallery-tile-${image.shape}`} key={image.id} type="button"
            initial={reduced ? false : { opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }} onClick={(event) => { triggerRef.current = event.currentTarget; setActive(index); }} aria-label={`View ${image.title}: ${image.alt}`}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 33vw" />
            <span className="gallery-tile-overlay"><span><small>{image.category}</small><strong>{image.title}</strong></span><span className="gallery-tile-arrow" aria-hidden="true">↗</span></span>
          </motion.button>
        ))}
      </motion.div>
      </AnimatePresence>
      <dialog ref={dialogRef} className="gallery-lightbox" aria-label="Celebration image viewer" onClose={close} onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
        {active !== null && visible[active] && <div className="gallery-lightbox-inner">
          <div className="gallery-lightbox-top"><span>THE CELEBRATION JOURNAL</span><button type="button" onClick={close} aria-label="Close image viewer">×</button></div>
          <div className="gallery-lightbox-image"><Image src={visible[active].src} alt={visible[active].alt} fill sizes="90vw" /></div>
          <div className="gallery-lightbox-bottom"><div><small>{visible[active].category}</small><strong>{visible[active].title}</strong></div><div className="gallery-lightbox-controls"><button type="button" onClick={previous} aria-label="Previous image">←</button><span>{String(active + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}</span><button type="button" onClick={next} aria-label="Next image">→</button></div></div>
        </div>}
      </dialog>
    </>
  );
}
