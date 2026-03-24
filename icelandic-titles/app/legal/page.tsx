import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Legal, Terms & Disclaimer — Icelandic Titles",
  description:
    "Full legal disclaimer, terms of service, and privacy policy for Icelandic Titles. Souvenir land plots — no legal land rights conveyed. Icelandic Titles ehf. remains the registered landowner.",
};

// ─── Section wrapper ──────────────────────────────────────────────────────────
function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <h2
        id={`${id}-heading`}
        className="font-display text-xl font-bold text-white mb-4 pb-3 border-b border-white/[0.07]"
      >
        {title}
      </h2>
      <div className="prose-legal">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-white/60 text-sm leading-relaxed mb-4">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2 mb-4 ml-4">
      {children}
    </ul>
  );
}

function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-white/55">
      <span className="text-aurora/50 mt-1 flex-shrink-0" aria-hidden="true">◆</span>
      <span>{children}</span>
    </li>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-base font-bold text-white/85 mt-6 mb-3">{children}</h3>
  );
}

// ─── Table of contents ────────────────────────────────────────────────────────
const TOC = [
  { id: "novelty-disclaimer", label: "Important Novelty Disclaimer" },
  { id: "company-details", label: "Company Details" },
  { id: "what-you-purchase", label: "What You Are Purchasing" },
  { id: "title-usage", label: "Use of the Souvenir Title" },
  { id: "land-ownership", label: "Land Ownership & Management" },
  { id: "icelandic-law", label: "Icelandic Law & Restrictions" },
  { id: "certificates", label: "Certificates & Personalisation" },
  { id: "payment", label: "Payment & Pricing" },
  { id: "delivery", label: "Delivery & Fulfilment" },
  { id: "refunds", label: "Returns & Refunds" },
  { id: "animal-adoptions", label: "Animal Adoptions" },
  { id: "conservation", label: "Conservation Commitment" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "privacy", label: "Privacy & Data" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact", label: "Contact & Complaints" },
];

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-14 overflow-hidden" aria-labelledby="legal-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04091a] to-ice-black" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="label-eyebrow mb-4">Legal</p>
          <h1
            id="legal-heading"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight mb-5"
          >
            Terms, Legal &amp; Disclaimer
          </h1>
          <p className="text-white/50 text-[1.05rem] max-w-xl mx-auto">
            Please read before purchasing. Icelandic Titles is a novelty souvenir gift — not a real estate transaction.
            Last updated: 13 March 2026.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 items-start">

          {/* Table of contents — sticky sidebar */}
          <nav
            className="hidden lg:block sticky top-24 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5"
            aria-label="Legal page table of contents"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4">Contents</p>
            <ol className="space-y-1.5">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-baseline gap-2.5 text-xs text-white/45 hover:text-aurora transition-colors group"
                  >
                    <span className="text-white/20 group-hover:text-aurora/50 tabular-nums w-4 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Legal content */}
          <main className="space-y-12">

            {/* ── CRITICAL NOVELTY DISCLAIMER ── */}
            <section
              id="novelty-disclaimer"
              aria-labelledby="disclaimer-heading"
              className="bg-amber-900/20 border-2 border-ice-gold/40 rounded-2xl p-7 scroll-mt-24"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0" aria-hidden="true">⚖️</span>
                <div>
                  <h2
                    id="disclaimer-heading"
                    className="font-display text-xl font-bold text-ice-gold-light mb-4"
                  >
                    Important Novelty Disclaimer — Please Read First
                  </h2>

                  <div className="space-y-3 text-sm leading-relaxed">
                    <p className="text-ice-gold-light/90 font-semibold">
                      You cannot buy a noble title. This is for enjoyment purposes only.
                    </p>
                    <p className="text-white/70">
                      Icelandic Titles is a <strong className="text-white">novelty souvenir gift</strong>. When you purchase
                      a "plot" from Icelandic Titles, you are buying a personalised souvenir package — including a
                      certificate, GPS coordinates, and the right to use a trademarked souvenir title.{" "}
                      <strong className="text-white">
                        You are not buying land, a legal title, a noble rank, or any real property interest of any kind.
                      </strong>
                    </p>
                    <p className="text-white/70">
                      <strong className="text-white">Icelandic Titles ehf. remains the sole registered landowner</strong>{" "}
                      of all reserve land under the Property Register of Iceland (Þjóðskrá Íslands). No transfer of
                      land ownership takes place at any point, and no such transfer is possible under this arrangement.
                    </p>
                    <p className="text-white/70">
                      The title "Jarl / Lord / Lady of the Icelandic Highlands" is a{" "}
                      <strong className="text-white">registered trademark</strong> for novelty purposes. It is not
                      a legal noble title, is not recognised by any government, heraldic authority, or court of law,
                      and confers no rights, privileges, or legal status whatsoever.
                    </p>
                    <p className="text-white/70">
                      Under the <strong className="text-white">Icelandic Constitution of 17 June 1944</strong>, no
                      nobility exists in Iceland, and no mechanism exists for the private creation, sale, or
                      registration of noble titles under Icelandic law.
                    </p>
                    <div className="bg-black/20 rounded-xl p-4 mt-2 border border-ice-gold/20">
                      <p className="text-ice-gold-light text-xs font-bold uppercase tracking-widest mb-2">
                        Summary in plain language:
                      </p>
                      <ul className="space-y-1 text-xs text-white/65">
                        <li>✗ This is NOT a real land purchase</li>
                        <li>✗ You are NOT buying a legal noble title</li>
                        <li>✗ You CANNOT register ownership with the Icelandic land registry</li>
                        <li>✗ You have NO access rights, mineral rights, or development rights</li>
                        <li>✓ This IS a fun, unique souvenir gift</li>
                        <li>✓ Your purchase DOES fund real conservation work in Iceland</li>
                        <li>✓ You CAN use the souvenir title socially and for entertainment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Company Details ── */}
            <LegalSection id="company-details" title="01. Company Details">
              <P>
                Icelandic Titles is operated by <strong className="text-white">Icelandic Titles ehf.</strong>, a
                private limited company (einkahlutafélag) registered in Iceland.
              </P>
              <UL>
                <LI><strong className="text-white/80">Registered name:</strong> Icelandic Titles ehf.</LI>
                <LI><strong className="text-white/80">Registered address:</strong> {SITE.address.street}, {SITE.address.city} {SITE.address.postcode}, {SITE.address.country}</LI>
                <LI><strong className="text-white/80">Email:</strong> <a href={`mailto:${SITE.email}`} className="text-aurora hover:underline">{SITE.email}</a></LI>
                <LI><strong className="text-white/80">Phone:</strong> <a href={`tel:${SITE.phone}`} className="text-aurora hover:underline">{SITE.phone}</a></LI>
                <LI><strong className="text-white/80">Website:</strong> <a href={SITE.url} className="text-aurora hover:underline">{SITE.url}</a></LI>
              </UL>
            </LegalSection>

            {/* ── What You Purchase ── */}
            <LegalSection id="what-you-purchase" title="02. What You Are Purchasing">
              <P>
                When you place an order with Icelandic Titles, you are purchasing a souvenir product package. Depending
                on the package chosen, this includes some or all of the following:
              </P>
              <UL>
                <LI>A personalised souvenir certificate in digital (PDF) and/or printed form</LI>
                <LI>A trademarked souvenir title (Jarl / Lord / Lady of the Icelandic Highlands)</LI>
                <LI>A symbolic plot reference number corresponding to a GPS-identified area within our nature reserve</LI>
                <LI>GPS coordinates and a What3Words location address for your symbolic plot</LI>
                <LI>Access to our online owner dashboard, 360° virtual reserve tour, and digital handbook</LI>
                <LI>Physical gift items (coaster, map, bookmark, app access card, gift box) depending on pack tier</LI>
                <LI>A tree-planting certificate confirming one native Icelandic tree planted in your name</LI>
              </UL>
              <P>
                The product is a novelty souvenir. <strong className="text-white">No land rights, access rights, mineral
                rights, water rights, or any other property interest is conveyed, implied, or transferred</strong> by
                this purchase.
              </P>
            </LegalSection>

            {/* ── Title Usage ── */}
            <LegalSection id="title-usage" title="03. Use of the Souvenir Title">
              <P>
                The titles "Jarl of the Icelandic Highlands," "Lord of the Icelandic Highlands," and "Lady of the
                Icelandic Highlands" are registered trademarks of Icelandic Titles ehf. Use of these titles is licensed
                to purchasers on the following terms:
              </P>
              <H3>Permitted use</H3>
              <UL>
                <LI>Social use — introducing yourself at social events, parties, or informally</LI>
                <LI>Social media profiles, bios, and handles</LI>
                <LI>Personal correspondence and email signatures, clearly in a social context</LI>
                <LI>Creative writing, games, or roleplay</LI>
                <LI>Any use that is clearly understood by all parties as a novelty or entertainment</LI>
              </UL>
              <H3>Prohibited use</H3>
              <UL>
                <LI>Any use that implies or asserts a real legal noble title or hereditary rank</LI>
                <LI>Any use in official legal or government documents where the title could be mistaken for a real title</LI>
                <LI>Use to deceive another person as to your legal status, rank, or property ownership</LI>
                <LI>Fraudulent use in financial, immigration, or legal proceedings</LI>
                <LI>Resale or sublicensing of the title to third parties</LI>
              </UL>
              <P>
                Icelandic Titles ehf. reserves the right to revoke the licence to use the souvenir title if it is used
                in a manner that is deceptive, harmful, or in breach of these terms.
              </P>
            </LegalSection>

            {/* ── Land Ownership ── */}
            <LegalSection id="land-ownership" title="04. Land Ownership &amp; Management">
              <P>
                <strong className="text-white">Icelandic Titles ehf. is and remains the sole registered owner of
                all reserve land</strong>, recorded in the Property Register of Iceland (Þjóðskrá Íslands / Fasteignaskrá).
                This will not change as a result of any souvenir purchase.
              </P>
              <P>
                We manage our reserve land for conservation purposes in perpetuity. Our stated mission is to maintain
                and improve the ecological value of all reserve land through active land management, tree planting,
                invasive species control, and wildlife monitoring.
              </P>
              <P>
                While we intend to manage the land in perpetuity, as with any private company, Icelandic Titles ehf.
                cannot offer a legally binding guarantee that the land will never be transferred, developed, or subject
                to compulsory purchase under Icelandic law. We commit to publishing annual conservation reports and
                maintaining transparency about land management.
              </P>
            </LegalSection>

            {/* ── Icelandic Law ── */}
            <LegalSection id="icelandic-law" title="05. Icelandic Law &amp; Restrictions">
              <P>
                Purchasers should be aware of the following aspects of Icelandic law that are relevant to this product:
              </P>
              <H3>Noble titles</H3>
              <P>
                Article 59 of the Icelandic Constitution (Stjórnarskrá lýðveldisins Íslands, 17 June 1944) states that
                no privileges may attach to any title of nobility or rank. Iceland is a republic with no monarchy and
                no legally recognised noble titles. The souvenir titles offered by Icelandic Titles are entirely outside
                the scope of Icelandic constitutional law and convey no legal status.
              </P>
              <H3>Land registration</H3>
              <P>
                The Icelandic Act on Real Property Registration (Lög um þinglýsingar, No. 39/1978 as amended) governs
                the formal registration of property rights. No souvenir plot purchase can be registered under this Act,
                and no attempt to register such a purchase should be made. Icelandic Titles ehf. does not and cannot
                register souvenir plot references against any individual purchaser in the official land registry.
              </P>
              <H3>Foreign land ownership</H3>
              <P>
                Note that under Icelandic law, foreign nationals face restrictions on purchasing real property in
                Iceland. This product is not affected by these restrictions because no real property is transferred.
              </P>
              <H3>Consumer protection</H3>
              <P>
                Purchases from Icelandic Titles are governed by Icelandic consumer protection legislation including
                the Consumer Purchases Act (Lög um neytendakaup, No. 48/2003). Consumers within the European Economic
                Area (EEA) also benefit from applicable EU consumer protection directives including the right of
                withdrawal under Directive 2011/83/EU. Our 90-day refund guarantee exceeds the statutory minimum.
              </P>
            </LegalSection>

            {/* ── Certificates ── */}
            <LegalSection id="certificates" title="06. Certificates &amp; Personalisation">
              <P>
                Certificates are personalised digital or printed documents. The certificate is a souvenir item and has
                no legal value beyond its function as a novelty gift. Icelandic Titles accepts no liability for any
                claim arising from third parties regarding the certificate's content or the title it references.
              </P>
              <P>
                If a certificate contains an error due to information provided by the purchaser, Icelandic Titles will
                reissue it upon request at no charge within 14 days of original purchase. After 14 days, an
                administration fee of €9 may apply. We reserve the right to decline certificate requests containing
                offensive, defamatory, or illegal content.
              </P>
            </LegalSection>

            {/* ── Payment ── */}
            <LegalSection id="payment" title="07. Payment &amp; Pricing">
              <P>
                All prices shown are inclusive of any applicable taxes. Payments are processed securely by Stripe, Inc.
                We accept major credit and debit cards, Apple Pay, and Google Pay. Icelandic Titles does not store
                payment card details — these are handled entirely by Stripe in compliance with PCI-DSS standards.
              </P>
              <P>
                Prices are displayed in EUR, USD, or GBP depending on your preference. Currency conversion is for
                display purposes; charges are settled in EUR unless otherwise stated. Exchange rate fluctuations are
                the purchaser's responsibility.
              </P>
            </LegalSection>

            {/* ── Delivery ── */}
            <LegalSection id="delivery" title="08. Delivery &amp; Fulfilment">
              <P>
                Digital certificates and dashboard access are provided immediately upon confirmed payment. Physical
                gift packs are dispatched within 2–3 working days from Reykjavík. Delivery is free worldwide. Estimated
                delivery times: Europe 5–8 days, North America 8–12 days, Rest of World 10–18 days.
              </P>
              <P>
                Icelandic Titles cannot be held responsible for delays caused by customs, postal services, or events
                outside our control. Where a physical pack is demonstrably lost in transit, we will provide a full
                replacement at no additional cost.
              </P>
            </LegalSection>

            {/* ── Refunds ── */}
            <LegalSection id="refunds" title="09. Returns &amp; Refunds">
              <P>
                We offer a <strong className="text-white">90-day money-back guarantee</strong> on all purchases. If
                you are not satisfied with your purchase for any reason, contact us within 90 days of the order date
                for a full refund — no questions asked.
              </P>
              <P>
                Refunds are processed to the original payment method within 2 working days of the refund request
                being received. Processing times vary by financial institution (typically 5–10 business days).
                Physical items do not need to be returned.
              </P>
              <P>
                For consumers within the EEA, the statutory 14-day right of withdrawal under Directive 2011/83/EU
                applies. Our 90-day guarantee extends this right significantly beyond the legal minimum.
              </P>
            </LegalSection>

            {/* ── Animal Adoptions ── */}
            <LegalSection id="animal-adoptions" title="10. Animal Adoptions">
              <P>
                Animal adoption products are annual symbolic sponsorships. They do not confer any ownership of,
                custodial right over, or legal interest in any animal. Adoptions renew annually; the annual fee will
                be charged to your payment method unless cancelled before the renewal date.
              </P>
              <P>
                Icelandic Titles will give 30 days' notice before each annual renewal. Cancellation can be made at
                any time by emailing {SITE.email}. No partial-year refunds are issued for early cancellation unless
                requested within the 90-day guarantee period from the original purchase date.
              </P>
            </LegalSection>

            {/* ── Conservation ── */}
            <LegalSection id="conservation" title="11. Conservation Commitment">
              <P>
                Icelandic Titles commits to allocating a meaningful portion of revenues to active conservation work
                on reserve land. Annual conservation reports are published and made available to all plot owners via
                the owner dashboard.
              </P>
              <P>
                While we make every effort to carry out the conservation activities described, specific outcomes
                (e.g. number of trees surviving to maturity, fox den numbers) cannot be guaranteed due to natural
                variability and environmental factors beyond our control.
              </P>
            </LegalSection>

            {/* ── IP ── */}
            <LegalSection id="intellectual-property" title="12. Intellectual Property">
              <P>
                All content on {SITE.url} — including text, design, images, illustrations, the Icelandic Titles
                name, and the souvenir title trademarks — is the intellectual property of Icelandic Titles ehf. and
                is protected by Icelandic and international copyright and trademark law.
              </P>
              <P>
                Purchasers are granted a personal, non-transferable licence to use their personalised certificate
                and souvenir title for the purposes described in Section 03. No other content may be reproduced,
                distributed, or adapted without prior written permission.
              </P>
            </LegalSection>

            {/* ── Liability ── */}
            <LegalSection id="liability" title="13. Limitation of Liability">
              <P>
                To the fullest extent permitted by applicable law, Icelandic Titles ehf. shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or
                revenues, arising from use of this product.
              </P>
              <P>
                Our total liability for any claim arising from a purchase shall not exceed the amount paid for
                that purchase. Nothing in these terms limits liability for death or personal injury caused by our
                negligence, or for fraudulent misrepresentation.
              </P>
              <P>
                We accept no liability for any consequences arising from use of the souvenir title in a manner
                not contemplated by Section 03, or for any claim by a third party arising from such use.
              </P>
            </LegalSection>

            {/* ── Privacy ── */}
            <LegalSection id="privacy" title="14. Privacy &amp; Data">
              <P>
                Icelandic Titles processes personal data (name, email address, postal address, payment information)
                to fulfil orders and provide the owner dashboard. We do not sell personal data to third parties.
              </P>
              <P>
                Data is processed in accordance with the EU General Data Protection Regulation (GDPR) and the
                Icelandic Act on Data Protection and the Processing of Personal Data (Lög um persónuvernd og
                vinnslu persónuupplýsinga, No. 90/2018).
              </P>
              <UL>
                <LI>You may request access to, correction of, or deletion of your personal data at any time by emailing {SITE.email}</LI>
                <LI>Order data is retained for 7 years for accounting and legal compliance purposes</LI>
                <LI>Payment data is stored solely by Stripe — Icelandic Titles holds no payment card data</LI>
                <LI>Marketing emails require explicit opt-in and may be unsubscribed at any time</LI>
              </UL>
            </LegalSection>

            {/* ── Governing Law ── */}
            <LegalSection id="governing-law" title="15. Governing Law">
              <P>
                These terms are governed by the laws of Iceland. Any disputes shall be subject to the exclusive
                jurisdiction of the District Court of Reykjavík (Héraðsdómur Reykjavíkur), except where mandatory
                consumer protection laws in the purchaser's country of residence provide for local jurisdiction.
              </P>
              <P>
                For EEA consumers, disputes may also be submitted to the EU Online Dispute Resolution platform at{" "}
                <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-aurora hover:underline">
                  ec.europa.eu/odr
                </a>.
              </P>
            </LegalSection>

            {/* ── Contact ── */}
            <LegalSection id="contact" title="16. Contact &amp; Complaints">
              <P>
                For any questions about these terms, your order, or to make a complaint, please contact us:
              </P>
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 space-y-3 mt-2">
                {[
                  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                  { label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
                  { label: "Post", value: `${SITE.address.street}, ${SITE.address.city} ${SITE.address.postcode}, ${SITE.address.country}`, href: null },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex gap-3 text-sm">
                    <span className="text-white/30 w-12 flex-shrink-0">{label}</span>
                    {href ? (
                      <a href={href} className="text-aurora hover:underline">{value}</a>
                    ) : (
                      <span className="text-white/60">{value}</span>
                    )}
                  </div>
                ))}
                <div className="flex gap-3 text-sm">
                  <span className="text-white/30 w-12 flex-shrink-0">Hours</span>
                  <span className="text-white/60">Mon–Fri, 09:00–17:00 GMT</span>
                </div>
              </div>
              <P>
                We aim to respond to all enquiries within one working day. Formal complaints will receive a written
                response within 5 working days.
              </P>
            </LegalSection>

            {/* Bottom links */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-white/[0.07] text-xs text-white/35">
              <Link href="/faq" className="hover:text-aurora transition-colors">FAQ</Link>
              <span aria-hidden="true">·</span>
              <Link href="/buy-a-plot" className="hover:text-aurora transition-colors">Shop</Link>
              <span aria-hidden="true">·</span>
              <Link href="/the-land" className="hover:text-aurora transition-colors">Our Reserves</Link>
              <span aria-hidden="true">·</span>
              <span className="ml-auto">© {new Date().getFullYear()} Icelandic Titles ehf. All rights reserved.</span>
            </div>

          </main>
        </div>
      </div>
    </>
  );
}
