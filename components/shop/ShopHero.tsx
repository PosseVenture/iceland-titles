// components/shop/ShopHero.tsx
export function ShopHero() {
  return (
    <div className="bg-[#0a0f1a] pt-32 pb-24"> {/* Same blue-black as The Land */}
      <div className="max-w-5xl mx-auto px-6 text-left">
        <div className="mb-6 inline-flex px-6 py-2 border border-white/20 rounded-full text-sm tracking-widest text-white/75">
          EYRI Í KOLLAFIRÐI • VESTFIRÐIR
        </div>

        <h1 className="font-display text-6xl md:text-7xl font-light tracking-[-2px] leading-none text-white mb-8">
          Own a piece of<br />mystical Iceland
        </h1>

        <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
          Claim your souvenir plot at Eyri í Kollafirði in the wild Westfjords — 
          where the Huldufólk roam the mist and Snæfellsjökull watches across the fjord.
        </p>
      </div>
    </div>
  );
}