const riderFeatures = [
  {
    title: 'Flexible Schedule',
    description: 'Work when you want, around your classes and studies',
    accent: '#2563eb',
  },
  {
    title: 'Earn Per Delivery',
    description: 'Transparent pricing with instant payouts after each delivery',
    accent: '#0f766e',
  },
  {
    title: 'Campus Navigation',
    description: 'Deliver within familiar campus grounds, with no complex routes',
    accent: '#7c3aed',
  },
  {
    title: 'Community Impact',
    description: 'Help fellow students while building your reputation',
    accent: '#ea580c',
  },
]

const riderRequirements = [
  'Valid student ID',
  'Smartphone with data',
  'Bicycle or scooter',
  'Available 10+ hours/week',
  'Good knowledge of campus',
]

export default function RiderSection() {
  return (
    <>
      <style>{`
        .rider-section {
          padding: 96px 24px;
          background:
            radial-gradient(circle at 12% 18%, rgba(6,182,212,0.12), transparent 28%),
            radial-gradient(circle at 88% 12%, rgba(37,99,235,0.12), transparent 26%),
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
            linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px);
          background-size: 76px 76px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.28), transparent 95%);
          pointer-events: none;
        }

        .rider-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .rider-top {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
          gap: 26px;
          align-items: center;
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
          backdrop-filter: blur(16px);
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

        .rider-visual {
          border-radius: 32px;
          padding: 18px;
          background: rgba(255,255,255,0.58);
          border: 1px solid rgba(255,255,255,0.82);
          backdrop-filter: blur(18px);
          box-shadow:
            18px 18px 42px rgba(148,163,184,0.16),
            -12px -12px 24px rgba(255,255,255,0.76),
            inset 0 1px 0 rgba(255,255,255,0.96);
        }

        .rider-visual img {
          display: block;
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 24px;
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
          font-size: 0.95rem;
        }

        .rider-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #0891b2);
          color: white;
          font-size: 0.85rem;
          font-weight: 700;
          box-shadow: 0 12px 26px rgba(37,99,235,0.22);
          white-space: nowrap;
        }

        .rider-feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 26px;
        }

        .rider-feature-card,
        .rider-story,
        .rider-requirements {
          border-radius: 30px;
          padding: 26px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.82);
          backdrop-filter: blur(18px);
          box-shadow:
            18px 18px 40px rgba(148,163,184,0.16),
            -12px -12px 24px rgba(255,255,255,0.76),
            inset 0 1px 0 rgba(255,255,255,0.96);
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
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), 0 16px 28px rgba(15,23,42,0.15);
        }

        .rider-feature-card h3,
        .rider-story h3,
        .rider-requirements h3 {
          margin: 0 0 12px;
          font-family: 'Sora', sans-serif;
          color: #0f172a;
          font-size: 1.25rem;
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
          gap: 12px;
          margin-bottom: 22px;
        }

        .rider-requirement-item {
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 18px;
          padding: 14px 16px;
          background: rgba(248,250,252,0.95);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 10px 22px rgba(148,163,184,0.12);
          color: #334155;
          font-weight: 500;
        }

        .rider-check {
          width: 24px;
          height: 24px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: linear-gradient(135deg, #2563eb, #0891b2);
          color: white;
          box-shadow: 0 10px 20px rgba(37,99,235,0.22);
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
        }

        .rider-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #0891b2);
          color: white;
          text-decoration: none;
          font-weight: 700;
          box-shadow: 0 16px 34px rgba(37,99,235,0.26);
          transition: transform 0.2s ease;
        }

        .rider-button:hover {
          transform: translateY(-2px);
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
            height: 260px;
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

      <section className="rider-section" id="rider-section">
        <div className="rider-shell">
          <div className="rider-top">
            <div>
              <div className="rider-tag">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '999px',
                    background: '#0891b2',
                    boxShadow: '0 0 0 6px rgba(8,145,178,0.12)',
                  }}
                />
                Rider network
              </div>
              <h2 className="rider-title">Become a Campus Rider</h2>
              <p className="rider-copy">
                Join our team of campus riders and earn money on your schedule. Deliver packages within the university
                campus and help build the campus economy.
              </p>
            </div>

            <div className="rider-visual">
              <img src="/49737.jpg" alt="Campus rider delivering on campus" />
              <div className="rider-visual-note">
                <div>
                  <strong>Fast campus deliveries</strong>
                  <span>Shorter routes, familiar surroundings, smoother handoffs.</span>
                </div>
                <div className="rider-pill">50+ Active Riders</div>
              </div>
            </div>
          </div>

          <div className="rider-feature-grid">
            {riderFeatures.map((feature) => (
              <article key={feature.title} className="rider-feature-card">
                <div
                  className="rider-feature-icon"
                  style={{ background: `linear-gradient(135deg, ${feature.accent}, ${feature.accent}cc)` }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2v20M2 12h20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="rider-bottom">
            <div className="rider-story">
              <h3>Why Join as a Rider?</h3>
              <p>
                As a campus rider, you are the backbone of our delivery network. You will help students get what they
                need quickly while earning money on your own terms. It is ideal for students looking for flexible work
                that fits around their academic schedule.
              </p>
            </div>

            <div className="rider-requirements">
              <h3>Requirements</h3>
              <div className="rider-requirement-list">
                {riderRequirements.map((requirement) => (
                  <div key={requirement} className="rider-requirement-item">
                    <span className="rider-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12.5l4.2 4.2L19 7"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{requirement}</span>
                  </div>
                ))}
              </div>

              <div className="rider-cta">
                <div className="rider-cta-copy">
                  <strong>Become a Rider</strong>
                  <span>50+ Active Riders</span>
                  <span>Rider App Available</span>
                </div>
                <a href="#" className="rider-button">Apply as Rider</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
