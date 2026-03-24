"use client";
// ─────────────────────────────────────────────────────────────────────────────
// /legal — Legal notices page
// Sections:
//   1. Souvenir novelty disclaimer (primary — bold, prominent)
//   2. Icelandic property law statement
//   3. Title trademark disclaimer
//   4. Folklore & mystical content disclaimer
//   5. Privacy policy summary
//   6. Terms & conditions summary
//   7. Cookie policy note
//   8. Contact
// ─────────────────────────────────────────────────────────────────────────────
import { useState }                from "react";
import Link                        from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldAlert, Mail } from "lucide-react";
import { cn }                      from "@/lib/utils";
import { SITE }                    from "@/lib/data";

// ─── Collapsible legal section ────────────────────────────────────────────────
function LegalSection({
  id,
  title,
  children,
  defaultOpen = false,
  highlight   = false,
}: {
  id:           string;
  title:        string;
  children:     React.ReactNode;
  defaultOpen?: boolean;
  highlight?:   boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      id={id}
      className={cn(
        "border rounded-2xl overflow-hidden transition-all duration-200",
        highlight
          ? open
            ? "border-glacier/30 bg-glacier/[0.03]"
            : "border-glacier/20 hover:border-glacier/30"
          : open
            ? "border-white/12"
            : "border-white/[0.07] hover:border-white/[0.12]"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-glacier"
      >
        <span className={cn(
          "font-display font-semibold",
          highlight ? "text-base text-white" : "text-[0.95rem] text-white/85"
        )}>
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 flex-shrink-0 ml-4 transition-transform duration-200",
            open ? (highlight ? "rotate-180 text-glacier" : "rotate-180 text-white/40") : "text-white/25"
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{    height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 border-t border-white/[0.06]">
              <div className="pt-4 space-y-3 font-body text-sm text-white/55 leading-[1.85]">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main legal page ──────────────────────────────────────────────────────────
export default function LegalPage() {
  return (
    <div className="min-h-screen bg-ice-black">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Legal notices page header"
        className="relative pt-[72px] overflow-hidden bg-ice-navy"
      >
        <div
          className="aurora-orb w-[500px] h-[400px] bg-glacier/5 -top-10 right-0"
          aria-hidden="true"
          style={{ animationDelay: "0s" }}
        />
        <div className="grain-overlay" aria-hidden="true" />
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ice-black to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-4">Icelandic Titles ehf.</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-light text-white leading-[0.95] mb-5">
              Legal Notices &{" "}
              <em className="not-italic text-gradient-glacier">Policies</em>
            </h1>
            <p className="font-body text-base text-white/45 leading-relaxed max-w-xl">
              Please read these notices carefully before purchasing. The most important
              section — the souvenir disclaimer — is expanded by default below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <main
        id="legal-content"
        aria-label="Legal notices and policies"
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24"
      >

        {/* Navigation */}
        <nav aria-label="Jump to section" className="mb-8">
          <p className="font-body text-xs text-white/30 uppercase tracking-wider mb-2">Jump to</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "#souvenir-disclaimer",  label: "Souvenir Disclaimer" },
              { href: "#icelandic-law",         label: "Icelandic Law"       },
              { href: "#trademark",             label: "Trademark"           },
              { href: "#folklore",              label: "Folklore"            },
              { href: "#privacy",               label: "Privacy Policy"      },
              { href: "#terms",                 label: "Terms & Conditions"  },
              { href: "#cookies",               label: "Cookie Policy"       },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-body text-xs text-white/40 hover:text-glacier border border-white/[0.07] px-3 py-1.5 rounded-lg hover:border-glacier/25 transition-all"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* PRIMARY: Novelty Souvenir Disclaimer — open by default, highlighted */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          {/* Prominent banner */}
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-glacier/8 border border-glacier/25 mb-4">
            <ShieldAlert className="w-5 h-5 text-glacier flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-display text-sm font-bold text-white mb-1">
                Important: This is a fun souvenir gift — not a real land purchase
              </p>
              <p className="font-body text-xs text-white/60 leading-relaxed">
                No real property rights or noble titles are transferred. Read the full
                disclaimer below before purchasing.
              </p>
            </div>
          </div>

          <LegalSection
            id="souvenir-disclaimer"
            title="Souvenir Novelty Disclaimer (Important — Please Read)"
            defaultOpen={true}
            highlight={true}
          >
            <p className="font-body text-base text-white/75 font-semibold leading-relaxed">
              Icelandic Titles is a fun souvenir gift company. You cannot buy a noble
              title or real property rights through our service.
            </p>
            <p>
              All products sold by Icelandic Titles ehf. are novelty souvenir gifts only.
              No real land ownership, property rights, access rights, legal entitlements,
              or noble or aristocratic titles of any kind are conferred, transferred, or
              implied by any purchase.
            </p>
            <p>
              <strong className="text-white/80">Land ownership:</strong> Icelandic Titles
              ehf. retains full and sole legal ownership of all land within the Snæfellsnes
              Reserve at all times. The designation of a souvenir 'plot reference' to a
              customer is a novelty gift designation only, with no legal significance under
              Icelandic or any other property law.
            </p>
            <p>
              <strong className="text-white/80">Noble titles:</strong> The titles
              'Jarl/Lord/Lady of Snæfellsnes' are registered trademarks of Icelandic Titles
              ehf., used solely as a novelty souvenir product description. They are not
              recognised by the Icelandic government, any foreign government, or any
              official body. They confer no legal privileges, voting rights, or aristocratic
              status.
            </p>
            <p>
              <strong className="text-white/80">The Snæfellsnes Reserve:</strong> The
              reserve is privately owned and managed by Icelandic Titles ehf. for
              conservation and rewilding purposes. Management of the reserve is at the sole
              discretion of Icelandic Titles ehf. Purchasing a souvenir plot does not grant
              customers any influence over, or rights in relation to, the management of the
              reserve.
            </p>
            <p>
              <strong className="text-white/80">Consumer protection:</strong> Our 90-day
              money-back guarantee is unconditional. If you have any doubt about the nature
              of this product, please contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-glacier hover:underline">
                {SITE.email}
              </a>{" "}
              before purchasing.
            </p>
          </LegalSection>
        </motion.div>

        <div className="space-y-3">

          {/* Icelandic property law */}
          <LegalSection id="icelandic-law" title="Icelandic Property Law Statement">
            <p>
              Under Icelandic property law (fasteignalög nr. 6/2001), legal ownership of
              land in Iceland is established exclusively through formal registration in the
              national land register maintained by Registers Iceland (Þjóðskrá Íslands).
              Only a registered landowner has legal title to Icelandic real property.
            </p>
            <p>
              Icelandic Titles ehf. is the sole registered owner of the Snæfellsnes Reserve
              land in the Þjóðskrá. No souvenir plot purchase results in any registration
              of title, creation of a lease, licence, easement, or other property right in
              favour of the customer under Icelandic law.
            </p>
            <p>
              Iceland's constitution (Stjórnarskrá lýðveldisins Íslands 1944, Article 65)
              expressly prohibits hereditary privileges, titles of nobility, and aristocratic
              distinctions. The souvenir titles sold by Icelandic Titles are novelty
              trademark designations, not titles of nobility, and do not conflict with this
              constitutional provision.
            </p>
            <p>
              Our operations comply with Icelandic consumer protection law (lög um
              neytendavernd nr. 62/2005) and, where applicable, the EU Consumer Rights
              Directive (2011/83/EU) and General Data Protection Regulation (GDPR).
            </p>
          </LegalSection>

          {/* Trademark */}
          <LegalSection id="trademark" title="Trademark & Intellectual Property">
            <p>
              'Icelandic Titles', 'Jarl of Snæfellsnes', 'Lord of Snæfellsnes', 'Lady of
              Snæfellsnes', 'High Jarl of Snæfellsnes', and associated logos and branding
              are trademarks of Icelandic Titles ehf. registered in Iceland and, where
              applicable, the European Union and other territories.
            </p>
            <p>
              Certificate designs, packaging artwork, and all written content on this
              website are copyright © {new Date().getFullYear()} Icelandic Titles ehf.
              All rights reserved. No content may be reproduced without written permission.
            </p>
            <p>
              Purchasers are granted a personal, non-transferable, non-exclusive licence to
              use the souvenir title designations (Jarl/Lord/Lady of Snæfellsnes) for
              personal and social purposes. Commercial use, sublicensing, or misrepresentation
              of these titles as genuine legal titles is prohibited.
            </p>
          </LegalSection>

          {/* Folklore disclaimer */}
          <LegalSection id="folklore" title="Cultural Folklore & Mystical Content Disclaimer">
            <p>
              References on this website and in our products to Bárður Snæfellsás,
              huldufólk (hidden people / elves), guardian spirits, spiritual energy centres,
              chakras, mystical power, and related folklore are presented exclusively as
              Icelandic cultural heritage and folklore. They are intended for cultural
              appreciation, storytelling, and entertainment purposes.
            </p>
            <p>
              Bárður Snæfellsás is a figure from medieval Icelandic literature
              (Bárðar saga Snæfellsáss). Huldufólk folklore is a documented and actively
              maintained element of Icelandic folk culture. The designation of Snæfellsjökull
              as a 'spiritual energy centre' reflects a tradition in certain spiritual
              communities and is presented as such.
            </p>
            <p>
              Icelandic Titles ehf. makes no representations or warranties that any
              supernatural beings, guardian spirits, spiritual energies, or mystical
              properties exist at the Snæfellsnes Reserve or anywhere else. These
              references do not constitute factual claims and should not be relied upon
              as such. The Snæfellsnes Reserve is a genuine, beautiful piece of Icelandic
              landscape whose natural qualities speak for themselves.
            </p>
          </LegalSection>

          {/* Privacy */}
          <LegalSection id="privacy" title="Privacy Policy">
            <p>
              <strong className="text-white/80">Data controller:</strong> Icelandic Titles
              ehf., Laugavegur 28, 101 Reykjavík, Iceland.
              Contact: <a href={`mailto:${SITE.email}`} className="text-glacier hover:underline">{SITE.email}</a>
            </p>
            <p>
              <strong className="text-white/80">Data we collect:</strong> Name, email
              address, delivery address, order details, and (optionally) a gift message.
              We do not store payment card data — this is handled securely by Stripe and
              PayPal.
            </p>
            <p>
              <strong className="text-white/80">How we use your data:</strong> To process
              and fulfil your order, send order confirmation and tracking information,
              reissue certificates if requested, and respond to customer service enquiries.
              We do not sell, share, or rent your personal data to third parties for
              marketing purposes.
            </p>
            <p>
              <strong className="text-white/80">Marketing:</strong> We may send occasional
              email updates about conservation progress and new products, but only with
              your explicit consent. You may unsubscribe at any time.
            </p>
            <p>
              <strong className="text-white/80">Data retention:</strong> Order data is
              retained for 7 years for legal and accounting purposes. You may request
              deletion of personal data (subject to legal retention requirements) by
              emailing us.
            </p>
            <p>
              <strong className="text-white/80">Your rights (GDPR):</strong> You have the
              right to access, rectify, erase, restrict processing of, and object to
              processing of your personal data. Contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-glacier hover:underline">{SITE.email}</a>{" "}
              to exercise these rights.
            </p>
            <p>
              <strong className="text-white/80">Data transfers:</strong> Your data may be
              processed by Stripe (USA, EU-US DPF certified), PayPal (USA, EU-US DPF
              certified), and Resend (email delivery). All processors are subject to
              appropriate data protection safeguards.
            </p>
          </LegalSection>

          {/* Terms */}
          <LegalSection id="terms" title="Terms & Conditions">
            <p>
              These terms govern all purchases made through icelandictitles.com. By placing
              an order, you confirm that you have read and understood the Souvenir Novelty
              Disclaimer above, and that you are purchasing a novelty souvenir gift only.
            </p>
            <p>
              <strong className="text-white/80">Prices:</strong> All prices are shown in
              EUR, USD, or GBP and include VAT where applicable. Prices are correct at the
              time of display but may change without notice. The price shown at checkout is
              the binding price.
            </p>
            <p>
              <strong className="text-white/80">Delivery:</strong> Digital orders are
              fulfilled immediately. Physical orders are dispatched within 2–3 working days.
              Free worldwide shipping applies to all orders. Estimated delivery times are
              guides only; Icelandic Titles is not liable for delays caused by customs,
              postal services, or circumstances beyond our control.
            </p>
            <p>
              <strong className="text-white/80">Returns & refunds:</strong> Our 90-day
              unconditional money-back guarantee means you may return (or simply notify us
              about) any order within 90 days for a full refund. Physical products need not
              be returned. After 90 days, refunds are at our discretion.
            </p>
            <p>
              <strong className="text-white/80">Limitation of liability:</strong> To the
              maximum extent permitted by applicable law, Icelandic Titles' liability for
              any order is limited to the purchase price paid for that order. We are not
              liable for indirect, incidental, or consequential losses.
            </p>
            <p>
              <strong className="text-white/80">Governing law:</strong> These terms are
              governed by the laws of Iceland. Any disputes shall be subject to the
              exclusive jurisdiction of the Icelandic courts, without prejudice to your
              statutory consumer rights in your country of residence.
            </p>
          </LegalSection>

          {/* Cookies */}
          <LegalSection id="cookies" title="Cookie Policy">
            <p>
              We use a small number of essential cookies to operate the website (session
              management, cart state) and, with your consent, analytics cookies (Google
              Analytics) to understand how visitors use our site.
            </p>
            <p>
              <strong className="text-white/80">Essential cookies:</strong> Required for
              the site to function. Cannot be disabled. These include cart persistence
              (Zustand localStorage) and session cookies.
            </p>
            <p>
              <strong className="text-white/80">Analytics cookies:</strong> Optional.
              Used to measure site traffic and improve user experience. These are only set
              with your explicit consent via our cookie banner.
            </p>
            <p>
              <strong className="text-white/80">Third-party cookies:</strong> Stripe and
              PayPal may set cookies during checkout. These are governed by their own
              privacy policies.
            </p>
            <p>
              You may manage your cookie preferences at any time by clicking the cookie
              settings link in the footer, or by clearing cookies in your browser settings.
            </p>
          </LegalSection>

          {/* Accessibility */}
          <LegalSection id="accessibility" title="Accessibility Statement">
            <p>
              Icelandic Titles is committed to making icelandictitles.com accessible to all
              users. We aim to meet WCAG 2.2 Level AA standards throughout the site.
            </p>
            <p>
              This includes: keyboard navigation for all interactive elements, ARIA labels
              on all significant components, sufficient colour contrast ratios, focus
              indicators on all focusable elements, alternative text on all informative
              images, and respect for reduced-motion preferences.
            </p>
            <p>
              If you encounter accessibility barriers on our site, please email{" "}
              <a href={`mailto:${SITE.email}`} className="text-glacier hover:underline">
                {SITE.email}
              </a>{" "}
              and we will make reasonable accommodations and work to fix any issues promptly.
            </p>
          </LegalSection>
        </div>

        {/* Company info footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
        >
          <p className="font-body text-xs text-white/35 uppercase tracking-wider mb-3">
            Company information
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-body text-sm text-white/45">
            <div><dt className="text-white/25 text-xs">Company</dt><dd>Icelandic Titles ehf.</dd></div>
            <div><dt className="text-white/25 text-xs">Registered</dt><dd>Reykjavík, Iceland</dd></div>
            <div><dt className="text-white/25 text-xs">Address</dt><dd>{SITE.address.street}, {SITE.address.city} {SITE.address.postcode}</dd></div>
            <div><dt className="text-white/25 text-xs">Email</dt>
              <dd>
                <a href={`mailto:${SITE.email}`} className="text-glacier hover:underline">{SITE.email}</a>
              </dd>
            </div>
            <div><dt className="text-white/25 text-xs">Last updated</dt><dd>March 2026</dd></div>
          </dl>
        </motion.div>

        {/* Back to shopping */}
        <div className="mt-8 flex flex-wrap items-center gap-4 justify-center">
          <Link
            href="/buy-a-plot"
            className="flex items-center gap-2 font-body text-sm text-white/40 hover:text-glacier transition-colors"
          >
            ← Back to shop
          </Link>
          <span className="text-white/15" aria-hidden="true">·</span>
          <Link href="/faq"      className="font-body text-sm text-white/40 hover:text-glacier transition-colors">FAQ</Link>
          <span className="text-white/15" aria-hidden="true">·</span>
          <Link href="/"         className="font-body text-sm text-white/40 hover:text-glacier transition-colors">Home</Link>
          <span className="text-white/15" aria-hidden="true">·</span>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-1.5 font-body text-sm text-white/40 hover:text-glacier transition-colors"
          >
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            Contact us
          </a>
        </div>
      </main>
    </div>
  );
}
