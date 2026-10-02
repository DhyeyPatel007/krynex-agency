import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
};

/** Consistent section header: eyebrow + big display title + sub. */
export function SectionHeading({ eyebrow, title, sub, align = "left" }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      <Reveal>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-lg leading-relaxed text-muted">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
