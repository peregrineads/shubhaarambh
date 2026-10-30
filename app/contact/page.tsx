import "../text-hover.css";
import type { Metadata } from "next";
import EventMotif from "@/components/decor/EventMotif";
import InnerAmbience from "@/components/decor/InnerAmbience";
import Image from "next/image";
import EnquiryForm from "@/components/contact/EnquiryForm";
import { contactDetails } from "@/data/site";
import { InnerReveal, InnerSection } from "@/components/InnerPageMotion";
import "./contact.css";

export const metadata: Metadata = {
  title: "Plan Your Celebration",
  description: "Start planning your celebration with Shubhaarambh Events in Bharuch, Ankleshwar, Kevadia and beyond.",
  openGraph: { title: "Plan Your Celebration | Shubhaarambh Events", description: "Every unforgettable celebration begins with a conversation." },
};

export default function ContactPage() {
  return <main id="main" className="contact-page">
    <section className="contact-hero"><InnerAmbience variant="contact" /><div className="contact-hero-copy"><p className="contact-kicker"><span><EventMotif kind="flower" /></span> THE BEGINNING OF SOMETHING BEAUTIFUL</p><h1 data-cursor-text="">Let’s make something <em>magical happen.</em></h1><p>Every unforgettable celebration begins with a conversation. Tell us your ideas, and let’s bring them to life.</p><span className="contact-hero-note">YOUR STORY STARTS HERE &nbsp; ↘</span></div><div className="contact-hero-image"><Image src="/images/floral-reception.jpg" alt="A festive celebration filled with warm lights" fill sizes="(max-width: 800px) 100vw, 48vw" priority /><div className="contact-seal">LET’S<br /><em>celebrate</em><br />TOGETHER <span><EventMotif kind="flower" /></span></div></div></section>
    <section className="contact-main"><InnerReveal className="contact-main-intro" direction="left"><p className="contact-kicker"><span><EventMotif kind="heart" /></span> TELL US EVERYTHING</p><h2 data-cursor-text="">A little hello.<br /><em>A lot of possibility.</em></h2><p>Big ideas or the beginnings of a plan, we’d love to hear what you’re dreaming up.</p><div className="contact-intro-line">LET THE PLANNING BEGIN <span>↗</span></div></InnerReveal><InnerReveal className="contact-form-wrap" direction="right" delay={0.12}><div className="contact-form-heading"><div><p className="contact-kicker">THE DETAILS</p><h2 data-cursor-text="">Tell us about <em>your day.</em></h2></div><span><EventMotif kind="gift" /></span></div><EnquiryForm /></InnerReveal></section>
    <section className="contact-locations"><InnerReveal direction="left"><p className="contact-kicker"><span><EventMotif kind="leaf" /></span> WHERE WE CELEBRATE</p><h2 data-cursor-text="">Beautiful moments,<br /><em>wherever you are.</em></h2></InnerReveal><InnerReveal direction="right" delay={0.12}><p>From intimate gatherings to destination celebrations, we bring thoughtful planning and creative details across Gujarat and beyond.</p><div className="contact-location-list"><span>Bharuch</span><span>Ankleshwar</span><span>Kevadia <small>(Ekta Nagar)</small></span></div></InnerReveal></section>
    {Object.values(contactDetails).some(Boolean) && <section className="contact-details"><p className="contact-kicker"><span><EventMotif kind="party" /></span> GET IN TOUCH</p><h2 data-cursor-text="">Let’s keep the <em>conversation going.</em></h2><div>{contactDetails.phone && <a href={`tel:${contactDetails.phone}`}>Phone / WhatsApp <span>{contactDetails.phone} ↗</span></a>}{contactDetails.email && <a href={`mailto:${contactDetails.email}`}>Email <span>{contactDetails.email} ↗</span></a>}{contactDetails.instagram && <a href={contactDetails.instagram}>Instagram <span>Visit ↗</span></a>}{contactDetails.facebook && <a href={contactDetails.facebook}>Facebook <span>Visit ↗</span></a>}</div></section>}
    <InnerSection className="contact-closing" direction="scale"><span><EventMotif kind="flower" /></span><p className="contact-kicker">HERE’S TO THE MOMENTS AHEAD</p><h2 data-cursor-text="">Great moments begin with <em>great conversations.</em></h2><p>We can’t wait to hear what you have in mind.</p></InnerSection>
  </main>;
}
