import type { Metadata } from "next";

export const metadata: Metadata = {
  title:       "Adopt an Icelandic Horse — Icelandic Titles",
  description: "Symbolically adopt an Icelandic horse, arctic fox or puffin from the Snæfellsnes Peninsula. A magical gift that funds conservation of Iceland's incredible wildlife.",
};

export default function AdoptPage() {
  return (
    <div className="min-h-screen bg-ice-black pt-[72px] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="font-display text-6xl mb-6" aria-hidden="true">🐴</p>
        <h1 className="font-display text-4xl font-light text-white mb-4">
          Adopt an Icelandic Horse
        </h1>
        <p className="font-body text-white/50 max-w-sm mx-auto leading-relaxed">
          Adoption shop — Icelandic horse, arctic fox, puffin — built in Part 3 alongside the main shop.
        </p>
      </div>
    </div>
  );
}
