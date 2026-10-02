import { useEffect, useRef } from "react";
import gsap from "gsap";

/** Custom glow cursor (desktop pointers only). */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const d = dot.current!;
    const r = ring.current!;
    let x = -100, y = -100, rx = -100, ry = -100;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    let raf = 0;
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      gsap.set(d, { x, y, xPercent: -50, yPercent: -50 });
      gsap.set(r, { x: rx, y: ry, xPercent: -50, yPercent: -50 });
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    const hover = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hit = t.closest("a, button, [data-hover]");
      gsap.to(r, { scale: hit ? 1.8 : 1, opacity: hit ? 0.9 : 0.5, duration: 0.3 });
    };
    window.addEventListener("mouseover", hover);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hover);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden [@media(pointer:fine)]:block">
      <div ref={dot} className="absolute h-2 w-2 rounded-full bg-primary" />
      <div ref={ring} className="absolute h-10 w-10 rounded-full border border-primary/60 opacity-50" />
    </div>
  );
}
