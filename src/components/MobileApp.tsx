const mobileFeatures = [
  {
    title: 'Fast Checkout',
    description: 'Complete orders in seconds with saved payment methods and addresses',
    accent: '#2563eb',
  },
  {
    title: 'Order Tracking',
    description: 'Real-time tracking from store to your doorstep with live updates',
    accent: '#0ea5e9',
  },
  {
    title: 'Rider App Support',
    description: 'Dedicated rider app for seamless delivery management and navigation',
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
          backdrop-filter: blur(16px);
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
          backdrop-filter: blur(18px);
          box-shadow:
            18px 18px 40px rgba(148,163,184,0.14),
            -12px -12px 24px rgba(255,255,255,0.76),
            inset 0 1px 0 rgba(255,255,255,0.96);
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
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), 0 14px 24px rgba(15,23,42,0.14);
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
          backdrop-filter: blur(18px);
          box-shadow:
            22px 22px 46px rgba(148,163,184,0.18),
            -14px -14px 28px rgba(255,255,255,0.82),
            inset 0 1px 0 rgba(255,255,255,0.98);
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
          background:
            linear-gradient(180deg, rgba(15,23,42,0.2), rgba(15,23,42,0.65)),
            url('/2149220667.jpg') center/cover no-repeat;
        }

        .phone-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(7,12,26,0.12) 0%, rgba(7,12,26,0.72) 100%);
          padding: 64px 18px 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .phone-top-card,
        .phone-bottom-card {
          border-radius: 22px;
          padding: 16px;
          background: rgba(255,255,255,0.16);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(14px);
          color: white;
        }

        .phone-top-card strong,
        .phone-bottom-card strong {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 1rem;
          margin-bottom: 6px;
        }

        .phone-top-card span,
        .phone-bottom-card span {
          display: block;
          color: rgba(255,255,255,0.78);
          line-height: 1.55;
          font-size: 0.9rem;
        }

        .phone-metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 14px;
        }

        .phone-metric {
          border-radius: 18px;
          padding: 14px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.16);
          color: white;
        }

        .phone-metric strong {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 1.2rem;
          margin-bottom: 2px;
        }

        .phone-metric span {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.72);
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

      <section className="mobile-section" id="mobile-app">
        <div className="mobile-shell">
          <div>
            <div className="mobile-tag">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '999px',
                  background: '#2563eb',
                  boxShadow: '0 0 0 6px rgba(37,99,235,0.12)',
                }}
              />
              Mobile experience
            </div>
            <h2 className="mobile-title">Get the Mobile App</h2>
            <p className="mobile-copy">
              Take Blorbmart wherever you go. Our mobile app brings the entire campus marketplace to your pocket with
              exclusive features and seamless ordering experience.
            </p>

            <div className="mobile-feature-grid">
              {mobileFeatures.map((feature) => (
                <article key={feature.title} className="mobile-feature-card">
                  <div
                    className="mobile-feature-icon"
                    style={{ background: `linear-gradient(135deg, ${feature.accent}, ${feature.accent}cc)` }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
                  <div className="phone-overlay">
                    <div className="phone-top-card">
                      <strong>Campus orders, anywhere</strong>
                      <span>Search listings, save favourites, and complete checkout with fewer taps.</span>
                    </div>

                    <div>
                      <div className="phone-metrics">
                        <div className="phone-metric">
                          <strong>12k+</strong>
                          <span>students active</span>
                        </div>
                        <div className="phone-metric">
                          <strong>&lt;20m</strong>
                          <span>delivery average</span>
                        </div>
                      </div>

                      <div className="phone-bottom-card" style={{ marginTop: 14 }}>
                        <strong>Live order tracking</strong>
                        <span>See store updates, rider movement, and delivery progress in real time.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
