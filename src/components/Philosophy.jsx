import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".phil-old", ".phil-new"], { opacity: 0, y: 28, duration: 0.7, ease: "power3.out", stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 72%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 md:px-10" style={{ background: "#2C5F5D" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <p className="text-xs font-600 uppercase tracking-widest mb-12 text-center" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.14em" }}>
          The old way vs our way
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="phil-old">
            <p className="text-xs font-600 uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em" }}>The old way</p>
            <div className="space-y-3">
              {[
                "List on the open market. Wait months for offers.",
                "Accept a buyer. Start praying their mortgage holds.",
                "Fall through at exchange. Start again from scratch.",
                "A second sale drags on. The estate is in limbo.",
                "Eventually complete — six to twelve months later.",
              ].map((line) => (
                <p key={line} className="flex gap-3 leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span style={{ color: "rgba(255,255,255,0.25)", flexShrink: 0 }}>—</span>{line}
                </p>
              ))}
            </div>
          </div>
          <div className="phil-new">
            <p className="text-xs font-600 uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em" }}>The Clearstone way</p>
            <h3 className="font-700 italic mb-5 leading-snug text-white" style={{ fontSize: "1.35rem" }}>
              One conversation. A clear offer. A certain completion.
            </h3>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
              We move quickly, communicate clearly, and do not create unnecessary obstacles. The estate gets a guaranteed outcome at a fair price — without the uncertainty of the open market.
            </p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center px-6 py-3 font-600 text-sm rounded-full transition-all duration-200 hover:bg-white/90"
              style={{ background: "white", color: "#2C5F5D" }}>
              Start the conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
