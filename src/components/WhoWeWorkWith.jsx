import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Scale, Home } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    icon: User,
    title: "Executors",
    body: "We work with you directly if you prefer to handle the sale without an agent. We take the process off your hands, keep you informed throughout, and complete without fuss.",
  },
  {
    icon: Scale,
    title: "Solicitors",
    body: "We understand probate procedures and work constructively with solicitors handling estates. We respond quickly, provide clear documentation, and do not create unnecessary delays.",
  },
  {
    icon: Home,
    title: "Estate agents",
    body: "If you have a probate property that has been on the market without a suitable buyer, we can provide a clean exit for the estate. We work with agents, not around them.",
  },
];

export default function WhoWeWorkWith() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".who-heading", {
        opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from(".who-card", {
        opacity: 0, y: 40, stagger: 0.15, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="who" ref={ref} className="py-28 px-6 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="who-heading mb-16">
          <p className="font-mono text-clay text-xs uppercase tracking-[0.18em] mb-4">
            Who we work with
          </p>
          <h2 className="font-sans font-700 text-cream text-3xl leading-tight mb-4">
            Executors, solicitors,{" "}
            <span className="italic text-clay">and estate agents.</span>
          </h2>
          <p className="font-sans text-cream/60 max-w-xl leading-relaxed">
            We work directly with all three. If you are managing a probate property
            in any capacity, we want to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="who-card rounded-2xl p-8 border border-clay/15 bg-charcoal transition-all duration-300 hover:border-clay/35 hover:scale-[1.02] group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 bg-clay/10 group-hover:bg-clay/20 transition-colors duration-300">
                <Icon size={18} className="text-clay" />
              </div>
              <h3 className="font-sans font-700 text-cream text-base mb-3">{title}</h3>
              <p className="font-sans text-cream/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center px-7 py-3.5 bg-clay text-white font-sans font-700 text-sm rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            Get in touch
          </a>
          <p className="mt-3 font-sans text-cream/40 text-xs">
            We cover Shropshire, Worcestershire, and the wider West Midlands.
          </p>
        </div>
      </div>
    </section>
  );
}
