import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Wrench, Zap, Compass } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS = [
  {
    icon: TrendingUp,
    title: "Sell Traditionally",
    subtitle: "Best for properties ready for the open market",
    body: "For well-presented properties in good condition, a traditional estate agency sale often achieves the best price. We can guide you through the process or refer you to the right agent for your area.",
  },
  {
    icon: Wrench,
    title: "Assisted Sale",
    subtitle: "Ideal when improvements could significantly increase value",
    body: "We manage the refurbishment or preparation process, funding improvements and marketing the property for sale. The estate or owner receives the uplifted sale price minus agreed costs.",
  },
  {
    icon: Zap,
    title: "Investor Purchase",
    subtitle: "For speed and certainty above all else",
    body: "We purchase directly, without a chain and without delays. The price reflects the condition and circumstances, but the process is fast, certain, and handled with care.",
  },
  {
    icon: Compass,
    title: "Tailored Strategy",
    subtitle: "For unusual or complex circumstances",
    body: "Some situations do not fit a standard template. We take time to understand the full picture and design a strategy that fits — whether that involves a combination of approaches or something less conventional.",
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
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Pathways Forward</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1B2B4B", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 520 }}>
            Solutions Built Around Your Situation
          </h2>
          <p style={{ marginTop: 16, color: "#4A5568", maxWidth: 500, lineHeight: 1.75 }}>
            There is rarely a one-size-fits-all answer. We help you identify which route makes the most sense for your circumstances.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {SOLUTIONS.map(({ icon: Icon, title, subtitle, body }) => (
            <div key={title} className="sol-card" style={{
              padding: "32px",
              borderRadius: 20,
              background: "white",
              border: "1.5px solid #E2EAE8",
              transition: "box-shadow 0.25s, border-color 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(27,43,75,0.09)"; e.currentTarget.style.borderColor = "#B8892A40"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#E2EAE8"; }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(27,43,75,0.07)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Icon size={20} style={{ color: "#1B2B4B" }} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#1B2B4B", marginBottom: 4 }}>{title}</h3>
              <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#B8892A", marginBottom: 14, letterSpacing: "0.01em" }}>{subtitle}</p>
              <p style={{ fontSize: "0.9rem", color: "#4A5568", lineHeight: 1.75 }}>{body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <a href="#contact" onClick={(e) => { e.preventDefault(); go("#contact"); }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "#1B2B4B", color: "white", borderRadius: 50, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Discuss Your Situation
          </a>
        </div>
      </div>
    </section>
  );
}
