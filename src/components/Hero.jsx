import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

const EXPECT = [
  "A reply within one business day",
  "A written offer with the figures set out",
  "No chain on our side",
  "No fees and no obligation",
];

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        opacity: 0, y: 32, duration: 0.9, ease: "power3.out", stagger: 0.14, delay: 0.15,
      });
      gsap.from(".hero-image", {
        opacity: 0, scale: 0.97, duration: 1.1, ease: "power3.out", delay: 0.3,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} style={{ background: "#F7F9F8", paddingTop: 120, paddingBottom: 80, overflow: "hidden" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }} className="grid-cols-1 md:grid-cols-[1fr_auto]">

          {/* Left: copy */}
          <div className="hero-content" style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 560 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(184,137,42,0.10)", borderRadius: 50, width: "fit-content" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#B8892A", display: "inline-block" }} />
              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#B8892A", letterSpacing: "0.08em", textTransform: "uppercase" }}>Shropshire &amp; the West Midlands</span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#1B2B4B", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              We buy properties directly, including the complicated ones
            </h1>

            <p style={{ fontSize: "1.05rem", color: "#4A5568", lineHeight: 1.8, maxWidth: 500 }}>
              Clearstone is a Shropshire-based property buyer. We purchase homes across the West Midlands and surrounding areas: probate properties, houses that need work, sales that have stalled. Every offer comes in writing with the figures set out. And if selling through a local agent would get you more, we will tell you that too.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", paddingTop: 4 }}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); go("#contact"); }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "#1B2B4B", color: "white", borderRadius: 50, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Tell us about the property <ArrowRight size={15} />
              </a>
              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); go("#how-it-works"); }}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "13px 24px", border: "1.5px solid #CBD5D3", color: "#1B2B4B", borderRadius: 50, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#1B2B4B"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#CBD5D3"}>
                How it works
              </a>
            </div>

            <p style={{ fontSize: "0.8rem", color: "#94A3B0" }}>
              No fees, no obligation, and no pressure to decide quickly.
            </p>
          </div>

          {/* Right: what to expect */}
          <div className="hero-image hidden md:block" style={{ width: 320 }}>
            <div style={{ background: "#1B2B4B", borderRadius: 20, padding: "32px 28px", boxShadow: "0 24px 64px rgba(27,43,75,0.15)" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
                What to expect
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {EXPECT.map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: "#B8892A", fontWeight: 700, lineHeight: 1.5 }}>✓</span>
                    <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 22, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.12)", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                First contact is Clara:<br />
                <a href="mailto:clara@clearstoneproperty.co.uk" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, textDecoration: "none" }}>
                  clara@clearstoneproperty.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
