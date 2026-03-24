import Link from "next/link";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/data";

// ─── Footer link groups ───────────────────────────────────────────────────────
const FOOTER_GROUPS = [
  {
    heading: "Explore",
    links: [
      { label: "Buy a Plot", href: "/buy-a-plot" },
      { label: "Our Reserves", href: "/the-land" },
      { label: "Adopt an Animal", href: "/adopt-a-horse" },
      { label: "Guided Tours", href: "/guided-tours" },
      { label: "My Dashboard", href: "/welcome" },
    ],
  },
  {
    heading: "Gift Ideas",
    links: [
      { label: "Birthday Gifts", href: "/buy-a-plot?occasion=birthday" },
      { label: "Anniversary Gifts", href: "/buy-a-plot?occasion=anniversary" },
      { label: "Christmas Gifts", href: "/buy-a-plot?occasion=christmas" },
      { label: "Corporate Gifts", href: "/buy-a-plot?occasion=corporate" },
      { label: "Fathers Day", href: "/buy-a-plot?occasion=fathers-day" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Track My Order", href: "/track-order" },
      { label: "Contact Us", href: "/contact" },
      { label: "90-Day Guarantee", href: "/guarantee" },
      { label: "Conservation Report", href: "/conservation" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Disclaimer & Legal Info", href: "/legal" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
] as const;

// ─── Payment method logos ─────────────────────────────────────────────────────
const PAYMENT_METHODS = [
  { label: "Visa", symbol: "VISA" },
  { label: "Mastercard", symbol: "MC" },
  { label: "American Express", symbol: "AMEX" },
  { label: "PayPal", symbol: "PayPal" },
  { label: "Apple Pay", symbol: "⌘ Pay" },
  { label: "Google Pay", symbol: "G Pay" },
  { label: "Stripe", symbol: "Stripe" },
];

// ─── Footer Component ─────────────────────────────────────────────────────────
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#040A12] border-t border-white/[0.06]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* ── Conservation Notice ── */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="text-[11px] text-white/35 leading-relaxed text-center max-w-4xl mx-auto">
            <strong className="text-white/50">Important Notice:</strong> Icelandic Titles is a novelty souvenir gift.
            The purchase of a plot confers no legal land ownership rights. Icelandic Titles ehf. retains full
            ownership and management of all reserve land. The title of Jarl, Lord or Lady of the Icelandic
            Highlands is a registered trademark used for souvenir purposes only and carries no legal,
            governmental, or aristocratic recognition. All conservation activities are genuine and independently managed.
          </p>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand column — spans 2 cols on lg */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group w-fit"
              aria-label="Icelandic Titles home"
            >
              <div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-aurora to-aurora-violet flex items-center justify-center text-xl transition-transform group-hover:scale-105"
                aria-hidden="true"
              >
                ❄
              </div>
              <span className="font-display text-lg font-bold text-white tracking-wide">
                Icelandic Titles
              </span>
            </Link>

            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Souvenir land plots in Iceland's most breathtaking nature reserves, supporting real
              conservation. Become a Jarl, Lord or Lady of the Icelandic Highlands.
            </p>

            {/* Company address */}
            <address
              className="not-italic space-y-2"
              aria-label="Company address"
            >
              <div className="flex items-start gap-2 text-xs text-white/40">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-aurora/60" aria-hidden="true" />
                <span>
                  {SITE.address.street}, {SITE.address.city}{" "}
                  {SITE.address.postcode}, {SITE.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <Mail className="w-3.5 h-3.5 flex-shrink-0 text-aurora/60" aria-hidden="true" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                  aria-label={`Email us at ${SITE.email}`}
                >
                  {SITE.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <Phone className="w-3.5 h-3.5 flex-shrink-0 text-aurora/60" aria-hidden="true" />
                <a
                  href={`tel:${SITE.phone}`}
                  className="hover:text-white transition-colors"
                  aria-label={`Call us at ${SITE.phone}`}
                >
                  {SITE.phone}
                </a>
              </div>
            </address>

            {/* Social links */}
            <div className="flex items-center gap-3" aria-label="Social media links">
              {[
                { href: SITE.social.instagram, label: "Instagram", icon: "📷" },
                { href: SITE.social.facebook, label: "Facebook", icon: "📘" },
                { href: SITE.social.tiktok, label: "TikTok", icon: "🎵" },
                { href: SITE.social.pinterest, label: "Pinterest", icon: "📌" },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center text-sm transition-all hover:-translate-y-0.5"
                  aria-label={`Follow us on ${label} (opens in new tab)`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {FOOTER_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/40 mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {group.links.map((link) => (
                  <li key={link.label} role="listitem">
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Trustpilot + Payments + Bottom bar ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">

          {/* Trustpilot Widget Placeholder */}
          <div
            className="flex flex-wrap items-center justify-between gap-4 bg-white/[0.03] rounded-2xl px-6 py-4 border border-white/[0.06]"
            aria-label="Trustpilot rating"
            role="region"
          >
            <div className="flex items-center gap-4">
              {/* Trustpilot star cluster */}
              <div className="flex gap-1" aria-label="5 star rating on Trustpilot">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-[#00B67A] rounded flex items-center justify-center text-white text-sm font-bold"
                    aria-hidden="true"
                  >
                    ★
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-xl font-bold text-white">
                    {SITE.trustpilot.rating}
                  </span>
                  <span className="text-sm text-white/50">out of 5</span>
                </div>
                <p className="text-xs text-white/40">
                  Excellent · {SITE.trustpilot.reviewCount.toLocaleString()}+ reviews
                </p>
              </div>
            </div>

            <a
              href={SITE.trustpilot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#00B67A] hover:text-[#00D68A] transition-colors font-semibold"
              aria-label="Read our reviews on Trustpilot (opens in new tab)"
            >
              Read reviews on Trustpilot
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>

            {/* TODO: Replace div above with the official Trustpilot widget:
                <div class="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="YOUR_ID" data-style-height="24px" data-style-width="100%">
                  <a href="https://uk.trustpilot.com/review/icelandictitles.com" target="_blank" rel="noopener">Trustpilot</a>
                </div>
                <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script> */}
          </div>

          {/* Payment methods */}
          <div className="flex flex-wrap items-center gap-2" aria-label="Accepted payment methods">
            <span className="text-[10px] text-white/30 uppercase tracking-widest mr-2">
              Secured by
            </span>
            {PAYMENT_METHODS.map(({ label, symbol }) => (
              <div
                key={label}
                className="bg-white/[0.05] border border-white/[0.08] rounded-md px-3 py-1.5 text-[10px] font-bold text-white/50"
                role="img"
                aria-label={label}
              >
                {symbol}
              </div>
            ))}
            {/* Stripe security badge */}
            <div
              className="ml-2 flex items-center gap-1 text-[10px] text-white/30"
              aria-label="SSL encrypted and PCI compliant"
            >
              🔒 SSL · PCI Compliant
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-white/[0.04] bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-white/25">
            © {currentYear} Icelandic Titles ehf. · Registered in Iceland (kt. 000000-0000) · All rights reserved
          </p>
          <p className="text-[11px] text-white/25">
            Jarl, Lord and Lady of the Icelandic Highlands are registered trademarks of Icelandic Titles ehf.
          </p>
        </div>
      </div>
    </footer>
  );
}
