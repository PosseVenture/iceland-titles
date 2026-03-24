# ❄ Icelandic Titles — Next.js 15 Website

> Become a Jarl, Lord or Lady of the Icelandic Highlands

A production-ready e-commerce website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Stripe. Souvenir land plots in Iceland's breathtaking nature reserves.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.18+ (or 20+)
- npm 9+ (or pnpm / yarn)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Stripe keys:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_KEY
```

Get free test keys at: https://dashboard.stripe.com/test/apikeys

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Project Structure

```
icelandic-titles/
├── app/
│   ├── api/cart/          # Stripe payment intent API route
│   ├── buy-a-plot/        # Pricing & checkout page (Part 3)
│   ├── the-land/          # Reserve detail pages (Part 2)
│   ├── adopt-a-horse/     # Animal adoption (Part 4)
│   ├── guided-tours/      # Tour booking (Part 5)
│   ├── dashboard/         # Owner dashboard (Part 6)
│   ├── faq/               # FAQ page (Part 5)
│   ├── globals.css        # Global styles + CSS tokens
│   ├── layout.tsx         # Root layout (Navbar, Footer, Providers)
│   └── page.tsx           # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Responsive nav + currency + cart + theme toggle
│   │   ├── Footer.tsx     # Full footer with Trustpilot + payment badges
│   │   └── CartDrawer.tsx # Slide-in cart drawer
│   ├── sections/
│   │   └── Hero.tsx       # Full-screen hero with aurora + animations
│   ├── ui/
│   │   ├── button.tsx     # CVA button variants
│   │   ├── badge.tsx      # Badge variants
│   │   └── section-wrapper.tsx  # Scroll-reveal section wrapper
│   └── providers/
│       └── index.tsx      # ThemeProvider wrapper
├── hooks/
│   ├── useScrollPosition.ts
│   └── useMediaQuery.ts
├── lib/
│   ├── data.ts            # All static content (reserves, products, reviews)
│   ├── store.ts           # Zustand cart store
│   └── utils.ts           # cn(), formatPrice(), helpers
├── public/
│   ├── robots.txt
│   └── site.webmanifest
├── types/
│   └── index.ts           # All TypeScript types
├── tailwind.config.ts     # Iceland color palette + custom tokens
├── next.config.ts         # Image domains, optimisations
└── .env.local             # Environment variables (git-ignored)
```

---

## 🎨 Design System

### Iceland Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `ice-black` | `#060D19` | Page background |
| `ice-deep` | `#0A2540` | Brand primary blue |
| `ice-navy` | `#0D2F52` | Surfaces |
| `aurora` | `#00D4FF` | Accent / links |
| `aurora-violet` | `#7C3AED` | Secondary accent |
| `aurora-green` | `#10B981` | Success / conservation |
| `ice-gold` | `#F59E0B` | CTAs / premium |

### Typography
- **Display**: Cinzel (Norse/medieval feel) — headings, logos
- **Body**: Raleway (modern, elegant) — paragraphs, UI

### CSS Utilities
```css
.label-eyebrow      /* Cinzel, uppercase, aurora color */
.glass-card         /* Frosted glass card with border */
.btn-gold           /* Gold gradient CTA button */
.btn-ghost          /* Glass ghost button */
.btn-aurora         /* Aurora-tinted button */
.text-gradient-aurora  /* Aurora cyan → violet gradient text */
.text-gradient-gold    /* Gold gradient text */
.section            /* Standard vertical padding */
.divider-gold       /* 60px gold gradient divider */
.aurora-orb         /* Animated decorative background orb */
```

---

## 🧩 Key Features (Part 1)

- ✅ **Next.js 15** App Router with TypeScript
- ✅ **Tailwind CSS** with full Iceland color system
- ✅ **Framer Motion** animations (staggered hero, scroll reveals)
- ✅ **Dark mode** via `next-themes` (aurora dark theme default)
- ✅ **Responsive Navbar** — desktop + mobile slide-in menu
- ✅ **Currency Switcher** — EUR / USD / GBP (Zustand)
- ✅ **Cart Icon** with item count badge + full CartDrawer
- ✅ **Footer** — address, payment badges, Trustpilot, legal links
- ✅ **Hero Section** — aurora background, animated headings, trust badges
- ✅ **SEO Metadata** — title templates, OG tags, Twitter cards, JSON-LD
- ✅ **WCAG 2.2 AA** — skip links, aria-labels, focus rings, reduced motion
- ✅ **Stripe API route** scaffolded and ready to activate

---

## 🔌 Stripe Integration

### Test Mode (Development)
1. Create a free account at [stripe.com](https://stripe.com)
2. Copy your **test** publishable + secret keys from the Dashboard
3. Add to `.env.local`
4. Uncomment the Stripe code in `app/api/cart/route.ts`

### Live Mode (Production)
1. Complete Stripe onboarding
2. Replace `pk_test_` → `pk_live_` in environment variables
3. Set up a webhook endpoint at `/api/webhook` (Part 6)
4. Create products in Stripe Dashboard and update `stripePriceId` in `lib/data.ts`

---

## 📸 Adding Iceland Photos

Replace `// TODO` image placeholders throughout with real photos:

### Recommended free sources:
- **Unsplash**: https://unsplash.com/s/photos/iceland
- **Pexels**: https://pexels.com/search/iceland/

### Hero image (1920×1080 minimum):
```tsx
// In components/sections/Hero.tsx — uncomment the <Image> block:
<Image
  src="https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=1920&q=90"
  alt="Northern lights in vivid greens and purples rippling over a frozen Icelandic lake"
  fill
  priority
  className="object-cover opacity-40"
/>
```

---

## 🗺 Roadmap (Remaining Parts)

| Part | Features |
|------|----------|
| **Part 2** | StatsBar, HowItWorks, Reserves section, The Land page |
| **Part 3** | Pricing cards, Certificate preview, Buy a Plot page, Stripe checkout |
| **Part 4** | Gift packs, Adopt an Animal, Reviews, Testimonials |
| **Part 5** | Virtual tour, Plot locator map, FAQ, Guided tours, Guarantee |
| **Part 6** | Owner Dashboard, Stripe webhooks, Email (Resend), Order confirmation |

---

## 🌍 Accessibility

- Skip-to-content link
- ARIA labels on all interactive elements
- `aria-current="page"` on active nav links
- Focus trap in Cart Drawer and modals
- `prefers-reduced-motion` respected (all animations disabled)
- Semantic HTML (`<nav>`, `<main>`, `<footer>`, `<header>`, `<article>`, `<section>`)
- Color contrast meets WCAG AA throughout

---

## 📄 License

© 2024 Icelandic Titles ehf. All rights reserved.
