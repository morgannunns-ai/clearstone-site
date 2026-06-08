import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROBLEMS = [
  {
    title: "Probate Property",
    body: "Managing a property as part of an estate is often stressful and time-sensitive. We help executors understand their options and reach a clear outcome.",
  },
  {
    title: "Inherited Homes",
    body: "Inheriting a property brings its own complications — emotional, practical, and financial. We help you work through the options without pressure.",
  },
  {
    title: "Empty Properties",
    body: "An empty property costs money and carries risk. Whether you want to sell, let, or refurbish, we can help you find the right path forward.",
  },
  {
    title: "Properties Needing Refurbishment",
    body: "Some properties struggle to sell in their current condition. We can advise whether refurbishment would add value, or whether a different route makes more sense.",
  },
  {
    title: "Slow or Stalled Sales",
    body: "If your property has been on the market without result, there is usually a reason. We can help you diagnose the issue and explore the alternatives.",
  },
  {
    title: "Complex Situations",
    body: "Divorce, debt, disputed ownership, unusual properties — sometimes situations do not fit neatly into any category. We work through complexity rather than away from it.",
  },
];

export default function Problems() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".prob-head", { opacity: 0, y: 24, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } });
      gsap.from(".prob-card", { opacity: 0, y: 28, stagger: 0.08, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 72%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} style={{ padding: "96px 32px", background: "white" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div className="prob-head" style={{ marginBottom: 52 }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Situations We Help With</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1B2B4B", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 560 }}>
            Not Every Property Situation Is Straightforward
          </h2>
          <p style={{ marginTop: 16, color: "#4A5568", maxWidth: 520, lineHeight: 1.75 }}>
            We work with homeowners and families in a range of situations that fall outside the typical estate agency process.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {PROBLEMS.map(({ title, body }) => (
            <div key={title} className="prob-card" style={{
              padding: "28px 28px 32px",
              borderRadius: 16,
              border: "1.5px solid #E2EAE8",
              background: "#FAFCFB",
              transition: "box-shadow 0.2s, border-color 0.2s",
              cursor: "default",
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(27,43,75,0.08)"; e.currentTarget.style.borderColor = "#CBD5D3"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#E2EAE8"; }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#B8892A", marginBottom: 18 }} />
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#1B2B4B", marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#4A5568", lineHeight: 1.75 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
