"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ShoppingCart, ChevronRight, Sparkles } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/store";
import { PLOT_PRODUCTS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-wrapper";
import type { ReserveSlug } from "@/types";

// ─── Gift pack comparison table ───────────────────────────────────────────────
const COMPARISON_ROWS = [
  { feature: "Personalised souvenir certificate", eco: "PDF only", luxury5: "PDF + A3 print", luxury10: "Collector's edition", bundle: "×2 PDF + A3" },
  { feature: "Noble title (Jarl / Lord / Lady)", eco: "✓", luxury5: "✓", luxury10: "High Jarl ✓", bundle: "✓ × 2" },
  { feature: "GPS coordinates & What3Words", eco: "✓", luxury5: "✓", luxury10: "✓", bundle: "Adjacent plots" },
  { feature: "Volcanic basalt coaster", eco: "—", luxury5: "✓", luxury10: "Premium both sides", bundle: "✓ × 2" },
  { feature: "Iceland reserve map", eco: "—", luxury5: "✓", luxury10: "Large format", bundle: "Shared map" },
  { feature: "'Plant a Tree' bookmark", eco: "✓", luxury5: "✓", luxury10: "✓", bundle: "✓ × 2" },
  { feature: "App access card", eco: "Digital only", luxury5: "Physical card", luxury10: "Physical card", bundle: "✓ × 2" },
  { feature: "Luxury gift box", eco: "—", luxury5: "✓", luxury10: "Collector's box", bundle: "✓ × 2" },
  { feature: "Icelandic wool wristband", eco: "—", luxury5: "—", luxury10: "✓", bundle: "—" },
  { feature: "Dedication register", eco: "—", luxury5: "—", luxury10: "✓ lifetime", bundle: "—" },
  { feature: "Delivery", eco: "Instant download", luxury5: "Digital + Post", luxury10: "Digital + Post", bundle: "Digital + Post" },
] as const;

const COL_STYLES = {
  eco: "text-sky-400/80",
  luxury5: "text-ice-gold-light",
  luxury10: "text-aurora-violet/90",
  bundle: "text-pink-400/90",
};

// ─── Gift pack visual card ────────────────────────────────────────────────────
function PackCard({
  product,
  index,
  inView,
}: {
  product: (typeof PLOT_PRODUCTS)[number];
  index: number;
  inView: boolean;
}) {
  const [justAdded, setJustAdded] = useState(false);
  const { addItem, currency } = useCartStore();

  const handleQuickAdd = () => {
    addItem({
      cartItemId: `${product.id}-thingvellir-${Date.now()}`,
      productId: product.id,
      productName: product.titleName,
      reserve: "thingvellir" as ReserveSlug,
      reserveName: "Thingvellir Reserve",
      size: product.size,
      sqft: product.sqft,
      price: product.prices[currency],
      currency,
      titleStyle: "Lord",
      recipientName: "Your Name",
      addOns: [],
      deliveryType: product.deliveryType,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  };

  const price = product.prices[currency];
  const original = product.originalPrices?.[currency];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1",
        `bg-gradient-to-b ${product.accentColor}`,
        product.borderColor,
        product.featured && "shadow-gold",
        product.bestSeller && "shadow-[0_0_40px_rgba(124,58,237,0.15)]",
      )}
    >
      {product.BadgeText && (
        <div className="absolute -top-3.5 inset-x-0 flex justify-center pointer-events-none">
          <span className={cn(
            "px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-lg",
            product.bestSeller && "bg-aurora-violet text-white",
            product.featured && !product.bestSeller && "bg-ice-gold text-ice-black",
            !product.bestSeller && !product.featured && "bg-pink-500 text-white",
          )}>
            {product.BadgeText}
          </span>
        </div>
      )}

      {/* Icon + title */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 mb-1">{product.tagline}</p>
          <h3 className="font-display text-lg font-bold text-white leading-tight">{product.titleName}</h3>
        </div>
        <div className="text-3xl" aria-hidden="true">
          {product.size === "1sqft" ? "📱" : product.size === "bundle-2person" ? "💑" : "🎁"}
        </div>
      </div>

      {/* Size indicator */}
      {product.sqft && (
        <div className="flex items-baseline gap-1.5 mb-3">
          <span className="font-display text-3xl font-bold text-white">{product.sqft}</span>
          <span className="text-xs text-white/40 uppercase tracking-wider">sq ft</span>
        </div>
      )}

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-4">
        <span className="font-display text-2xl font-bold text-white">{formatPrice(price, currency)}</span>
        {original && <span className="text-sm text-white/30 line-through">{formatPrice(original, currency)}</span>}
      </div>

      {/* Top 4 includes */}
      <ul className="space-y-1.5 mb-5 flex-1">
        {product.includes.slice(0, 4).map((item) => (
          <li key={item.label} className="flex items-center gap-2 text-xs text-white/60">
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </li>
        ))}
        {product.includes.length > 4 && (
          <li className="text-xs text-white/35 italic pl-5">
            +{product.includes.length - 4} more included…
          </li>
        )}
      </ul>

      {/* Actions */}
      <div className="flex gap-2">
        <Link
          href={`/buy-a-plot?reserve=thingvellir`}
          className={cn(
            "flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border transition-all",
            product.featured
              ? "bg-gradient-to-r from-ice-gold to-amber-600 text-ice-black border-transparent hover:shadow-gold"
              : product.bestSeller
                ? "bg-gradient-to-r from-aurora-violet to-purple-600 text-white border-transparent"
                : "bg-white/10 border-white/20 text-white hover:bg-white/15",
          )}
          aria-label={`Customise and buy ${product.titleName}`}
        >
          <Sparkles className="w-3 h-3" aria-hidden="true" />
          Customise & Buy
        </Link>
        <button
          onClick={handleQuickAdd}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
          aria-label={justAdded ? "Added to cart" : `Quick-add ${product.titleName} to cart`}
          title={justAdded ? "Added!" : "Quick add"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {justAdded
              ? <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-aurora-green text-sm">✓</motion.span>
              : <motion.span key="cart" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><ShoppingCart className="w-4 h-4" aria-hidden="true" /></motion.span>
            }
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
}

// ─── GiftPacks Section ────────────────────────────────────────────────────────
export function GiftPacks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [showTable, setShowTable] = useState(false);

  return (
    <section
      id="gift-packs"
      className="section bg-gradient-to-b from-white/[0.02] to-transparent"
      aria-labelledby="gift-packs-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Gift Packs & Bundles"
          title={<>The Perfect Gift for <span className="text-gradient-gold">Every Budget</span></>}
          subtitle="Four ways to own a piece of Iceland — from an instant digital souvenir to a luxury collector's set. Every pack makes a brilliant, unique gift."
          center
          id="gift-packs-heading"
        />

        {/* Pack cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-2"
          role="list"
          aria-label="Icelandic Titles gift pack options"
        >
          {PLOT_PRODUCTS.map((product, i) => (
            <div key={product.id} role="listitem">
              <PackCard product={product} index={i} inView={inView} />
            </div>
          ))}
        </div>

        {/* Comparison table toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setShowTable(!showTable)}
            className="inline-flex items-center gap-2 text-sm text-aurora/70 hover:text-aurora transition-colors"
            aria-expanded={showTable}
            aria-controls="comparison-table"
          >
            <ChevronRight className={cn("w-4 h-4 transition-transform", showTable && "rotate-90")} aria-hidden="true" />
            {showTable ? "Hide" : "Show"} full pack comparison
          </button>
        </motion.div>

        <AnimatePresence>
          {showTable && (
            <motion.div
              id="comparison-table"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden mt-6"
            >
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-x-auto">
                <table
                  className="w-full text-sm min-w-[640px]"
                  aria-label="Full comparison of all four Icelandic Titles gift packs"
                >
                  <thead>
                    <tr className="border-b border-white/[0.07]">
                      <th className="text-left px-5 py-4 text-xs font-bold tracking-widest uppercase text-white/30 w-1/3" scope="col">Feature</th>
                      {[
                        { label: "1 sq ft Eco", style: COL_STYLES.eco },
                        { label: "5 sq ft Luxury", style: COL_STYLES.luxury5 },
                        { label: "10 sq ft Luxury", style: COL_STYLES.luxury10 },
                        { label: "Couples Bundle", style: COL_STYLES.bundle },
                      ].map(({ label, style }) => (
                        <th key={label} className={`px-4 py-4 text-xs font-bold tracking-wide uppercase ${style} text-center`} scope="col">
                          {label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row, i) => (
                      <tr key={row.feature} className={cn("border-b border-white/[0.04] last:border-0", i % 2 === 0 && "bg-white/[0.015]")}>
                        <td className="px-5 py-3.5 text-xs text-white/55 font-medium">{row.feature}</td>
                        {["eco", "luxury5", "luxury10", "bundle"].map((col) => (
                          <td key={col} className={cn(
                            "px-4 py-3.5 text-xs text-center",
                            row[col as keyof typeof row] === "—" ? "text-white/20" : COL_STYLES[col as keyof typeof COL_STYLES]
                          )}>
                            {row[col as keyof typeof row]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <Link
            href="/buy-a-plot"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-sm"
            aria-label="See all plots and customise your order"
          >
            See All Plots & Customise
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <p className="text-xs text-white/25 mt-3">🛡 90-day money-back · Free worldwide shipping · Instant digital delivery</p>
        </motion.div>
      </div>
    </section>
  );
}
