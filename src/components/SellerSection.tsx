import { motion } from 'framer-motion'
import { ShieldTick, TickCircle, Flash, People } from 'iconsax-react'

const vendorCategories = [
  { icon: '👗', label: 'Fashion',     color: '#ec4899', bg: 'rgba(236,72,153,0.1)' },
  { icon: '✨', label: 'Beauty',      color: '#f43f5e', bg: 'rgba(244,63,94,0.1)'  },
  { icon: '💧', label: 'Perfumes',    color: '#a855f7', bg: 'rgba(168,85,247,0.1)' },
  { icon: '📚', label: 'Stationery',  color: '#1f77f1', bg: 'rgba(31,119,241,0.1)' },
  { icon: '⚡', label: 'Electronics', color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
  { icon: '💎', label: 'Accessories', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { icon: '💊', label: 'Health',      color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { icon: '🪑', label: 'Furniture',   color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
]

const sellerFeatures = [
  { title: 'List your products in minutes', description: 'Add photos, set your price, and go live. Students across UNIOSUN can start finding your products immediately.', accent: '#1f77f1' },
  { title: 'Build campus trust fast',       description: 'Verified seller profiles, real student reviews, and clear ratings help your store stand out from social media posts.', accent: '#0f766e' },
  { title: 'Manage orders from one place',  description: 'Track inventory, review incoming orders — all managed through the Blorbmart platform on your behalf.', accent: '#7c3aed' },
  { title: 'Grow repeat sales automatically', description: 'Buyers who love your products can follow your store. Build a loyal campus customer base without extra effort.', accent: '#ea580c' },
]

const sellerBenefits = [
  'Zero setup costs',
  'Campus-wide reach',
  'Instant order alerts',
  'Repeat student buyers',
  'Fast rider delivery',
  'Simple store management',
  'Transparent commissions',
  'Dispute resolution via Blorbmart',
]

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function SellerSection() {
  return (
    <>
      <style>{`
        .seller-section {
          padding: 100px 24px 116px;
          background: #f8faff;
          position: relative;
          overflow: hidden;
          font-family: 'Raleway', 'DM Sans', sans-serif;
        }
        .seller-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 50% at 12% 18%, rgba(31,119,241,0.07), transparent 50%),
            radial-gradient(ellipse 40% 45% at 88% 10%, rgba(124,58,237,0.05), transparent 45%);
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
          grid-template-columns: minmax(0, 1fr) minmax(300px, 400px);
          gap: 24px;
          align-items: start;
          margin-bottom: 36px;
        }
        .seller-tag {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(31,119,241,0.08);
          border: 1px solid rgba(31,119,241,0.18);
          color: #1f77f1;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 20px;
          font-family: 'Raleway', sans-serif;
        }
        .seller-title {
          margin: 0;
          font-family: 'Raleway', 'Sora', sans-serif;
          font-size: clamp(2.2rem, 4.2vw, 3.4rem);
          line-height: 1.06;
          letter-spacing: -0.03em;
          color: #0a0f1e;
          font-weight: 900;
        }
        .seller-copy {
          margin: 18px 0 0;
          color: #64748b;
          font-size: 1.03rem;
          line-height: 1.78;
          font-weight: 500;
          font-family: 'Raleway', sans-serif;
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
          gap: 9px;
          padding: 11px 14px;
          border-radius: 16px;
          font-size: 13px;
          font-weight: 700;
          color: #0a0f1e;
          background: rgba(255,255,255,0.82);
          border: 1px solid rgba(255,255,255,0.95);
          box-shadow: 0 6px 18px rgba(31,119,241,0.06), inset 0 1px 0 white;
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'Raleway', sans-serif;
        }
        .seller-cat-chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(31,119,241,0.1), inset 0 1px 0 white;
        }
        .seller-cat-emoji {
          font-size: 18px;
          width: 32px; height: 32px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .seller-stat-card,
        .seller-feature-card,
        .seller-story,
        .seller-benefits {
          border-radius: 26px;
          padding: 30px;
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.95);
          box-shadow: 0 16px 48px rgba(31,119,241,0.07), inset 0 1px 0 white;
        }
        .seller-stat-card span {
          display: block;
          font-size: 0.72rem; text-transform: uppercase;
          letter-spacing: 0.13em; color: #94a3b8; font-weight: 800;
          margin-bottom: 10px; font-family: 'Raleway', sans-serif;
        }
        .seller-stat-card strong {
          display: block;
          font-family: 'Raleway', sans-serif;
          font-size: 3.2rem; line-height: 1; color: #1f77f1; font-weight: 900;
        }
        .seller-stat-card p { margin: 10px 0 0; color: #64748b; line-height: 1.68; font-weight: 500; font-size: 0.93rem; }
        .seller-comm-link {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 18px; font-size: 13px; font-weight: 800;
          color: #1f77f1; text-decoration: none;
          font-family: 'Raleway', sans-serif;
        }
        .seller-comm-link:hover { text-decoration: underline; }

        .seller-care-note {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px 20px;
          border-radius: 18px;
          background: rgba(31,119,241,0.06);
          border: 1px solid rgba(31,119,241,0.15);
          margin-top: 20px;
        }
        .seller-care-note p {
          margin: 0;
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.65;
          font-weight: 500;
          font-family: 'Raleway', sans-serif;
        }
        .seller-care-note strong { color: #1f77f1; font-weight: 800; }

        .seller-feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 28px;
        }
        .seller-feature-icon {
          width: 52px; height: 52px;
          border-radius: 18px;
          display: inline-flex; align-items: center; justify-content: center;
          color: white; margin-bottom: 18px;
        }
        .seller-feature-card h3,
        .seller-story h3,
        .seller-benefits h3 {
          margin: 0 0 10px;
          font-family: 'Raleway', sans-serif;
          font-size: 1.1rem;
          color: #0a0f1e;
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        .seller-feature-card p,
        .seller-story p {
          margin: 0; color: #64748b; line-height: 1.72; font-weight: 500; font-size: 0.93rem;
          font-family: 'Raleway', sans-serif;
        }
        .seller-bottom {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.9fr);
          gap: 22px;
        }
        .seller-benefit-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-bottom: 24px;
        }
        .seller-benefit-item {
          display: flex; align-items: center; gap: 10px;
          border-radius: 14px; padding: 12px 14px;
          background: rgba(248,250,255,0.95);
          box-shadow: inset 0 1px 0 white, 0 6px 16px rgba(31,119,241,0.06);
          color: #334155; font-weight: 600; font-size: 0.88rem;
          font-family: 'Raleway', sans-serif;
        }
        .seller-cta {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap; padding-top: 6px;
        }
        .seller-cta-copy strong {
          display: block;
          font-family: 'Raleway', sans-serif;
          color: #0a0f1e; font-size: 1.05rem;
          margin-bottom: 4px; font-weight: 800;
        }
        .seller-cta-copy span {
          color: #64748b; font-size: 0.9rem; font-weight: 500;
          font-family: 'Raleway', sans-serif;
        }
        .seller-cta-button {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; padding: 13px 26px;
          border-radius: 999px;
          background: linear-gradient(135deg, #1f77f1, #1560cc);
          color: white; font-weight: 800; text-decoration: none;
          box-shadow: 0 10px 28px rgba(31,119,241,0.32);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'Raleway', sans-serif; font-size: 0.92rem;
        }
        .seller-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 42px rgba(31,119,241,0.44);
        }

        @media (max-width: 960px) {
          .seller-top, .seller-feature-grid, .seller-bottom, .seller-benefit-grid, .seller-cat-grid {
            grid-template-columns: 1fr;
          }
          .seller-cat-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .seller-section { padding: 82px 16px 96px; }
          .seller-stat-card, .seller-feature-card, .seller-story, .seller-benefits { padding: 22px; }
          .seller-cta-button { width: 100%; }
          .seller-cat-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>

      <section className="seller-section" id="sellers" aria-labelledby="sellers-heading">
        <div className="seller-shell">
          <div className="seller-top">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="seller-tag">
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1f77f1', boxShadow: '0 0 0 5px rgba(31,119,241,0.14)', display: 'inline-block' }} />
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
                  <motion.div
                    key={cat.label}
                    className="seller-cat-chip"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="seller-cat-emoji" style={{ background: cat.bg }}>{cat.icon}</div>
                    <span style={{ color: '#334155' }}>{cat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="seller-stat-card">
                <span>Active campus vendors</span>
                <strong>200+</strong>
                <p>Sellers are already reaching buyers inside UNIOSUN through Blorbmart — from beauty vendors to tech resellers.</p>
                <a href="#commission" className="seller-comm-link">
                  View commission rates
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>

                <div className="seller-care-note">
                  <ShieldTick size={22} color="#1f77f1" variant="Bold" style={{ flexShrink: 0, marginTop: 2 }} />
                  <p>
                    <strong>No direct buyer contact needed.</strong> All communication between buyers and sellers is managed by Blorbmart's support team — keeping transactions safe and simple for everyone.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="seller-feature-grid">
            {sellerFeatures.map((feature, i) => (
              <motion.article
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="seller-feature-card"
              >
                <div className="seller-feature-icon" style={{ background: `linear-gradient(135deg, ${feature.accent}, ${feature.accent}cc)` }}>
                  <Flash size={24} color="white" variant="Bold" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="seller-bottom">
            <motion.div
              className="seller-story"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>Why students sell on Blorbmart</h3>
              <p>
                Blorbmart replaces the chaos of managing buyers across WhatsApp, Instagram, and Snapchat.
                One platform, verified buyers, real ratings, and Campus Runs for delivery.
                Whether you're selling course materials, skincare, or custom fashion — this is campus commerce done right.
              </p>
            </motion.div>

            <motion.div
              className="seller-benefits"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>What you get as a seller</h3>
              <div className="seller-benefit-grid">
                {sellerBenefits.map(benefit => (
                  <div key={benefit} className="seller-benefit-item">
                    <TickCircle size={16} color="#1f77f1" variant="Bold" style={{ flexShrink: 0 }} />
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
                  <People size={16} color="white" variant="Bold" />
                  Start Selling
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
