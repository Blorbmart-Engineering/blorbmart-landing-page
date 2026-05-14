import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/#home' },
    { label: 'Food', href: '/#food', highlight: true },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Vendors', href: '/#sellers' },
    { label: 'Riders', href: '/#riders' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <>
      <style>{`
        .nb-wrap {
          position: fixed;
          inset: 0 0 auto;
          z-index: 50;
          padding: 10px 16px 0;
        }
        @media (min-width: 640px) { .nb-wrap { padding: 12px 24px 0; } }
        @media (min-width: 1024px) { .nb-wrap { padding: 12px 32px 0; } }

        .nb-pill {
          max-width: 1280px;
          margin: 0 auto;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.75);
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          min-height: 88px;
          gap: 16px;
          transition: box-shadow 0.3s, border-color 0.3s, background 0.3s;
        }
        .nb-pill.scrolled {
          background: rgba(255,255,255,0.97);
          border-color: rgba(203,213,225,0.5);
          box-shadow: 0 8px 40px rgba(15,23,42,0.1), 0 1px 0 rgba(255,255,255,0.9);
        }
        .nb-pill:not(.scrolled) {
          box-shadow: 0 8px 32px rgba(15,23,42,0.08);
        }

        .nb-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nb-logo img {
          height: 80px;
          width: auto;
          object-fit: contain;
          display: block;
        }
        @media (max-width: 767px) {
          .nb-logo img { height: 62px; }
          .nb-pill { min-height: 72px; }
        }

        .nb-nav {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nb-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          transition: color 0.18s, background 0.18s;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }
        .nb-link:hover { color: #0f172a; background: rgba(15,23,42,0.05); }
        .nb-link.food-link { color: #ea580c; }
        .nb-link.food-link:hover { color: #f97316; background: rgba(249,115,22,0.07); }

        .nb-food-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f97316;
          display: inline-block;
          flex-shrink: 0;
          animation: nbPulse 2.2s ease-in-out infinite;
        }
        @keyframes nbPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.4); }
          50% { box-shadow: 0 0 0 4px rgba(249,115,22,0); }
        }

        .nb-actions {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nb-sell-link {
          padding: 8px 14px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          transition: color 0.18s, background 0.18s;
          white-space: nowrap;
        }
        .nb-sell-link:hover { color: #0f172a; background: rgba(15,23,42,0.05); }

        .nb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          border-radius: 14px;
          background: #0f172a;
          color: #fff;
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(15,23,42,0.2);
          font-family: 'Sora', sans-serif;
        }
        .nb-cta:hover {
          background: #1e293b;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(15,23,42,0.28);
        }

        .nb-hamburger {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          background: white;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nb-hamburger:hover, .nb-hamburger.open { color: #0f172a; background: #f8fafc; }

        .nb-mobile {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s;
        }
        .nb-mobile-inner {
          border-top: 1px solid #f1f5f9;
          padding: 12px 4px 16px;
        }
        .nb-mobile-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 14px;
          font-size: 0.975rem;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          font-family: 'DM Sans', sans-serif;
        }
        .nb-mobile-link:hover { background: #f8fafc; color: #0f172a; }
        .nb-mobile-link.food { color: #ea580c; }
        .nb-mobile-link.food:hover { background: rgba(249,115,22,0.06); color: #f97316; }
        .nb-mobile-btns {
          display: grid;
          gap: 8px;
          padding: 12px 4px 0;
          border-top: 1px solid #f1f5f9;
          margin-top: 8px;
        }
        .nb-mobile-sell {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 13px;
          border-radius: 14px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          font-size: 0.95rem;
          font-weight: 700;
          color: #334155;
          text-decoration: none;
          transition: background 0.15s;
        }
        .nb-mobile-sell:hover { background: #f1f5f9; }
        .nb-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px;
          border-radius: 14px;
          background: #0f172a;
          font-size: 0.975rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(15,23,42,0.25);
          font-family: 'Sora', sans-serif;
        }

        @media (min-width: 768px) {
          .nb-nav { display: flex !important; }
          .nb-actions { display: flex !important; }
          .nb-hamburger { display: none !important; }
          .nb-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .nb-nav { display: none !important; }
          .nb-actions { display: none !important; }
          .nb-hamburger { display: flex !important; }
        }
      `}</style>

      <header className="nb-wrap">
        <div className={`nb-pill ${scrolled ? 'scrolled' : ''}`}>
          <a href="/#home" className="nb-logo" aria-label="Blorbmart">
            <img src="/fulllogo.png" alt="Blorbmart" fetchPriority="high" />
          </a>

          <nav className="nb-nav" aria-label="Primary navigation">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`nb-link ${l.highlight ? 'food-link' : ''}`}
              >
                {l.highlight && <span className="nb-food-dot" />}
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nb-actions">
            <a href="/#sellers" className="nb-sell-link">Start Selling</a>
            <a href="/#download" className="nb-cta">
              Get the App
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <button
            className={`nb-hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
              {open
                ? <path d="M6 18L18 6M6 6l12 12" strokeLinejoin="round" />
                : <><path d="M4 6h16" /><path d="M4 12h12" /><path d="M4 18h8" /></>}
            </svg>
          </button>
        </div>

        <div
          className="nb-mobile"
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            maxHeight: open ? 600 : 0,
            opacity: open ? 1 : 0,
          }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(24px)',
              borderRadius: '0 0 24px 24px',
              border: '1px solid rgba(203,213,225,0.5)',
              borderTop: 'none',
              marginTop: -1,
            }}
          >
            <div className="nb-mobile-inner">
              <nav style={{ display: 'grid' }}>
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`nb-mobile-link ${l.highlight ? 'food' : ''}`}
                  >
                    {l.highlight && <span className="nb-food-dot" />}
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="nb-mobile-btns">
                <a href="/#sellers" onClick={() => setOpen(false)} className="nb-mobile-sell">
                  Start Selling on Blorbmart
                </a>
                <a href="/#download" onClick={() => setOpen(false)} className="nb-mobile-cta">
                  Get the App
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
