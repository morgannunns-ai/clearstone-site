import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  {
    name: "Jarvis",
    role: "Strategic Advisor",
    img: "/images/team/jarvis.png",
    bio: "The team's hub. Morgan talks to Jarvis about direction, risk, and the next move. He sees the board, reads the angles, and sends the right person. Calm under pressure, always.",
  },
  {
    name: "Clara",
    role: "Head of Property Investment Operations",
    img: "/images/team/clara.png",
    bio: "The face of Clearstone. Clara handles every deal from first conversation through to accepted offer. She helps homeowners navigate complex property decisions with clarity, honesty, and no pressure.",
  },
  {
    name: "Max",
    role: "Deal Analyst",
    img: "/images/team/max.png",
    bio: "The numbers behind every deal. Max digs through Property Filter, Rightmove and Land Registry data to build deal briefs that Clara can take into a negotiation knowing she's on solid ground.",
  },
  {
    name: "Aria",
    role: "Content & Marketing",
    img: "/images/team/aria.png",
    bio: "The creative engine. Aria runs Inside Oswestry's social media, scripts YouTube content, and generates the marketing that brings leads in the door. She makes sure people know Clearstone before Clara ever calls.",
  },
  {
    name: "Felix",
    role: "Finance & ROI",
    img: "/images/team/felix.png",
    bio: "The financial backbone. Felix tracks every account — Revolut, Barclays, Capital One, Xero — and knows exactly where the business stands. His advice on where to cut and invest has saved more than the team costs.",
  },
  {
    name: "Grace",
    role: "Progression Agent",
    img: "/images/team/grace.png",
    bio: "The closer. Grace picks up the baton from Clara once an offer is accepted and shepherds every deal through to completion. Patient with solicitors, firm on deadlines, and keeps Morgan informed without the drama.",
  },
];

function MemberCard({ member, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 32,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 82%",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 48,
        alignItems: "center",
        padding: "32px 0",
      }}
      className="flex-col md:flex-row"
    >
      {/* Portrait */}
      <div
        style={{
          width: 240,
          height: 300,
          borderRadius: 20,
          overflow: "hidden",
          flexShrink: 0,
          boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
        }}
        className={`${isEven ? "" : "md:order-last"} w-48 md:w-60 h-60 md:h-[300px]`}
      >
        <img
          src={member.img}
          alt={member.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>

      {/* Copy */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <p
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "#B8892A",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {member.name}
        </p>
        <h3
          style={{
            fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
          }}
        >
          {member.role}
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.8,
            maxWidth: 520,
          }}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-header > *", {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 72%",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={ref}
      style={{
        padding: "96px 32px",
        background: "#1B2B4B",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div className="team-header" style={{ marginBottom: 56 }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#B8892A",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            The Team
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            The people behind Clearstone
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              maxWidth: 600,
              marginTop: 16,
            }}
          >
            A small, focused team built around one thing: making property certain.
            Every member has a specific role and a clear hand-off point.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-2">
          {TEAM.map((member, i) => (
            <div key={member.name}>
              <MemberCard member={member} index={i} />
              {i < TEAM.length - 1 && (
                <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "8px 0" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
