// ─── Product / Plot Types ─────────────────────────────────────────────────────

export type PlotSize = "1sqft" | "5sqft" | "10sqft" | "bundle-2person";
export type ReserveSlug = "thingvellir" | "highland-view" | "glacier-estate";
export type Currency = "EUR" | "USD" | "GBP";
export type TitleStyle = "Jarl" | "Lord" | "Lady";
export type DeliveryType = "digital" | "physical" | "both";
export type FilterSize = "all" | "1sqft" | "5sqft" | "10sqft" | "bundle";
export type FilterDelivery = "all" | "digital" | "physical";

export interface Reserve {
  slug: ReserveSlug;
  name: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeVariant: "gold" | "aurora" | "blue";
  coordinates: { lat: number; lng: number };
  what3words: string;
  heroImage: string;
  heroImageAlt: string;
  features: string[];
  conservation: string;
}

export interface IncludedItem {
  icon: string;
  label: string;
  description?: string;
  digitalOnly?: boolean;
  physicalOnly?: boolean;
}

export interface PlotProduct {
  id: string;
  size: PlotSize;
  sqft: number | null;
  titleName: string;
  tagline: string;
  subtitle: string;
  description: string;
  deliveryType: DeliveryType;
  prices: Record<Currency, number>;
  originalPrices?: Record<Currency, number>;
  stripePriceId: Record<Currency, string>;
  featured: boolean;
  bestSeller: boolean;
  includes: IncludedItem[];
  notIncludes?: string[];
  accentColor: string;
  borderColor: string;
  badgeText?: string;
}

export interface CartItem {
  cartItemId: string; // unique per cart slot
  productId: string;
  productName: string;
  reserve: ReserveSlug;
  reserveName: string;
  size: PlotSize;
  sqft: number | null;
  price: number;
  currency: Currency;
  titleStyle: TitleStyle;
  recipientName: string;
  giftMessage?: string;
  addOns: string[];
  deliveryType: DeliveryType;
  // For bundles
  recipient2Name?: string;
  titleStyle2?: TitleStyle;
}

export interface GiftAddOn {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: number;
  priceLabel: string;
  annual: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  initials: string;
  avatarColor: string;
}

export interface GuidedTour {
  id: string;
  name: string;
  reserve: ReserveSlug;
  duration: string;
  groupSize: string;
  difficulty: "Easy" | "Easy–Moderate" | "Moderate" | "Moderate–Hard";
  description: string;
  price: number;
  image: string;
  imageAlt: string;
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}
