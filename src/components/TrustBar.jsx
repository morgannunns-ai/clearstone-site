const SIGNALS = [
  "Property Specialists",
  "Probate Support",
  "Local Knowledge",
  "Professional Guidance",
  "Tailored Solutions",
];

export default function TrustBar() {
  return (
    <div style={{ background: "white", borderTop: "1px solid #E2EAE8", borderBottom: "1px solid #E2EAE8", padding: "18px 32px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 36px" }}>
        {SIGNALS.map(s => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#B8892A", fontWeight: 700, fontSize: "0.9rem" }}>✓</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1B2B4B", whiteSpace: "nowrap" }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
