import { useState } from 'react'

const tabs = [
  { id: 'packaging', label: 'Packaging', icon: '📦' },
  { id: 'prohibited', label: 'Prohibited', icon: '🚫' },
  { id: 'presentation', label: 'Presentation', icon: '📸' },
  { id: 'ratings', label: 'Great Ratings', icon: '⭐' },
  { id: 'sales', label: 'Drive Sales', icon: '🚀' },
  { id: 'customer', label: 'Customer Care', icon: '💬' },
]

const tabContent = {
  packaging: {
    headline: 'Packaging Rules',
    description: 'Good packaging protects your product and your reputation. Buyers remember great first impressions.',
    items: [
      { icon: '📦', title: 'Pack securely', detail: 'Use zip-lock bags, bubble wrap, or sturdy containers. Items that arrive broken lead to bad reviews and refunds.' },
      { icon: '🏷️', title: 'Label clearly', detail: 'Write the buyer\'s name and order number on every package. This prevents mix-ups, especially during multi-order deliveries.' },
      { icon: '🛡️', title: 'Waterproof packaging', detail: 'Use polythene bags for fashion, electronics, and food items to protect against moisture.' },
      { icon: '🍱', title: 'Food packaging', detail: 'All food orders must be sealed. Use disposable containers with tight lids. No open plates or uncovered bowls.' },
      { icon: '📏', title: 'Right-size packaging', detail: 'Don\'t use oversized boxes for small items. It looks unprofessional and can add unnecessary delivery charges.' },
      { icon: '🎁', title: 'Presentation counts', detail: 'A neat, thoughtful package makes buyers feel valued. Consider a simple thank-you note or branded sticker.' },
    ],
  },
  prohibited: {
    headline: 'Prohibited Items',
    description: 'These items cannot be listed, sold, or delivered on Blorbmart. Violations result in immediate account suspension.',
    items: [
      { icon: '💊', title: 'Controlled substances', detail: 'All illegal drugs, prescription medications without authorization, and controlled substances are banned outright.' },
      { icon: '⚔️', title: 'Weapons & dangerous tools', detail: 'Firearms, knives intended as weapons, and any dangerous or threatening items are strictly prohibited.' },
      { icon: '❌', title: 'Counterfeit goods', detail: 'Selling fake versions of branded products (phones, bags, cosmetics) is illegal and will result in account termination.' },
      { icon: '🔞', title: 'Adult content', detail: 'Explicit, adult, or sexually suggestive content of any kind is not allowed on the platform.' },
      { icon: '📡', title: 'Stolen property', detail: 'Listing items that are suspected or confirmed stolen is a criminal offense. We cooperate with campus security.' },
      { icon: '🚬', title: 'Tobacco & alcohol', detail: 'Cigarettes, alcohol, and related products cannot be sold or delivered on Blorbmart, especially on campus.' },
    ],
  },
  presentation: {
    headline: 'Make Your Products Stand Out',
    description: 'How you present your product online directly determines your conversion rate. Great photos and clear descriptions sell.',
    items: [
      { icon: '☀️', title: 'Use natural lighting', detail: 'Take photos near a window during the day. Avoid flash — it washes out details and makes products look cheap.' },
      { icon: '🖼️', title: 'Clean, simple backgrounds', detail: 'Use a plain white or neutral background. A bedsheet or table surface works great. Avoid cluttered scenes.' },
      { icon: '📐', title: 'Multiple angles', detail: 'Show at least 3 angles — front, side, and detail. For fashion, show a flat lay AND someone wearing it.' },
      { icon: '📝', title: 'Honest, clear descriptions', detail: 'Include size, material, condition, and any flaws. Transparency builds trust and reduces return disputes.' },
      { icon: '💰', title: 'Competitive pricing', detail: 'Search for similar products first. Price within 10–15% of market rate. Students are price-conscious.' },
      { icon: '🔍', title: 'Use searchable keywords', detail: 'Include common search terms in your product title. "Nigerian jollof rice Shasha delivery" beats just "rice".' },
    ],
  },
  ratings: {
    headline: 'How to Get Great Ratings',
    description: 'Your rating is your campus reputation. Protect it like your most valuable asset. High-rated sellers earn 3x more.',
    items: [
      { icon: '⚡', title: 'Respond in under 30 minutes', detail: 'Buyers love fast responses. Turn on notifications and reply to every inquiry same-day, even if just to say you\'re checking availability.' },
      { icon: '🎯', title: 'Deliver exactly what you listed', detail: 'Never substitute items without asking the buyer first. "Surprise upgrades" still cause bad reviews if the buyer didn\'t expect them.' },
      { icon: '🕐', title: 'Meet delivery commitments', detail: 'If you say 2 hours, deliver in 2 hours. Update the buyer if you\'re running late — silence is the biggest trust killer.' },
      { icon: '📦', title: 'Pack properly every time', detail: 'A product that arrives broken, leaked, or damaged kills your rating instantly. Never rush packaging.' },
      { icon: '🙏', title: 'Follow up after delivery', detail: 'A short "Did your order arrive okay?" message shows you care and prompts happy buyers to leave reviews.' },
      { icon: '🛠️', title: 'Handle complaints fast', detail: 'If something goes wrong, fix it before the buyer escalates. Offer a partial refund or replacement. One resolved complaint = one saved review.' },
    ],
  },
  sales: {
    headline: 'Drive More Campus Sales',
    description: 'Growing your store on Blorbmart is about visibility and trust. These tactics work specifically for campus markets.',
    items: [
      { icon: '🎉', title: 'Run semester-start promos', detail: 'Students spend heavily in the first 2 weeks of a new semester. Offer 10–15% discounts right when they arrive on campus.' },
      { icon: '📱', title: 'Share your store link everywhere', detail: 'Post your Blorbmart store link on WhatsApp status, class group chats, and Instagram stories. Every share is free advertising.' },
      { icon: '🔁', title: 'Offer bundle deals', detail: 'Bundle related items (e.g., "Pasta + Drink combo" or "Notebook + Pen pack"). Bundles increase order value naturally.' },
      { icon: '👥', title: 'Get referrals from buyers', detail: 'Ask happy buyers to share your store with their friends or roommates. Word-of-mouth is still the most powerful campus marketing.' },
      { icon: '📅', title: 'Keep your store active', detail: 'Stores that add new products regularly appear higher in search results. Post something new at least twice a week.' },
      { icon: '⭐', title: 'Leverage your reviews', detail: 'Screenshot great reviews and post them on WhatsApp/Instagram stories. Social proof is the fastest way to convert new buyers.' },
    ],
  },
  customer: {
    headline: 'Customer Relations',
    description: 'Every student you serve is a potential long-term buyer and word-of-mouth promoter. Treat every order like a reputation opportunity.',
    items: [
      { icon: '💬', title: 'Acknowledge every message', detail: 'Even if you can\'t fulfill an order, say so politely. Ghosting buyers is the fastest way to a 1-star review.' },
      { icon: '📢', title: 'Be honest about stock', detail: 'If an item is out of stock, say so immediately. Keeping someone waiting for an item you don\'t have destroys trust.' },
      { icon: '🤝', title: 'Resolve disputes calmly', detail: 'When a buyer complains, lead with empathy first. "Let me fix this for you" closes more disputes than "that\'s not my fault".' },
      { icon: '🎁', title: 'Reward loyal buyers', detail: 'Offer a small discount or free add-on to repeat buyers. A ₦200 gesture can lock in a ₦10,000/month customer.' },
      { icon: '📊', title: 'Use feedback to improve', detail: 'Every complaint is data. If 3 buyers say your food is too salty, change the recipe. Feedback is free market research.' },
      { icon: '🌟', title: 'Go above & beyond sometimes', detail: 'Adding an extra item, writing a note, or delivering faster than expected turns a one-time buyer into a loyal advocate.' },
    ],
  },
}

export default function SellerRulesSection() {
  const [active, setActive] = useState<keyof typeof tabContent>('packaging')
  const content = tabContent[active]

  return (
    <>
      <style>{`
        .rules-section {
          padding: 100px 24px 112px;
          background: linear-gradient(180deg, #07101f 0%, #0d1827 100%);
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }
        .rules-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 15% 25%, rgba(37,99,235,0.1), transparent 55%),
            radial-gradient(ellipse 50% 35% at 85% 75%, rgba(124,58,237,0.08), transparent 50%);
          pointer-events: none;
        }
        .rules-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .rules-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(37,99,235,0.3);
          color: #93c5fd;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 18px;
          font-family: 'Sora', sans-serif;
        }
        .rules-title {
          margin: 0 0 14px;
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.03em;
          color: white;
        }
        .rules-title span {
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .rules-sub {
          margin: 0 0 48px;
          font-size: 1.05rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          max-width: 600px;
        }
        .rules-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 36px;
        }
        .rules-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 13.5px;
          font-weight: 700;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.55);
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Sora', sans-serif;
        }
        .rules-tab:hover {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.85);
          border-color: rgba(255,255,255,0.16);
        }
        .rules-tab.active {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          border-color: transparent;
          box-shadow: 0 8px 20px rgba(37,99,235,0.35);
        }
        .rules-content {
          border-radius: 32px;
          padding: 40px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 24px 48px rgba(0,0,0,0.25);
        }
        .rules-content-headline {
          font-family: 'Sora', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          margin: 0 0 8px;
        }
        .rules-content-desc {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.65;
          margin: 0 0 32px;
          max-width: 680px;
        }
        .rules-items-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .rules-item {
          border-radius: 22px;
          padding: 22px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .rules-item:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-3px);
        }
        .rules-item-icon {
          font-size: 26px;
          margin-bottom: 12px;
          display: block;
        }
        .rules-item-title {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: white;
          margin-bottom: 7px;
        }
        .rules-item-detail {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          line-height: 1.6;
        }
        .rules-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          padding: 32px 36px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(124,58,237,0.12));
          border: 1px solid rgba(37,99,235,0.2);
          margin-top: 24px;
        }
        .rules-cta-text strong {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: white;
          margin-bottom: 5px;
        }
        .rules-cta-text span {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
        }
        .rules-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          font-weight: 800;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 12px 28px rgba(37,99,235,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
          font-family: 'Sora', sans-serif;
        }
        .rules-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 36px rgba(37,99,235,0.45);
        }
        @media (max-width: 960px) {
          .rules-items-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .rules-section {
            padding: 80px 16px 96px;
          }
          .rules-content {
            padding: 24px 18px;
          }
          .rules-items-grid {
            grid-template-columns: 1fr;
          }
          .rules-cta {
            padding: 24px 20px;
            flex-direction: column;
            align-items: flex-start;
          }
          .rules-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section className="rules-section" id="seller-guide" aria-labelledby="rules-heading">
        <div className="rules-shell">
          <div className="rules-tag">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#60a5fa', display: 'inline-block' }} />
            Seller Playbook
          </div>
          <h2 id="rules-heading" className="rules-title">
            Everything You Need to Know
            <span> as a Blorbmart Seller</span>
          </h2>
          <p className="rules-sub">
            From packaging your orders to driving repeat sales — this is your guide to building a successful campus business on Blorbmart.
          </p>

          <div className="rules-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id as keyof typeof tabContent)}
                className={`rules-tab ${active === tab.id ? 'active' : ''}`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="rules-content">
            <h3 className="rules-content-headline">{content.headline}</h3>
            <p className="rules-content-desc">{content.description}</p>
            <div className="rules-items-grid">
              {content.items.map((item) => (
                <div key={item.title} className="rules-item">
                  <span className="rules-item-icon">{item.icon}</span>
                  <div className="rules-item-title">{item.title}</div>
                  <div className="rules-item-detail">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rules-cta">
            <div className="rules-cta-text">
              <strong>Ready to Start Selling on Blorbmart?</strong>
              <span>Open your store in minutes. Campus buyers are already searching for what you sell.</span>
            </div>
            <a href="/#download" className="rules-cta-btn">
              Open Your Store
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
