const partners = [
  'Google',
  'Microsoft',
  'Meta',
  'Amazon',
  'Flutterwave',
  'Paystack',
  'Moniepoint',
  'Interswitch',
]

export default function CampusPartners() {
  const scrollingPartners = [...partners, ...partners]

  return (
    <>
      <style>{`
        .partners-section {
          padding: 88px 24px;
          background:
            radial-gradient(circle at 12% 18%, rgba(37,99,235,0.08), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%);
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        .partners-shell {
          max-width: 1200px;
          margin: 0 auto;
        }

        .partners-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(37,99,235,0.08);
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
        }

        .partners-title {
          margin: 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 3.4vw, 2.9rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #0f172a;
          max-width: 760px;
        }

        .partners-copy {
          margin: 14px 0 28px;
          color: #64748b;
          line-height: 1.75;
          max-width: 760px;
        }

        .partners-marquee {
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .partners-track {
          display: flex;
          width: max-content;
          gap: 18px;
          animation: partners-scroll 28s linear infinite;
        }

        .partner-card {
          min-width: 220px;
          border-radius: 24px;
          padding: 22px 24px;
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(226,232,240,0.92);
          box-shadow: 0 16px 34px rgba(148,163,184,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-logo {
          font-family: 'Sora', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0f172a;
        }

        .partner-google { color: #4285f4; }
        .partner-microsoft { color: #2563eb; }
        .partner-meta { color: #0866ff; }
        .partner-amazon { color: #111827; }
        .partner-flutterwave { color: #f59e0b; }
        .partner-paystack { color: #0ea5e9; }
        .partner-moniepoint { color: #16a34a; }
        .partner-interswitch { color: #7c3aed; }

        @keyframes partners-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 9px)); }
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-track {
            animation: none;
          }
        }

        @media (max-width: 640px) {
          .partners-section {
            padding: 76px 16px;
          }

          .partner-card {
            min-width: 180px;
            padding: 18px 20px;
          }
        }
      `}</style>

      <section id="partners" className="partners-section" aria-labelledby="partners-heading">
        <div className="partners-shell">
          <div className="partners-tag">
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '999px',
                background: '#2563eb',
              }}
            />
            Campus partners
          </div>
          <h2 id="partners-heading" className="partners-title">
            Campus partners and platform brands students already know
          </h2>
          <p className="partners-copy">
            Blorbmart is building a campus marketplace designed to work with trusted student communities, university
            ecosystems, and recognizable technology partners. These logo-style placeholders can be replaced with your
            real campus partners later, while the section still adds strong trust and SEO relevance now.
          </p>

          <div className="partners-marquee" aria-label="Campus partner logos">
            <div className="partners-track">
              {scrollingPartners.map((partner, index) => (
                <div key={`${partner}-${index}`} className="partner-card">
                  <span className={`partner-logo partner-${partner.toLowerCase()}`}>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
