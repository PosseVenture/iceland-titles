// components/shop/ShopHero.tsx
export function ShopHero() {
  return (
    <div className="bg-ice-black pt-28 pb-20 text-center border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Location tag - same style as The Land */}
        <div className="mb-6 inline-flex px-6 py-2 border border-white/20 rounded-full text-sm tracking-widest text-white/80">
          EYRI Í KOLLAFIRÐI • VESTFIRÐIR
        </div>

        {/* Big headline - matching The Land */}
        <h1 className="font-display text-6xl md:text-7xl font-light tracking-[-1.5px] leading-none text-white mb-8">
          Own a piece of<br />mystical Iceland
        </h1>

        {/* Description */}
        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Claim your souvenir plot at Eyri í Kollafirði in the wild Westfjords — 
          where the Huldufólk roam the mist and Snæfellsjökull watches across the fjord.
        </p>
      </div>
    </div>
  );
}