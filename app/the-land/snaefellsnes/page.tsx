// ─────────────────────────────────────────────────────────────────────────────
// /the-land/snaefellsnes — Snæfellsnes Reserve full detail page
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata }         from "next";
import { SITE, RESERVE, GUIDED_TOURS } from "@/lib/data";
import { ReserveDetailHero }     from "@/components/land/ReserveDetailHero";
import { ReserveDescription }    from "@/components/land/ReserveDescription";
import { GalleryGrid }           from "@/components/land/GalleryGrid";
import { ReserveFeatures }       from "@/components/land/ReserveFeatures";
import { MapSection }            from "@/components/land/MapSection";
import { VirtualTourSection }    from "@/components/land/VirtualTourSection";
import { TourBookingSection }    from "@/components/land/TourBookingSection";
import { ConservationBand }      from "@/components/land/ConservationBand";

export const metadata: Metadata = {
  title:       "Snæfellsnes Reserve — The Glacier & The Guardian | Icelandic Titles",
  description:
    "Your souvenir plot lies in the magical Snæfellsnes area of Snæfellsjökull National Park. Direct views of the legendary glacier — home of guardian spirit Bárður Snæfellsás and the huldufólk hidden people.",
  openGraph: {
    title:
      "Snæfellsnes Reserve — Where the Glacier Guards the Souls of Iceland",
    description:
      "Explore Snæfellsjökull — one of Earth's seven energy centres — and discover how your souvenir plot connects you to guardian spirit Bárður and the ancient huldufólk.",
    url:  `${SITE.url}/the-land/snaefellsnes`,
    images: [
      {
        // OG image: Golden ridges of Snæfellsjökull — Unsplash photo-1540979388789-7cee28a1cdc9
        url:    "https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?w=1200&q=80",
        width:  1200,
        height: 630,
        alt:    RESERVE.heroImageAlt,
      },
    ],
  },
};

export default function SnaefellsnesPage() {
  return (
    <>
      {/* 1. Hero — full-bleed glacier image */}
      <ReserveDetailHero reserve={RESERVE} />

      <main id="reserve-detail" aria-label="Snæfellsnes Reserve detail">

        {/* 2. Long description — Bárður, huldufólk, energy centre lore */}
        <ReserveDescription reserve={RESERVE} />

        {/* 3. Feature cards — 6 reserve highlights */}
        <ReserveFeatures features={RESERVE.features} />

        {/* 4. Photo gallery grid — 6 images with rich alt texts */}
        <GalleryGrid images={RESERVE.galleryImages} />

        {/* 5. Map + What3Words + coordinates */}
        <MapSection
          coordinates={RESERVE.coordinates}
          what3words={RESERVE.what3words}
          reserveName={RESERVE.name}
        />

        {/* 6. Pan360 / virtual tour embed placeholder */}
        <VirtualTourSection />

        {/* 7. Guided tour booking form */}
        <TourBookingSection tours={GUIDED_TOURS} />

        {/* 8. Conservation band */}
        <ConservationBand conservation={RESERVE.conservation} />

      </main>
    </>
  );
}
