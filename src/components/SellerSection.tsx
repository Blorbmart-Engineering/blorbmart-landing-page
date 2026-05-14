const vendorCategories = [
  { icon: '👗', label: 'Fashion', color: '#ec4899', bg: 'rgba(236,72,153,0.1)' },
  { icon: '💄', label: 'Beauty', color: '#f43f5e', bg: 'rgba(244,63,94,0.1)' },
  { icon: '🌹', label: 'Perfumes', color: '#a855f7', bg: 'rgba(168,85,247,0.1)' },
  { icon: '📚', label: 'Stationery', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
  { icon: '📱', label: 'Electronics', color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
  { icon: '👜', label: 'Accessories', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { icon: '💊', label: 'Health', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { icon: '🛋️', label: 'Furniture', color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
]

const sellerFeatures = [
  {
    title: 'List your products in minutes',
    description: 'Add photos, set your price, and go live. Students across UNIOSUN can start finding your products immediately.',
    accent: '#2563eb',
  },
  {
    title: 'Build campus trust fast',
    description: 'Verified seller profiles, real student reviews, and clear ratings help your store stand out from social media posts.',
    accent: '#0f766e',
  },
  {
    title: 'Manage orders from one place',
    description: 'Track inventory, review incoming orders, and respond to buyers — all from your Blorbmart seller dashboard.',
    accent: '#7c3aed',
  },
  {
    title: 'Grow repeat sales automatically',
    description: 'Buyers who love your products can follow your store. You build a loyal campus customer base without extra effort.',
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
  'Transparent commissions',
  'Dispute resolution support',
]

export default function SellerSection() {
  return (
    <>
      <style>{`
        .seller-section {
          padding: 96px 24px 112px;
          background:
            radial-gradient(circle at 15% 20%, rgba(37,99,235,0.1), transparent 32%),
            radial-gradient(circle at 85% 10%, rgba(124,58,237,0.08), transparent 28%),
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
        .seller-cat-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          margin-top: 28px;
        }
        .seller-cat-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 14px;
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 6px 16px rgba(148,163,184,0.12);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .seller-cat-chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(148,163,184,0.18);
        }
        .seller-cat-icon {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
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
        .seller-comm-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          font-size: 13px;
          font-weight: 700;
          color: #2563eb;
          text-decoration: none;
        }
        .seller-comm-link:hover {
          text-decoration: underline;
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
          gap: 10px;
          margin-bottom: 22px;
        }
        .seller-benefit-item {
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 16px;
          padding: 12px 14px;
          background: rgba(248,250,252,0.92);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 8px 18px rgba(148,163,184,0.1);
          color: #334155;
          font-weight: 500;
          font-size: 0.9rem;
        }
        .seller-benefit-check {
          width: 22px;
          height: 22px;
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
          font-size: 0.9rem;
        }
        .seller-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 14px 30px rgba(37,99,235,0.28);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .seller-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 38px rgba(37,99,235,0.38);
        }
        @media (max-width: 960px) {
          .seller-top,
          .seller-feature-grid,
          .seller-bottom,
          .seller-benefit-grid,
          .seller-cat-grid {
            grid-template-columns: 1fr;
          }
          .seller-cat-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
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
          .seller-cat-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>

      <section className="seller-section" id="sellers" aria-labelledby="sellers-heading">
        <div className="seller-shell">
          <div className="seller-top">
            <div>
              <div className="seller-tag">
                <span style={{ width: 8, height: 8, borderRadius: '999px', background: '#2563eb', boxShadow: '0 0 0 6px rgba(37,99,235,0.12)', display: 'inline-block' }} />
                Vendors
              </div>
              <h2 id="sellers-heading" className="seller-title">Sell Your Products to Students Across Campus</h2>
              <p className="seller-copy">
                Blorbmart is the campus marketplace where UNIOSUN students already come to shop.
                Whether you sell beauty products, perfumes, stationery, fashion, or gadgets — your next customer is already on the platform.
                No need to spam WhatsApp groups or Instagram stories. Just list and sell.
              </p>

              <div className="seller-cat-grid">
                {vendorCategories.map((cat) => (
                  <div key={cat.label} className="seller-cat-chip">
                    <div className="seller-cat-icon" style={{ background: cat.bg }}>
                      <span>{cat.icon}</span>
                    </div>
                    <span style={{ color: '#334155' }}>{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="seller-stat-card">
              <span>Active campus vendors</span>
              <strong>200+</strong>
              <p>Sellers are already reaching buyers inside UNIOSUN through Blorbmart — from beauty vendors to tech resellers.</p>
              <a href="#commission" className="seller-comm-link">
                View our commission rates
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
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
                Blorbmart replaces the chaos of managing buyers across WhatsApp, Instagram, and Snapchat.
                One platform, verified buyers, real ratings, and Campus Runs for delivery.
                Whether you're selling course materials, skincare, or custom fashion — this is campus commerce done right.
              </p>
            </div>

            <div className="seller-benefits">
              <h3>What you get as a seller</h3>
              <div className="seller-benefit-grid">
                {sellerBenefits.map((benefit) => (
                  <div key={benefit} className="seller-benefit-item">
                    <span className="seller-benefit-check">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="seller-cta">
                <div className="seller-cta-copy">
                  <strong>Open your vendor account</strong>
                  <span>Start selling to students in minutes.</span>
                </div>
                <a href="/#download" className="seller-cta-button">
                  Start Selling
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
