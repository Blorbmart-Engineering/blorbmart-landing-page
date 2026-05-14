import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/#home' },
    { label: 'Food', href: '/#food' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Vendors', href: '/#sellers' },
    { label: 'Riders', href: '/#riders' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <>
      <style>{`
        .nav-pill {
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,0.8);
          transition: box-shadow 0.3s, background 0.3s, border-color 0.3s;
        }
        .nav-pill.nav-scrolled {
          background: rgba(255,255,255,0.96);
          border-color: rgba(148,163,184,0.25);
          box-shadow: 0 20px 48px rgba(15,23,42,0.13), inset 0 1px 0 rgba(255,255,255,0.95);
        }
        .nav-pill:not(.nav-scrolled) {
          background: rgba(255,255,255,0.90);
          box-shadow: 0 14px 36px rgba(15,23,42,0.10), inset 0 1px 0 rgba(255,255,255,0.95);
        }
        .nav-link {
          position: relative;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: #2563eb;
          background: rgba(37,99,235,0.07);
        }
        .nav-link-food {
          color: #ea580c;
        }
        .nav-link-food:hover {
          color: #f97316;
          background: rgba(249,115,22,0.08);
        }
        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(37,99,235,0.32);
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 28px rgba(37,99,235,0.42);
        }
        .nav-sell-link {
          font-size: 0.875rem;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 999px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .nav-sell-link:hover {
          color: #2563eb;
          background: rgba(37,99,235,0.07);
        }
        .nav-mobile-link {
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 18px;
          padding: 13px 16px;
          font-size: 0.975rem;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .nav-mobile-link:hover {
          color: #2563eb;
          background: rgba(37,99,235,0.07);
        }
        .nav-mobile-food {
          color: #ea580c;
        }
        .nav-mobile-food:hover {
          color: #f97316;
          background: rgba(249,115,22,0.08);
        }
        .nav-food-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f97316;
          display: inline-block;
          box-shadow: 0 0 0 3px rgba(249,115,22,0.2);
          animation: foodPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes foodPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(249,115,22,0.2); }
          50% { box-shadow: 0 0 0 6px rgba(249,115,22,0.05); }
        }
        .mobile-menu-enter {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease;
        }
      `}</style>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className={`nav-pill ${scrolled ? 'nav-scrolled' : ''}`} style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 76, padding: '0 20px' }}>

              {/* Logo */}
              <a href="/#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }} aria-label="Blorbmart home">
                <img
                  src="/fulllogo.png"
                  alt="Blorbmart"
                  style={{ height: 64, width: 'auto', objectFit: 'contain', display: 'block' }}
                  fetchPriority="high"
                />
              </a>

              {/* Desktop nav */}
              <nav style={{ display: 'none', alignItems: 'center', gap: 2 }} className="desktop-nav" aria-label="Primary navigation">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className={`nav-link ${l.label === 'Food' ? 'nav-link-food' : ''}`}
                  >
                    {l.label === 'Food' && <span className="nav-food-dot" style={{ marginRight: 5 }} />}
                    {l.label}
                  </a>
                ))}
              </nav>

              {/* Desktop CTAs */}
              <div style={{ display: 'none', alignItems: 'center', gap: 4 }} className="desktop-ctas">
                <a href="/#sellers" className="nav-sell-link">Sell on Blorbmart</a>
                <a href="/#download" className="nav-cta">
                  Download App
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 6 }}>
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Hamburger */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="hamburger-btn"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  border: '1.5px solid #e2e8f0',
                  background: open ? '#f1f5f9' : 'white',
                  color: open ? '#2563eb' : '#475569',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  {open
                    ? <path d="M6 18L18 6M6 6l12 12" strokeLinejoin="round" />
                    : <><path d="M4 6h16" /><path d="M4 12h12" /><path d="M4 18h8" /></>
                  }
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            <div className="mobile-menu-enter" style={{ maxHeight: open ? 600 : 0, opacity: open ? 1 : 0 }}>
              <div style={{ borderTop: '1px solid rgba(226,232,240,0.7)', padding: '12px 16px 16px' }}>
                <nav style={{ display: 'grid', gap: 2, marginBottom: 12 }}>
                  {links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`nav-mobile-link ${l.label === 'Food' ? 'nav-mobile-food' : ''}`}
                    >
                      {l.label === 'Food' && <span className="nav-food-dot" />}
                      {l.label}
                    </a>
                  ))}
                </nav>
                <div style={{ display: 'grid', gap: 10, borderTop: '1px solid #f1f5f9', paddingTop: 14 }}>
                  <a
                    href="/#sellers"
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: 18, border: '1.5px solid #dbeafe', background: '#eff6ff',
                      padding: '13px', fontWeight: 700, fontSize: '0.95rem', color: '#2563eb',
                      textDecoration: 'none',
                    }}
                  >
                    Sell on Blorbmart
                  </a>
                  <a
                    href="/#download"
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      borderRadius: 18, background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                      padding: '14px', fontWeight: 800, fontSize: '0.975rem', color: 'white',
                      textDecoration: 'none', boxShadow: '0 8px 20px rgba(37,99,235,0.3)',
                    }}
                  >
                    Download App
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop/Mobile visibility helpers via CSS */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-ctas { display: flex !important; }
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-ctas { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
