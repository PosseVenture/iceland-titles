// ─────────────────────────────────────────────────────────────────────────────
// /the-land/eyri-i-kollafirdi — Eyri í Kollafirði Reserve detail page
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import { SITE, RESERVE, GUIDED_TOURS } from "@/lib/data";
import { ReserveDetailHero } from "@/components/land/ReserveDetailHero";
import { ReserveDescription } from "@/components/land/ReserveDescription";
import { GalleryGrid } from "@/components/land/GalleryGrid";
import { ReserveFeatures } from "@/components/land/ReserveFeatures";
import { MapSection } from "@/components/land/MapSection";
import { VirtualTourSection } from "@/components/land/VirtualTourSection";
import { TourBookingSection } from "@/components/land/TourBookingSection";
import { ConservationBand } from "@/components/land/ConservationBand";

export const metadata: Metadata = {
  title: "Eyri í Kollafirði Reserve — Vestfirðir | Icelandic Titles",
  description:
    "Your souvenir plot lies in the wild Gufudalssveit valley of Vestfirðir at Eyri í Kollafirði — where the Huldufólk dwell and Snæfellsjökull watches from across the fjord.",
  openGraph: {
    title: "Eyri í Kollafirði Reserve — Vestfirðir | Icelandic Titles",
    description: "Ancient land of hidden people and powerful views to Snæfellsjökull.",
    url: `${SITE.url}/the-land/eyri-i-kollafirdi`,
  },
};

export default function EyriPage() {
  return (
    <>
      <ReserveDetailHero reserve={RESERVE} />
      <main id="reserve-detail" aria-label="Eyri í Kollafirði Reserve detail">
        <ReserveDescription reserve={RESERVE} />
        <ReserveFeatures features={RESERVE.features} />
        <GalleryGrid images={RESERVE.galleryImages} />
        <MapSection
          coordinates={RESERVE.coordinates}
          what3words={RESERVE.what3words}
          reserveName={RESERVE.name}
        />
        <VirtualTourSection />
        <TourBookingSection tours={GUIDED_TOURS} />
        <ConservationBand conservation={RESERVE.conservation} />
      </main>
    </>
  );
}