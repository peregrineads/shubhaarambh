import "./text-hover.css";
import Image from "next/image";
import EventMotif from "@/components/decor/EventMotif";
import Link from "next/link";
import { HomeParallax, HomeReveal, HomeRevealLink } from "@/components/HomeMotion";
import HomeAtmosphere from "@/components/HomeAtmosphere";
import IntroOrnaments from "@/components/decor/IntroOrnaments";
import "./intro-ornaments.css";
import "./home-atmosphere.css";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

const images = {
  hero: "/images/wedding-hall.jpg",
  intro: "/images/floral-reception.jpg",
  detail: "/images/tablescape.jpg",
  wedding: "/images/indian-wedding.jpg",
  birthday: "/images/birthday.jpg",
  corporate: "/images/outdoor-reception.jpg",
  party: "/images/dancing.jpg",
  engagement: "/images/mandap.jpg",
  custom: "/images/birthday-decor.jpg",
  statement: "/images/reception-table.jpg",
};
const services = [
  ["01", "Wedding celebrations", "A day as one of a kind as your story.", images.wedding],
  ["02", "Birthday parties", "A little more joy, a lot more magic.", images.birthday],
  ["03", "Corporate events", "Gatherings with purpose and personality.", images.corporate],
  ["04", "Party nights", "Good company. Beautiful atmosphere.", images.party],
  ["05", "Engagement & pre-wedding", "For the moments before forever.", images.engagement],
  ["06", "Custom celebrations", "Whatever you dream up, let’s celebrate it.", images.custom],
];
function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) { return <div className={`photo ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 50vw" /></div>; }
function TextLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) { return <Link className={`text-link ${light ? "text-link-light" : ""}`} href={href}>{children}<span><ArrowUpRight size={17}/></span></Link>; }
export default function Home() {
  return <main id="main"><noscript><style>{`.home-reveal { opacity: 1 !important; transform: none !important; }`}</style></noscript>
    <section className="hero"><Image className="hero-image" src={images.hero} alt="A warmly illuminated wedding hall with a floral stage" fill sizes="100vw" priority/><div className="hero-shade"/><HomeAtmosphere/><div className="hero-content"><div className="hero-kicker"><span>CELEBRATIONS, BEAUTIFULLY IMAGINED</span><span><EventMotif kind="flower" /></span></div><h1 data-cursor-text="">We don’t just<br/>plan events.<br/><em>We create moments</em><br/>that last forever<span className="hero-dot">.</span></h1><div className="hero-bottom"><p>From magical weddings to unforgettable celebrations, we bring your dream occasions to life with creativity, elegance and thoughtful planning.</p><div className="hero-actions"><Link className="button button-coral" href="/gallery">Explore our celebrations <ArrowUpRight size={17}/></Link><Link className="hero-secondary" href="/contact">Let’s plan your event <ArrowRight size={16}/></Link></div></div></div><div className="hero-side">GUJARAT, INDIA <span><EventMotif kind="leaf" /></span> MOMENTS MADE MEANINGFUL</div><a className="scroll-cue" href="#beginning"><span>SCROLL TO DISCOVER</span><ArrowDown size={16}/></a><div className="hero-index">01 <span>/</span> 04</div></section>

    <section className="intro section-pad" id="beginning"><HomeReveal className="intro-copy" direction="left"><p className="eyebrow"><span><EventMotif kind="flower" /></span> THE ART OF CELEBRATING</p><h2 data-cursor-text="">Every great celebration begins with <em>Shubhaarambh.</em></h2><p className="body-copy">Some moments deserve to be held onto forever. We bring people, ideas and beautiful details together to create celebrations that feel unmistakably yours.</p><TextLink href="/about">Explore our story</TextLink><div className="intro-note"><span>01 / A BEAUTIFUL BEGINNING</span><span>MADE WITH JOY <EventMotif kind="heart" /></span></div></HomeReveal><HomeReveal className="intro-visual" direction="right" delay={0.1}><IntroOrnaments/><Photo src={images.intro} alt="A floral celebration setting" className="intro-main"/><Photo src={images.detail} alt="A beautifully set celebration table" className="intro-small"/><div className="round-stamp"><span>MADE FOR THE MOMENTS</span><b><EventMotif kind="flower" /></b><span>YOU’LL ALWAYS REMEMBER</span></div></HomeReveal></section>

    <section className="services section-pad"><HomeReveal className="section-top"><div><p className="eyebrow"><span><EventMotif kind="party" /></span> WHAT WE DO</p><h2 data-cursor-text="">Whatever the occasion,<br/><em>we’ll make it extraordinary.</em></h2></div><p>From the first idea to the final flourish, we bring your celebration together with care, creativity and a little bit of magic.</p></HomeReveal><div className="service-grid">{services.map(([number,title,description,src], i) => <HomeRevealLink href="/contact" className={`service-tile service-${i+1}`} delay={(i % 3) * 0.1} key={title}><Image src={src} alt="" fill sizes="(max-width: 700px) 100vw, 33vw"/><div className="tile-shade"/><div className="tile-top"><span>{number} / 06</span><span className="tile-arrow"><ArrowUpRight size={19}/></span></div><div className="tile-caption"><h3>{title}</h3><p>{description}</p></div></HomeRevealLink>)}</div><div className="services-end"><span>YOUR OCCASION, YOUR WAY</span><TextLink href="/contact">Let’s create together</TextLink></div></section>

    <section className="featured section-pad"><HomeReveal className="section-top"><div><p className="eyebrow"><span><EventMotif kind="gift" /></span> A LITTLE INSPIRATION</p><h2 data-cursor-text="">A glimpse into the<br/><em>magic we create.</em></h2></div><div><p>A beautiful detail. A room full of laughter. The kind of atmosphere you never want to leave.</p><TextLink href="/gallery">View the full gallery</TextLink></div></HomeReveal><div className="featured-grid"><HomeReveal className="featured-item feature-one" direction="scale" delay={0}><Photo src={images.engagement} alt="A romantic celebration setting"/><span>THE ROMANCE OF IT ALL <ArrowUpRight size={15}/></span></HomeReveal><HomeReveal className="featured-item feature-two" direction="scale" delay={0.1}><Photo src={images.birthday} alt="Colourful birthday decorations"/><span>JOY IN EVERY DETAIL <ArrowUpRight size={15}/></span></HomeReveal><HomeReveal className="featured-item feature-three" direction="scale" delay={0.2}><Photo src={images.party} alt="A lively evening celebration"/><span>NIGHTS TO REMEMBER <ArrowUpRight size={15}/></span></HomeReveal><HomeReveal className="featured-item feature-four" direction="scale" delay={0.1}><Photo src={images.detail} alt="Floral details at a celebration"/><span>THE BEAUTIFUL LITTLE THINGS <ArrowUpRight size={15}/></span></HomeReveal></div><p className="imagery-note">A curated collection of inspirational imagery. Client celebrations will be featured here.</p></section>

    <section className="journey section-pad"><HomeReveal className="journey-heading"><p className="eyebrow"><span><EventMotif kind="heart" /></span> THE SHUBHAARAMBH EXPERIENCE</p><h2 data-cursor-text="">Your vision. Our passion.<br/><em>One unforgettable celebration.</em></h2></HomeReveal><div className="journey-list"><HomeReveal delay={0}><span className="journey-number">01</span><h3>Dream <em>it.</em></h3><p>It starts with a conversation. Tell us what matters to you, and how you want your celebration to feel.</p><span className="journey-star"><EventMotif kind="heart" /></span></HomeReveal><HomeReveal delay={0.1}><span className="journey-number">02</span><h3>Design <em>it.</em></h3><p>We shape your ideas into a thoughtful concept, bringing every colour, texture and detail into harmony.</p><span className="journey-star"><EventMotif kind="flower" /></span></HomeReveal><HomeReveal delay={0.2}><span className="journey-number">03</span><h3>Celebrate <em>it.</em></h3><p>We bring it all together so you can be present for the people, the laughter and the memories.</p><span className="journey-star"><EventMotif kind="party" /></span></HomeReveal></div></section>

    <section className="statement"><HomeParallax><Image src={images.statement} alt="" fill sizes="100vw"/></HomeParallax><div className="statement-overlay"/><HomeReveal direction="scale"><p className="eyebrow"><EventMotif kind="leaf" /> &nbsp; THE BEAUTY IS IN THE FEELING &nbsp; <EventMotif kind="leaf" /></p><h2 data-cursor-text="">Turning dreams into<br/><em>beautiful realities.</em></h2><Link href="/contact" className="statement-link">LET’S BEGIN <ArrowUpRight size={16}/></Link></HomeReveal></section>

    <section className="locations section-pad"><HomeReveal direction="left"><p className="eyebrow"><span><EventMotif kind="leaf" /></span> WHERE WE CELEBRATE</p><h2 data-cursor-text="">Beautiful celebrations<br/><em>across Gujarat.</em></h2><p className="body-copy">From intimate celebrations to magnificent destination events, we bring exceptional experiences to Bharuch, Ankleshwar, Kevadia and beyond.</p><TextLink href="/contact">Tell us where you’re celebrating</TextLink></HomeReveal><div className="location-list"><HomeReveal direction="right" delay={0}><span>01</span><h3>Bharuch</h3><ArrowUpRight/></HomeReveal><HomeReveal direction="right" delay={0.12}><span>02</span><h3>Ankleshwar</h3><ArrowUpRight/></HomeReveal><HomeReveal direction="right" delay={0.24}><span>03</span><h3>Kevadia <small>(Ekta Nagar)</small></h3><ArrowUpRight/></HomeReveal><p>AND WHEREVER YOUR STORY TAKES US <EventMotif kind="leaf" /></p></div></section>

    <section className="home-cta"><div className="cta-flower cta-flower-left" aria-hidden="true"><EventMotif kind="flower" /></div><HomeReveal direction="scale"><p className="eyebrow">THE BEGINNING OF SOMETHING BEAUTIFUL</p><h2 data-cursor-text="">Your dream celebration<br/><em>starts here.</em></h2><p style={{ fontSize: 13, color: "#e4cbd8", marginBottom: 30 }}>Tell us what you’re imagining. We’ll help make it extraordinary.</p><div><Link className="button button-coral" href="/contact">Start planning <ArrowUpRight size={17}/></Link><Link className="button button-outline" href="/contact">Contact us <ArrowUpRight size={17}/></Link></div></HomeReveal><div className="cta-flower cta-flower-right" aria-hidden="true"><EventMotif kind="leaf" /></div></section>
  </main>;
}
