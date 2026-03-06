type TeamMember = {
  name: string
  role: string
  image?: string
  socials: {
    label: string
    href: string
  }[]
}

function SocialIcon({ label }: { label: string }) {
  const sharedProps = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true as const,
  }

  switch (label) {
    case 'LinkedIn':
      return (
        <svg {...sharedProps}>
          <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56A1.97 1.97 0 1 0 3.2 4.94a1.97 1.97 0 0 0 3.96 0ZM20.8 13.02c0-3.42-1.82-5-4.26-5-1.96 0-2.84 1.08-3.34 1.84V8.5H9.82c.04.9 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.02 1.88 2.52V20H20.8v-6.98Z" fill="currentColor" />
        </svg>
      )
    case 'X':
      return (
        <svg {...sharedProps}>
          <path d="M18.9 3H22l-6.77 7.74L23 21h-6.1l-4.78-6.24L6.66 21H3.55l7.23-8.27L1 3h6.25l4.31 5.68L18.9 3Zm-1.07 16.16h1.72L6.32 4.75H4.48l13.35 14.41Z" fill="currentColor" />
        </svg>
      )
    case 'Instagram':
      return (
        <svg {...sharedProps}>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
        </svg>
      )
    case 'Facebook':
      return (
        <svg {...sharedProps}>
          <path d="M13.5 21v-7h2.35l.35-2.74H13.5V9.5c0-.8.22-1.34 1.37-1.34h1.46V5.72c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.6v2.04H8.38V14h2.35v7h2.77Z" fill="currentColor" />
        </svg>
      )
    case 'GitHub':
      return (
        <svg {...sharedProps}>
          <path d="M12 2C6.48 2 2 6.6 2 12.27c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.88 1.56 2.32 1.11 2.88.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.15-4.55-5.1 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.4.2 2.45.1 2.71.64.73 1.03 1.65 1.03 2.78 0 3.96-2.34 4.83-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.27C22 6.6 17.52 2 12 2Z" fill="currentColor" />
        </svg>
      )
    case 'WhatsApp':
      return (
        <svg {...sharedProps}>
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.07 0C5.62 0 .34 5.3.34 11.84c0 2.08.54 4.1 1.56 5.88L0 24l6.45-1.7a11.6 11.6 0 0 0 5.62 1.45h.01c6.45 0 11.73-5.3 11.73-11.84 0-3.16-1.22-6.14-3.29-8.43ZM12.08 21.7c-1.77 0-3.51-.48-5.02-1.38l-.36-.21-3.83 1 1.02-3.75-.24-.39a9.77 9.77 0 0 1-1.5-5.13c0-5.42 4.39-9.84 9.91-9.84 2.65 0 5.14 1.04 7 2.93a9.8 9.8 0 0 1 2.88 6.95c0 5.42-4.4 9.84-9.86 9.84Zm5.4-7.38c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.48-.87-.78-1.46-1.75-1.63-2.04-.17-.3-.02-.46.12-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.65-.92-2.26-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.28 5.09 4.6.71.31 1.27.49 1.7.62.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.08-.13-.28-.2-.58-.35Z" fill="currentColor" />
        </svg>
      )
    case 'Website':
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    case 'Email':
      return (
        <svg {...sharedProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
  }
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
      { label: 'Website', href: '#' },
      { label: 'Email', href: '#' },
    ],
  },
  {
    name: 'Badmus Qudus Ayomide',
    role: 'CTO & Co-Founder',
    image: '/badmus.jpg',
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/qudus-ayomide-badmus-13505a23b/' },
      { label: 'GitHub', href: 'https://github.com/BadmusQudusAyomide' },
      { label: 'X', href: 'https://x.com/Codestreamyy' },
      { label: 'Instagram', href: 'https://www.instagram.com/theunreacheablestar' },
      { label: 'Website', href: 'badmusqudusayomide.vercel.app' },
      { label: 'Email', href: 'badmusqudusayomid@gmail.com' },
    ],
  },
  {
    name: 'Olaniyan Alexander',
    role: 'COO',
    image: '/alex.jpg',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'X', href: '#' },
      { label: 'Website', href: '#' },
      { label: 'Email', href: '#' },
    ],
  },
  {
    name: 'John Samuel',
    role: 'Customer Support',
    image: '/john.jpg',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'WhatsApp', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Website', href: '#' },
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
          width: 42px;
          height: 42px;
          border-radius: 999px;
          background: rgba(248,250,252,0.96);
          color: #334155;
          text-decoration: none;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 10px 20px rgba(148,163,184,0.12);
          transition: color 0.2s ease, transform 0.2s ease, background 0.2s ease;
        }

        .team-social:hover {
          color: #2563eb;
          background: #eff6ff;
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
              <img src="/2149220645.jpg" alt="Blorbmart team collaboration" loading="lazy" decoding="async" />
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
                  <img src={member.image ?? placeholderAvatar(member.name)} alt={member.name} loading="lazy" decoding="async" />
                </div>
                <h4>{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <div className="team-socials">
                  {member.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="team-social"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <SocialIcon label={social.label} />
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
