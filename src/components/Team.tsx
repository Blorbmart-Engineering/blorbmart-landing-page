type TeamMember = {
  name: string
  role: string
  image?: string
  socials: {
    label: string
    href: string
  }[]
}

const members: TeamMember[] = [
  {
    name: 'Oluwabiyi Samuel',
    role: 'CEO & Co-Founder',
    image: '/samuel.jpg',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'X', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Email', href: '#' },
    ],
  },
  {
    name: 'Badmus Qudus Ayomide',
    role: 'CTO & Co-Founder',
    image: '/badmus.jpg',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'X', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Email', href: '#' },
    ],
  },
  {
    name: 'Olaniyan Alexander',
    role: 'COO',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'X', href: '#' },
      { label: 'Email', href: '#' },
    ],
  },
  {
    name: 'John Samuel',
    role: 'Customer Support',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'WhatsApp', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Email', href: '#' },
    ],
  },
]

function initialsFromName(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

function placeholderAvatar(name: string) {
  const initials = initialsFromName(name)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2563eb" />
          <stop offset="100%" stop-color="#0ea5e9" />
        </linearGradient>
      </defs>
      <rect width="420" height="420" rx="54" fill="url(#g)" />
      <circle cx="210" cy="150" r="68" fill="rgba(255,255,255,0.9)" />
      <path d="M92 334c18-58 65-95 118-95s100 37 118 95" fill="rgba(255,255,255,0.9)" />
      <text x="210" y="390" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="40" font-weight="700">${initials}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

export default function Team() {
  return (
    <>
      <style>{`
        .team-section {
          padding: 80px 24px 88px;
          background:
            radial-gradient(circle at 10% 15%, rgba(37,99,235,0.12), transparent 30%),
            radial-gradient(circle at 90% 15%, rgba(14,165,233,0.12), transparent 24%),
            linear-gradient(180deg, #f8fbff 0%, #eef4ff 45%, #ffffff 100%);
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .team-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.38), rgba(255,255,255,0));
          pointer-events: none;
        }

        .team-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .team-top {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1.05fr);
          gap: 24px;
          align-items: center;
          margin-bottom: 26px;
        }

        .team-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.64);
          border: 1px solid rgba(255,255,255,0.8);
          backdrop-filter: blur(16px);
          box-shadow: 0 12px 28px rgba(148,163,184,0.16), inset 0 1px 0 rgba(255,255,255,0.95);
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 18px;
        }

        .team-heading {
          margin: 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.3rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #0f172a;
          max-width: 580px;
        }

        .team-sub {
          margin: 18px 0 0;
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.75;
          max-width: 580px;
        }

        .team-hero-card {
          border-radius: 32px;
          padding: 18px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.84);
          backdrop-filter: blur(18px);
          box-shadow:
            18px 18px 42px rgba(148,163,184,0.16),
            -12px -12px 24px rgba(255,255,255,0.76),
            inset 0 1px 0 rgba(255,255,255,0.96);
        }

        .team-hero-card img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
          border-radius: 24px;
        }

        .team-hero-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 16px 6px 4px;
        }

        .team-hero-meta strong {
          display: block;
          font-family: 'Sora', sans-serif;
          color: #0f172a;
        }

        .team-hero-meta span {
          color: #64748b;
          font-size: 0.95rem;
        }

        .team-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #0ea5e9);
          color: white;
          font-size: 0.85rem;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 12px 26px rgba(37,99,235,0.24);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .team-card {
          border-radius: 28px;
          padding: 18px 18px 20px;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(255,255,255,0.84);
          backdrop-filter: blur(18px);
          box-shadow:
            18px 18px 40px rgba(148,163,184,0.16),
            -12px -12px 24px rgba(255,255,255,0.76),
            inset 0 1px 0 rgba(255,255,255,0.96);
          text-align: left;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow:
            22px 22px 44px rgba(148,163,184,0.18),
            -14px -14px 26px rgba(255,255,255,0.8),
            inset 0 1px 0 rgba(255,255,255,0.96);
        }

        .team-avatar {
          width: 132px;
          height: 132px;
          border-radius: 999px;
          overflow: hidden;
          margin: 0 auto 18px;
          background: linear-gradient(135deg, #2563eb, #0ea5e9);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.24), 0 16px 28px rgba(37,99,235,0.22);
        }

        .team-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .team-card h4 {
          margin: 0 0 6px;
          font-family: 'Sora', sans-serif;
          font-size: 1.05rem;
          color: #0f172a;
          text-align: center;
        }

        .team-role {
          margin: 0 0 18px;
          color: #64748b;
          font-size: 0.92rem;
          text-align: center;
        }

        .team-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .team-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 14px;
          border-radius: 999px;
          background: rgba(248,250,252,0.96);
          color: #334155;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.86rem;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 10px 20px rgba(148,163,184,0.12);
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .team-social:hover {
          color: #2563eb;
          transform: translateY(-2px);
        }

        .team-cta {
          margin-top: 28px;
          display: flex;
          justify-content: center;
        }

        .team-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 26px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #0ea5e9);
          color: white;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 16px 34px rgba(37,99,235,0.26);
          transition: transform 0.2s ease;
        }

        .team-btn:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 1100px) {
          .team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 960px) {
          .team-top {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .team-section {
            padding: 72px 16px 80px;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .team-card,
          .team-hero-card {
            padding: 22px;
          }

          .team-avatar {
            width: 116px;
            height: 116px;
          }

          .team-hero-card img {
            height: 220px;
          }

          .team-btn {
            width: 100%;
          }

          .team-hero-meta {
            flex-direction: column;
            align-items: start;
          }
        }
      `}</style>

      <section className="team-section" id="team-section">
        <div className="team-shell">
          <div className="team-top">
            <div>
              <div className="team-tag">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '999px',
                    background: '#2563eb',
                    boxShadow: '0 0 0 6px rgba(37,99,235,0.12)',
                  }}
                />
                Core team
              </div>
              <h2 className="team-heading">Meet the team building premium campus commerce</h2>
              <p className="team-sub">
                A student-led team focused on making campus buying, selling, and delivery feel modern, trusted, and
                effortless.
              </p>
            </div>

            <div className="team-hero-card">
              <img src="/2149220645.jpg" alt="Blorbmart team collaboration" />
              <div className="team-hero-meta">
                <div>
                  <strong>Student founders and operators</strong>
                  <span>Building a stronger campus economy with product, operations, and support.</span>
                </div>
                <div className="team-badge">Modern. Reliable. Local.</div>
              </div>
            </div>
          </div>

          <div className="team-grid">
            {members.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-avatar">
                  <img src={member.image ?? placeholderAvatar(member.name)} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <div className="team-socials">
                  {member.socials.map((social) => (
                    <a key={social.label} href={social.href} className="team-social">
                      {social.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="team-cta">
            <a href="#" className="team-btn">Join Our Team</a>
          </div>
        </div>
      </section>
    </>
  )
}
