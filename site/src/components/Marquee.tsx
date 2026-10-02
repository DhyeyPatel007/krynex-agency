const WORDS = [
  "Technical SEO",
  "Performance",
  "UX & Conversion",
  "Competitor Teardown",
  "Fix Roadmaps",
  "Verification",
];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-line bg-void py-5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-lg font-semibold tracking-wide text-muted">
              {w}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
