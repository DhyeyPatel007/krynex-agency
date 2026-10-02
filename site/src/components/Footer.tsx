import { BRAND, EMAIL, WA_LINK } from "../config";

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-bold tracking-tight text-ink">
              {BRAND}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-3 max-w-sm leading-relaxed text-muted">
              We find what your website is hiding. Website audits for SEO,
              performance and UX — with fix roadmaps in plain English.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 inline-block font-medium text-ink underline underline-offset-4"
            >
              {EMAIL}
            </a>
          </div>
          <div>
            <p className="font-display mb-4 text-sm font-bold uppercase tracking-[0.25em] text-muted">
              Explore
            </p>
            <ul className="space-y-2.5 text-[15px]">
              {[
                ["What we do", "#services"],
                ["Process", "#process"],
                ["Case study", "#case-study"],
                ["Pricing", "#pricing"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-muted transition-colors hover:text-ink">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display mb-4 text-sm font-bold uppercase tracking-[0.25em] text-muted">
              Start
            </p>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-ink">
                  Free audit teaser
                </a>
              </li>
              <li>
                <a href="#explainer" className="text-muted transition-colors hover:text-ink">
                  Watch the explainer
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted transition-colors hover:text-ink">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} krynex. All rights reserved.</p>
          <p className="font-display tracking-wide">We find what your website is hiding.</p>
        </div>
      </div>
    </footer>
  );
}
