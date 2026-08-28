export default function Footer() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "#0F1A30", padding: "64px 32px 40px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 48, marginBottom: 48 }} className="grid-cols-1 md:grid-cols-[1fr_auto_auto]">

          {/* Brand */}
          <div>
            <div style={{ fontWeight: 700, fontSize: "1rem", color: "white", marginBottom: 4 }}>Clearstone Property</div>
            <div style={{ fontSize: "0.72rem", color: "#B8892A", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Property Buyers</div>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: 300 }}>
              We buy residential property directly: probate sales, houses that need work, and sales that have stalled.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Navigate</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[["Situations","#situations"],["What we offer","#solutions"],["How it works","#how-it-works"],["Get in touch","#contact"]].map(([l, h]) => (
                <a key={h} href={h} onClick={(e) => { e.preventDefault(); go(h); }}
                  style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.85)"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Contact</p>
            <a href="mailto:clara@clearstoneproperty.co.uk"
              style={{ display: "block", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.85)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}>
              clara@clearstoneproperty.co.uk
            </a>
          </div>
        </div>

        <div style={{ paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.2)" }}>© {new Date().getFullYear()} Clearstone Property. All rights reserved.</p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.2)" }}>Direct residential property buyers</p>
        </div>
      </div>
    </footer>
  );
}
