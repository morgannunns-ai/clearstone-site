export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-16 rounded-t-3xl border-t border-cream/8"
      style={{ background: "rgba(10,20,19,0.8)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <p className="font-sans font-700 text-cream text-base mb-1">
              Clearstone Property
            </p>
            <p className="font-mono text-clay text-[10px] uppercase tracking-widest mb-4 opacity-70">
              Probate Specialists
            </p>
            <p className="font-sans text-cream/40 text-sm leading-relaxed">
              Providing certain outcomes for probate estates in Shropshire,
              Worcestershire, and the West Midlands.
            </p>

            {/* Status indicator */}
            <div className="flex items-center gap-2 mt-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clay opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-clay" />
              </span>
              <span className="font-mono text-clay text-[10px] uppercase tracking-wider opacity-70">
                Accepting enquiries
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-cream/30 text-[10px] uppercase tracking-widest mb-5">
              Navigate
            </p>
            <div className="space-y-3">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Why Clearstone", href: "#why" },
                { label: "Who We Work With", href: "#who" },
                { label: "Get in Touch", href: "#contact" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); }}
                  className="block font-sans text-cream/45 text-sm hover:text-cream transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-cream/30 text-[10px] uppercase tracking-widest mb-5">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="mailto:morgan@clearstoneproperty.co.uk"
                className="block font-sans text-cream/45 text-sm hover:text-clay transition-colors duration-200"
              >
                morgan@clearstoneproperty.co.uk
              </a>
              <p className="font-sans text-cream/30 text-sm">
                Shropshire · Worcestershire · West Midlands
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-cream/25 text-xs">
            © {new Date().getFullYear()} Clearstone Property. All rights reserved.
          </p>
          <p className="font-sans text-cream/25 text-xs">
            Probate property specialists
          </p>
        </div>
      </div>
    </footer>
  );
}
