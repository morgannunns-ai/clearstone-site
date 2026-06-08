import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link2Off, ShieldCheck, Hammer, BadgeCheck, MessageSquare, Coins } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Link2Off,       title: "No chain",                     description: "We purchase directly. There is no chain beneath us that can collapse and take the sale with it." },
  { icon: ShieldCheck,    title: "Certainty of completion",       description: "Once we exchange, we complete. The estate can plan around a fixed date rather than hoping a buyer does not withdraw." },
  { icon: Hammer,         title: "Properties in any condition",   description: "We do not require the property to be cleared, cleaned, or refurbished before we proceed. We take it as we find it." },
  { icon: BadgeCheck,     title: "Experienced with probate",      description: "We understand how probate sales work, the pressures on executors, and the requirements of solicitors handling estates." },
  { icon: MessageSquare,  title: "Straightforward communication", description: "You will always know where things stand. We do not disappear after making an offer." },
  { icon: Coins,          title: "No cost to the estate",         description: "We do not charge fees to executors or solicitors. Our costs are our own to manage." },
];

export default function Features() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feat-head", { opacity: 0, y: 24, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } });
      gsap.from(".feat-card", { opacity: 0, y: 32, duration: 0.6, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 72%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why" ref={ref} className="py-24 px-6 md:px-10 bg-white">
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        <div className="feat-head mb-12">
          <p className="text-xs font-600 uppercase tracking-widest mb-3" style={{ color: "#2C5F5D", letterSpacing: "0.14em" }}>Why Clearstone</p>
          <h2 className="font-700 mb-4 leading-snug" style={{ fontSize: "1.75rem", color: "#1A2E2C" }}>
            We understand what executors actually need
          </h2>
          <p style={{ color: "#3d5c5a", maxWidth: 560 }}>
            Managing an estate is time-consuming and often emotionally difficult. The last thing an executor needs is a property sale that drags on for months, falls through twice, and ends up back on the market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="feat-card rounded-xl p-6 transition-all duration-200 hover:shadow-sm"
              style={{ background: "#f3f8f7", border: "1px solid #d8eae8" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ background: "#dceeed" }}>
                <Icon size={16} style={{ color: "#2C5F5D" }} />
              </div>
              <h3 className="font-600 mb-2" style={{ fontSize: "0.95rem", color: "#1A2E2C" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#3d5c5a" }}>{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center px-6 py-3 font-600 text-sm rounded-full text-white transition-all duration-200 hover:opacity-90"
            style={{ background: "#2C5F5D" }}>
            Tell us about the property
          </a>
          <span className="ml-4 text-sm" style={{ color: "#6a8c8a" }}>No obligation. Free of charge to the estate.</span>
        </div>
      </div>
    </section>
  );
}
