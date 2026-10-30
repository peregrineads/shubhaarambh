import { Flower2, Gift, Heart, Leaf, Music2, PartyPopper } from "lucide-react";

/** Small line-art accents inspired by flowers, music and celebration. */
export default function EventMotif({ kind = "flower" }: { kind?: "flower" | "gift" | "heart" | "leaf" | "music" | "party" }) {
  const Icon = { flower: Flower2, gift: Gift, heart: Heart, leaf: Leaf, music: Music2, party: PartyPopper }[kind];
  return <Icon aria-hidden="true" focusable="false" size="1em" strokeWidth={1.35} style={{ display: "inline-block", verticalAlign: "-0.12em" }} />;
}
