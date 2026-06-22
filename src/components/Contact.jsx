import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-inner", { opacity: 0, y: 28, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 78%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const f = e.target;
    try {
      await fetch("https://clearstoneproperty.co.uk/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: f.name.value, email: f.email.value, phone: f.phone?.value || "", message: f.message.value }),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  const inp = {
    width: "100%", padding: "12px 16px", borderRadius: 10,
    border: "1.5px solid #D1D9D7", background: "white",
    fontSize: "0.9rem", fontFamily: "inherit", color: "#1A202C",
    outline: "none", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "96px 32px", background: "white" }}>
      <div className="contact-inner" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="grid-cols-1 md:grid-cols-2">

          {/* Left */}
          <div>
            <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1B2B4B", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Let's Discuss Your Situation
            </h2>
            <p style={{ color: "#4A5568", lineHeight: 1.8, marginBottom: 28 }}>
              Every situation is different. A short conversation with Clara is always the best place to start — there is no obligation and no pressure.
            </p>

            {/* Clara mini card */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "#F7F9F8", borderRadius: 16, border: "1.5px solid #E2EAE8", marginBottom: 28 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                <img src="/images/team/clara.png" alt="Clara"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1B2B4B" }}>Clara</div>
                <div style={{ fontSize: "0.8rem", color: "#6B7280" }}>Property Solutions Specialist</div>
                <div style={{ fontSize: "0.78rem", color: "#6B8F6B", fontWeight: 600, marginTop: 2 }}>● Available now</div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Confidential conversation","No obligation","Response within one business day","Shropshire, Worcestershire & West Midlands"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#6B8F6B", fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: "0.88rem", color: "#4A5568" }}>{item}</span>
                </div>
              ))}
            </div>

            <p style={{ marginTop: 24, fontSize: "0.88rem", color: "#4A5568" }}>
              Email: <a href="mailto:clara@clearstoneproperty.co.uk" style={{ color: "#1B2B4B", fontWeight: 600 }}>clara@clearstoneproperty.co.uk</a>
            </p>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div style={{ padding: "48px 32px", borderRadius: 20, background: "#F7F9F8", border: "1.5px solid #E2EAE8", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 16 }}>
                <CheckCircle size={40} style={{ color: "#6B8F6B" }} />
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#1B2B4B" }}>Thank you — we will be in touch shortly.</h3>
                <p style={{ fontSize: "0.9rem", color: "#4A5568", lineHeight: 1.75 }}>Clara will respond within one business day. Your enquiry is treated in complete confidence.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Your name</label>
                  <input name="name" type="text" required placeholder="Full name" style={inp}
                    onFocus={e => e.target.style.borderColor = "#1B2B4B"}
                    onBlur={e => e.target.style.borderColor = "#D1D9D7"} />
                </div>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Email address</label>
                  <input name="email" type="email" required placeholder="your@email.com" style={inp}
                    onFocus={e => e.target.style.borderColor = "#1B2B4B"}
                    onBlur={e => e.target.style.borderColor = "#D1D9D7"} />
                </div>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Phone number <span style={{ fontWeight: 400, color: "#9CA3AF" }}>(optional)</span></label>
                  <input name="phone" type="tel" placeholder="07xxx xxxxxx" style={inp}
                    onFocus={e => e.target.style.borderColor = "#1B2B4B"}
                    onBlur={e => e.target.style.borderColor = "#D1D9D7"} />
                </div>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Brief message</label>
                  <textarea name="message" rows={4} placeholder="Tell us a little about your situation and what you need..." style={{ ...inp, resize: "none" }}
                    onFocus={e => e.target.style.borderColor = "#1B2B4B"}
                    onBlur={e => e.target.style.borderColor = "#D1D9D7"} />
                </div>
                <button type="submit" disabled={loading}
                  style={{ padding: "14px", background: "#1B2B4B", color: "white", border: "none", borderRadius: 12, fontSize: "0.92rem", fontWeight: 700, fontFamily: "inherit", cursor: "pointer", transition: "opacity 0.2s", opacity: loading ? 0.65 : 1 }}>
                  {loading ? "Sending…" : "Book My Consultation"}
                </button>
                <p style={{ fontSize: "0.76rem", color: "#9CA3AF", textAlign: "center" }}>
                  Confidential. No obligation. We never share your details.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
