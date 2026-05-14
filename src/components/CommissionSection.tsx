type CommCategory = {
  category: string
  rate: number
  tier: string
  rationale: string
  color: string
  bg: string
  icon: React.ReactNode
}

const commissionData: CommCategory[] = [
  {
    category: 'Electronics', rate: 15, tier: 'High',
    rationale: 'High ticket, high margin — vendors can absorb it',
    color: '#6366f1', bg: 'rgba(99,102,241,0.1)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  },
  {
    category: 'Furniture', rate: 12, tier: 'High',
    rationale: 'Infrequent but high-value orders',
    color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  },
  {
    category: 'Fashion', rate: 12, tier: 'High',
    rationale: 'Strong campus demand, healthy margins',
    color: '#ec4899', bg: 'rgba(236,72,153,0.1)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>,
  },
  {
    category: 'Beauty', rate: 12, tier: 'High',
    rationale: 'Repeat purchases, good vendor margins',
    color: '#f43f5e', bg: 'rgba(244,63,94,0.1)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>,
  },
  {
    category: 'Accessories', rate: 10, tier: 'Mid',
    rationale: 'Mid-range prices, frequent student buys',
    color: '#f59e0b', bg: 'rgba(245,158,11,0.1)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" /></svg>,
  },
  {
    category: 'Health', rate: 10, tier: 'Mid',
    rationale: 'Regulated category — keep competitive',
    color: '#10b981', bg: 'rgba(16,185,129,0.1)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  },
  {
    category: 'Stationery', rate: 8, tier: 'Mid',
    rationale: 'Low-cost items — high volume compensates',
    color: '#3b82f6', bg: 'rgba(59,130,246,0.1)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
  },
  {
    category: 'Food & Drinks', rate: 7, tier: 'Low',
    rationale: 'Thin margins, high frequency — protect vendors',
    color: '#f97316', bg: 'rgba(249,115,22,0.1)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>,
  },
]

export default function CommissionSection() {
  return (
    <>
      <style>{`
        .comm-section {
          padding: 112px 24px 120px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .comm-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0 30%, #e2e8f0 70%, transparent);
        }
        .comm-shell {
          max-width: 1200px;
          margin: 0 auto;
        }
        .comm-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 32px;
          margin-bottom: 56px;
        }
        .comm-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 8px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          font-size: 11px;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 18px;
          font-family: 'Sora', sans-serif;
        }
        .comm-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.04;
          letter-spacing: -0.04em;
          color: #0f172a;
          margin: 0;
        }
        .comm-sub {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.75;
          margin: 16px 0 0;
          max-width: 560px;
        }
        .comm-highlights {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-shrink: 0;
        }
        .comm-hl {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 20px;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          min-width: 240px;
        }
        .comm-hl-rate {
          font-family: 'Sora', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          line-height: 1;
          min-width: 52px;
        }
        .comm-hl-info strong {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1px;
        }
        .comm-hl-info span {
          font-size: 11.5px;
          color: #94a3b8;
        }
        .comm-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }
        .comm-card {
          border-radius: 18px;
          padding: 22px 20px;
          background: #ffffff;
          border: 1px solid #f1f5f9;
          box-shadow: 0 2px 12px rgba(15,23,42,0.05);
          transition: transform 0.22s cubic-bezier(0.22,1,0.36,1), box-shadow 0.22s, border-color 0.22s;
          display: flex;
          flex-direction: column;
        }
        .comm-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(15,23,42,0.1);
          border-color: #e2e8f0;
        }
        .comm-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .comm-card-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .comm-card-icon svg {
          width: 18px;
          height: 18px;
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
          font-size: 0.9rem;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .comm-card-rationale {
          font-size: 12px;
          color: #94a3b8;
          line-height: 1.55;
          flex: 1;
        }
        .comm-card-tier {
          display: inline-block;
          margin-top: 14px;
          padding: 3px 9px;
          border-radius: 6px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-family: 'Sora', sans-serif;
          align-self: flex-start;
        }
        @media (max-width: 1100px) {
          .comm-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .comm-header { grid-template-columns: 1fr; }
          .comm-highlights { flex-direction: row; flex-wrap: wrap; }
          .comm-hl { min-width: 0; flex: 1; min-width: 200px; }
        }
        @media (max-width: 640px) {
          .comm-section { padding: 80px 16px 96px; }
          .comm-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .comm-highlights { flex-direction: column; }
        }
      `}</style>

      <section id="commission" className="comm-section" aria-labelledby="comm-heading">
        <div className="comm-shell">

          <div className="comm-header">
            <div>
              <div className="comm-label">Transparent Pricing</div>
              <h2 id="comm-heading" className="comm-title">
                Commission<br />Structure
              </h2>
              <p className="comm-sub">
                No hidden fees. No surprises. Every vendor sees exactly what Blorbmart charges per category —
                from 7% for food to 15% for electronics.
              </p>
            </div>

            <div className="comm-highlights">
              <div className="comm-hl">
                <span className="comm-hl-rate" style={{ color: '#10b981' }}>7%</span>
                <div className="comm-hl-info">
                  <strong>Lowest Rate</strong>
                  <span>Food &amp; Drinks</span>
                </div>
              </div>
              <div className="comm-hl">
                <span className="comm-hl-rate" style={{ color: '#2563eb' }}>11%</span>
                <div className="comm-hl-info">
                  <strong>Platform Average</strong>
                  <span>Across all categories</span>
                </div>
              </div>
              <div className="comm-hl">
                <span className="comm-hl-rate" style={{ color: '#6366f1' }}>15%</span>
                <div className="comm-hl-info">
                  <strong>Highest Rate</strong>
                  <span>Electronics</span>
                </div>
              </div>
            </div>
          </div>

          <div className="comm-grid">
            {commissionData.map((item) => (
              <article key={item.category} className="comm-card">
                <div className="comm-card-top">
                  <div className="comm-card-icon" style={{ background: item.bg, color: item.color }}>
                    {item.icon}
                  </div>
                  <span className="comm-card-rate" style={{ color: item.color }}>{item.rate}%</span>
                </div>
                <div className="comm-card-name">{item.category}</div>
                <div className="comm-card-rationale">{item.rationale}</div>
                <span
                  className="comm-card-tier"
                  style={{ background: item.bg, color: item.color }}
                >
                  {item.tier} Tier
                </span>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
