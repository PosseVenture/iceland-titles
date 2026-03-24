// ─────────────────────────────────────────────────────────────────────────────
// sitemap.ts — Auto-generated sitemap for icelandictitles.com
// Next.js 15 App Router: export default MetadataRoute.Sitemap
// ─────────────────────────────────────────────────────────────────────────────
import type { MetadataRoute } from "next";
import { SITE }               from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now  = new Date();

  return [
    // ── Core pages ───────────────────────────────────────────────────────────
    {
      url:              `${base}/`,
      lastModified:     now,
      changeFrequency: "weekly",
      priority:         1.0,
    },
    {
      url:              `${base}/buy-a-plot`,
      lastModified:     now,
      changeFrequency: "weekly",
      priority:         0.95,
    },
    {
      url:              `${base}/the-land`,
      lastModified:     now,
      changeFrequency: "monthly",
      priority:         0.85,
    },
    {
      url:              `${base}/the-land/snaefellsnes`,
      lastModified:     now,
      changeFrequency: "monthly",
      priority:         0.90,
    },
    {
      url:              `${base}/adopt`,
      lastModified:     now,
      changeFrequency: "monthly",
      priority:         0.75,
    },
    {
      url:              `${base}/guided-tours`,
      lastModified:     now,
      changeFrequency: "monthly",
      priority:         0.80,
    },
    {
      url:              `${base}/faq`,
      lastModified:     now,
      changeFrequency: "monthly",
      priority:         0.70,
    },
    {
      url:              `${base}/legal`,
      lastModified:     now,
      changeFrequency: "yearly",
      priority:         0.40,
    },
    {
      url:              `${base}/contact`,
      lastModified:     now,
      changeFrequency: "yearly",
      priority:         0.60,
    },
    // Note: /welcome, /checkout, /order-success, /order-cancelled
    // are excluded (robots.txt already blocks them)
  ];
}
