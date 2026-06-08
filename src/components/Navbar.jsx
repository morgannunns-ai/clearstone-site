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

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? "12px 32px" : "20px 32px",
        background: scrolled ? "rgba(243,247,246,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(44,95,93,0.12)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex flex-col leading-tight"
        >
          <span className="font-sans font-700 text-cream text-base tracking-tight">
            Clearstone Property
          </span>
          <span className="font-mono text-clay text-[10px] uppercase tracking-widest opacity-70">
            Probate Specialists
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="font-sans text-sm text-cream/60 hover:text-clay transition-colors duration-200 cursor-pointer bg-transparent border-none"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-clay text-white font-sans font-600 text-sm rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
        >
          Speak to us
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream/70 hover:text-clay transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-charcoal border-b border-clay/10 px-6 py-6 flex flex-col gap-4 shadow-lg">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-left font-sans text-sm text-cream/70 hover:text-clay transition-colors bg-transparent border-none cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="mt-2 inline-flex justify-center px-5 py-3 bg-clay text-white font-sans font-600 text-sm rounded-full"
          >
            Speak to us
          </a>
        </div>
      )}
    </nav>
  );
}
