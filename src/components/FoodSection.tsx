const restaurants = [
  {
    name: 'Mijas Pasta',
    cuisine: 'Italian · Continental Fusion',
    location: 'Shasha, UNIOSUN Area',
    time: '15–25 min',
    minOrder: '₦1,500',
    rating: '4.9',
    reviews: '240+',
    specialties: ['Pasta', 'Stir-fry', 'Grills'],
    headerGradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    accentColor: '#f97316',
    emoji: '🍝',
    badge: 'Most Popular',
  },
  {
    name: 'Tasty Garnished Kitchen',
    cuisine: 'Nigerian · Home Cooking',
    location: 'Link Sensation, Near UNIOSUN',
    time: '20–30 min',
    minOrder: '₦1,200',
    rating: '4.8',
    reviews: '182+',
    specialties: ['Jollof Rice', 'Fried Rice', 'Stew'],
    headerGradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    accentColor: '#10b981',
    emoji: '🍛',
    badge: 'Recommended',
  },
  {
    name: 'Campus Bites',
    cuisine: 'Fast Food · Shawarma & Grills',
    location: 'Transformer Junction',
    time: '10–20 min',
    minOrder: '₦800',
    rating: '4.7',
    reviews: '328+',
    specialties: ['Shawarma', 'Burgers', 'Drinks'],
    headerGradient: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
    accentColor: '#8b5cf6',
    emoji: '🌯',
    badge: 'Fast Delivery',
  },
  {
    name: 'Highflyer Buka',
    cuisine: 'Local · Swallow & Soups',
    location: 'Highflyer Area, UNIOSUN',
    time: '20–35 min',
    minOrder: '₦1,000',
    rating: '4.8',
    reviews: '156+',
    specialties: ['Amala', 'Egusi', 'Efo Riro'],
    headerGradient: 'linear-gradient(135deg, #db2777 0%, #9d174d 100%)',
    accentColor: '#ec4899',
    emoji: '🥘',
    badge: 'Local Fav',
  },
]

const foodCategories = [
  { emoji: '🍛', label: 'Rice & Stews' },
  { emoji: '🍝', label: 'Pasta' },
  { emoji: '🌯', label: 'Shawarma' },
  { emoji: '🥘', label: 'Local Dishes' },
  { emoji: '🥤', label: 'Cold Drinks' },
  { emoji: '🍿', label: 'Snacks' },
]

const deliveryZones = [
  'Shasha', 'Link Sensation', 'Transformer Jct', 'Shogbo',
  'Nipco', 'URP Area', 'Cele', 'Highflyer Area', 'UNIOSUN Gate', 'Hostel Area',
]

export default function FoodSection() {
  return (
    <>
      <style>{`
        .food-section {
          background: linear-gradient(180deg, #07101f 0%, #0c1828 60%, #07101f 100%);
          padding: 100px 24px 112px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }
        .food-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 20% 30%, rgba(249,115,22,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 70%, rgba(234,88,12,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 40% 30% at 60% 10%, rgba(124,58,237,0.07) 0%, transparent 50%);
          pointer-events: none;
        }
        .food-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }
        .food-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .food-new-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(249,115,22,0.12);
          border: 1px solid rgba(249,115,22,0.3);
          border-radius: 999px;
          padding: 8px 18px;
          margin-bottom: 28px;
          animation: foodFadeUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both;
        }
        .food-new-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f97316;
          box-shadow: 0 0 10px rgba(249,115,22,0.6);
          animation: foodDotPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes foodDotPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(249,115,22,0.6); }
          50% { box-shadow: 0 0 20px rgba(249,115,22,0.3), 0 0 40px rgba(249,115,22,0.1); }
        }
        .food-new-badge span {
          font-size: 12px;
          font-weight: 800;
          color: #fb923c;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: 'Sora', sans-serif;
        }
        .food-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: start;
          gap: 40px;
          margin-bottom: 48px;
        }
        .food-title {
          margin: 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.03em;
          color: white;
          animation: foodFadeUp 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both;
        }
        .food-title-accent {
          display: block;
          background: linear-gradient(135deg, #fb923c 0%, #f97316 40%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .food-sub {
          margin: 20px 0 0;
          font-size: 1.08rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.75;
          max-width: 580px;
          animation: foodFadeUp 0.6s 0.3s cubic-bezier(0.22,1,0.36,1) both;
        }
        .food-cats {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
          animation: foodFadeUp 0.6s 0.4s cubic-bezier(0.22,1,0.36,1) both;
        }
        .food-cat-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          cursor: default;
        }
        .food-cat-pill:hover {
          background: rgba(249,115,22,0.15);
          border-color: rgba(249,115,22,0.3);
          color: white;
          transform: translateY(-2px);
        }
        .food-stats-row {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
          flex-shrink: 0;
        }
        .food-stat {
          text-align: center;
        }
        .food-stat strong {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 2rem;
          font-weight: 900;
          background: linear-gradient(135deg, #fb923c, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .food-stat span {
          display: block;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 4px;
        }
        .food-stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.1);
        }
        .food-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 40px;
          animation: foodFadeUp 0.7s 0.4s cubic-bezier(0.22,1,0.36,1) both;
        }
        .food-card {
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s, border-color 0.25s;
        }
        .food-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.14);
          box-shadow: 0 28px 56px rgba(0,0,0,0.4);
        }
        .food-card-header {
          position: relative;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.8rem;
          overflow: hidden;
        }
        .food-card-header::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.35) 100%);
        }
        .food-card-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(0,0,0,0.55);
          font-size: 10px;
          font-weight: 800;
          color: white;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          z-index: 1;
          backdrop-filter: blur(6px);
        }
        .food-card-body {
          padding: 18px;
        }
        .food-card-name {
          font-family: 'Sora', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          color: white;
          margin: 0 0 3px;
          line-height: 1.25;
        }
        .food-card-cuisine {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          margin-bottom: 12px;
        }
        .food-card-info {
          display: grid;
          gap: 7px;
          margin-bottom: 14px;
        }
        .food-card-info-row {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.65);
        }
        .food-card-info-row svg {
          flex-shrink: 0;
          opacity: 0.7;
        }
        .food-card-rating {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 12px;
        }
        .food-card-stars {
          color: #fbbf24;
          font-size: 13px;
        }
        .food-card-rating span {
          font-size: 12px;
          font-weight: 700;
          color: white;
        }
        .food-card-rating small {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
        }
        .food-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 14px;
        }
        .food-card-tag {
          padding: 3px 9px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .food-card-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 100%;
          padding: 10px;
          border-radius: 14px;
          font-size: 13px;
          font-weight: 700;
          color: white;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
        }
        .food-card-btn:hover {
          opacity: 0.9;
          transform: scale(0.98);
        }
        .food-zones {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-bottom: 44px;
          animation: foodFadeUp 0.6s 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        .food-zones-label {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          flex-shrink: 0;
          margin-right: 2px;
        }
        .food-zone-pill {
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.2);
          font-size: 12.5px;
          font-weight: 600;
          color: #fb923c;
          transition: background 0.2s, transform 0.2s;
          cursor: default;
        }
        .food-zone-pill:hover {
          background: rgba(249,115,22,0.18);
          transform: translateY(-1px);
        }
        .food-cta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          padding: 32px 36px;
          border-radius: 28px;
          background: rgba(249,115,22,0.08);
          border: 1px solid rgba(249,115,22,0.2);
          animation: foodFadeUp 0.6s 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }
        .food-cta-text strong {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: white;
          margin-bottom: 6px;
        }
        .food-cta-text span {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.6;
        }
        .food-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 999px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-weight: 800;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 16px 40px rgba(249,115,22,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
          font-family: 'Sora', sans-serif;
        }
        .food-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 48px rgba(249,115,22,0.5);
        }
        @keyframes foodFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1100px) {
          .food-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .food-header {
            grid-template-columns: 1fr;
          }
          .food-stats-row {
            justify-content: flex-start;
          }
        }
        @media (max-width: 640px) {
          .food-section {
            padding: 80px 16px 96px;
          }
          .food-grid {
            grid-template-columns: 1fr;
          }
          .food-cta-row {
            padding: 24px 20px;
            flex-direction: column;
            align-items: flex-start;
          }
          .food-cta-btn {
            width: 100%;
            justify-content: center;
          }
          .food-stats-row {
            gap: 20px;
          }
        }
      `}</style>

      <section className="food-section" id="food" aria-labelledby="food-heading">
        <div className="food-shell">

          <div className="food-new-badge">
            <span className="food-new-dot" />
            <span>New Feature — Now Live</span>
          </div>

          <div className="food-header">
            <div>
              <h2
                id="food-heading"
                className="food-title"
              >
                Hungry on Campus?
                <span className="food-title-accent">Order from UNIOSUN's</span>
                Best Restaurants.
              </h2>
              <p className="food-sub">
                Blorbmart now delivers hot meals straight to you — whether you're in your hostel, between lectures,
                or chilling at the URP area. Order from popular eateries downtown and get it delivered fast.
              </p>
              <div className="food-cats">
                {foodCategories.map((c) => (
                  <span key={c.label} className="food-cat-pill">
                    <span style={{ fontSize: 16 }}>{c.emoji}</span>
                    {c.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="food-stats-row">
              <div className="food-stat">
                <strong>4+</strong>
                <span>Restaurants</span>
              </div>
              <div className="food-stat-divider" />
              <div className="food-stat">
                <strong>20</strong>
                <span>Min avg delivery</span>
              </div>
              <div className="food-stat-divider" />
              <div className="food-stat">
                <strong>10+</strong>
                <span>Delivery zones</span>
              </div>
            </div>
          </div>

          <div className="food-grid">
            {restaurants.map((r) => (
              <article key={r.name} className="food-card">
                <div className="food-card-header" style={{ background: r.headerGradient }}>
                  <span style={{ position: 'relative', zIndex: 1 }}>{r.emoji}</span>
                  <span className="food-card-badge">{r.badge}</span>
                </div>

                <div className="food-card-body">
                  <div className="food-card-rating">
                    <span className="food-card-stars">★★★★★</span>
                    <span>{r.rating}</span>
                    <small>({r.reviews} reviews)</small>
                  </div>
                  <h3 className="food-card-name">{r.name}</h3>
                  <div className="food-card-cuisine">{r.cuisine}</div>

                  <div className="food-card-info">
                    <div className="food-card-info-row">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="9" r="2.5" fill="currentColor" />
                      </svg>
                      {r.location}
                    </div>
                    <div className="food-card-info-row">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {r.time} · Min order {r.minOrder}
                    </div>
                  </div>

                  <div className="food-card-tags">
                    {r.specialties.map((s) => (
                      <span key={s} className="food-card-tag">{s}</span>
                    ))}
                  </div>

                  <a
                    href="/#download"
                    className="food-card-btn"
                    style={{ background: r.headerGradient }}
                  >
                    Order Now
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="food-zones">
            <span className="food-zones-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }}>
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Delivery zones:
            </span>
            {deliveryZones.map((z) => (
              <span key={z} className="food-zone-pill">{z}</span>
            ))}
          </div>

          <div className="food-cta-row">
            <div className="food-cta-text">
              <strong>Download the App to Start Ordering</strong>
              <span>Get food from the best spots around UNIOSUN delivered right to you. Fast, reliable, and built for student life.</span>
            </div>
            <a href="/#download" className="food-cta-btn">
              Order Food Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
