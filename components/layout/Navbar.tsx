"use client";
// ─────────────────────────────────────────────────────────────────────────────
// Navbar — Icelandic Titles
// Responsive: desktop nav + currency switcher + cart icon
//            mobile hamburger → slide-in drawer
// Glassmorphism on scroll; transparent at top
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef, useCallback } from "react";
import Link                                          from "next/link";
import { usePathname }                               from "next/navigation";
import { motion, AnimatePresence }                   from "framer-motion";
import {
  ShoppingCart, Menu, X, ChevronDown, Globe,
  Mountain, Compass, Home, ShoppingBag,
  HelpCircle, LayoutDashboard, Heart,
} from "lucide-react";
import { cn }            from "@/lib/utils";
import { useCartStore }  from "@/lib/store";
import { NAV_ITEMS }     from "@/lib/data";
import type { Currency } from "@/types";

// ─── Currency options ─────────────────────────────────────────────────────────
const CURRENCIES: { code: Currency; symbol: string; label: string }[] = [
  { code: "EUR", symbol: "€", label: "Euro"         },
  { code: "USD", symbol: "$", label: "US Dollar"    },
  { code: "GBP", symbol: "£", label: "British Pound"},
];

// ─── Nav icon map ─────────────────────────────────────────────────────────────
const NAV_ICONS: Record<string, React.ReactNode> = {
  "/":             <Home            className="w-4 h-4" aria-hidden="true" />,
  "/buy-a-plot":   <ShoppingBag     className="w-4 h-4" aria-hidden="true" />,
  "/the-land":     <Mountain        className="w-4 h-4" aria-hidden="true" />,
  "/adopt":        <Heart           className="w-4 h-4" aria-hidden="true" />,
  "/guided-tours": <Compass         className="w-4 h-4" aria-hidden="true" />,
  "/welcome":      <LayoutDashboard className="w-4 h-4" aria-hidden="true" />,
  "/faq":          <HelpCircle      className="w-4 h-4" aria-hidden="true" />,
};

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ─────────────────────────────────────────────────────────────────────────── */

// ── Brand logo ────────────────────────────────────────────────────────────────
function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-3 group focus-visible:outline-none"
      aria-label="Icelandic Titles — home"
    >
      {/* Glacier sigil */}
      <div className="relative w-9 h-9 flex-shrink-0" aria-hidden="true">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-glacier/20 to-aurora/10 border border-glacier/20" />
        <div className="absolute inset-0 flex items-center justify-center text-glacier text-xl font-display font-bold">
          ❄
        </div>
        {/* Spirit glow on hover */}
        <div className="absolute inset-0 rounded-xl bg-spirit/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold text-white tracking-wide">
          Icelandic Titles
        </span>
        <span className="font-body text-[10px] tracking-[0.18em] text-glacier-dim uppercase mt-0.5">
          Vestfirðir Reserve
        </span>
      </div>
    </Link>
  );
}

// ── Currency switcher dropdown ────────────────────────────────────────────────
function CurrencySwitcher() {
  const [open, setOpen]           = useState(false);
  const { currency, setCurrency } = useCartStore();
  const ref                       = useRef<HTMLDivElement>(null);
  const current                   = CURRENCIES.find((c) => c.code === currency)!;

  // Close on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Currency: ${current.label}. Click to change.`}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-lg",
          "text-xs font-body font-semibold",
          "border border-white/10 transition-all duration-200",
          open
            ? "text-white  bg-white/8 border-white/20"
            : "text-white/60 hover:text-white hover:border-white/20"
        )}
      >
        <Globe className="w-3.5 h-3.5" aria-hidden="true" />
        <span>{current.symbol} {current.code}</span>
        <ChevronDown
          className={cn(
            "w-3 h-3 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label="Select currency"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y:  0, scale: 1    }}
            exit={{    opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.14 }}
            className={cn(
              "absolute right-0 top-full mt-1.5 w-44 z-50",
              "bg-ice-midnight border border-white/10 rounded-xl overflow-hidden",
              "shadow-[0_8px_32px_rgba(6,13,25,0.85)]"
            )}
          >
            {CURRENCIES.map((c) => (
              <li key={c.code} role="option" aria-selected={c.code === currency}>
                <button
                  type="button"
                  onClick={() => { setCurrency(c.code); setOpen(false); }}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2.5",
                    "text-sm font-body transition-colors duration-150",
                    c.code === currency
                      ? "text-glacier bg-glacier/8"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span className="font-semibold">{c.symbol} {c.code}</span>
                  <span className="text-white/30 text-xs">{c.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Cart icon button ──────────────────────────────────────────────────────────
function CartButton() {
  const { itemCount, toggleCart } = useCartStore();
  // ── Hydration fix ────────────────────────────────────────────────────────
  // Zustand's persist middleware rehydrates from localStorage only on the
  // client. The server always renders count=0. If we read `itemCount()`
  // directly on both server and client we get a mismatch the moment the
  // persisted cart loads (different aria-label, badge appearing/disappearing).
  //
  // Solution: treat the component as "not yet mounted" on the server.
  // Until useEffect fires (client-only), we show the zero-count stable shell.
  // After mount we read the real cart — no mismatch, no flicker suppression needed.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Server: 0. Client (after mount): real persisted value.
  const count = mounted ? itemCount() : 0;

  return (
    <button
      type="button"
      onClick={toggleCart}
      aria-label={`Open cart — ${count} item${count !== 1 ? "s" : ""}`}
      className={cn(
        "relative flex items-center gap-2 px-3 py-2 rounded-xl",
        "border border-white/10 transition-all duration-200 group",
        count > 0
          ? "text-white border-glacier/25 bg-glacier/5"
          : "text-white/60 hover:text-white hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06]"
      )}
    >
      <ShoppingCart
        className={cn(
          "w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110",
          count > 0 && "text-glacier"
        )}
        aria-hidden="true"
      />

      {/* Count badge — only rendered client-side after mount */}
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{    scale: 0 }}
            transition={{ type: "spring", damping: 14, stiffness: 300 }}
            aria-hidden="true"
            className={cn(
              "absolute -top-1.5 -right-1.5",
              "min-w-[18px] h-[18px] px-1",
              "flex items-center justify-center",
              "text-[10px] font-bold text-ice-black",
              "bg-glacier rounded-full"
            )}
          >
            {count > 99 ? "99+" : count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

// ── Mobile drawer ─────────────────────────────────────────────────────────────
function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen:  boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll + focus first element
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      firstFocusRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[150] bg-ice-black/90 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-in panel */}
          <motion.div
            key="mobile-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0      }}
            exit={{    x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className={cn(
              "fixed top-0 right-0 bottom-0 w-80 z-[160]",
              "bg-ice-deep border-l border-white/[0.07]",
              "flex flex-col"
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between p-5 border-b border-white/[0.07]">
              <Logo onClick={onClose} />
              <button
                ref={firstFocusRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/8 transition-all"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto p-5" aria-label="Site navigation">
              <ul className="space-y-1" role="list">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0  }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl",
                          "font-body text-base transition-all duration-200",
                          isActive
                            ? "text-glacier bg-glacier/10 border border-glacier/20"
                            : "text-white/60 hover:text-white hover:bg-white/6"
                        )}
                      >
                        <span className={cn("flex-shrink-0", isActive ? "text-glacier" : "text-white/30")}>
                          {NAV_ICONS[item.href]}
                        </span>
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Panel footer */}
            <div className="p-5 border-t border-white/[0.07] space-y-3">
              <CurrencySwitcher />
              <Link
                href="/buy-a-plot"
                onClick={onClose}
                className={cn(
                  "flex items-center justify-center gap-2 w-full",
                  "py-3 px-6 rounded-xl",
                  "bg-glacier text-ice-black font-display font-semibold text-sm",
                  "hover:bg-glacier-light transition-colors duration-200",
                  "btn-spirit"
                )}
              >
                ❄ Claim Your Plot
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN NAVBAR
   ─────────────────────────────────────────────────────────────────────────── */
export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Detect scroll for glassmorphism
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100]",
          "transition-all duration-300",
          scrolled
            ? "bg-ice-deep/95 backdrop-blur-2xl border-b border-white/[0.07] shadow-deep"
            : "bg-transparent"
        )}
        role="banner"
      >
        {/* Aurora accent line at top of scrolled nav */}
        {scrolled && (
          <div
            className="absolute top-0 left-0 right-0 h-[1px]"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(168,216,234,0.3), transparent)",
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo ─────────────────────────────────────────── */}
            <Logo />

            {/* ── Desktop navigation ───────────────────────────── */}
            <nav
              className="hidden lg:flex items-center"
              aria-label="Main navigation"
            >
              <ul className="flex items-center gap-1" role="list">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "nav-link px-3 py-2 rounded-lg",
                          isActive && "text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* ── Right controls ───────────────────────────────── */}
            <div className="flex items-center gap-2">

              {/* Currency switcher — hidden on smallest screens */}
              <div className="hidden sm:block">
                <CurrencySwitcher />
              </div>

              {/* Cart */}
              <CartButton />

              {/* CTA button — desktop only */}
              <Link
                href="/buy-a-plot"
                className={cn(
                  "hidden lg:flex items-center gap-2",
                  "px-4 py-2 rounded-xl",
                  "bg-glacier text-ice-black",
                  "font-display font-semibold text-sm",
                  "hover:bg-glacier-light hover:shadow-glacier",
                  "transition-all duration-200 btn-spirit"
                )}
              >
                ❄ Claim Your Plot
              </Link>

              {/* Hamburger — mobile */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                className={cn(
                  "lg:hidden p-2 rounded-lg",
                  "text-white/70 hover:text-white",
                  "border border-white/10 hover:border-white/20",
                  "transition-all duration-200"
                )}
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
