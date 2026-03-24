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
  name:     "Icelandic Titles",
  tagline:  "Become a Jarl, Lord or Lady of the Icelandic Highlands",
  taglineExtended:
    "Become a Jarl, Lord or Lady of the Icelandic Highlands and Help Restore an Icelandic Nature Reserve",
  description:
    "Claim your souvenir plot of land in the mystical Snæfellsnes Reserve and style yourself as Jarl, Lord or Lady of the Icelandic Highlands. Help restore Iceland's wild landscapes while connecting with the guardian spirit Bárður Snæfellsás and the ancient power of Snæfellsjökull glacier.",
  url:   "https://icelandictitles.com",
  email: "hello@icelandictitles.com",
  phone: "+354 555 0100",
  address: {
    street:   "Laugavegur 28",
    city:     "Reykjavík",
    postcode: "101",
    country:  "Iceland",
  },
  social: {
    instagram: "https://instagram.com/icelandictitles",
    facebook:  "https://facebook.com/icelandictitles",
    tiktok:    "https://tiktok.com/@icelandictitles",
  },
  trustpilot: {
    score: "4.7",
    count: "18,240",
    url:   "https://trustpilot.com/review/icelandictitles.com",
  },
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "Home",          href: "/"             },
  { label: "Buy a Plot",    href: "/buy-a-plot"   },
  { label: "The Land",      href: "/the-land"     },
  { label: "Adopt a Horse", href: "/adopt"        },
  { label: "Guided Tours",  href: "/guided-tours" },
  { label: "Dashboard",     href: "/welcome"      },
  { label: "FAQ",           href: "/faq"          },
];

// ─── Add-on Products ─────────────────────────────────────────────────────────
export const ADD_ONS: AddOnProduct[] = [
  {
    id:   "plant-a-tree",
    name: "Plant a Tree",
    description:
      "Help rewild Iceland by planting a native birch tree in our Snæfellsnes Reserve. Receive a personalised 'Plant a Tree' bookmark with huldufólk illustration.",
    prices: { EUR: 42, USD: 46, GBP: 36 },
    icon:  "🌿",
  },
  {
    id:   "extra-certificate",
    name: "Extra Certificate",
    description:
      "A second personalised A4 certificate — perfect if you want one to frame and one to keep.",
    prices: { EUR: 12, USD: 13, GBP: 10 },
    icon:  "📜",
  },
];

// ─── Plot Products ────────────────────────────────────────────────────────────
export const PRODUCTS: PlotProduct[] = [
  // ── 1 sq ft — Eco Digital Pack ───────────────────────────────────────────
  {
    id:          "eco-1sqft",
    size:        "1sqft",
    sqft:        1,
    titleName:   "Jarl of Snæfellsnes",
    tagline:     "Claim your mystical connection to the glacier",
    description:
      "A digital souvenir pack — your name forever linked to the most mystical peninsula in Iceland. Perfect as an instant gift.",
    deliveryType: "digital",
    prices:       { EUR: 77, USD: 83, GBP: 66 },
    stripePriceIds: {
      EUR: "price_eco_eur_test",
      USD: "price_eco_usd_test",
      GBP: "price_eco_gbp_test",
    },
    featured:   false,
    bestSeller: false,
    includes: [
      { icon: "📜", label: "Personalised PDF certificate",           detail: "A4, print-at-home quality"          },
      { icon: "📍", label: "GPS plot coordinates",                   detail: "Your exact souvenir location"        },
      { icon: "🗺",  label: "What3Words address",                    detail: "Three unique words mark your spot"   },
      { icon: "👑", label: "Right to style yourself Jarl/Lord/Lady", detail: "Our registered trademark"            },
      { icon: "📱", label: "Owner's app access",                     detail: "Dashboard & virtual tour"            },
      { icon: "🌿", label: "Conservation contribution",              detail: "Helps restore Snæfellsnes"           },
    ],
    addOns: [ADD_ONS[0]],
  },

  // ── 5 sq ft — Luxury Gift Pack ────────────────────────────────────────────
  {
    id:          "luxury-5sqft",
    size:        "5sqft",
    sqft:        5,
    titleName:   "Lord / Lady of Snæfellsnes",
    tagline:     "Luxury gift pack — straight from Iceland",
    description:
      "Our most popular pack — a beautifully presented physical gift box with a framing-quality certificate and volcanic coaster.",
    deliveryType: "physical",
    prices:       { EUR: 110, USD: 119, GBP: 94 },
    stripePriceIds: {
      EUR: "price_lux5_eur_test",
      USD: "price_lux5_usd_test",
      GBP: "price_lux5_gbp_test",
    },
    featured:   true,
    bestSeller: true,
    includes: [
      { icon: "📜", label: "A4 Framing-quality certificate",      detail: "Personalised + plot map"             },
      { icon: "📦", label: "Iceland gift box & tissue paper",     detail: "Ready to give"                       },
      { icon: "🪨", label: "Volcanic basalt coaster",             detail: "Snæfellsnes Reserve engraved"        },
      { icon: "🗺",  label: "Snæfellsnes printed map",            detail: "With your plot highlighted"          },
      { icon: "🔖", label: "Plant a Tree bookmark",               detail: "Huldufólk birch illustration"        },
      { icon: "📍", label: "GPS + What3Words location",           detail: "Your unique souvenir plot"           },
      { icon: "👑", label: "Right to style yourself Lord/Lady",   detail: "Our registered trademark"            },
      { icon: "📱", label: "Owner's app + virtual tour",          detail: "Explore from anywhere"               },
      { icon: "🌿", label: "Conservation contribution",           detail: "Snæfellsnes rewilding fund"          },
    ],
    addOns: [ADD_ONS[0], ADD_ONS[1]],
  },

  // ── 10 sq ft — Ultimate Luxury Pack ──────────────────────────────────────
  {
    id:          "luxury-10sqft",
    size:        "10sqft",
    sqft:        10,
    titleName:   "High Jarl of Snæfellsnes",
    tagline:     "The ultimate Iceland luxury experience",
    description:
      "For those who demand the extraordinary — a full luxury collector's set, beautifully boxed and personally signed.",
    deliveryType: "physical",
    prices:       { EUR: 210, USD: 227, GBP: 179 },
    stripePriceIds: {
      EUR: "price_lux10_eur_test",
      USD: "price_lux10_usd_test",
      GBP: "price_lux10_gbp_test",
    },
    featured:   false,
    bestSeller: false,
    includes: [
      { icon: "📜", label: "A3 Luxury framing certificate",           detail: "Museum-grade paper"                    },
      { icon: "📦", label: "Premium collector's gift box",            detail: "Glacier-blue ribbon"                   },
      { icon: "🪨", label: "Volcanic basalt coaster (2×)",            detail: "Gift-wrapped pair"                     },
      { icon: "🗺",  label: "Large-format Snæfellsnes map",            detail: "A3 full-colour, frameable"             },
      { icon: "🔖", label: "Plant a Tree bookmark",                   detail: "Huldufólk illustration"                },
      { icon: "📍", label: "GPS + What3Words location",               detail: "Your exact souvenir plot"              },
      { icon: "👑", label: "Right to style yourself High Jarl",       detail: "Expanded usage rights"                 },
      { icon: "📱", label: "Owner's app + 3D explorer",               detail: "Premium dashboard tier"                },
      { icon: "📖", label: "'Secrets of the Glacier' booklet",        detail: "Bárður & huldufólk lore"               },
      { icon: "🌿", label: "Plant a Tree included (1 tree)",          detail: "Snæfellsnes birch rewilding"           },
      { icon: "✍",  label: "Handwritten welcome note",               detail: "From our Iceland team"                 },
    ],
    addOns: [ADD_ONS[0], ADD_ONS[1]],
  },
];

// ─── Reserve Data ─────────────────────────────────────────────────────────────
export const RESERVE: Reserve = {
  slug:     "snaefellsnes",
  name:     "Snæfellsnes Reserve",
  subtitle: "Under the glacier that guards the souls of Iceland",

  description:
    "Your souvenir plot lies within the magical Snæfellsnes peninsula, gazing directly at the legendary Snæfellsjökull glacier — a 1,446-metre ice-crowned stratovolcano revered as one of Earth's great energy centres.",

  longDescription: `Stretching like a rugged arm into the North Atlantic, the Snæfellsnes peninsula is Iceland at its most mythical. At its tip stands Snæfellsjökull — a glacier-capped volcano so magnificent that Jules Verne chose it as the gateway to the centre of the Earth.

But the glacier's true power runs deeper than fiction. The Snæfellsjökull is considered one of the planet's seven great energy centres — a spiritual chakra where the Earth's energy converges and radiates outward. Visitors routinely report overwhelming feelings of peace, clarity, and connection standing on its slopes.

At the heart of this mythology stands Bárður Snæfellsás — the peninsula's eternal guardian. Half-human, half-troll, Bárður was a settler chieftain who walked into the glacier and became its immortal protector. He is still venerated today; his carved figure watches over the reserve entrance at Arnarstapi.

Every lava field, every ancient rock formation across Snæfellsnes is said to house huldufólk — the hidden people. These beautiful, human-sized beings live alongside humans, unseen except by those with the sight. Road workers re-route roads around their suspected homes. Even the Icelandic government has been known to consult elf advisors before major construction.

Your souvenir plot is a piece of this living mythology.`,

  coordinates: { lat: 64.8147, lng: -23.7722 },
  what3words:  "///glaciers.spirit.elf",

  // Photo: Panoramic view of Snæfellsjökull glacier under a clear starry night
  heroImage:    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85",
  heroImageAlt: "Mystical Snæfellsjökull glacier rising over Snæfellsnes Peninsula — source of great power, good spirits and guardian Bárður Snæfellsás",

  galleryImages: [
    {
      // Photo 1: Snæfellsjökull stratovolcano under starry night — glacier at dawn light
      src:     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
      alt:     "Panoramic view of Snæfellsjökull stratovolcano glacier under a clear starry night sky, Snæfellsnes Peninsula — source of good spirits and hidden people folklore",
      caption: "The glacier at dawn",
    },
    {
      // Photo 2: Vivid northern lights — aurora over the glacier
      src:     "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80",
      alt:     "Vivid green and purple northern lights dancing above the snow-capped Snæfellsjökull glacier at night, Snæfellsnes Peninsula, Iceland — mystical energy centre and guardian spirit landscape",
      caption: "Aurora over the glacier",
    },
    {
      // Photo 3: Mystical sunrise mist — evocative of huldufólk lava formations
      src:     "https://images.unsplash.com/photo-1557683316-973673baf926?w=900&q=80",
      alt:     "Mystical sunrise mist surrounding the peak of Snæfellsjökull glacier, Iceland — legendary energy centre and home of guardian spirit Bárður Snæfellsás, evocative of huldufólk lava formations",
      caption: "Huldufólk lava fields",
    },
    {
      // Photo 4: Golden sunset ridges — Djúpalónssandur black beach atmosphere
      src:     "https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?w=900&q=80",
      alt:     "Golden sunset light illuminating the rugged ridges of Snæfellsjökull glacier, Snæfellsnes, Iceland — powerful spiritual atmosphere evoking the black sand beaches and dramatic volcanic coastline",
      caption: "Djúpalónssandur black beach",
    },
    {
      // Photo 5: Northern lights panorama — wildlife/puffin cliff atmosphere
      src:     "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80",
      alt:     "Northern lights illuminating the Snæfellsnes coastal cliffs at night, Iceland — the same dramatic seabird habitat where puffins nest under the protection of guardian spirit Bárður",
      caption: "Snæfellsnes puffin colony",
    },
    {
      // Photo 6: Wide panoramic glacier — Arnarstapi coastline mood
      src:     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      alt:     "Dramatic panoramic view of Snæfellsjökull glacier and Snæfellsnes coastline at night — where Arnarstapi sea arch and guardian Bárður's carved statue watch over the mystical peninsula",
      caption: "Arnarstapi sea arch",
    },
  ],

  features: [
    {
      icon: "🗻",
      title: "Snæfellsjökull glacier",
      description:
        "Direct views of the 1,446m ice-crowned volcano — one of Earth's seven energy centres and Jules Verne's gateway to the centre of the Earth.",
    },
    {
      icon: "👁",
      title: "Guardian spirit Bárður",
      description:
        "The eternal protector of the peninsula — half-troll, half-human — who walked into the glacier and became its immortal guardian.",
    },
    {
      icon: "🧝",
      title: "Huldufólk (hidden people)",
      description:
        "The lava fields teem with elves and hidden people. Many roads are re-routed to avoid disturbing their ancient homes.",
    },
    {
      icon: "🐦",
      title: "Arctic wildlife",
      description:
        "Puffins, arctic foxes, harbour seals, orca and minke whales frequent the peninsula's extraordinary ecosystems.",
    },
    {
      icon: "🌊",
      title: "Dramatic coastline",
      description:
        "Black sand beaches, sea arches, basalt columns and sea stacks — a geological spectacle shaped by fire and ice.",
    },
    {
      icon: "♾",
      title: "Earth energy centre",
      description:
        "Considered one of the planet's most powerful spiritual vortexes — a place of transformation and ancient power.",
    },
  ],

  mysticalFacts: [
    "Snæfellsjökull is listed as one of Earth's seven great chakra energy centres.",
    "Jules Verne's Professor Lidenbrock enters the Earth here in 'Journey to the Centre of the Earth' (1864).",
    "Bárður Snæfellsás is still venerated — his carved figure stands at Arnarstapi.",
    "Over 54% of Icelanders believe in, or don't rule out the existence of, huldufólk.",
    "The Icelandic Road Administration has re-routed roads to protect suspected elf habitats.",
    "The glacier is predicted to be ice-free by 2050 — making conservation here urgent.",
  ],

  conservation:
    "Your souvenir purchase directly funds rewilding work: native birch woodland restoration, erosion control on volcanic slopes, Arctic fox and seabird habitat protection, and trail maintenance to protect the fragile lava fields where the huldufólk are said to dwell.",
};

// ─── Reviews ─────────────────────────────────────────────────────────────────
export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Sophie M.",
    location: "Copenhagen, Denmark",
    rating: 5,
    date: "2024-11-12",
    title: "A genuinely magical gift",
    body: "I bought the 5 sq ft pack as a birthday gift for my husband who is obsessed with Icelandic mythology. He cried. The certificate is beautiful, the coaster is engraved perfectly, and the whole experience of being a 'Lord of Snæfellsnes' has given him such joy.",
    verified: true,
  },
  {
    id: "r2",
    author: "James T.",
    location: "Edinburgh, Scotland",
    rating: 5,
    date: "2024-10-28",
    title: "Stood on my plot — extraordinary",
    body: "We actually visited the reserve while on holiday. To stand on the land I 'own' with the glacier in the background, thinking about Bárður and the elves — I cannot describe it. The What3Words coordinates took us exactly there. Unforgettable.",
    verified: true,
  },
  {
    id: "r3",
    author: "Maike van den B.",
    location: "Amsterdam, Netherlands",
    rating: 5,
    date: "2024-12-03",
    title: "Bought for myself — no regrets",
    body: "I'm a Lady of Snæfellsnes now and I put it on my email signature. My colleagues think I'm hilarious. The certificate looks stunning framed. Also I genuinely feel a connection to Iceland's conservation effort.",
    verified: true,
  },
  {
    id: "r4",
    author: "Carlos R.",
    location: "Buenos Aires, Argentina",
    rating: 5,
    date: "2024-09-17",
    title: "The 10 sq ft pack is extraordinary",
    body: "Everything in the luxury box is premium — the A3 certificate is museum-quality, the booklet about Bárður and the huldufólk is genuinely fascinating, and the handwritten note was a lovely touch. My wife is now officially a Lady of Snæfellsnes.",
    verified: true,
  },
  {
    id: "r5",
    author: "Yuki N.",
    location: "Tokyo, Japan",
    rating: 4,
    date: "2024-11-30",
    title: "Beautiful. Slight shipping delay handled perfectly.",
    body: "The gift box arrived beautifully packaged. Slight delay due to Iceland postal service but customer support kept me updated. The product itself is stunning. My friend who received it immediately looked up flights to Iceland.",
    verified: true,
  },
  {
    id: "r6",
    author: "Thandi O.",
    location: "Cape Town, South Africa",
    rating: 5,
    date: "2025-01-08",
    title: "My family's favourite Christmas gift",
    body: "I bought three — one each for my mother, sister and myself. We are all now Ladies of Snæfellsnes. The huldufólk story in the booklet had us captivated on Christmas Day. We've booked the Glacier Soul Walk tour for summer.",
    verified: true,
  },
];

// ─── Guided Tours ─────────────────────────────────────────────────────────────
export const GUIDED_TOURS: GuidedTour[] = [
  {
    id: "glacier-soul-walk",
    name: "Glacier Soul Walk",
    duration: "6 hours",
    groupSize: "Max 8",
    difficulty: "Moderate",
    description:
      "Walk the sacred lava fields below Snæfellsjökull, visit Arnarstapi to meet Bárður's carved guardian figure, and learn the deep folklore of the huldufólk from our local storyteller guide.",
    price: { EUR: 149, USD: 164, GBP: 126 },
    dates: ["2025-06-14", "2025-06-28", "2025-07-12", "2025-07-26", "2025-08-09"],
    includes: [
      "Expert local folklore guide",
      "Lava field exploration",
      "Bárður statue visit at Arnarstapi",
      "Huldufólk story session",
      "Packed Icelandic lunch",
      "Certificate of pilgrimage",
    ],
  },
  {
    id: "northern-lights-vigil",
    name: "Northern Lights Vigil",
    duration: "4 hours (evening)",
    groupSize: "Max 6",
    difficulty: "Easy",
    description:
      "As the sun sets over Snæfellsjökull, gather at your souvenir plot to watch the Northern Lights dance over the glacier — the spirits are said to travel within the aurora.",
    price: { EUR: 119, USD: 131, GBP: 100 },
    dates: ["2025-09-20", "2025-10-04", "2025-10-18", "2025-11-01", "2025-11-15"],
    includes: [
      "Night photography guidance",
      "Wool blankets and hot skyr drink",
      "Aurora prediction briefing",
      "Spirit storytelling session",
      "Plot coordinates torchlit visit",
    ],
  },
  {
    id: "elf-rock-expedition",
    name: "Elf Rock Expedition",
    duration: "4 hours",
    groupSize: "Max 10",
    difficulty: "Easy",
    description:
      "A family-friendly journey through the most famous huldufólk habitats on the peninsula — ancient lava formations locals swear are home to Iceland's hidden people.",
    price: { EUR: 89, USD: 98, GBP: 75 },
    dates: ["2025-06-07", "2025-06-21", "2025-07-05", "2025-07-19", "2025-08-02"],
    includes: [
      "Huldufólk folklore specialist",
      "Guided lava field walk",
      "Elf-spotting kit for children",
      "Illustrated huldufólk booklet",
      "Snæfellsnes herbal tea tasting",
    ],
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export const FAQS: FaqItem[] = [
  {
    id: "what-is",
    category: "general",
    question: "What exactly am I buying?",
    answer:
      "You are purchasing a souvenir novelty gift — not a real estate transaction. You receive a beautifully personalised certificate granting you the right to style yourself as Jarl, Lord or Lady of the Snæfellsnes Highlands (our registered trademark), along with a dedicated GPS-referenced plot within our managed Snæfellsnes Reserve. This is purely for enjoyment. Icelandic Titles retains full legal ownership of the land.",
  },
  {
    id: "real-land",
    category: "legal",
    question: "Am I buying real land in Iceland?",
    answer:
      "No. This is a souvenir gift only. Under Icelandic property law (fasteignalög), land ownership requires formal registration in the national property register (þjóðskrá). No such registration occurs with our souvenir plots. Icelandic Titles ehf. retains legal ownership of all reserve land.",
  },
  {
    id: "title-use",
    category: "titles",
    question: "Can I really call myself a Lord, Lady or Jarl?",
    answer:
      "Yes — as a fun, novelty title! 'Jarl/Lord/Lady of Snæfellsnes' is our registered trademark and souvenir style. You may use it socially, on social media, in email signatures, and wherever you like for personal enjoyment. It carries no legal weight and is not recognised by any government.",
  },
  {
    id: "delivery-speed",
    category: "delivery",
    question: "How quickly will my order arrive?",
    answer:
      "Digital packs (1 sq ft eco pack) are delivered by email within minutes of purchase. Physical gift packs are dispatched within 2–3 working days. Delivery typically takes 3–7 days to Europe, 7–14 days to North America, and 10–18 days worldwide. Shipping is always free.",
  },
  {
    id: "refund",
    category: "general",
    question: "What is your refund policy?",
    answer:
      "We offer an unconditional 90-day money-back guarantee. If for any reason you are not delighted with your purchase, contact us within 90 days for a full refund, no questions asked. Physical packs need not be returned.",
  },
  {
    id: "name-change",
    category: "titles",
    question: "Can I change the name on my certificate?",
    answer:
      "Yes. Contact us at hello@icelandictitles.com with your order number and the correct name. We reissue certificates free of charge within 30 days of purchase. After 30 days a small reissue fee of €9 applies.",
  },
  {
    id: "conservation",
    category: "conservation",
    question: "How does my purchase help Iceland?",
    answer:
      "A meaningful portion of every sale goes directly to Snæfellsnes conservation work: native birch woodland restoration, erosion control on volcanic slopes, Arctic fox and seabird habitat protection, and trail maintenance to protect the fragile lava fields.",
  },
  {
    id: "plant-tree",
    category: "conservation",
    question: "What is the 'Plant a Tree' add-on?",
    answer:
      "For €19 extra, a native Icelandic birch tree will be planted in your name in the Snæfellsnes Reserve. You'll receive a personalised bookmark with a huldufólk illustration and your tree's approximate location. Iceland was once 25–40% forested; today less than 2% has tree cover — your tree genuinely matters.",
  },
  {
    id: "bardur",
    category: "mystical",
    question: "Who is Bárður Snæfellsás?",
    answer:
      "Bárður Snæfellsás was a legendary Norse settler of the Snæfellsnes peninsula — half human, half troll by heritage. After tragic events involving his family, he retreated into the Snæfellsjökull glacier and became its eternal guardian spirit. Icelanders still venerate him today; his carved figure stands at Arnarstapi.",
  },
  {
    id: "huldufolk",
    category: "mystical",
    question: "Are huldufólk (elves / hidden people) real?",
    answer:
      "In Iceland, the huldufólk are taken very seriously. Over 54% of Icelanders believe in them or won't rule out their existence. They are described as beautiful, human-sized beings who live in rocks, hills and lava formations. Roads have genuinely been re-routed to avoid disturbing suspected elf homes. The folklore is ancient, rich, and deeply woven into life on Snæfellsnes.",
  },
  {
    id: "visit-plot",
    category: "plots",
    question: "Can I visit my souvenir plot in person?",
    answer:
      "Absolutely! Your GPS coordinates and What3Words address will take you within metres of your designated souvenir plot. The Snæfellsnes Reserve is a publicly accessible area within Snæfellsjökull National Park. Plot owners also receive 10% off all our guided tours.",
  },
];
