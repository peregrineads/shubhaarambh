import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { GalleryReveal, GallerySparkle } from "@/components/gallery/GalleryMotion";
import { galleryImages } from "@/data/gallery";
import "./gallery.css";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore a collection of wedding, party and event styling inspiration from Shubhaarambh Events.",
  openGraph: { title: "Celebration Gallery | Shubhaarambh Events", description: "A little inspiration for the moments worth remembering." },
};

export default function GalleryPage() {
  return (
    <main id="main" className="gallery-page">
      <section className="gallery-hero" aria-labelledby="gallery-title">
        <GalleryReveal className="gallery-hero-copy" direction="left">
          <span className="gallery-eyebrow"><span /> THE CELEBRATION JOURNAL</span>
          <h1 id="gallery-title">Moments worth <em>remembering.</em></h1>
          <p>Explore celebrations filled with love, laughter, beauty and unforgettable details.</p>
          <a className="gallery-text-link" href="#collection">EXPLORE THE COLLECTION <span aria-hidden="true">↘</span></a>
        </GalleryReveal>
        <GalleryReveal className="gallery-hero-art" direction="right" delay={0.12} aria-hidden="true">
          <div className="gallery-hero-image gallery-hero-image-main"><Image src={galleryImages[0].src} alt="" fill preload sizes="(max-width: 700px) 58vw, 32vw" /></div>
          <div className="gallery-hero-image gallery-hero-image-small"><Image src={galleryImages[1].src} alt="" fill sizes="(max-width: 700px) 35vw, 18vw" /></div>
          <div className="gallery-stamp">A LITTLE<br /><em>inspiration</em><br />FOR YOUR DAY <span>✳</span></div>
          <GallerySparkle className="gallery-hero-sparkle">✳</GallerySparkle>
        </GalleryReveal>
      </section>
      <section className="gallery-collection" id="collection" aria-labelledby="collection-title">
        <GalleryReveal className="gallery-collection-heading">
          <div><span className="gallery-eyebrow"><span /> THE COLLECTION</span><h2 id="collection-title">A little glimpse of <em>beautiful.</em></h2></div>
          <p>Every gathering has its own kind of magic. Find the details that speak to you.</p>
        </GalleryReveal>
        <GalleryGrid />
        <p className="gallery-demo-note">A curated collection of inspirational demo imagery. Client photographs will be shared here when available.</p>
      </section>
      <section className="gallery-cta">
        <GallerySparkle className="gallery-cta-flower">✳</GallerySparkle>
        <GalleryReveal>
        <span className="gallery-eyebrow">A BEAUTIFUL BEGINNING AWAITS</span>
        <h2>Imagine your<br /><em>celebration here.</em></h2>
        <p>Let’s dream up something wonderfully yours.</p>
        <Link href="/contact" className="gallery-cta-button">LET’S CREATE SOMETHING BEAUTIFUL <span aria-hidden="true">↗</span></Link>
        </GalleryReveal>
      </section>
    </main>
  );
}
