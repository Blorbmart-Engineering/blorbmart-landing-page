const commissionData = [
  { category: 'Electronics', rate: 15, tier: 'High', rationale: 'High ticket, high margin — vendors can absorb it', color: '#6366f1', bg: 'rgba(99,102,241,0.12)', icon: '📱' },
  { category: 'Furniture', rate: 12, tier: 'High', rationale: 'Infrequent but high-value orders', color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)', icon: '🛋️' },
  { category: 'Fashion', rate: 12, tier: 'High', rationale: 'Strong campus demand, healthy margins', color: '#ec4899', bg: 'rgba(236,72,153,0.12)', icon: '👗' },
  { category: 'Beauty', rate: 12, tier: 'High', rationale: 'Repeat purchases, good vendor margins', color: '#f43f5e', bg: 'rgba(244,63,94,0.12)', icon: '💄' },
  { category: 'Accessories', rate: 10, tier: 'Mid', rationale: 'Mid-range prices, frequent student buys', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', icon: '👜' },
  { category: 'Health', rate: 10, tier: 'Mid', rationale: 'Regulated category — keep competitive', color: '#10b981', bg: 'rgba(16,185,129,0.12)', icon: '💊' },
  { category: 'Stationery', rate: 8, tier: 'Mid', rationale: 'Low-cost items — high volume compensates', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)', icon: '📚' },
  { category: 'Food & Drinks', rate: 7, tier: 'Low', rationale: 'Thin margins, high frequency — protect vendors', color: '#f97316', bg: 'rgba(249,115,22,0.12)', icon: '🍛' },
]

export default function CommissionSection() {
  return (
    <>
      <style>{`
        .comm-section {
          padding: 100px 24px 112px;
          background: linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%);
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }
        .comm-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 10% 20%, rgba(37,99,235,0.08), transparent 35%),
            radial-gradient(circle at 90% 80%, rgba(124,58,237,0.07), transparent 30%);
          pointer-events: none;
        }
        .comm-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .comm-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(37,99,235,0.1);
          border: 1px solid rgba(37,99,235,0.18);
          color: #2563eb;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 18px;
          font-family: 'Sora', sans-serif;
        }
        .comm-title {
          margin: 0 0 14px;
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.06;
          letter-spacing: -0.03em;
          color: #0f172a;
        }
        .comm-sub {
          margin: 0 0 52px;
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.75;
          max-width: 640px;
        }
        .comm-highlights {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 48px;
        }
        .comm-highlight-card {
          border-radius: 26px;
          padding: 28px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.85);
          box-shadow: 16px 16px 40px rgba(148,163,184,0.16), -10px -10px 22px rgba(255,255,255,0.8), inset 0 1px 0 rgba(255,255,255,0.98);
          text-align: center;
        }
        .comm-highlight-card .rate {
          font-family: 'Sora', sans-serif;
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 6px;
        }
        .comm-highlight-card .rate-label {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 10px;
        }
        .comm-highlight-card .rate-note {
          font-size: 12px;
          color: #94a3b8;
          line-height: 1.5;
        }
        .comm-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 48px;
        }
        .comm-card {
          border-radius: 22px;
          padding: 22px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.85);
          box-shadow: 14px 14px 36px rgba(148,163,184,0.14), -8px -8px 18px rgba(255,255,255,0.78), inset 0 1px 0 rgba(255,255,255,0.98);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .comm-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 56px rgba(148,163,184,0.22);
        }
        .comm-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .comm-card-icon {
          font-size: 24px;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .comm-card-rate {
          font-family: 'Sora', sans-serif;
          font-size: 2rem;
          font-weight: 900;
          line-height: 1;
        }
        .comm-card-name {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: #0f172a;
          margin-bottom: 5px;
        }
        .comm-card-rationale {
          font-size: 12px;
          color: #64748b;
          line-height: 1.5;
        }
        .comm-card-tier {
          display: inline-block;
          margin-top: 12px;
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .comm-projection {
          border-radius: 32px;
          padding: 40px;
          background: linear-gradient(135deg, #07101f, #0d1a2d);
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 32px 64px rgba(7,16,31,0.4);
        }
        .comm-projection-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          margin: 0 0 6px;
        }
        .comm-projection-sub {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
          margin: 0 0 32px;
        }
        .comm-proj-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        .comm-proj-stat {
          border-radius: 20px;
          padding: 22px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          text-align: center;
        }
        .comm-proj-stat strong {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          margin-bottom: 4px;
        }
        .comm-proj-stat span {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .comm-proj-note {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 22px;
        }
        .comm-proj-note strong {
          color: rgba(255,255,255,0.75);
        }
        @media (max-width: 1100px) {
          .comm-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 768px) {
          .comm-highlights,
          .comm-proj-stats {
            grid-template-columns: 1fr;
          }
          .comm-projection {
            padding: 28px 20px;
          }
        }
        @media (max-width: 640px) {
          .comm-section {
            padding: 80px 16px 96px;
          }
          .comm-grid {
            grid-template-columns: 1fr;
          }
          .comm-card {
            padding: 18px;
          }
        }
      `}</style>

      <section className="comm-section" id="commission" aria-labelledby="comm-heading">
        <div className="comm-shell">
          <div className="comm-tag">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563eb', display: 'inline-block' }} />
            Transparent Pricing
          </div>
          <h2 id="comm-heading" className="comm-title">Our Commission Structure</h2>
          <p className="comm-sub">
            We believe in radical transparency. Here's exactly what Blorbmart charges on each product category — no hidden fees,
            no surprises. We keep it lowest for Food & Drinks because we know your margins matter.
          </p>

          <div className="comm-highlights">
            <div className="comm-highlight-card">
              <div className="rate" style={{ color: '#10b981' }}>7%</div>
              <div className="rate-label">Lowest Rate — Food & Drinks</div>
              <div className="rate-note">Designed to protect vendor margins on high-frequency, thin-margin food orders</div>
            </div>
            <div className="comm-highlight-card">
              <div className="rate" style={{ color: '#2563eb' }}>11%</div>
              <div className="rate-label">Platform Average (all categories)</div>
              <div className="rate-note">Blended rate across all 8 product categories on the platform</div>
            </div>
            <div className="comm-highlight-card">
              <div className="rate" style={{ color: '#6366f1' }}>15%</div>
              <div className="rate-label">Highest Rate — Electronics</div>
              <div className="rate-note">High-ticket items with healthy vendor margins can support the platform rate</div>
            </div>
          </div>

          <div className="comm-grid">
            {commissionData.map((item) => (
              <article key={item.category} className="comm-card">
                <div className="comm-card-top">
                  <div className="comm-card-icon" style={{ background: item.bg }}>
                    <span>{item.icon}</span>
                  </div>
                  <div className="comm-card-rate" style={{ color: item.color }}>{item.rate}%</div>
                </div>
                <div className="comm-card-name">{item.category}</div>
                <div className="comm-card-rationale">{item.rationale}</div>
                <span
                  className="comm-card-tier"
                  style={{
                    background: item.bg,
                    color: item.color,
                    border: `1px solid ${item.color}33`,
                  }}
                >
                  {item.tier} Tier
                </span>
              </article>
            ))}
          </div>

          <div className="comm-projection">
            <h3 className="comm-projection-title">Month 1 Revenue Snapshot</h3>
            <p className="comm-projection-sub">Conservative projection based on 500 total orders at launch — distributed across all categories</p>
            <div className="comm-proj-stats">
              <div className="comm-proj-stat">
                <strong style={{ color: '#60a5fa' }}>₦4,005,000</strong>
                <span>Total GMV (Month 1)</span>
              </div>
              <div className="comm-proj-stat">
                <strong style={{ color: '#34d399' }}>₦488,100</strong>
                <span>Platform Revenue</span>
              </div>
              <div className="comm-proj-stat">
                <strong style={{ color: '#fbbf24' }}>12.2%</strong>
                <span>Effective Rate</span>
              </div>
            </div>
            <p className="comm-proj-note">
              <strong>Note:</strong> These are conservative estimates for a cold-start month.
              Post-launch platforms of this type typically see 30–50% month-on-month GMV growth.
              Electronics and Furniture, though low in volume, contribute disproportionately to revenue.
              Food & Drinks at 7% is reviewed at Month 3 if GMV from this category exceeds ₦500,000.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
