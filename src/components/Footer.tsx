const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/#home' },
      { label: 'About Blorbmart', href: '/#about' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Download App', href: '/#download' },
    ],
  },
  {
    title: 'Marketplace',
    links: [
      { label: 'Sellers', href: '/#sellers' },
      { label: 'Riders', href: '/#riders' },
      { label: 'Team', href: '/#team' },
      { label: 'Blog', href: '/#blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/#faq' },
      { label: 'Student Marketplace Guide', href: '/#how-it-works' },
      { label: 'Sell on Campus', href: '/#sellers' },
      { label: 'Campus Rider Opportunities', href: '/#riders' },
    ],
  },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/blorbmart' },
  { label: 'X', href: 'https://x.com/Blorbmart' },
  { label: 'Instagram', href: 'https://www.instagram.com/blorbmart_uniosun/' },
]

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-section {
          background: linear-gradient(180deg, #07101f 0%, #020617 100%);
          color: white;
          padding: 72px 24px 28px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .footer-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 12% 18%, rgba(37,99,235,0.16), transparent 28%),
            radial-gradient(circle at 88% 12%, rgba(14,165,233,0.12), transparent 24%);
          pointer-events: none;
        }
        .footer-shell {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: minmax(280px, 1.2fr) repeat(3, minmax(140px, 1fr));
          gap: 28px;
        }
        .footer-brand {
          padding-right: 18px;
        }
        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: white;
          margin-bottom: 18px;
        }
        .footer-logo img {
          height: 58px;
          width: auto;
          object-fit: contain;
        }
        .footer-brand h2 {
          margin: 0 0 14px;
          font-family: 'Sora', sans-serif;
          font-size: 1.25rem;
        }
        .footer-brand p {
          margin: 0 0 22px;
          color: rgba(226,232,240,0.72);
          line-height: 1.75;
          max-width: 360px;
        }
        .footer-contact {
          display: grid;
          gap: 10px;
          margin-bottom: 18px;
        }
        .footer-contact a,
        .footer-contact div {
          color: rgba(255,255,255,0.82);
          text-decoration: none;
        }
        .footer-socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .footer-socials a {
          color: white;
          text-decoration: none;
          font-weight: 700;
        }
        .footer-column h3 {
          margin: 0 0 16px;
          font-family: 'Sora', sans-serif;
          font-size: 1rem;
          color: white;
        }
        .footer-links {
          display: grid;
          gap: 12px;
        }
        .footer-links a {
          color: rgba(226,232,240,0.72);
          text-decoration: none;
        }
        .footer-bottom {
          margin-top: 34px;
          padding-top: 18px;
          border-top: 1px solid rgba(148,163,184,0.16);
          color: rgba(226,232,240,0.62);
          font-size: 0.95rem;
        }
        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .footer-section {
            padding: 64px 16px 24px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <footer className="footer-section">
        <div className="footer-shell">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/#home" className="footer-logo">
                <img src="/fulllogo.png" alt="Blorbmart campus marketplace logo" loading="lazy" decoding="async" />
              </a>
              <h2>Blorbmart</h2>
              <p>
                Blorbmart is a campus marketplace for university students in Nigeria. The platform helps students buy
                and sell items on campus, discover trusted sellers, and access fast delivery through student riders.
              </p>
              <div className="footer-contact">
                <a href="mailto:hello@blorbmart.com.ng">hello@blorbmart.com.ng</a>
                <div>Campus marketplace for student buyers, sellers, and riders</div>
              </div>
              <div className="footer-socials">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((column) => (
              <nav key={column.title} className="footer-column" aria-label={column.title}>
                <h3>{column.title}</h3>
                <div className="footer-links">
                  {column.links.map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </nav>
            ))}
          </div>

          <div className="footer-bottom">© 2026 Blorbmart. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
