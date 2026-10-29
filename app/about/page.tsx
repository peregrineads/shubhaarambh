import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerArticle, InnerReveal, InnerSection } from "@/components/InnerPageMotion";
import "./story.css";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Discover the thoughtful creativity and planning behind Shubhaarambh Events, serving celebrations across Gujarat.",
  openGraph: { title: "Our Story | Shubhaarambh Events", description: "Thoughtful details, meaningful celebrations and the art of bringing people together." },
};

const values = [
  ["01", "Creativity in", "Every Detail", "Every celebration deserves thoughtful and distinctive creative direction."],
  ["02", "Thoughtful", "Planning", "Beautiful events are built through preparation, organization and careful execution."],
  ["03", "Moments That", "Matter", "The real magic is found in the memories people take home."],
];
const steps = [
  ["01", "Understanding Your Vision", "We begin with your story, your ideas and all the little things that make the occasion yours."],
  ["02", "Concept & Design", "A thoughtful creative direction brings the mood, colours and details together."],
  ["03", "Planning & Coordination", "From the big picture to the smallest detail, we make room for everything to flow."],
  ["04", "The Big Celebration", "Be present, gather your people and enjoy a celebration made to be remembered."],
];

export default function AboutPage() {
  return (
    <main id="main" className="story-page">
      <section className="story-hero">
        <div className="story-hero-copy">
          <p className="story-eyebrow"><span>✳</span> A LITTLE ABOUT US</p>
          <h1>Every celebration has a story. <em>We make yours extraordinary.</em></h1>
          <p>Thoughtfully imagined. Beautifully brought to life. Always, wonderfully yours.</p>
          <span className="story-hero-index">THE ART OF CELEBRATING &nbsp; / &nbsp; 01</span>
        </div>
        <div className="story-hero-image">
          <Image src="/images/indian-wedding.jpg" alt="A warmly lit wedding celebration set for guests" fill sizes="(max-width: 800px) 100vw, 53vw" priority />
          <span className="story-image-caption">A BEAUTIFUL BEGINNING <i>✳</i></span>
        </div>
      </section>

      <section className="story-intro story-wrap">
        <InnerReveal className="story-intro-visual" direction="left">
          <div className="story-intro-photo"><Image src="/images/tablescape.jpg" alt="A wedding table styled with flowers and candlelight" fill sizes="(max-width: 800px) 90vw, 42vw" /></div>
          <div className="story-round-stamp"><span>MADE WITH HEART</span><b>✳</b><span>MEANT TO BE FELT</span></div>
        </InnerReveal>
        <InnerReveal className="story-intro-copy" direction="right" delay={0.12}>
          <p className="story-eyebrow"><span>✳</span> OUR STORY</p>
          <h2>The art of bringing <em>people together.</em></h2>
          <p>Some days deserve to be more than a date on the calendar. They deserve to feel like you: full of warmth, beautiful details and the people who matter most.</p>
          <p>At Shubhaarambh Events, we bring creativity and care to every part of the celebration. From the first idea to the final flourish, we shape personal experiences that let you be present for the moments that matter.</p>
          <div className="story-signature">Beautiful beginnings, <em>lasting memories.</em></div>
        </InnerReveal>
      </section>

      <section className="story-values">
        <div className="story-wrap">
          <InnerReveal><p className="story-eyebrow"><span>✳</span> WHAT GUIDES US</p>
          <div className="story-values-heading"><h2>Made with intention.<br /><em>Remembered with joy.</em></h2><p>Our philosophy is simple: the most beautiful celebrations are the ones that feel meaningful.</p></div></InnerReveal>
          <div className="story-value-list">{values.map(([number, line, italic, description], index) => <InnerArticle className="story-value" key={number} direction="left" delay={index * 0.08}><span className="story-value-number">{number} /</span><h3>{line} <em>{italic}</em></h3><p>{description}</p><span className="story-value-star">✳</span></InnerArticle>)}</div>
        </div>
      </section>

      <section className="story-process story-wrap">
        <InnerReveal className="story-process-heading" direction="left"><p className="story-eyebrow"><span>✳</span> HOW IT COMES TOGETHER</p><h2>From a little idea to <em>a beautiful day.</em></h2><p>A celebration is a journey. We’ll be there for every lovely step.</p></InnerReveal>
        <div className="story-steps">{steps.map(([number, title, description], index) => <InnerArticle className="story-step" key={number} direction="right" delay={index * 0.07}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><b>↗</b></InnerArticle>)}</div>
      </section>

      <InnerSection className="story-cta" direction="scale"><span className="story-cta-star">✳</span><p className="story-eyebrow">A CELEBRATION ONLY YOU COULD DREAM UP</p><h2>Let’s tell your story <em>beautifully.</em></h2><Link href="/contact" className="story-button">LET’S BEGIN <span>↗</span></Link></InnerSection>
    </main>
  );
}
