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
  tagline:  "Become a Jarl, Baron or Baroness of Eyri í Kollafirði",
  taglineExtended:
    "Become a Jarl, Baron or Baroness of Eyri í Kollafirði and Help Restore a Wild Westfjords Landscape",
  description:
    "Claim your souvenir plot of land at Eyri í Kollafirði in the ancient Gufudalssveit valley of Vestfirðir — where the Huldufólk roam the mist, and the glacial crown of Snæfellsjökull watches over the fjord. Style yourself as Jarl, Baron or Baroness of Eyri í Kollafirði and help preserve one of Iceland's last great wildernesses.",
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
      "Help rewild the Westfjords by planting a native birch tree at Eyri í Kollafirði. Receive a personalised 'Plant a Tree' bookmark with a Huldufólk illustration — in honour of the hidden people said to dwell in these very birch hollows.",
    prices: { EUR: 42, USD: 46, GBP: 36 },
    icon:  "🌿",
  },
  {
    id:   "extra-certificate",
    name: "Extra Certificate",
    description:
      "A second personalised A4 certificate — perfect if you want one to frame and one to keep as a keepsake of your Eyri í Kollafirði title.",
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
    titleName:   "Jarl of Eyri í Kollafirði",
    tagline:     "Claim your ancient connection to the wild Westfjords",
    description:
      "A digital souvenir pack — your name forever linked to the most remote and mystical fjordland in Iceland. The Huldufólk of Gufudalssveit will know you are here. Perfect as an instant gift.",
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
      { icon: "📜", label: "Personalised PDF certificate",                          detail: "A4, print-at-home quality"                     },
      { icon: "📍", label: "GPS plot coordinates",                                  detail: "Your exact souvenir location at Eyri"          },
      { icon: "🗺",  label: "What3Words address",                                   detail: "Three unique words mark your Westfjords spot"  },
      { icon: "👑", label: "Right to style yourself Jarl of Eyri í Kollafirði",    detail: "Our registered trademark"                     },
      { icon: "📱", label: "Owner's app access",                                    detail: "Dashboard & virtual tour of Vestfirðir"        },
      { icon: "🌿", label: "Conservation contribution",                             detail: "Helps restore Eyri í Kollafirði"               },
    ],
    addOns: [ADD_ONS[0]],
  },

  // ── 5 sq ft — Luxury Gift Pack ────────────────────────────────────────────
  {
    id:          "luxury-5sqft",
    size:        "5sqft",
    sqft:        5,
    titleName:   "Baron / Baroness of Eyri í Kollafirði",
    tagline:     "Luxury gift pack — straight from the Westfjords of Iceland",
    description:
      "Our most popular pack — a beautifully presented physical gift box with a framing-quality certificate, volcanic coaster engraved with the Eyri reserve, and the noble title of Baron or Baroness of Eyri í Kollafirði.",
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
      { icon: "📜", label: "A4 Framing-quality certificate",                                          detail: "Personalised + Eyri plot map"                 },
      { icon: "📦", label: "Iceland gift box & tissue paper",                                         detail: "Ready to give"                                },
      { icon: "🪨", label: "Volcanic basalt coaster",                                                 detail: "Eyri í Kollafirði Reserve engraved"           },
      { icon: "🗺",  label: "Vestfirðir printed map",                                                 detail: "With your Eyri plot highlighted"               },
      { icon: "🔖", label: "Plant a Tree bookmark",                                                   detail: "Huldufólk birch illustration"                 },
      { icon: "📍", label: "GPS + What3Words location",                                               detail: "Your unique souvenir plot at Eyri"            },
      { icon: "👑", label: "Right to style yourself Baron / Baroness of Eyri í Kollafirði",           detail: "Our registered trademark"                     },
      { icon: "📱", label: "Owner's app + virtual tour",                                              detail: "Explore Vestfirðir from anywhere"              },
      { icon: "🌿", label: "Conservation contribution",                                               detail: "Eyri í Kollafirði rewilding fund"              },
    ],
    addOns: [ADD_ONS[0], ADD_ONS[1]],
  },

  // ── 10 sq ft — Ultimate Luxury Pack ──────────────────────────────────────
  {
    id:          "luxury-10sqft",
    size:        "10sqft",
    sqft:        10,
    titleName:   "High Jarl of Eyri í Kollafirði",
    tagline:     "The ultimate Westfjords luxury experience",
    description:
      "For those who answer the full call of the Westfjords — a collector's luxury set, beautifully boxed and personally signed, bearing the supreme title of High Jarl of Eyri í Kollafirði.",
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
      { icon: "📜", label: "A3 Luxury framing certificate",                                detail: "Museum-grade paper"                                  },
      { icon: "📦", label: "Premium collector's gift box",                                 detail: "Fjord-blue ribbon"                                   },
      { icon: "🪨", label: "Volcanic basalt coaster (2×)",                                 detail: "Gift-wrapped pair"                                   },
      { icon: "🗺",  label: "Large-format Vestfirðir map",                                 detail: "A3 full-colour, frameable"                           },
      { icon: "🔖", label: "Plant a Tree bookmark",                                        detail: "Huldufólk illustration"                              },
      { icon: "📍", label: "GPS + What3Words location",                                    detail: "Your exact souvenir plot at Eyri"                    },
      { icon: "👑", label: "Right to style yourself High Jarl of Eyri í Kollafirði",      detail: "Expanded usage rights"                               },
      { icon: "📱", label: "Owner's app + 3D explorer",                                    detail: "Premium dashboard tier"                              },
      { icon: "📖", label: "'Secrets of the Westfjords' booklet",                          detail: "Huldufólk lore & the Snæfellsjökull view"            },
      { icon: "🌿", label: "Plant a Tree included (1 tree)",                               detail: "Eyri í Kollafirði birch rewilding"                   },
      { icon: "✍",  label: "Handwritten welcome note",                                    detail: "From our Iceland team"                               },
    ],
    addOns: [ADD_ONS[0], ADD_ONS[1]],
  },
];

// ─── Reserve Data ─────────────────────────────────────────────────────────────
export const RESERVE: Reserve = {
  slug:     "eyri-i-kollafirdi",
  name:     "Eyri í Kollafirði Reserve",
  subtitle: "Where the hidden people walk and Snæfellsjökull watches from across the fjord",

  description:
    "Your souvenir plot lies within the ancient land of Eyri í Kollafirði, set in the Gufudalssveit valley of Vestfirðir — one of Iceland's most remote and spiritually charged corners. On clear days, the glacial crown of Snæfellsjökull rises like a vision across Kollafjörður, unchanged since the first Norse settlers raised their halls here.",

  longDescription: `Vestfirðir — the Westfjords — is Iceland at its most primordial. Carved by glaciers over millions of years into a labyrinth of deep fjords and ancient plateaux, this is a landscape that resists the modern world. The roads here still yield to the weather. The silence is absolute. And the land remembers.

At Eyri í Kollafirði, within the Gufudalssveit valley, the earth feels different. The old farmsteads that have stood here since the Settlement Age speak of people who knew this land was alive — who heard voices in the wind off the fjord, who placed offerings at the mossy stones above the shore. The Huldufólk — Iceland's hidden people — are said to be especially present in Gufudalssveit. Locals will tell you without embarrassment: do not disturb the large rocks on the hillside. Something old and watchful lives inside them.

On clear days, the view across Kollafjörður is extraordinary. Snæfellsjökull — the glacier Jules Verne sent his heroes through, one of Earth's seven great energy centres — rises in the south like a beacon, ice-crowned and luminous. From the shores of Eyri í Kollafirði, it has watched over the people of Gufudalssveit for a thousand years. It watches still.

The Westfjords hold more than half of Iceland's entire coastline within their jagged embrace, yet fewer than 7,000 people call them home. This isolation has preserved not only the landscape but the stories — the sagas, the folklore, the deep Icelandic knowledge that the land is not merely ground underfoot, but a living presence deserving of reverence.

To claim a plot at Eyri í Kollafirði is not merely to buy a souvenir. It is to plant your name in earth that has been sacred since long before Iceland was a nation — earth that the hidden people still walk, earth from which, on a clear winter's night, you can watch the aurora dance above a glacier that Jules Verne called a gateway between worlds.`,

  coordinates: { lat: 65.6038585, lng: -22.495283 },
  what3words:  "///fjord.hidden.folk",

  heroImage:    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85",
  heroImageAlt: "The wild fjord coastline of Eyri í Kollafirði in Vestfirðir — where ancient Norse land meets the sea and Snæfellsjökull watches from across Kollafjörður",

  galleryImages: [
    {
      src:     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
      alt:     "Dawn light over the deep fjords of Vestfirðir, Iceland — the ancient Gufudalssveit valley reflected in still water, Eyri í Kollafirði reserve in the foreground",
      caption: "Dawn over Kollafjörður",
    },
    {
      src:     "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80",
      alt:     "Vivid green and purple northern lights dancing above the fjords and mountains of Vestfirðir, Iceland — ancient Huldufólk country of Gufudalssveit lit by the aurora",
      caption: "Aurora over the fjord",
    },
    {
      src:     "https://images.unsplash.com/photo-1557683316-973673baf926?w=900&q=80",
      alt:     "Ethereal mist rising through ancient birch woodland in Gufudalssveit, Vestfirðir — the hidden people are said to walk between the trees on mornings like this",
      caption: "Huldufólk birch hollows",
    },
    {
      src:     "https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?w=900&q=80",
      alt:     "Snæfellsjökull glacier rising luminously above the sea as seen across Kollafjörður from Eyri í Kollafirði — the mystical sentinel that Jules Verne made the gateway to another world",
      caption: "Snæfellsjökull from across the fjord",
    },
    {
      src:     "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80",
      alt:     "The dramatic sea cliffs of Vestfirðir at dusk — nesting ground for Atlantic puffin, white-tailed eagle and kittiwake along the Eyri í Kollafirði coastline",
      caption: "Westfjords seabird cliffs",
    },
    {
      src:     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      alt:     "Sweeping panorama of a Vestfirðir fjord at last light — the immense, ancient silence of the Westfjords that has drawn Norse settlers, hidden people and wanderers for over a thousand years",
      caption: "The scale of the Westfjords",
    },
  ],

  features: [
    {
      icon: "🌊",
      title: "Eyri í Kollafirði",
      description:
        "Your plot sits within the ancient Gufudalssveit valley at the shores of Kollafjörður — one of the most remote and unspoiled landscapes in all of Iceland's Westfjords.",
    },
    {
      icon: "🏔",
      title: "View to Snæfellsjökull",
      description:
        "On clear days, the glacial crown of Snæfellsjökull — one of Earth's great energy centres and Jules Verne's gateway to the centre of the Earth — rises visibly across the fjord to the south.",
    },
    {
      icon: "🧝",
      title: "Huldufólk of Gufudalssveit",
      description:
        "The people of Gufudalssveit have long known the land here is alive. The Huldufólk — Iceland's hidden people — are said to dwell in the rocks, the birch hollows, and the hillsides above the shore. Do not move the old stones.",
    },
    {
      icon: "🐦",
      title: "Westfjords wildlife",
      description:
        "Atlantic puffin, white-tailed eagle, arctic fox and harbour seal frequent the Eyri coastline. The fjord waters are rich with seabird life year-round.",
    },
    {
      icon: "🌿",
      title: "Ancient birch & lava",
      description:
        "Native birch woodland clings to the valley sides above Eyri — one of the most intact remnants of Iceland's original forest cover, where rewilding work is already underway.",
    },
    {
      icon: "♾",
      title: "Settlement-Age heritage",
      description:
        "Farmsteads in Gufudalssveit date to the Settlement Age — the era of the first Norse arrivals. This is land that has been named, tended, and revered for over a thousand years.",
    },
  ],

  mysticalFacts: [
    "Snæfellsjökull glacier — visible from Eyri í Kollafirði on clear days — is listed as one of Earth's seven great chakra energy centres.",
    "Jules Verne's 'Journey to the Centre of the Earth' (1864) begins beneath Snæfellsjökull, the glacier you can see from your plot.",
    "Over 54% of Icelanders believe in, or don't rule out the existence of, the Huldufólk — Iceland's hidden people.",
    "The people of Gufudalssveit say the large mossy rocks above the Eyri shore must not be disturbed — the hidden people live inside them.",
    "The Icelandic Road Administration has genuinely re-routed roads to protect suspected Huldufólk habitats in the Westfjords.",
    "Vestfirðir holds more than half of Iceland's entire coastline, yet fewer than 7,000 people call it home — one of Europe's least populated regions.",
  ],

  conservation:
    "Your souvenir purchase directly funds rewilding work at Eyri í Kollafirði: native birch woodland restoration in the Gufudalssveit valley, coastal erosion control along the Kollafjörður shoreline, arctic fox and seabird habitat protection, and the careful stewardship of the ancient lava and rock formations where the Huldufólk are said to dwell.",
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
    body: "I bought the 5 sq ft pack as a birthday gift for my husband who is obsessed with Icelandic mythology. He cried. The certificate is beautiful, the coaster is engraved perfectly, and the whole experience of being a 'Baron of Eyri í Kollafirði' has given him such joy. He's already planning a trip to visit the Westfjords.",
    verified: true,
  },
  {
    id: "r2",
    author: "James T.",
    location: "Edinburgh, Scotland",
    rating: 5,
    date: "2024-10-28",
    title: "Stood on my plot — extraordinary",
    body: "We actually visited Eyri í Kollafirði while touring the Westfjords. To stand on the land with the fjord in front of you and Snæfellsjökull visible across the water — I cannot describe it. The What3Words coordinates took us exactly there. On the way back we saw what the locals called a 'Huldufólk stone'. We did not disturb it.",
    verified: true,
  },
  {
    id: "r3",
    author: "Maike van den B.",
    location: "Amsterdam, Netherlands",
    rating: 5,
    date: "2024-12-03",
    title: "Bought for myself — no regrets",
    body: "I'm a Baroness of Eyri í Kollafirði now and I put it on my email signature. My colleagues think I'm hilarious. The certificate looks stunning framed. Also I genuinely feel a connection to the Westfjords conservation effort — those birch rewilding updates are wonderful.",
    verified: true,
  },
  {
    id: "r4",
    author: "Carlos R.",
    location: "Buenos Aires, Argentina",
    rating: 5,
    date: "2024-09-17",
    title: "The 10 sq ft pack is extraordinary",
    body: "Everything in the luxury box is premium — the A3 certificate is museum-quality, the booklet about the Huldufólk of Gufudalssveit and the view to Snæfellsjökull is genuinely fascinating, and the handwritten note was a lovely touch. My wife is now officially the High Baroness of Eyri í Kollafirði in her own mind.",
    verified: true,
  },
  {
    id: "r5",
    author: "Yuki N.",
    location: "Tokyo, Japan",
    rating: 4,
    date: "2024-11-30",
    title: "Beautiful. Slight shipping delay handled perfectly.",
    body: "The gift box arrived beautifully packaged. Slight delay due to Iceland postal service but customer support kept me updated. The product itself is stunning. My friend who received it immediately looked up the Westfjords on Google Earth and found her plot coordinates.",
    verified: true,
  },
  {
    id: "r6",
    author: "Thandi O.",
    location: "Cape Town, South Africa",
    rating: 5,
    date: "2025-01-08",
    title: "My family's favourite Christmas gift",
    body: "I bought three — one each for my mother, sister and myself. We are now all Baronesses of Eyri í Kollafirði. The Huldufólk story in the booklet had us captivated on Christmas Day. We have booked the Fjordside Heritage Walk for next summer and cannot wait to see the view to Snæfellsjökull.",
    verified: true,
  },
];

// ─── Guided Tours ─────────────────────────────────────────────────────────────
export const GUIDED_TOURS: GuidedTour[] = [
  {
    id: "fjordside-heritage-walk",
    name: "Eyri Fjordside Heritage Walk",
    duration: "4 hours",
    groupSize: "Max 10",
    difficulty: "Easy–Moderate",
    description:
      "Walk the ancient shores of Kollafjörður to your reserve at Eyri í Kollafirði. Your guide — a Gufudalssveit local — shares the deep folklore of the Huldufólk, the saga-age history of the valley's farmsteads, and points out the sacred stones that must never be moved. On clear days, Snæfellsjökull fills the southern horizon.",
    price: { EUR: 89, USD: 98, GBP: 75 },
    dates: ["2025-06-14", "2025-06-28", "2025-07-12", "2025-07-26", "2025-08-09"],
    includes: [
      "Gufudalssveit local guide",
      "Coastal walk to your Eyri plot",
      "Huldufólk stone sites visit",
      "Saga-age farmstead history",
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
      "As darkness falls over Vestfirðir, gather at your souvenir plot at Eyri and watch the Northern Lights arc above Kollafjörður. The Huldufólk are said to be most active on these long, silent nights. Across the fjord, Snæfellsjökull glows beneath the aurora.",
    price: { EUR: 119, USD: 131, GBP: 100 },
    dates: ["2025-09-20", "2025-10-04", "2025-10-18", "2025-11-01", "2025-11-15"],
    includes: [
      "Night photography guidance",
      "Wool blankets and hot skyr drink",
      "Aurora prediction briefing",
      "Huldufólk storytelling session",
      "Plot coordinates torchlit visit",
    ],
  },
  {
    id: "huldufolk-wilderness-expedition",
    name: "Huldufólk Wilderness Expedition",
    duration: "6 hours",
    groupSize: "Max 8",
    difficulty: "Moderate",
    description:
      "A full-day journey deep into the Gufudalssveit valley above Eyri í Kollafirði — through birch woodland, past ancient lava formations, and along the ridge with unobstructed views across the fjord to Snæfellsjökull. Your folklore specialist identifies Huldufólk habitats and shares the living oral tradition of the Westfjords.",
    price: { EUR: 149, USD: 164, GBP: 126 },
    dates: ["2025-06-07", "2025-06-21", "2025-07-05", "2025-07-19", "2025-08-02"],
    includes: [
      "Westfjords folklore specialist",
      "Full-day guided valley trek",
      "Huldufólk habitat identification",
      "Ridge viewpoint — Snæfellsjökull panorama",
      "Illustrated Huldufólk booklet",
      "Gufudalssveit herbal tea tasting",
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
      "You are purchasing a souvenir novelty gift — not a real estate transaction. You receive a beautifully personalised certificate granting you the right to style yourself as Jarl, Baron or Baroness of Eyri í Kollafirði (our registered trademark), along with a dedicated GPS-referenced plot within our managed Eyri í Kollafirði Reserve in Gufudalssveit, Vestfirðir. This is purely for enjoyment. Icelandic Titles retains full legal ownership of the land.",
  },
  {
    id: "real-land",
    category: "legal",
    question: "Am I buying real land in Iceland?",
    answer:
      "No. This is a souvenir gift only. Under Icelandic property law (fasteignalög), land ownership requires formal registration in the national property register (þjóðskrá). No such registration occurs with our souvenir plots. Icelandic Titles ehf. retains legal ownership of all reserve land at Eyri í Kollafirði.",
  },
  {
    id: "title-use",
    category: "titles",
    question: "Can I really call myself a Jarl, Baron or Baroness of Eyri í Kollafirði?",
    answer:
      "Yes — as a fun, novelty title! 'Jarl/Baron/Baroness of Eyri í Kollafirði' is our registered trademark and souvenir style. You may use it socially, on social media, in email signatures, and wherever you like for personal enjoyment. It carries no legal weight and is not recognised by any government. Many of our owners use it proudly on personal stationery and at dinner parties.",
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
      "A meaningful portion of every sale goes directly to conservation work at Eyri í Kollafirði in Gufudalssveit, Vestfirðir: native birch woodland restoration, coastal erosion control along the Kollafjörður shoreline, arctic fox and seabird habitat protection, and the careful stewardship of the ancient rock formations where the Huldufólk are said to dwell.",
  },
  {
    id: "plant-tree",
    category: "conservation",
    question: "What is the 'Plant a Tree' add-on?",
    answer:
      "For €42 extra, a native Icelandic birch tree will be planted in your name at Eyri í Kollafirði in the Gufudalssveit valley. You'll receive a personalised bookmark with a Huldufólk illustration and your tree's approximate location. Iceland was once 25–40% forested; today less than 2% has tree cover — in the Westfjords, your tree genuinely matters.",
  },
  {
    id: "huldufolk",
    category: "mystical",
    question: "Who are the Huldufólk — and why do people say they live at Eyri?",
    answer:
      "The Huldufólk are Iceland's hidden people — beautiful, human-sized beings said to live in rocks, hills and ancient lava formations, invisible to most but very much present. Over 54% of Icelanders believe in them or won't rule out their existence. In Gufudalssveit, the tradition is especially strong: locals speak of specific rocks above the Eyri shore that must not be disturbed. Roads in the Westfjords have been genuinely re-routed to avoid suspected Huldufólk habitats. The folklore is ancient, living, and deeply woven into daily life here.",
  },
  {
    id: "snaefellsjokull-view",
    category: "mystical",
    question: "Can you really see Snæfellsjökull from Eyri í Kollafirði?",
    answer:
      "Yes — on clear days, Snæfellsjökull is visible across Kollafjörður to the south. It rises as a luminous, ice-crowned peak above the water, unmistakable and extraordinary. Snæfellsjökull is considered one of Earth's seven great energy centres and was made famous by Jules Verne as the gateway to the centre of the Earth in his 1864 novel. From Eyri í Kollafirði, it has watched over the people of Gufudalssveit for a thousand years.",
  },
  {
    id: "visit-plot",
    category: "plots",
    question: "Can I visit my souvenir plot in person?",
    answer:
      "Absolutely. Your GPS coordinates (65.6038585°N, 22.4952°W) and What3Words address will take you within metres of your designated souvenir plot at Eyri í Kollafirði. The Westfjords are one of Iceland's most spectacular and least-visited regions — standing on your own piece of this ancient landscape with the fjord before you and Snæfellsjökull on the horizon is an unforgettable experience. Plot owners receive 10% off all our guided tours.",
  },
];