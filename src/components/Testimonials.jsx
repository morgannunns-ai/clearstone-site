import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote: "We had no idea where to start after my mother passed. Clara explained everything clearly and without pressure. The property was sold within six weeks and we knew exactly what was happening at every stage.",
    name: "Sarah M.",
    role: "Executor, Shropshire",
  },
  {
    quote: "The property had been on the market for eight months with no serious offers. Clara assessed the situation honestly, recommended an assisted sale approach, and we achieved a price we were genuinely happy with.",
    name: "James T.",
    role: "Homeowner, Worcestershire",
  },
  {
    quote: "I was dealing with an inherited property in difficult condition and had no idea what it was worth or what to do with it. The advice was practical, honest and completely without obligation.",
    name: "Robert & Angela K.",
    role: "Beneficiaries, West Midlands",
  },
];

export default function Testimonials() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".test-card", { opacity: 0, y: 28, stagger: 0.12, duration: 0.65, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%" } });
      gsap.from(".test-head", { opacity: 0, y: 20, duration: 0.65, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 82%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} style={{ padding: "96px 32px", background: "#F7F9F8" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div className="test-head" style={{ marginBottom: 52, textAlign: "center" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Client Experiences</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1B2B4B", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Real Situations. Real Outcomes.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {TESTIMONIALS.map(({ quote, name, role }) => (
            <div key={name} className="test-card" style={{
              padding: "32px",
              borderRadius: 20,
              background: "white",
              border: "1.5px solid #E2EAE8",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}>
              <div style={{ fontSize: "2rem", lineHeight: 1, color: "#B8892A", fontWeight: 700, opacity: 0.6 }}>"</div>
              <p style={{ fontSize: "0.92rem", color: "#374151", lineHeight: 1.8, flex: 1 }}>{quote}</p>
              <div style={{ paddingTop: 4, borderTop: "1px solid #E2EAE8" }}>
                <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#1B2B4B" }}>{name}</div>
                <div style={{ fontSize: "0.78rem", color: "#6B8F6B", fontWeight: 500, marginTop: 2 }}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
