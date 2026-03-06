const personas = [
  {
    title: 'Buyers',
    label: 'Students',
    accent: '#2563eb',
    description: 'Shop from trusted campus sellers, compare prices quickly, and get what you need without leaving campus.',
    points: ['Browse verified stores', 'Order in minutes', 'Track deliveries live'],
  },
  {
    title: 'Sellers',
    label: 'Campus businesses',
    accent: '#7c3aed',
    description: 'Launch your store, list products fast, and sell directly to students already searching for your offers.',
    points: ['Create your storefront', 'Upload products easily', 'Manage orders and earnings'],
  },
  {
    title: 'Riders',
    label: 'Flexible earners',
    accent: '#06b6d4',
    description: 'Accept campus deliveries on your schedule and earn from short, predictable trips around school.',
    points: ['Pick up delivery tasks', 'Work when you want', 'Navigate campus fast'],
  },
]

const steps = [
  {
    number: '01',
    title: 'Sign Up',
    desc: 'Create your account and choose whether you want to buy, sell, or deliver.',
  },
  {
    number: '02',
    title: 'Explore or List',
    desc: 'Browse campus offers or publish your own products and services in a few taps.',
  },
  {
    number: '03',
    title: 'Track Progress',
    desc: 'Stay updated with live order status, payouts, and customer activity.',
  },
  {
    number: '04',
    title: 'Complete & Grow',
    desc: 'Receive your order, close sales, or finish deliveries and build your reputation.',
  },
]

export default function HowItWorks() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');

        .how-wrap {
          background:
            radial-gradient(circle at top left, rgba(37,99,235,0.08), transparent 30%),
            linear-gradient(180deg, #eef4ff 0%, #f8fbff 50%, #ffffff 100%);
          padding: 96px 24px;
          position: relative;
          overflow: hidden;
        }

        .how-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.3), transparent 95%);
          pointer-events: none;
        }

        .how-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          font-family: 'DM Sans', sans-serif;
        }

        .how-intro {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
          gap: 28px;
          align-items: end;
          margin-bottom: 42px;
        }

        .how-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.65);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 10px 28px rgba(148,163,184,0.18), inset 0 1px 0 rgba(255,255,255,0.95);
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 18px;
        }

        .how-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.3rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #0f172a;
          margin: 0;
          max-width: 680px;
        }

        .how-title span {
          color: #2563eb;
        }

        .how-sub {
          font-size: 1.05rem;
          line-height: 1.75;
          color: #64748b;
          margin: 18px 0 0;
          max-width: 620px;
        }

        .how-highlight {
          border-radius: 28px;
          padding: 24px;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(255,255,255,0.85);
          backdrop-filter: blur(18px);
          box-shadow:
            18px 18px 42px rgba(148,163,184,0.18),
            -12px -12px 24px rgba(255,255,255,0.75),
            inset 0 1px 0 rgba(255,255,255,0.95);
        }

        .how-highlight-label {
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #94a3b8;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .how-highlight strong {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 2.3rem;
          line-height: 1;
          color: #0f172a;
        }

        .how-highlight p {
          margin: 10px 0 0;
          color: #64748b;
          line-height: 1.65;
        }

        .persona-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-bottom: 38px;
        }

        .persona-card {
          padding: 26px;
          border-radius: 28px;
          background: rgba(255,255,255,0.68);
          border: 1px solid rgba(255,255,255,0.88);
          backdrop-filter: blur(18px);
          box-shadow:
            18px 18px 40px rgba(148,163,184,0.16),
            -12px -12px 24px rgba(255,255,255,0.78),
            inset 0 1px 0 rgba(255,255,255,0.98);
          text-align: left;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .persona-card:hover {
          transform: translateY(-6px);
          box-shadow:
            24px 24px 48px rgba(148,163,184,0.18),
            -14px -14px 26px rgba(255,255,255,0.82),
            inset 0 1px 0 rgba(255,255,255,0.98);
        }

        .persona-icon {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          color: white;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), 0 16px 28px rgba(15,23,42,0.16);
        }

        .persona-meta {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #94a3b8;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .persona-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.25rem;
          color: #0f172a;
          margin: 0 0 10px;
        }

        .persona-desc {
          color: #64748b;
          line-height: 1.7;
          margin: 0 0 18px;
        }

        .persona-points {
          display: grid;
          gap: 10px;
        }

        .persona-point {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #334155;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .persona-point-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          flex-shrink: 0;
          box-shadow: 0 0 0 6px rgba(255,255,255,0.7);
        }

        .process-panel {
          border-radius: 32px;
          padding: 32px;
          background: linear-gradient(135deg, rgba(15,23,42,0.96), rgba(30,41,59,0.94));
          color: white;
          box-shadow: 0 30px 70px rgba(15,23,42,0.2);
        }

        .process-top {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
        }

        .process-kicker {
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(191,219,254,0.75);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .process-heading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin: 0;
          line-height: 1.15;
        }

        .process-copy {
          max-width: 420px;
          color: rgba(226,232,240,0.7);
          line-height: 1.7;
          margin: 0;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .process-step {
          padding: 22px;
          border-radius: 22px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          min-height: 180px;
        }

        .process-step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: rgba(96,165,250,0.18);
          color: #bfdbfe;
          font-family: 'Sora', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .process-step h4 {
          margin: 0 0 8px;
          font-family: 'Sora', sans-serif;
          font-size: 1rem;
          color: white;
        }

        .process-step p {
          margin: 0;
          color: rgba(226,232,240,0.72);
          line-height: 1.6;
          font-size: 0.92rem;
        }

        .how-actions {
          display: flex;
          gap: 14px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .how-btn-primary,
        .how-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 999px;
          padding: 14px 24px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }

        .how-btn-primary {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          box-shadow: 0 14px 32px rgba(37,99,235,0.28);
        }

        .how-btn-secondary {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          color: white;
        }

        .how-btn-primary:hover,
        .how-btn-secondary:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 960px) {
          .how-intro,
          .persona-grid,
          .process-steps {
            grid-template-columns: 1fr;
          }

          .process-top {
            flex-direction: column;
            align-items: start;
          }
        }

        @media (max-width: 640px) {
          .how-wrap {
            padding: 80px 16px;
          }

          .how-highlight,
          .persona-card,
          .process-panel {
            padding: 22px;
          }

          .how-actions {
            flex-direction: column;
          }

          .how-btn-primary,
          .how-btn-secondary {
            width: 100%;
          }
        }
      `}</style>

      <section className="how-wrap" id="how-it-works">
        <div className="how-shell">
          <div className="how-intro">
            <div>
              <div className="how-badge">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '999px',
                    background: '#2563eb',
                    boxShadow: '0 0 0 6px rgba(37,99,235,0.12)',
                  }}
                />
                Better campus flow
              </div>
              <h2 className="how-title">
                How <span>Blorbmart</span> works for every part of campus life
              </h2>
              <p className="how-sub">
                The experience is designed to reduce friction at every step, from discovery and checkout to delivery,
                payouts, and repeat orders.
              </p>
            </div>

            <div className="how-highlight">
              <div className="how-highlight-label">User experience</div>
              <strong>Fast, clear, trusted</strong>
              <p>
                Buyers find items quickly, sellers manage their stores with less effort, and riders move with live
                order context.
              </p>
            </div>
          </div>

          <div className="persona-grid">
            {personas.map((persona) => (
              <article key={persona.title} className="persona-card">
                <div
                  className="persona-icon"
                  style={{ background: `linear-gradient(135deg, ${persona.accent}, ${persona.accent}cc)` }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="persona-meta">{persona.label}</div>
                <h3 className="persona-title">{persona.title}</h3>
                <p className="persona-desc">{persona.description}</p>
                <div className="persona-points">
                  {persona.points.map((point) => (
                    <div key={point} className="persona-point">
                      <span className="persona-point-dot" style={{ background: persona.accent }} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="process-panel">
            <div className="process-top">
              <div>
                <div className="process-kicker">Simple process</div>
                <h3 className="process-heading">A smoother path from first tap to completed order</h3>
              </div>
              <p className="process-copy">
                Every step is visible and lightweight, so people always know what to do next and where their order or
                earnings stand.
              </p>
            </div>

            <div className="process-steps">
              {steps.map((step) => (
                <div key={step.number} className="process-step">
                  <div className="process-step-number">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="how-actions">
              <a href="#" className="how-btn-primary">Download App</a>
              <a href="#seller-section" className="how-btn-secondary">Become a Seller</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
