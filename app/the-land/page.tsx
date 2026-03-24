// ─────────────────────────────────────────────────────────────────────────────
// /the-land — Reserve overview page
// Single large card for Snæfellsnes Reserve → links to /the-land/snaefellsnes
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata }        from "next";
import { SITE, RESERVE }        from "@/lib/data";
import { TheLandHero }          from "@/components/land/TheLandHero";
import { ReserveOverviewCard }  from "@/components/land/ReserveOverviewCard";
import { MysticalFactsStrip }   from "@/components/land/MysticalFactsStrip";

export const metadata: Metadata = {
  title:       "The Land — Snæfellsnes Reserve | Icelandic Titles",
  description:
    "Explore the mystical Snæfellsnes Reserve within Snæfellsjökull National Park — home of guardian spirit Bárður Snæfellsás and the huldufólk hidden people. Your souvenir plot lies here.",
  openGraph: {
    title:
      "The Land — Snæfellsnes Reserve | Icelandic Titles",
    description:
      "Discover the legendary Snæfellsjökull glacier — one of Earth's seven great energy centres — and claim your souvenir plot in its shadow.",
    url: `${SITE.url}/the-land`,
  },
};

export default function TheLandPage() {
  return (
    <>
      <TheLandHero />
      <main id="reserve-overview" aria-label="Snæfellsnes Reserve overview">
        <ReserveOverviewCard reserve={RESERVE} />
        <MysticalFactsStrip facts={RESERVE.mysticalFacts} />
      </main>
    </>
  );
}
