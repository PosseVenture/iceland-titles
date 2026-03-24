# Icelandic Titles — Complete Developer Guide

> *Become a Jarl, Lord or Lady of the Icelandic Highlands and Help Restore an Icelandic Nature Reserve*

A production-ready Next.js 15 e-commerce website selling souvenir plots of land in the mystical **Snæfellsnes Reserve**, Iceland — home of guardian spirit Bárður Snæfellsás and the huldufólk hidden people.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Run Locally](#run-locally)
3. [Project Structure](#project-structure)
4. [Environment Variables](#environment-variables)
5. [Stripe Payments Setup](#stripe-payments-setup)
6. [PayPal Setup](#paypal-setup)
7. [Deploy to Vercel](#deploy-to-vercel)
8. [Go Live Checklist](#go-live-checklist)
9. [Image Replacement Checklist](#image-replacement-checklist)
10. [Accessibility Notes](#accessibility-notes)
11. [Conservation & Lore](#conservation--lore)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS 3 + custom design tokens |
| Animations | Framer Motion 11 |
| State | Zustand 5 (cart persistence) |
| Payments | Stripe (Checkout Sessions) + PayPal stub |
| Fonts | Cormorant Garamond + Crimson Text (Google Fonts) |
| Icons | Lucide React |
| Images | next/image with Unsplash CDN |
| Deployment | Vercel (recommended) |

---

## Run Locally

### Prerequisites
- Node.js 18.17+ (Node 20 LTS recommended)
- npm 9+ or pnpm 8+
- A free [Stripe account](https://dashboard.stripe.com) for test payments

### Steps

```bash
# 1. Clone or unzip the project
cd icelandic-titles

# 2. Install dependencies (~60 seconds)
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# → Edit .env.local with your Stripe test keys (see below)

# 4. Start dev server
npm run dev
# → http://localhost:3000
```

### Minimum .env.local for local dev

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
```

All pages will work in demo mode. Checkout redirects to Stripe test mode.

---

## Project Structure

```
icelandic-titles/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, Navbar, Footer
│   ├── page.tsx                # Homepage (8 sections)
│   ├── globals.css             # Full design system
│   ├── buy-a-plot/page.tsx     # Shop page — 3 products, Plant a Tree add-on
│   ├── the-land/
│   │   ├── page.tsx            # Reserve overview
│   │   └── snaefellsnes/page.tsx # Full glacier detail
│   ├── adopt/page.tsx          # Animal adoption stub
│   ├── guided-tours/page.tsx   # Tours stub
│   ├── welcome/page.tsx        # Owner dashboard (demo)
│   ├── faq/page.tsx            # 24-question FAQ
│   ├── legal/page.tsx          # Full legal notices
│   ├── contact/page.tsx        # Contact form
│   ├── checkout/page.tsx       # Stripe checkout
│   ├── order-success/page.tsx  # Post-payment success
│   ├── order-cancelled/page.tsx
│   ├── not-found.tsx           # 404 — "The huldufólk hid this page"
│   ├── sitemap.ts              # Auto sitemap
│   └── api/
│       ├── checkout/route.ts   # POST → Stripe Checkout Session
│       └── webhook/route.ts    # Stripe webhook handler
│
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── sections/               # Hero, WhatYouGet, FeaturedProducts, etc.
│   ├── land/                   # /the-land components (11 files)
│   ├── shop/                   # ProductCard, CartDrawer, etc.
│   ├── dashboard/              # CertificateModal, DashboardPlotMap
│   ├── checkout/               # CheckoutClient
│   ├── providers/              # ThemeProvider, CartProvider
│   └── ui/                     # Button, Badge, GlassCard, LoadingSkeleton, etc.
│
├── lib/
│   ├── data.ts                 # All site data (products, reserve, FAQs, reviews)
│   ├── store.ts                # Zustand cart store
│   ├── utils.ts                # cn(), formatPrice(), etc.
│   └── demo-user.ts            # Demo dashboard user data
│
├── types/index.ts              # All TypeScript interfaces
├── tailwind.config.ts          # Full Iceland palette + animations
└── .env.local.example          # Environment variable template
```

---

## Environment Variables

Copy `.env.local.example` → `.env.local` and fill in:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full URL: `https://icelandictitles.com` in prod |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Yes | `pk_test_...` (test) or `pk_live_...` (live) |
| `STRIPE_SECRET_KEY` | Yes | `sk_test_...` (test) or `sk_live_...` (live) |
| `STRIPE_WEBHOOK_SECRET` | Prod | From Stripe Dashboard → Webhooks |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | Optional | PayPal developer dashboard |
| `RESEND_API_KEY` | Optional | For order confirmation emails |
| `RESEND_FROM` | Optional | `hello@icelandictitles.com` |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 ID |

**Never commit `.env.local` to version control.**

---

## Stripe Payments Setup

### Test mode (development)

1. Create account at [dashboard.stripe.com](https://dashboard.stripe.com)
2. Go to **Developers → API keys**
3. Copy **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
4. Copy **Secret key** → `STRIPE_SECRET_KEY`
5. Run `npm run dev` and test checkout with card `4242 4242 4242 4242`

### Create Stripe Products (optional — for fixed price IDs)

The checkout currently uses `price_data` (dynamic pricing), so no Stripe products
are required. If you want fixed Stripe Price IDs:

1. Dashboard → Products → Add product for each plot size
2. Copy the Price IDs into `lib/data.ts` → `stripePriceIds`
3. Update `app/api/checkout/route.ts` to use `price: priceId` instead of `price_data`

### Webhook (production)

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to local dev server
stripe listen --forward-to localhost:3000/api/webhook

# Copy the webhook signing secret shown in terminal
# → STRIPE_WEBHOOK_SECRET in .env.local
```

In production, create a webhook endpoint in Stripe Dashboard:
- URL: `https://icelandictitles.com/api/webhook`
- Events: `checkout.session.completed`, `payment_intent.payment_failed`, `charge.refunded`

### Go live with Stripe

1. Complete Stripe business verification
2. Switch `pk_test_...` → `pk_live_...` and `sk_test_...` → `sk_live_...`
3. Update webhook endpoint to production URL
4. Test with a real small transaction

---

## PayPal Setup

1. Create app at [developer.paypal.com](https://developer.paypal.com)
2. Copy **Client ID** → `NEXT_PUBLIC_PAYPAL_CLIENT_ID` in `.env.local`
3. Install SDK: `npm i @paypal/react-paypal-js`
4. In `app/layout.tsx`, wrap `<CartProvider>` with:
   ```tsx
   import { PayPalScriptProvider } from "@paypal/react-paypal-js";
   <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID! }}>
   ```
5. In `components/checkout/CheckoutClient.tsx`, replace the `PayPalButton` stub with:
   ```tsx
   import { PayPalButtons } from "@paypal/react-paypal-js";
   <PayPalButtons
     createOrder={async () => { /* create PayPal order via API */ }}
     onApprove={async (data) => { /* capture payment */ }}
   />
   ```

---

## Deploy to Vercel

### One-click deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts:
# - Link to existing project or create new
# - Framework: Next.js (auto-detected)
# - Root directory: ./ (default)
```

### Set environment variables on Vercel

```bash
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production
vercel env add STRIPE_SECRET_KEY production
vercel env add STRIPE_WEBHOOK_SECRET production
vercel env add NEXT_PUBLIC_SITE_URL production
# etc.
```

Or set them in **Vercel Dashboard → Project → Settings → Environment Variables**.

### Custom domain

1. Vercel Dashboard → Project → Settings → Domains
2. Add `icelandictitles.com` and `www.icelandictitles.com`
3. Follow DNS instructions (add A record / CNAME to your registrar)
4. SSL is automatic via Let's Encrypt

### Production build test

```bash
npm run build    # Should complete with no errors
npm run start    # Test production build locally at :3000
```

---

## Go Live Checklist

### Before launch

- [ ] Switch Stripe keys from `pk_test_` / `sk_test_` to `pk_live_` / `sk_live_`
- [ ] Set `NEXT_PUBLIC_SITE_URL` to `https://icelandictitles.com`
- [ ] Create Stripe webhook endpoint in Dashboard → Webhooks
- [ ] Test a real payment end-to-end (refund immediately after)
- [ ] Implement order fulfilment in `app/api/webhook/route.ts` (email + PDF)
- [ ] Implement contact form API in `app/api/contact/route.ts` (Resend)
- [ ] Add `RESEND_API_KEY` and configure order confirmation emails
- [ ] Replace all `imagePlaceholder: true` items with real photos
- [ ] Generate and upload real `public/images/og-image.jpg` (1200×630px)
- [ ] Update `SITE.trustpilot.url` to your real Trustpilot profile
- [ ] Add real `NEXT_PUBLIC_GA_ID` for analytics
- [ ] Add Cookie consent banner (required for GDPR + Google Analytics)
- [ ] Fill in real Kennitala (company registration number) in `/legal` page
- [ ] Test all pages with screen reader (NVDA / VoiceOver)
- [ ] Run Lighthouse audit → aim for 90+ on all scores
- [ ] Submit sitemap to Google Search Console: `https://icelandictitles.com/sitemap.xml`

### Performance

```bash
# Run Lighthouse locally
npx lighthouse http://localhost:3000 --view

# Check bundle size
npm run build && npx @next/bundle-analyzer
```

### Security

- All Stripe keys are server-side only (`STRIPE_SECRET_KEY` never exposed to client)
- Webhook signature verified with `stripe.webhooks.constructEvent()`
- No sensitive data in localStorage (only cart items — non-sensitive)
- CORS: Next.js API routes are same-origin only by default

---

## Image Replacement Checklist

All placeholder images have been replaced with real Unsplash photos:

| Location | Photo ID | Subject |
|---|---|---|
| Homepage hero (`Hero.tsx`) | `1519681393784` | Northern lights above glacier |
| Hero skeleton (`HeroSkeleton.tsx`) | `1519681393784` | Northern lights above glacier |
| Reserve teaser (`ReserveTeaser.tsx`) | `1506905925346` | Glacier under starry sky |
| Reserve detail hero (`ReserveDetailHero.tsx`) | `1540979388789` | Golden sunset ridges |
| Reserve overview card (`ReserveOverviewCard.tsx`) | `1540979388789` | Golden sunset ridges |
| Gallery image 1 (dawn) | `1506905925346` | Glacier panorama |
| Gallery image 2 (aurora) | `1519681393784` | Northern lights |
| Gallery image 3 (lava fields) | `1557683316` | Misty glacier |
| Gallery image 4 (black beach) | `1540979388789` | Golden ridges |
| Gallery image 5 (puffins) | `1519681393784` | Northern lights |
| Gallery image 6 (Arnarstapi) | `1506905925346` | Wide panorama |
| Certificate modal background | `1557683316` | Glacial ice texture |
| Social OG images (all pages) | `1519681393784` | Northern lights |
| Icelandic Horse (adopt) | `1553284965` | Icelandic horse |
| Arctic Fox (adopt) | `1474511320723` | Arctic fox |
| Puffin (adopt) | `1559827291` | Atlantic puffin |

**Remaining action:** Generate a real `1200×630px` OG image and save as `public/images/og-image.jpg` for social sharing (current OG uses the Unsplash URL directly, which works but may be slow for crawlers).

---

## Accessibility Notes

This site targets **WCAG 2.2 Level AA** throughout:

- **Skip link**: `<a href="#main-content" className="skip-link">` in `app/layout.tsx`
- **Focus rings**: Custom glacier-blue rings on all interactive elements via `:focus-visible`
- **ARIA**: All modals use `role="dialog" aria-modal="true"`, all images have descriptive `alt`
- **Reduced motion**: All animations disabled via `@media (prefers-reduced-motion: reduce)`
- **Colour contrast**: All text meets 4.5:1 ratio against dark backgrounds
- **Keyboard**: Gallery lightbox (`←/→/Esc`), FAQ accordion, tour booking modal — all keyboard navigable
- **Screen readers**: `aria-live` on cart count, `aria-invalid`/`role="alert"` on all form errors
- **Semantic HTML**: `<nav>`, `<main>`, `<aside>`, `<address>`, `<figure>`, `<dl>` used correctly

---

## Conservation & Lore

All references to **Bárður Snæfellsás**, **huldufólk** (hidden people / elves), **spiritual energy centres**, and related Icelandic folklore are presented as cultural heritage content for appreciation and entertainment. They are clearly disclaimed on the `/legal` page as cultural folklore, not factual claims.

The Snæfellsnes Reserve conservation programme is genuine. A portion of every sale funds:
- Native Icelandic birch reforestation (Iceland was once 25–40% forested; <2% today)
- Arctic fox and seabird habitat protection
- Lava field trail maintenance
- Glacier monitoring and environmental research

---

*Built with ❄ for the mystical Snæfellsnes peninsula.*
*Bárður Snæfellsás watches over this codebase.*
