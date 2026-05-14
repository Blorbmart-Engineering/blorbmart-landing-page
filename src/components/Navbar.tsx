import { useEffect, useState } from 'react'
import {
  Home2, ShoppingBag, InfoCircle, Shop, Truck, Book1, ArrowRight, HambergerMenu, CloseSquare,
} from 'iconsax-react'

const links = [
  { label: 'Home',         href: '/',              icon: Home2      },
  { label: 'Food',         href: '/#food',         icon: ShoppingBag, highlight: true },
  { label: 'How It Works', href: '/how-it-works',  icon: InfoCircle },
  { label: 'Vendors',      href: '/vendors',        icon: Shop       },
  { label: 'Riders',       href: '/riders',         icon: Truck      },
  { label: 'Blog',         href: '/blog',           icon: Book1      },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .nb-root {
          position: fixed;
          inset: 0 0 auto;
          z-index: 50;
          font-family: 'Raleway', 'DM Sans', sans-serif;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1.5px solid rgba(31,119,241,0.1);
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .nb-root.scrolled {
          box-shadow: 0 4px 28px rgba(31,119,241,0.1);
          border-color: rgba(31,119,241,0.18);
        }

        .nb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        @media (min-width: 1024px) { .nb-inner { padding: 0 40px; } }
        @media (max-width: 639px)  { .nb-inner { padding: 0 16px; height: 72px; } }

        /* ── Logo ── */
        .nb-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }
        .nb-logo:hover { opacity: 0.88; }
        .nb-logo img {
          height: 220px;
          width: auto;
          object-fit: contain;
          display: block;
        }
        @media (max-width: 639px) {
          .nb-logo img { height: 160px; }
        }

        /* ── Desktop nav ── */
        .nb-nav {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nb-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 700;
          color: #4a5568;
          text-decoration: none;
          transition: color 0.16s, background 0.16s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .nb-link:hover { color: #1f77f1; background: rgba(31,119,241,0.07); }
        .nb-link.food-link { color: #ff5500; }
        .nb-link.food-link:hover { background: rgba(255,85,0,0.07); }

        .nb-food-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #ff5500; flex-shrink: 0;
          animation: nbFoodPulse 2.2s ease-in-out infinite;
        }
        @keyframes nbFoodPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,85,0,0.4); }
          50%      { box-shadow: 0 0 0 5px rgba(255,85,0,0); }
        }

        /* ── Desktop actions ── */
        .nb-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .nb-sell {
          padding: 9px 16px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 700;
          color: #4a5568;
          text-decoration: none;
          transition: color 0.16s, background 0.16s;
          white-space: nowrap;
        }
        .nb-sell:hover { color: #1f77f1; background: rgba(31,119,241,0.07); }

        .nb-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 20px;
          border-radius: 12px;
          background: linear-gradient(135deg, #1f77f1, #1560cc);
          color: white;
          font-size: 0.875rem;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(31,119,241,0.32);
          transition: transform 0.18s, box-shadow 0.18s;
          letter-spacing: 0.01em;
        }
        .nb-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(31,119,241,0.44);
        }

        /* ── Hamburger ── */
        .nb-burger {
          width: 42px; height: 42px;
          border-radius: 11px;
          border: 1.5px solid rgba(31,119,241,0.18);
          background: rgba(31,119,241,0.04);
          color: #4a5568;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.18s;
          flex-shrink: 0;
        }
        .nb-burger:hover, .nb-burger.open {
          color: #1f77f1;
          background: rgba(31,119,241,0.09);
          border-color: rgba(31,119,241,0.3);
        }

        /* ── Mobile drawer ── */
        .nb-mobile {
          overflow: hidden;
          transition: max-height 0.36s cubic-bezier(0.4,0,0.2,1), opacity 0.24s;
          background: rgba(255,255,255,0.98);
          border-top: 1px solid rgba(31,119,241,0.08);
        }
        .nb-mobile-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 12px 16px 18px;
        }
        .nb-mobile-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 14px;
          font-size: 0.97rem;
          font-weight: 700;
          color: #334155;
          text-decoration: none;
          transition: background 0.14s, color 0.14s;
          font-family: 'Raleway', sans-serif;
        }
        .nb-mobile-link:hover { background: rgba(31,119,241,0.07); color: #1f77f1; }
        .nb-mobile-link.food   { color: #ff5500; }
        .nb-mobile-link.food:hover { background: rgba(255,85,0,0.07); }

        .nb-mobile-btns {
          display: grid; gap: 10px;
          padding: 14px 0 0;
          border-top: 1px solid rgba(31,119,241,0.07);
          margin-top: 8px;
        }
        .nb-mobile-sell {
          display: flex; align-items: center; justify-content: center;
          padding: 13px; border-radius: 14px;
          border: 1.5px solid rgba(31,119,241,0.2);
          background: rgba(31,119,241,0.04);
          font-size: 0.95rem; font-weight: 700; color: #1f77f1;
          text-decoration: none; transition: background 0.14s;
          font-family: 'Raleway', sans-serif;
        }
        .nb-mobile-sell:hover { background: rgba(31,119,241,0.09); }
        .nb-mobile-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px; border-radius: 14px;
          background: linear-gradient(135deg, #1f77f1, #1560cc);
          font-size: 0.97rem; font-weight: 800; color: white;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(31,119,241,0.32);
          font-family: 'Raleway', sans-serif;
        }

        /* ── Responsive visibility ── */
        @media (min-width: 768px) {
          .nb-nav    { display: flex !important; }
          .nb-actions{ display: flex !important; }
          .nb-burger { display: none  !important; }
          .nb-mobile { display: none  !important; }
        }
        @media (max-width: 767px) {
          .nb-nav    { display: none !important; }
          .nb-actions{ display: none !important; }
          .nb-burger { display: flex !important; }
        }
      `}</style>

      <header className={`nb-root${scrolled ? ' scrolled' : ''}`}>
        <div className="nb-inner">
          {/* Logo */}
          <a href="/" className="nb-logo" aria-label="Blorbmart home">
            <img src="/fulllogo.png" alt="Blorbmart" fetchPriority="high" />
          </a>

          {/* Desktop nav links */}
          <nav className="nb-nav" aria-label="Primary navigation">
            {links.map(l => {
              const Icon = l.icon
              return (
                <a key={l.label} href={l.href} className={`nb-link${l.highlight ? ' food-link' : ''}`}>
                  {l.highlight
                    ? <span className="nb-food-dot" />
                    : <Icon size={15} color="currentColor" variant="Bold" />}
                  {l.label}
                </a>
              )
            })}
          </nav>

          {/* Desktop actions */}
          <div className="nb-actions">
            <a href="/vendors" className="nb-sell">Start Selling</a>
            <a href="/#download" className="nb-cta">
              Get the App
              <ArrowRight size={14} color="currentColor" variant="Bold" />
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`nb-burger${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open
              ? <CloseSquare size={20} color="currentColor" variant="Bold" />
              : <HambergerMenu size={19} color="currentColor" variant="Bold" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className="nb-mobile" style={{ maxHeight: open ? 600 : 0, opacity: open ? 1 : 0 }}>
          <div className="nb-mobile-inner">
            <nav style={{ display: 'grid' }}>
              {links.map(l => {
                const Icon = l.icon
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`nb-mobile-link${l.highlight ? ' food' : ''}`}
                  >
                    {l.highlight
                      ? <span className="nb-food-dot" />
                      : <Icon size={17} color="currentColor" variant="Bold" />}
                    {l.label}
                  </a>
                )
              })}
            </nav>
            <div className="nb-mobile-btns">
              <a href="/vendors" onClick={() => setOpen(false)} className="nb-mobile-sell">
                Start Selling on Blorbmart
              </a>
              <a href="/#download" onClick={() => setOpen(false)} className="nb-mobile-cta">
                Get the App
                <ArrowRight size={17} color="currentColor" variant="Bold" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
