const riderFeatures = [
  {
    title: 'Flexible student schedule',
    description: 'Deliver before lectures, after classes, or whenever your timetable allows. You control your hours.',
    accent: '#2563eb',
  },
  {
    title: 'Earn per completed trip',
    description: 'Campus riders receive clear delivery tasks, transparent earnings, and fast payment for every completed order.',
    accent: '#0f766e',
  },
  {
    title: 'Short familiar routes',
    description: 'Deliver within UNIOSUN — Shasha, Nipco, Cele, URP Area, Highflyer. Routes you already know by heart.',
    accent: '#7c3aed',
  },
  {
    title: 'Backed by Campus Runs',
    description: 'As Blorbmart\'s official logistics partner, Campus Runs provides training, support, and consistent order flow.',
    accent: '#ea580c',
  },
]

const riderRequirements = [
  'Valid UNIOSUN student ID',
  'Smartphone with internet access',
  'Bike, scooter, or fast campus mobility',
  'Free time slots during the week',
  'Good knowledge of UNIOSUN & surrounding areas',
]

const deliveryAreas = [
  'Shasha', 'Nipco', 'URP Area', 'Cele',
  'Highflyer Area', 'Transformer Jct', 'Link Sensation', 'Shogbo',
]

export default function RiderSection() {
  return (
    <>
      <style>{`
        .rider-section {
          padding: 96px 24px;
          background:
            radial-gradient(circle at 12% 18%, rgba(6,182,212,0.1), transparent 28%),
            radial-gradient(circle at 88% 12%, rgba(37,99,235,0.1), transparent 26%),
            linear-gradient(180deg, #eaf4ff 0%, #f8fbff 55%, #ffffff 100%);
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }
        .rider-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px);
          background-size: 76px 76px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.2), transparent 95%);
          pointer-events: none;
        }
        .rider-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .rider-partner-banner {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 10px 24px rgba(148,163,184,0.16), inset 0 1px 0 rgba(255,255,255,0.98);
          margin-bottom: 18px;
        }
        .rider-partner-dot {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        .rider-partner-label {
          display: flex;
          flex-direction: column;
        }
        .rider-partner-label small {
          font-size: 10px;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .rider-partner-label strong {
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 800;
          color: #0f172a;
        }
        .rider-top {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
          gap: 26px;
          align-items: start;
          margin-bottom: 28px;
        }
        .rider-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.64);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 12px 28px rgba(148,163,184,0.16), inset 0 1px 0 rgba(255,255,255,0.95);
          color: #0891b2;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 18px;
        }
        .rider-title {
          margin: 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #0f172a;
          max-width: 720px;
        }
        .rider-copy {
          margin: 18px 0 0;
          color: #64748b;
          font-size: 1.05rem;
          line-height: 1.75;
          max-width: 680px;
        }
        .rider-visual,
        .rider-feature-card,
        .rider-story,
        .rider-requirements {
          border-radius: 30px;
          padding: 26px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow: 18px 18px 40px rgba(148,163,184,0.16), -12px -12px 24px rgba(255,255,255,0.76), inset 0 1px 0 rgba(255,255,255,0.96);
        }
        .rider-visual img {
          display: block;
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 22px;
        }
        .rider-visual-note {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 16px 6px 4px;
        }
        .rider-visual-note strong {
          display: block;
          font-family: 'Sora', sans-serif;
          color: #0f172a;
        }
        .rider-visual-note span {
          color: #64748b;
          font-size: 0.9rem;
        }
        .rider-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-size: 0.82rem;
          font-weight: 700;
          white-space: nowrap;
        }
        .rider-zones {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 14px 0 4px;
        }
        .rider-zone-chip {
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(8,145,178,0.08);
          border: 1px solid rgba(8,145,178,0.18);
          font-size: 12px;
          font-weight: 600;
          color: #0891b2;
        }
        .rider-feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 26px;
        }
        .rider-feature-icon {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 18px;
        }
        .rider-feature-card h3,
        .rider-story h3,
        .rider-requirements h3 {
          margin: 0 0 12px;
          font-family: 'Sora', sans-serif;
          color: #0f172a;
          font-size: 1.15rem;
        }
        .rider-feature-card p,
        .rider-story p {
          margin: 0;
          color: #64748b;
          line-height: 1.75;
        }
        .rider-bottom {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.88fr);
          gap: 22px;
        }
        .rider-requirement-list {
          display: grid;
          gap: 10px;
          margin-bottom: 22px;
        }
        .rider-requirement-item {
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 16px;
          padding: 12px 16px;
          background: rgba(248,250,252,0.95);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 8px 18px rgba(148,163,184,0.1);
          color: #334155;
          font-weight: 500;
          font-size: 0.93rem;
        }
        .rider-check {
          width: 24px;
          height: 24px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
        }
        .rider-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          padding-top: 6px;
        }
        .rider-cta-copy strong {
          display: block;
          font-family: 'Sora', sans-serif;
          color: #0f172a;
          font-size: 1.05rem;
          margin-bottom: 4px;
        }
        .rider-cta-copy span {
          display: block;
          color: #64748b;
          font-size: 0.9rem;
        }
        .rider-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 999px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          text-decoration: none;
          font-weight: 700;
          box-shadow: 0 14px 30px rgba(249,115,22,0.32);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .rider-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(249,115,22,0.42);
        }
        @media (max-width: 960px) {
          .rider-top,
          .rider-feature-grid,
          .rider-bottom {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .rider-section {
            padding: 80px 16px;
          }
          .rider-feature-card,
          .rider-story,
          .rider-requirements,
          .rider-visual {
            padding: 22px;
          }
          .rider-visual img {
            height: 240px;
          }
          .rider-button {
            width: 100%;
          }
          .rider-visual-note {
            flex-direction: column;
            align-items: start;
          }
        }
      `}</style>

      <section className="rider-section" id="riders" aria-labelledby="riders-heading">
        <div className="rider-shell">

          <div className="rider-top">
            <div>
              <div className="rider-partner-banner">
                <div className="rider-partner-dot">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18.5" cy="17.5" r="3.5"/>
                    <circle cx="5.5" cy="17.5" r="3.5"/>
                    <circle cx="15" cy="5" r="1"/>
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2"/>
                  </svg>
                </div>
                <div className="rider-partner-label">
                  <small>Official Logistics Partner</small>
                  <strong>Campus Runs</strong>
                </div>
              </div>

              <div className="rider-tag">
                <span style={{ width: 8, height: 8, borderRadius: '999px', background: '#0891b2', boxShadow: '0 0 0 6px rgba(8,145,178,0.12)', display: 'inline-block' }} />
                Riders
              </div>
              <h2 id="riders-heading" className="rider-title">Earn Money as a Campus Rider with Campus Runs</h2>
              <p className="rider-copy">
                Blorbmart has partnered with <strong>Campus Runs</strong> as our official logistics partner for UNIOSUN.
                If you want flexible earning around your class schedule — food deliveries, product drops, and more — this is your opportunity.
              </p>

              <div className="rider-zones">
                {deliveryAreas.map((area) => (
                  <span key={area} className="rider-zone-chip">{area}</span>
                ))}
              </div>
            </div>

            <div className="rider-visual">
              <img src="/49737.jpg" alt="Campus Runs rider making a Blorbmart delivery near UNIOSUN" loading="lazy" decoding="async" />
              <div className="rider-visual-note">
                <div>
                  <strong>Fast campus deliveries</strong>
                  <span>Short routes, clear drop-offs, flexible student hours.</span>
                </div>
                <div className="rider-pill">50+ Active Riders</div>
              </div>
            </div>
          </div>

          <div className="rider-feature-grid">
            {riderFeatures.map((feature) => (
              <article key={feature.title} className="rider-feature-card">
                <div className="rider-feature-icon" style={{ background: `linear-gradient(135deg, ${feature.accent}, ${feature.accent}cc)` }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="rider-bottom">
            <div className="rider-story">
              <h3>Why join the Blorbmart × Campus Runs network</h3>
              <p>
                Campus Runs brings the experience, infrastructure, and rider community. Blorbmart brings the orders.
                Together, we're building a campus delivery network that's fast, reliable, and genuinely profitable
                for student riders at UNIOSUN. Join hundreds of riders already earning across Shasha, Nipco, and beyond.
              </p>
            </div>

            <div className="rider-requirements">
              <h3>What you need to join</h3>
              <div className="rider-requirement-list">
                {riderRequirements.map((requirement) => (
                  <div key={requirement} className="rider-requirement-item">
                    <span className="rider-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{requirement}</span>
                  </div>
                ))}
              </div>

              <div className="rider-cta">
                <div className="rider-cta-copy">
                  <strong>Apply via Campus Runs</strong>
                  <span>Download the app to sign up as a rider.</span>
                </div>
                <a href="/#download" className="rider-button">
                  Become a Rider
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
