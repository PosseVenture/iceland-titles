// ─────────────────────────────────────────────────────────────────────────────
// demo-user.ts — Fake demo data for the /welcome owner dashboard
// In a real app this would come from a session / auth provider.
// ─────────────────────────────────────────────────────────────────────────────
import type { DemoUser } from "@/types";

export const DEMO_USER: DemoUser = {
  name:         "Emma Jónsdóttir",
  email:        "emma@example.com",
  titleStyle:   "Lady",
  plotRef:      "ICE-SNÆ-5SQ-04271",
  plotSize:     "5sqft",
  purchaseDate: "2024-11-08",
  coordinates:  { lat: 64.8312, lng: -23.8105 },
  what3words:   "///glaciers.spirit.elf",
};

// Additional dashboard display data (not in base type)
export const DEMO_EXTRAS = {
  plotName:       "Lava Field Plot #4271",
  reserveName:    "Snæfellsnes Reserve",
  nearestLandmark:"Arnarstapi sea arch — 1.2 km",
  adoptedAnimal: {
    species: "Icelandic Horse",
    name:    "Eldur",
    // Photo displayed in dashboard — uses AdoptionTeaser image (photo-1553284965-83fd3e82fa5a)
    imagePlaceholder: true,
  },
  plantedTree: {
    species:  "Icelandic birch (Betula pubescens)",
    location: "Eastern lava field, Snæfellsnes Reserve",
    planted:  "2024-11-20",
  },
  orderTotal:   "€69",
  deliveryType: "physical" as const,
  // Certificate download (PDF — generated server-side in prod)
  // TODO: Hook up to real PDF generation endpoint
  certificateUrl: "#certificate-modal",
};
