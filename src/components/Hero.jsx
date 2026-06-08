import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".hero-tag", ".hero-h1", ".hero-sub", ".hero-cta"], {
        opacity: 0, y: 28, duration: 0.8, ease: "power3.out", stagger: 0.18, delay: 0.2,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} className="relative flex flex-col justify-end overflow-hidden" style={{ minHeight: "100dvh" }}>
      {/* Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=2000&q=80')",
        backgroundSize: "cover", backgroundPosition: "center",
      }} />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(10,24,22,0.35) 0%, rgba(10,24,22,0.55) 45%, rgba(10,24,22,0.92) 100%)",
      }} />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-10 pb-20 w-full" style={{ maxWidth: 900, margin: "0 auto" }}>
        <p className="hero-tag text-xs font-600 uppercase tracking-widest mb-5" style={{ color: "#6ee7e2", letterSpacing: "0.15em" }}>
          Clearstone Property — Probate Specialists
        </p>
        <h1 className="hero-h1 font-700 text-white mb-5 leading-tight" style={{ fontSize: "2.75rem", maxWidth: 620 }}>
          A straightforward route to selling <em style={{ color: "#6ee7e2", fontStyle: "italic" }}>a probate property.</em>
        </h1>
        <p className="hero-sub mb-8 text-white leading-relaxed" style={{ opacity: 0.8, maxWidth: 520, fontSize: "1.05rem" }}>
          We work with executors, solicitors, and estate agents to provide a clear, certain outcome for estates. No chain. No delays. A fair price and a clean process.
        </p>
        <div className="hero-cta flex flex-wrap gap-3">
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="inline-flex items-center px-6 py-3 font-600 text-sm rounded-full text-white transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{ background: "#2C5F5D" }}>
            Speak to us
          </a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo("#how-it-works"); }}
            className="inline-flex items-center px-6 py-3 font-500 text-sm rounded-full transition-all duration-200 hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.4)", color: "rgba(255,255,255,0.85)" }}>
            How it works
          </a>
        </div>
        <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
          No obligation. We respond to all enquiries within one business day.
        </p>
      </div>
    </section>
  );
}
