export const faqItems = [
  {
    question: 'What is Blorbmart?',
    answer:
      'Blorbmart is a campus marketplace for UNIOSUN students — buy and sell everyday products, order food from downtown restaurants, and get fast delivery through Campus Runs, our official logistics partner.',
  },
  {
    question: 'Can I order food on Blorbmart?',
    answer:
      'Yes! Blorbmart now delivers food from popular UNIOSUN-area restaurants including Mijas Pasta, Tasty Garnished Kitchen, Campus Bites, and more. Orders are delivered to your hostel, class area, or anywhere in our delivery zones — Shasha, Nipco, URP Area, Cele, Highflyer, and beyond.',
  },
  {
    question: 'How does Blorbmart work?',
    answer:
      'Download the app, browse campus listings or restaurant menus, place your order, and track delivery in real time. Campus Runs riders handle delivery across UNIOSUN and surrounding areas in 15–35 minutes.',
  },
  {
    question: 'Who can sell on Blorbmart?',
    answer:
      'Any UNIOSUN student, campus-based vendor, or university-area business can open a seller account. We support fashion, beauty, perfumes, stationery, electronics, accessories, health products, food, and more.',
  },
  {
    question: 'What commission does Blorbmart charge vendors?',
    answer:
      'Commissions range from 7% (Food & Drinks) to 15% (Electronics). The platform average across all 8 categories is 11%. Food & Drinks has the lowest rate to protect vendor margins. See our full commission structure on this page.',
  },
  {
    question: 'Who delivers my order?',
    answer:
      'Campus Runs is our official logistics partner. Their verified student riders handle all deliveries within UNIOSUN and surrounding zones including Shasha, Link Sensation, Transformer Junction, Shogbo, Nipco, and URP Area.',
  },
  {
    question: 'Is Blorbmart free for students?',
    answer:
      'Buyers can join and shop for free — no subscription needed. Sellers pay a commission only when they make a sale. There are no setup fees or listing fees.',
  },
  {
    question: 'Can I earn money as a rider on Blorbmart?',
    answer:
      'Yes. Apply through Campus Runs to join the rider network. You\'ll earn per completed delivery, work around your class schedule, and stay within familiar campus routes. Download the app to apply.',
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
          padding: 0 24px 96px;
          background: linear-gradient(180deg, #f6faff 0%, #eef5ff 100%);
          font-family: 'DM Sans', sans-serif;
        }
        .faq-shell {
          max-width: 1200px;
          margin: 0 auto;
        }
        .faq-card {
          border-radius: 36px;
          padding: 40px;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(255,255,255,0.88);
          box-shadow:
            22px 22px 46px rgba(148,163,184,0.16),
            -14px -14px 28px rgba(255,255,255,0.82),
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
          font-family: 'Sora', sans-serif;
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
          margin: 14px 0 32px;
          color: #64748b;
          line-height: 1.75;
          max-width: 720px;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .faq-item {
          border-radius: 22px;
          padding: 22px 24px;
          background: #fff;
          border: 1px solid #e2e8f0;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .faq-item:hover {
          border-color: #bfdbfe;
          box-shadow: 0 8px 20px rgba(37,99,235,0.07);
        }
        .faq-item h3 {
          margin: 0 0 8px;
          font-family: 'Sora', sans-serif;
          font-size: 1rem;
          color: #0f172a;
          line-height: 1.4;
        }
        .faq-item p {
          margin: 0;
          color: #64748b;
          line-height: 1.7;
          font-size: 0.93rem;
        }
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .faq-section {
            padding: 0 16px 76px;
          }
          .faq-card {
            padding: 26px 20px;
          }
        }
      `}</style>

      <section id="faq" className="faq-section" aria-labelledby="faq-heading">
        <div className="faq-shell">
          <div className="faq-card">
            <div className="faq-tag">
              <span style={{ width: 8, height: 8, borderRadius: '999px', background: '#2563eb', display: 'inline-block' }} />
              Frequently asked questions
            </div>
            <h2 id="faq-heading" className="faq-title">Got questions about Blorbmart?</h2>
            <p className="faq-copy">
              Everything students, sellers, and riders need to know about Nigeria's most student-focused campus marketplace.
            </p>
            <div className="faq-grid">
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
