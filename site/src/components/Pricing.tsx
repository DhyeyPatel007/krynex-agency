import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { WA_LINK } from "../config";

const TIERS = [
  {
    name: "Spark",
    price: "₹4,999",
    per: "one-time",
    desc: "The essential X-ray. Know exactly what's wrong.",
    features: [
      "Full technical SEO scan (120+ checks)",
      "Performance & Core Web Vitals report",
      "Plain-English findings document",
      "Top 10 fixes, ranked by impact",
    ],
    featured: false,
  },
  {
    name: "Deep Dive",
    price: "₹14,999",
    per: "one-time",
    desc: "The complete investigation, end to end.",
    features: [
      "Everything in Spark",
      "UX & conversion teardown",
      "Competitor gap analysis (top 3)",
      "Prioritized fix roadmap + verification re-test",
      "30-min walkthrough call",
    ],
    featured: true,
  },
  {
    name: "Partner",
    price: "₹29,999",
    per: "/month",
    desc: "We watch your site while you grow.",
    features: [
      "Everything in Deep Dive, monthly",
      "Continuous monitoring & alerts",
      "Quarterly competitor re-teardown",
      "Direct WhatsApp line to the team",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title="Honest pricing. No retainers-from-hell."
          sub="One-time audits or an ongoing partnership. Every tier starts with a free teaser."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <article
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2 ${
                  t.featured
                    ? "glow-primary border border-primary/60 bg-gradient-to-b from-primary/15 to-panel"
                    : "glass"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
                    Most chosen
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-ink">{t.name}</h3>
                <p className="mt-2 text-sm text-muted">{t.desc}</p>
                <p className="mt-6">
                  <span className="font-display text-5xl font-bold text-ink">{t.price}</span>
                  <span className="ml-2 text-sm text-muted">{t.per}</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-ink/90">
                      <span className="mt-1.5 text-green">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Magnetic className="mt-8" strength={0.2}>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded-full py-3.5 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      t.featured
                        ? "bg-primary text-white"
                        : "border border-line text-ink hover:border-primary/60"
                    }`}
                  >
                    Start with a free teaser
                  </a>
                </Magnetic>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-muted">
            Need something custom? Enterprise scope, multiple sites, white-label reports —{" "}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">
              talk to us
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
