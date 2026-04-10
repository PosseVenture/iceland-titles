// ─────────────────────────────────────────────────────────────────────────────
// /the-land — Reserve overview page (Vestfirðir version)
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import { SITE, RESERVE } from "@/lib/data";
import { TheLandHero } from "@/components/land/TheLandHero";
import { ReserveOverviewCard } from "@/components/land/ReserveOverviewCard";
import { MysticalFactsStrip } from "@/components/land/MysticalFactsStrip";
import { Reserve360Viewer } from "@/components/land/Reserve360Viewer";

export const metadata: Metadata = {
  title: "The Land — Eyri í Kollafirði Reserve | Icelandic Titles",
  description:
    "Explore the wild and ancient Eyri í Kollafirði Reserve in Gufudalssveit, Vestfirðir — where the Huldufólk roam the mist and Snæfellsjökull watches from across the fjord.",
  openGraph: {
    title: "The Land — Eyri í Kollafirði Reserve | Icelandic Titles",
    description:
      "Discover the primordial landscape of Vestfirðir and claim your souvenir plot at Eyri í Kollafirði.",
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
        
        {/* 360° Virtual Tour */}
        <Reserve360Viewer />

        {/* Video Gallery — Real footage from the plot */}
        <section className="py-16 bg-ice-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">Immerse yourself</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white">
                Live from Eyri í Kollafirði
              </h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                Real footage from your future plot and the surrounding Westfjords landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                <video 
                  src="/videos/eyri-plot-video-1.mp4" 
                  controls 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                <video 
                  src="/videos/eyri-plot-video-3.mp4" 
                  controls 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                <video 
                  src="/videos/eyri-plot-video-4.mp4" 
                  controls 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}