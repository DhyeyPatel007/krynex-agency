import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 12, suffix: "", label: "issues found in our latest audit" },
  { value: 2, suffix: "", label: "critical — invisible to the naked eye" },
  { value: 100, suffix: "%", label: "of canonical URLs pointing nowhere" },
  { value: 0, suffix: "", label: "analytics installed. Flying blind." },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => setN(Math.round(obj.v)),
    });
    return () => { tween.kill(); };
  }, [value]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export function ProofStrip() {
  return (
    <section className="relative border-y border-line bg-panel/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line px-6 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="px-6 py-10 text-center lg:text-left">
            <p className="font-display text-5xl font-bold text-ink md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="pb-6 text-center text-xs uppercase tracking-[0.25em] text-muted/60">
        From a recent krynex audit — topstartups.lat
      </p>
    </section>
  );
}
