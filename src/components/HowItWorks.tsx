import { motion } from 'framer-motion'
import { People, Shop, Truck, TickCircle } from 'iconsax-react'

const personas = [
  {
    icon: People,
    title: 'Buyers',
    label: 'Students',
    accent: '#1f77f1',
    bg: 'rgba(31,119,241,0.1)',
    description: 'Browse trusted campus listings, compare prices, and buy from nearby sellers — all through Blorbmart.',
    points: ['Search campus deals', 'Order in minutes', 'Track rider delivery'],
  },
  {
    icon: Shop,
    title: 'Sellers',
    label: 'Campus businesses',
    accent: '#a855f7',
    bg: 'rgba(168,85,247,0.1)',
    description: 'Open a storefront, list products fast, and sell to students already searching on campus.',
    points: ['Create your store', 'Upload products', 'Manage orders and earnings'],
  },
  {
    icon: Truck,
    title: 'Riders',
    label: 'Flexible earners',
    accent: '#06b6d4',
    bg: 'rgba(6,182,212,0.1)',
    description: 'Accept short delivery jobs around campus and earn from a schedule that fits your classes.',
    points: ['Accept delivery tasks', 'Work around lectures', 'Complete quick campus routes'],
  },
]

const steps = [
  { number: '01', title: 'Create your account', desc: 'Sign up as a student buyer, seller, or rider and set up your campus profile.' },
  { number: '02', title: 'Browse or list products', desc: 'Students can search campus offers while sellers publish items in a few taps.' },
  { number: '03', title: 'Place orders and confirm delivery', desc: 'Choose pickup or rider delivery, then follow the order with live status updates.' },
  { number: '04', title: 'Build trust and repeat sales', desc: 'Complete transactions, receive feedback, and grow your campus reputation.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stepVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HowItWorks() {
  return (
    <>
      <style>{`
        .how-wrap {
          background: #f8faff;
          padding: 100px 24px 108px;
          position: relative;
          overflow: hidden;
          font-family: 'Raleway', 'DM Sans', sans-serif;
        }
        .how-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 60% at 10% 20%, rgba(31,119,241,0.07), transparent 55%),
            radial-gradient(ellipse 40% 50% at 88% 80%, rgba(168,85,247,0.05), transparent 50%);
          pointer-events: none;
        }
        .how-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.4), transparent 90%);
          pointer-events: none;
        }
        .how-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .how-intro {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
          gap: 28px;
          align-items: end;
          margin-bottom: 48px;
        }
        .how-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(31,119,241,0.08);
          border: 1px solid rgba(31,119,241,0.2);
          color: #1f77f1;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 20px;
          font-family: 'Raleway', sans-serif;
        }
        .how-title {
          font-family: 'Raleway', 'Sora', sans-serif;
          font-size: clamp(2.3rem, 4.2vw, 3.4rem);
          line-height: 1.07;
          letter-spacing: -0.03em;
          color: #0a0f1e;
          margin: 0;
          font-weight: 900;
        }
        .how-title span { color: #1f77f1; }
        .how-sub {
          font-size: 1.05rem;
          line-height: 1.78;
          color: #64748b;
          margin: 18px 0 0;
          font-weight: 500;
          font-family: 'Raleway', sans-serif;
        }
        .how-stat-card {
          border-radius: 26px;
          padding: 28px 30px;
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 20px 50px rgba(31,119,241,0.08), inset 0 1px 0 white;
        }
        .how-stat-label {
          font-size: 0.73rem;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          color: #94a3b8;
          font-weight: 800;
          margin-bottom: 10px;
          font-family: 'Raleway', sans-serif;
        }
        .how-stat-value {
          font-family: 'Raleway', sans-serif;
          font-size: 2.8rem;
          line-height: 1;
          color: #1f77f1;
          font-weight: 900;
        }
        .how-stat-desc {
          margin: 10px 0 0;
          color: #64748b;
          line-height: 1.65;
          font-size: 0.93rem;
          font-weight: 500;
        }

        .persona-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-bottom: 40px;
        }
        .persona-card {
          padding: 28px;
          border-radius: 26px;
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(255,255,255,0.92);
          box-shadow: 0 16px 44px rgba(31,119,241,0.06), inset 0 1px 0 white;
          transition: box-shadow 0.28s;
        }
        .persona-card:hover { box-shadow: 0 28px 64px rgba(31,119,241,0.1), inset 0 1px 0 white; }
        .persona-icon {
          width: 54px; height: 54px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .persona-meta {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          color: #94a3b8;
          font-weight: 800;
          margin-bottom: 8px;
          font-family: 'Raleway', sans-serif;
        }
        .persona-title {
          font-family: 'Raleway', sans-serif;
          font-size: 1.28rem;
          color: #0a0f1e;
          margin: 0 0 10px;
          font-weight: 900;
          letter-spacing: -0.01em;
        }
        .persona-desc {
          color: #64748b;
          line-height: 1.72;
          margin: 0 0 18px;
          font-size: 0.93rem;
          font-weight: 500;
          font-family: 'Raleway', sans-serif;
        }
        .persona-points { display: grid; gap: 10px; }
        .persona-point {
          display: flex; align-items: center; gap: 10px;
          color: #334155; font-size: 0.92rem; font-weight: 600;
          font-family: 'Raleway', sans-serif;
        }

        .process-panel {
          border-radius: 30px;
          padding: 36px 40px;
          background: linear-gradient(135deg, #07101f 0%, #0f1e3a 100%);
          border: 1px solid rgba(31,119,241,0.18);
          box-shadow: 0 32px 80px rgba(7,16,31,0.22), 0 0 0 1px rgba(31,119,241,0.08);
        }
        .process-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 32px;
        }
        .process-kicker {
          font-size: 0.73rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(147,197,253,0.7);
          font-weight: 800;
          margin-bottom: 10px;
          font-family: 'Raleway', sans-serif;
        }
        .process-heading {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          margin: 0;
          line-height: 1.15;
          color: white;
          font-weight: 900;
          letter-spacing: -0.02em;
        }
        .process-copy {
          max-width: 400px;
          color: rgba(226,232,240,0.62);
          line-height: 1.72;
          margin: 0;
          font-size: 0.93rem;
          font-weight: 500;
          font-family: 'Raleway', sans-serif;
        }
        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }
        .process-step {
          padding: 24px;
          border-radius: 22px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          min-height: 180px;
          transition: background 0.25s, border-color 0.25s;
        }
        .process-step:hover {
          background: rgba(31,119,241,0.08);
          border-color: rgba(31,119,241,0.22);
        }
        .process-step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px; height: 42px;
          border-radius: 14px;
          background: rgba(31,119,241,0.18);
          color: #93c5fd;
          font-family: 'Raleway', sans-serif;
          font-size: 0.9rem;
          font-weight: 900;
          margin-bottom: 18px;
        }
        .process-step h4 {
          margin: 0 0 8px;
          font-family: 'Raleway', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: white;
          letter-spacing: -0.01em;
        }
        .process-step p {
          margin: 0;
          color: rgba(226,232,240,0.64);
          line-height: 1.62;
          font-size: 0.9rem;
          font-weight: 500;
          font-family: 'Raleway', sans-serif;
        }
        .how-actions {
          display: flex; gap: 14px; margin-top: 30px; flex-wrap: wrap;
        }
        .how-btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          text-decoration: none; border-radius: 999px;
          padding: 14px 26px; font-weight: 800; font-size: 0.95rem;
          background: linear-gradient(135deg, #1f77f1, #1560cc);
          color: white;
          box-shadow: 0 10px 28px rgba(31,119,241,0.38);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'Raleway', sans-serif;
        }
        .how-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 42px rgba(31,119,241,0.5);
        }
        .how-btn-secondary {
          display: inline-flex; align-items: center; justify-content: center;
          text-decoration: none; border-radius: 999px;
          padding: 14px 26px; font-weight: 700; font-size: 0.95rem;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.8);
          transition: background 0.2s, color 0.2s;
          font-family: 'Raleway', sans-serif;
        }
        .how-btn-secondary:hover { background: rgba(255,255,255,0.12); color: white; }

        @media (max-width: 960px) {
          .how-intro { grid-template-columns: 1fr; }
          .persona-grid { grid-template-columns: 1fr; }
          .process-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .process-top { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 640px) {
          .how-wrap { padding: 84px 16px 96px; }
          .process-panel { padding: 26px 22px; }
          .process-steps { grid-template-columns: 1fr; }
          .how-actions { flex-direction: column; }
          .how-btn-primary, .how-btn-secondary { width: 100%; }
        }
      `}</style>

      <section className="how-wrap" id="how-it-works" aria-labelledby="how-it-works-heading">
        <div className="how-shell">
          <div className="how-intro">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="how-badge">
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1f77f1', boxShadow: '0 0 0 5px rgba(31,119,241,0.15)', display: 'inline-block' }} />
                How it works
              </div>
              <h2 id="how-it-works-heading" className="how-title">
                How <span>Blorbmart</span> works for campus buyers, sellers, and riders
              </h2>
              <p className="how-sub">
                Blorbmart simplifies campus buying and selling with a clear flow: discover products, place an
                order, confirm pickup or delivery, and complete every transaction with confidence.
              </p>
            </motion.div>

            <motion.div
              className="how-stat-card"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="how-stat-label">Campus commerce</div>
              <div className="how-stat-value">Fast.</div>
              <p className="how-stat-desc">
                Built for university speed — buy, sell, and deliver without leaving campus grounds.
              </p>
            </motion.div>
          </div>

          <div className="persona-grid">
            {personas.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.article
                  key={p.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="persona-card"
                >
                  <div className="persona-icon" style={{ background: p.bg }}>
                    <Icon size={26} color={p.accent} variant="Bold" />
                  </div>
                  <div className="persona-meta">{p.label}</div>
                  <h3 className="persona-title">{p.title}</h3>
                  <p className="persona-desc">{p.description}</p>
                  <div className="persona-points">
                    {p.points.map(point => (
                      <div key={point} className="persona-point">
                        <TickCircle size={16} color={p.accent} variant="Bold" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </div>

          <motion.div
            className="process-panel"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="process-top">
              <div>
                <div className="process-kicker">Student buying and selling flow</div>
                <h3 className="process-heading">A simple path from first click to completed campus order</h3>
              </div>
              <p className="process-copy">
                Each step is lightweight so users always know what to do next — buying, managing a store, or delivering.
              </p>
            </div>

            <div className="process-steps">
              {steps.map((step, i) => (
                <motion.article
                  key={step.number}
                  custom={i}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="process-step"
                >
                  <div className="process-step-num">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </motion.article>
              ))}
            </div>

            <div className="how-actions">
              <a href="/#download" className="how-btn-primary">Download App</a>
              <a href="/#sellers" className="how-btn-secondary">Become a Seller</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
