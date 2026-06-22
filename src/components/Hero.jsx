import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

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
              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#B8892A", letterSpacing: "0.08em", textTransform: "uppercase" }}>Property Solutions Specialist</span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#1B2B4B", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Property Solutions For Life's More Complicated Situations
            </h1>

            <p style={{ fontSize: "1.05rem", color: "#4A5568", lineHeight: 1.8, maxWidth: 500 }}>
              Whether you're dealing with probate, an inherited property, a difficult sale or simply want clear advice — Clearstone Property helps you understand your options and move forward with confidence.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", paddingTop: 4 }}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); go("#contact"); }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "#1B2B4B", color: "white", borderRadius: 50, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Book a Consultation <ArrowRight size={15} />
              </a>
              <a href="#solutions" onClick={(e) => { e.preventDefault(); go("#solutions"); }}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "13px 24px", border: "1.5px solid #CBD5D3", color: "#1B2B4B", borderRadius: 50, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#1B2B4B"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#CBD5D3"}>
                Explore Your Options
              </a>
            </div>

            <p style={{ fontSize: "0.8rem", color: "#94A3B0" }}>
              Confidential • No obligation • Free initial consultation
            </p>
          </div>

          {/* Right: Clara + property */}
          <div className="hero-image hidden md:block" style={{ position: "relative", width: 320 }}>
            {/* Property card behind */}
            <div style={{ position: "absolute", top: -16, right: -16, width: 260, height: 200, borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(27,43,75,0.12)" }}>
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
                alt="Property" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            {/* Clara portrait */}
            <div style={{ position: "relative", zIndex: 2, marginTop: 40, width: 280, height: 360, borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 64px rgba(27,43,75,0.15)" }}>
              <img src="/images/team/clara.png"
                alt="Clara — Property Solutions Specialist" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px 20px", background: "linear-gradient(to top, rgba(27,43,75,0.85) 0%, transparent 100%)" }}>
                <div style={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>Clara</div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8rem", fontWeight: 500 }}>Property Solutions Specialist</div>
              </div>
            </div>
            {/* Trust badge */}
            <div style={{ position: "absolute", bottom: -16, left: -24, zIndex: 3, background: "white", borderRadius: 14, padding: "12px 18px", boxShadow: "0 8px 32px rgba(0,0,0,0.10)", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(184,137,42,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#B8892A", fontSize: "1rem" }}>★</span>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#1B2B4B" }}>Trusted Specialist</div>
                <div style={{ fontSize: "0.72rem", color: "#6B7280" }}>Probate & Complex Sales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
