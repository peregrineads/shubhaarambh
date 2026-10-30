/** Layered botanical accents give the introduction its own celebratory composition. */
export default function IntroOrnaments() {
  return <div className="intro-ornaments" aria-hidden="true">
    <svg className="intro-flourish intro-flourish-top" viewBox="0 0 180 180" fill="none">
      <path d="M19 160C51 112 84 72 156 21M45 124c-21-2-29-17-26-32 19 1 29 12 26 32ZM70 96c-2-20-15-30-29-28 1 19 10 29 29 28ZM96 69c-2-18-12-29-26-28 0 17 9 27 26 28ZM70 96c19 4 32-4 38-18-18-5-31 1-38 18ZM96 69c18 4 30-2 36-15-16-5-29 0-36 15ZM124 46c15 2 25-4 29-16-14-3-24 2-29 16Z" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="157" cy="20" r="4" fill="currentColor"/>
    </svg>
    <svg className="intro-flourish intro-flourish-bottom" viewBox="0 0 180 180" fill="none">
      <path d="M18 163C46 121 89 75 159 18M47 124c-19-2-29-14-27-30 18 0 28 10 27 30ZM73 96c-2-20-14-30-29-28 1 19 10 29 29 28ZM99 69c-2-18-13-28-27-27 1 17 10 27 27 27ZM73 96c18 3 31-4 37-18-17-5-31 1-37 18ZM99 69c17 4 30-2 36-15-16-5-29 0-36 15Z" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <div className="intro-thread intro-thread-one" />
    <div className="intro-thread intro-thread-two" />
    <span className="intro-petal intro-petal-one" />
    <span className="intro-petal intro-petal-two" />
    <span className="intro-petal intro-petal-three" />
    <span className="intro-petal intro-petal-four" />
    <span className="intro-side-caption">THOUGHTFULLY IMAGINED <i /> BEAUTIFULLY CELEBRATED</span>
    <span className="intro-photo-tag"><b>THE LITTLE DETAILS</b><em>make the magic</em></span>
  </div>;
}
