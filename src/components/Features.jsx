import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link2Off, ShieldCheck, Hammer, BadgeCheck, MessageSquare, Coins } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Link2Off,
    title: "No chain",
    description: "We purchase directly. There is no chain beneath us that can collapse and take the sale with it.",
    stat: "Zero fall-throughs",
  },
  {
    icon: ShieldCheck,
    title: "Certainty of completion",
    description: "Once we exchange, we complete. The estate plans around a fixed date, not a buyer who might withdraw.",
    stat: "100% exchange-to-completion rate",
  },
  {
    icon: Hammer,
    title: "Any condition, as-is",
    description: "No clearing, cleaning, or refurbishment required. We take the property exactly as we find it.",
    stat: "Any condition accepted",
  },
  {
    icon: BadgeCheck,
    title: "Experienced with probate",
    description: "We understand how probate sales work, the pressures on executors, and what solicitors need.",
    stat: "Probate-only specialists",
  },
  {
    icon: MessageSquare,
    title: "Straightforward communication",
    description: "You will always know where things stand. We do not disappear after making an offer.",
    stat: "Same-day responses",
  },
  {
    icon: Coins,
    title: "No cost to the estate",
    description: "We do not charge fees to executors or solicitors. Our costs are ours to manage.",
    stat: "Zero fees charged",
  },
];

export default function Features() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        opacity: 0, y: 40, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".features-heading", {
        opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why" ref={ref} className="py-28 px-6 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="features-heading mb-16">
          <p className="font-mono text-clay text-xs uppercase tracking-[0.18em] mb-4">
            Why Clearstone
          </p>
          <h2 className="font-sans font-700 text-cream leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            We understand what executors{" "}
            <span className="font-serif italic text-clay">actually need.</span>
          </h2>
          <p className="font-sans text-cream/60 max-w-xl leading-relaxed">
            Managing an estate is time-consuming and often emotionally difficult.
            The last thing an executor needs is a sale that drags on for months,
            falls through twice, and ends up back on the market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, description, stat }) => (
            <div
              key={title}
              className="feature-card rounded-2xl p-6 border border-clay/10 bg-charcoal transition-all duration-300 hover:border-clay/30 hover:scale-[1.02] group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-clay/10 group-hover:bg-clay/20 transition-colors duration-300">
                <Icon size={18} className="text-clay" />
              </div>
              <h3 className="font-sans font-600 text-cream text-base mb-2">{title}</h3>
              <p className="font-sans text-cream/60 text-sm leading-relaxed mb-4">{description}</p>
              <p className="font-mono text-clay text-xs tracking-wide opacity-70">→ {stat}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center px-7 py-3.5 bg-clay text-white font-sans font-700 text-sm rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            Tell us about the property
          </a>
          <p className="mt-3 font-sans text-cream/40 text-xs">No obligation. Free of charge to the estate.</p>
        </div>
      </div>
    </section>
  );
}
