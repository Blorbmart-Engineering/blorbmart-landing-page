export default function Newsletter() {
  return (
    <>
      <style>{`
        .newsletter-section {
          padding: 0 24px 88px;
          background: linear-gradient(180deg, #f6faff 0%, #eef5ff 100%);
          font-family: 'DM Sans', sans-serif;
        }

        .newsletter-shell {
          max-width: 1200px;
          margin: 0 auto;
        }

        .newsletter-card {
          border-radius: 34px;
          padding: 32px;
          background: rgba(255,255,255,0.68);
          border: 1px solid rgba(255,255,255,0.86);
          backdrop-filter: blur(18px);
          box-shadow:
            20px 20px 42px rgba(148,163,184,0.16),
            -14px -14px 26px rgba(255,255,255,0.82),
            inset 0 1px 0 rgba(255,255,255,0.98);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
          gap: 24px;
          align-items: center;
        }

        .newsletter-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(37,99,235,0.1);
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
          width: fit-content;
        }

        .newsletter-card h2 {
          margin: 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.9rem, 3vw, 2.7rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #0f172a;
        }

        .newsletter-card p {
          margin: 14px 0 0;
          color: #64748b;
          line-height: 1.75;
          max-width: 560px;
        }

        .newsletter-form {
          display: grid;
          gap: 14px;
        }

        .newsletter-input {
          width: 100%;
          border: 1px solid rgba(148,163,184,0.22);
          border-radius: 18px;
          padding: 15px 16px;
          background: rgba(255,255,255,0.92);
          color: #0f172a;
          font-size: 0.98rem;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.98), 0 12px 24px rgba(148,163,184,0.12);
        }

        .newsletter-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 18px;
          padding: 15px 20px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          font-weight: 700;
          box-shadow: 0 16px 32px rgba(37,99,235,0.24);
          cursor: pointer;
        }

        .newsletter-meta {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        @media (max-width: 960px) {
          .newsletter-card {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .newsletter-section {
            padding: 0 16px 76px;
          }

          .newsletter-card {
            padding: 24px;
          }
        }
      `}</style>

      <section className="newsletter-section" id="newsletter">
        <div className="newsletter-shell">
          <div className="newsletter-card">
            <div>
              <div className="newsletter-tag">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '999px',
                    background: '#2563eb',
                  }}
                />
                Newsletter
              </div>
              <h2>Subscribe for campus commerce updates</h2>
              <p>
                Get product updates, seller tips, rider opportunities, and fresh blog posts delivered to your inbox.
              </p>
            </div>

            <form className="newsletter-form">
              <input className="newsletter-input" type="email" placeholder="Enter your email address" />
              <button className="newsletter-btn" type="submit">Subscribe</button>
              <div className="newsletter-meta">No spam. Just useful updates from Blorbmart and the campus ecosystem.</div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
