// ─────────────────────────────────────────────────────────────────────────────
// /the-land — Reserve overview page (Vestfirðir version)
// Single large card for Eyri í Kollafirði Reserve
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import { SITE, RESERVE } from "@/lib/data";
import { TheLandHero } from "@/components/land/TheLandHero";
import { ReserveOverviewCard } from "@/components/land/ReserveOverviewCard";
import { MysticalFactsStrip } from "@/components/land/MysticalFactsStrip";

export const metadata: Metadata = {
  title: "The Land — Eyri í Kollafirði Reserve | Icelandic Titles",
  description:
    "Explore the wild and ancient Eyri í Kollafirði Reserve in Gufudalssveit, Vestfirðir — where the Huldufólk roam the mist and Snæfellsjökull watches from across the fjord.",
  openGraph: {
    title: "The Land — Eyri í Kollafirði Reserve | Icelandic Titles",
    description:
      "Discover the primordial landscape of Vestfirðir and claim your souvenir plot at Eyri í Kollafirði, where hidden people and ancient power converge.",
    url: `${SITE.url}/the-land`,
  },
};

export default function TheLandPage() {
  return (
    <>
      <TheLandHero />
      <main id="reserve-overview" aria-label="Eyri í Kollafirði Reserve overview">
        <ReserveOverviewCard reserve={RESERVE} />
        <MysticalFactsStrip facts={RESERVE.mysticalFacts} />
      </main>
    </>
  );
}