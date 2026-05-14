import { motion } from 'framer-motion'
import { ShoppingCart, Star1, Location, Clock, Tag } from 'iconsax-react'

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
    image: '/mijas%20pasta.png',
    imageAlt: 'Mijas Pasta food at UNIOSUN campus',
    badge: 'Most Popular',
    accentMain: '#ff5500',
    accentSecond: '#ffc200',
    btnGradient: 'linear-gradient(135deg, #ff5500, #e63e00)',
    btnShadow: 'rgba(255,85,0,0.45)',
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
    image: null,
    imageAlt: null,
    headerGradient: 'linear-gradient(135deg, #16a34a 0%, #14532d 100%)',
    badge: 'Recommended',
    accentMain: '#22c55e',
    accentSecond: '#4ade80',
    btnGradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    btnShadow: 'rgba(34,197,94,0.4)',
  },
]

const deliveryZones = [
  'Shasha', 'Link Sensation', 'Transformer Jct',
  'Shogbo', 'Nipco', 'URP Area', 'Cele', 'Highflyer Area',
  'UNIOSUN Gate', 'Hostel Area',
]

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

const physicsOrbs = [
  { w: 480, h: 480, x: '5%', y: '10%', color: 'rgba(255,85,0,0.12)', dur: 11, dx: [0, 30, -20, 0], dy: [0, -40, 25, 0] },
  { w: 360, h: 360, x: '65%', y: '-5%', color: 'rgba(255,194,0,0.08)', dur: 14, dx: [0, -35, 20, 0], dy: [0, 30, -40, 0] },
  { w: 280, h: 280, x: '80%', y: '60%', color: 'rgba(255,85,0,0.07)', dur: 9, dx: [0, 25, -30, 0], dy: [0, -20, 35, 0] },
]

function StarFill({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star1 key={i} size={13} color="#ffc200" variant="Bold" />
      ))}
    </div>
  )
}

export default function FoodSection() {
  return (
    <>
      <style>{`
        .food-section {
          background: #07101f;
          padding: 112px 24px 128px;
          position: relative;
          overflow: hidden;
          font-family: 'Raleway', 'DM Sans', sans-serif;
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
          padding: 8px 20px;
          border-radius: 999px;
          background: rgba(255,85,0,0.1);
          border: 1px solid rgba(255,85,0,0.28);
          margin-bottom: 28px;
        }
        .food-label-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #ff5500;
          box-shadow: 0 0 14px rgba(255,85,0,0.8);
          animation: foodPulse 2s ease-in-out infinite;
        }
        @keyframes foodPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        .food-label span {
          font-size: 11.5px; font-weight: 800; color: #ff7733;
          letter-spacing: 0.1em; text-transform: uppercase;
          font-family: 'Raleway', sans-serif;
        }
        .food-headline {
          font-family: 'Raleway', 'Sora', sans-serif;
          font-size: clamp(2.8rem, 6vw, 4.6rem);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: white;
          margin: 0 0 18px;
        }
        .food-headline-accent {
          display: block;
          background: linear-gradient(90deg, #ff5500 0%, #ffc200 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .food-sub {
          font-size: 1.07rem;
          color: rgba(255,255,255,0.52);
          line-height: 1.78;
          max-width: 560px;
          margin: 0 0 60px;
          font-weight: 500;
          font-family: 'Raleway', sans-serif;
        }
        .food-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-bottom: 44px;
        }
        .food-card {
          border-radius: 26px;
          overflow: hidden;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .food-card:hover {
          border-color: rgba(255,255,255,0.14);
          box-shadow: 0 36px 80px rgba(0,0,0,0.55);
        }
        .food-card-hero {
          position: relative;
          height: 200px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .food-card-hero img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .food-card-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 100%);
        }
        .food-card-badge {
          position: absolute;
          top: 14px; right: 14px; z-index: 2;
          padding: 5px 13px;
          border-radius: 999px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.18);
          font-size: 10px; font-weight: 800; color: white;
          letter-spacing: 0.08em; text-transform: uppercase;
          font-family: 'Raleway', sans-serif;
        }
        .food-card-body { padding: 26px; }
        .food-card-meta {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 14px;
        }
        .food-card-rating {
          display: flex; align-items: center; gap: 8px;
        }
        .food-card-rating-num {
          font-family: 'Raleway', sans-serif; font-weight: 900; font-size: 14px; color: white;
        }
        .food-card-rating-count {
          font-size: 12px; color: rgba(255,255,255,0.32); font-weight: 500;
        }
        .food-card-time-pill {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          font-size: 12px; font-weight: 700;
          font-family: 'Raleway', sans-serif;
          color: rgba(255,255,255,0.65);
        }
        .food-card-name {
          font-family: 'Raleway', 'Sora', sans-serif;
          font-weight: 900; font-size: 1.55rem; color: white;
          letter-spacing: -0.025em; margin: 0 0 4px; line-height: 1.15;
        }
        .food-card-cuisine {
          font-size: 13px; color: rgba(255,255,255,0.38); margin-bottom: 20px; font-weight: 500;
        }
        .food-card-divider { height: 1px; background: rgba(255,255,255,0.06); margin-bottom: 20px; }
        .food-card-info {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 10px; margin-bottom: 20px;
        }
        .food-card-info-item {
          display: flex; align-items: center; gap: 7px;
          font-size: 13px; color: rgba(255,255,255,0.55); font-weight: 500;
        }
        .food-card-tags {
          display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 22px;
        }
        .food-card-tag {
          padding: 4px 12px;
          border-radius: 9px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.5);
        }
        .food-card-cta {
          display: flex; align-items: center; justify-content: center; gap: 9px;
          width: 100%; padding: 14px;
          border-radius: 16px;
          font-size: 14px; font-weight: 800; color: white;
          text-decoration: none; border: none; cursor: pointer;
          font-family: 'Raleway', sans-serif;
          transition: opacity 0.2s, transform 0.18s;
          letter-spacing: 0.01em;
        }
        .food-card-cta:hover { opacity: 0.88; transform: scale(0.985); }

        .food-zones-block { margin-bottom: 52px; }
        .food-zones-label {
          font-size: 11px; font-weight: 800;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.12em; text-transform: uppercase;
          margin-bottom: 14px;
          display: flex; align-items: center; gap: 10px;
          font-family: 'Raleway', sans-serif;
        }
        .food-zones-label::after {
          content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.06);
        }
        .food-zones { display: flex; flex-wrap: wrap; gap: 9px; }
        .food-zone {
          padding: 7px 16px;
          border-radius: 11px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 12.5px; font-weight: 600;
          color: rgba(255,255,255,0.48);
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          cursor: default;
          font-family: 'Raleway', sans-serif;
        }
        .food-zone:hover {
          background: rgba(255,85,0,0.1);
          border-color: rgba(255,85,0,0.22);
          color: #ff7733;
        }

        .food-cta-bar {
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
          padding: 38px 44px;
          border-radius: 26px;
          background: rgba(255,85,0,0.06);
          border: 1px solid rgba(255,85,0,0.14);
          backdrop-filter: blur(10px);
        }
        .food-cta-text strong {
          display: block; font-family: 'Raleway', sans-serif;
          font-size: 1.35rem; font-weight: 900; color: white;
          margin-bottom: 6px; letter-spacing: -0.02em;
        }
        .food-cta-text span {
          font-size: 0.92rem; color: rgba(255,255,255,0.45);
          line-height: 1.6; font-weight: 500;
        }
        .food-cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 34px;
          border-radius: 16px;
          background: linear-gradient(135deg, #ff5500, #e63e00);
          color: white; font-weight: 900; font-size: 0.97rem;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 10px 36px rgba(255,85,0,0.42);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'Raleway', sans-serif;
          letter-spacing: 0.02em;
        }
        .food-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 52px rgba(255,85,0,0.55);
        }
        @media (max-width: 768px) {
          .food-section { padding: 90px 16px 100px; }
          .food-cards { grid-template-columns: 1fr; }
          .food-cta-bar { padding: 26px 22px; flex-direction: column; align-items: flex-start; }
          .food-cta-btn { width: 100%; justify-content: center; }
          .food-card-info { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="food" className="food-section" aria-labelledby="food-heading">
        {/* Physics background orbs */}
        {physicsOrbs.map((o, i) => (
          <motion.div
            key={i}
            animate={{ x: o.dx, y: o.dy }}
            transition={{ duration: o.dur, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', left: o.x, top: o.y,
              width: o.w, height: o.h, borderRadius: '50%', pointerEvents: 'none',
              background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
              filter: 'blur(70px)',
            }}
          />
        ))}

        <div className="food-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="food-label">
              <span className="food-label-dot" />
              <span>Live Now — Order Food</span>
            </div>

            <h2 id="food-heading" className="food-headline">
              Hungry on campus?
              <span className="food-headline-accent">Order from the best.</span>
            </h2>
            <p className="food-sub">
              Blorbmart delivers hot meals from UNIOSUN's most-loved restaurants straight to you.
              Between classes, in your hostel, or anywhere in our delivery zones — food arrives fast.
            </p>
          </motion.div>

          <div className="food-cards">
            {restaurants.map((r, i) => (
              <motion.article
                key={r.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -10, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="food-card"
              >
                <div className="food-card-hero">
                  {r.image ? (
                    <img src={r.image} alt={r.imageAlt ?? r.name} loading="lazy" decoding="async" />
                  ) : (
                    <div style={{ position: 'absolute', inset: 0, background: r.headerGradient }} />
                  )}
                  <div className="food-card-hero-overlay" />
                  <span className="food-card-badge">{r.badge}</span>
                </div>

                <div className="food-card-body">
                  <div className="food-card-meta">
                    <div className="food-card-rating">
                      <StarFill />
                      <span className="food-card-rating-num">{r.rating}</span>
                      <span className="food-card-rating-count">({r.reviews})</span>
                    </div>
                    <div className="food-card-time-pill">
                      <Clock size={12} color="currentColor" variant="Bold" />
                      {r.time}
                    </div>
                  </div>

                  <h3 className="food-card-name">{r.name}</h3>
                  <div className="food-card-cuisine">{r.cuisine}</div>
                  <div className="food-card-divider" />

                  <div className="food-card-info">
                    <div className="food-card-info-item">
                      <Location size={13} color={r.accentMain} variant="Bold" />
                      {r.location}
                    </div>
                    <div className="food-card-info-item">
                      <Tag size={13} color={r.accentSecond} variant="Bold" />
                      Min {r.minOrder}
                    </div>
                  </div>

                  <div className="food-card-tags">
                    {r.specialties.map(s => (
                      <span key={s} className="food-card-tag">{s}</span>
                    ))}
                  </div>

                  <a
                    href="/#download"
                    className="food-card-cta"
                    style={{ background: r.btnGradient, boxShadow: `0 8px 28px ${r.btnShadow}` }}
                  >
                    <ShoppingCart size={16} color="white" variant="Bold" />
                    Order Now
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="food-zones-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="food-zones-label">Delivery zones</div>
            <div className="food-zones">
              {deliveryZones.map(z => (
                <motion.span
                  key={z}
                  className="food-zone"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15 }}
                >{z}</motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="food-cta-bar"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="food-cta-text">
              <strong>Download the app to start ordering</strong>
              <span>Get food from UNIOSUN's best spots delivered fast. Built for student life.</span>
            </div>
            <a href="/#download" className="food-cta-btn">
              Order Food Now
              <ShoppingCart size={18} color="white" variant="Bold" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
