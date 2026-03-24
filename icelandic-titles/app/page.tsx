import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Reserves } from "@/components/sections/Reserves";
import { GiftPacks } from "@/components/sections/GiftPacks";
import { AdoptAnAnimal } from "@/components/sections/AdoptAnAnimal";
import { Reviews } from "@/components/sections/Reviews";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `${SITE.name} – ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Reserves />
      <GiftPacks />
      <AdoptAnAnimal />
      <Reviews />
      {/*
        ── COMING IN PARTS 5–6 ──
        <VirtualTour />      Part 5
        <PlotLocatorMap />   Part 5
        <GuidedTours />      Part 5
        <Guarantee />        Part 5
        <FAQ />              Part 5
        <NewsletterCTA />    Part 6
      */}
    </>
  );
}
