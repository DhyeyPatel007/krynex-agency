import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function VideoSection() {
  return (
    <section id="explainer" className="relative border-y border-line bg-panel/40 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="center"
          eyebrow="The explainer"
          title="Ninety seconds. Zero fluff."
          sub="What we are, what we do, how we help — and the motto we live by."
        />
        <Reveal delay={0.15} y={60}>
          <div className="glow-primary relative mt-14 overflow-hidden rounded-3xl border border-line">
            <video
              src="/video/krynex-explainer.mp4"
              className="aspect-video w-full"
              controls
              preload="metadata"
              poster="/img/og-cover.png"
            />
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted">
            <span><strong className="text-ink">01</strong> — What we are</span>
            <span><strong className="text-ink">02</strong> — What we do</span>
            <span><strong className="text-ink">03</strong> — How we help</span>
            <span><strong className="text-ink">04</strong> — Our motto</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
