import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-heading", {
        opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from(".contact-form-wrap", {
        opacity: 0, y: 40, duration: 0.8, ease: "power3.out", delay: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      property: form.property.value,
      role: form.role.value,
      message: form.message.value,
    };
    try {
      await fetch("https://clearstoneproperty.co.uk/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-clay/15 bg-white text-cream placeholder-cream/35 font-sans text-sm focus:outline-none focus:border-clay/50 transition-colors duration-200";

  return (
    <section id="contact" ref={ref} className="py-28 px-6 md:px-10 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="contact-heading">
            <p className="font-mono text-clay text-xs uppercase tracking-[0.18em] mb-4">
              Get in touch
            </p>
            <h2 className="font-sans font-700 text-cream leading-tight mb-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Tell us about
              <br />
              <span className="font-serif italic text-clay">the property.</span>
            </h2>
            <p className="font-sans text-cream/60 leading-relaxed mb-8">
              The quickest way to find out whether we can help is to send us a short message.
              We respond to all enquiries promptly and will not pass your details to anyone else.
            </p>

            <div className="space-y-3">
              {[
                "We respond within one business day",
                "No obligation at this stage",
                "We cover Shropshire, Worcestershire & the wider West Midlands",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-clay mt-2.5 shrink-0" />
                  <p className="font-sans text-cream/55 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 font-sans text-cream/45 text-sm">
              Or email us directly:{" "}
              <a href="mailto:clara@clearstoneproperty.co.uk" className="text-clay hover:underline">
                clara@clearstoneproperty.co.uk
              </a>
            </p>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="rounded-2xl p-10 border border-clay/20 bg-white flex flex-col items-center text-center gap-4">
                <CheckCircle size={40} className="text-clay" />
                <h3 className="font-sans font-700 text-cream text-lg">
                  Thank you — we'll be in touch shortly.
                </h3>
                <p className="font-sans text-cream/55 text-sm leading-relaxed">
                  We typically respond within one business day. If your matter is urgent,
                  please email us directly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 border border-clay/10 bg-white space-y-4"
              >
                <input type="text" name="name" placeholder="Your name" required className={inputClass} />
                <input type="email" name="email" placeholder="Email address" required className={inputClass} />
                <input type="text" name="property" placeholder="Property address (if known)" className={inputClass} />
                <select name="role" defaultValue="" className={inputClass + " appearance-none cursor-pointer"}>
                  <option value="" disabled>Your role</option>
                  <option value="executor">Executor</option>
                  <option value="solicitor">Solicitor</option>
                  <option value="estate_agent">Estate agent</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us a bit about the property and what you need"
                  rows={4}
                  className={inputClass + " resize-none"}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-clay text-white font-sans font-700 text-sm rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : <><Send size={14} /> Send enquiry</>}
                </button>
                <p className="font-sans text-cream/35 text-xs text-center">
                  No obligation. Your details stay private.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
