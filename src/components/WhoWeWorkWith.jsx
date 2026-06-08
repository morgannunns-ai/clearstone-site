import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Scale, Home } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  { icon: User,  title: "Executors",     body: "We work with you directly if you prefer to handle the sale without an agent. We take the process off your hands and keep you informed throughout." },
  { icon: Scale, title: "Solicitors",    body: "We are familiar with probate procedures and work constructively with solicitors handling estates. We respond quickly and do not create unnecessary delays." },
  { icon: Home,  title: "Estate agents", body: "If you have a probate property that has been on the market for a while, we can provide a clean exit for the estate. We work with agents, not around them." },
];

export default function WhoWeWorkWith() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".who-head", { opacity: 0, y: 24, duration: 0.65, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } });
      gsap.from(".who-card", { opacity: 0, y: 32, stagger: 0.1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 72%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="who" ref={ref} className="py-24 px-6 md:px-10 bg-white">
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div className="who-head mb-12">
          <p className="text-xs font-600 uppercase tracking-widest mb-3" style={{ color: "#2C5F5D", letterSpacing: "0.14em" }}>Who we work with</p>
          <h2 className="font-700 mb-4 leading-snug" style={{ fontSize: "1.75rem", color: "#1A2E2C" }}>
            Executors, solicitors, and estate agents
          </h2>
          <p style={{ color: "#3d5c5a", maxWidth: 560 }}>
            We work directly with all three. If you are managing a probate property in any capacity — we want to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {audiences.map(({ icon: Icon, title, body }) => (
            <div key={title} className="who-card rounded-xl p-6 transition-all duration-200 hover:shadow-sm"
              style={{ background: "#f3f8f7", border: "1px solid #d8eae8" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ background: "#dceeed" }}>
                <Icon size={16} style={{ color: "#2C5F5D" }} />
              </div>
              <h3 className="font-600 mb-2" style={{ fontSize: "0.95rem", color: "#1A2E2C" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#3d5c5a" }}>{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center px-6 py-3 font-600 text-sm rounded-full text-white transition-all duration-200 hover:opacity-90"
            style={{ background: "#2C5F5D" }}>
            Get in touch
          </a>
          <span className="ml-4 text-sm" style={{ color: "#6a8c8a" }}>We cover Shropshire, Worcestershire, and the wider West Midlands.</span>
        </div>
      </div>
    </section>
  );
}
