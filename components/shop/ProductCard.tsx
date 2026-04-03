"use client";
import { useState, useId, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, Minus, Plus, ChevronDown, ChevronUp, ShoppingCart,
} from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/store";
import { Badge } from "@/components/ui/Badge";
import type { PlotProduct, TitleStyle } from "@/types";

function IncludeRow({ icon, label, detail }: { icon: string; label: string; detail?: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-md bg-white/[0.05] border border-white/[0.07] flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
        <span aria-hidden="true">{icon}</span>
      </div>
      <div className="flex-1">
        <span className="font-body text-sm text-white/75">{label}</span>
        {detail && <span className="block font-body text-xs text-white/35 mt-0.5 italic">{detail}</span>}
      </div>
      <Check className="w-3.5 h-3.5 text-spirit flex-shrink-0 mt-1" aria-hidden="true" />
    </li>
  );
}

export function ProductCard({ product, index }: { product: PlotProduct; index: number }) {
  const uid = useId();
  const { addItem, currency } = useCartStore();

  const [titleStyle, setTitleStyle] = useState<TitleStyle>("Baron");
  const [name, setName] = useState("");
  const [giftMessage, setGiftMessage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [plantATree, setPlantATree] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [nameError, setNameError] = useState("");
  const [addedState, setAddedState] = useState<"idle" | "added">("idle");

  useEffect(() => {
    if (addedState === "added") {
      setTimeout(() => {
        setAddedState("idle");
        setName("");
        setGiftMessage("");
        setQuantity(1);
        setPlantATree(false);
        setShowMsg(false);
      }, 3000);
    }
  }, [addedState]);

  const plantAddon = product.addOns?.find((a) => a.id === "plant-a-tree") ?? null;
  const showPlant = product.deliveryType === "physical" && plantAddon !== null;
  const SHOW_N = 5;
  const rows = showAll ? product.includes : product.includes.slice(0, SHOW_N);

  const extraPrice = showPlant && plantATree && plantAddon ? plantAddon.prices[currency] : 0;
  const lineTotal = product.prices[currency] * quantity + extraPrice;

  function handleAdd() {
    if (!name.trim()) {
      setNameError("Please enter the name for the certificate.");
      return;
    }
    setNameError("");

    addItem({
      productId: product.id,
      productName: product.titleName,
      plotSize: product.size,
      price: product.prices[currency],
      currency,
      titleStyle,
      recipientName: name.trim(),
      giftMessage: giftMessage.trim() || undefined,
      quantity,
      addOns:
        showPlant && plantATree && plantAddon
          ? [{ addOnId: plantAddon.id, name: plantAddon.name, price: plantAddon.prices[currency] }]
          : [],
      deliveryType: product.deliveryType,
    });

    setAddedState("added");
  }

  return (
    <motion.article
      id={product.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${product.titleName} — ${formatPrice(product.prices[currency], currency)}`}
      className={cn(
        "relative flex flex-col glass-card transition-all duration-300",
        product.bestSeller
          ? "border-glacier/30 shadow-glacier ring-1 ring-glacier/10"
          : product.featured ? "border-glacier/20" : "hover:border-white/12"
      )}
    >
      {product.bestSeller && (
        <div className="absolute -top-px left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-glacier to-transparent rounded-full" aria-hidden="true" />
      )}

      {/* Header */}
      <div className="p-6 pb-0">
        <div className="flex flex-wrap gap-2 mb-4 min-h-[26px]">
          {product.bestSeller && <Badge variant="bestseller">✦ Best Seller</Badge>}
          {product.featured && !product.bestSeller && <Badge variant="featured">Most Popular</Badge>}
          <Badge variant={product.deliveryType === "digital" ? "neutral" : "glacier"}>
            {product.deliveryType === "digital" ? "Digital delivery" : "Physical gift box"}
          </Badge>
        </div>
        <p className="eyebrow mb-2">{product.sqft} sq ft souvenir plot</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-1">{product.titleName}</h2>
        <p className="font-body text-sm text-white/45 italic mb-4">{product.tagline}</p>
        <div className="flex items-baseline gap-3 mb-2">
          <span className="font-display text-5xl font-light text-glacier leading-none">
            {formatPrice(product.prices[currency], currency)}
          </span>
          {quantity > 1 && (
            <span className="font-body text-sm text-white/40">
              × {quantity} = {formatPrice(lineTotal, currency)}
            </span>
          )}
        </div>
        <p className="font-body text-xs text-white/35 mb-6">
          One-time payment · Free worldwide shipping · 90-day guarantee
        </p>
        <p className="font-body text-sm text-white/55 leading-relaxed mb-6 border-t border-white/[0.06] pt-5">
          {product.description}
        </p>
      </div>

      {/* Includes */}
      <div className="px-6 pb-6">
        <p className="font-body text-xs text-white/35 uppercase tracking-[0.14em] mb-3">What's included</p>
        <ul className="space-y-3 mb-3">
          {rows.map((inc) => <IncludeRow key={inc.label} icon={inc.icon} label={inc.label} detail={inc.detail} />)}
        </ul>
        {product.includes.length > SHOW_N && (
          <button type="button" onClick={() => setShowAll((v) => !v)}
            className="flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-glacier transition-colors mt-1">
            {showAll
              ? <><ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />Show less</>
              : <><ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />+ {product.includes.length - SHOW_N} more inclusions</>}
          </button>
        )}
      </div>

      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Form */}
      <div className="p-6 space-y-5 flex-1">
        {/* Title style */}
        <div>
          <p id={`${uid}-ts`} className="font-body text-xs text-white/45 mb-2">Title style</p>
          <div role="group" aria-labelledby={`${uid}-ts`}
            className="grid grid-cols-3 rounded-xl overflow-hidden border border-white/10">
            {(["Jarl", "Baron", "Baroness"] as TitleStyle[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setTitleStyle(s)}
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-all",
                  titleStyle === s
                    ? "bg-glacier text-ice-black font-semibold"
                    : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <label htmlFor={`${uid}-name`} className="block font-body text-xs text-white/45 mb-2">
            Name on certificate <span className="text-spirit/70">*</span>
          </label>
          <input id={`${uid}-name`} type="text" value={name}
            onChange={(e) => { setName(e.target.value); setNameError(""); }}
            placeholder={`e.g. ${titleStyle} Emma Jónsdóttir`}
            maxLength={60} autoComplete="name"
            aria-required="true" aria-invalid={!!nameError}
            className={cn(
              "w-full bg-white/[0.05] border rounded-xl px-4 py-3 font-body text-sm text-white placeholder-white/22",
              "transition-all duration-150 focus:outline-none focus:ring-1",
              nameError
                ? "border-red-500/50 focus:ring-red-400/30"
                : "border-white/[0.1] focus:border-glacier/50 focus:ring-glacier/20"
            )}
          />
          {nameError && (
            <p role="alert" className="font-body text-xs text-red-400 mt-1.5">{nameError}</p>
          )}
        </div>

        {/* Gift message */}
        <div>
          <button type="button" onClick={() => setShowMsg((v) => !v)} aria-expanded={showMsg}
            className="flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-white/70 transition-colors">
            {showMsg
              ? <><ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />Remove gift message</>
              : <><ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />+ Add a gift message (optional)</>}
          </button>
          <AnimatePresence>
            {showMsg && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                <div className="pt-3">
                  <label htmlFor={`${uid}-msg`} className="sr-only">Gift message</label>
                  <textarea id={`${uid}-msg`} value={giftMessage} onChange={(e) => setGiftMessage(e.target.value)}
                    placeholder="Write a personal message…" rows={3} maxLength={200}
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 font-body text-sm text-white placeholder-white/22 resize-none focus:outline-none focus:border-glacier/50 focus:ring-1 focus:ring-glacier/20" />
                  <p className="font-body text-[10px] text-white/25 mt-1 text-right">{giftMessage.length}/200</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quantity */}
        <div>
          <p className="font-body text-xs text-white/45 mb-2">Quantity</p>
          <div className="flex items-center rounded-xl border border-white/10 overflow-hidden w-fit">
            <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} disabled={quantity <= 1}
              aria-label="Decrease quantity"
              className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/8 transition-all border-r border-white/10 disabled:opacity-30 disabled:cursor-not-allowed">
              <Minus className="w-4 h-4" aria-hidden="true" />
            </button>
            <span className="w-12 text-center font-display font-semibold text-white text-sm" aria-live="polite">
              {quantity}
            </span>
            <button type="button" onClick={() => setQuantity((q) => Math.min(10, q + 1))} disabled={quantity >= 10}
              aria-label="Increase quantity"
              className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/8 transition-all border-l border-white/10 disabled:opacity-30 disabled:cursor-not-allowed">
              <Plus className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Plant a Tree */}
        {showPlant && plantAddon && (
          <div>
            <p className="font-body text-xs text-white/35 uppercase tracking-[0.14em] mb-2">
              Optional add-on
            </p>
            <label
              htmlFor={`${uid}-plant`}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-4 cursor-pointer select-none",
                "transition-all duration-200",
                plantATree
                  ? "border-spirit/40 bg-spirit/6"
                  : "border-white/10 hover:border-spirit/25 hover:bg-spirit/[0.03]"
              )}
            >
              <div className="relative w-5 h-5 flex-shrink-0 mt-0.5">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-0 rounded-md border-2 flex items-center justify-center transition-all duration-150 pointer-events-none",
                    plantATree ? "bg-spirit border-spirit" : "border-white/30"
                  )}
                >
                  {plantATree && <Check className="w-3 h-3 text-ice-black" />}
                </span>
                <input
                  id={`${uid}-plant`}
                  type="checkbox"
                  checked={plantATree}
                  onChange={(e) => setPlantATree(e.target.checked)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer m-0 p-0"
                  aria-label={`Add ${plantAddon.name} for ${formatPrice(plantAddon.prices[currency], currency)}`}
                />
              </div>
              <div className="flex-1 min-w-0 pointer-events-none">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-base" aria-hidden="true">{plantAddon.icon}</span>
                  <span className="font-display font-semibold text-sm text-white">{plantAddon.name}</span>
                  <span className={cn(
                    "font-body text-xs font-semibold px-2 py-0.5 rounded-full",
                    plantATree ? "bg-spirit/20 text-spirit" : "bg-white/8 text-white/50"
                  )}>
                    + {formatPrice(plantAddon.prices[currency], currency)}
                  </span>
                </div>
                <p className="font-body text-xs text-white/45 mt-1.5 leading-relaxed">
                  {plantAddon.description}
                </p>
              </div>
            </label>
          </div>
        )}

        {/* Live total */}
        {(quantity > 1 || plantATree) && (
          <div className="flex items-center justify-between pt-1 pb-1 border-t border-white/[0.06]">
            <span className="font-body text-sm text-white/45">Order total</span>
            <span className="font-display text-xl font-semibold text-glacier">
              {formatPrice(lineTotal, currency)}
            </span>
          </div>
        )}

        {/* Add to cart */}
        <div className="pt-1">
          <AnimatePresence mode="wait">
            {addedState === "added" ? (
              <motion.div key="added" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-spirit/15 border border-spirit/30">
                <Check className="w-5 h-5 text-spirit" aria-hidden="true" />
                <span className="font-display font-semibold text-spirit">Added to cart!</span>
              </motion.div>
            ) : (
              <motion.button key="add" type="button" onClick={handleAdd} whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-display font-semibold text-base",
                  "transition-all duration-200 btn-spirit focus-visible:outline-none",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ice-black focus-visible:ring-glacier",
                  product.bestSeller
                    ? "bg-glacier text-ice-black hover:bg-glacier-light hover:shadow-glacier"
                    : "bg-white/8 text-white border border-white/12 hover:bg-white/14 hover:border-glacier/30"
                )}>
                <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                Add to Cart — {formatPrice(product.prices[currency], currency)}
              </motion.button>
            )}
          </AnimatePresence>
          <p className="text-center font-body text-[11px] text-white/25 mt-2.5">
            Secure checkout · 90-day guarantee · Free shipping
          </p>
        </div>
      </div>

      {product.bestSeller && (
        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-glacier/30 to-transparent" aria-hidden="true" />
      )}
    </motion.article>
  );
}