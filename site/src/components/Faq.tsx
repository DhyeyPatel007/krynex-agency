import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "How long does an audit take?",
    a: "Five working days from kickoff to roadmap. The Spark scan itself runs in the first 48 hours; the rest is human analysis, prioritization, and proof-gathering.",
  },
  {
    q: "What exactly do I receive?",
    a: "A plain-English report with every issue, why it matters, visual proof, and a fix roadmap ranked by impact-per-effort. Deep Dive adds a verification re-test after your team ships fixes.",
  },
  {
    q: "Do you fix the issues yourselves?",
    a: "We diagnose; your team (or ours, on Partner plans) treats. The roadmap is written so any competent developer can execute it without guesswork.",
  },
  {
    q: "My site looks fine. Do I still need this?",
    a: "That's exactly who needs it most. Our recent audit found a site's entire SEO metadata pointing at localhost — invisible in the browser, devastating on Google. Looking fine is not the same as being fine.",
  },
  {
    q: "What do you need from me to start?",
    a: "Just your URL. No logins, no code access, no meetings. We work from the outside, exactly like Google and your visitors do.",
  },
  {
    q: "What is the free teaser?",
    a: "A no-commitment sample: we run a slice of the audit on your homepage and send you 3 real findings on WhatsApp. If they're not useful, you've lost nothing.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Asked by founders, answered straight."
        />
        <div className="mt-14 space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className={`glass overflow-hidden rounded-2xl transition-colors ${
                    isOpen ? "border-primary/40" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-ink">{f.q}</span>
                    <span
                      className={`font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-xl text-ink transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-primary/60" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-400 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
