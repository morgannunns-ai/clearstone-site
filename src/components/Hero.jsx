import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-tag", {
        opacity: 0, y: 20, duration: 0.8, ease: "power3.out", delay: 0.2,
      });
      gsap.from(".hero-h1", {
        opacity: 0, y: 40, duration: 1, ease: "power3.out", delay: 0.4,
      });
      gsap.from(".hero-sub", {
        opacity: 0, y: 30, duration: 0.8, ease: "power3.out", delay: 0.65,
      });
      gsap.from(".hero-cta", {
        opacity: 0, y: 20, duration: 0.7, ease: "power3.out", delay: 0.85,
      });
      gsap.from(".hero-scroll", {
        opacity: 0, duration: 0.6, ease: "power3.out", delay: 1.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh flex flex-col justify-end pb-20 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,28,27,0.5) 0%, rgba(12,28,27,0.6) 40%, rgba(12,28,27,0.97) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-10 w-full">
        <p className="hero-tag font-mono text-clay text-xs uppercase tracking-[0.18em] mb-6">
          Clearstone Property — Probate Specialists
        </p>

        <h1 className="hero-h1 font-sans font-800 text-cream text-4xl md:text-5xl leading-[1.1] mb-6">
          A certain outcome for
          <br />
          <span className="italic text-clay">
            every probate property.
          </span>
        </h1>

        <p className="hero-sub font-sans text-cream/65 text-base max-w-xl mb-10 leading-relaxed">
          We work with executors, solicitors, and estate agents to provide a clear,
          guaranteed outcome. No chain. No delays. A fair price and a clean process —
          from first conversation to completion.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center px-7 py-3.5 bg-clay text-charcoal font-sans font-700 text-sm rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] overflow-hidden"
          >
            Speak to us
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => { e.preventDefault(); document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center px-7 py-3.5 border border-cream/20 text-cream/70 font-sans text-sm rounded-full transition-all duration-300 hover:border-clay/50 hover:text-cream"
          >
            How it works
          </a>
        </div>

        <p className="mt-4 font-sans text-cream/30 text-xs">
          No obligation. We respond to all enquiries within one business day.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-8 bg-cream/40" />
        <ArrowDown size={14} className="text-cream/40" />
      </div>
    </section>
  );
}
