import type { Metadata, Viewport }   from "next";
import { Cormorant_Garamond, Crimson_Text } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CartProvider }  from "@/components/providers/CartProvider";
import { Navbar }        from "@/components/layout/Navbar";
import { Footer }        from "@/components/layout/Footer";
import { CartDrawer }    from "@/components/shop/CartDrawer";
import { SITE }          from "@/lib/data";

/* ─── Google Fonts ──────────────────────────────────────────────────────────
   Cormorant Garamond — old-world elegance, echo of medieval parchment
   Crimson Text        — warm literary serif for body copy
   Both loaded via next/font (zero layout shift, self-hosted)
   ──────────────────────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  subsets:  ["latin"],
  weight:   ["300", "400", "600", "700"],
  style:    ["normal", "italic"],
  variable: "--font-cormorant",
  display:  "swap",
  preload:  true,
});

const crimson = Crimson_Text({
  subsets:  ["latin"],
  weight:   ["400", "600"],
  style:    ["normal", "italic"],
  variable: "--font-crimson",
  display:  "swap",
  preload:  true,
});

/* ─── Root Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default:  `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,

  keywords: [
    "Iceland souvenir",
    "Snæfellsjökull",
    "Snæfellsnes",
    "Jarl of Iceland",
    "Lord of Iceland",
    "Lady of Iceland",
    "Bárður Snæfellsás",
    "huldufólk",
    "hidden people Iceland",
    "Iceland gift",
    "souvenir plot Iceland",
    "glacier guardian spirit",
    "mystical Iceland",
  ],

  authors:   [{ name: "Icelandic Titles ehf.", url: SITE.url }],
  creator:   "Icelandic Titles ehf.",
  publisher: "Icelandic Titles ehf.",

  /* ── Open Graph ──────────────────────────────────────────────────────── */
  openGraph: {
    type:      "website",
    locale:    "en_GB",
    url:       SITE.url,
    siteName:  SITE.name,
    title:     `${SITE.name} — Become a Jarl, Lord or Lady of Snæfellsnes`,
    description: SITE.description,
    images: [
      {
        // OG image: Northern lights over Snæfellsjökull glacier — Unsplash photo-1519681393784-d120267933ba
        url:    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
        width:  1200,
        height: 630,
        alt:    "Vivid green and purple northern lights dancing above the snow-capped Snæfellsjökull glacier at night, Snæfellsnes Peninsula, Iceland — mystical energy centre and guardian spirit landscape",
      },
    ],
  },

  /* ── Twitter / X ─────────────────────────────────────────────────────── */
  twitter: {
    card:        "summary_large_image",
    title:       `${SITE.name} — Become a Jarl, Lord or Lady of Snæfellsnes`,
    description: SITE.description,
    images:      ["https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80"],
  },

  /* ── Robots ──────────────────────────────────────────────────────────── */
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  /* ── Icons ───────────────────────────────────────────────────────────── */
  icons: {
    icon:  [
      { url: "/favicon.ico",   sizes: "any"         },
      { url: "/icon.svg",      type:  "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#060D19" },
    { media: "(prefers-color-scheme: light)", color: "#0A2540" },
  ],
  width:        "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ─── Root Layout ────────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${crimson.variable}`}
    >
      {/* JSON-LD Structured Data */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context":   "https://schema.org",
              "@type":      "Organization",
              name:         SITE.name,
              url:          SITE.url,
              description:  SITE.description,
              address: {
                "@type":         "PostalAddress",
                streetAddress:   SITE.address.street,
                addressLocality: SITE.address.city,
                postalCode:      SITE.address.postcode,
                addressCountry:  "IS",
              },
              contactPoint: {
                "@type":           "ContactPoint",
                email:             SITE.email,
                contactType:       "customer service",
                availableLanguage: "English",
              },
              sameAs: Object.values(SITE.social),
            }),
          }}
        />
      </head>

      <body className="bg-ice-black text-ice-white font-body antialiased">
        <ThemeProvider>
          <CartProvider>

            {/* ── Accessibility: Skip to main content ──────────────── */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>

            {/* ── Global Navigation ─────────────────────────────────── */}
            <Navbar />

            {/* ── Page Content ──────────────────────────────────────── */}
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>

            {/* ── Global Footer ─────────────────────────────────────── */}
            <Footer />

            {/* ── Cart Drawer (portal at root) ───────────────────────── */}
            <CartDrawer />

          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
