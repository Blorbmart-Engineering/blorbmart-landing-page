import { motion } from 'framer-motion'
import { Headphone, MessageText1, ShieldTick, TickCircle } from 'iconsax-react'

const principles = [
  {
    icon: ShieldTick,
    title: 'Safe & Protected Transactions',
    desc: 'All disputes, returns, and complaints are handled by Blorbmart — not between buyers and sellers directly.',
    color: '#1f77f1',
    bg: 'rgba(31,119,241,0.08)',
  },
  {
    icon: MessageText1,
    title: 'One Channel for Everything',
    desc: 'Whether you\'re a buyer or a seller, every question goes through our support team. We coordinate on your behalf.',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.08)',
  },
  {
    icon: Headphone,
    title: 'Dedicated Student Support',
    desc: 'Our team is available to help with orders, payments, and any campus marketplace issues — fast and reliably.',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
  },
]

const policies = [
  'Buyers never contact sellers directly — all queries go through Blorbmart',
  'Sellers never contact buyers directly — we handle all customer communication',
  'Disputes are mediated by the Blorbmart support team, fairly and quickly',
  'Refund and return requests are submitted to Blorbmart, not the seller',
  'Payment is held securely until order completion is confirmed',
]

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const orbProps = [
  { w: 420, h: 420, x: '-8%', y: '10%', color: 'rgba(31,119,241,0.07)', dur: 12, dx: [0, 30, -15, 0], dy: [0, -25, 40, 0] },
  { w: 320, h: 320, x: '75%', y: '5%',  color: 'rgba(168,85,247,0.06)', dur: 10, dx: [0, -30, 20, 0], dy: [0, 35, -20, 0] },
]

export default function CustomerCareSection() {
  return (
    <>
      <style>{`
        .care-section {
          padding: 100px 24px 112px;
          background: #07101f;
          position: relative;
          overflow: hidden;
          font-family: 'Raleway', 'DM Sans', sans-serif;
        }
        .care-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .care-tag {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(31,119,241,0.12);
          border: 1px solid rgba(31,119,241,0.28);
          color: #93c5fd;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 22px;
          font-family: 'Raleway', sans-serif;
        }
        .care-tag-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #1f77f1;
          box-shadow: 0 0 10px rgba(31,119,241,0.8);
        }
        .care-headline {
          font-family: 'Raleway', 'Sora', sans-serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: white;
          margin: 0 0 18px;
        }
        .care-headline span {
          background: linear-gradient(135deg, #1f77f1 0%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .care-sub {
          font-size: 1.07rem;
          color: rgba(255,255,255,0.52);
          line-height: 1.78;
          max-width: 600px;
          margin: 0 0 56px;
          font-weight: 500;
          font-family: 'Raleway', sans-serif;
        }
        .care-principles {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 48px;
        }
        .care-card {
          border-radius: 24px;
          padding: 28px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.28s, box-shadow 0.28s;
        }
        .care-card:hover {
          border-color: rgba(255,255,255,0.14);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
        }
        .care-icon-wrap {
          width: 54px; height: 54px;
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .care-card-title {
          font-family: 'Raleway', sans-serif;
          font-size: 1.08rem;
          font-weight: 800;
          color: white;
          margin: 0 0 10px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        .care-card-desc {
          font-size: 0.92rem;
          color: rgba(255,255,255,0.48);
          line-height: 1.72;
          margin: 0;
          font-weight: 500;
        }

        .care-policy-panel {
          border-radius: 26px;
          padding: 38px 44px;
          background: rgba(31,119,241,0.06);
          border: 1px solid rgba(31,119,241,0.16);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.85fr);
          gap: 44px;
          align-items: center;
        }
        .care-policy-heading {
          font-family: 'Raleway', sans-serif;
          font-size: 1.6rem;
          font-weight: 900;
          color: white;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
        }
        .care-policy-intro {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.48);
          line-height: 1.7;
          margin: 0 0 30px;
          font-weight: 500;
        }
        .care-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 14px;
          background: linear-gradient(135deg, #1f77f1, #1560cc);
          color: white;
          font-weight: 800;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(31,119,241,0.38);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'Raleway', sans-serif;
          white-space: nowrap;
        }
        .care-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(31,119,241,0.5);
        }
        .care-policy-list {
          display: grid;
          gap: 12px;
        }
        .care-policy-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          font-size: 0.9rem;
          color: rgba(255,255,255,0.62);
          line-height: 1.55;
          font-weight: 500;
          font-family: 'Raleway', sans-serif;
        }

        @media (max-width: 960px) {
          .care-principles { grid-template-columns: 1fr; }
          .care-policy-panel { grid-template-columns: 1fr; gap: 28px; }
        }
        @media (max-width: 640px) {
          .care-section { padding: 80px 16px 96px; }
          .care-policy-panel { padding: 26px 22px; }
          .care-contact-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="care-section" id="customer-care" aria-labelledby="care-heading">
        {orbProps.map((o, i) => (
          <motion.div
            key={i}
            animate={{ x: o.dx, y: o.dy }}
            transition={{ duration: o.dur, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', left: o.x, top: o.y,
              width: o.w, height: o.h, borderRadius: '50%', pointerEvents: 'none',
              background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
              filter: 'blur(80px)',
            }}
          />
        ))}

        <div className="care-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="care-tag">
              <span className="care-tag-dot" />
              Customer Care
            </div>
            <h2 id="care-heading" className="care-headline">
              All support goes <span>through us.</span>
            </h2>
            <p className="care-sub">
              Buyers and sellers never contact each other directly on Blorbmart. Every order, dispute,
              and question is handled by our support team — keeping every transaction safe and fair.
            </p>
          </motion.div>

          <div className="care-principles">
            {principles.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="care-card"
                >
                  <div className="care-icon-wrap" style={{ background: p.bg }}>
                    <Icon size={26} color={p.color} variant="Bold" />
                  </div>
                  <h3 className="care-card-title">{p.title}</h3>
                  <p className="care-card-desc">{p.desc}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="care-policy-panel"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h3 className="care-policy-heading">How Blorbmart protects you</h3>
              <p className="care-policy-intro">
                Our support model ensures that neither buyers nor sellers have to chase each other.
                Blorbmart is the single point of contact for everything — orders, complaints, refunds, and questions.
              </p>
              <a href="mailto:hello@blorbmart.com.ng" className="care-contact-btn">
                <Headphone size={18} color="white" variant="Bold" />
                Contact Support
              </a>
            </div>

            <div className="care-policy-list">
              {policies.map((p, i) => (
                <motion.div
                  key={i}
                  className="care-policy-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TickCircle size={18} color="#1f77f1" variant="Bold" style={{ flexShrink: 0, marginTop: 1 }} />
                  <span>{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
