# Icelandic Titles — Part 5 (Complete Source)

Full Next.js 15 source for the Icelandic Titles e-commerce site.
Parts 1–5 complete. Part 6 (Stripe webhooks + real PDF + email) is next.

## Pages included

| Route | File | Status |
|---|---|---|
| `/` | `app/page.tsx` | ✅ Home (Hero, StatsBar, HowItWorks, Reserves, GiftPacks, AdoptAnAnimal, Reviews) |
| `/buy-a-plot` | `app/buy-a-plot/page.tsx` | ✅ Full shop with filters |
| `/the-land` | `app/the-land/page.tsx` | ✅ Reserve deep-dive |
| `/adopt-a-horse` | `app/adopt-a-horse/page.tsx` | ✅ Full adoption shop |
| `/guided-tours` | `app/guided-tours/page.tsx` | ✅ Tour cards + 3-step booking form |
| `/welcome` | `app/welcome/page.tsx` | ✅ Owner dashboard (demo) |
| `/dashboard` | `app/dashboard/page.tsx` | ✅ Redirects → /welcome |
| `/faq` | `app/faq/page.tsx` | ✅ 30 Q&As, 7 categories |
| `/legal` | `app/legal/page.tsx` | ✅ Full legal + novelty disclaimer |
| `/api/cart` | `app/api/cart/route.ts` | 🔧 Stripe PaymentIntent stub |

## Welcome Dashboard features (/welcome)

- Personalised greeting: "Welcome back, Lord James!"
- **Plot Map Cards** — stylised Iceland SVG with plot dot positioned from real GPS coords, Google Maps deep-link, What3Words external link, copy-coords button
- **Certificate Modal** — Iceland SVG map background, ornamental borders, PDF download (sim)
- **Real Canvas 3D Terrain Explorer** — procedural terrain seeded from plot GPS, drag-to-orbit, scroll-to-zoom, auto-rotate, gold animated pin
- **360° Virtual Tour** — 4-scene panorama switcher (Part 6: embed Kuula/Matterport)
- **Virtual Owner's Handbook** — 8-chapter accordion
- **Upcoming Tour Banner** — live day countdown
- **Adoption Cards** — renewal countdown, urgent warning < 30 days
- **Conservation Impact** — 4 metric stat cards
- **Quick Links** — Buy, Adopt, Tours, FAQ

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy env template
cp .env.local.example .env.local
# Add your Stripe publishable key (optional for dev)

# 3. Run dev server
npm run dev
# → http://localhost:3000
```

## .env.local (optional for Part 5)

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_KEY
```

## Tech stack

- **Next.js 15** App Router + TypeScript
- **Tailwind CSS** with Iceland design tokens (ice-gold, aurora, aurora-violet, aurora-green)
- **Framer Motion** for all animations
- **Zustand** for cart state
- **Lucide React** icons
- **Google Fonts**: Cinzel (display) + Raleway (body)

## Part 6 TODO items

- `// TODO Part 6: real PDF via /api/certificate` in welcome/page.tsx
- `// TODO Part 6: embed Kuula/Matterport 360` in virtual tour section
- `// TODO Part 6: POST /api/tour-booking` in guided-tours/page.tsx
- Stripe webhook handler (`/api/webhooks/stripe`)
- Resend email (order confirmation, certificate delivery)
- Real auth for `/welcome` (NextAuth or Clerk)
