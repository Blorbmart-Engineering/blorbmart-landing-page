import { motion } from 'framer-motion'

export default function BackedBySection() {
  return (
    <>
      <style>{`
        .backed-section {
          background: #f8faff;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
          font-family: 'Raleway', 'DM Sans', sans-serif;
        }
        .backed-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 50% 50%, rgba(31,119,241,0.05), transparent 70%);
          pointer-events: none;
        }
        .backed-shell {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .backed-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 36px;
          font-family: 'Raleway', sans-serif;
        }
        .backed-kicker::before,
        .backed-kicker::after {
          content: '';
          display: block;
          height: 1px;
          width: 48px;
          background: linear-gradient(to right, transparent, rgba(148,163,184,0.5));
        }
        .backed-kicker::after {
          background: linear-gradient(to left, transparent, rgba(148,163,184,0.5));
        }
        .backed-logo-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 32px 56px;
          border-radius: 28px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(31,119,241,0.12);
          box-shadow:
            0 24px 60px rgba(31,119,241,0.08),
            0 4px 16px rgba(31,119,241,0.06),
            inset 0 1px 0 rgba(255,255,255,1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .backed-logo-wrap:hover {
          transform: translateY(-4px);
          box-shadow:
            0 36px 80px rgba(31,119,241,0.14),
            0 8px 24px rgba(31,119,241,0.1),
            inset 0 1px 0 rgba(255,255,255,1);
        }
        .backed-logo-wrap img {
          height: 72px;
          width: auto;
          object-fit: contain;
          display: block;
        }
        .backed-tagline {
          margin-top: 28px;
          font-size: 0.9rem;
          color: #94a3b8;
          font-weight: 500;
          line-height: 1.6;
          font-family: 'Raleway', sans-serif;
        }
        @media (max-width: 640px) {
          .backed-section { padding: 60px 16px; }
          .backed-logo-wrap { padding: 24px 36px; }
          .backed-logo-wrap img { height: 52px; }
        }
      `}</style>

      <section className="backed-section" aria-label="Backed by">
        <div className="backed-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="backed-kicker">Backed by</div>

            <motion.div
              className="backed-logo-wrap"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03 }}
            >
              <img src="/brivent.png" alt="Brivent — backer of Blorbmart" loading="lazy" decoding="async" />
            </motion.div>

            <p className="backed-tagline">
              Blorbmart is proudly supported by Brivent — building the future of campus commerce in Nigeria.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
