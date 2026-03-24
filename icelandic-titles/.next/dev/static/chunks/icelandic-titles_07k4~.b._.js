(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/icelandic-titles/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GIFT_ADDONS",
    ()=>GIFT_ADDONS,
    "GUIDED_TOURS",
    ()=>GUIDED_TOURS,
    "PLOT_PRODUCTS",
    ()=>PLOT_PRODUCTS,
    "RESERVES",
    ()=>RESERVES,
    "REVIEWS",
    ()=>REVIEWS,
    "SITE",
    ()=>SITE
]);
const RESERVES = [
    {
        slug: "thingvellir",
        name: "Thingvellir Reserve",
        subtitle: "Where continents divide and history was made",
        description: "Set within Iceland's first UNESCO World Heritage Site, where the North American and Eurasian tectonic plates diverge. The ancient Althing parliament, established in 930 AD, met here for centuries.",
        badge: "UNESCO World Heritage",
        badgeVariant: "gold",
        coordinates: {
            lat: 64.2558,
            lng: -21.1296
        },
        what3words: "///frost.ridge.lava",
        heroImage: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=1200&q=80",
        heroImageAlt: "Aerial view of Thingvellir National Park showing the dramatic rift valley and crystal-clear Þingvallavatn lake in Iceland",
        features: [
            "UNESCO World Heritage Site surroundings",
            "Historic Althing parliament site (est. 930 AD)",
            "Tectonic plate rift valley walks",
            "Crystal-clear Silfra fissure diving",
            "Native birch woodland restoration",
            "Arctic char & brown trout habitat"
        ],
        conservation: "Our Thingvellir Reserve team focuses on native birch reforestation, erosion control along rift walls, and water quality monitoring in Þingvallavatn — one of Iceland's largest and purest lakes."
    },
    {
        slug: "highland-view",
        name: "Highland View Reserve",
        subtitle: "Rainbow mountains and geothermal wonders",
        description: "Nestled in the spectacular geothermal highlands of Landmannalaugar, famous worldwide for its vivid rhyolite rainbow mountains, natural hot springs, and the legendary start of the Laugavegur trekking route.",
        badge: "Most Popular",
        badgeVariant: "aurora",
        coordinates: {
            lat: 63.9853,
            lng: -19.0665
        },
        what3words: "///steam.obsidian.moss",
        heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80",
        heroImageAlt: "Vivid rainbow rhyolite mountains and geothermal steam vents at Landmannalaugar in Iceland's central highlands",
        features: [
            "World-famous rainbow rhyolite mountains",
            "Natural geothermal hot springs",
            "Start of Laugavegur hiking trail",
            "Arctic fox habitat protection zone",
            "Ptarmigan nesting ground conservation",
            "Unique high-temperature flora ecosystem"
        ],
        conservation: "The Highland View team manages arctic fox den monitoring, invasive lupine control to protect native vegetation, and trail erosion mitigation."
    },
    {
        slug: "glacier-estate",
        name: "Glacier Estate",
        subtitle: "Europe's greatest ice kingdom",
        description: "In the shadow of Vatnajökull — Europe's largest glacier — within Skaftafell National Park. A realm of dramatic ice formations, glacial rivers, thundering waterfalls, and Jökulsárlón glacier lagoon.",
        badge: "Premium Location",
        badgeVariant: "blue",
        coordinates: {
            lat: 64.0161,
            lng: -16.9703
        },
        what3words: "///glacier.basalt.flow",
        heroImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80",
        heroImageAlt: "Jökulsárlón glacier lagoon at sunset with floating blue icebergs near Vatnajökull National Park, Iceland",
        features: [
            "Adjacent to Vatnajökull — Europe's largest glacier",
            "Skaftafell National Park access",
            "Near Jökulsárlón glacier lagoon",
            "Svartifoss basalt column waterfall nearby",
            "Migratory bird nesting protection",
            "Glacial retreat monitoring programme"
        ],
        conservation: "The Glacier Estate project documents glacial retreat rates, protects bird nesting colonies along outwash plains, and funds research into sub-glacial volcanic activity."
    }
];
const PLOT_PRODUCTS = [
    {
        id: "plot-1sqft",
        size: "1sqft",
        sqft: 1,
        titleName: "Jarl of Iceland",
        tagline: "Eco Download",
        subtitle: "Instant digital delivery · Zero packaging",
        description: "Own 1 square foot of Icelandic highland and receive everything digitally — perfect for the eco-conscious or anyone who wants instant access.",
        deliveryType: "digital",
        prices: {
            EUR: 49,
            USD: 54,
            GBP: 42
        },
        stripePriceId: {
            EUR: "price_EUR_1sqft_TODO",
            USD: "price_USD_1sqft_TODO",
            GBP: "price_GBP_1sqft_TODO"
        },
        featured: false,
        bestSeller: false,
        accentColor: "from-aurora/20 to-sky-900/20",
        borderColor: "border-aurora/25 hover:border-aurora/50",
        includes: [
            {
                icon: "📜",
                label: "Personalised souvenir certificate",
                description: "A4 PDF, instant download & print-ready"
            },
            {
                icon: "👑",
                label: "Right to style as Jarl / Lord / Lady",
                description: "Registered trademark souvenir title"
            },
            {
                icon: "📍",
                label: "GPS coordinates & What3Words",
                description: "Your exact plot location on Earth"
            },
            {
                icon: "📱",
                label: "Owner dashboard access",
                description: "Digital plot viewer and certificate portal"
            },
            {
                icon: "🌐",
                label: "360° virtual reserve tour",
                description: "Explore your reserve from anywhere"
            },
            {
                icon: "🌱",
                label: "Plant a Tree certificate",
                description: "One native Icelandic tree planted in your name"
            },
            {
                icon: "📊",
                label: "Annual conservation report",
                description: "See your land's ecological impact"
            }
        ],
        notIncludes: [
            "Physical gift box",
            "Printed certificate",
            "Coaster",
            "Postal delivery"
        ]
    },
    {
        id: "plot-5sqft",
        size: "5sqft",
        sqft: 5,
        titleName: "Lord / Lady of Iceland",
        tagline: "Luxury Gift Pack",
        subtitle: "Our most popular choice · Beautifully boxed",
        description: "5 square feet of Icelandic highland with a stunning physical luxury gift pack — A3 certificate, reversible coaster, reserve map, bookmark, and app access card.",
        deliveryType: "both",
        prices: {
            EUR: 69,
            USD: 79,
            GBP: 59
        },
        stripePriceId: {
            EUR: "price_EUR_5sqft_TODO",
            USD: "price_USD_5sqft_TODO",
            GBP: "price_GBP_5sqft_TODO"
        },
        featured: true,
        bestSeller: false,
        accentColor: "from-ice-gold/15 to-amber-900/15",
        borderColor: "border-ice-gold/35 hover:border-ice-gold/60",
        badgeText: "Most Popular",
        includes: [
            {
                icon: "📜",
                label: "Personalised souvenir certificate",
                description: "A4 PDF instant + premium A3 printed, framing-ready"
            },
            {
                icon: "👑",
                label: "Right to style as Jarl / Lord / Lady",
                description: "Registered trademark souvenir title"
            },
            {
                icon: "📍",
                label: "GPS coordinates & What3Words",
                description: "Your exact plot location on Earth"
            },
            {
                icon: "🪨",
                label: "Reversible Jarl / Lord / Lady coaster",
                description: "Hand-finished volcanic basalt, reserve-engraved"
            },
            {
                icon: "🗺",
                label: "Iceland reserve map display",
                description: "Illustrated map with your plot highlighted"
            },
            {
                icon: "🔖",
                label: "'Plant a Tree' bookmark",
                description: "Photo bookmark with tree-planting certificate"
            },
            {
                icon: "📱",
                label: "App access card",
                description: "Physical card with dashboard QR code & login"
            },
            {
                icon: "🎁",
                label: "Luxury gift box",
                description: "Premium box with ribbon, tissue paper & envelope"
            },
            {
                icon: "📊",
                label: "Annual conservation report",
                description: "See your land's ecological impact each year"
            },
            {
                icon: "🚀",
                label: "Priority tour booking",
                description: "Jump the queue for guided reserve visits"
            }
        ]
    },
    {
        id: "plot-10sqft",
        size: "10sqft",
        sqft: 10,
        titleName: "High Jarl of Iceland",
        tagline: "Luxury Gift Pack",
        subtitle: "The ultimate Iceland gift · Collector's edition",
        description: "10 square feet — the grandest expression of your Icelandic legacy. Exclusive collector's certificate, wool wristband, and your name in the dedication register.",
        deliveryType: "both",
        prices: {
            EUR: 109,
            USD: 119,
            GBP: 94
        },
        originalPrices: {
            EUR: 129,
            USD: 142,
            GBP: 110
        },
        stripePriceId: {
            EUR: "price_EUR_10sqft_TODO",
            USD: "price_USD_10sqft_TODO",
            GBP: "price_GBP_10sqft_TODO"
        },
        featured: false,
        bestSeller: true,
        accentColor: "from-aurora-violet/20 to-purple-900/20",
        borderColor: "border-aurora-violet/35 hover:border-aurora-violet/60",
        badgeText: "Best Seller",
        includes: [
            {
                icon: "📜",
                label: "Exclusive High Jarl collector's certificate",
                description: "Limited-edition design, A3 printed & A4 PDF"
            },
            {
                icon: "👑",
                label: "Right to style as High Jarl / Lord / Lady",
                description: "Registered trademark souvenir title"
            },
            {
                icon: "📍",
                label: "GPS coordinates & What3Words",
                description: "Your exact 10 sq ft plot location on Earth"
            },
            {
                icon: "🪨",
                label: "Reversible High Jarl coaster",
                description: "Premium volcanic basalt, engraved both sides"
            },
            {
                icon: "🗺",
                label: "Iceland reserve map display",
                description: "Large-format illustrated reserve map"
            },
            {
                icon: "🔖",
                label: "'Plant a Tree' bookmark",
                description: "Bookmark with tree-planting certificate"
            },
            {
                icon: "📱",
                label: "App access card",
                description: "Physical card with dashboard QR code"
            },
            {
                icon: "🎁",
                label: "Luxury collector's gift box",
                description: "Collector-grade presentation with ribbon"
            },
            {
                icon: "🧶",
                label: "Icelandic wool wristband",
                description: "Sustainably sourced natural Icelandic wool"
            },
            {
                icon: "📋",
                label: "Dedication register inscription",
                description: "Your name permanently recorded in the reserve register"
            },
            {
                icon: "📰",
                label: "Annual conservation newsletter",
                description: "Exclusive updates from the reserve warden"
            },
            {
                icon: "🚀",
                label: "Lifetime priority tour access",
                description: "First access to all guided reserve experiences"
            }
        ]
    },
    {
        id: "plot-bundle-2person",
        size: "bundle-2person",
        sqft: null,
        titleName: "Dual Jarls of Iceland",
        tagline: "Couples Bundle",
        subtitle: "Two side-by-side plots · Perfect for couples & friends",
        description: "Two adjacent 5 sq ft plots, two luxury gift packs personalised for each recipient. The perfect couples gift — certified highland neighbours.",
        deliveryType: "both",
        prices: {
            EUR: 119,
            USD: 132,
            GBP: 102
        },
        originalPrices: {
            EUR: 138,
            USD: 158,
            GBP: 118
        },
        stripePriceId: {
            EUR: "price_EUR_bundle_TODO",
            USD: "price_USD_bundle_TODO",
            GBP: "price_GBP_bundle_TODO"
        },
        featured: false,
        bestSeller: false,
        accentColor: "from-pink-900/20 to-rose-900/15",
        borderColor: "border-pink-500/25 hover:border-pink-500/50",
        badgeText: "Save €19",
        includes: [
            {
                icon: "💑",
                label: "Two personalised certificates",
                description: "Adjacent plot references, one per recipient"
            },
            {
                icon: "👑",
                label: "Two noble souvenir titles",
                description: "Each person chooses Jarl / Lord / Lady"
            },
            {
                icon: "📍",
                label: "Adjacent GPS coordinates",
                description: "Certified side-by-side plots in the same reserve"
            },
            {
                icon: "🪨",
                label: "Two reversible coasters",
                description: "One per recipient, reserve-engraved"
            },
            {
                icon: "🗺",
                label: "Shared reserve map",
                description: "Both plots highlighted on one illustrated map"
            },
            {
                icon: "🔖",
                label: "Two 'Plant a Tree' bookmarks",
                description: "One native tree planted per recipient"
            },
            {
                icon: "📱",
                label: "Two app access cards",
                description: "Separate dashboard logins for each plot owner"
            },
            {
                icon: "🎁",
                label: "Two luxury gift boxes",
                description: "Individually addressed, ready to gift"
            },
            {
                icon: "💌",
                label: "Personalised couple's gift card",
                description: "Bespoke message from you to both recipients"
            }
        ]
    }
];
const GIFT_ADDONS = [
    {
        id: "adopt-horse",
        name: "Adopt an Icelandic Horse",
        description: "Personalised photo, biography card, and annual welfare update.",
        icon: "🐴",
        price: 29,
        priceLabel: "€29/year",
        annual: true
    },
    {
        id: "adopt-puffin",
        name: "Adopt an Atlantic Puffin",
        description: "Support puffin colony conservation. Includes adoption certificate.",
        icon: "🦜",
        price: 19,
        priceLabel: "€19/year",
        annual: true
    },
    {
        id: "adopt-fox",
        name: "Adopt an Arctic Fox",
        description: "Help protect highland habitat and monitor population recovery.",
        icon: "🦊",
        price: 24,
        priceLabel: "€24/year",
        annual: true
    },
    {
        id: "adopt-eagle",
        name: "Adopt a White-tailed Eagle",
        description: "Support Iceland's most majestic raptor. Includes nest camera access.",
        icon: "🦅",
        price: 22,
        priceLabel: "€22/year",
        annual: true
    },
    {
        id: "coaster",
        name: "Extra Volcanic Basalt Coaster",
        description: "Hand-finished coaster engraved with reserve name and GPS coordinates.",
        icon: "🪨",
        price: 12,
        priceLabel: "€12",
        annual: false
    },
    {
        id: "map",
        name: "Reserve Explorer Map",
        description: "Large-format illustrated topographic map on parchment paper.",
        icon: "🗺",
        price: 9,
        priceLabel: "€9",
        annual: false
    }
];
const REVIEWS = [
    {
        id: "1",
        author: "Sophie Müller",
        location: "Berlin, Germany",
        rating: 5,
        date: "2024-11-15",
        text: "Bought this for my husband's birthday and he absolutely loved it. The certificate arrived beautifully packaged and looked incredible framed on the wall. He now insists on being called Lord James at dinner parties!",
        verified: true,
        initials: "SM",
        avatarColor: "from-purple-500/20 to-violet-500/20 text-violet-300"
    },
    {
        id: "2",
        author: "Thomas Kowalski",
        location: "New York, USA",
        rating: 5,
        date: "2024-10-28",
        text: "As someone who's visited Iceland three times, this hits differently. Knowing I have a tiny slice of Landmannalaugar — and that it's being cared for — is genuinely moving. The map is gorgeous.",
        verified: true,
        initials: "TK",
        avatarColor: "from-cyan-500/20 to-sky-500/20 text-sky-300"
    },
    {
        id: "3",
        author: "Erika Lindström",
        location: "Stockholm, Sweden",
        rating: 5,
        date: "2024-12-01",
        text: "Gifted the 5 sq ft pack to my dad who's obsessed with Norse mythology. He was in tears. The quality of everything — certificate, box, bookmarks — is premium.",
        verified: true,
        initials: "EL",
        avatarColor: "from-emerald-500/20 to-teal-500/20 text-emerald-300"
    },
    {
        id: "4",
        author: "Björn Arnarsson",
        location: "Reykjavík, Iceland",
        rating: 5,
        date: "2024-09-14",
        text: "Even as an Icelander, this made me smile! I bought the Glacier Estate plot. The conservation mission is real and important.",
        verified: true,
        initials: "BA",
        avatarColor: "from-amber-500/20 to-yellow-500/20 text-amber-300"
    },
    {
        id: "5",
        author: "Mei Watanabe",
        location: "Tokyo, Japan",
        rating: 5,
        date: "2024-11-30",
        text: "The What3Words feature blew my mind. I found my exact square foot on Google Earth. It's a tiny sliver of mossy highland, but it's MY tiny sliver. Magical.",
        verified: true,
        initials: "MW",
        avatarColor: "from-pink-500/20 to-rose-500/20 text-pink-300"
    },
    {
        id: "6",
        author: "Carlos Reyes",
        location: "Madrid, Spain",
        rating: 5,
        date: "2024-12-10",
        text: "Best Christmas gift I've ever given. My wife is now officially Lady Isabella of the Icelandic Highlands. She has changed her email signature.",
        verified: true,
        initials: "CR",
        avatarColor: "from-red-500/20 to-orange-500/20 text-red-300"
    }
];
const GUIDED_TOURS = [
    {
        id: "thingvellir-walk",
        name: "Thingvellir Conservation Walk",
        reserve: "thingvellir",
        duration: "4 hours",
        groupSize: "Max 12",
        difficulty: "Easy–Moderate",
        description: "A guided walk through the historic rift valley, ending at the reserve. Includes geological briefing and conservation update.",
        price: 89,
        image: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=800&q=80",
        imageAlt: "Hikers walking along Thingvellir rift valley in Iceland"
    },
    {
        id: "highland-expedition",
        name: "Highland Wilderness Expedition",
        reserve: "highland-view",
        duration: "8 hours",
        groupSize: "Max 8",
        difficulty: "Moderate",
        description: "A full-day adventure across the rainbow mountains with a soak in natural hot springs and exclusive reserve briefing.",
        price: 149,
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
        imageAlt: "Group of hikers traversing colourful rhyolite mountains at Landmannalaugar Iceland"
    },
    {
        id: "glacier-walk",
        name: "Glacier Estate Ice Walk",
        reserve: "glacier-estate",
        duration: "Full day",
        groupSize: "Max 10",
        difficulty: "Moderate–Hard",
        description: "Walk on Europe's largest glacier with a certified guide, visit the reserve and Jökulsárlón lagoon. All gear included.",
        price: 195,
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
        imageAlt: "Guided ice walk on Vatnajokull glacier Iceland"
    }
];
const SITE = {
    name: "Icelandic Titles",
    tagline: "Become a Jarl, Lord or Lady of the Icelandic Highlands",
    description: "Buy a souvenir plot of land in a breathtaking Icelandic nature reserve and style yourself as Jarl, Lord or Lady of the Icelandic Highlands. Receive a personalised certificate and help restore Iceland's landscapes.",
    url: "https://icelandictitles.com",
    email: "hello@icelandictitles.com",
    phone: "+354 555 0100",
    address: {
        street: "Laugavegur 15",
        city: "Reykjavík",
        postcode: "101",
        country: "Iceland"
    },
    social: {
        instagram: "https://instagram.com/icelandictitles",
        facebook: "https://facebook.com/icelandictitles",
        tiktok: "https://tiktok.com/@icelandictitles",
        pinterest: "https://pinterest.com/icelandictitles"
    },
    trustpilot: {
        rating: 4.8,
        reviewCount: 22147,
        url: "https://trustpilot.com/review/icelandictitles.com"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/icelandic-titles/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/data.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 28
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
// ─── Trust Badge data ─────────────────────────────────────────────────────────
const TRUST_BADGES = [
    {
        icon: "⭐",
        label: `${__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.rating}/5 · ${(__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.reviewCount / 1000).toFixed(0)}k+ Reviews`
    },
    {
        icon: "🌍",
        label: "Free Worldwide Shipping"
    },
    {
        icon: "🛡",
        label: "90-Day Money-Back Guarantee"
    },
    {
        icon: "🌿",
        label: "Conservation-Backed"
    }
];
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex flex-col justify-center overflow-hidden",
        "aria-labelledby": "hero-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                role: "img",
                "aria-label": "Aurora borealis dancing over a frozen Icelandic landscape at night",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-[#040812] via-[#071228] to-[#0A1A35]"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-ice-black via-transparent to-transparent opacity-80"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aurora-orb aurora-orb-1 top-[-100px] left-[-80px]",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aurora-orb aurora-orb-2 top-[30%] right-[-80px]",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aurora-orb aurora-orb-3 bottom-[20%] left-[35%]",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: containerVariants,
                    initial: "hidden",
                    animate: "visible",
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemVariants,
                            className: "flex items-center gap-4 mb-8",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[1px] w-12 bg-gradient-to-r from-transparent to-ice-gold"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "label-eyebrow text-ice-gold",
                                    children: "Icelandic Titles · Est. 2024"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[1px] w-12 bg-gradient-to-l from-transparent to-ice-gold"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            variants: itemVariants,
                            id: "hero-heading",
                            className: "font-display text-[clamp(2.4rem,7vw,5.2rem)] font-bold leading-[1.05] text-white mb-6",
                            children: [
                                "Become a",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gradient-gold",
                                    children: "Jarl, Lord"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                "or",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gradient-aurora",
                                    children: "Lady"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                "of the Icelandic Highlands"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            variants: itemVariants,
                            className: "text-[clamp(1rem,2.5vw,1.25rem)] text-white/60 font-light max-w-2xl leading-relaxed mb-10",
                            children: "Own a souvenir plot of land in a breathtaking Icelandic nature reserve. Receive a personalised certificate and help restore Iceland's magnificent landscapes for future generations."
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemVariants,
                            className: "flex flex-wrap gap-4 justify-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/buy-a-plot",
                                    className: "btn-gold inline-flex items-center gap-2.5 px-8 py-4 text-base",
                                    "aria-label": "Choose your plot of Icelandic land",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-4 h-4",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        "Choose Your Plot"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-ghost inline-flex items-center gap-2.5 px-8 py-4 text-base text-white font-semibold",
                                    "aria-label": "Watch our Iceland reserve video",
                                    onClick: ()=>{
                                        // TODO: Open video modal with Pan360 virtual tour
                                        console.log("Open virtual tour modal");
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 rounded-full bg-white/20 flex items-center justify-center",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                className: "w-3 h-3 fill-white"
                                            }, void 0, false, {
                                                fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        "Watch the Story"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemVariants,
                            className: "flex flex-wrap gap-x-8 gap-y-3 justify-center",
                            role: "list",
                            "aria-label": "Trust indicators",
                            children: TRUST_BADGES.map(({ icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    role: "listitem",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            "aria-hidden": "true",
                                            children: icon
                                        }, void 0, false, {
                                            fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-white/55 font-medium",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, label, true, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1,
                    duration: 0.6
                },
                className: "relative z-10 max-w-7xl mx-auto px-6 pb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-3 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-0.5",
                            "aria-label": `Rated ${__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.rating} out of 5 stars on Trustpilot`,
                            children: [
                                ...Array(5)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: "w-4 h-4 fill-[#00B67A] text-[#00B67A]",
                                    "aria-hidden": "true"
                                }, i, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-white/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-white font-semibold",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.rating
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "Excellent ·",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-[#00B67A] hover:text-[#00D68A] transition-colors",
                                    "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.reviewCount.toLocaleString()}+ reviews on Trustpilot (opens in new tab)`,
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.reviewCount.toLocaleString(),
                                        "+ reviews"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "on Trustpilot"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.5
                },
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[1px] h-12 bg-gradient-to-b from-ice-gold to-transparent animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-white/25 tracking-widest uppercase",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/sections/Hero.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/icelandic-titles/components/sections/StatsBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsBar",
    ()=>StatsBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// ─── Stat definitions ─────────────────────────────────────────────────────────
const STATS = [
    {
        value: 22000,
        suffix: "+",
        label: "Happy Plot Owners",
        icon: "👑",
        prefix: ""
    },
    {
        value: 3,
        suffix: "",
        label: "Protected Reserves",
        icon: "🏔",
        prefix: ""
    },
    {
        value: 60,
        suffix: "+",
        label: "Countries Reached",
        icon: "🌍",
        prefix: ""
    },
    {
        value: 1,
        suffix: "M+",
        label: "Conservation Funded",
        icon: "🌿",
        prefix: "€"
    }
];
// ─── Animated counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ value, prefix = "", suffix = "", inView }) {
    _s();
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rounded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(count, {
        "AnimatedCounter.useTransform[rounded]": (v)=>Math.round(v).toLocaleString()
    }["AnimatedCounter.useTransform[rounded]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCounter.useEffect": ()=>{
            if (!inView) return;
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(count, value, {
                duration: 2,
                ease: "easeOut"
            });
            return controls.stop;
        }
    }["AnimatedCounter.useEffect"], [
        inView,
        count,
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: [
            prefix,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                children: rounded
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(AnimatedCounter, "Xwv6a+OUhW4aFeMrSXmDsCTZQqQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = AnimatedCounter;
function StatsBar() {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-60px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative z-10 bg-white/[0.03] border-y border-white/[0.06]",
        role: "region",
        "aria-label": "Key statistics",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-aurora/30 to-transparent",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4",
                    role: "list",
                    children: STATS.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                delay: i * 0.1,
                                duration: 0.6,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            className: "flex flex-col items-center text-center gap-2",
                            role: "listitem",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl mb-1",
                                    "aria-hidden": "true",
                                    children: stat.icon
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-display text-3xl lg:text-4xl font-bold text-ice-gold-light",
                                    "aria-label": `${stat.prefix}${stat.value.toLocaleString()}${stat.suffix} ${stat.label}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                        value: stat.value,
                                        prefix: stat.prefix,
                                        suffix: stat.suffix,
                                        inView: inView
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-white/50 leading-tight",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-aurora/20 to-transparent",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/sections/StatsBar.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s1(StatsBar, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = StatsBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedCounter");
__turbopack_context__.k.register(_c1, "StatsBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/icelandic-titles/components/ui/section-wrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeader",
    ()=>SectionHeader,
    "SectionWrapper",
    ()=>SectionWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SectionWrapper({ children, className, id, tinted = false, ariaLabel, ariaLabelledBy, delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("section relative z-10", tinted && "bg-white/[0.025]", className),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 32
            },
            animate: inView ? {
                opacity: 1,
                y: 0
            } : {},
            transition: {
                duration: 0.7,
                delay,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/icelandic-titles/components/ui/section-wrapper.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/icelandic-titles/components/ui/section-wrapper.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(SectionWrapper, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = SectionWrapper;
function SectionHeader({ eyebrow, title, subtitle, center = false, id, dividerColor = "gold" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-14", center && "text-center"),
        children: [
            eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "label-eyebrow mb-3",
                "aria-hidden": "true",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/ui/section-wrapper.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: id,
                className: "font-display text-[clamp(1.75rem,4vw,3rem)] font-bold text-white leading-tight",
                children: title
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/ui/section-wrapper.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-5 mb-5", dividerColor === "gold" ? "divider-gold" : "divider-aurora", center && "mx-auto"),
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/ui/section-wrapper.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[1.05rem] text-white/55 leading-relaxed", center ? "max-w-2xl mx-auto" : "max-w-2xl"),
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/ui/section-wrapper.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/ui/section-wrapper.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c1 = SectionHeader;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionWrapper");
__turbopack_context__.k.register(_c1, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/icelandic-titles/components/sections/HowItWorks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HowItWorks",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-intersection-observer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$section$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/components/ui/section-wrapper.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// ─── Step data ────────────────────────────────────────────────────────────────
const STEPS = [
    {
        number: "01",
        icon: "🗺",
        title: "Choose Your Reserve",
        description: "Select from three stunning Icelandic nature reserves — Thingvellir UNESCO site, the geothermal Highland View, or the epic Glacier Estate.",
        color: "from-aurora/20 to-aurora-violet/10",
        borderColor: "border-aurora/20 hover:border-aurora/40",
        numberColor: "text-aurora"
    },
    {
        number: "02",
        icon: "📏",
        title: "Pick Your Plot Size",
        description: "Choose 1, 5, or 10 square feet. Each comes with GPS coordinates, a What3Words address, and your personalised souvenir certificate.",
        color: "from-aurora-violet/20 to-purple-900/10",
        borderColor: "border-aurora-violet/20 hover:border-aurora-violet/40",
        numberColor: "text-purple-400"
    },
    {
        number: "03",
        icon: "👑",
        title: "Receive Your Title",
        description: "Style yourself as Jarl, Lord or Lady of the Icelandic Highlands — our registered souvenir trademark. Instantly by email, then physically by post.",
        color: "from-ice-gold/15 to-amber-900/10",
        borderColor: "border-ice-gold/20 hover:border-ice-gold/40",
        numberColor: "text-ice-gold-light"
    },
    {
        number: "04",
        icon: "🌿",
        title: "Help Iceland Thrive",
        description: "Your purchase directly funds conservation and restoration of Iceland's precious highland landscapes — birch woodlands, arctic fox habitats, and glacial ecosystems.",
        color: "from-aurora-green/15 to-emerald-900/10",
        borderColor: "border-aurora-green/20 hover:border-aurora-green/40",
        numberColor: "text-aurora-green"
    }
];
// ─── Individual step card ─────────────────────────────────────────────────────
function StepCard({ step, index, inView }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 32
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            delay: index * 0.12,
            duration: 0.6,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: `
        relative group
        bg-gradient-to-br ${step.color}
        border ${step.borderColor}
        rounded-2xl p-7
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-card
      `,
        role: "listitem",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-4 right-5 font-display text-5xl font-bold opacity-[0.08] ${step.numberColor}`,
                "aria-hidden": "true",
                children: step.number
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl mb-5",
                "aria-hidden": "true",
                role: "img",
                children: step.icon
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `font-display text-xs font-bold tracking-[0.2em] uppercase mb-3 ${step.numberColor}`,
                children: [
                    "Step ",
                    step.number
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-display text-xl font-bold text-white mb-3 leading-tight",
                children: step.title
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-white/55 leading-relaxed",
                children: step.description
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            index < STEPS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden xl:block absolute top-1/2 -right-5 -translate-y-1/2 text-white/15 text-xl z-10",
                "aria-hidden": "true",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = StepCard;
function HowItWorks() {
    _s();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$section$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionWrapper"], {
        id: "how-it-works",
        ariaLabelledBy: "how-it-works-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$section$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                    eyebrow: "Simple & Magical",
                    title: "How It Works",
                    subtitle: "In just a few clicks, you'll have a personalised souvenir certificate and your very own piece of Iceland's extraordinary landscape.",
                    center: true,
                    id: "how-it-works-heading"
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 relative",
                        role: "list",
                        "aria-label": "Four steps to owning your Icelandic plot",
                        children: STEPS.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepCard, {
                                step: step,
                                index: i,
                                inView: inView
                            }, step.number, false, {
                                fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: inView ? {
                        opacity: 1
                    } : {},
                    transition: {
                        delay: 0.6,
                        duration: 0.5
                    },
                    className: "text-center mt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-white/35 italic",
                        children: "🛡 90-day money-back guarantee · Free worldwide shipping · Instant digital delivery"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/icelandic-titles/components/sections/HowItWorks.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(HowItWorks, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        useInView
    ];
});
_c1 = HowItWorks;
var _c, _c1;
__turbopack_context__.k.register(_c, "StepCard");
__turbopack_context__.k.register(_c1, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/icelandic-titles/components/ui/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const BadgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center gap-1.5 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase border transition-colors", {
    variants: {
        variant: {
            gold: "bg-ice-gold/15 text-ice-gold-light border-ice-gold/30",
            aurora: "bg-aurora/12 text-aurora border-aurora/30",
            green: "bg-aurora-green/12 text-aurora-green border-aurora-green/30",
            blue: "bg-ice-blue/30 text-aurora border-ice-blue/50",
            violet: "bg-aurora-violet/12 text-purple-300 border-aurora-violet/30",
            muted: "bg-white/[0.06] text-white/50 border-white/10"
        },
        size: {
            sm: "px-2.5 py-1",
            md: "px-3.5 py-1.5"
        }
    },
    defaultVariants: {
        variant: "muted",
        size: "md"
    }
});
function Badge({ className, variant, size, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(BadgeVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/icelandic-titles/components/ui/Badge.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/icelandic-titles/components/sections/ReserveCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReserveCard",
    ()=>ReserveCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/components/ui/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// ─── Badge variant map ────────────────────────────────────────────────────────
const BADGE_VARIANT_MAP = {
    gold: "gold",
    aurora: "aurora",
    blue: "blue"
};
function ReserveCard({ reserve, index, inView }) {
    _s();
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        initial: {
            opacity: 0,
            y: 40
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            delay: index * 0.15,
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: " group relative flex flex-col bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.18] hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] ",
        "aria-label": `${reserve.name} nature reserve`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-56 overflow-hidden",
                children: [
                    !imgError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: reserve.heroImage,
                        alt: reserve.heroImageAlt,
                        fill: true,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                        className: "object-cover transition-transform duration-500 group-hover:scale-105",
                        onError: ()=>setImgError(true),
                        placeholder: "blur",
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIRAAAQQCAgMAAAAAAAAAAAAAAQACAxEEBSExUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoFvntBdaGgFrQ52JJAA6DIqX1xqXjnHGLFwxsFjWuEzQcgn0BERER/9k="
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this) : /* Fallback gradient when image fails to load */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-ice-navy to-ice-blue flex items-center justify-center",
                        role: "img",
                        "aria-label": reserve.heroImageAlt,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-5xl opacity-40",
                            "aria-hidden": "true",
                            children: "🏔"
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: BADGE_VARIANT_MAP[reserve.BadgeVariant],
                            children: reserve.Badge
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-1 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-2xl font-bold text-white mb-2 leading-tight",
                                children: reserve.name
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-xs text-white/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-3 h-3 flex-shrink-0",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-label": `Location: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCoordinates"])(reserve.coordinates.lat, reserve.coordinates.lng)}`,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCoordinates"])(reserve.coordinates.lat, reserve.coordinates.lng)
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm italic text-aurora/70 font-light mb-3",
                        children: [
                            '"',
                            reserve.subtitle,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-white/55 leading-relaxed mb-6",
                        children: reserve.description
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2 mb-7 flex-1",
                        "aria-label": `${reserve.name} features`,
                        children: reserve.features.slice(0, 4).map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2.5 text-sm text-white/65",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-4 h-4 text-aurora-green flex-shrink-0 mt-0.5",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    feature
                                ]
                            }, feature, true, {
                                fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-aurora-green/[0.07] border border-aurora-green/15 rounded-xl px-4 py-3 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-aurora-green/80 leading-relaxed",
                            children: [
                                "🌿 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-aurora-green",
                                    children: "Conservation:"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 16
                                }, this),
                                " ",
                                reserve.conservation.slice(0, 120),
                                "…"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/buy-a-plot?reserve=${reserve.slug}`,
                        className: " group/btn flex items-center justify-between bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] hover:border-aurora/30 rounded-xl px-5 py-3.5 text-sm font-semibold text-white/80 hover:text-white transition-all duration-200 ",
                        "aria-label": `Buy a plot at ${reserve.name}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Buy a ",
                                    reserve.name,
                                    " Plot"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4 text-aurora group-hover/btn:translate-x-1 transition-transform",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/sections/ReserveCard.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(ReserveCard, "0doYx/lFKmVVbvtO/eWR8SJrtgo=");
_c = ReserveCard;
var _c;
__turbopack_context__.k.register(_c, "ReserveCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/icelandic-titles/components/sections/Reserves.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reserves",
    ()=>Reserves
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-intersection-observer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$section$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/components/ui/section-wrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$sections$2f$ReserveCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/components/sections/ReserveCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Reserves() {
    _s();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "reserves",
        className: "relative section",
        "aria-labelledby": "reserves-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$section$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                            eyebrow: "Our Nature Reserves",
                            title: "Three Extraordinary Locations",
                            subtitle: "Each reserve is managed for long-term conservation with rigorous land stewardship. Your souvenir plot is a tiny piece of something vast and magnificent.",
                            center: true,
                            id: "reserves-heading",
                            dividerColor: "aurora"
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ref,
                        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7",
                        role: "list",
                        "aria-label": "Icelandic Titles nature reserves",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESERVES"].map((reserve, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$sections$2f$ReserveCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReserveCard"], {
                                reserve: reserve,
                                index: i,
                                inView: inView
                            }, reserve.slug, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        animate: inView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            delay: 0.55,
                            duration: 0.6
                        },
                        className: "mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-4 border-b border-white/[0.06]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-base font-semibold text-white/70",
                                        children: "Reserve Quick Comparison"
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-sm",
                                        "aria-label": "Comparison table of three Icelandic Titles nature reserves",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-white/[0.06]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left px-6 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-white/35",
                                                            scope: "col",
                                                            children: "Reserve"
                                                        }, void 0, false, {
                                                            fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left px-4 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-white/35 hidden sm:table-cell",
                                                            scope: "col",
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left px-4 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-white/35",
                                                            scope: "col",
                                                            children: "Highlight"
                                                        }, void 0, false, {
                                                            fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left px-4 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-white/35 hidden md:table-cell",
                                                            scope: "col",
                                                            children: "Conservation Focus"
                                                        }, void 0, false, {
                                                            fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3.5",
                                                            scope: "col",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "sr-only",
                                                                children: "Buy plot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: [
                                                    {
                                                        reserve: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESERVES"][0],
                                                        location: "SW Iceland, 40km from Reykjavík",
                                                        highlight: "UNESCO World Heritage rift valley",
                                                        conservation: "Birch reforestation & water quality"
                                                    },
                                                    {
                                                        reserve: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESERVES"][1],
                                                        location: "Central Highlands, Landmannalaugar",
                                                        highlight: "Rainbow rhyolite mountains",
                                                        conservation: "Arctic fox & lupine control"
                                                    },
                                                    {
                                                        reserve: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESERVES"][2],
                                                        location: "SE Iceland, Vatnajökull edge",
                                                        highlight: "Europe's largest glacier",
                                                        conservation: "Glacial retreat monitoring"
                                                    }
                                                ].map(({ reserve, location, highlight, conservation }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b border-white/[0.04] last:border-0 hover:bg-white/[0.03] transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-white",
                                                                    children: reserve.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-white/45 hidden sm:table-cell",
                                                                children: location
                                                            }, void 0, false, {
                                                                fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-aurora/80",
                                                                children: highlight
                                                            }, void 0, false, {
                                                                fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-white/45 hidden md:table-cell",
                                                                children: conservation
                                                            }, void 0, false, {
                                                                fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/buy-a-plot?reserve=${reserve.slug}`,
                                                                    className: "text-xs font-bold text-aurora hover:text-aurora/70 transition-colors whitespace-nowrap",
                                                                    "aria-label": `Buy a plot at ${reserve.name}`,
                                                                    children: "Buy plot →"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, reserve.slug, true, {
                                                        fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: inView ? {
                            opacity: 1
                        } : {},
                        transition: {
                            delay: 0.8
                        },
                        className: "text-center text-xs text-white/25 mt-8 max-w-xl mx-auto leading-relaxed",
                        children: "All reserves are managed by Icelandic Titles ehf. under Icelandic environmental law. Conservation activities are independently monitored. Souvenir purchases — no legal land transfer."
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/sections/Reserves.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Reserves, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        useInView
    ];
});
_c = Reserves;
var _c;
__turbopack_context__.k.register(_c, "Reserves");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/icelandic-titles/components/sections/GiftPacks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GiftPacks",
    ()=>GiftPacks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-intersection-observer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$section$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/components/ui/section-wrapper.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
// ─── Gift pack comparison table ───────────────────────────────────────────────
const COMPARISON_ROWS = [
    {
        feature: "Personalised souvenir certificate",
        eco: "PDF only",
        luxury5: "PDF + A3 print",
        luxury10: "Collector's edition",
        bundle: "×2 PDF + A3"
    },
    {
        feature: "Noble title (Jarl / Lord / Lady)",
        eco: "✓",
        luxury5: "✓",
        luxury10: "High Jarl ✓",
        bundle: "✓ × 2"
    },
    {
        feature: "GPS coordinates & What3Words",
        eco: "✓",
        luxury5: "✓",
        luxury10: "✓",
        bundle: "Adjacent plots"
    },
    {
        feature: "Volcanic basalt coaster",
        eco: "—",
        luxury5: "✓",
        luxury10: "Premium both sides",
        bundle: "✓ × 2"
    },
    {
        feature: "Iceland reserve map",
        eco: "—",
        luxury5: "✓",
        luxury10: "Large format",
        bundle: "Shared map"
    },
    {
        feature: "'Plant a Tree' bookmark",
        eco: "✓",
        luxury5: "✓",
        luxury10: "✓",
        bundle: "✓ × 2"
    },
    {
        feature: "App access card",
        eco: "Digital only",
        luxury5: "Physical card",
        luxury10: "Physical card",
        bundle: "✓ × 2"
    },
    {
        feature: "Luxury gift box",
        eco: "—",
        luxury5: "✓",
        luxury10: "Collector's box",
        bundle: "✓ × 2"
    },
    {
        feature: "Icelandic wool wristband",
        eco: "—",
        luxury5: "—",
        luxury10: "✓",
        bundle: "—"
    },
    {
        feature: "Dedication register",
        eco: "—",
        luxury5: "—",
        luxury10: "✓ lifetime",
        bundle: "—"
    },
    {
        feature: "Delivery",
        eco: "Instant download",
        luxury5: "Digital + Post",
        luxury10: "Digital + Post",
        bundle: "Digital + Post"
    }
];
const COL_STYLES = {
    eco: "text-sky-400/80",
    luxury5: "text-ice-gold-light",
    luxury10: "text-aurora-violet/90",
    bundle: "text-pink-400/90"
};
// ─── Gift pack visual card ────────────────────────────────────────────────────
function PackCard({ product, index, inView }) {
    _s();
    const [justAdded, setJustAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { addItem, currency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])();
    const handleQuickAdd = ()=>{
        addItem({
            cartItemId: `${product.id}-thingvellir-${Date.now()}`,
            productId: product.id,
            productName: product.titleName,
            reserve: "thingvellir",
            reserveName: "Thingvellir Reserve",
            size: product.size,
            sqft: product.sqft,
            price: product.prices[currency],
            currency,
            titleStyle: "Lord",
            recipientName: "Your Name",
            addOns: [],
            deliveryType: product.deliveryType
        });
        setJustAdded(true);
        setTimeout(()=>setJustAdded(false), 2500);
    };
    const price = product.prices[currency];
    const original = product.originalPrices?.[currency];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 32
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            delay: index * 0.12,
            duration: 0.6,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1", `bg-gradient-to-b ${product.accentColor}`, product.borderColor, product.featured && "shadow-gold", product.bestSeller && "shadow-[0_0_40px_rgba(124,58,237,0.15)]"),
        children: [
            product.BadgeText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-3.5 inset-x-0 flex justify-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-lg", product.bestSeller && "bg-aurora-violet text-white", product.featured && !product.bestSeller && "bg-ice-gold text-ice-black", !product.bestSeller && !product.featured && "bg-pink-500 text-white"),
                    children: product.BadgeText
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold tracking-widest uppercase text-white/40 mb-1",
                                children: product.tagline
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-lg font-bold text-white leading-tight",
                                children: product.titleName
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        "aria-hidden": "true",
                        children: product.size === "1sqft" ? "📱" : product.size === "bundle-2person" ? "💑" : "🎁"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            product.sqft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-1.5 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-display text-3xl font-bold text-white",
                        children: product.sqft
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-white/40 uppercase tracking-wider",
                        children: "sq ft"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-display text-2xl font-bold text-white",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(price, currency)
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    original && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-white/30 line-through",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(original, currency)
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                        lineNumber: 120,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-1.5 mb-5 flex-1",
                children: [
                    product.includes.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center gap-2 text-xs text-white/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                item.label
                            ]
                        }, item.label, true, {
                            fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)),
                    product.includes.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "text-xs text-white/35 italic pl-5",
                        children: [
                            "+",
                            product.includes.length - 4,
                            " more included…"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/buy-a-plot?reserve=thingvellir`,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border transition-all", product.featured ? "bg-gradient-to-r from-ice-gold to-amber-600 text-ice-black border-transparent hover:shadow-gold" : product.bestSeller ? "bg-gradient-to-r from-aurora-violet to-purple-600 text-white border-transparent" : "bg-white/10 border-white/20 text-white hover:bg-white/15"),
                        "aria-label": `Customise and buy ${product.titleName}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "w-3 h-3",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            "Customise & Buy"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleQuickAdd,
                        className: "w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all flex-shrink-0",
                        "aria-label": justAdded ? "Added to cart" : `Quick-add ${product.titleName} to cart`,
                        title: justAdded ? "Added!" : "Quick add",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            initial: false,
                            children: justAdded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                exit: {
                                    scale: 0
                                },
                                className: "text-aurora-green text-sm",
                                children: "✓"
                            }, "check", false, {
                                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                lineNumber: 163,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                exit: {
                                    scale: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                    className: "w-4 h-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                    lineNumber: 164,
                                    columnNumber: 107
                                }, this)
                            }, "cart", false, {
                                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                lineNumber: 164,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(PackCard, "mhFwOSu2DbS+tf0Dt0nNd0qoxh8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = PackCard;
function GiftPacks() {
    _s1();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05
    });
    const [showTable, setShowTable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gift-packs",
        className: "section bg-gradient-to-b from-white/[0.02] to-transparent",
        "aria-labelledby": "gift-packs-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$section$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                    eyebrow: "Gift Packs & Bundles",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "The Perfect Gift for ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gradient-gold",
                                children: "Every Budget"
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                lineNumber: 187,
                                columnNumber: 41
                            }, this)
                        ]
                    }, void 0, true),
                    subtitle: "Four ways to own a piece of Iceland — from an instant digital souvenir to a luxury collector's set. Every pack makes a brilliant, unique gift.",
                    center: true,
                    id: "gift-packs-heading"
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-2",
                    role: "list",
                    "aria-label": "Icelandic Titles gift pack options",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLOT_PRODUCTS"].map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "listitem",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackCard, {
                                product: product,
                                index: i,
                                inView: inView
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this)
                        }, product.id, false, {
                            fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: inView ? {
                        opacity: 1
                    } : {},
                    transition: {
                        delay: 0.6
                    },
                    className: "mt-12 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowTable(!showTable),
                        className: "inline-flex items-center gap-2 text-sm text-aurora/70 hover:text-aurora transition-colors",
                        "aria-expanded": showTable,
                        "aria-controls": "comparison-table",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform", showTable && "rotate-90"),
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            showTable ? "Hide" : "Show",
                            " full pack comparison"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: showTable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        id: "comparison-table",
                        initial: {
                            height: 0,
                            opacity: 0
                        },
                        animate: {
                            height: "auto",
                            opacity: 1
                        },
                        exit: {
                            height: 0,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.35
                        },
                        className: "overflow-hidden mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-sm min-w-[640px]",
                                "aria-label": "Full comparison of all four Icelandic Titles gift packs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-white/[0.07]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left px-5 py-4 text-xs font-bold tracking-widest uppercase text-white/30 w-1/3",
                                                    scope: "col",
                                                    children: "Feature"
                                                }, void 0, false, {
                                                    fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 23
                                                }, this),
                                                [
                                                    {
                                                        label: "1 sq ft Eco",
                                                        style: COL_STYLES.eco
                                                    },
                                                    {
                                                        label: "5 sq ft Luxury",
                                                        style: COL_STYLES.luxury5
                                                    },
                                                    {
                                                        label: "10 sq ft Luxury",
                                                        style: COL_STYLES.luxury10
                                                    },
                                                    {
                                                        label: "Couples Bundle",
                                                        style: COL_STYLES.bundle
                                                    }
                                                ].map(({ label, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: `px-4 py-4 text-xs font-bold tracking-wide uppercase ${style} text-center`,
                                                        scope: "col",
                                                        children: label
                                                    }, label, false, {
                                                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 25
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                            lineNumber: 241,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                        lineNumber: 240,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: COMPARISON_ROWS.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b border-white/[0.04] last:border-0", i % 2 === 0 && "bg-white/[0.015]"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3.5 text-xs text-white/55 font-medium",
                                                        children: row.feature
                                                    }, void 0, false, {
                                                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 25
                                                    }, this),
                                                    [
                                                        "eco",
                                                        "luxury5",
                                                        "luxury10",
                                                        "bundle"
                                                    ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-3.5 text-xs text-center", row[col] === "—" ? "text-white/20" : COL_STYLES[col]),
                                                            children: row[col]
                                                        }, col, false, {
                                                            fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 27
                                                        }, this))
                                                ]
                                            }, row.feature, true, {
                                                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                                lineNumber: 257,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                        lineNumber: 255,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                lineNumber: 236,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                            lineNumber: 235,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                        lineNumber: 227,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: inView ? {
                        opacity: 1
                    } : {},
                    transition: {
                        delay: 0.7
                    },
                    className: "text-center mt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/buy-a-plot",
                            className: "btn-gold inline-flex items-center gap-2 px-8 py-4 text-sm",
                            "aria-label": "See all plots and customise your order",
                            children: [
                                "See All Plots & Customise",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-4 h-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-white/25 mt-3",
                            children: "🛡 90-day money-back · Free worldwide shipping · Instant digital delivery"
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
            lineNumber: 184,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/icelandic-titles/components/sections/GiftPacks.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s1(GiftPacks, "GYTs0rUlGSXmERKPSU4vDtAcViE=", false, function() {
    return [
        useInView
    ];
});
_c1 = GiftPacks;
var _c, _c1;
__turbopack_context__.k.register(_c, "PackCard");
__turbopack_context__.k.register(_c1, "GiftPacks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdoptAnAnimal",
    ()=>AdoptAnAnimal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-intersection-observer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$section$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/components/ui/section-wrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// ─── Animal detail data (extended beyond what's in data.ts) ──────────────────
const ANIMAL_DETAILS = {
    "adopt-horse": {
        fullDescription: "The Icelandic horse is one of the purest horse breeds on Earth — brought to Iceland by Vikings over 1,100 years ago, with no new breeds allowed in since 928 AD. They're uniquely capable of the tölt, a smooth four-beat gait that can carry a rider at speed without the jarring bounce of a trot.",
        facts: [
            "Breed isolated since 928 AD — no imports allowed",
            "Can perform 5 gaits including the unique tölt",
            "Incredibly hardy — lives outdoors year-round",
            "Average lifespan of 25–30 years"
        ],
        whatsIncluded: [
            "Personalised adoption certificate with your horse's name & photo",
            "Detailed biography card (breed, age, personality)",
            "Annual welfare update with new photographs",
            "Name listed on reserve adoption board",
            "Access to horse's online profile page"
        ],
        conservation: "Your adoption fee directly supports the care, feed, and veterinary needs of your adopted horse throughout the year.",
        gradient: "from-amber-900/30 to-yellow-900/20",
        glowColor: "rgba(245,158,11,0.2)",
        bgPattern: "🐴"
    },
    "adopt-puffin": {
        fullDescription: "Iceland is home to the world's largest Atlantic puffin colony — around 8–10 million birds nest on Icelandic cliffs each summer. These characterful seabirds spend most of their lives far out at sea, only coming ashore for a few months to breed. Their populations have declined by 70% in some areas due to overfishing and climate change.",
        facts: [
            "Iceland hosts 60% of the world's Atlantic puffins",
            "Can dive to 60m depth chasing sand eels",
            "Mates for life and returns to the same burrow each year",
            "Populations declined 70% in key colonies since the 1980s"
        ],
        whatsIncluded: [
            "Personalised adoption certificate with puffin colony photo",
            "Biography card: colony location, nesting season details",
            "Annual conservation update with colony survey results",
            "Name listed on the Puffin Colony Support board",
            "Access to seasonal nest-cam footage"
        ],
        conservation: "Adoption funds support nest-burrow surveying, sand eel recovery advocacy, and cliff-face habitat protection on our coastal reserve boundaries.",
        gradient: "from-cyan-900/30 to-sky-900/20",
        glowColor: "rgba(0,212,255,0.15)",
        bgPattern: "🐦"
    },
    "adopt-fox": {
        fullDescription: "The arctic fox is Iceland's only native land mammal — it arrived on foot across sea ice at the end of the last Ice Age, around 12,000 years ago. Today Iceland's entire arctic fox population numbers fewer than 10,000 individuals, with highland populations under pressure from habitat change and invasive species competition.",
        facts: [
            "Iceland's only native land mammal",
            "Arrived on foot across sea ice ~12,000 years ago",
            "Fewer than 10,000 remain in Iceland today",
            "Changes coat from brown-grey (summer) to white (winter)"
        ],
        whatsIncluded: [
            "Personalised adoption certificate with your fox's den location",
            "Biography card: territory map, coat colour phase, family group",
            "Annual den monitoring report with population data",
            "Name listed on the Arctic Fox Sponsor board",
            "GPS territory tracking data (aggregated, seasonal)"
        ],
        conservation: "Adoption funds support den monitoring, food supplementation during harsh winters, and invasive species (lupine) clearance to protect highland hunting grounds.",
        gradient: "from-emerald-900/30 to-teal-900/20",
        glowColor: "rgba(16,185,129,0.18)",
        bgPattern: "🦊"
    },
    "adopt-eagle": {
        fullDescription: "The white-tailed eagle was hunted to extinction in Iceland by the early 20th century. A reintroduction programme began in the 1970s and Iceland's eagle population has grown to around 100 pairs — still critically fragile. As Europe's largest eagle, with a 2.5m wingspan, they are the apex aerial predator of the Icelandic highlands.",
        facts: [
            "Hunted to extinction in Iceland — reintroduced 1974",
            "Around 100 breeding pairs remain today",
            "Europe's largest eagle — 2.5m wingspan",
            "Can live for 25–30 years in the wild"
        ],
        whatsIncluded: [
            "Personalised adoption certificate with nest location",
            "Biography card: nest GPS, wingspan measurements, known territory",
            "Annual breeding season report with chick data",
            "Name listed on the Eagle Sponsor register",
            "Access to seasonal nest camera livestream"
        ],
        conservation: "Adoption funds support nest protection, anti-poisoning campaigns (eagles are vulnerable to second-hand rodenticide), and breeding pair monitoring.",
        gradient: "from-purple-900/30 to-violet-900/20",
        glowColor: "rgba(124,58,237,0.18)",
        bgPattern: "🦅"
    }
};
// ─── Adoption modal ───────────────────────────────────────────────────────────
function AdoptModal({ addonId, onClose }) {
    _s();
    const addon = __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GIFT_ADDONS"].find((a)=>a.id === addonId);
    const detail = ANIMAL_DETAILS[addonId];
    const [adopted, setAdopted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAdopt = ()=>{
        setAdopted(true);
    // TODO Part 6: wire to Stripe for annual subscription
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm",
        onClick: (e)=>e.target === e.currentTarget && onClose(),
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "adopt-modal-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                scale: 0.92,
                opacity: 0,
                y: 24
            },
            animate: {
                scale: 1,
                opacity: 1,
                y: 0
            },
            exit: {
                scale: 0.95,
                opacity: 0,
                y: 12
            },
            transition: {
                type: "spring",
                damping: 28,
                stiffness: 260
            },
            className: `relative w-full max-w-lg bg-gradient-to-b ${detail.gradient} bg-[#070f1e] border border-white/[0.1] rounded-2xl overflow-hidden max-h-[90vh] flex flex-col`,
            style: {
                boxShadow: `0 0 80px ${detail.glowColor}, 0 40px 80px rgba(0,0,0,0.6)`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-black/40 text-white/50 hover:text-white hover:bg-black/60 transition-all",
                    "aria-label": "Close adoption details",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 pt-8 pb-6 text-center border-b border-white/[0.07] flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-3",
                            "aria-hidden": "true",
                            children: addon.icon
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "adopt-modal-heading",
                            className: "font-display text-2xl font-bold text-white",
                            children: addon.name
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/45 mt-1.5 leading-relaxed",
                            children: addon.description
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2 mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display text-2xl font-bold text-ice-gold-light",
                                    children: addon.priceLabel
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                addon.annual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-white/35 bg-white/[0.05] border border-white/[0.08] px-2 py-0.5 rounded-full",
                                    children: "Annual renewal"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 155,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto px-6 py-5 space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold tracking-widest uppercase text-white/40 mb-2",
                                    children: "About this animal"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-white/60 leading-relaxed",
                                    children: detail.fullDescription
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold tracking-widest uppercase text-white/40 mb-2.5",
                                    children: "Key facts"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: detail.facts.map((fact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2 text-sm text-white/60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-aurora/60 mt-0.5 flex-shrink-0",
                                                    "aria-hidden": "true",
                                                    children: "◆"
                                                }, void 0, false, {
                                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this),
                                                fact
                                            ]
                                        }, fact, true, {
                                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold tracking-widest uppercase text-white/40 mb-2.5",
                                    children: "What you receive"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: detail.whatsIncluded.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2 text-sm text-white/65",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-4 h-4 text-aurora-green flex-shrink-0 mt-0.5",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this),
                                                item
                                            ]
                                        }, item, true, {
                                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-aurora-green/[0.07] border border-aurora-green/20 rounded-xl p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-aurora-green/80 leading-relaxed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-aurora-green",
                                        children: "🌿 Conservation impact: "
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    detail.conservation
                                ]
                            }, void 0, true, {
                                fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 px-6 py-5 border-t border-white/[0.07] bg-black/20",
                    children: [
                        adopted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            className: "text-center py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-aurora-green font-bold text-sm flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-4 h-4 fill-aurora-green",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this),
                                        "Thank you! Your adoption is confirmed."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/40 mt-1",
                                    children: "Check your email for adoption pack details — and welcome to the family!"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAdopt,
                            className: "w-full btn-gold py-4 text-sm font-bold flex items-center justify-center gap-2 rounded-xl",
                            "aria-label": `Adopt and support ${addon.name} for ${addon.priceLabel}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "w-4 h-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this),
                                "Adopt for ",
                                addon.priceLabel,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-[11px] text-white/25 mt-2",
                            children: "Cancel anytime · 90-day money-back"
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(AdoptModal, "kSoo1xFsN2vM9wZkE7FUUEdXRIk=");
_c = AdoptModal;
// ─── Individual animal card ───────────────────────────────────────────────────
function AnimalCard({ addon, index, inView, onSelect }) {
    const detail = ANIMAL_DETAILS[addon.id];
    if (!detail) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        initial: {
            opacity: 0,
            y: 32
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            delay: index * 0.12,
            duration: 0.6,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex flex-col rounded-2xl border border-white/[0.08] overflow-hidden", `bg-gradient-to-b ${detail.gradient}`, "hover:border-white/[0.18] hover:-translate-y-1.5 transition-all duration-300"),
        style: {
            "--glow": detail.glowColor
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-32 flex items-center justify-center overflow-hidden",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-30",
                        style: {
                            background: `radial-gradient(ellipse at center, ${detail.glowColor} 0%, transparent 70%)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute text-[120px] opacity-[0.08] select-none",
                        "aria-hidden": "true",
                        children: detail.bgPattern
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative text-6xl z-10 group-hover:scale-110 transition-transform duration-300",
                        children: addon.icon
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    addon.annual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-3 right-3 text-[10px] font-bold bg-ice-gold/20 text-ice-gold-light border border-ice-gold/30 px-2 py-0.5 rounded-full",
                        children: "Annual"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex flex-col flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-lg font-bold text-white mb-1 leading-tight",
                        children: addon.name
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-white/50 leading-relaxed mb-4 flex-1",
                        children: addon.description
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-1.5 mb-5",
                        children: detail.facts.slice(0, 2).map((fact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2 text-xs text-white/45",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-aurora/50 flex-shrink-0 mt-0.5",
                                        "aria-hidden": "true",
                                        children: "◆"
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    fact
                                ]
                            }, fact, true, {
                                fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display text-xl font-bold text-ice-gold-light",
                                        children: addon.priceLabel
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-white/30 mt-0.5",
                                        children: "Annual adoption"
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelect(addon.id),
                                className: "flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all",
                                "aria-label": `Learn more about adopting ${addon.name}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-3.5 h-3.5 text-red-400",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this),
                                    "Adopt"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_c1 = AnimalCard;
function AdoptAnAnimal() {
    _s1();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05
    });
    const [selectedAddon, setSelectedAddon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Only show the 4 animal adoptions (not the physical add-ons)
    const animals = __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GIFT_ADDONS"].filter((a)=>a.annual);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "adopt",
                className: "section",
                "aria-labelledby": "adopt-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$section$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                            eyebrow: "Animal Adoption",
                            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Adopt an ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-aurora",
                                        children: "Icelandic Animal"
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                        lineNumber: 343,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true),
                            subtitle: "Go beyond owning land — adopt one of Iceland's iconic animals. Your annual adoption fee funds real conservation work and connects you personally to Iceland's most extraordinary wildlife.",
                            center: true,
                            id: "adopt-heading"
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: ref,
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                            role: "list",
                            "aria-label": "Icelandic animals available for adoption",
                            children: animals.map((addon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    role: "listitem",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimalCard, {
                                        addon: addon,
                                        index: i,
                                        inView: inView,
                                        onSelect: setSelectedAddon
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                        lineNumber: 357,
                                        columnNumber: 17
                                    }, this)
                                }, addon.id, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                delay: 0.55
                            },
                            className: "mt-10 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 text-3xl flex-shrink-0",
                                    "aria-hidden": "true",
                                    children: "🐴🐦🦊🦅"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 text-center sm:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-display text-base font-bold text-white",
                                            children: "Adopt the Whole Highland Family"
                                        }, void 0, false, {
                                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/45 mt-1",
                                            children: [
                                                "All four animals for ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-ice-gold-light",
                                                    children: "€94/year"
                                                }, void 0, false, {
                                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 38
                                                }, this),
                                                " — save €20 vs. adopting individually."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                            lineNumber: 377,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-gold px-6 py-3 text-sm font-bold whitespace-nowrap rounded-xl flex-shrink-0",
                                    onClick: ()=>{},
                                    "aria-label": "Adopt all four animals for €94 per year",
                                    children: "Adopt All Four · €94/yr"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedAddon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdoptModal, {
                    addonId: selectedAddon,
                    onClose: ()=>setSelectedAddon(null)
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                    lineNumber: 395,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/AdoptAnAnimal.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(AdoptAnAnimal, "evDrub7MgRqDp7yEvAdjS/hCUd4=", false, function() {
    return [
        useInView
    ];
});
_c2 = AdoptAnAnimal;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AdoptModal");
__turbopack_context__.k.register(_c1, "AnimalCard");
__turbopack_context__.k.register(_c2, "AdoptAnAnimal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/icelandic-titles/components/sections/Reviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reviews",
    ()=>Reviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-intersection-observer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$section$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/components/ui/section-wrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/icelandic-titles/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// ─── Star row helper ──────────────────────────────────────────────────────────
function StarRow({ rating, size = "sm" }) {
    const sizes = {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-0.5",
        role: "img",
        "aria-label": `${rating} out of 5 stars`,
        children: [
            1,
            2,
            3,
            4,
            5
        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizes[size], i <= rating ? "fill-[#00B67A] text-[#00B67A]" : "fill-white/10 text-white/10"),
                "aria-hidden": "true"
            }, i, false, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = StarRow;
// ─── Trustpilot summary bar ───────────────────────────────────────────────────
function TrustpilotSummary() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row items-center gap-5 bg-[#00B67A]/[0.07] border border-[#00B67A]/25 rounded-2xl px-6 py-5 mb-14",
        "aria-label": `Trustpilot rating: ${__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.rating} out of 5 from ${__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.reviewCount.toLocaleString()} reviews`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-0.5",
                        "aria-hidden": "true",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-[#00B67A] rounded flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: "w-5 h-5 fill-white text-white",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-white text-sm",
                                children: "Trustpilot"
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[#00B67A]",
                                children: "Excellent"
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-px h-10 bg-white/10 hidden sm:block",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-wrap items-center gap-4 justify-center sm:justify-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-3xl font-bold text-white leading-none",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.rating
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/40 mt-1",
                                children: "Average rating"
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-3xl font-bold text-white leading-none",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.reviewCount.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/40 mt-1",
                                children: "Verified reviews"
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-3xl font-bold text-white leading-none",
                                children: "97%"
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/40 mt-1",
                                children: "5-star reviews"
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-1.5 text-[#00B67A]/80 hover:text-[#00B67A] text-xs font-semibold transition-colors whitespace-nowrap",
                "aria-label": "Read all reviews on Trustpilot (opens in new tab)",
                children: [
                    "Read all reviews",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                        className: "w-3 h-3",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c1 = TrustpilotSummary;
// ─── Individual review card ───────────────────────────────────────────────────
function ReviewCard({ review, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        layout: true,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.96
        },
        transition: {
            delay: index * 0.07,
            duration: 0.4
        },
        className: "bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex flex-col hover:border-white/[0.12] hover:-translate-y-0.5 transition-all duration-200",
        "aria-label": `Review by ${review.author} from ${review.location}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRow, {
                        rating: review.rating
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                        className: "w-4 h-4 text-white/15 flex-shrink-0",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                className: "flex-1 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-white/65 leading-relaxed italic",
                    children: [
                        "“",
                        review.text,
                        "”"
                    ]
                }, void 0, true, {
                    fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "flex items-center gap-2.5 pt-4 border-t border-white/[0.05]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-9 h-9 rounded-full bg-gradient-to-br flex items-center justify-center text-xs font-bold flex-shrink-0", review.avatarColor),
                        "aria-hidden": "true",
                        children: review.initials
                    }, void 0, false, {
                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
                                className: "font-semibold text-sm text-white/80 not-italic block truncate",
                                children: review.author
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/35 truncate",
                                children: review.location
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-end gap-1",
                        children: [
                            review.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-[10px] text-[#00B67A]/80 font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: "w-3 h-3",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    "Verified"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                dateTime: review.date,
                                className: "text-[10px] text-white/25",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(review.date)
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c2 = ReviewCard;
// ─── Rating distribution bar ──────────────────────────────────────────────────
function RatingBar({ stars, percent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2.5 text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white/40 w-3 text-right",
                children: stars
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                className: "w-3 h-3 fill-[#00B67A] text-[#00B67A] flex-shrink-0",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: `${percent}%`
                    },
                    transition: {
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeOut"
                    },
                    className: "h-full bg-[#00B67A] rounded-full",
                    role: "progressbar",
                    "aria-valuenow": percent,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-label": `${stars} star reviews: ${percent}%`
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white/30 w-8 text-right",
                children: [
                    percent,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c3 = RatingBar;
function Reviews() {
    _s();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05
    });
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const tabs = [
        {
            value: "all",
            label: "All Reviews"
        },
        {
            value: "5",
            label: "⭐ 5 Stars Only"
        },
        {
            value: "gift",
            label: "🎁 Gift Purchases"
        },
        {
            value: "recent",
            label: "🕐 Most Recent"
        }
    ];
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Reviews.useMemo[filtered]": ()=>{
            switch(activeTab){
                case "5":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEWS"].filter({
                        "Reviews.useMemo[filtered]": (r)=>r.rating === 5
                    }["Reviews.useMemo[filtered]"]);
                case "gift":
                    // Approximate: reviews mentioning gift-related words
                    return __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEWS"].filter({
                        "Reviews.useMemo[filtered]": (r)=>/gift|bought|gave|husband|wife|dad|mum|friend|birthday|christmas|anniversary/i.test(r.text)
                    }["Reviews.useMemo[filtered]"]);
                case "recent":
                    return [
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEWS"]
                    ].sort({
                        "Reviews.useMemo[filtered]": (a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime()
                    }["Reviews.useMemo[filtered]"]);
                default:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEWS"];
            }
        }
    }["Reviews.useMemo[filtered]"], [
        activeTab
    ]);
    const RATING_DISTRIBUTION = [
        {
            stars: 5,
            percent: 97
        },
        {
            stars: 4,
            percent: 2
        },
        {
            stars: 3,
            percent: 1
        },
        {
            stars: 2,
            percent: 0
        },
        {
            stars: 1,
            percent: 0
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "reviews",
        className: "section bg-white/[0.015]",
        "aria-labelledby": "reviews-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$components$2f$ui$2f$section$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                    eyebrow: "Customer Reviews",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Loved by ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gradient-aurora",
                                children: "22,000+ Owners"
                            }, void 0, false, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 222,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true),
                    subtitle: "Real reviews from real plot owners across 60+ countries. Join a global community of Jarls, Lords and Ladies of the Icelandic Highlands.",
                    center: true,
                    id: "reviews-heading"
                }, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustpilotSummary, {}, void 0, false, {
                    fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: "grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            "aria-label": "Rating distribution",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-24 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display text-5xl font-bold text-white",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.rating
                                            }, void 0, false, {
                                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRow, {
                                                rating: 5,
                                                size: "md"
                                            }, void 0, false, {
                                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/35 mt-2",
                                                children: "out of 5.0"
                                            }, void 0, false, {
                                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px bg-white/[0.06]",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        "aria-label": "Review distribution by star rating",
                                        children: RATING_DISTRIBUTION.map(({ stars, percent })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RatingBar, {
                                                stars: stars,
                                                percent: percent
                                            }, stars, false, {
                                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                                lineNumber: 249,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px bg-white/[0.06]",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white/70",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.reviewCount.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this),
                                                    " verified reviews"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white/70",
                                                        children: "60+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this),
                                                    " countries represented"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "block w-full text-center py-2.5 text-xs font-semibold text-[#00B67A]/80 hover:text-[#00B67A] border border-[#00B67A]/20 hover:border-[#00B67A]/40 rounded-xl transition-all",
                                        "aria-label": "Write a review on Trustpilot (opens in new tab)",
                                        children: "Write a Review ↗"
                                    }, void 0, false, {
                                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mb-6",
                                    role: "tablist",
                                    "aria-label": "Filter reviews",
                                    children: [
                                        tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                role: "tab",
                                                "aria-selected": activeTab === tab.value,
                                                onClick: ()=>setActiveTab(tab.value),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-xl text-xs font-semibold border transition-all", activeTab === tab.value ? "bg-aurora/15 border-aurora/40 text-aurora" : "bg-transparent border-white/10 text-white/45 hover:text-white hover:border-white/25"),
                                                children: tab.label
                                            }, tab.value, false, {
                                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-auto self-center text-xs text-white/25",
                                            "aria-live": "polite",
                                            children: [
                                                filtered.length,
                                                " review",
                                                filtered.length !== 1 ? "s" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    role: "tabpanel",
                                    "aria-label": `${activeTab} reviews`,
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            mode: "popLayout",
                                            children: filtered.map((review, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewCard, {
                                                    review: review,
                                                    index: i
                                                }, review.id, false, {
                                                    fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2 text-center py-12 text-white/35",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No reviews match this filter."
                                            }, void 0, false, {
                                                fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-sm text-white/35 hover:text-white/60 transition-colors underline decoration-dotted",
                                        "aria-label": `Read all ${__TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.reviewCount.toLocaleString()} reviews on Trustpilot`,
                                        children: [
                                            "Read all ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$icelandic$2d$titles$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].trustpilot.reviewCount.toLocaleString(),
                                            " reviews on Trustpilot ↗"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
            lineNumber: 219,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/icelandic-titles/components/sections/Reviews.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(Reviews, "mbyivTAsthZjPabhY8FgZAx/op8=", false, function() {
    return [
        useInView
    ];
});
_c4 = Reviews;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "StarRow");
__turbopack_context__.k.register(_c1, "TrustpilotSummary");
__turbopack_context__.k.register(_c2, "ReviewCard");
__turbopack_context__.k.register(_c3, "RatingBar");
__turbopack_context__.k.register(_c4, "Reviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=icelandic-titles_07k4~.b._.js.map