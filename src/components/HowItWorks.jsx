import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "Speak With Clara",
    body: "A short, confidential conversation about your situation. No commitment required. Clara listens carefully and asks the right questions to understand what you actually need.",
  },
  {
    num: "02",
    title: "Review Your Options",
    body: "Clara sets out the realistic options available to you — clearly and honestly. You will understand exactly what each route involves, what it costs, and what it means for you.",
  },
  {
    num: "03",
    title: "Move Forward Confidently",
    body: "Once you have decided on the right path, we handle the process. You will always know what is happening and why. We manage the complexity so you do not have to.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hiw-head", { opacity: 0, y: 24, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 82%" } });
      gsap.from(".hiw-step", { opacity: 0, y: 28, stagger: 0.14, duration: 0.65, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={ref} style={{ padding: "96px 32px", background: "white" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div className="hiw-head" style={{ marginBottom: 60, textAlign: "center" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>The Process</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1B2B4B", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Simple. Clear. Straightforward.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28, position: "relative" }}>
          {STEPS.map(({ num, title, body }, i) => (
            <div key={num} className="hiw-step" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Step number + connector */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#1B2B4B", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "white", fontWeight: 800, fontSize: "0.85rem" }}>{num}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block" style={{ flex: 1, height: 1, background: "linear-gradient(to right, #CBD5D3, transparent)" }} />
                )}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#1B2B4B", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#4A5568", lineHeight: 1.8 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
