"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Trash2, ArrowRight, Shield, Globe, Package, Sparkles, Lock } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

/* ─── Iceland aurora SVG illustration ───────────────────────────────────────── */
function AuroraScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
      {/* Sky */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#030b1a" />
          <stop offset="100%" stopColor="#071628" />
        </linearGradient>
        <linearGradient id="aurora1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
          <stop offset="40%" stopColor="#00D4FF" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#7C3AED" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="aurora2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
          <stop offset="50%" stopColor="#10B981" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mtn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1a30" />
          <stop offset="100%" stopColor="#04090f" />
        </linearGradient>
      </defs>
      <rect width="300" height="130" fill="url(#sky)" />
      {/* Stars */}
      {[[15,10],[45,6],[78,14],[115,4],[152,9],[188,5],[222,13],[258,7],[285,11],[30,25],[96,20],[175,22],[240,18]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={i%3===0?1:0.7} fill="white" opacity={0.4+Math.sin(i)*0.3} />
      ))}
      {/* Aurora curtains */}
      <path d="M0 38 Q75 18 150 32 Q225 46 300 26 L300 52 Q225 68 150 54 Q75 40 0 58 Z" fill="url(#aurora1)" opacity="0.7" />
      <path d="M0 48 Q80 28 160 44 Q240 58 300 38 L300 58 Q240 74 160 60 Q80 46 0 64 Z" fill="url(#aurora2)" opacity="0.6" />
      <path d="M0 58 Q90 40 170 56 Q255 70 300 50 L300 66 Q255 82 170 68 Q90 54 0 72 Z" fill="url(#aurora1)" opacity="0.4" />
      {/* Mountain silhouettes */}
      <path d="M0 105 L30 72 L55 88 L90 58 L125 80 L155 50 L188 74 L218 60 L250 78 L275 65 L300 75 L300 130 L0 130 Z" fill="url(#mtn)" />
      {/* Snow caps */}
      <path d="M90 58 L103 74 L77 74 Z" fill="white" opacity="0.65" />
      <path d="M155 50 L170 68 L140 68 Z" fill="white" opacity="0.7" />
      <path d="M218 60 L229 73 L207 73 Z" fill="white" opacity="0.6" />
      {/* Reflection lake */}
      <ellipse cx="150" cy="122" rx="75" ry="5" fill="#001828" opacity="0.6" />
      <path d="M90 124 Q150 119 210 124" stroke="#00D4FF" strokeWidth="0.6" fill="none" opacity="0.3" />
      {/* Foreground ground */}
      <path d="M0 118 Q150 112 300 118 L300 130 L0 130 Z" fill="#030912" />
    </svg>
  );
}

/* ─── CartDrawer ─────────────────────────────────────────────────────────────── */
export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, currency, subtotal } = useCartStore();
  const total = subtotal();
  const isEmpty = items.length === 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-[2px]"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300, mass: 0.9 }}
            className="fixed top-0 right-0 bottom-0 z-[70] flex flex-col w-full max-w-[420px] bg-[#060e1b] border-l border-white/[0.06] shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* ── Top bar ── */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07] flex-shrink-0">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4.5 h-4.5 text-aurora" aria-hidden="true" />
                <h2 className="font-display text-base font-bold text-white tracking-wide">Your Cart</h2>
                <AnimatePresence>
                  {items.length > 0 && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="ml-0.5 bg-aurora text-ice-black text-[11px] font-extrabold w-5 h-5 rounded-full inline-flex items-center justify-center"
                      aria-label={`${items.length} item${items.length > 1 ? "s" : ""} in cart`}
                    >
                      {items.length}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <button
                onClick={closeCart}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-all"
                aria-label="Close cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Body ── */}
            {isEmpty ? (
              /* Empty state */
              <div className="flex flex-col flex-1 overflow-hidden">
                <AuroraScene className="w-full h-36 flex-shrink-0" />
                <div className="flex-1 flex flex-col items-center justify-center text-center px-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aurora/15 to-aurora-violet/15 border border-aurora/20 flex items-center justify-center mb-4" aria-hidden="true">
                    <span className="text-3xl">❄</span>
                  </div>
                  <p className="font-display text-lg font-bold text-white mb-2">Your cart is empty</p>
                  <p className="text-sm text-white/40 leading-relaxed max-w-[200px] mb-6">
                    Choose a plot from Iceland's extraordinary highland reserves.
                  </p>
                  <button
                    onClick={closeCart}
                    className="inline-flex items-center gap-2 bg-aurora/10 border border-aurora/30 text-aurora hover:bg-aurora/20 transition-all px-5 py-2.5 rounded-xl text-sm font-semibold"
                  >
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    Browse Plots
                  </button>
                </div>
              </div>
            ) : (
              /* Items list */
              <ul
                className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
                role="list"
                aria-label="Cart items"
              >
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.li
                      key={item.cartItemId}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.22 }}
                      className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-4"
                      role="listitem"
                    >
                      <div className="flex gap-3">
                        {/* Icon */}
                        <div
                          className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-xl bg-gradient-to-br from-aurora/15 to-aurora-violet/15 border border-white/[0.08]"
                          aria-hidden="true"
                        >
                          {item.size === "bundle-2person" ? "💑" : item.deliveryType === "digital" ? "📱" : "🎁"}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-display text-sm font-bold text-white truncate leading-tight">
                            {item.productName}
                          </p>
                          <p className="text-xs text-aurora/80 mt-0.5 truncate">
                            {item.titleStyle} {item.recipientName}
                            {item.recipient2Name ? ` & ${item.titleStyle2} ${item.recipient2Name}` : ""}
                          </p>
                          <p className="text-[11px] text-white/35 mt-0.5 flex items-center gap-1">
                            <span aria-hidden="true">📍</span> {item.reserveName}
                          </p>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md flex items-center gap-1 ${item.deliveryType === "digital" ? "bg-sky-500/10 text-sky-400" : "bg-aurora-green/10 text-aurora-green"}`}>
                              <Package className="w-2.5 h-2.5" aria-hidden="true" />
                              {item.deliveryType === "digital" ? "Digital only" : "Digital + Physical"}
                            </span>
                          </div>
                        </div>

                        {/* Price + remove */}
                        <div className="flex flex-col items-end justify-between flex-shrink-0">
                          <span className="font-display font-bold text-ice-gold-light text-base">
                            {formatPrice(item.price, item.currency)}
                          </span>
                          <button
                            onClick={() => removeItem(item.cartItemId)}
                            className="p-1.5 rounded-lg text-white/25 hover:text-red-400 hover:bg-red-400/10 transition-all mt-1"
                            aria-label={`Remove ${item.productName} from cart`}
                          >
                            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      {/* Gift message */}
                      {item.giftMessage && (
                        <p className="mt-2.5 pt-2.5 border-t border-white/[0.05] text-[11px] text-white/35 italic">
                          💌 &ldquo;{item.giftMessage}&rdquo;
                        </p>
                      )}
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}

            {/* ── Footer checkout panel ── */}
            {!isEmpty && (
              <div className="flex-shrink-0 border-t border-white/[0.07]">
                {/* Aurora mini strip */}
                <AuroraScene className="w-full h-14 opacity-60" />

                <div className="px-5 pb-6 pt-3 space-y-4 bg-[#04090f]/80">
                  {/* Trust row */}
                  <div className="grid grid-cols-3 gap-2" role="list" aria-label="Purchase guarantees">
                    {[
                      { icon: <Globe className="w-3 h-3" />, label: "Free Worldwide Shipping" },
                      { icon: <Shield className="w-3 h-3" />, label: "90-Day Guarantee" },
                      { icon: <Lock className="w-3 h-3" />, label: "Secure Checkout" },
                    ].map(({ icon, label }) => (
                      <div
                        key={label}
                        role="listitem"
                        className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-2 flex flex-col items-center gap-1"
                      >
                        <span className="text-aurora/60" aria-hidden="true">{icon}</span>
                        <span className="text-[9px] text-white/30 text-center leading-tight">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Subtotal */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">Subtotal</p>
                      <p className="text-[11px] text-white/25">VAT included · Free shipping</p>
                    </div>
                    <p className="font-display text-2xl font-bold text-white">
                      {formatPrice(total, currency)}
                    </p>
                  </div>

                  {/* Payment logos */}
                  <div className="flex gap-1.5 flex-wrap items-center">
                    {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((m) => (
                      <span key={m} className="text-[9px] font-bold text-white/25 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded">
                        {m}
                      </span>
                    ))}
                    <span className="ml-auto text-[10px] text-aurora-green/60 flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5" aria-hidden="true" />SSL
                    </span>
                  </div>

                  {/*
                    PART 6 TODO: Replace with Stripe PaymentElement flow.
                    1. POST /api/checkout → get clientSecret
                    2. Wrap in <Elements stripe={stripePromise} options={{clientSecret}}>
                    3. Render <PaymentElement /> + confirm payment
                    4. On success → redirect /order-confirmed
                  */}
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-ice-gold to-amber-600 text-ice-black hover:shadow-gold hover:-translate-y-0.5 transition-all duration-200"
                    aria-label={`Proceed to secure checkout — ${formatPrice(total, currency)}`}
                  >
                    <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                    Secure Checkout
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>

                  <p className="text-center text-[10px] text-white/20 leading-relaxed">
                    By proceeding you agree to our{" "}
                    <Link href="/terms" className="underline hover:text-white/40 transition-colors" onClick={closeCart}>Terms & Conditions</Link>
                  </p>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
