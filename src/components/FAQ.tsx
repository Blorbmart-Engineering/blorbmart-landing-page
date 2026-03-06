export const faqItems = [
  {
    question: 'What is Blorbmart?',
    answer:
      'Blorbmart is a campus marketplace where students can buy and sell items, order from student sellers, and arrange deliveries inside their university.',
  },
  {
    question: 'How does Blorbmart work?',
    answer:
      'Students sign up, browse campus listings or post products, place orders, and track delivery or pickup directly from the platform.',
  },
  {
    question: 'Who can sell on Blorbmart?',
    answer:
      'Students, campus creators, and university-based small businesses can open a seller account and reach buyers within their campus community.',
  },
  {
    question: 'Is Blorbmart free for students?',
    answer:
      'Yes. Students can join, browse listings, and use the marketplace without paying to create an account.',
  },
  {
    question: 'Can riders earn money on Blorbmart?',
    answer:
      'Yes. Campus riders can accept delivery requests, work around their class schedule, and earn from short on-campus trips.',
  },
]

type FAQProps = {
  items: typeof faqItems
}

export function faqStructuredData(items: typeof faqItems, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteUrl}/#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export default function FAQ({ items }: FAQProps) {
  return (
    <>
      <style>{`
        .faq-section {
          padding: 0 24px 88px;
          background: linear-gradient(180deg, #f6faff 0%, #eef5ff 100%);
          font-family: 'DM Sans', sans-serif;
        }

        .faq-shell {
          max-width: 1200px;
          margin: 0 auto;
        }

        .faq-card {
          border-radius: 34px;
          padding: 32px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow:
            20px 20px 42px rgba(148,163,184,0.16),
            -14px -14px 26px rgba(255,255,255,0.82),
            inset 0 1px 0 rgba(255,255,255,0.98);
        }

        .faq-tag {
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
        }

        .faq-title {
          margin: 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #0f172a;
        }

        .faq-copy {
          margin: 14px 0 28px;
          color: #64748b;
          line-height: 1.75;
          max-width: 720px;
        }

        .faq-list {
          display: grid;
          gap: 14px;
        }

        .faq-item {
          border-radius: 24px;
          padding: 20px 22px;
          background: #fff;
          border: 1px solid #e2e8f0;
        }

        .faq-item h3 {
          margin: 0 0 8px;
          font-family: 'Sora', sans-serif;
          font-size: 1rem;
          color: #0f172a;
        }

        .faq-item p {
          margin: 0;
          color: #64748b;
          line-height: 1.7;
        }

        @media (max-width: 640px) {
          .faq-section {
            padding: 0 16px 76px;
          }

          .faq-card {
            padding: 24px;
          }
        }
      `}</style>

      <section id="faq" className="faq-section" aria-labelledby="faq-heading">
        <div className="faq-shell">
          <div className="faq-card">
            <div className="faq-tag">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '999px',
                  background: '#2563eb',
                }}
              />
              Frequently asked questions
            </div>
            <h2 id="faq-heading" className="faq-title">FAQs about the Blorbmart campus marketplace</h2>
            <p className="faq-copy">
              These answers help students, sellers, and riders understand how the student buy and sell platform works
              before they join.
            </p>
            <div className="faq-list">
              {items.map((item) => (
                <article key={item.question} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
