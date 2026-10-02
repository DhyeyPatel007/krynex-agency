import { useEffect } from "react";
import Lenis from "lenis";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { ProofStrip } from "./components/ProofStrip";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { CaseStudy } from "./components/CaseStudy";
import { VideoSection } from "./components/VideoSection";
import { Motto } from "./components/Motto";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="grain min-h-screen bg-void text-ink">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <ProofStrip />
        <About />
        <Services />
        <Process />
        <CaseStudy />
        <VideoSection />
        <Motto />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
