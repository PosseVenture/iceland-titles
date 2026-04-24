// components/shop/ShopHero.tsx
"use client";

import { motion } from "framer-motion";

export function ShopHero() {
  return (
    <div className="relative h-[560px] flex items-center justify-center overflow-hidden bg-ice-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Location tag */}
        <p className="inline-block mb-4 px-6 py-1.5 rounded-full border border-white/20 text-sm tracking-[2px] text-white/80">
          EYRI Í KOLLAFIRÐI • VESTFIRÐIR
        </p>

        <h1 className="font-display text-6xl md:text-7xl font-light leading-none tracking-tighter text-white mb-6">
          Own a piece of<br />mystical Iceland
        </h1>

        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Claim your souvenir plot at <strong>Eyri í Kollafirði</strong> in the wild Westfjords — 
          where the Huldufólk roam the mist and Snæfellsjökull watches across the fjord. 
          Become a Jarl, Baron or Baroness of this ancient landscape.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 flex items-center gap-2">
            🌲 Conservation funded
          </div>
          <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 flex items-center gap-2">
            📍 GPS + What3Words
          </div>
          <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 flex items-center gap-2">
            🛡️ 90-day guarantee
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ice-black to-transparent z-20" />
    </div>
  );
}