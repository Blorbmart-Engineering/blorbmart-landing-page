import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home2, ShoppingBag, InfoCircle, Shop, Truck, Book1,
  ArrowRight, HambergerMenu, CloseSquare,
} from 'iconsax-react'

const links = [
  { label: 'Home', href: '/#home', icon: Home2 },
  { label: 'Food', href: '/#food', icon: ShoppingBag, highlight: true },
  { label: 'How It Works', href: '/#how-it-works', icon: InfoCircle },
  { label: 'Vendors', href: '/#sellers', icon: Shop },
  { label: 'Riders', href: '/#riders', icon: Truck },
  { label: 'Blog', href: '/blog', icon: Book1 },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        :root { --primary: #1f77f1; --food: #ff5500; --food2: #ffc200; }

        .nb-wrap {
          position: fixed;
          inset: 0 0 auto;
          z-index: 50;
          padding: 10px 16px 0;
          font-family: 'Raleway', 'DM Sans', sans-serif;
        }
        @media (min-width: 640px)  { .nb-wrap { padding: 12px 24px 0; } }
        @media (min-width: 1024px) { .nb-wrap { padding: 14px 32px 0; } }

        .nb-pill {
          max-width: 1400px;
          margin: 0 auto;
          border-radius: 32px;
          border: 1.5px solid rgba(31,119,241,0.18);
          background: rgba(255,255,255,0.94);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          min-height: 130px;
          gap: 16px;
          transition: box-shadow 0.3s, border-color 0.3s, background 0.3s, min-height 0.3s;
        }
        .nb-pill.scrolled {
          background: rgba(255,255,255,0.98);
          border-color: rgba(31,119,241,0.25);
          box-shadow: 0 8px 40px rgba(31,119,241,0.12), 0 1px 0 rgba(255,255,255,0.9);
          min-height: 100px;
        }
        .nb-pill:not(.scrolled) {
          box-shadow: 0 12px 48px rgba(31,119,241,0.1), 0 2px 0 rgba(255,255,255,0.8);
        }

        .nb-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .nb-logo:hover { transform: scale(1.02); }
        .nb-logo img {
          height: 200px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: height 0.3s;
        }
        .nb-pill.scrolled .nb-logo img { height: 160px; }
        @media (max-width: 767px) {
          .nb-logo img { height: 120px; }
          .nb-pill.scrolled .nb-logo img { height: 100px; }
          .nb-pill { min-height: 90px; padding: 0 16px; }
          .nb-pill.scrolled { min-height: 80px; }
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
          padding: 9px 13px;
          border-radius: 14px;
          font-size: 0.875rem;
          font-weight: 700;
          color: #475569;
          text-decoration: none;
          transition: color 0.18s, background 0.18s;
          font-family: 'Raleway', sans-serif;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .nb-link:hover {
          color: #1f77f1;
          background: rgba(31,119,241,0.07);
        }
        .nb-link.food-link { color: #ff5500; }
        .nb-link.food-link:hover { color: #ff5500; background: rgba(255,85,0,0.07); }

        .nb-food-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #ff5500;
          display: inline-block; flex-shrink: 0;
          animation: nbFoodPulse 2.2s ease-in-out infinite;
        }
        @keyframes nbFoodPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,85,0,0.4); }
          50%       { box-shadow: 0 0 0 5px rgba(255,85,0,0); }
        }

        .nb-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nb-sell-link {
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 700;
          color: #475569;
          text-decoration: none;
          transition: color 0.18s, background 0.18s;
          white-space: nowrap;
          font-family: 'Raleway', sans-serif;
        }
        .nb-sell-link:hover { color: #1f77f1; background: rgba(31,119,241,0.07); }

        .nb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 14px;
          background: linear-gradient(135deg, #1f77f1, #1560cc);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 6px 20px rgba(31,119,241,0.35);
          font-family: 'Raleway', sans-serif;
          letter-spacing: 0.01em;
        }
        .nb-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(31,119,241,0.45);
        }

        .nb-hamburger {
          width: 46px; height: 46px;
          border-radius: 14px;
          border: 1.5px solid rgba(31,119,241,0.2);
          background: rgba(31,119,241,0.05);
          color: #475569;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nb-hamburger:hover, .nb-hamburger.open {
          color: #1f77f1;
          background: rgba(31,119,241,0.1);
          border-color: rgba(31,119,241,0.3);
        }

        .nb-mobile {
          overflow: hidden;
          transition: max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.26s;
        }
        .nb-mobile-inner {
          border-top: 1px solid rgba(31,119,241,0.1);
          padding: 14px 4px 18px;
        }
        .nb-mobile-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 16px;
          border-radius: 16px;
          font-size: 1rem;
          font-weight: 700;
          color: #334155;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          font-family: 'Raleway', sans-serif;
          letter-spacing: 0.01em;
        }
        .nb-mobile-link:hover { background: rgba(31,119,241,0.07); color: #1f77f1; }
        .nb-mobile-link.food { color: #ff5500; }
        .nb-mobile-link.food:hover { background: rgba(255,85,0,0.07); color: #ff5500; }
        .nb-mobile-btns {
          display: grid;
          gap: 10px;
          padding: 14px 4px 0;
          border-top: 1px solid rgba(31,119,241,0.08);
          margin-top: 8px;
        }
        .nb-mobile-sell {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          border-radius: 16px;
          border: 1.5px solid rgba(31,119,241,0.2);
          background: rgba(31,119,241,0.04);
          font-size: 0.97rem;
          font-weight: 700;
          color: #1f77f1;
          text-decoration: none;
          transition: background 0.15s;
          font-family: 'Raleway', sans-serif;
        }
        .nb-mobile-sell:hover { background: rgba(31,119,241,0.09); }
        .nb-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 15px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1f77f1, #1560cc);
          font-size: 1rem;
          font-weight: 800;
          color: white;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(31,119,241,0.35);
          font-family: 'Raleway', sans-serif;
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
          <a href="/#home" className="nb-logo" aria-label="Blorbmart home">
            <img src="/fulllogo.png" alt="Blorbmart" fetchPriority="high" />
          </a>

          <nav className="nb-nav" aria-label="Primary navigation">
            {links.map((l) => {
              const Icon = l.icon
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className={`nb-link ${l.highlight ? 'food-link' : ''}`}
                >
                  {l.highlight
                    ? <span className="nb-food-dot" />
                    : <Icon size={15} color="currentColor" variant="Bold" />
                  }
                  {l.label}
                </a>
              )
            })}
          </nav>

          <div className="nb-actions">
            <a href="/#sellers" className="nb-sell-link">Start Selling</a>
            <a href="/#download" className="nb-cta">
              Get the App
              <ArrowRight size={15} color="currentColor" variant="Bold" />
            </a>
          </div>

          <button
            className={`nb-hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open
              ? <CloseSquare size={22} color="currentColor" variant="Bold" />
              : <HambergerMenu size={20} color="currentColor" variant="Bold" />
            }
          </button>
        </div>

        <div
          className="nb-mobile"
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            maxHeight: open ? 700 : 0,
            opacity: open ? 1 : 0,
          }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(28px)',
              borderRadius: '0 0 28px 28px',
              border: '1.5px solid rgba(31,119,241,0.15)',
              borderTop: 'none',
              marginTop: -1,
            }}
          >
            <div className="nb-mobile-inner">
              <nav style={{ display: 'grid' }}>
                {links.map((l) => {
                  const Icon = l.icon
                  return (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`nb-mobile-link ${l.highlight ? 'food' : ''}`}
                    >
                      {l.highlight
                        ? <span className="nb-food-dot" />
                        : <Icon size={18} color="currentColor" variant="Bold" />
                      }
                      {l.label}
                    </a>
                  )
                })}
              </nav>
              <div className="nb-mobile-btns">
                <a href="/#sellers" onClick={() => setOpen(false)} className="nb-mobile-sell">
                  Start Selling on Blorbmart
                </a>
                <a href="/#download" onClick={() => setOpen(false)} className="nb-mobile-cta">
                  Get the App
                  <ArrowRight size={18} color="currentColor" variant="Bold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
