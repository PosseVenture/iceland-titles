"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ComparisonTable — Side-by-side feature comparison of all three packs
// ─────────────────────────────────────────────────────────────────────────────
import { Check, Minus }  from "lucide-react";
import { motion }        from "framer-motion";
import { cn }            from "@/lib/utils";

const ROWS = [
  { feature: "Personalised PDF certificate (A4)",        eco: true,  lux5: true,  lux10: true  },
  { feature: "A3 luxury framing certificate",            eco: false, lux5: false, lux10: true  },
  { feature: "GPS plot coordinates",                     eco: true,  lux5: true,  lux10: true  },
  { feature: "What3Words address",                       eco: true,  lux5: true,  lux10: true  },
  { feature: "Right to use Jarl/Baron/Baroness title",   eco: true,  lux5: true,  lux10: true  },
  { feature: "Owner's app access & virtual tour",        eco: true,  lux5: true,  lux10: true  },
  { feature: "Iceland gift box & tissue paper",          eco: false, lux5: true,  lux10: true  },
  { feature: "Volcanic basalt coaster",                  eco: false, lux5: true,  lux10: "×2"  },
  { feature: "Vestfirðir printed map",                   eco: false, lux5: true,  lux10: "A3"  },
  { feature: "Plant a Tree bookmark",                    eco: false, lux5: true,  lux10: true  },
  { feature: "Plant a Tree included",                    eco: false, lux5: false, lux10: true  },
  { feature: "'Secrets of the Glacier' booklet",         eco: false, lux5: false, lux10: true  },
  { feature: "3D plot explorer access",                  eco: false, lux5: false, lux10: true  },
  { feature: "Handwritten welcome note",                 eco: false, lux5: false, lux10: true  },
  { feature: "Conservation contribution",                eco: true,  lux5: true,  lux10: true  },
];

type CellValue = boolean | string;

function Cell({ value, highlight }: { value: CellValue; highlight: boolean }) {
  if (value === false) {
    return (
      <td className="py-3 px-4 text-center">
        <Minus className="w-4 h-4 text-white/18 mx-auto" aria-label="Not included" />
      </td>
    );
  }
  if (value === true) {
    return (
      <td className={cn("py-3 px-4 text-center", highlight && "bg-glacier/[0.04]")}>
        <Check
          className={cn("w-4 h-4 mx-auto", highlight ? "text-glacier" : "text-spirit")}
          aria-label="Included"
        />
      </td>
    );
  }
  return (
    <td className={cn("py-3 px-4 text-center", highlight && "bg-glacier/[0.04]")}>
      <span
        className={cn(
          "font-body text-xs font-semibold",
          highlight ? "text-glacier" : "text-spirit"
        )}
        aria-label={`Included: ${value}`}
      >
        {value}
      </span>
    </td>
  );
}

export function ComparisonTable() {
  return (
    <section
      aria-label="Feature comparison of all three souvenir plot packs"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-ice-black"
    >
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow justify-center mb-3">Compare packs</p>
        <h2 className="font-display text-3xl font-light text-white text-center mb-10">
          What's in each souvenir pack
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto rounded-2xl border border-white/[0.07]"
        >
          <table className="w-full min-w-[540px]">
            <thead>
              <tr className="border-b border-white/[0.07]">
                <th
                  scope="col"
                  className="py-4 px-4 text-left font-body text-xs text-white/35 uppercase tracking-wider font-semibold w-1/2"
                >
                  Feature
                </th>
                {[
                  { label: "1 sq ft",  sub: "Eco — €49",   highlight: false },
                  { label: "5 sq ft",  sub: "Luxury — €69",  highlight: true  },
                  { label: "10 sq ft", sub: "Luxury — €109", highlight: false },
                ].map(({ label, sub, highlight }) => (
                  <th
                    key={label}
                    scope="col"
                    className={cn(
                      "py-4 px-4 text-center",
                      highlight && "bg-glacier/[0.04]"
                    )}
                  >
                    <span className="block font-display text-sm font-semibold text-white">
                      {label}
                    </span>
                    <span className={cn(
                      "block font-body text-xs mt-0.5",
                      highlight ? "text-glacier" : "text-white/40"
                    )}>
                      {sub}
                    </span>
                    {highlight && (
                      <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-body font-bold bg-glacier text-ice-black">
                        Best Seller
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-white/[0.04]">
              {ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  className={cn(
                    "transition-colors duration-150",
                    i % 2 === 0 ? "bg-white/[0.01]" : "bg-transparent",
                    "hover:bg-white/[0.03]"
                  )}
                >
                  <td className="py-3 px-4 font-body text-sm text-white/55">
                    {row.feature}
                  </td>
                  <Cell value={row.eco}   highlight={false} />
                  <Cell value={row.lux5}  highlight={true}  />
                  <Cell value={row.lux10} highlight={false} />
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
