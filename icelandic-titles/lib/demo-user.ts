// ─── Demo / Fake User Data ────────────────────────────────────────────────────
// Used to populate the Welcome Dashboard in demo mode.
// In production this would come from your auth + database layer.

import type { ReserveSlug, TitleStyle, PlotSize } from "@/types";

export interface DemoPlot {
  id: string;
  plotRef: string;
  reserve: ReserveSlug;
  reserveName: string;
  size: PlotSize;
  sqft: number;
  coordinates: { lat: number; lng: number };
  what3words: string;
  purchaseDate: string;
  certificateUrl: string; // mock
  titleStyle: TitleStyle;
  recipientName: string;
}

export interface DemoAdoption {
  id: string;
  animal: string;
  animalIcon: string;
  animalName: string;
  adoptionDate: string;
  nextRenewal: string;
  photo: string; // Unsplash URL
  bio: string;
}

export interface DemoConservation {
  year: number;
  treesPlanted: number;
  hectaresMonitored: number;
  birdsTagged: number;
  foxDensMonitored: number;
  donationTotal: number;
}

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  titleStyle: TitleStyle;
  memberSince: string;
  plots: DemoPlot[];
  adoptions: DemoAdoption[];
  conservation: DemoConservation;
  tourBooking: {
    tourName: string;
    date: string;
    guide: string;
    confirmationCode: string;
  } | null;
}

export const DEMO_USER: DemoUser = {
  id: "usr_demo_001",
  name: "James Morrison",
  email: "j.morrison@example.com",
  titleStyle: "Lord",
  memberSince: "2024-03-15",

  plots: [
    {
      id: "plt_001",
      plotRef: "ICE-THI-5SQ-00842",
      reserve: "thingvellir",
      reserveName: "Thingvellir Reserve",
      size: "5sqft",
      sqft: 5,
      coordinates: { lat: 64.2558, lng: -21.1296 },
      what3words: "///frost.ridge.lava",
      purchaseDate: "2024-03-15",
      certificateUrl: "#certificate-preview",
      titleStyle: "Lord",
      recipientName: "Lord James Morrison",
    },
    {
      id: "plt_002",
      plotRef: "ICE-GLC-10SQ-00291",
      reserve: "glacier-estate",
      reserveName: "Glacier Estate",
      size: "10sqft",
      sqft: 10,
      coordinates: { lat: 64.0161, lng: -16.9703 },
      what3words: "///glacier.basalt.flow",
      purchaseDate: "2024-11-28",
      certificateUrl: "#certificate-preview",
      titleStyle: "Lord",
      recipientName: "Lord James Morrison",
    },
  ],

  adoptions: [
    {
      id: "adp_001",
      animal: "horse",
      animalIcon: "🐴",
      animalName: "Stormur",
      adoptionDate: "2024-03-15",
      nextRenewal: "2025-03-15",
      photo: "https://images.unsplash.com/photo-1553284965-5dd6ddb9d37f?w=400&q=80",
      bio: "Stormur (meaning Storm) is a 7-year-old dun Icelandic stallion from the Skagafjörður valley. He excels at the tölt gait and enjoys exploring the highland reserve boundaries in late summer.",
    },
    {
      id: "adp_002",
      animal: "fox",
      animalIcon: "🦊",
      animalName: "Hrafn",
      adoptionDate: "2024-11-28",
      nextRenewal: "2025-11-28",
      photo: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&q=80",
      bio: "Hrafn (meaning Raven) is a 3-year-old blue morph arctic fox whose territory overlaps the northern edge of Glacier Estate. She was first recorded by camera trap in January 2023 and has since raised two litters.",
    },
  ],

  conservation: {
    year: 2024,
    treesPlanted: 12,
    hectaresMonitored: 847,
    birdsTagged: 34,
    foxDensMonitored: 9,
    donationTotal: 178,
  },

  tourBooking: {
    tourName: "Thingvellir Conservation Walk",
    date: "2025-06-14",
    guide: "Árni Sigurdsson",
    confirmationCode: "TOUR-THI-20250614-004",
  },
};

// ─── Virtual handbook chapters ────────────────────────────────────────────────
export const HANDBOOK_CHAPTERS = [
  { id: "welcome", title: "Welcome to Icelandic Titles", icon: "👑", pages: 4 },
  { id: "your-plot", title: "About Your Plot", icon: "📍", pages: 6 },
  { id: "your-title", title: "Using Your Title", icon: "🏅", pages: 3 },
  { id: "reserve", title: "Your Reserve: History & Nature", icon: "🏔", pages: 12 },
  { id: "conservation", title: "Our Conservation Mission", icon: "🌿", pages: 8 },
  { id: "visiting", title: "Visiting Your Reserve", icon: "🗺", pages: 5 },
  { id: "certificate", title: "Your Certificate Explained", icon: "📜", pages: 2 },
  { id: "legal", title: "Legal & Disclaimer", icon: "⚖️", pages: 3 },
];

// ─── 360 tour scenes ──────────────────────────────────────────────────────────
export const TOUR_SCENES = [
  {
    id: "rift-valley",
    title: "Þingvellir Rift Valley",
    description: "Stand at the edge of the Mid-Atlantic Ridge where two continents meet",
    thumbnail: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=400&q=80",
    embedPlaceholder: true,
  },
  {
    id: "silfra",
    title: "Silfra Fissure",
    description: "Crystal-clear glacial water between tectonic plates",
    thumbnail: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=400&q=80",
    embedPlaceholder: true,
  },
  {
    id: "highland-view",
    title: "Landmannalaugar Ridge",
    description: "Rainbow rhyolite mountains stretching to the horizon",
    thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80",
    embedPlaceholder: true,
  },
  {
    id: "glacier-lagoon",
    title: "Jökulsárlón Lagoon",
    description: "Floating blue icebergs beneath Vatnajökull",
    thumbnail: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
    embedPlaceholder: true,
  },
];
