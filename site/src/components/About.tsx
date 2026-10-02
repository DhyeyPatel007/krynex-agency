import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="What we are"
            title="Not another web agency. An X-ray machine for websites."
          />
          <Reveal delay={0.2}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                <strong className="text-ink">krynex</strong> exists for one reason: most websites
                are broken in ways their owners can't see. Not ugly-broken — invisibly broken.
                Wrong canonical tags. Dead sitemaps. Pages Google will never find.
              </p>
              <p>
                We don't sell redesigns you don't need. We find the exact faults, rank them by
                impact, and tell you what to fix first — in words a founder understands,
                not a developer's ticket queue.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["No fluff", "No jargon", "Evidence over opinion"].map((t) => (
                <span key={t} className="glass rounded-full px-5 py-2 text-sm font-medium text-ink">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15} y={60}>
          <div className="relative overflow-hidden rounded-3xl border border-line">
            <img
              src="/img/about-visual.png"
              alt="Layered website analysis visualization"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
