// ─────────────────────────────────────────────────────────────────────────────
// Icelandic Titles — Global Type Definitions
// ─────────────────────────────────────────────────────────────────────────────

// ─── Currency ────────────────────────────────────────────────────────────────
export type Currency       = "EUR" | "USD" | "GBP";
export type CurrencySymbol = "€"   | "$"   | "£";

// ─── Product ─────────────────────────────────────────────────────────────────
export type PlotSize     = "1sqft" | "5sqft" | "10sqft";
export type DeliveryType = "digital" | "physical";
export type TitleStyle   = "Jarl" | "Lord" | "Lady";

export interface PlotProduct {
  id:           string;
  size:         PlotSize;
  sqft:         number;
  /** e.g. "Jarl of Snæfellsnes" */
  titleName:    string;
  tagline:      string;
  description:  string;
  deliveryType: DeliveryType;
  prices:       Record<Currency, number>;
  /** Stripe price IDs — fill in from Stripe dashboard */
  stripePriceIds: Record<Currency, string>;
  featured:     boolean;
  bestSeller:   boolean;
  includes:     ProductInclude[];
  addOns?:      AddOnProduct[];
}

export interface ProductInclude {
  icon:    string;
  label:   string;
  detail?: string;
}

export interface AddOnProduct {
  id:          string;
  name:        string;
  description: string;
  prices:      Record<Currency, number>;
  icon:        string;
}

// ─── Cart ─────────────────────────────────────────────────────────────────────
export interface CartItem {
  cartItemId:    string;   // unique per slot
  productId:     string;
  productName:   string;
  plotSize:      PlotSize;
  price:         number;
  currency:      Currency;
  titleStyle:    TitleStyle;
  recipientName: string;
  giftMessage?:  string;
  quantity:      number;
  addOns:        AddOnCartItem[];
  deliveryType:  DeliveryType;
}

export interface AddOnCartItem {
  addOnId: string;
  name:    string;
  price:   number;
}

// ─── Reserve ──────────────────────────────────────────────────────────────────
export interface Reserve {
  slug:            string;
  name:            string;
  subtitle:        string;
  description:     string;
  longDescription: string;
  coordinates:     { lat: number; lng: number };
  what3words:      string;
  heroImage:       string;
  heroImageAlt:    string;
  galleryImages:   GalleryImage[];
  features:        ReserveFeature[];
  mysticalFacts:   string[];
  conservation:    string;
}

export interface GalleryImage {
  src:       string;
  alt:       string;
  caption?:  string;
}

export interface ReserveFeature {
  icon:        string;
  title:       string;
  description: string;
}

// ─── Guided Tours ────────────────────────────────────────────────────────────
export interface GuidedTour {
  id:          string;
  name:        string;
  duration:    string;
  groupSize:   string;
  difficulty:  "Easy" | "Moderate" | "Challenging";
  description: string;
  price:       Record<Currency, number>;
  dates:       string[];
  includes:    string[];
}

// ─── Reviews ─────────────────────────────────────────────────────────────────
export interface Review {
  id:       string;
  author:   string;
  location: string;
  rating:   number;
  date:     string;
  title:    string;
  body:     string;
  verified: boolean;
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavItem {
  label:       string;
  href:        string;
  description?: string;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export type FaqCategory =
  | "general"
  | "plots"
  | "delivery"
  | "titles"
  | "legal"
  | "conservation"
  | "mystical";

export interface FaqItem {
  id:       string;
  category: FaqCategory;
  question: string;
  answer:   string;
}

// ─── Demo Dashboard User ──────────────────────────────────────────────────────
export interface DemoUser {
  name:        string;
  email:       string;
  titleStyle:  TitleStyle;
  plotRef:     string;
  plotSize:    PlotSize;
  purchaseDate: string;
  coordinates: { lat: number; lng: number };
  what3words:  string;
}
