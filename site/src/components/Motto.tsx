import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTTO } from "../config";

gsap.registerPlugin(ScrollTrigger);

/** Full-viewport motto moment with scroll-scrubbed word reveal. */
export function Motto() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".motto-word",
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "center 45%",
            scrub: 1,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const words = MOTTO.replace(".", "").split(" ");

  return (
    <section ref={root} className="relative flex min-h-[80vh] items-center overflow-hidden py-28">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="font-display mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Our motto
        </p>
        <p className="font-display text-5xl leading-[1.08] font-bold tracking-tight md:text-8xl">
          {words.map((w, i) => (
            <span key={i} className="motto-word inline-block">
              {w}
              {i < words.length - 1 ? " " : "."}
            </span>
          ))}
        </p>
        <p className="mx-auto mt-10 max-w-2xl text-lg text-muted">
          Every engagement at krynex starts from this sentence. If your website
          has a secret, we will find it — and show you exactly what it's costing you.
        </p>
      </div>
    </section>
  );
}
