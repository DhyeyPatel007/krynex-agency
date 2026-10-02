import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { WA_LINK, EMAIL } from "../config";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Stop guessing. Start knowing."
          sub="Message us on WhatsApp and get 3 real findings from your own site — free. No forms, no sales calls, no waiting rooms."
        />
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-5">
            <Magnetic strength={0.3}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-primary group inline-flex items-center gap-4 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white"
              >
                
                <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-6 w-6">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.2-3.6-.8-3-1.2-4.9-4.2-5.1-4.4-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.3.2.5.2.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.6z" />
                </svg>
                <span className="relative">Chat on WhatsApp</span>
              </a>
            </Magnetic>
            <p className="text-sm text-muted">
              Prefer email?{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold text-ink underline underline-offset-4">
                {EMAIL}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
