// ─────────────────────────────────────────────────────────────────────────────
// Footer — Icelandic Titles
// Icelandic company address · payment badges · Trustpilot · legal links
// ─────────────────────────────────────────────────────────────────────────────
import Link        from "next/link";
import { cn }      from "@/lib/utils";
import { SITE }    from "@/lib/data";
import {
  Instagram, Facebook, Mail, Phone, MapPin,
  ExternalLink, Shield, Leaf, Star,
} from "lucide-react";

/* ─── Sub-components ─────────────────────────────────────────────────────────*/

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-xs font-semibold tracking-[0.18em] uppercase text-white/50 mb-4">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href:      string;
  children:  React.ReactNode;
  external?: boolean;
}) {
  const cls = cn(
    "font-body text-sm text-white/38 hover:text-glacier",
    "transition-colors duration-200 flex items-center gap-1"
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
      </a>
    );
  }
  return <Link href={href} className={cls}>{children}</Link>;
}

function FooterLogo() {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-10 h-10 rounded-xl bg-glacier/10 border border-glacier/20 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="text-glacier text-xl font-display">❄</span>
      </div>
      <div className="flex flex-col">
        <span className="font-display text-[15px] font-semibold text-white">
          Icelandic Titles
        </span>
        <span className="font-body text-[10px] tracking-[0.14em] uppercase text-glacier-dim">
          Snæfellsnes Reserve
        </span>
      </div>
    </div>
  );
}

/** Mock Trustpilot badge */
function TrustpilotBadge() {
  return (
    <a
      href={SITE.trustpilot.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 px-3 py-2 rounded-lg",
        "border border-white/10 hover:border-white/20",
        "bg-white/[0.03] hover:bg-white/[0.05]",
        "transition-all duration-200"
      )}
      aria-label={`Trustpilot rating: ${SITE.trustpilot.score} out of 5 from ${SITE.trustpilot.count} reviews`}
    >
      {/* Green Trustpilot star */}
      <div className="flex gap-0.5" aria-hidden="true">
        {[1,2,3,4,5].map((i) => (
          <div
            key={i}
            className="w-4 h-4 bg-[#00b67a] rounded-sm flex items-center justify-center"
          >
            <Star className="w-2.5 h-2.5 text-white fill-white" />
          </div>
        ))}
      </div>
      <span className="font-body text-xs text-white/60">
        <strong className="text-white/90">{SITE.trustpilot.score}</strong> · {SITE.trustpilot.count} reviews
      </span>
    </a>
  );
}

/** Payment method badges */
function PaymentBadges() {
  const methods = [
    "Visa", "Mastercard", "Amex", "PayPal",
    "Apple Pay", "Google Pay",
  ];
  return (
    <div className="flex flex-wrap gap-1.5" role="list" aria-label="Accepted payment methods">
      {methods.map((m) => (
        <div
          key={m}
          role="listitem"
          className={cn(
            "px-2 py-1 rounded border border-white/[0.08]",
            "bg-white/[0.03] text-[10px] font-body text-white/30"
          )}
        >
          {m}
        </div>
      ))}
    </div>
  );
}

/* ─── Main Footer ─────────────────────────────────────────────────────────── */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-ice-deep border-t border-white/[0.06]"
      role="contentinfo"
    >
      {/* Top aurora accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(168,216,234,0.2), transparent)",
        }}
      />

      {/* ── Main grid ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <FooterLogo />

            <p className="font-body text-sm text-white/38 leading-relaxed max-w-xs">
              Souvenir plots in the mystical Snæfellsnes Reserve — where guardian
              spirit Bárður watches from within the glacier and the huldufólk
              dwell among the ancient lava fields.
            </p>

            {/* Trustpilot */}
            <TrustpilotBadge />

            {/* Trust badges */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-glacier flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-xs text-white/40">
                  90-day money-back guarantee
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-spirit flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-xs text-white/40">
                  Part of every sale funds Snæfellsnes conservation
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2.5">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Icelandic Titles on Instagram"
                className="p-2 rounded-lg border border-white/10 text-white/35 hover:text-white hover:border-white/25 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Icelandic Titles on Facebook"
                className="p-2 rounded-lg border border-white/10 text-white/35 hover:text-white hover:border-white/25 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <nav aria-label="Shop navigation">
            <FooterHeading>Shop</FooterHeading>
            <ul className="space-y-2.5" role="list">
              <li><FooterLink href="/buy-a-plot">Buy a Souvenir Plot</FooterLink></li>
              <li><FooterLink href="/buy-a-plot#eco-1sqft">1 sq ft Eco Pack — €49</FooterLink></li>
              <li><FooterLink href="/buy-a-plot#luxury-5sqft">5 sq ft Luxury Pack — €69</FooterLink></li>
              <li><FooterLink href="/buy-a-plot#luxury-10sqft">10 sq ft Luxury Pack — €109</FooterLink></li>
              <li><FooterLink href="/adopt">Adopt an Icelandic Horse</FooterLink></li>
              <li><FooterLink href="/guided-tours">Guided Tours</FooterLink></li>
            </ul>
          </nav>

          {/* Discover */}
          <nav aria-label="Discover navigation">
            <FooterHeading>Discover</FooterHeading>
            <ul className="space-y-2.5" role="list">
              <li><FooterLink href="/the-land">Snæfellsnes Reserve</FooterLink></li>
              <li><FooterLink href="/the-land/snaefellsnes">The Glacier</FooterLink></li>
              <li><FooterLink href="/welcome">Owner Dashboard</FooterLink></li>
              <li><FooterLink href="/faq">FAQ</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
              <li>
                <FooterLink href={SITE.trustpilot.url} external>
                  Trustpilot Reviews
                </FooterLink>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <nav aria-label="Contact information">
            <FooterHeading>Contact</FooterHeading>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 font-body text-sm text-white/38 hover:text-glacier transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2 font-body text-sm text-white/38 hover:text-glacier transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <address className="flex items-start gap-2 font-body text-sm text-white/38 not-italic">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    {SITE.address.street}<br />
                    {SITE.address.city} {SITE.address.postcode}<br />
                    {SITE.address.country}
                  </span>
                </address>
              </li>
            </ul>

            <div className="mt-5">
              <p className="font-body text-[10px] text-white/25 uppercase tracking-wider mb-2">
                Secure payments
              </p>
              <PaymentBadges />
            </div>
          </nav>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          {/* Legal nav */}
          <nav
            aria-label="Legal navigation"
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5" role="list">
              {[
                { label: "Privacy Policy",    href: "/legal#privacy"   },
                { label: "Terms & Conditions",href: "/legal#terms"     },
                { label: "Cookie Policy",     href: "/legal#cookies"   },
                { label: "Accessibility",     href: "/legal#accessibility" },
                { label: "Sitemap",           href: "/sitemap.xml"    },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-xs text-white/28 hover:text-white/60 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="font-body text-xs text-white/22 text-center sm:text-right whitespace-nowrap">
              © {year} Icelandic Titles ehf. · Reykjavík, Iceland
            </p>
          </nav>

          {/* Souvenir disclaimer */}
          <p className="mt-4 font-body text-[10px] text-white/18 leading-relaxed text-center max-w-4xl mx-auto">
            <strong className="text-white/28 font-semibold">Souvenir notice:</strong>{" "}
            Icelandic Titles is a novelty souvenir gift company. No real land ownership
            or noble title is conferred. Icelandic Titles ehf. retains full legal ownership
            of the Snæfellsnes Reserve. References to guardian spirit Bárður Snæfellsás
            and huldufólk (hidden people / elves) are Icelandic cultural folklore, presented
            for cultural appreciation and entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
