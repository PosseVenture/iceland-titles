"use client";
// ─────────────────────────────────────────────────────────────────────────────
// AdoptionTeaser — Icelandic Horse (+ Arctic Fox / Puffin) adoption homepage teaser
// ─────────────────────────────────────────────────────────────────────────────
import Image       from "next/image";
import Link        from "next/link";
import { motion }  from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { cn }      from "@/lib/utils";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";

const ANIMALS = [
  {
    emoji:    "🐴",
    name:     "Icelandic Horse",
    tagline:  "Adopt a legendary tölt-master",
    from:     "from €29/year",
    desc:     "The Icelandic horse is one of the purest and oldest breeds in the world — and uniquely, they never leave Iceland. Adopt your own and receive a personalised certificate, photo, and backstory.",
    // TODO: Replace — Unsplash query: "Icelandic horse landscape snæfellsnes"
    image:    "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80",
    imageAlt: "Majestic Icelandic horse in the Snæfellsnes landscape — pure breed that has never left Iceland",
    highlight: true,
  },
  {
    emoji:    "🦊",
    name:     "Arctic Fox",
    tagline:  "Sponsor Iceland's only wild land mammal",
    from:     "from €24/year",
    desc:     "The arctic fox has inhabited Iceland since the last ice age, arriving on foot across frozen seas. Sponsor one of our Snæfellsnes fox families and track their seasonal coat changes.",
    // TODO: Replace — Unsplash query: "arctic fox iceland white winter"
    image:    "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80",
    imageAlt: "White arctic fox in winter coat — Iceland's only wild land mammal, walking the same lava fields as the huldufólk",
    highlight: false,
  },
  {
    emoji:    "🐦",
    name:     "Puffin",
    tagline:  "Protect Iceland's beloved sea bird",
    from:     "from €19/year",
    desc:     "Every summer, millions of puffins return to Iceland's coastal cliffs to nest. Adopt one of our Snæfellsnes colony and help fund cliff habitat protection and population monitoring.",
    // TODO: Replace — Unsplash query: "puffin iceland sea cliff close up"
    image:    "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80",
    imageAlt: "Atlantic puffin with colourful beak on the Snæfellsnes sea cliffs — one of Iceland's most beloved and photographed birds",
    highlight: false,
  },
];

function AnimalCard({
  animal,
  index,
}: {
  animal: typeof ANIMALS[0];
  index:  number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      aria-label={`Adopt an ${animal.name}`}
      className={cn(
        "glass-card overflow-hidden flex flex-col",
        "transition-all duration-300 group",
        animal.highlight
          ? "border-glacier/22 hover:border-glacier/40 hover:shadow-glacier"
          : "hover:border-white/12"
      )}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={animal.image}
          alt={animal.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ice-black/80 via-transparent to-transparent" />

        {/* Emoji + name overlay */}
        <div className="absolute bottom-4 left-4">
          <span className="text-3xl" aria-hidden="true">{animal.emoji}</span>
        </div>

        {animal.highlight && (
          <div className="absolute top-3 right-3 bg-glacier/90 text-ice-black text-[11px] font-body font-bold px-2.5 py-1 rounded-full">
            Most Popular
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold text-white mb-1">
          {animal.name}
        </h3>
        <p className="font-body text-xs text-white/40 italic mb-3">
          {animal.tagline}
        </p>
        <p className="font-body text-sm text-white/55 leading-relaxed flex-1">
          {animal.desc}
        </p>

        <div className="mt-5 pt-4 border-t border-white/[0.07] flex items-center justify-between">
          <span className="font-display text-lg text-glacier font-semibold">
            {animal.from}
          </span>
          <Link
            href="/adopt"
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg",
              "font-body text-xs font-semibold text-white/60",
              "border border-white/10 hover:border-glacier/30 hover:text-glacier",
              "transition-all duration-200"
            )}
          >
            <Heart className="w-3.5 h-3.5" aria-hidden="true" />
            Adopt
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function AdoptionTeaser() {
  return (
    <SectionWrapper
      id="adoption-teaser"
      label="Adopt an Icelandic animal"
      className="bg-ice-black"
    >
      <div
        className="aurora-orb w-[500px] h-[400px] bg-spirit/6 top-0 left-0"
        aria-hidden="true"
        style={{ animationDelay: "-5s" }}
      />

      <SectionHeading
        eyebrow="Animal adoptions"
        title={<>Adopt an Icelandic animal — <em className="text-gradient-spirit not-italic">help them thrive</em></>}
        subtitle="Symbolic adoption certificates for the iconic animals that share the Snæfellsnes peninsula with Bárður and the huldufólk."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ANIMALS.map((a, i) => (
          <AnimalCard key={a.name} animal={a} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-center"
      >
        <Link
          href="/adopt"
          className="inline-flex items-center gap-2 font-body text-sm text-white/45 hover:text-glacier transition-colors underline underline-offset-4"
        >
          View all adoption options
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
