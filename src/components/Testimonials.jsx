import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EXAMPLES = [
  {
    structure: "Cash purchase",
    title: "Paid in weeks, not months",
    body: "A three-bed semi worth around £200,000 once it has been brought up to standard, needing roughly £25,000 of work. We start from that finished value, take off the works and our own buying, holding and selling costs, and offer a share of what is left — here, in the region of £115,000, completing four to five weeks from the day solicitors are instructed.",
    note: "Less than a finished house would fetch. That difference is what buys the speed and the certainty.",
  },
  {
    structure: "Assisted sale",
    title: "A higher figure, agreed now, paid later",
    body: "The same £200,000 finished value, the same £25,000 of work — but instead of buying it outright we agree your figure up front and fix it: £140,000 in this example, whatever the house eventually sells for. Contracts exchange in about four to five weeks, and from that point the works, the bills and the sale are ours to deal with, not yours.",
    note: "The trade is timing: you are paid on completion, usually six to twelve months later.",
  },
  {
    structure: "Flexible structure",
    title: "Some money now, an income after that",
    body: "Not everyone wants one lump sum. Here the owner releases an agreed amount up front — say £10,000 — and hands over the running of the house completely. We cover the mortgage, the maintenance and the management from day one, pay a fixed sum each month on top, and buy the property outright at a price and on a date both sides agree at the outset.",
    note: "Suits owners who do not need all the money now and would rather keep an income from the property.",
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
    <section id="examples" ref={ref} style={{ padding: "96px 32px", background: "#F7F9F8" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div className="test-head" style={{ marginBottom: 52, textAlign: "center" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Worked examples</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1B2B4B", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            How the numbers can work
          </h2>
          <p style={{ marginTop: 16, color: "#4A5568", maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.75 }}>
            These are illustrative examples with rounded figures, not real transactions. Every offer we make is built on the actual numbers for the property in front of us.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {EXAMPLES.map(({ structure, title, body, note }) => (
            <div key={title} className="test-card" style={{
              padding: "32px",
              borderRadius: 20,
              background: "white",
              border: "1.5px solid #E2EAE8",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}>
              <div style={{ display: "inline-flex", alignSelf: "flex-start", padding: "4px 12px", background: "rgba(184,137,42,0.10)", borderRadius: 50 }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.06em", textTransform: "uppercase" }}>{structure}</span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#1B2B4B", lineHeight: 1.4 }}>{title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#4A5568", lineHeight: 1.8, flex: 1 }}>{body}</p>
              <p style={{ fontSize: "0.85rem", color: "#1B2B4B", lineHeight: 1.65, fontWeight: 600 }}>{note}</p>
              <div style={{ paddingTop: 12, borderTop: "1px solid #E2EAE8" }}>
                <span style={{ fontSize: "0.76rem", color: "#94A3B0", fontWeight: 500 }}>Illustrative example</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
