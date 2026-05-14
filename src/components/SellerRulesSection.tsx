import { useState } from 'react'

type TabId = 'packaging' | 'prohibited' | 'presentation' | 'ratings' | 'sales' | 'customer'

const tabs: { id: TabId; label: string; icon: JSX.Element }[] = [
  {
    id: 'packaging', label: 'Packaging',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  },
  {
    id: 'prohibited', label: 'Prohibited',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>,
  },
  {
    id: 'presentation', label: 'Presentation',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  },
  {
    id: 'ratings', label: 'Great Ratings',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
  {
    id: 'sales', label: 'Drive Sales',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
  {
    id: 'customer', label: 'Customer Care',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  },
]

type Item = { icon: JSX.Element; title: string; detail: string }
type TabData = { headline: string; description: string; items: Item[] }

const tabContent: Record<TabId, TabData> = {
  packaging: {
    headline: 'Packaging Rules',
    description: 'Good packaging protects your product and your reputation. Buyers remember great first impressions.',
    items: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        title: 'Pack securely',
        detail: 'Use zip-lock bags, bubble wrap, or sturdy containers. Items that arrive broken lead to bad reviews and refunds.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
        title: 'Label clearly',
        detail: 'Write the buyer\'s name and order number on every package. This prevents mix-ups, especially during multi-order deliveries.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
        title: 'Waterproof packaging',
        detail: 'Use polythene bags for fashion, electronics, and food items to protect against moisture.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
        title: 'Food packaging',
        detail: 'All food orders must be sealed. Use disposable containers with tight lids. No open plates or uncovered bowls.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/></svg>,
        title: 'Right-size packaging',
        detail: 'Don\'t use oversized boxes for small items. It looks unprofessional and can add unnecessary delivery charges.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
        title: 'Presentation counts',
        detail: 'A neat, thoughtful package makes buyers feel valued. Consider a simple thank-you note or branded sticker.',
      },
    ],
  },
  prohibited: {
    headline: 'Prohibited Items',
    description: 'These items cannot be listed, sold, or delivered on Blorbmart. Violations result in immediate account suspension.',
    items: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
        title: 'Controlled substances',
        detail: 'All illegal drugs, prescription medications without authorization, and controlled substances are banned outright.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>,
        title: 'Weapons & dangerous tools',
        detail: 'Firearms, knives intended as weapons, and any dangerous or threatening items are strictly prohibited.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
        title: 'Counterfeit goods',
        detail: 'Selling fake versions of branded products (phones, bags, cosmetics) is illegal and will result in account termination.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
        title: 'Adult content',
        detail: 'Explicit, adult, or sexually suggestive content of any kind is not allowed on the platform.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
        title: 'Stolen property',
        detail: 'Listing items that are suspected or confirmed stolen is a criminal offense. We cooperate with campus security.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
        title: 'Tobacco & alcohol',
        detail: 'Cigarettes, alcohol, and related products cannot be sold or delivered on Blorbmart, especially on campus.',
      },
    ],
  },
  presentation: {
    headline: 'Make Your Products Stand Out',
    description: 'How you present your product online directly determines your conversion rate. Great photos and clear descriptions sell.',
    items: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
        title: 'Use natural lighting',
        detail: 'Take photos near a window during the day. Avoid flash — it washes out details and makes products look cheap.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
        title: 'Clean, simple backgrounds',
        detail: 'Use a plain white or neutral background. A bedsheet or table surface works great. Avoid cluttered scenes.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
        title: 'Multiple angles',
        detail: 'Show at least 3 angles — front, side, and detail. For fashion, show a flat lay AND someone wearing it.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
        title: 'Honest, clear descriptions',
        detail: 'Include size, material, condition, and any flaws. Transparency builds trust and reduces return disputes.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
        title: 'Competitive pricing',
        detail: 'Search for similar products first. Price within 10–15% of market rate. Students are price-conscious.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
        title: 'Use searchable keywords',
        detail: 'Include common search terms in your product title. "Nigerian jollof rice Shasha delivery" beats just "rice".',
      },
    ],
  },
  ratings: {
    headline: 'How to Get Great Ratings',
    description: 'Your rating is your campus reputation. Protect it like your most valuable asset. High-rated sellers earn 3× more.',
    items: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
        title: 'Respond in under 30 minutes',
        detail: 'Buyers love fast responses. Turn on notifications and reply to every inquiry same-day, even if just to say you\'re checking availability.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
        title: 'Deliver exactly what you listed',
        detail: 'Never substitute items without asking the buyer first. "Surprise upgrades" still cause bad reviews if the buyer didn\'t expect them.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
        title: 'Meet delivery commitments',
        detail: 'If you say 2 hours, deliver in 2 hours. Update the buyer if you\'re running late — silence is the biggest trust killer.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
        title: 'Pack properly every time',
        detail: 'A product that arrives broken, leaked, or damaged kills your rating instantly. Never rush packaging.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>,
        title: 'Follow up after delivery',
        detail: 'A short "Did your order arrive okay?" message shows you care and prompts happy buyers to leave reviews.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
        title: 'Handle complaints fast',
        detail: 'If something goes wrong, fix it before the buyer escalates. Offer a partial refund or replacement. One resolved complaint = one saved review.',
      },
    ],
  },
  sales: {
    headline: 'Drive More Campus Sales',
    description: 'Growing your store on Blorbmart is about visibility and trust. These tactics work specifically for campus markets.',
    items: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
        title: 'Run semester-start promos',
        detail: 'Students spend heavily in the first 2 weeks of a new semester. Offer 10–15% discounts right when they arrive on campus.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
        title: 'Share your store link everywhere',
        detail: 'Post your Blorbmart store link on WhatsApp status, class group chats, and Instagram stories. Every share is free advertising.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><line x1="16.5" y1="9.4" x2="7.55" y2="4.24"/></svg>,
        title: 'Offer bundle deals',
        detail: 'Bundle related items (e.g., "Pasta + Drink combo" or "Notebook + Pen pack"). Bundles increase order value naturally.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
        title: 'Get referrals from buyers',
        detail: 'Ask happy buyers to share your store with their friends or roommates. Word-of-mouth is still the most powerful campus marketing.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
        title: 'Keep your store active',
        detail: 'Stores that add new products regularly appear higher in search results. Post something new at least twice a week.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
        title: 'Leverage your reviews',
        detail: 'Screenshot great reviews and post them on WhatsApp/Instagram stories. Social proof is the fastest way to convert new buyers.',
      },
    ],
  },
  customer: {
    headline: 'Customer Relations',
    description: 'Every student you serve is a potential long-term buyer and word-of-mouth promoter. Treat every order like a reputation opportunity.',
    items: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
        title: 'Acknowledge every message',
        detail: 'Even if you can\'t fulfill an order, say so politely. Ghosting buyers is the fastest way to a 1-star review.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
        title: 'Be honest about stock',
        detail: 'If an item is out of stock, say so immediately. Keeping someone waiting for an item you don\'t have destroys trust.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
        title: 'Resolve disputes calmly',
        detail: 'When a buyer complains, lead with empathy first. "Let me fix this for you" closes more disputes than "that\'s not my fault".',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
        title: 'Reward loyal buyers',
        detail: 'Offer a small discount or free add-on to repeat buyers. A ₦200 gesture can lock in a ₦10,000/month customer.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
        title: 'Use feedback to improve',
        detail: 'Every complaint is data. If 3 buyers say your food is too salty, change the recipe. Feedback is free market research.',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
        title: 'Go above & beyond sometimes',
        detail: 'Adding an extra item, writing a note, or delivering faster than expected turns a one-time buyer into a loyal advocate.',
      },
    ],
  },
}

export default function SellerRulesSection() {
  const [active, setActive] = useState<TabId>('packaging')
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
        .rules-tab svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
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
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          color: rgba(255,255,255,0.75);
        }
        .rules-item-icon svg {
          width: 20px;
          height: 20px;
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
          .rules-items-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .rules-section { padding: 80px 16px 96px; }
          .rules-content { padding: 24px 18px; }
          .rules-items-grid { grid-template-columns: 1fr; }
          .rules-cta { padding: 24px 20px; flex-direction: column; align-items: flex-start; }
          .rules-cta-btn { width: 100%; justify-content: center; }
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
                onClick={() => setActive(tab.id)}
                className={`rules-tab ${active === tab.id ? 'active' : ''}`}
              >
                {tab.icon}
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
                  <div className="rules-item-icon">{item.icon}</div>
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
