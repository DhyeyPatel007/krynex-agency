import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    name: "Scan",
    time: "Day 1–2",
    desc: "We crawl everything — code, metadata, speed, UX flows. Hundreds of automated checks plus human eyes where it matters.",
  },
  {
    n: "02",
    name: "Expose",
    time: "Day 3–4",
    desc: "You get a plain-English report: every issue, why it hurts you, and a screenshot or proof for each one. No jargon.",
  },
  {
    n: "03",
    name: "Fix roadmap",
    time: "Day 5",
    desc: "Issues ranked by impact-per-effort. You know exactly what to fix first, second, third — and what to ignore.",
  },
  {
    n: "04",
    name: "Verify",
    time: "After fixes",
    desc: "We re-run the critical checks after your team ships fixes, so you know the problems are actually gone.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative border-y border-line bg-panel/40 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How we help"
          title="From mystery to roadmap in five days."
          sub="A fixed, transparent process. You always know what happens next."
        />
        <div className="relative mt-16">
          <div className="absolute top-8 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative">
                  <div className="glass relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                    <span className="font-display text-xl font-bold text-primary">{s.n}</span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">{s.time}</p>
                  <h3 className="font-display mt-2 text-2xl font-bold text-ink">{s.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
