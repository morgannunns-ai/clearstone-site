import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EXAMPLES = [
  {
    structure: "Direct purchase",
    title: "A three-bed semi needing full refurbishment",
    body: "Worth around £200,000 done up, but needing roughly £40,000 of work nobody wants to take on. We offer £140,000 with the works priced item by item, no chain, and completion in a matter of weeks.",
  },
  {
    structure: "Assisted sale",
    title: "A dated bungalow worth more improved",
    body: "Worth around £190,000 as it stands, or £240,000 after £25,000 of updating. We fund and manage the work, the bungalow sells on the open market, and the owner receives the sale price minus the costs agreed in writing before work started.",
  },
  {
    structure: "Delayed completion",
    title: "A probate terrace that needs time",
    body: "The estate wants certainty, but probate and house clearance take months. The sale is agreed early with completion set well ahead, so the executors know where they stand while everything else takes its course.",
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
          {EXAMPLES.map(({ structure, title, body }) => (
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
