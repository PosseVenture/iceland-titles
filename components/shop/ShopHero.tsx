// components/shop/ShopHero.tsx
"use client";

export function ShopHero() {
  return (
    <div className="relative min-h-[520px] flex items-center justify-center overflow-hidden bg-ice-black">
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 border border-white/20 rounded-full text-sm tracking-widest text-white/80">
          EYRI Í KOLLAFIRÐI • VESTFIRÐIR
        </div>

        <h1 className="font-display text-6xl md:text-[4.5rem] leading-none font-light tracking-tighter text-white mb-8">
          Own a piece of<br />mystical Iceland
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Claim your souvenir plot at <strong>Eyri í Kollafirði</strong> in the wild Westfjords — 
          where the Huldufólk roam the mist and Snæfellsjökull watches across the fjord. 
          Become a Jarl, Baron or Baroness of this ancient landscape.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm flex items-center gap-2 text-white/70">
            🌲 Conservation funded
          </div>
          <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm flex items-center gap-2 text-white/70">
            📍 GPS + What3Words
          </div>
          <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm flex items-center gap-2 text-white/70">
            🛡️ 90-day guarantee
          </div>
        </div>
      </div>

      {/* Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ice-black to-transparent" />
    </div>
  );
}