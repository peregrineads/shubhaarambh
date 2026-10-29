import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FooterMotion from "./FooterMotion";

export default function SiteFooter() {
  return <footer className="site-footer"><FooterMotion><div className="footer-top"><div><Link href="/" className="footer-brand"><span>✳</span> SHUBHAARAMBH<small>EVENTS & CELEBRATIONS</small></Link><p>Thoughtfully imagined.<br/>Beautifully celebrated.</p></div><div className="footer-links"><div><span>EXPLORE</span><Link href="/">Home</Link><Link href="/gallery">Gallery</Link><Link href="/about">Our story</Link><Link href="/contact">Get in touch</Link></div><div><span>CELEBRATING IN</span><p>Bharuch<br/>Ankleshwar<br/>Kevadia & beyond</p></div><div><span>HAVE SOMETHING IN MIND?</span><Link href="/contact" className="footer-contact">Let’s make it happen <ArrowUpRight size={17}/></Link></div></div></div><div className="footer-bottom"><span>© SHUBHAARAMBH EVENTS</span><span>MADE FOR LIFE’S BEAUTIFUL MOMENTS ✳</span></div></FooterMotion></footer>;
}
