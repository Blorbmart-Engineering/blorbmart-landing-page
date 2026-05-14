const footerLinks = [
  {
    title: 'Platform',
    links: [
      { label: 'Home',         href: '/'              },
      { label: 'Order Food',   href: '/#food'         },
      { label: 'How It Works', href: '/how-it-works'  },
      { label: 'Download App', href: '/#download'     },
    ],
  },
  {
    title: 'For Sellers',
    links: [
      { label: 'Vendor Overview',     href: '/vendors'  },
      { label: 'Commission Structure', href: '/vendors' },
      { label: 'Seller Playbook',     href: '/vendors'  },
      { label: 'Terms & Conditions',  href: '/terms'    },
      { label: 'Blog',                href: '/blog'     },
    ],
  },
  {
    title: 'Logistics',
    links: [
      { label: 'Campus Runs (Riders)', href: '/riders'                       },
      { label: 'Delivery Zones',       href: '/riders'                       },
      { label: 'FAQ',                  href: '/#faq'                         },
      { label: 'Contact Support',      href: 'mailto:hello@blorbmart.com.ng' },
    ],
  },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/blorbmart_uniosun/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    hoverColor: '#e1306c',
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/Blorbmart',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    hoverColor: '#ffffff',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/blorbmart',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    hoverColor: '#0077b5',
  },
]

const deliveryAreas = [
  'Shasha', 'Link Sensation', 'Transformer Jct',
  'Shogbo', 'Nipco', 'URP Area', 'Cele', 'Highflyer Area',
]

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-section {
          background: linear-gradient(180deg, #07101f 0%, #020617 100%);
          color: white;
          padding: 80px 24px 32px;
          font-family: 'Raleway', 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .footer-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 12% 18%, rgba(31,119,241,0.14), transparent 28%),
            radial-gradient(circle at 88% 12%, rgba(249,115,22,0.08), transparent 24%);
          pointer-events: none;
        }
        .footer-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .footer-top {
          display: grid;
          grid-template-columns: minmax(280px, 1.3fr) repeat(3, minmax(140px, 1fr));
          gap: 32px;
          margin-bottom: 48px;
        }
        .footer-brand img {
          height: 60px;
          width: auto;
          object-fit: contain;
          display: block;
          margin-bottom: 16px;
        }
        .footer-brand p {
          margin: 0 0 20px;
          color: rgba(226,232,240,0.65);
          line-height: 1.75;
          max-width: 320px;
          font-size: 0.93rem;
        }
        .footer-contact a {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 8px;
          transition: color 0.2s;
        }
        .footer-contact a:hover {
          color: white;
        }
        .footer-delivery-zones {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 18px;
        }
        .footer-zone {
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.18);
          font-size: 11px;
          font-weight: 600;
          color: #fb923c;
        }
        .footer-column h3 {
          margin: 0 0 18px;
          font-family: 'Raleway', sans-serif;
          font-size: 0.95rem;
          color: white;
          font-weight: 800;
          letter-spacing: 0.04em;
        }
        .footer-links {
          display: grid;
          gap: 12px;
        }
        .footer-links a {
          color: rgba(226,232,240,0.65);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
          font-family: 'Raleway', sans-serif;
        }
        .footer-links a:hover {
          color: white;
        }
        .footer-divider {
          height: 1px;
          background: rgba(148,163,184,0.14);
          margin-bottom: 28px;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-bottom-copy {
          color: rgba(226,232,240,0.5);
          font-size: 0.88rem;
          font-family: 'Raleway', sans-serif;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
        }
        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: background 0.22s, color 0.22s, border-color 0.22s, transform 0.22s;
        }
        .footer-social-btn:hover {
          background: rgba(255,255,255,0.14);
          color: white;
          border-color: rgba(255,255,255,0.22);
          transform: translateY(-2px);
        }
        .footer-social-btn.instagram:hover {
          background: rgba(225,48,108,0.18);
          border-color: rgba(225,48,108,0.35);
          color: #e1306c;
        }
        .footer-social-btn.linkedin:hover {
          background: rgba(0,119,181,0.18);
          border-color: rgba(0,119,181,0.35);
          color: #0077b5;
        }
        .footer-partner-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.2);
          margin-bottom: 16px;
        }
        .footer-partner-badge span {
          font-size: 12px;
          font-weight: 700;
          color: #fb923c;
          font-family: 'Raleway', sans-serif;
        }
        @media (max-width: 1100px) {
          .footer-top {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .footer-section {
            padding: 64px 16px 28px;
          }
          .footer-top {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="footer-section">
        <div className="footer-shell">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" style={{ display: 'inline-block' }}>
                <img src="/fulllogo.png" alt="Blorbmart campus marketplace" loading="lazy" decoding="async" />
              </a>
              <p>
                Blorbmart is UNIOSUN's campus marketplace — buy products, order food from downtown restaurants,
                and get fast delivery through Campus Runs, all in one app.
              </p>

              <div className="footer-partner-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18.5" cy="17.5" r="3.5"/>
                  <circle cx="5.5" cy="17.5" r="3.5"/>
                  <circle cx="15" cy="5" r="1"/>
                  <path d="M12 17.5V14l-3-3 4-3 2 3h2"/>
                </svg>
                <span>Powered by Campus Runs logistics</span>
              </div>

              <div className="footer-contact">
                <a href="mailto:hello@blorbmart.com.ng">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" />
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  hello@blorbmart.com.ng
                </a>
              </div>

              <div style={{ marginTop: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Raleway, sans-serif' }}>Delivery zones</span>
              </div>
              <div className="footer-delivery-zones">
                {deliveryAreas.map((area) => (
                  <span key={area} className="footer-zone">{area}</span>
                ))}
              </div>
            </div>

            {footerLinks.map((column) => (
              <nav key={column.title} className="footer-column" aria-label={column.title}>
                <h3>{column.title}</h3>
                <div className="footer-links">
                  {column.links.map((link) => (
                    <a key={link.label} href={link.href}>{link.label}</a>
                  ))}
                </div>
              </nav>
            ))}
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <span className="footer-bottom-copy">© 2026 Blorbmart. All rights reserved. Built for UNIOSUN students.</span>
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={`footer-social-btn ${social.label.toLowerCase().split(' ')[0]}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
