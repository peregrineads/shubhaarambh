"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [{ href: "/", label: "Home" }, { href: "/gallery", label: "Gallery" }, { href: "/about", label: "About us" }, { href: "/contact", label: "Contact" }];

export default function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 80));
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return <>
    <motion.header className={`site-header${scrolled ? " is-scrolled" : ""}`} initial={reduced ? false : { opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
      <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Shubhaarambh Events home"><span className="brand-symbol">✳</span><span>SHUBHAARAMBH<small>EVENTS & CELEBRATIONS</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} className={path === link.href ? "active" : ""} aria-current={path === link.href ? "page" : undefined}>{link.label}</Link>)}</nav>
      <Link href="/contact" className="nav-cta">Plan your event <ArrowUpRight size={15} /></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button>
    </motion.header>
    <div id="mobile-navigation" className={`mobile-menu ${open ? "is-open" : ""}`} inert={!open}>
      <div className="mobile-menu-inner"><p className="eyebrow">A LITTLE SOMETHING TO CELEBRATE</p><nav aria-label="Mobile navigation">{links.map((link, i) => <motion.div key={link.href} initial={false} animate={open && !reduced ? { opacity: 1, y: 0 } : { opacity: open ? 1 : 0, y: reduced ? 0 : 18 }} transition={{ duration: 0.45, delay: open ? 0.08 + i * 0.07 : 0, ease: [0.22, 1, 0.36, 1] }}><Link href={link.href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{link.label}<ArrowUpRight size={22}/></Link></motion.div>)}</nav><Link className="button button-coral" href="/contact" onClick={() => setOpen(false)}>Let’s plan your event <ArrowUpRight size={16}/></Link></div>
    </div>
  </>;
}
