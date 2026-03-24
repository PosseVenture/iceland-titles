import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-wrapper";
import { RESERVES } from "@/lib/data";
import { formatCoordinates } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The Land — Our Three Icelandic Nature Reserves",
  description:
    "Explore Thingvellir, Highland View, and Glacier Estate — three breathtaking Icelandic nature reserves managed for conservation.",
};

const BADGE_MAP = { gold: "gold", aurora: "aurora", blue: "blue" } as const;

export default function TheLandPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[45vh] flex items-end pb-16 pt-32 overflow-hidden" aria-labelledby="land-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#040812] via-[#071228] to-[#0A1A35]" aria-hidden="true" />
        <div className="aurora-orb aurora-orb-2 top-0 right-0 opacity-20" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="label-eyebrow mb-4">Our Three Reserves</p>
          <h1 id="land-hero-heading" className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white leading-tight mb-6">
            The Land
          </h1>
          <p className="text-[1.1rem] text-white/55 max-w-2xl mx-auto leading-relaxed">
            Three extraordinary Icelandic nature reserves — each unique, each breathtaking,
            each actively managed for conservation.
          </p>
        </div>
      </section>

      <main id="main-content">
        {RESERVES.map((reserve, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={reserve.slug} id={reserve.slug} className={`section ${index % 2 !== 0 ? "bg-white/[0.025]" : ""}`} aria-labelledby={`${reserve.slug}-heading`}>
              <div className="max-w-7xl mx-auto px-6">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                  {/* Photo */}
                  <div className={`relative ${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/[0.08]">
                      <Image src={reserve.heroImage} alt={reserve.heroImageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority={index === 0} />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/60 backdrop-blur-md rounded-xl px-4 py-2.5 flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-aurora flex-shrink-0" aria-hidden="true" />
                          <span className="text-xs font-mono text-aurora">{formatCoordinates(reserve.coordinates.lat, reserve.coordinates.lng)}</span>
                          <span className="text-xs text-white/40 ml-auto font-mono">{reserve.what3words}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-3 -right-3">
                      <Badge variant={BADGE_MAP[reserve.badgeVariant] as "gold" | "aurora" | "blue"}>{reserve.badge}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <p className="label-eyebrow mb-4">Reserve {String(index + 1).padStart(2, "0")}</p>
                    <h2 id={`${reserve.slug}-heading`} className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight mb-3">{reserve.name}</h2>
                    <p className="text-sm italic text-aurora/70 mb-5">"{reserve.subtitle}"</p>
                    <div className="divider-aurora mb-5" aria-hidden="true" />
                    <p className="text-white/60 leading-relaxed mb-8 text-[0.95rem]">{reserve.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8" aria-label={`${reserve.name} highlights`}>
                      {reserve.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-white/65">
                          <CheckCircle2 className="w-4 h-4 text-aurora-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-aurora-green/[0.06] border border-aurora-green/20 rounded-2xl p-5 mb-8">
                      <h3 className="font-display text-sm font-bold text-aurora-green mb-2">🌿 Conservation Programme</h3>
                      <p className="text-sm text-white/55 leading-relaxed">{reserve.conservation}</p>
                    </div>
                    <Link href={`/buy-a-plot?reserve=${reserve.slug}`} className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 text-sm" aria-label={`Buy a plot at ${reserve.name} from €49`}>
                      Buy a {reserve.name} Plot
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      {/* Conservation Mission */}
      <section className="section" aria-labelledby="mission-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeader eyebrow="Our Promise" title="Land Managed Forever" subtitle="Icelandic Titles retains full ownership of all reserve land and commits to its long-term conservation management in perpetuity. Every purchase directly funds active stewardship work on the ground in Iceland." center id="mission-heading" />
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {["Birch Reforestation","Arctic Fox Protection","Glacial Monitoring","Invasive Species Control","Erosion Management","Wildlife Surveys"].map((tag) => (
              <span key={tag} className="px-3.5 py-1.5 bg-aurora-green/10 border border-aurora-green/20 rounded-full text-xs font-semibold text-aurora-green/80">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
