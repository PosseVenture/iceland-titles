// ─────────────────────────────────────────────────────────────────────────────
// Icelandic Titles — Site Data
// Single source of truth for all content, products, and copy.
// ─────────────────────────────────────────────────────────────────────────────
import type {
  PlotProduct, AddOnProduct, Reserve,
  GuidedTour, Review, FaqItem, NavItem,
} from "@/types";

// ─── Site Constants ──────────────────────────────────────────────────────────
export const SITE = {
  name: "Icelandic Titles",
  tagline: "Become a Jarl, Baron or Baroness of Eyri í Kollafirði",
  taglineExtended:
    "Become a Jarl, Baron or Baroness of Eyri í Kollafirði and Help Restore a Wild Westfjords Landscape",
  description:
    "Claim your souvenir plot of land at Eyri í Kollafirði in the ancient Gufudalssveit valley of Vestfirðir — where the Huldufólk roam the mist, and the glacial crown of Snæfellsjökull watches over the fjord from afar. Style yourself as Jarl, Baron or Baroness of Eyri í Kollafirði and help preserve one of Iceland's last great wildernesses.",
  url: "https://iceland-titles.vercel.app",
  email: "hello@icelandictitles.com",
  phone: "+354 555 0100",
  address: {
    street: "Laugavegur 28",
    city: "Reykjavík",
    postcode: "101",
    country: "Iceland",
  },
  social: {
    instagram: "https://instagram.com/icelandictitles",
    facebook: "https://facebook.com/icelandictitles",
    tiktok: "https://tiktok.com/@icelandictitles",
  },
  trustpilot: {
    score: "4.7",
    count: "18,240",
    url: "https://trustpilot.com/review/icelandictitles.com",
  },
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Buy a Plot", href: "/buy-a-plot" },
  { label: "The Land", href: "/the-land" },
  { label: "Adopt a Horse", href: "/adopt" },
  { label: "Guided Tours", href: "/guided-tours" },
  { label: "Dashboard", href: "/welcome" },
  { label: "FAQ", href: "/faq" },
];

// ─── Add-on Products ─────────────────────────────────────────────────────────
export const ADD_ONS: AddOnProduct[] = [
  {
    id: "plant-a-tree",
    name: "Plant a Tree",
    description:
      "Help rewild the Westfjords by planting a native birch tree at Eyri í Kollafirði. Receive a personalised 'Plant a Tree' bookmark with a Huldufólk illustration — in honour of the hidden people said to dwell in these very birch hollows.",
    prices: { EUR: 42, USD: 46, GBP: 36 },
    icon: "🌿",
  },
  {
    id: "extra-certificate",
    name: "Extra Certificate",
    description:
      "A second personalised A4 certificate — perfect if you want one to frame and one to keep as a keepsake of your Eyri í Kollafirði title.",
    prices: { EUR: 12, USD: 13, GBP: 10 },
    icon: "📜",
  },
];

// ─── Plot Products ────────────────────────────────────────────────────────────
export const PRODUCTS: PlotProduct[] = [
  {
    id: "eco-1sqft",
    size: "1sqft",
    sqft: 1,
    titleName: "Jarl of Eyri í Kollafirði",
    tagline: "Claim your ancient connection to the wild Westfjords",
    description:
      "A digital souvenir pack — your name forever linked to the most remote and mystical fjordland in Iceland. The Huldufólk of Gufudalssveit will know you are here. Perfect as an instant gift.",
    deliveryType: "digital",
    prices: { EUR: 77, USD: 83, GBP: 66 },
    stripePriceIds: {
      EUR: "price_eco_eur_test",
      USD: "price_eco_usd_test",
      GBP: "price_eco_gbp_test",
    },
    featured: false,
    bestSeller: false,
    includes: [
      { icon: "📜", label: "Personalised PDF certificate", detail: "A4, print-at-home quality" },
      { icon: "📍", label: "GPS plot coordinates", detail: "Your exact souvenir location at Eyri" },
      { icon: "🗺", label: "What3Words address", detail: "Three unique words mark your Westfjords spot" },
      { icon: "👑", label: "Right to style yourself Jarl of Eyri í Kollafirði", detail: "Our registered trademark" },
      { icon: "📱", label: "Owner's app access", detail: "Dashboard & virtual tour of Vestfirðir" },
      { icon: "🌿", label: "Conservation contribution", detail: "Helps restore Eyri í Kollafirði" },
    ],
    addOns: [ADD_ONS[0]],
  },
  {
    id: "luxury-5sqft",
    size: "5sqft",
    sqft: 5,
    titleName: "Baron / Baroness of Eyri í Kollafirði",
    tagline: "Luxury gift pack — straight from the Westfjords of Iceland",
    description:
      "Our most popular pack — a beautifully presented physical gift box with a framing-quality certificate, volcanic coaster engraved with the Eyri reserve, and the noble title of Baron or Baroness of Eyri í Kollafirði.",
    deliveryType: "physical",
    prices: { EUR: 110, USD: 119, GBP: 94 },
    stripePriceIds: {
      EUR: "price_lux5_eur_test",
      USD: "price_lux5_usd_test",
      GBP: "price_lux5_gbp_test",
    },
    featured: true,
    bestSeller: true,
    includes: [
      { icon: "📜", label: "A4 Framing-quality certificate", detail: "Personalised + Eyri plot map" },
      { icon: "📦", label: "Iceland gift box & tissue paper", detail: "Ready to give" },
      { icon: "🪨", label: "Volcanic basalt coaster", detail: "Eyri í Kollafirði Reserve engraved" },
      { icon: "🗺", label: "Vestfirðir printed map", detail: "With your Eyri plot highlighted" },
      { icon: "🔖", label: "Plant a Tree bookmark", detail: "Huldufólk birch illustration" },
      { icon: "📍", label: "GPS + What3Words location", detail: "Your unique souvenir plot at Eyri" },
      { icon: "👑", label: "Right to style yourself Baron / Baroness of Eyri í Kollafirði", detail: "Our registered trademark" },
      { icon: "📱", label: "Owner's app + virtual tour", detail: "Explore Vestfirðir from anywhere" },
      { icon: "🌿", label: "Conservation contribution", detail: "Eyri í Kollafirði rewilding fund" },
    ],
    addOns: [ADD_ONS[0], ADD_ONS[1]],
  },
  {
    id: "luxury-10sqft",
    size: "10sqft",
    sqft: 10,
    titleName: "High Jarl of Eyri í Kollafirði",
    tagline: "The ultimate Westfjords luxury experience",
    description:
      "For those who answer the full call of the Westfjords — a collector's luxury set, beautifully boxed and personally signed, bearing the supreme title of High Jarl of Eyri í Kollafirði.",
    deliveryType: "physical",
    prices: { EUR: 210, USD: 227, GBP: 179 },
    stripePriceIds: {
      EUR: "price_lux10_eur_test",
      USD: "price_lux10_usd_test",
      GBP: "price_lux10_gbp_test",
    },
    featured: false,
    bestSeller: false,
    includes: [
      { icon: "📜", label: "A3 Luxury framing certificate", detail: "Museum-grade paper" },
      { icon: "📦", label: "Premium collector's gift box", detail: "Fjord-blue ribbon" },
      { icon: "🪨", label: "Volcanic basalt coaster (2×)", detail: "Gift-wrapped pair" },
      { icon: "🗺", label: "Large-format Vestfirðir map", detail: "A3 full-colour, frameable" },
      { icon: "🔖", label: "Plant a Tree bookmark", detail: "Huldufólk illustration" },
      { icon: "📍", label: "GPS + What3Words location", detail: "Your exact souvenir plot at Eyri" },
      { icon: "👑", label: "Right to style yourself High Jarl of Eyri í Kollafirði", detail: "Expanded usage rights" },
      { icon: "📱", label: "Owner's app + 3D explorer", detail: "Premium dashboard tier" },
      { icon: "📖", label: "'Secrets of the Westfjords' booklet", detail: "Huldufólk lore & the Snæfellsjökull view" },
      { icon: "🌿", label: "Plant a Tree included (1 tree)", detail: "Eyri í Kollafirði birch rewilding" },
      { icon: "✍", label: "Handwritten welcome note", detail: "From our Iceland team" },
    ],
    addOns: [ADD_ONS[0], ADD_ONS[1]],
  },
];

// ─── Reserve Data ─────────────────────────────────────────────────────────────
export const RESERVE: Reserve = {
  slug: "eyri-i-kollafirdi",
  name: "Eyri í Kollafirði Reserve",
  subtitle: "Where the hidden people walk and Snæfellsjökull watches from across the fjord",
  description:
    "Your souvenir plot lies within the ancient land of Eyri í Kollafirði, set in the Gufudalssveit valley of Vestfirðir — one of Iceland's most remote and spiritually charged corners.",
  longDescription: `Vestfirðir — the Westfjords — is Iceland at its most primordial. Carved by glaciers over millions of years into a labyrinth of deep fjords and ancient plateaux, this is a landscape that resists the modern world.
At Eyri í Kollafirði, within the Gufudalssveit valley, the earth feels different. The old farmsteads that have stood here since the Settlement Age speak of people who knew this land was alive — who heard voices in the wind off the fjord, who placed offerings at the mossy stones above the shore. The Huldufólk — Iceland's hidden people — are said to be especially present in Gufudalssveit.
On clear days, the view across Kollafjörður is extraordinary. Snæfellsjökull rises in the south like a beacon, ice-crowned and luminous. From the shores of Eyri í Kollafirði, it has watched over the people of Gufudalssveit for a thousand years.
To claim a plot at Eyri í Kollafirði is to plant your name in earth that has been sacred since long before Iceland was a nation — earth that the hidden people still walk, earth from which, on a clear winter's night, you can watch the aurora dance above a glacier that Jules Verne called a gateway between worlds.`,
  coordinates: { lat: 65.6038585, lng: -22.495283 },
  what3words: "///fjord.hidden.folk",
  heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85",
  heroImageAlt: "The wild fjord coastline of Eyri í Kollafirði in Vestfirðir — where ancient Norse land meets the sea and Snæfellsjökull watches from across Kollafjörður",
  galleryImages: [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
      alt: "Dawn light over the deep fjords of Vestfirðir, Iceland — the ancient Gufudalssveit valley reflected in still water",
      caption: "Dawn over Kollafjörður",
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80",
      alt: "Vivid green and purple northern lights dancing above the fjords of Vestfirðir",
      caption: "Aurora over the fjord",
    },
    {
      src: "https://images.unsplash.com/photo-1557683316-973673baf926?w=900&q=80",
      alt: "Ethereal mist rising through ancient birch woodland in Gufudalssveit",
      caption: "Huldufólk birch hollows",
    },
    {
      src: "https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?w=900&q=80",
      alt: "Snæfellsjökull glacier rising across Kollafjörður from Eyri í Kollafirði",
      caption: "Snæfellsjökull from across the fjord",
    },
  ],
  features: [
    { icon: "🌊", title: "Eyri í Kollafirði", description: "Your plot sits within the ancient Gufudalssveit valley at the shores of Kollafjörður." },
    { icon: "🏔", title: "View to Snæfellsjökull", description: "On clear days, the glacial crown of Snæfellsjökull rises visibly across the fjord." },
    { icon: "🧝", title: "Huldufólk of Gufudalssveit", description: "The hidden people are said to dwell in the rocks and birch hollows of this valley." },
    { icon: "🐦", title: "Westfjords wildlife", description: "Atlantic puffin, white-tailed eagle, arctic fox and harbour seal frequent the Eyri coastline." },
    { icon: "🌿", title: "Ancient birch woodland", description: "Native birch clings to the valley sides — one of the most intact remnants of Iceland’s original forest." },
    { icon: "♾", title: "Settlement-Age heritage", description: "Farmsteads in Gufudalssveit date to the Settlement Age — land named and revered for over a thousand years." },
  ],
  mysticalFacts: [
    "Snæfellsjökull — visible from Eyri í Kollafirði on clear days — is one of Earth's seven great energy centres.",
    "Jules Verne's 'Journey to the Centre of the Earth' begins beneath Snæfellsjökull, the glacier you can see from your plot.",
    "Over 54% of Icelanders believe in, or don't rule out the existence of, the Huldufólk.",
    "The Icelandic Road Administration has re-routed roads to protect suspected Huldufólk habitats in the Westfjords.",
    "Vestfirðir holds more than half of Iceland's entire coastline, yet fewer than 7,000 people call it home.",
  ],
  conservation:
    "Your souvenir purchase directly funds rewilding work at Eyri í Kollafirði: native birch woodland restoration, coastal erosion control, arctic fox and seabird habitat protection, and stewardship of the ancient rock formations where the Huldufólk are said to dwell.",
};

// The rest of the file (REVIEWS, GUIDED_TOURS, FAQS) can stay exactly as you have them for now.

export const REVIEWS = [ ... your current reviews ... ];
export const GUIDED_TOURS = [ ... your current tours ... ];
export const FAQS = [ ... your current FAQs ... ];