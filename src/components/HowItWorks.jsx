import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "Tell us about the property",
    body: "Use the form below or email Clara, your point of contact from day one. The address, the condition, and what you're trying to achieve. Rough detail is fine to start with, and you'll get a reply within one business day.",
  },
  {
    num: "02",
    title: "We work up the numbers",
    body: "We research the property and the local market, price any works needed, and put our offer in writing with the figures shown, not just a headline number.",
  },
  {
    num: "03",
    title: "You decide in your own time",
    body: "If you want to go ahead, solicitors are instructed and we agree the timetable together, with Clara keeping you posted at every stage. If not, that's fine. There are no fees either way.",
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
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>The process</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1B2B4B", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            What happens when you get in touch
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
