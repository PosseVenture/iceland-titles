"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ShoppingCart,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store";
import type { Currency } from "@/types";

// ─── Nav link definitions ─────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Buy a Plot", href: "/buy-a-plot" },
  { label: "The Land", href: "/the-land" },
  { label: "Adopt a Horse", href: "/adopt-a-horse" },
  { label: "Guided Tours", href: "/guided-tours" },
  { label: "My Dashboard", href: "/welcome" },
  { label: "FAQ", href: "/faq" },
  { label: "Legal", href: "/legal" },
] as const;

const CURRENCIES: Currency[] = ["EUR", "USD", "GBP"];

const CURRENCY_LABELS: Record<Currency, string> = {
  EUR: "€ EUR",
  USD: "$ USD",
  GBP: "£ GBP",
};

// ─── Navbar Component ─────────────────────────────────────────────────────────
export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const { currency, setCurrency, itemCount, toggleCart } = useCartStore();
  const count = itemCount();

  // Prevent hydration mismatch for theme toggle
  useEffect(() => setMounted(true), []);

  // Scroll detection for nav background
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close currency dropdown on outside click
  useEffect(() => {
    if (!currencyOpen) return;
    const handler = () => setCurrencyOpen(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [currencyOpen]);

  const isDark = theme === "dark";

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-ice-black/90 backdrop-blur-xl shadow-nav border-b border-white/[0.06]"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[var(--nav-height,72px)] flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-aurora"
            aria-label="Icelandic Titles — Home"
          >
            {/* Snowflake icon */}
            <div
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-aurora to-aurora-violet flex items-center justify-center text-white text-lg font-bold shadow-aurora group-hover:scale-105 transition-transform"
              aria-hidden="true"
            >
              ❄
            </div>
            <span className="font-display text-base font-bold text-white hidden sm:block tracking-wide">
              Icelandic Titles
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul
            className="hidden lg:flex items-center gap-6"
            role="list"
            aria-label="Site navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} role="listitem">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-xs font-semibold uppercase tracking-widest transition-colors duration-200 relative py-1",
                      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-aurora after:origin-left after:transition-transform after:duration-200",
                      isActive
                        ? "text-aurora after:scale-x-100"
                        : "text-white/70 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-2">

            {/* Currency Switcher */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setCurrencyOpen((o) => !o)}
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/[0.06]"
                aria-label={`Current currency: ${currency}. Click to change`}
                aria-expanded={currencyOpen}
                aria-haspopup="listbox"
              >
                {CURRENCY_LABELS[currency]}
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform duration-200",
                    currencyOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {currencyOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    role="listbox"
                    aria-label="Select currency"
                    className="absolute right-0 top-full mt-2 w-32 bg-ice-deep border border-white/10 rounded-xl shadow-card overflow-hidden"
                  >
                    {CURRENCIES.map((c) => (
                      <li key={c} role="option" aria-selected={c === currency}>
                        <button
                          onClick={() => {
                            setCurrency(c);
                            setCurrencyOpen(false);
                          }}
                          className={cn(
                            "w-full text-left px-4 py-2.5 text-xs font-semibold transition-colors",
                            c === currency
                              ? "text-aurora bg-aurora/10"
                              : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                          )}
                        >
                          {CURRENCY_LABELS[c]}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <Sun className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            )}

            {/* Cart Icon */}
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label={`Shopping cart with ${count} item${count !== 1 ? "s" : ""}`}
            >
              <ShoppingCart className="w-5 h-5" aria-hidden="true" />
              {count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-aurora text-ice-black text-[10px] font-bold rounded-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  {count}
                </motion.span>
              )}
            </button>

            {/* Desktop CTA */}
            <Link
              href="/buy-a-plot"
              className="hidden md:inline-flex items-center gap-1.5 btn-gold text-sm px-5 py-2.5 ml-1"
              aria-label="Own a plot of Icelandic land"
            >
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Own a Plot
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Navigation Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-ice-black/95 backdrop-blur-2xl lg:hidden"
              aria-hidden="true"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.nav
              id="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-ice-deep border-l border-white/[0.06] lg:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/[0.06]">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Icelandic Titles — Home"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-aurora to-aurora-violet flex items-center justify-center text-sm" aria-hidden="true">
                    ❄
                  </div>
                  <span className="font-display text-sm font-bold text-white">
                    Icelandic Titles
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-white/60 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile links */}
              <ul className="flex-1 overflow-y-auto py-6 px-6 space-y-1" role="list">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      role="listitem"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center font-display text-lg font-semibold py-3.5 px-4 rounded-xl transition-all",
                          isActive
                            ? "text-aurora bg-aurora/10 border border-aurora/20"
                            : "text-white/80 hover:text-white hover:bg-white/[0.05]"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile footer */}
              <div className="px-6 pb-8 pt-4 border-t border-white/[0.06] space-y-3">
                {/* Currency switcher mobile */}
                <div className="flex gap-2">
                  {CURRENCIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={cn(
                        "flex-1 py-2 text-xs font-bold rounded-lg border transition-all",
                        c === currency
                          ? "border-aurora/40 bg-aurora/10 text-aurora"
                          : "border-white/10 text-white/50 hover:text-white hover:border-white/20"
                      )}
                      aria-pressed={c === currency}
                      aria-label={`Switch to ${c}`}
                    >
                      {CURRENCY_LABELS[c]}
                    </button>
                  ))}
                </div>

                <Link
                  href="/buy-a-plot"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold flex items-center justify-center gap-2 py-3.5 w-full text-sm"
                >
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  Own a Plot Now
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
