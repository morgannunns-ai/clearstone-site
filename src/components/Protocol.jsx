import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, FileText, Key } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", icon: MessageCircle, title: "Initial conversation",   body: "Tell us about the property. We ask a few straightforward questions about the estate, the property condition, and your timeline. No obligation at this stage." },
  { num: "02", icon: FileText,      title: "Our written proposal",   body: "We come back with a clear, written proposal. We explain exactly how we intend to proceed and what the estate will receive. No hidden terms." },
  { num: "03", icon: Key,           title: "Exchange and completion", body: "Once agreed, we move to exchange quickly. We use solicitors experienced in probate transactions and we do not create unnecessary delays. Once we exchange, we complete." },
];

export default function Protocol() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-card", { opacity: 0, y: 32, duration: 0.65, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" } });
      gsap.from(".proto-head", { opacity: 0, y: 20, duration: 0.65, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 82%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="py-24 px-6 md:px-10" style={{ background: "#f3f8f7" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div className="proto-head mb-12">
          <p className="text-xs font-600 uppercase tracking-widest mb-3" style={{ color: "#2C5F5D", letterSpacing: "0.14em" }}>The process</p>
          <h2 className="font-700 leading-snug" style={{ fontSize: "1.75rem", color: "#1A2E2C" }}>
            Simple. Transparent. Certain.
          </h2>
          <p className="mt-3" style={{ color: "#3d5c5a", maxWidth: 520 }}>
            Selling a probate property through the open market takes time and rarely goes smoothly. We offer an alternative that gives the estate a guaranteed outcome.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map(({ num, icon: Icon, title, body }) => (
            <div key={num} className="step-card rounded-xl p-7 bg-white flex gap-6 items-start"
              style={{ border: "1px solid #d8eae8" }}>
              <div className="shrink-0 flex flex-col items-center gap-3">
                <span className="font-700 leading-none" style={{ fontSize: "1.5rem", color: "#c8dedd" }}>{num}</span>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#dceeed" }}>
                  <Icon size={16} style={{ color: "#2C5F5D" }} />
                </div>
              </div>
              <div>
                <h3 className="font-600 mb-2" style={{ fontSize: "1rem", color: "#1A2E2C" }}>{title}</h3>
                <p className="leading-relaxed" style={{ color: "#3d5c5a" }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
