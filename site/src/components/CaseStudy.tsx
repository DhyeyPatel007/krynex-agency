import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { WA_LINK } from "../config";

const FINDINGS = [
  { sev: "Critical", color: "bg-danger", text: "Every canonical, Open Graph and sitemap URL pointed to localhost:3100 — the dev machine leaked into production." },
  { sev: "Critical", color: "bg-danger", text: "/sitemap.xml served a 404 page — Google couldn't discover the site's pages." },
  { sev: "Major", color: "bg-amber", text: "Blog title in English on a Spanish site; half the pages missing brand suffixes." },
  { sev: "Major", color: "bg-amber", text: "Zero analytics installed — flying completely blind on traffic and conversions." },
  { sev: "Major", color: "bg-amber", text: "The directory itself was empty: all 24 country chips at zero, broken industry section." },
];

export function CaseStudy() {
  return (
    <section id="case-study" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-danger/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Case study"
          title="We audited topstartups.lat. Here's what was hiding."
          sub="A real audit, run by krynex. Twelve issues found — including two the owners had no idea existed."
        />
        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            {FINDINGS.map((f, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="glass mb-4 flex items-start gap-4 rounded-2xl p-5 transition-colors hover:border-primary/40">
                  <span className={`mt-1.5 shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white ${f.color}`}>
                    {f.sev}
                  </span>
                  <p className="leading-relaxed text-ink/90">{f.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="mt-8 rounded-2xl border border-green/30 bg-green/10 p-6">
                <p className="font-display text-lg font-semibold text-ink">The outcome</p>
                <p className="mt-2 leading-relaxed text-muted">
                  Four fixes, ranked by impact. One line of config repairs the entire metadata
                  disaster; a sitemap repair and title unification finish the job. Total
                  estimated effort: <strong className="text-ink">under a day</strong>.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} y={60}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[2rem] border border-line bg-panel p-3">
                <video
                  src="/video/audit-dashboard.mp4"
                  className="aspect-[9/16] w-full rounded-[1.6rem] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <p className="mt-4 text-center text-sm text-muted">
                The live audit dashboard we built for this site
              </p>
              <Magnetic className="mt-6 flex justify-center" strength={0.25}>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  Get this for your site →
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
