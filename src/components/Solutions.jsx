import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Wrench, Zap, Coins } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS = [
  {
    icon: Zap,
    title: "Cash purchase",
    subtitle: "When speed and certainty matter most",
    body: "We buy it ourselves, with no chain behind us, usually completing four to five weeks from instructing solicitors. If a later date suits you better we exchange now and complete when you're ready. We show you how the figure was calculated, works included.",
  },
  {
    icon: Wrench,
    title: "Assisted sale",
    subtitle: "A higher figure, if you can wait for it",
    body: "We agree your price up front and fix it, then fund and manage the works and the sale. Contracts exchange in weeks and the property stops being your responsibility, but you're paid on completion, typically six to twelve months later.",
  },
  {
    icon: Coins,
    title: "Lease option",
    subtitle: "When an income beats a lump sum",
    body: "You release an agreed amount now and hand over the running of the property. We cover the mortgage, maintenance and management, pay you monthly on top, and buy at a price and date agreed at the outset.",
  },
  {
    icon: TrendingUp,
    title: "An estate agent instead",
    subtitle: "When the open market will beat our offer",
    body: "A well-presented house in a strong area will usually do better with a good local agent than with us. When that's the honest answer, we'll say so.",
  },
];

export default function Solutions() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sol-head", { opacity: 0, y: 24, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } });
      gsap.from(".sol-card", { opacity: 0, y: 28, stagger: 0.1, duration: 0.65, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 72%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="solutions" ref={ref} style={{ padding: "96px 32px", background: "#F7F9F8" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div className="sol-head" style={{ marginBottom: 52 }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>What we offer</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1B2B4B", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 520 }}>
            Four ways a sale can work
          </h2>
          <p style={{ marginTop: 16, color: "#4A5568", maxWidth: 500, lineHeight: 1.75 }}>
            Which one fits depends on the property, the numbers and your timescale. We'll tell you which we'd recommend and why.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
          {SOLUTIONS.map(({ icon: Icon, title, subtitle, body }) => (
            <div key={title} className="sol-card" style={{
              padding: "26px 24px",
              borderRadius: 20,
              background: "white",
              border: "1.5px solid #E2EAE8",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.25s, border-color 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(27,43,75,0.09)"; e.currentTarget.style.borderColor = "#B8892A40"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#E2EAE8"; }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(27,43,75,0.07)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon size={19} style={{ color: "#1B2B4B" }} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#1B2B4B", marginBottom: 4, lineHeight: 1.3 }}>{title}</h3>
              <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "#B8892A", marginBottom: 12, letterSpacing: "0.01em", lineHeight: 1.45 }}>{subtitle}</p>
              <p style={{ fontSize: "0.87rem", color: "#4A5568", lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <a href="#contact" onClick={(e) => { e.preventDefault(); go("#contact"); }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "#1B2B4B", color: "white", borderRadius: 50, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Ask which would fit your situation
          </a>
        </div>
      </div>
    </section>
  );
}
