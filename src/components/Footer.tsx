const footerLinks = [
  {
    title: 'Platform',
    links: [
      { label: 'Home', href: '/#home' },
      { label: 'Order Food', href: '/#food' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Download App', href: '/#download' },
    ],
  },
  {
    title: 'For Sellers',
    links: [
      { label: 'Vendor Overview', href: '/#sellers' },
      { label: 'Commission Structure', href: '/#commission' },
      { label: 'Seller Playbook', href: '/#seller-guide' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Logistics',
    links: [
      { label: 'Campus Runs (Riders)', href: '/#riders' },
      { label: 'Delivery Zones', href: '/#riders' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact Support', href: 'mailto:hello@blorbmart.com.ng' },
    ],
  },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/blorbmart_uniosun/' },
  { label: 'X (Twitter)', href: 'https://x.com/Blorbmart' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/blorbmart' },
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
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .footer-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 12% 18%, rgba(37,99,235,0.14), transparent 28%),
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
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          color: white;
          font-weight: 700;
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
        }
        .footer-socials {
          display: flex;
          gap: 10px;
        }
        .footer-socials a {
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 12.5px;
          font-weight: 600;
          transition: background 0.2s, color 0.2s;
        }
        .footer-socials a:hover {
          background: rgba(255,255,255,0.1);
          color: white;
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
              <a href="/#home" style={{ display: 'inline-block' }}>
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
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Delivery zones</span>
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
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
