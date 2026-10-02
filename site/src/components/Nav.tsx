import { useEffect, useState } from "react";
import { WA_LINK, BRAND } from "../config";
import { Magnetic } from "./Magnetic";

const LINKS = [
  { label: "What we do", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case study", href: "#case-study" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight text-ink">
          {BRAND}
          <span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Magnetic>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-primary hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 sm:block"
            >
              Free audit teaser
            </a>
          </Magnetic>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="font-display text-xl">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="glass mx-6 mt-3 flex flex-col gap-1 rounded-2xl p-4 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-white"
          >
            Free audit teaser
          </a>
        </nav>
      )}
    </header>
  );
}
