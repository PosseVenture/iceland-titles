// components/shop/ShopHero.tsx
export function ShopHero() {
  return (
    <div className="bg-[#0a0f1a] pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
          <span>Home</span>
          <span>›</span>
          <span className="text-white">Buy a Plot</span>
        </div>

        {/* Location tag */}
        <div className="mb-6 inline-flex px-6 py-2 border border-white/20 rounded-full text-sm tracking-widest text-white/75">
          EYRI Í KOLLAFIRÐI • VESTFIRÐIR
        </div>

        {/* Big headline - matching The Land style */}
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