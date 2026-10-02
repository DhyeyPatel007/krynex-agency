import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { WA_LINK } from "../config";

const SERVICES = [
  {
    img: "/img/service-seo.png",
    tag: "01",
    name: "Technical SEO Audit",
    desc: "We crawl your site like Google does — and find every reason it isn't ranking.",
    points: ["Canonical & metadata forensics", "Sitemap & crawlability repair map", "Indexation leak report"],
    accent: "text-danger",
    bar: "bg-danger",
  },
  {
    img: "/img/service-performance.png",
    tag: "02",
    name: "Performance Audit",
    desc: "Every 100ms of load time costs you conversions. We find where the milliseconds go.",
    points: ["Core Web Vitals breakdown", "Asset & render-chain analysis", "Speed fix priority list"],
    accent: "text-green",
    bar: "bg-green",
  },
  {
    img: "/img/service-ux.png",
    tag: "03",
    name: "UX & Conversion Audit",
    desc: "Where do visitors give up? We trace the friction in your funnels.",
    points: ["Funnel friction mapping", "CTA & copy effectiveness review", "Mobile experience teardown"],
    accent: "text-amber",
    bar: "bg-amber",
  },
  {
    img: "/img/service-competitor.png",
    tag: "04",
    name: "Competitor Teardown",
    desc: "We dissect what your top 3 competitors do better — and hand you the playbook.",
    points: ["Head-to-head SEO gap analysis", "Speed & UX benchmarking", "Steal-worthy tactics, ranked"],
    accent: "text-accent",
    bar: "bg-accent",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Four audits. Zero guesswork."
          sub="Pick the lens you need — or let us run all four and show you the full picture."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 0.1}>
              <article
                data-hover
                className="group glass relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
                  <span className="font-display absolute top-5 left-6 text-sm font-bold tracking-[0.3em] text-white/70">
                    {s.tag}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">{s.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[15px] text-ink/90">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${s.bar}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Magnetic className="mt-8 inline-block" strength={0.25}>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-semibold ${s.accent} transition-opacity hover:opacity-80`}
                    >
                      Audit my site for this →
                    </a>
                  </Magnetic>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
