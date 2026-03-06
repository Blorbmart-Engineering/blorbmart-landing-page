const sellerFeatures = [
  {
    title: 'List products for students',
    description: 'Sell fashion, gadgets, food, and everyday essentials to buyers already searching on campus.',
    accent: '#2563eb',
  },
  {
    title: 'Build trust with verification',
    description: 'Verified seller profiles and clear ratings help your campus store stand out.',
    accent: '#0f766e',
  },
  {
    title: 'Manage orders with less effort',
    description: 'Track inventory, review demand, and respond to buyers from one seller dashboard.',
    accent: '#7c3aed',
  },
  {
    title: 'Grow repeat campus sales',
    description: 'Use a dedicated marketplace built for students instead of relying only on social media posting.',
    accent: '#ea580c',
  },
]

const sellerBenefits = [
  'Zero setup costs',
  'Campus-wide reach',
  'Instant order alerts',
  'Repeat student buyers',
  'Fast rider delivery',
  'Simple store management',
]

export default function SellerSection() {
  return (
    <>
      <style>{`
        .seller-section {
          padding: 96px 24px 112px;
          background:
            radial-gradient(circle at 15% 20%, rgba(37,99,235,0.12), transparent 32%),
            radial-gradient(circle at 85% 10%, rgba(124,58,237,0.1), transparent 28%),
            linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%);
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }
        .seller-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0.1));
          pointer-events: none;
        }
        .seller-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .seller-top {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
          gap: 24px;
          align-items: start;
          margin-bottom: 34px;
        }
        .seller-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.64);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 12px 28px rgba(148,163,184,0.18), inset 0 1px 0 rgba(255,255,255,0.95);
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 18px;
        }
        .seller-title {
          margin: 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #0f172a;
          max-width: 720px;
        }
        .seller-copy {
          margin: 18px 0 0;
          color: #64748b;
          font-size: 1.05rem;
          line-height: 1.75;
          max-width: 680px;
        }
        .seller-stat-card,
        .seller-feature-card,
        .seller-story,
        .seller-benefits {
          border-radius: 28px;
          padding: 28px;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow: 18px 18px 42px rgba(148,163,184,0.16), -12px -12px 24px rgba(255,255,255,0.78), inset 0 1px 0 rgba(255,255,255,0.96);
        }
        .seller-stat-card span {
          display: block;
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #94a3b8;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .seller-stat-card strong {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 3rem;
          line-height: 1;
          color: #2563eb;
        }
        .seller-stat-card p,
        .seller-feature-card p,
        .seller-story p {
          margin: 10px 0 0;
          color: #475569;
          line-height: 1.65;
        }
        .seller-feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 28px;
        }
        .seller-feature-icon {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 18px;
        }
        .seller-feature-card h3,
        .seller-story h3,
        .seller-benefits h3 {
          margin: 0 0 10px;
          font-family: 'Sora', sans-serif;
          font-size: 1.1rem;
          color: #0f172a;
        }
        .seller-bottom {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
          gap: 22px;
        }
        .seller-benefit-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-bottom: 22px;
        }
        .seller-benefit-item {
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 18px;
          padding: 14px 16px;
          background: rgba(248,250,252,0.92);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 10px 22px rgba(148,163,184,0.12);
          color: #334155;
          font-weight: 500;
        }
        .seller-benefit-check {
          width: 24px;
          height: 24px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .seller-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          padding-top: 6px;
        }
        .seller-cta-copy strong {
          display: block;
          font-family: 'Sora', sans-serif;
          color: #0f172a;
          font-size: 1.05rem;
          margin-bottom: 4px;
        }
        .seller-cta-copy span {
          color: #64748b;
        }
        .seller-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 16px 34px rgba(37,99,235,0.28);
        }
        @media (max-width: 960px) {
          .seller-top,
          .seller-feature-grid,
          .seller-bottom,
          .seller-benefit-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .seller-section {
            padding: 80px 16px 96px;
          }
          .seller-stat-card,
          .seller-feature-card,
          .seller-story,
          .seller-benefits {
            padding: 22px;
          }
          .seller-cta-button {
            width: 100%;
          }
        }
      `}</style>

      <section className="seller-section" id="sellers" aria-labelledby="sellers-heading">
        <div className="seller-shell">
          <div className="seller-top">
            <div>
              <div className="seller-tag">
                <span style={{ width: 8, height: 8, borderRadius: '999px', background: '#2563eb', boxShadow: '0 0 0 6px rgba(37,99,235,0.12)' }} />
                Sellers
              </div>
              <h2 id="sellers-heading" className="seller-title">Sell products to students on campus</h2>
              <p className="seller-copy">
                Blorbmart gives student entrepreneurs and campus vendors a focused marketplace where university buyers
                already come to shop. Instead of chasing customers across multiple channels, sellers can list products,
                receive orders, and grow a trusted campus business in one place.
              </p>
            </div>

            <div className="seller-stat-card">
              <span>Campus seller growth</span>
              <strong>200+</strong>
              <p>Active sellers are already reaching students inside their university communities through Blorbmart.</p>
            </div>
          </div>

          <div className="seller-feature-grid">
            {sellerFeatures.map((feature) => (
              <article key={feature.title} className="seller-feature-card">
                <div className="seller-feature-icon" style={{ background: `linear-gradient(135deg, ${feature.accent}, ${feature.accent}cc)` }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="seller-bottom">
            <div className="seller-story">
              <h3>Why students sell on Blorbmart</h3>
              <p>
                This student marketplace helps campus sellers move stock faster, reach nearby buyers, and simplify
                delivery. Whether you sell thrift fashion, gadgets, food, or creative services, Blorbmart is built to
                support repeat purchases inside the university ecosystem.
              </p>
            </div>

            <div className="seller-benefits">
              <h3>Seller benefits</h3>
              <div className="seller-benefit-grid">
                {sellerBenefits.map((benefit) => (
                  <div key={benefit} className="seller-benefit-item">
                    <span className="seller-benefit-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="seller-cta">
                <div className="seller-cta-copy">
                  <strong>Open a seller account</strong>
                  <span>Start selling to students in minutes.</span>
                </div>
                <a href="/#download" className="seller-cta-button">Start Selling</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
