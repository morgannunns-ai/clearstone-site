import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "How It Works",  href: "#how-it-works" },
  { label: "Solutions",     href: "#solutions" },
  { label: "About Clara",   href: "#clara" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href) => { setOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? "14px 32px" : "20px 32px",
      background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0)",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid #E2EAE8" : "none",
      transition: "all 0.4s ease",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ textDecoration: "none" }}>
          <div style={{ fontWeight: 700, fontSize: "1rem", color: "#1B2B4B", letterSpacing: "-0.01em" }}>
            Clearstone Property
          </div>
          <div style={{ fontSize: "0.68rem", color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginTop: 1 }}>
            Property Solutions
          </div>
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="hidden md:flex">
          {LINKS.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.88rem", fontWeight: 500, color: "#4A5568", fontFamily: "inherit" }}
              onMouseEnter={e => e.target.style.color = "#1B2B4B"}
              onMouseLeave={e => e.target.style.color = "#4A5568"}>
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" onClick={(e) => { e.preventDefault(); go("#contact"); }}
          className="hidden md:inline-flex"
          style={{ padding: "10px 22px", background: "#1B2B4B", color: "white", borderRadius: 50, fontSize: "0.88rem", fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em", transition: "opacity 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
          Book a Consultation
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", color: "#1B2B4B" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "white", borderBottom: "1px solid #E2EAE8", padding: "20px 32px 24px", display: "flex", flexDirection: "column", gap: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
          {LINKS.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.95rem", fontWeight: 500, color: "#1A202C", textAlign: "left", fontFamily: "inherit" }}>
              {l.label}
            </button>
          ))}
          <a href="#contact" onClick={(e) => { e.preventDefault(); go("#contact"); }}
            style={{ marginTop: 8, padding: "12px 22px", background: "#1B2B4B", color: "white", borderRadius: 50, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
            Book a Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
