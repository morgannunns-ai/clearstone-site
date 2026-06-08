import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".phil-old", {
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      });
      gsap.from(".phil-new", {
        opacity: 0,
        x: 40,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      });
      gsap.from(".phil-tag", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 md:px-10 overflow-hidden"
      style={{ background: "rgba(22,46,44,0.3)" }}
    >
      {/* Parallax bg */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="phil-tag font-mono text-clay text-xs uppercase tracking-[0.18em] mb-16 text-center">
          The old way vs our way
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Old way */}
          <div className="phil-old">
            <p className="font-mono text-cream/30 text-xs uppercase tracking-widest mb-6">
              The old way
            </p>
            <div className="space-y-4">
              {[
                "List on the open market. Wait months for offers.",
                "Accept a buyer. Start praying their mortgage holds.",
                "Fall through at exchange. Start again from scratch.",
                "A second sale drags on. The estate is in limbo.",
                "Eventually complete — six to twelve months later.",
              ].map((line) => (
                <p
                  key={line}
                  className="font-sans text-cream/40 text-base leading-snug flex gap-3"
                >
                  <span className="text-cream/20 mt-1 shrink-0">—</span>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* New way */}
          <div className="phil-new">
            <p className="font-mono text-clay text-xs uppercase tracking-widest mb-6">
              The Clearstone way
            </p>
            <h3
              className="font-serif italic text-clay leading-snug mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
            >
              One conversation. A clear offer. A certain completion.
            </h3>
            <p className="font-sans text-cream/60 leading-relaxed text-sm">
              We move quickly, communicate clearly, and do not create unnecessary
              obstacles. The estate gets a guaranteed outcome at a fair price —
              without the uncertainty of the open market.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center px-7 py-3.5 bg-clay text-charcoal font-sans font-700 text-sm rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                Start the conversation
              </a>
              <p className="mt-3 font-sans text-cream/30 text-xs">
                No obligation. No fees to the estate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
