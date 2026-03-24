"use client";
// ─────────────────────────────────────────────────────────────────────────────
// CartDrawer — Icelandic Titles
// Aurora + elf-rock themed slide-in cart
// Full accessibility: focus trap, ESC close, aria-live counts
// Elf empty state · spirit sparkles · glacier CTA
// ─────────────────────────────────────────────────────────────────────────────
import { useEffect, useRef }       from "react";
import Link                        from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, ShoppingCart, Trash2, ShoppingBag, ArrowRight,
  Minus, Plus, Leaf, Package, Shield, Lock,
} from "lucide-react";
import { cn, formatPrice }         from "@/lib/utils";
import { useCartStore }            from "@/lib/store";
import type { CartItem }           from "@/types";

// ─── Decorative elf-spirit sparkle ───────────────────────────────────────────
function ElfSparkle({ style }: { style?: React.CSSProperties }) {
  return (
    <span
      className="absolute text-spirit/40 text-xs pointer-events-none select-none animate-twinkle"
      aria-hidden="true"
      style={style}
    >
      ✦
    </span>
  );
}

// ─── Cart item row ────────────────────────────────────────────────────────────
function CartItemRow({ item }: { item: CartItem }) {
  const { removeItem, updateQuantity, currency } = useCartStore();

  const lineTotal =
    item.price * item.quantity +
    item.addOns.reduce((s, a) => s + a.price, 0);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0  }}
      exit={{ opacity: 0, x: 40, height: 0, paddingTop: 0, paddingBottom: 0, marginBottom: 0 }}
      transition={{ duration: 0.25, ease: [0.32, 0, 0.67, 0] }}
      className={cn(
        "flex gap-3 p-4 rounded-xl",
        "bg-white/[0.03] border border-white/[0.06]",
        "hover:border-glacier/18 transition-colors duration-200",
        "relative overflow-hidden"
      )}
    >
      {/* Glacier sigil */}
      <div
        className={cn(
          "w-11 h-11 flex-shrink-0 rounded-xl",
          "bg-gradient-to-br from-glacier/15 to-aurora/8",
          "border border-glacier/15",
          "flex items-center justify-center text-xl"
        )}
        aria-hidden="true"
      >
        ❄
      </div>

      {/* Item details */}
      <div className="flex-1 min-w-0">
        <p className="font-display text-sm font-semibold text-white/90 leading-snug truncate">
          {item.productName}
        </p>
        <p className="font-body text-xs text-white/40 mt-0.5 truncate">
          {item.titleStyle} {item.recipientName}
        </p>

        {/* Add-ons */}
        {item.addOns.length > 0 && (
          <ul className="mt-1.5 space-y-0.5">
            {item.addOns.map((ao) => (
              <li key={ao.addOnId} className="flex items-center gap-1.5">
                <Leaf className="w-3 h-3 text-spirit/50 flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-[11px] text-spirit/65">{ao.name}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Quantity controls */}
        <div className="flex items-center gap-2 mt-2.5">
          <div
            className="flex items-center gap-0 rounded-lg border border-white/10 overflow-hidden"
            role="group"
            aria-label={`Quantity for ${item.productName}`}
          >
            <button
              type="button"
              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
              aria-label={`Decrease quantity of ${item.productName}`}
              className="w-7 h-7 flex items-center justify-center text-white/35 hover:text-white hover:bg-white/8 transition-all border-r border-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-glacier"
            >
              <Minus className="w-3 h-3" aria-hidden="true" />
            </button>
            <span
              className="w-8 text-center font-display text-sm text-white"
              aria-live="polite"
              aria-atomic="true"
            >
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
              aria-label={`Increase quantity of ${item.productName}`}
              disabled={item.quantity >= 10}
              className="w-7 h-7 flex items-center justify-center text-white/35 hover:text-white hover:bg-white/8 transition-all border-l border-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-glacier disabled:opacity-30"
            >
              <Plus className="w-3 h-3" aria-hidden="true" />
            </button>
          </div>

          {/* Delivery badge */}
          <span className={cn(
            "font-body text-[10px] px-2 py-0.5 rounded-full border",
            item.deliveryType === "digital"
              ? "text-white/35 border-white/10"
              : "text-glacier/60 border-glacier/15"
          )}>
            {item.deliveryType === "digital" ? "Digital" : "Posted"}
          </span>
        </div>
      </div>

      {/* Price + remove */}
      <div className="flex flex-col items-end justify-between flex-shrink-0">
        <button
          type="button"
          onClick={() => removeItem(item.cartItemId)}
          aria-label={`Remove ${item.productName} from cart`}
          className="text-white/20 hover:text-red-400 transition-colors p-1 rounded"
        >
          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
        <span className="font-display text-base font-semibold text-glacier">
          {formatPrice(lineTotal, currency)}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Empty cart state ─────────────────────────────────────────────────────────
function EmptyCart({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center relative">
      {/* Elf sparkles */}
      <ElfSparkle style={{ top: "15%", left: "18%",  animationDelay: "0s"   }} />
      <ElfSparkle style={{ top: "25%", right: "15%", animationDelay: "1.1s" }} />
      <ElfSparkle style={{ bottom: "30%", left: "25%", animationDelay: "0.6s" }} />

      {/* Lava-rock elf motif */}
      <div className="relative mb-6" aria-hidden="true">
        <div className="w-24 h-24 rounded-[40%_60%_55%_45%_/_50%_45%_55%_50%] bg-white/[0.03] border border-white/[0.07] flex items-center justify-center">
          <ShoppingCart className="w-8 h-8 text-white/15" />
        </div>
        {/* Spirit spark */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-spirit/10 rounded-full border border-spirit/20 flex items-center justify-center">
          <span className="text-spirit/60 text-sm animate-spirit-pulse">✦</span>
        </div>
      </div>

      <p className="font-display text-xl italic text-white/55 mb-2">
        Your cart awaits, wanderer
      </p>
      <p className="font-body text-sm text-white/30 mb-8 leading-relaxed max-w-[220px]">
        The glacier calls. Claim your souvenir plot of Snæfellsnes and join 18,240 Jarls.
      </p>

      <Link
        href="/buy-a-plot"
        onClick={onClose}
        className={cn(
          "inline-flex items-center gap-2",
          "px-6 py-3 rounded-xl",
          "bg-glacier text-ice-black",
          "font-display font-semibold text-sm",
          "hover:bg-glacier-light hover:shadow-glacier",
          "transition-all duration-200 btn-spirit"
        )}
      >
        <ShoppingBag className="w-4 h-4" aria-hidden="true" />
        Browse Souvenir Plots
      </Link>
    </div>
  );
}

// ─── Order summary section ────────────────────────────────────────────────────
function OrderSummary() {
  const { items, currency, subtotal } = useCartStore();
  const total = subtotal();

  const hasPhysical = items.some((i) => i.deliveryType === "physical");
  const hasDigital  = items.some((i) => i.deliveryType === "digital");

  return (
    <div className="space-y-3 px-5 pt-4 pb-2 border-t border-white/[0.07]">
      {/* Shipping info */}
      <div className="flex items-center justify-between text-xs font-body">
        <div className="flex items-center gap-1.5 text-white/40">
          <Package className="w-3.5 h-3.5" aria-hidden="true" />
          Shipping
        </div>
        <span className="text-spirit font-semibold">Free</span>
      </div>

      {hasPhysical && (
        <p className="font-body text-[11px] text-white/25 italic">
          Physical pack dispatched from Reykjavík in 2–3 days
        </p>
      )}
      {hasDigital && (
        <p className="font-body text-[11px] text-white/25 italic">
          Digital certificate delivered by email within minutes
        </p>
      )}

      {/* Total */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
        <span className="font-body text-sm font-semibold text-white/70">Order total</span>
        <span className="font-display text-2xl font-light text-glacier">
          {formatPrice(total, currency)}
        </span>
      </div>
    </div>
  );
}

// ─── Main CartDrawer ──────────────────────────────────────────────────────────
export function CartDrawer() {
  const { items, isOpen, closeCart, itemCount } = useCartStore();
  const closeRef  = useRef<HTMLButtonElement>(null);
  const panelRef  = useRef<HTMLDivElement>(null);
  const count     = itemCount();

  // ESC key
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  // Body scroll lock + focus management
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => closeRef.current?.focus(), 60);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ──────────────────────────────────────── */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="cart-overlay"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* ── Drawer panel ──────────────────────────────────── */}
          <motion.div
            key="cart-panel"
            ref={panelRef}
            initial={{ x: "100%"  }}
            animate={{ x: 0       }}
            exit={{    x: "100%"  }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="cart-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* ── Decorative aurora at top ─────────────────────── */}
            <div
              className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(168,216,234,0.07) 0%, transparent 70%)",
              }}
            />

            {/* ── Header ──────────────────────────────────────── */}
            <div className="relative flex items-center justify-between px-5 py-4 border-b border-white/[0.07] flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <ShoppingCart
                  className={cn("w-[18px] h-[18px]", count > 0 ? "text-glacier" : "text-white/40")}
                  aria-hidden="true"
                />
                <h2 className="font-display text-base font-semibold text-white">
                  Your Cart
                </h2>
                <AnimatePresence mode="wait">
                  {count > 0 && (
                    <motion.span
                      key={count}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{    scale: 0 }}
                      transition={{ type: "spring", damping: 14, stiffness: 300 }}
                      className="bg-glacier/15 text-glacier border border-glacier/25 font-body text-xs font-semibold px-2 py-0.5 rounded-full"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {count} item{count !== 1 ? "s" : ""}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier"
              >
                <X className="w-[18px] h-[18px]" aria-hidden="true" />
              </button>
            </div>

            {/* ── Items list ───────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
              {count === 0 ? (
                <EmptyCart onClose={closeCart} />
              ) : (
                <AnimatePresence mode="popLayout" initial={false}>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <CartItemRow key={item.cartItemId} item={item} />
                    ))}
                  </div>
                </AnimatePresence>
              )}
            </div>

            {/* ── Order summary + checkout ──────────────────────── */}
            <AnimatePresence>
              {count > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0  }}
                  exit={{    opacity: 0         }}
                  className="flex-shrink-0"
                >
                  <OrderSummary />

                  {/* Trust row */}
                  <div className="flex items-center justify-center gap-4 px-5 py-2">
                    <div className="flex items-center gap-1 text-white/25">
                      <Shield className="w-3 h-3" aria-hidden="true" />
                      <span className="font-body text-[11px]">90-day guarantee</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/25">
                      <Lock className="w-3 h-3" aria-hidden="true" />
                      <span className="font-body text-[11px]">Secure checkout</span>
                    </div>
                  </div>

                  {/* Checkout button */}
                  <div className="px-5 pb-6 space-y-2.5">
                    <Link
                      href="/checkout"
                      onClick={closeCart}
                      className={cn(
                        "flex items-center justify-center gap-2.5 w-full",
                        "py-4 px-6 rounded-xl",
                        "bg-glacier text-ice-black",
                        "font-display font-semibold text-base",
                        "hover:bg-glacier-light hover:shadow-glacier",
                        "transition-all duration-200 btn-spirit",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier focus-visible:ring-offset-2 focus-visible:ring-offset-ice-deep"
                      )}
                    >
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>

                    <Link
                      href="/buy-a-plot"
                      onClick={closeCart}
                      className={cn(
                        "flex items-center justify-center w-full",
                        "py-2.5 px-6 rounded-xl",
                        "font-body text-sm text-white/45 hover:text-white/70",
                        "border border-transparent hover:border-white/10",
                        "transition-all duration-150"
                      )}
                    >
                      Continue shopping
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Aurora + elf decorative glow ─────────────────── */}
            <div
              className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at bottom, rgba(57,232,160,0.04) 0%, transparent 70%)",
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
