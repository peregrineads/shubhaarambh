/** A botanical line drawing inspired by garlands and celebration flowers. */
export default function GalleryFlourish({ className = "" }: { className?: string }) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 250C43 200 41 160 68 118C90 84 121 59 157 15" />
    <path d="M48 180C25 177 16 162 16 148C35 148 50 159 51 175M57 151C77 149 91 139 96 123C77 123 63 134 57 151M71 118C55 109 52 93 56 79C72 85 79 100 75 114M91 91C110 94 124 85 131 71C113 67 98 75 91 91M114 65C103 53 103 38 110 25C124 35 126 51 119 62" />
    <path d="M31 222C21 216 17 205 19 194C30 199 36 209 34 219M42 199C54 197 64 190 67 180C54 180 45 188 42 199" />
    <circle cx="156" cy="15" r="5" /><circle cx="141" cy="40" r="2.5" /><circle cx="29" cy="185" r="2" /><circle cx="101" cy="105" r="2" />
  </svg>;
}
