const restaurants = [
  {
    name: 'Mijas Pasta',
    cuisine: 'Italian · Continental Fusion',
    location: 'UNIOSUN Downtown',
    time: '15–25 min',
    minOrder: '₦1,500',
    rating: '4.9',
    reviews: '240',
    specialties: ['Pasta', 'Stir-fry', 'Continental', 'Grills'],
    headerGradient: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)',
    btnGradient: 'linear-gradient(135deg, #f97316, #ea580c)',
    accentColor: '#f97316',
    badge: 'Most Popular',
    timeColor: '#fb923c',
  },
  {
    name: 'Tasty Garnished Kitchen',
    cuisine: 'Nigerian · Home Cooking',
    location: 'UNIOSUN Downtown',
    time: '20–30 min',
    minOrder: '₦1,200',
    rating: '4.8',
    reviews: '182',
    specialties: ['Jollof Rice', 'Fried Rice', 'Egusi Soup', 'Stew'],
    headerGradient: 'linear-gradient(135deg, #16a34a 0%, #14532d 100%)',
    btnGradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    accentColor: '#22c55e',
    badge: 'Recommended',
    timeColor: '#4ade80',
  },
]

const deliveryZones = [
  'Shasha', 'Link Sensation', 'Transformer Jct',
  'Shogbo', 'Nipco', 'URP Area', 'Cele', 'Highflyer Area',
  'UNIOSUN Gate', 'Hostel Area',
]

function UtilsIcon({ type }: { type: 'pin' | 'clock' | 'tag' }) {
  if (type === 'pin') return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
  if (type === 'clock') return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}

function StarRating() {
  return (
    <svg width="70" height="14" viewBox="0 0 70 14" fill="none">
      {[0, 14, 28, 42, 56].map((x) => (
        <polygon key={x} points={`${x + 7} 1 ${x + 8.8} 5.2 ${x + 13.5} 5.5 ${x + 10} 8.5 ${x + 11.2} 13 ${x + 7} 10.5 ${x + 2.8} 13 ${x + 4} 8.5 ${x + 0.5} 5.5 ${x + 5.2} 5.2`} fill="#fbbf24" />
      ))}
    </svg>
  )
}

function UtensilsIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" />
      <path d="M21 22v-7" />
    </svg>
  )
}

export default function FoodSection() {
  return (
    <>
      <style>{`
        .food-section {
          background: #07101f;
          padding: 112px 24px 120px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }
        .food-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 65% 55% at 15% 35%, rgba(249,115,22,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 45% 40% at 85% 65%, rgba(34,197,94,0.07) 0%, transparent 55%);
          pointer-events: none;
        }
        .food-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .food-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.25);
          margin-bottom: 28px;
        }
        .food-label-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f97316;
          box-shadow: 0 0 12px rgba(249,115,22,0.7);
          animation: foodPulse 2s ease-in-out infinite;
        }
        @keyframes foodPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .food-label span {
          font-size: 11.5px;
          font-weight: 800;
          color: #fb923c;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: 'Sora', sans-serif;
        }
        .food-headline {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.8rem, 6vw, 4.4rem);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: white;
          margin: 0 0 16px;
        }
        .food-headline-accent {
          display: block;
          background: linear-gradient(90deg, #fb923c 0%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .food-sub {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          max-width: 560px;
          margin: 0 0 56px;
        }
        .food-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
        .food-card {
          border-radius: 22px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, box-shadow 0.3s;
        }
        .food-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.12);
          box-shadow: 0 32px 64px rgba(0,0,0,0.5);
        }
        .food-card-hero {
          position: relative;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .food-card-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.4) 100%);
        }
        .food-card-hero-icon {
          position: relative;
          z-index: 1;
          opacity: 0.95;
        }
        .food-card-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.15);
          font-size: 10.5px;
          font-weight: 800;
          color: white;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          font-family: 'Sora', sans-serif;
        }
        .food-card-body {
          padding: 24px;
        }
        .food-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .food-card-rating {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .food-card-rating-num {
          font-family: 'Sora', sans-serif;
          font-weight: 800;
          font-size: 14px;
          color: white;
        }
        .food-card-rating-count {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
        }
        .food-card-time-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 12px;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
        }
        .food-card-name {
          font-family: 'Sora', sans-serif;
          font-weight: 900;
          font-size: 1.5rem;
          color: white;
          letter-spacing: -0.02em;
          margin: 0 0 4px;
          line-height: 1.15;
        }
        .food-card-cuisine {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 18px;
        }
        .food-card-divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin-bottom: 18px;
        }
        .food-card-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 18px;
        }
        .food-card-info-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          color: rgba(255,255,255,0.6);
        }
        .food-card-info-item svg {
          flex-shrink: 0;
          opacity: 0.6;
        }
        .food-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }
        .food-card-tag {
          padding: 4px 10px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.01em;
        }
        .food-card-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 800;
          color: white;
          text-decoration: none;
          border: none;
          cursor: pointer;
          font-family: 'Sora', sans-serif;
          transition: opacity 0.2s, transform 0.2s;
          letter-spacing: 0.01em;
        }
        .food-card-cta:hover {
          opacity: 0.88;
          transform: scale(0.985);
        }
        .food-zones-block {
          margin-bottom: 48px;
        }
        .food-zones-label {
          font-size: 11px;
          font-weight: 800;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Sora', sans-serif;
        }
        .food-zones-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.07);
        }
        .food-zones {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .food-zone {
          padding: 6px 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          cursor: default;
        }
        .food-zone:hover {
          background: rgba(249,115,22,0.1);
          border-color: rgba(249,115,22,0.2);
          color: #fb923c;
        }
        .food-cta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          padding: 36px 40px;
          border-radius: 22px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .food-cta-text strong {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 5px;
          letter-spacing: -0.02em;
        }
        .food-cta-text span {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
        }
        .food-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 32px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-weight: 800;
          font-size: 0.95rem;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 8px 32px rgba(249,115,22,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'Sora', sans-serif;
          letter-spacing: 0.01em;
        }
        .food-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(249,115,22,0.45);
        }
        @media (max-width: 768px) {
          .food-section { padding: 88px 16px 96px; }
          .food-cards { grid-template-columns: 1fr; }
          .food-cta-bar { padding: 24px 20px; flex-direction: column; align-items: flex-start; }
          .food-cta-btn { width: 100%; justify-content: center; }
          .food-card-info { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="food" className="food-section" aria-labelledby="food-heading">
        <div className="food-shell">

          <div className="food-label">
            <span className="food-label-dot" />
            <span>New Feature — Live Now</span>
          </div>

          <h2 id="food-heading" className="food-headline">
            Hungry on campus?
            <span className="food-headline-accent">Order from the best.</span>
          </h2>
          <p className="food-sub">
            Blorbmart now delivers hot meals from UNIOSUN's most-loved restaurants straight to you.
            Between classes, in your hostel, or anywhere in our delivery zones — food arrives fast.
          </p>

          <div className="food-cards">
            {restaurants.map((r) => (
              <article key={r.name} className="food-card">
                <div className="food-card-hero" style={{ background: r.headerGradient }}>
                  <div className="food-card-hero-icon">
                    <UtensilsIcon />
                  </div>
                  <span className="food-card-badge">{r.badge}</span>
                </div>

                <div className="food-card-body">
                  <div className="food-card-meta">
                    <div className="food-card-rating">
                      <StarRating />
                      <span className="food-card-rating-num">{r.rating}</span>
                      <span className="food-card-rating-count">({r.reviews} reviews)</span>
                    </div>
                    <div className="food-card-time-pill" style={{ color: r.timeColor }}>
                      <UtilsIcon type="clock" />
                      {r.time}
                    </div>
                  </div>

                  <h3 className="food-card-name">{r.name}</h3>
                  <div className="food-card-cuisine">{r.cuisine}</div>
                  <div className="food-card-divider" />

                  <div className="food-card-info">
                    <div className="food-card-info-item">
                      <UtilsIcon type="pin" />
                      {r.location}
                    </div>
                    <div className="food-card-info-item">
                      <UtilsIcon type="tag" />
                      Min {r.minOrder}
                    </div>
                  </div>

                  <div className="food-card-tags">
                    {r.specialties.map((s) => (
                      <span key={s} className="food-card-tag">{s}</span>
                    ))}
                  </div>

                  <a
                    href="/#download"
                    className="food-card-cta"
                    style={{ background: r.btnGradient }}
                  >
                    Order Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="food-zones-block">
            <div className="food-zones-label">Delivery zones</div>
            <div className="food-zones">
              {deliveryZones.map((z) => (
                <span key={z} className="food-zone">{z}</span>
              ))}
            </div>
          </div>

          <div className="food-cta-bar">
            <div className="food-cta-text">
              <strong>Download the app to start ordering</strong>
              <span>Get food from UNIOSUN's best spots delivered fast. Built for student life.</span>
            </div>
            <a href="/#download" className="food-cta-btn">
              Order Food Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
