export default function Footer() {
  const nav = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="px-6 md:px-10 py-14" style={{ background: "#1A2E2C", borderTop: "1px solid #2a4442" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-700 text-white text-base mb-1">Clearstone Property</p>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#4a8a87", letterSpacing: "0.14em" }}>Probate Specialists</p>
            <p className="text-sm leading-relaxed" style={{ color: "#7aadaa" }}>
              Providing certain outcomes for probate estates in Shropshire, Worcestershire, and the West Midlands.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#3BBFB8" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#3BBFB8" }} />
              </span>
              <span className="text-xs uppercase tracking-wider" style={{ color: "#4a8a87", letterSpacing: "0.12em" }}>Accepting enquiries</span>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#4a6a68", letterSpacing: "0.14em" }}>Navigate</p>
            <div className="space-y-2.5">
              {[["How It Works","#how-it-works"],["Why Clearstone","#why"],["Who We Work With","#who"],["Get in Touch","#contact"]].map(([label, href]) => (
                <a key={href} href={href} onClick={(e) => { e.preventDefault(); nav(href); }}
                  className="block text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#7aadaa" }}>{label}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#4a6a68", letterSpacing: "0.14em" }}>Contact</p>
            <a href="mailto:clara@clearstoneproperty.co.uk" className="block text-sm mb-2 hover:text-white transition-colors duration-200" style={{ color: "#7aadaa" }}>
              clara@clearstoneproperty.co.uk
            </a>
            <p className="text-sm" style={{ color: "#4a6a68" }}>Shropshire · Worcestershire · West Midlands</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3" style={{ borderTop: "1px solid #2a4442" }}>
          <p className="text-xs" style={{ color: "#4a6a68" }}>© {new Date().getFullYear()} Clearstone Property. All rights reserved.</p>
          <p className="text-xs" style={{ color: "#4a6a68" }}>Probate property specialists</p>
        </div>
      </div>
    </footer>
  );
}
