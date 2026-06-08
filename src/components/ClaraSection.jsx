import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ClaraSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".clara-img", { opacity: 0, x: -32, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 72%" } });
      gsap.from(".clara-copy > *", { opacity: 0, y: 24, stagger: 0.12, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 72%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="clara" ref={ref} style={{ padding: "96px 32px", background: "#1B2B4B", overflow: "hidden" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 64, alignItems: "center" }} className="grid-cols-1 md:grid-cols-[auto_1fr]">

          {/* Portrait */}
          <div className="clara-img hidden md:block" style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ width: 300, height: 380, borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.3)" }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Clara — Property Solutions Specialist"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
            </div>
            {/* Gold accent */}
            <div style={{ position: "absolute", bottom: -12, right: -12, width: 80, height: 80, borderRadius: "50%", background: "rgba(184,137,42,0.15)", zIndex: -1 }} />
          </div>

          {/* Copy */}
          <div className="clara-copy" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Meet Clara
            </p>
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Your dedicated property solutions specialist
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>
              Clara helps homeowners and families understand their options and navigate property decisions with clarity and confidence. She specialises in situations where the standard approach is not always the right one — probate, inherited properties, complex sales, and circumstances where people simply need honest, expert guidance.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>
              Every conversation with Clara is confidential, unhurried, and focused entirely on what is right for your situation. There is no pressure and no obligation.
            </p>
            <div style={{ paddingTop: 8 }}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); go("#contact"); }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "#B8892A", color: "white", borderRadius: 50, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Speak With Clara <ArrowRight size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
