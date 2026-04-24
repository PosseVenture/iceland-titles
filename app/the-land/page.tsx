// ─────────────────────────────────────────────────────────────────────────────
// /the-land — Reserve overview page (Clean Vestfirðir version)
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import { TheLandHero } from "@/components/land/TheLandHero";
import { MysticalFactsStrip } from "@/components/land/MysticalFactsStrip";
import { Reserve360Viewer } from "@/components/land/Reserve360Viewer";

export const metadata: Metadata = {
  title: "The Land — Eyri í Kollafirði Reserve | Icelandic Titles",
  description: "Discover Eyri í Kollafirði in the wild Westfjords of Iceland.",
};

export default function TheLandPage() {
  return (
    <>
      <TheLandHero />

      <main id="reserve-overview">
        
        {/* === Main Reserve Section with Big Image === */}
        <section className="py-16 bg-ice-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Big Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] lg:aspect-auto lg:h-[620px] border border-white/10 shadow-2xl order-2 lg:order-1">
                <img 
                  src="/images/eyri-reserve-main.jpg" 
                  alt="Eyri í Kollafirði Reserve landscape"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <p className="eyebrow mb-3">OUR RESERVE</p>
                  <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight">
                    Eyri í Kollafirði Reserve
                  </h2>
                  <p className="mt-6 text-lg text-white/80 leading-relaxed">
                    Where the hidden people walk and Snæfellsjökull watches from across the fjord.
                  </p>
                </div>

                <p className="text-white/70 text-[17px]">
                  Your souvenir plot lies within the ancient land of Eyri í Kollafirði, set in the 
                  Gufudalssveit valley of Vestfirðir — one of Iceland's most remote and spiritually 
                  charged corners.
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-white/10">🌊 Eyri í Kollafirði</div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-white/10">🏔 View to Snæfellsjökull</div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-white/10">🧝 Huldufólk of Gufudalssveit</div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-white/10">🌲 Ancient birch woodland</div>
                </div>

                <a 
                  href="#360-tour"
                  className="inline-flex items-center gap-3 bg-white text-ice-black px-8 py-4 rounded-2xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Explore the Reserve →
                </a>
              </div>
            </div>
          </div>
        </section>

        <MysticalFactsStrip facts={[]} />   {/* You can fill this later */}

        {/* 360° Viewer */}
        <Reserve360Viewer />

        {/* Video Gallery */}
        <section className="py-16 bg-ice-black border-t border-white/10" id="videos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">Live from the land</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white">
                Real footage from Eyri í Kollafirði
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,3,4].map((num) => (
                <div key={num} className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black">
                  <video 
                    src={`/videos/eyri-plot-video-${num}.mp4`} 
                    controls 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}