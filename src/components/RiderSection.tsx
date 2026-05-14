import { motion } from 'framer-motion'
import { Truck, TickCircle, Flash, Timer1 } from 'iconsax-react'

const riderFeatures = [
  { title: 'Flexible student schedule', description: 'Deliver before lectures, after classes, or whenever your timetable allows. You control your hours.', accent: '#1f77f1' },
  { title: 'Earn per completed trip',   description: 'Campus riders receive clear delivery tasks, transparent earnings, and fast payment for every completed order.', accent: '#0f766e' },
  { title: 'Short familiar routes',     description: 'Deliver within UNIOSUN — Shasha, Nipco, Cele, URP Area, Highflyer. Routes you already know by heart.', accent: '#7c3aed' },
  { title: 'Backed by Campus Runs',     description: "As Blorbmart's official logistics partner, Campus Runs provides training, support, and consistent order flow.", accent: '#ea580c' },
]

const riderRequirements = [
  'Valid UNIOSUN student ID',
  'Smartphone with internet access',
  'Bike, scooter, or fast campus mobility',
  'Free time slots during the week',
  'Good knowledge of UNIOSUN & surrounding areas',
]

const deliveryAreas = [
  'Shasha', 'Nipco', 'URP Area', 'Cele',
  'Highflyer Area', 'Transformer Jct', 'Link Sensation', 'Shogbo',
]

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function RiderSection() {
  return (
    <>
      <style>{`
        .rider-section {
          padding: 100px 24px 112px;
          background: #f8faff;
          position: relative;
          overflow: hidden;
          font-family: 'Raleway', 'DM Sans', sans-serif;
        }
        .rider-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 50% 55% at 10% 16%, rgba(6,182,212,0.07), transparent 50%),
            radial-gradient(ellipse 38% 44% at 90% 10%, rgba(31,119,241,0.06), transparent 45%);
          pointer-events: none;
        }
        .rider-section::after {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
          background-size: 76px 76px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.3), transparent 90%);
          pointer-events: none;
        }
        .rider-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .rider-partner-banner {
          display: inline-flex; align-items: center; gap: 14px;
          padding: 10px 20px;
          border-radius: 999px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.95);
          box-shadow: 0 10px 28px rgba(31,119,241,0.08), inset 0 1px 0 white;
          margin-bottom: 20px;
        }
        .rider-partner-dot {
          width: 34px; height: 34px; border-radius: 11px;
          background: linear-gradient(135deg, #ff5500, #e63e00);
          display: flex; align-items: center; justify-content: center;
          color: white; flex-shrink: 0;
        }
        .rider-partner-label small {
          font-size: 10px; font-weight: 800; color: #94a3b8;
          text-transform: uppercase; letter-spacing: 0.09em;
          display: block; font-family: 'Raleway', sans-serif;
        }
        .rider-partner-label strong {
          font-family: 'Raleway', sans-serif;
          font-size: 14px; font-weight: 900; color: #0a0f1e;
        }
        .rider-top {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.95fr);
          gap: 28px; align-items: start; margin-bottom: 30px;
        }
        .rider-tag {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 8px 18px; border-radius: 999px;
          background: rgba(6,182,212,0.08);
          border: 1px solid rgba(6,182,212,0.2);
          color: #0891b2; font-size: 12px; font-weight: 800;
          letter-spacing: 0.09em; text-transform: uppercase;
          width: fit-content; margin-bottom: 20px;
          font-family: 'Raleway', sans-serif;
        }
        .rider-title {
          margin: 0;
          font-family: 'Raleway', 'Sora', sans-serif;
          font-size: clamp(2.2rem, 4.2vw, 3.4rem);
          line-height: 1.06; letter-spacing: -0.03em;
          color: #0a0f1e; font-weight: 900;
        }
        .rider-copy {
          margin: 18px 0 0; color: #64748b;
          font-size: 1.03rem; line-height: 1.78;
          font-weight: 500; font-family: 'Raleway', sans-serif;
        }
        .rider-visual,
        .rider-feature-card,
        .rider-story,
        .rider-requirements {
          border-radius: 26px; padding: 28px;
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.95);
          box-shadow: 0 16px 44px rgba(31,119,241,0.07), inset 0 1px 0 white;
        }
        .rider-visual img {
          display: block; width: 100%;
          height: 300px; object-fit: cover;
          border-radius: 20px;
        }
        .rider-visual-note {
          display: flex; align-items: center; justify-content: space-between;
          gap: 14px; padding: 16px 6px 4px;
        }
        .rider-visual-note strong {
          display: block; font-family: 'Raleway', sans-serif;
          color: #0a0f1e; font-weight: 800;
        }
        .rider-visual-note span { color: #64748b; font-size: 0.9rem; font-weight: 500; }
        .rider-pill {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 8px 16px; border-radius: 999px;
          background: linear-gradient(135deg, #1f77f1, #1560cc);
          color: white; font-size: 0.82rem; font-weight: 800;
          white-space: nowrap; font-family: 'Raleway', sans-serif;
        }
        .rider-zones {
          display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0 4px;
        }
        .rider-zone-chip {
          padding: 5px 14px; border-radius: 999px;
          background: rgba(31,119,241,0.07);
          border: 1px solid rgba(31,119,241,0.18);
          font-size: 12px; font-weight: 700; color: #1f77f1;
          font-family: 'Raleway', sans-serif;
        }
        .rider-feature-grid {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px; margin-bottom: 28px;
        }
        .rider-feature-icon {
          width: 52px; height: 52px; border-radius: 18px;
          display: inline-flex; align-items: center; justify-content: center;
          color: white; margin-bottom: 18px;
        }
        .rider-feature-card h3, .rider-story h3, .rider-requirements h3 {
          margin: 0 0 12px;
          font-family: 'Raleway', sans-serif;
          color: #0a0f1e; font-size: 1.1rem; font-weight: 800;
          letter-spacing: -0.01em;
        }
        .rider-feature-card p, .rider-story p {
          margin: 0; color: #64748b; line-height: 1.75;
          font-weight: 500; font-size: 0.93rem; font-family: 'Raleway', sans-serif;
        }
        .rider-bottom {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.88fr);
          gap: 22px;
        }
        .rider-requirement-list { display: grid; gap: 10px; margin-bottom: 24px; }
        .rider-requirement-item {
          display: flex; align-items: center; gap: 12px;
          border-radius: 16px; padding: 13px 16px;
          background: rgba(248,250,255,0.95);
          box-shadow: inset 0 1px 0 white, 0 6px 16px rgba(31,119,241,0.05);
          color: #334155; font-weight: 600; font-size: 0.9rem;
          font-family: 'Raleway', sans-serif;
        }
        .rider-cta {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap; padding-top: 6px;
        }
        .rider-cta-copy strong {
          display: block; font-family: 'Raleway', sans-serif;
          color: #0a0f1e; font-size: 1.05rem;
          margin-bottom: 4px; font-weight: 800;
        }
        .rider-cta-copy span {
          display: block; color: #64748b; font-size: 0.9rem;
          font-weight: 500; font-family: 'Raleway', sans-serif;
        }
        .rider-button {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; padding: 13px 26px; border-radius: 999px;
          background: linear-gradient(135deg, #1f77f1, #1560cc);
          color: white; text-decoration: none; font-weight: 800;
          box-shadow: 0 10px 28px rgba(31,119,241,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'Raleway', sans-serif; font-size: 0.92rem;
        }
        .rider-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(31,119,241,0.42);
        }
        @media (max-width: 960px) {
          .rider-top, .rider-feature-grid, .rider-bottom { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .rider-section { padding: 82px 16px 96px; }
          .rider-feature-card, .rider-story, .rider-requirements, .rider-visual { padding: 22px; }
          .rider-visual img { height: 240px; }
          .rider-button { width: 100%; }
          .rider-visual-note { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section className="rider-section" id="riders" aria-labelledby="riders-heading">
        <div className="rider-shell">
          <div className="rider-top">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rider-partner-banner">
                <div className="rider-partner-dot">
                  <Truck size={18} color="white" variant="Bold" />
                </div>
                <div className="rider-partner-label">
                  <small>Official Logistics Partner</small>
                  <strong>Campus Runs</strong>
                </div>
              </div>

              <div className="rider-tag">
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0891b2', boxShadow: '0 0 0 5px rgba(8,145,178,0.14)', display: 'inline-block' }} />
                Riders
              </div>
              <h2 id="riders-heading" className="rider-title">Earn Money as a Campus Rider with Campus Runs</h2>
              <p className="rider-copy">
                Blorbmart has partnered with <strong>Campus Runs</strong> as our official logistics partner for UNIOSUN.
                If you want flexible earning around your class schedule — food deliveries, product drops, and more — this is your opportunity.
              </p>

              <div className="rider-zones">
                {deliveryAreas.map(area => (
                  <span key={area} className="rider-zone-chip">{area}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rider-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src="/49737.jpg" alt="Campus Runs rider making a Blorbmart delivery near UNIOSUN" loading="lazy" decoding="async" />
              <div className="rider-visual-note">
                <div>
                  <strong>Fast campus deliveries</strong>
                  <span>Short routes, clear drop-offs, flexible student hours.</span>
                </div>
                <div className="rider-pill">
                  <Timer1 size={13} color="white" variant="Bold" style={{ marginRight: 4 }} />
                  50+ Active Riders
                </div>
              </div>
            </motion.div>
          </div>

          <div className="rider-feature-grid">
            {riderFeatures.map((feature, i) => (
              <motion.article
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="rider-feature-card"
              >
                <div className="rider-feature-icon" style={{ background: `linear-gradient(135deg, ${feature.accent}, ${feature.accent}cc)` }}>
                  <Flash size={24} color="white" variant="Bold" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="rider-bottom">
            <motion.div
              className="rider-story"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>Why join the Blorbmart × Campus Runs network</h3>
              <p>
                Campus Runs brings the experience, infrastructure, and rider community. Blorbmart brings the orders.
                Together, we're building a campus delivery network that's fast, reliable, and genuinely profitable
                for student riders at UNIOSUN. Join hundreds of riders already earning across Shasha, Nipco, and beyond.
              </p>
            </motion.div>

            <motion.div
              className="rider-requirements"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>What you need to join</h3>
              <div className="rider-requirement-list">
                {riderRequirements.map((req, i) => (
                  <motion.div
                    key={req}
                    className="rider-requirement-item"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <TickCircle size={18} color="#1f77f1" variant="Bold" style={{ flexShrink: 0 }} />
                    <span>{req}</span>
                  </motion.div>
                ))}
              </div>

              <div className="rider-cta">
                <div className="rider-cta-copy">
                  <strong>Apply via Campus Runs</strong>
                  <span>Download the app to sign up as a rider.</span>
                </div>
                <a href="/#download" className="rider-button">
                  <Truck size={16} color="white" variant="Bold" />
                  Become a Rider
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
