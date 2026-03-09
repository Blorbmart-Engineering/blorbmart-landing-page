import TeamMemberCard, { type TeamMemberCardProps } from './TeamMemberCard'

const members: TeamMemberCardProps[] = [
  {
    name: 'Oluwabiyi Samuel',
    role: 'CEO & Co-Founder',
    image: '/samuel.jpg',
    bio: 'Samuel leads Blorbmart strategy and campus growth, focusing on how students buy and sell items more easily within their university.',
    portfolio: 'https://blorbmart.com.ng/#team',
    github: 'https://github.com/tomisin68',
    linkedin: 'https://www.linkedin.com/company/blorbmart',
    twitter: 'https://x.com/OuwabiyiSamuel',
  },
  {
    name: 'Badmus Qudus Ayomide',
    role: 'CTO & Co-Founder',
    image: '/badmus.jpg',
    bio: 'Qudus architects the Blorbmart product experience, building a campus ecommerce platform that stays fast, accessible, and indexable.',
    portfolio: 'https://badmusqudusayomide.vercel.app',
    github: 'https://github.com/BadmusQudusAyomide',
    linkedin: 'https://www.linkedin.com/in/qudus-ayomide-badmus-13505a23b/',
    twitter: 'https://x.com/Codestreamyy',
  },
  {
    name: 'Olaniyan Alexander',
    role: 'COO',
    image: '/alex.jpg',
    bio: 'Alexander oversees marketplace operations, helping sellers, riders, and student buyers move smoothly through the campus order flow.',
    portfolio: 'https://blorbmart.com.ng/#team',
    github: 'https://github.com/Blorbmart',
    linkedin: 'https://www.linkedin.com/company/blorbmart',
    twitter: 'https://x.com/blorbmart',
  },
  {
    name: 'John Samuel',
    role: 'Customer Support Lead',
    image: '/john.jpg',
    bio: 'John supports students, sellers, and riders across the marketplace so campus transactions feel reliable and well guided.',
    portfolio: 'https://blorbmart.com.ng/#team',
    github: 'https://github.com/Blorbmart',
    linkedin: 'https://www.linkedin.com/company/blorbmart',
    twitter: 'https://x.com/blorbmart',
  },
]

export function teamStructuredData(siteUrl: string) {
  return members.map((member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#${member.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: member.name,
    jobTitle: member.role,
    url: member.portfolio,
    image: `${siteUrl}${member.image}`,
    description: member.bio,
    worksFor: {
      '@type': 'Organization',
      name: 'Blorbmart',
      url: siteUrl,
    },
    sameAs: [member.github, member.linkedin, member.twitter].filter(Boolean),
  }))
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
          max-width: 620px;
        }
        .team-hero-card {
          border-radius: 32px;
          padding: 18px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.84);
          box-shadow: 18px 18px 42px rgba(148,163,184,0.16), -12px -12px 24px rgba(255,255,255,0.76), inset 0 1px 0 rgba(255,255,255,0.96);
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
          box-shadow: 18px 18px 40px rgba(148,163,184,0.16), -12px -12px 24px rgba(255,255,255,0.76), inset 0 1px 0 rgba(255,255,255,0.96);
          text-align: left;
        }
        .team-avatar {
          width: 132px;
          height: 132px;
          border-radius: 999px;
          overflow: hidden;
          margin: 0 auto 18px;
          background: linear-gradient(135deg, #2563eb, #0ea5e9);
        }
        .team-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .team-card h3 {
          margin: 0 0 6px;
          font-family: 'Sora', sans-serif;
          font-size: 1.05rem;
          color: #0f172a;
          text-align: center;
        }
        .team-role {
          margin: 0 0 12px;
          color: #64748b;
          font-size: 0.92rem;
          text-align: center;
        }
        .team-bio {
          margin: 0 0 18px;
          color: #64748b;
          line-height: 1.7;
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

      <section className="team-section" id="team" aria-labelledby="team-heading">
        <div className="team-shell">
          <div className="team-top">
            <div>
              <div className="team-tag">
                <span style={{ width: 8, height: 8, borderRadius: '999px', background: '#2563eb', boxShadow: '0 0 0 6px rgba(37,99,235,0.12)' }} />
                Team
              </div>
              <h2 id="team-heading" className="team-heading">Meet the team building Blorbmart for campus commerce</h2>
              <p className="team-sub">
                Blorbmart is built by a student-focused team working across product, engineering, operations, and
                support to improve how universities buy, sell, and deliver on campus.
              </p>
            </div>

            <div className="team-hero-card">
              <img src="/2149220645.jpg" alt="The Blorbmart team collaborating on the student marketplace platform" loading="lazy" decoding="async" />
              <div className="team-hero-meta">
                <div>
                  <strong>Student founders and operators</strong>
                  <span>Building a stronger campus marketplace with product, logistics, and support expertise.</span>
                </div>
                <div className="team-badge">Built for students</div>
              </div>
            </div>
          </div>

          <div className="team-grid">
            {members.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>

          <div className="team-cta">
            <a href="/#download" className="team-btn">Join the Blorbmart community</a>
          </div>
        </div>
      </section>
    </>
  )
}
