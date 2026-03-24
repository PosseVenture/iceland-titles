import type { Metadata, Viewport } from "next";
import { Cinzel, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { SITE } from "@/lib/data";

// ─── Google Fonts ─────────────────────────────────────────────────────────────
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
});

// ─── Metadata & SEO ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // Base URL for resolving relative URLs in metadata
  metadataBase: new URL(SITE.url),

  title: {
    default: `${SITE.name} – ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.description,

  keywords: [
    "Iceland land ownership",
    "souvenir plot Iceland",
    "Jarl of Iceland",
    "Lord of Iceland",
    "Lady of Iceland",
    "Icelandic noble title",
    "Iceland gift",
    "Iceland conservation",
    "Thingvellir reserve",
    "Landmannalaugar",
    "Vatnajokull",
    "unique gift ideas",
    "personalised certificate Iceland",
    "Icelandic Titles",
  ],

  authors: [{ name: "Icelandic Titles ehf." }],
  creator: "Icelandic Titles ehf.",
  publisher: "Icelandic Titles ehf.",

  // ── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} – Become a Jarl, Lord or Lady of the Icelandic Highlands`,
    description: SITE.description,
    images: [
      {
        // TODO: Replace with actual Iceland hero image uploaded to /public/og-image.jpg
        // Recommended: Northern lights over Thingvellir lake — 1200×630px
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aurora borealis dancing over a frozen Icelandic lake — Icelandic Titles",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X Card ────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} – Become a Jarl, Lord or Lady of Iceland`,
    description: SITE.description,
    images: ["/og-image.jpg"],
    // creator: "@icelandictitles", // uncomment once Twitter account created
  },

  // ── Robots ──────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ───────────────────────────────────────────────────────────────────
  icons: {
    // TODO: Generate these with https://realfavicongenerator.net
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // ── Manifest ────────────────────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── Verification ────────────────────────────────────────────────────────────
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN",
  // },
};

// ─── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A2540" },
    { media: "(prefers-color-scheme: light)", color: "#F0F8FF" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cinzel.variable} ${raleway.variable}`}
    >
      <head>
        {/* Preconnect to image CDNs for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.pexels.com" />

        {/*
          Structured Data — JSON-LD for rich search results
          TODO: Add after going live with real business details
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
              description: SITE.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address.street,
                addressLocality: SITE.address.city,
                postalCode: SITE.address.postcode,
                addressCountry: "IS",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: SITE.phone,
                contactType: "customer service",
                availableLanguage: ["English", "Icelandic"],
              },
              sameAs: Object.values(SITE.social),
            }),
          }}
        />
      </head>

      <body className="font-body bg-ice-black text-ice-white antialiased">
        <Providers>
          {/* Skip to main content — Accessibility */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          {/* Global Navigation */}
          <Navbar />

          {/* Cart Drawer (global, portal-free) */}
          <CartDrawer />

          {/* Page Content */}
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>

          {/* Global Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
