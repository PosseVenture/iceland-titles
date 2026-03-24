"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Check, ChevronDown, Download, Package, Sparkles, X } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/store";
import { RESERVES } from "@/lib/data";
import type { PlotProduct, TitleStyle, ReserveSlug, Currency } from "@/types";

const TITLES: TitleStyle[] = ["Jarl", "Lord", "Lady"];

interface ProductCardProps {
  product: PlotProduct;
  currency: Currency;
  selectedReserve: ReserveSlug;
  index: number;
}

export function ProductCard({ product, currency, selectedReserve, index }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [title1, setTitle1] = useState<TitleStyle>("Lord");
  const [title2, setTitle2] = useState<TitleStyle>("Lady");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [giftMsg, setGiftMsg] = useState("");
  const [showIncludes, setShowIncludes] = useState(false);
  const [added, setAdded] = useState(false);
  const [errors, setErrors] = useState<{ name1?: string; name2?: string }>({});

  const isBundle = product.size === "bundle-2person";
  const price = product.prices[currency];
  const original = product.originalPrices?.[currency];
  const reserve = RESERVES.find((r) => r.slug === selectedReserve)!;
  const savings = original ? original - price : null;

  const handleAdd = () => {
    const newErrors: { name1?: string; name2?: string } = {};
    if (!name1.trim()) newErrors.name1 = "Required for the certificate";
    if (isBundle && !name2.trim()) newErrors.name2 = "Required for the second certificate";
    if (Object.keys(newErrors).length) { setErrors(newErrors); return; }

    addItem({
      cartItemId: `${product.id}-${selectedReserve}-${Date.now()}`,
      productId: product.id,
      productName: `${product.titleName}`,
      reserve: selectedReserve,
      reserveName: reserve.name,
      size: product.size,
      sqft: product.sqft,
      price,
      currency,
      titleStyle: title1,
      recipientName: name1.trim(),
      giftMessage: giftMsg.trim() || undefined,
      addOns: [],
      deliveryType: product.deliveryType,
      ...(isBundle && { recipient2Name: name2.trim(), titleStyle2: title2 }),
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2800);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex flex-col rounded-2xl border transition-colors duration-300",
        `bg-gradient-to-b ${product.accentColor}`,
        product.borderColor,
        product.bestSeller && "shadow-[0_0_50px_rgba(124,58,237,0.18)]",
        product.featured && "shadow-gold"
      )}
      aria-label={`${product.titleName} – ${product.tagline}`}
    >
      {/* Badge */}
      {product.BadgeText && (
        <div className="absolute -top-3.5 inset-x-0 flex justify-center pointer-events-none" aria-label={product.BadgeText}>
          <span className={cn(
            "px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-lg",
            product.bestSeller && "bg-aurora-violet text-white",
            product.featured && !product.bestSeller && "bg-ice-gold text-ice-black",
            !product.bestSeller && !product.featured && "bg-pink-500 text-white"
          )}>
            {product.BadgeText}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-5 p-6 flex-1">

        {/* ── Header ── */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            {/* Delivery type pill */}
            <span className={cn(
              "inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg mb-2",
              product.deliveryType === "digital" && "bg-sky-500/15 text-sky-400",
              product.deliveryType === "both" && "bg-ice-gold/12 text-ice-gold-light",
            )}>
              {product.deliveryType === "digital" ? <Download className="w-2.5 h-2.5" /> : <Sparkles className="w-2.5 h-2.5" />}
              {product.tagline}
            </span>
            <h3 className="font-display text-xl font-bold text-white leading-tight">{product.titleName}</h3>
            <p className="text-xs text-white/45 mt-1 leading-relaxed">{product.subtitle}</p>
          </div>

          {/* Size chip */}
          <div className="flex-shrink-0 w-[52px] h-[52px] rounded-xl bg-white/[0.07] border border-white/10 flex flex-col items-center justify-center">
            {product.sqft ? (
              <>
                <span className="font-display text-xl font-bold text-white leading-none">{product.sqft}</span>
                <span className="text-[8px] text-white/40 uppercase tracking-wider mt-0.5">sq ft</span>
              </>
            ) : (
              <span className="text-2xl" aria-label="couples bundle">💑</span>
            )}
          </div>
        </div>

        {/* ── Price ── */}
        <div>
          <div className="flex items-baseline gap-2.5">
            <span className="font-display text-[2rem] font-bold text-white leading-none">{formatPrice(price, currency)}</span>
            {original && <span className="text-sm text-white/30 line-through">{formatPrice(original, currency)}</span>}
            {savings && <span className="text-xs font-bold text-aurora-green">Save {formatPrice(savings, currency)}</span>}
          </div>
          <p className="text-xs text-white/35 mt-1">One-time payment · Free worldwide shipping</p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className={cn("flex items-center gap-1 text-[11px] font-semibold",
              product.deliveryType === "digital" ? "text-sky-400/80" : "text-aurora-green/80"
            )}>
              {product.deliveryType === "digital" ? <Download className="w-3 h-3" /> : <Package className="w-3 h-3" />}
              {product.deliveryType === "digital" ? "Instant digital delivery" : "Digital + Physical post"}
            </span>
          </div>
        </div>

        <div className="h-px bg-white/[0.07]" aria-hidden="true" />

        {/* ── Title selector – Person 1 ── */}
        <fieldset>
          <legend className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">
            {isBundle ? "Person 1 — Choose title" : "Choose your title"}
          </legend>
          <div className="flex gap-2" role="group">
            {TITLES.map((t) => (
              <button
                key={t}
                onClick={() => setTitle1(t)}
                aria-pressed={title1 === t}
                className={cn(
                  "flex-1 py-2 rounded-lg text-sm font-semibold border transition-all",
                  title1 === t
                    ? "bg-white/15 border-white/40 text-white"
                    : "border-white/10 text-white/40 hover:text-white/70 hover:border-white/22"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>

        {/* ── Recipient name – Person 1 ── */}
        <div>
          <label htmlFor={`n1-${product.id}`} className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1.5">
            {isBundle ? "Person 1 name" : "Recipient name"} <span className="text-red-400 normal-case tracking-normal text-xs font-normal">*</span>
          </label>
          <input
            id={`n1-${product.id}`}
            type="text"
            value={name1}
            maxLength={60}
            placeholder={`e.g. ${title1} ${isBundle ? "Sigrid Arnarsdóttir" : "James Morrison"}`}
            onChange={(e) => { setName1(e.target.value); if (errors.name1) setErrors(p => ({ ...p, name1: undefined })); }}
            className={cn(
              "w-full bg-white/[0.06] border rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-all",
              errors.name1 ? "border-red-500/60 focus:ring-red-500/30" : "border-white/10 focus:border-aurora/50 focus:ring-aurora/20"
            )}
            aria-required="true"
            aria-describedby={errors.name1 ? `n1-err-${product.id}` : undefined}
          />
          {errors.name1 && <p id={`n1-err-${product.id}`} role="alert" className="text-xs text-red-400 mt-1">{errors.name1}</p>}
        </div>

        {/* ── Bundle: Person 2 ── */}
        {isBundle && (
          <>
            <fieldset>
              <legend className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">
                Person 2 — Choose title
              </legend>
              <div className="flex gap-2" role="group">
                {TITLES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTitle2(t)}
                    aria-pressed={title2 === t}
                    className={cn(
                      "flex-1 py-2 rounded-lg text-sm font-semibold border transition-all",
                      title2 === t
                        ? "bg-white/15 border-white/40 text-white"
                        : "border-white/10 text-white/40 hover:text-white/70 hover:border-white/22"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor={`n2-${product.id}`} className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1.5">
                Person 2 name <span className="text-red-400 normal-case tracking-normal text-xs font-normal">*</span>
              </label>
              <input
                id={`n2-${product.id}`}
                type="text"
                value={name2}
                maxLength={60}
                placeholder={`e.g. ${title2} Isabella Reyes`}
                onChange={(e) => { setName2(e.target.value); if (errors.name2) setErrors(p => ({ ...p, name2: undefined })); }}
                className={cn(
                  "w-full bg-white/[0.06] border rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-all",
                  errors.name2 ? "border-red-500/60 focus:ring-red-500/30" : "border-white/10 focus:border-aurora/50 focus:ring-aurora/20"
                )}
                aria-required="true"
              />
              {errors.name2 && <p role="alert" className="text-xs text-red-400 mt-1">{errors.name2}</p>}
            </div>
          </>
        )}

        {/* ── Gift message ── */}
        <div>
          <label htmlFor={`msg-${product.id}`} className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1.5">
            Gift message <span className="text-white/20 font-normal normal-case tracking-normal text-xs">(optional)</span>
          </label>
          <textarea
            id={`msg-${product.id}`}
            rows={2}
            maxLength={200}
            value={giftMsg}
            onChange={(e) => setGiftMsg(e.target.value)}
            placeholder="Add a personal message for the gift pack…"
            className="w-full bg-white/[0.06] border border-white/10 focus:border-aurora/50 focus:ring-1 focus:ring-aurora/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none resize-none transition-all"
          />
          <p className="text-right text-[10px] text-white/20 mt-0.5">{giftMsg.length}/200</p>
        </div>

        {/* ── Includes accordion ── */}
        <div className="border border-white/[0.07] rounded-xl overflow-hidden">
          <button
            onClick={() => setShowIncludes(!showIncludes)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.04] transition-all"
            aria-expanded={showIncludes}
            aria-controls={`inc-${product.id}`}
          >
            <span>What&apos;s included <span className="text-white/30 font-normal">({product.includes.length} items)</span></span>
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-200 flex-shrink-0", showIncludes && "rotate-180")} aria-hidden="true" />
          </button>

          <AnimatePresence>
            {showIncludes && (
              <motion.div
                id={`inc-${product.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden"
              >
                <ul className="px-4 pb-4 pt-3 space-y-2.5 border-t border-white/[0.05]">
                  {product.includes.map((item) => (
                    <li key={item.label} className="flex items-start gap-2.5 text-xs">
                      <span className="flex-shrink-0 mt-0.5" aria-hidden="true">{item.icon}</span>
                      <div>
                        <span className="font-semibold text-white/80">{item.label}</span>
                        {item.description && <p className="text-white/35 mt-0.5 text-[11px]">{item.description}</p>}
                      </div>
                    </li>
                  ))}
                  {product.notIncludes && (
                    <li className="pt-2 border-t border-white/[0.05] text-[11px] text-white/25 italic">
                      Not included: {product.notIncludes.join(", ")}
                    </li>
                  )}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Add to cart ── */}
        <div className="mt-auto pt-1">
          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-sm transition-all duration-250",
              added
                ? "bg-aurora-green text-white"
                : product.featured
                  ? "bg-gradient-to-r from-ice-gold to-amber-600 text-ice-black hover:shadow-gold hover:-translate-y-0.5"
                  : product.bestSeller
                    ? "bg-gradient-to-r from-aurora-violet to-purple-600 text-white hover:shadow-[0_4px_24px_rgba(124,58,237,0.45)] hover:-translate-y-0.5"
                    : isBundle
                      ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-[0_4px_20px_rgba(236,72,153,0.35)] hover:-translate-y-0.5"
                      : "bg-white/10 border border-white/20 text-white hover:bg-white/[0.14] hover:-translate-y-0.5"
            )}
            aria-label={added ? "Added to cart!" : `Add ${product.titleName} to cart – ${formatPrice(price, currency)}`}
            aria-live="polite"
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span key="done" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <Check className="w-4 h-4" aria-hidden="true" /> Added to Cart!
                </motion.span>
              ) : (
                <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                  Add to Cart · {formatPrice(price, currency)}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          <p className="text-center text-[11px] text-white/25 mt-2">🛡 90-day money-back guarantee</p>
        </div>

      </div>
    </motion.article>
  );
}
