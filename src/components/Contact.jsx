import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-inner", { opacity: 0, y: 28, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 78%" } });
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
        body: JSON.stringify({ name: f.name.value, email: f.email.value, property: f.property.value, role: f.role.value, message: f.message.value }),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  const inp = "w-full px-4 py-2.5 rounded-lg text-sm transition-colors duration-200 focus:outline-none";
  const inpStyle = { border: "1px solid #c8dedd", background: "white", color: "#1A2E2C", fontSize: "0.95rem" };
  const inpFocus = { "--tw-ring-color": "#2C5F5D" };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:px-10" style={{ background: "#f3f8f7" }}>
      <div className="contact-inner" style={{ maxWidth: 860, margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          <div>
            <p className="text-xs font-600 uppercase tracking-widest mb-3" style={{ color: "#2C5F5D", letterSpacing: "0.14em" }}>Get in touch</p>
            <h2 className="font-700 mb-4 leading-snug" style={{ fontSize: "1.75rem", color: "#1A2E2C" }}>
              Tell us about the property
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "#3d5c5a" }}>
              The quickest way to find out whether we can help is to send us a short message. We respond to all enquiries promptly and will not pass your details on to anyone else.
            </p>
            <div className="space-y-2 mb-6">
              {[
                "We respond within one business day",
                "No obligation at this stage",
                "Shropshire, Worcestershire & the wider West Midlands",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#2C5F5D" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "#3d5c5a" }}>{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: "#3d5c5a" }}>
              Email: <a href="mailto:clara@clearstoneproperty.co.uk" className="hover:underline" style={{ color: "#2C5F5D" }}>clara@clearstoneproperty.co.uk</a>
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-xl p-10 flex flex-col items-center text-center gap-4 bg-white" style={{ border: "1px solid #d8eae8" }}>
                <CheckCircle size={36} style={{ color: "#2C5F5D" }} />
                <h3 className="font-600 text-base" style={{ color: "#1A2E2C" }}>Thank you. We will be in touch shortly.</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3d5c5a" }}>We typically respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" name="name" placeholder="Your name" required className={inp} style={inpStyle} />
                <input type="email" name="email" placeholder="Email address" required className={inp} style={inpStyle} />
                <input type="text" name="property" placeholder="Property address (if known)" className={inp} style={inpStyle} />
                <select name="role" defaultValue="" className={inp + " appearance-none cursor-pointer"} style={inpStyle}>
                  <option value="" disabled>Your role</option>
                  <option value="executor">Executor</option>
                  <option value="solicitor">Solicitor</option>
                  <option value="estate_agent">Estate agent</option>
                  <option value="other">Other</option>
                </select>
                <textarea name="message" placeholder="Tell us a bit about the property and what you need" rows={4} className={inp + " resize-none"} style={inpStyle} />
                <button type="submit" disabled={loading}
                  className="w-full py-3 font-600 text-sm rounded-lg text-white transition-all duration-200 hover:opacity-90 disabled:opacity-60"
                  style={{ background: "#2C5F5D" }}>
                  {loading ? "Sending…" : "Send enquiry"}
                </button>
                <p className="text-xs text-center" style={{ color: "#8aadab" }}>No obligation. Your details stay private.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
