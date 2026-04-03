// ─────────────────────────────────────────────────────────────────────────────
// Homepage — Icelandic Titles
// Part 2: Full homepage with all 7 sections
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata }          from "next";
import { SITE }                   from "@/lib/data";

// ── Section components ──────────────────────────────────────────────────────
import { Hero }             from "@/components/sections/Hero";
import { WhatYouGet }       from "@/components/sections/WhatYouGet";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { ReserveTeaser }    from "@/components/sections/ReserveTeaser";
import { AdoptionTeaser }   from "@/components/sections/AdoptionTeaser";
import { Testimonials }     from "@/components/sections/Testimonials";
import { AsSeenOn }         from "@/components/sections/AsSeenOn";
import { CTABanner }        from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title:       "Icelandic Titles — Become a Jarl, Baron or Baroness of Eyri í Kollafirði",
  description: SITE.description,
  openGraph: {
    title:       `${SITE.name} — Become a Jarl, Baron or Baroness of Eyri in Kollafjordur`,
    description: SITE.description,
    url:         SITE.url,
    images: [
      {
        // OG image: Northern lights above Snæfellsjökull — Unsplash photo-1519681393784-d120267933ba
        url:    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
        width:  1200,
        height: 630,
        alt:    "Vivid green and purple northern lights dancing above the snow-capped Snæfellsjökull glacier at night, Snæfellsnes Peninsula — mystical energy centre and guardian spirit landscape",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Snæfellsjökull background, heading, Bárður reference, CTAs */}
      <Hero />

      {/* 2. What You Get — 4 cards: certificate, plot, conservation, dashboard */}
      <WhatYouGet />

      {/* 3. Featured Products — 1/5/10 sq ft with add-to-cart */}
      <FeaturedProducts />

      {/* 4. Reserve Teaser — Snæfellsnes with mystical copy + glacier photo */}
      <ReserveTeaser />

      {/* 5. Adoption Teaser — Icelandic Horse, Arctic Fox, Puffin */}
      <AdoptionTeaser />

      {/* 6. Testimonials — 6 verified reviews, Trustpilot aggregate */}
      <Testimonials />

      {/* 7. As Seen In — Iceland-adapted press logos */}
      <AsSeenOn />

      {/* 8. Final CTA Banner — aurora atmosphere, "The glacier calls" */}
      <CTABanner />
    </>
  );
}
