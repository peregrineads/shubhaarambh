export type GalleryCategory = "Weddings" | "Birthdays" | "Party Nights" | "Corporate" | "Engagements" | "Decorations";
export type GalleryImage = { id: string; category: GalleryCategory; title: string; alt: string; src: string; shape: "portrait" | "landscape" | "square" };

// Curated demonstration photography. Replace these images with approved client portfolio images.
const pexels = (id: number) => `/images/${({33331302: "indian-wedding", 39797465: "mandap", 37710446: "floral-reception", 23363840: "party-night", 37572680: "birthday", 28976226: "outdoor-reception", 5038747: "tablescape", 29569636: "dancing", 14457438: "birthday-decor"} as Record<number, string>)[id]}.jpg`;
export const galleryImages: GalleryImage[] = [
  { id: "wedding-1", category: "Weddings", title: "A day to remember", alt: "An ornate Indian wedding celebration setting", src: pexels(33331302), shape: "portrait" },
  { id: "decor-1", category: "Decorations", title: "In the details", alt: "An elaborately decorated wedding mandap", src: pexels(39797465), shape: "landscape" },
  { id: "engagement-1", category: "Engagements", title: "The beginning of always", alt: "A floral reception setting", src: pexels(37710446), shape: "portrait" },
  { id: "party-1", category: "Party Nights", title: "Nights to remember", alt: "A lively party celebration", src: pexels(23363840), shape: "square" },
  { id: "birthday-1", category: "Birthdays", title: "A little more joy", alt: "A colorful birthday celebration", src: pexels(37572680), shape: "portrait" },
  { id: "corporate-1", category: "Corporate", title: "Gather beautifully", alt: "A beautifully arranged outdoor event reception", src: pexels(28976226), shape: "landscape" },
  { id: "decor-2", category: "Decorations", title: "Set the scene", alt: "Flowers and table styling for a special occasion", src: pexels(5038747), shape: "portrait" },
  { id: "wedding-2", category: "Weddings", title: "Made for magic", alt: "A floral wedding reception setting", src: pexels(37710446), shape: "landscape" },
  { id: "party-2", category: "Party Nights", title: "Let the night unfold", alt: "Guests dancing at a celebration", src: pexels(29569636), shape: "square" },
  { id: "birthday-2", category: "Birthdays", title: "A reason to celebrate", alt: "Festive birthday decorations", src: pexels(14457438), shape: "landscape" },
];
