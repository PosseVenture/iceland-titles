// components/shop/ShopHero.tsx
export function ShopHero() {
  return (
    <div className="bg-ice-black pt-24 pb-16 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-6 inline-flex px-6 py-2 border border-white/20 rounded-full text-sm tracking-widest">
          EYRI Í KOLLAFIRÐI • VESTFIRÐIR
        </div>

        <h1 className="font-display text-6xl md:text-7xl font-light tracking-tight text-white mb-6">
          Own a piece of mystical Iceland
        </h1>

        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Claim your souvenir plot at Eyri í Kollafirði in the wild Westfjords — 
          where the Huldufólk roam the mist and Snæfellsjökull watches across the fjord.
        </p>
      </div>
    </div>
  );
}