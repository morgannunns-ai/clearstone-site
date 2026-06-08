import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Clearstone", href: "#why" },
    { label: "Who We Work With", href: "#who" },
  ];

  const nav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? "14px 32px" : "22px 32px",
        background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #e4eeec" : "none",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }} className="flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span className="font-sans font-700 text-base" style={{ color: "#1A2E2C" }}>Clearstone Property</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.href} onClick={() => nav(l.href)}
              className="font-sans text-sm cursor-pointer bg-transparent border-none transition-colors duration-200"
              style={{ color: "#4a6563" }}>
              {l.label}
            </button>
          ))}
        </div>

        <a href="#contact" onClick={(e) => { e.preventDefault(); nav("#contact"); }}
          className="hidden md:inline-flex items-center px-5 py-2.5 font-sans font-600 text-sm rounded-full text-white transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
          style={{ background: "#2C5F5D" }}>
          Speak to us
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: "#2C5F5D" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b px-6 py-6 flex flex-col gap-4 shadow-sm" style={{ borderColor: "#e4eeec" }}>
          {links.map((l) => (
            <button key={l.href} onClick={() => nav(l.href)}
              className="text-left font-sans text-sm bg-transparent border-none cursor-pointer"
              style={{ color: "#4a6563" }}>
              {l.label}
            </button>
          ))}
          <a href="#contact" onClick={(e) => { e.preventDefault(); nav("#contact"); }}
            className="mt-2 inline-flex justify-center px-5 py-3 font-sans font-600 text-sm rounded-full text-white"
            style={{ background: "#2C5F5D" }}>
            Speak to us
          </a>
        </div>
      )}
    </nav>
  );
}
