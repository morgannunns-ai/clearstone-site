import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ClaraSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".clara-img", { opacity: 0, x: -32, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 72%" } });
      gsap.from(".clara-copy > *", { opacity: 0, y: 24, stagger: 0.12, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 72%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="clara" ref={ref} style={{ padding: "96px 32px", background: "#1B2B4B", overflow: "hidden" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 64, alignItems: "center" }} className="grid-cols-1 md:grid-cols-[auto_1fr]">

          {/* Contact card */}
          <div className="clara-img hidden md:block" style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ width: 300, borderRadius: 24, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "36px 28px", boxShadow: "0 24px 64px rgba(0,0,0,0.3)" }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(184,137,42,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Mail size={22} style={{ color: "#B8892A" }} />
              </div>
              <div style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>Clara</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", marginBottom: 16 }}>First point of contact</div>
              <a href="mailto:clara@clearstoneproperty.co.uk"
                style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", wordBreak: "break-all" }}>
                clara@clearstoneproperty.co.uk
              </a>
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", lineHeight: 1.6 }}>
                Replies within one business day
              </div>
            </div>
            {/* Gold accent */}
            <div style={{ position: "absolute", bottom: -12, right: -12, width: 80, height: 80, borderRadius: "50%", background: "rgba(184,137,42,0.15)", zIndex: -1 }} />
          </div>

          {/* Copy */}
          <div className="clara-copy" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Who you'll deal with
            </p>
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              One point of contact, start to finish
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>
              Enquiries come to Clara, whether you're a homeowner, an executor, a solicitor or an estate agent. One address for everything, a reply within one business day, and the same contact from first email through to completion, so nothing gets lost in a handover.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>
              We'd rather be straight with you than polished. If we can't help, we'll tell you early. If we make an offer, we'll show you how we arrived at it.
            </p>
            <div style={{ paddingTop: 8 }}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); go("#contact"); }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "#B8892A", color: "white", borderRadius: 50, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Get in touch <ArrowRight size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
