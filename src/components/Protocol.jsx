import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, FileText, Key } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Initial conversation",
    body: "Tell us about the property. We ask a few straightforward questions about the estate, the property condition, and your timeline. No obligation at this stage — just a conversation.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Our written proposal",
    body: "We come back with a clear, written proposal. We explain exactly how we intend to proceed and what the estate will receive. No hidden terms. No surprises.",
  },
  {
    num: "03",
    icon: Key,
    title: "Exchange and completion",
    body: "Once agreed, we move to exchange quickly. We use solicitors experienced in probate transactions and we do not create unnecessary delays. Once we exchange, we complete.",
  },
];

export default function Protocol() {
  const ref = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".protocol-heading", {
        opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 80%" } }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="py-28 px-6 md:px-10 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="protocol-heading mb-16">
          <p className="font-mono text-clay text-xs uppercase tracking-[0.18em] mb-4">
            The process
          </p>
          <h2 className="font-sans font-700 text-cream text-3xl leading-tight">
            Simple. Transparent.{" "}
            <span className="italic text-clay">Certain.</span>
          </h2>
        </div>

        <div className="space-y-5">
          {steps.map(({ num, icon: Icon, title, body }, i) => (
            <div
              key={num}
              ref={(el) => (cardsRef.current[i] = el)}
              className="rounded-2xl p-8 md:p-10 bg-white border border-clay/10 transition-all duration-300 hover:border-clay/25 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="shrink-0 flex md:flex-col gap-4 md:gap-3 items-center md:items-start">
                <span className="font-sans font-700 text-clay/20 text-5xl leading-none">
                  {num}
                </span>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-clay/10">
                  <Icon size={18} className="text-clay" />
                </div>
              </div>
              <div>
                <h3 className="font-sans font-700 text-cream text-lg mb-3">{title}</h3>
                <p className="font-sans text-cream/60 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
