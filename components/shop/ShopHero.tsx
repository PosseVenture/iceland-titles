// components/shop/ShopHero.tsx
export function ShopHero() {
  return (
    <div className="bg-ice-black pt-32 pb-24 text-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Location tag - same as The Land */}
        <div className="mb-8 inline-flex px-6 py-2.5 border border-white/20 rounded-full text-sm tracking-widest text-white/75">
          EYRI Í KOLLAFIRÐI • VESTFIRÐIR
        </div>

        {/* Big headline - matching The Land style */}
        <h1 className="font-display text-6xl md:text-7xl font-light tracking-[-2px] leading-none text-white mb-10">
          Own a piece of<br />mystical Iceland
        </h1>

        {/* Description - clean and elegant */}
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Claim your souvenir plot at Eyri í Kollafirði in the wild Westfjords — 
          where the Huldufólk roam the mist and Snæfellsjökull watches across the fjord.
        </p>
      </div>
    </div>
  );
}