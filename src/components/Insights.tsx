const articles = [
  {
    source: 'Blorbmart Blog',
    title: 'How campus marketplaces reduce delivery friction for students',
    description: 'A closer look at trust, proximity, and faster fulfilment inside university communities.',
    href: '#',
  },
  {
    source: 'Medium',
    title: 'What student-led commerce platforms can learn from local network effects',
    description: 'Why density, timing, and campus-specific logistics matter more than broad reach.',
    href: '#',
  },
  {
    source: 'Community Notes',
    title: 'Designing rider, seller, and buyer experiences that work together',
    description: 'Product lessons from coordinating supply, delivery, and support in one ecosystem.',
    href: '#',
  },
]

export default function Insights() {
  return (
    <>
      <style>{`
        .insights-section {
          padding: 88px 24px;
          background:
            radial-gradient(circle at 12% 18%, rgba(37,99,235,0.1), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #f6faff 100%);
          font-family: 'DM Sans', sans-serif;
        }

        .insights-shell {
          max-width: 1200px;
          margin: 0 auto;
        }

        .insights-top {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 28px;
        }

        .insights-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.66);
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow: 0 12px 28px rgba(148,163,184,0.14), inset 0 1px 0 rgba(255,255,255,0.95);
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 16px;
        }

        .insights-title {
          margin: 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.9rem);
          color: #0f172a;
          line-height: 1.08;
          letter-spacing: -0.03em;
          max-width: 620px;
        }

        .insights-copy {
          margin: 14px 0 0;
          color: #64748b;
          line-height: 1.75;
          max-width: 620px;
        }

        .insights-note {
          max-width: 320px;
          border-radius: 24px;
          padding: 20px;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(255,255,255,0.82);
          backdrop-filter: blur(16px);
          box-shadow:
            18px 18px 36px rgba(148,163,184,0.14),
            -12px -12px 22px rgba(255,255,255,0.8),
            inset 0 1px 0 rgba(255,255,255,0.96);
          color: #475569;
          line-height: 1.7;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .insight-card {
          border-radius: 28px;
          padding: 22px;
          background: rgba(255,255,255,0.64);
          border: 1px solid rgba(255,255,255,0.84);
          backdrop-filter: blur(18px);
          box-shadow:
            18px 18px 38px rgba(148,163,184,0.14),
            -12px -12px 22px rgba(255,255,255,0.78),
            inset 0 1px 0 rgba(255,255,255,0.96);
        }

        .insight-source {
          display: inline-block;
          margin-bottom: 14px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(37,99,235,0.1);
          color: #2563eb;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .insight-card h3 {
          margin: 0 0 10px;
          font-family: 'Sora', sans-serif;
          font-size: 1.08rem;
          color: #0f172a;
          line-height: 1.4;
        }

        .insight-card p {
          margin: 0 0 18px;
          color: #64748b;
          line-height: 1.7;
        }

        .insight-link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        @media (max-width: 960px) {
          .insights-top,
          .insights-grid {
            grid-template-columns: 1fr;
            display: grid;
          }

          .insights-note {
            max-width: none;
          }
        }

        @media (max-width: 640px) {
          .insights-section {
            padding: 76px 16px;
          }
        }
      `}</style>

      <section className="insights-section" id="insights">
        <div className="insights-shell">
          <div className="insights-top">
            <div>
              <div className="insights-tag">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '999px',
                    background: '#2563eb',
                    boxShadow: '0 0 0 6px rgba(37,99,235,0.12)',
                  }}
                />
                Recent insights
              </div>
              <h2 className="insights-title">Recent blogs, product notes, and ecosystem reads</h2>
              <p className="insights-copy">
                We share updates from Blorbmart and useful reads from platforms like Medium and other community
                sources, so students, sellers, and riders can stay informed.
              </p>
            </div>
            <div className="insights-note">
              A mix of our own articles and selected external pieces helps keep the learning section practical instead
              of feeling like filler.
            </div>
          </div>

          <div className="insights-grid">
            {articles.map((article) => (
              <article key={article.title} className="insight-card">
                <span className="insight-source">{article.source}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.href} className="insight-link">Read article</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
