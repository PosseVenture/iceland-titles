// components/shop/ShopHero.tsx
export function ShopHero() {
  return (
    <div className="relative pt-20 pb-16 bg-ice-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 border border-white/20 rounded-full text-sm tracking-widest">
          EYRI Í KOLLAFIRÐI • VESTFIRÐIR
        </div>

        <h1 className="font-display text-6xl md:text-7xl font-light tracking-tighter text-white mb-8">
          Own a piece of<br />mystical Iceland
        </h1>

        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Claim your souvenir plot at Eyri í Kollafirði in the wild Westfjords — 
          where the Huldufólk roam the mist and Snæfellsjökull watches across the fjord.
        </p>
      </div>
    </div>
  );
}