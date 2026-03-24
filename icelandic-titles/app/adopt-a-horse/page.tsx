import type { Metadata } from "next";
import { AdoptAnAnimal } from "@/components/sections/AdoptAnAnimal";

export const metadata: Metadata = {
  title: "Adopt an Icelandic Animal — Horse, Puffin, Arctic Fox & Eagle",
  description:
    "Adopt an Icelandic horse, Atlantic puffin, arctic fox, or white-tailed eagle. Your annual adoption fee funds real conservation work and connects you personally to Iceland's most extraordinary wildlife.",
  openGraph: {
    title: "Adopt an Icelandic Animal — Icelandic Titles",
    description:
      "Go beyond owning land — adopt one of Iceland's iconic animals. Horse, puffin, arctic fox, or eagle from €19/year.",
  },
};

export default function AdoptAHorsePage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative pt-32 pb-14 overflow-hidden"
        aria-labelledby="adopt-page-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#04091a] to-ice-black" aria-hidden="true" />
        <div className="aurora-orb aurora-orb-2 opacity-20 top-0 right-0" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="label-eyebrow mb-4">Animal Adoption Programme</p>
          <h1
            id="adopt-page-heading"
            className="font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold text-white leading-tight mb-5"
          >
            Adopt an{" "}
            <span className="text-gradient-aurora">Icelandic Animal</span>
          </h1>
          <p className="text-[1.05rem] text-white/50 leading-relaxed max-w-2xl mx-auto mb-4">
            Go beyond owning land. Adopt a horse, puffin, arctic fox, or white-tailed eagle — and receive a personalised adoption pack while directly funding Iceland's most important conservation work.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm text-white/40 mt-4">
            <span>🐴 Icelandic Horse</span>
            <span className="text-white/15">·</span>
            <span>🐦 Atlantic Puffin</span>
            <span className="text-white/15">·</span>
            <span>🦊 Arctic Fox</span>
            <span className="text-white/15">·</span>
            <span>🦅 White-tailed Eagle</span>
          </div>
        </div>
      </section>

      <main id="main-content">
        <AdoptAnAnimal />
      </main>
    </>
  );
}
