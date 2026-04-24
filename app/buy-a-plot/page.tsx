// app/buy-a-plot/page.tsx
import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/data";
import { ShopHero } from "@/components/shop/ShopHero";
import { ProductCard } from "@/components/shop/ProductCard";
import { GuaranteeBanner } from "@/components/shop/GuaranteeBanner";
import { ComparisonTable } from "@/components/shop/ComparisonTable";
import { ShopFaq } from "@/components/shop/ShopFaq";

export const metadata: Metadata = {
  title: "Buy a Souvenir Plot — Eyri í Kollafirði",
  description: "Become a Jarl, Baron or Baroness of Eyri í Kollafirði in the wild Westfjords.",
};

export default function BuyAPlotPage() {
  return (
    <>
      <ShopHero />

      <main className="bg-ice-black">
        {/* Trust Bar */}
        <div className="border-b border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-white/70">
            <span>🌲 Conservation funded</span>
            <span>📍 GPS + What3Words</span>
            <span>🛡️ 90-day guarantee</span>
            <span>🚚 Free worldwide shipping</span>
          </div>
        </div>

        {/* Products Section - Clean spacing like The Land page */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl tracking-tight text-white">Choose your pack</h2>
            <p className="mt-4 text-white/70 text-lg">Three ways to own a piece of the wild Westfjords</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        <GuaranteeBanner />
        <ComparisonTable />
        <ShopFaq />
      </main>
    </>
  );
}