const mobileFeatures = [
  {
    title: 'Fast student checkout',
    description: 'Complete campus orders in seconds with a cleaner buying flow.',
    accent: '#2563eb',
  },
  {
    title: 'Live order tracking',
    description: 'Students can follow sellers and riders from checkout to delivery.',
    accent: '#0ea5e9',
  },
  {
    title: 'Built for campus delivery',
    description: 'The app supports riders, short routes, and student-friendly logistics.',
    accent: '#7c3aed',
  },
]

export default function MobileApp() {
  return (
    <>
      <style>{`
        .mobile-section {
          padding: 96px 24px;
          background:
            radial-gradient(circle at 15% 20%, rgba(37,99,235,0.12), transparent 30%),
            radial-gradient(circle at 85% 10%, rgba(124,58,237,0.1), transparent 24%),
            linear-gradient(180deg, #f4f8ff 0%, #eef4ff 45%, #ffffff 100%);
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }
        .mobile-shell {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.9fr);
          gap: 28px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .mobile-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.64);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 12px 28px rgba(148,163,184,0.16), inset 0 1px 0 rgba(255,255,255,0.95);
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 18px;
        }
        .mobile-title {
          margin: 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.3rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #0f172a;
          max-width: 620px;
        }
        .mobile-copy {
          margin: 18px 0 0;
          color: #64748b;
          font-size: 1.05rem;
          line-height: 1.75;
          max-width: 620px;
        }
        .mobile-feature-grid {
          display: grid;
          gap: 16px;
          margin-top: 28px;
        }
        .mobile-feature-card {
          border-radius: 24px;
          padding: 20px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow: 18px 18px 40px rgba(148,163,184,0.14), -12px -12px 24px rgba(255,255,255,0.76), inset 0 1px 0 rgba(255,255,255,0.96);
        }
        .mobile-feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 14px;
        }
        .mobile-feature-card h3 {
          margin: 0 0 8px;
          font-family: 'Sora', sans-serif;
          font-size: 1.05rem;
          color: #0f172a;
        }
        .mobile-feature-card p {
          margin: 0;
          color: #64748b;
          line-height: 1.7;
        }
        .mobile-downloads {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }
        .store-btn {
          min-width: 180px;
          border-radius: 20px;
          padding: 14px 18px;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          text-decoration: none;
          box-shadow: 0 18px 36px rgba(15,23,42,0.18);
        }
        .store-btn small {
          display: block;
          font-size: 0.76rem;
          color: rgba(255,255,255,0.7);
          margin-bottom: 2px;
        }
        .store-btn strong {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 1rem;
        }
        .phone-stage {
          display: flex;
          justify-content: center;
        }
        .phone-shell {
          position: relative;
          width: min(100%, 430px);
          padding: 28px;
          border-radius: 40px;
          background: rgba(255,255,255,0.56);
          border: 1px solid rgba(255,255,255,0.84);
          box-shadow: 22px 22px 46px rgba(148,163,184,0.18), -14px -14px 28px rgba(255,255,255,0.82), inset 0 1px 0 rgba(255,255,255,0.98);
        }
        .phone-device {
          position: relative;
          margin: 0 auto;
          width: 290px;
          height: 580px;
          border-radius: 42px;
          background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
          padding: 14px;
          box-shadow: 0 24px 60px rgba(15,23,42,0.28);
        }
        .phone-notch {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 110px;
          height: 24px;
          border-radius: 999px;
          background: #020617;
          z-index: 3;
        }
        .phone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 32px;
          overflow: hidden;
          background: #0f172a;
        }
        .phone-screen img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }
        .phone-screen::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,23,42,0.04) 0%, rgba(15,23,42,0.16) 100%);
          pointer-events: none;
        }
        @media (max-width: 960px) {
          .mobile-shell {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .mobile-section {
            padding: 80px 16px;
          }
          .phone-shell {
            padding: 18px;
          }
          .phone-device {
            width: 100%;
            max-width: 290px;
            height: 540px;
          }
          .store-btn {
            flex: 1 1 100%;
          }
        }
      `}</style>

      <section className="mobile-section" id="download" aria-labelledby="download-heading">
        <div className="mobile-shell">
          <div>
            <div className="mobile-tag">
              <span style={{ width: 8, height: 8, borderRadius: '999px', background: '#2563eb', boxShadow: '0 0 0 6px rgba(37,99,235,0.12)' }} />
              Download app
            </div>
            <h2 id="download-heading" className="mobile-title">Download the Blorbmart app for campus buying and selling</h2>
            <p className="mobile-copy">
              The Blorbmart app helps students browse listings, order from campus sellers, and track rider deliveries
              from anywhere on campus. It is the fastest way to use the student marketplace day to day.
            </p>

            <div className="mobile-feature-grid">
              {mobileFeatures.map((feature) => (
                <article key={feature.title} className="mobile-feature-card">
                  <div className="mobile-feature-icon" style={{ background: `linear-gradient(135deg, ${feature.accent}, ${feature.accent}cc)` }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>

            <div className="mobile-downloads">
              <a href="#" className="store-btn">
                <small>Download on the</small>
                <strong>App Store</strong>
              </a>
              <a href="#" className="store-btn">
                <small>Get it on</small>
                <strong>Google Play</strong>
              </a>
            </div>
          </div>

          <div className="phone-stage">
            <div className="phone-shell">
              <div className="phone-device">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <img
                    src="/appscreenshot.jpg"
                    alt="Blorbmart app screenshot inside mobile phone frame"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
