// components/shop/ShopHero.tsx
export function ShopHero() {
  return (
    <div className="bg-ice-black pt-24 pb-12 text-center border-b border-white/10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-6 inline-flex px-5 py-2 border border-white/20 rounded-full text-sm tracking-[1px]">
          EYRI Í KOLLAFIRÐI • VESTFIRÐIR
        </div>

        <h1 className="font-display text-6xl md:text-7xl font-light tracking-[-2px] text-white">
          Own a piece of mystical Iceland
        </h1>

        <p className="mt-8 text-lg text-white/80 max-w-xl mx-auto">
          Claim your souvenir plot at Eyri í Kollafirði in the wild Westfjords — 
          where the Huldufólk roam and Snæfellsjökull watches across the fjord.
        </p>
      </div>
    </div>
  );
}