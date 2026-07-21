import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROBLEMS = [
  {
    title: "Probate property",
    body: "Executors often need certainty the open market can't promise. We buy without a chain, and completion can be timed around probate rather than against it.",
  },
  {
    title: "Inherited homes",
    body: "An inherited house often needs money spending on it before an agent can sell it well. We buy as it stands, or fund the work through an assisted sale.",
  },
  {
    title: "Empty properties",
    body: "Insurance, council tax, deterioration. An empty house gets more expensive the longer it sits, and we can usually move quickly.",
  },
  {
    title: "Properties needing work",
    body: "We price the works into our offers item by item, so you can see exactly how we arrived at the figure rather than taking a headline number on trust.",
  },
  {
    title: "Stalled sales",
    body: "Months on the market, viewings but no offers, or a chain that fell through at the last minute. A direct sale takes the uncertainty out.",
  },
  {
    title: "Complicated circumstances",
    body: "Divorce, debt, a short lease, tenants in place. Tell us the situation as it actually is and we'll give you a straight answer on whether we can help.",
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
    <section id="situations" ref={ref} style={{ padding: "96px 32px", background: "white" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div className="prob-head" style={{ marginBottom: 52 }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Situations we work with</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1B2B4B", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 560 }}>
            Not every sale is straightforward
          </h2>
          <p style={{ marginTop: 16, color: "#4A5568", maxWidth: 520, lineHeight: 1.75 }}>
            Most of the properties we buy fall into one of these categories. If yours doesn't, ask anyway. The first conversation costs nothing.
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
