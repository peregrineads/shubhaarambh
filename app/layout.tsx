import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
export const metadata: Metadata = {
  title: { default: "Shubhaarambh Events | Beautiful Beginnings", template: "%s | Shubhaarambh Events" },
  description: "Thoughtful wedding planning, event styling and celebrations in Bharuch, Ankleshwar, Kevadia and beyond.",
  openGraph: { title: "Shubhaarambh Events | Beautiful Beginnings", description: "Thoughtfully imagined celebrations in Gujarat.", type: "website" },
};
const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Shubhaarambh Events", description: "Wedding planning and event management in Gujarat", areaServed: ["Bharuch", "Ankleshwar", "Kevadia"] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable}`}><body><noscript><style>{`.home-reveal, .inner-reveal, .gallery-reveal, .gallery-grid, .gallery-tile, .footer-reveal, .site-header { opacity: 1 !important; transform: none !important; }`}</style></noscript><a className="skip-link" href="#main">Skip to content</a><SiteHeader/>{children}<SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}/></body></html>;
}
