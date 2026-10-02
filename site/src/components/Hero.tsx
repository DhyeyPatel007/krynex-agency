import { useEffect, useRef } from "react";
import gsap from "gsap";
import { WA_LINK, MOTTO } from "../config";
import { Magnetic } from "./Magnetic";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.12, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.7 }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48">
      {/* ambient orbs */}
      <div className="animate-float-slow pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <p className="hero-fade font-display mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          <span className="h-2 w-2 rounded-full bg-lime" />
          Website audit agency
        </p>
        <h1 className="font-display max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-8xl">
          <span className="hero-line block">Your website is</span>
          <span className="hero-line block">
            lying <span className="text-stroke">to you.</span>
          </span>
          <span className="hero-line mt-4 block text-2xl font-medium text-muted md:text-4xl">
            {MOTTO}
          </span>
        </h1>
        <p className="hero-fade mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          We X-ray websites for the SEO, performance and UX issues silently
          costing you traffic and customers — then hand you a prioritized fix roadmap in plain English.
        </p>
        <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-primary group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white"
            >
              
              <span className="relative">Chat with us on WhatsApp</span>
              <span className="relative transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#explainer"
              className="inline-flex items-center gap-3 rounded-full border border-line px-8 py-4 text-base font-semibold text-ink transition-colors hover:border-primary/60"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">▶</span>
              Watch the explainer
            </a>
          </Magnetic>
        </div>

        {/* hero visual */}
        <div className="hero-fade relative mt-16 overflow-hidden rounded-3xl border border-line">
          <img
            src="/img/hero-visual.png"
            alt="krynex website X-ray visualization"
            className="h-auto w-full object-cover"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
