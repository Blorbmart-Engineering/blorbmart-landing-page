const footerLinks = [
  {
    title: 'Company',
    links: ['About Us', 'How It Works', 'Team', 'Careers'],
  },
  {
    title: 'For Sellers',
    links: ['Start Selling', 'Seller Dashboard', 'Success Stories', 'Seller Support'],
  },
  {
    title: 'For Riders',
    links: ['Become a Rider', 'Rider App', 'Rider Support', 'Earnings'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
  },
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
          grid-template-columns: minmax(280px, 1.2fr) repeat(4, minmax(140px, 1fr));
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
          filter: brightness(1.04);
        }

        .footer-brand h3 {
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
        }

        .footer-contact a,
        .footer-contact div {
          color: rgba(255,255,255,0.82);
          text-decoration: none;
        }

        .footer-column h4 {
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
          transition: color 0.2s ease;
        }

        .footer-links a:hover,
        .footer-contact a:hover {
          color: white;
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
              <a href="#" className="footer-logo">
                <img src="/fulllogo.png" alt="Blorbmart Logo" />
              </a>
              <h3>Blorbmart</h3>
              <p>
                Your campus marketplace connecting students, sellers, and riders. Shop, sell, and deliver within your
                university ecosystem.
              </p>
              <div className="footer-contact">
                <a href="mailto:hello@blorbmart.com.ng">hello@blorbmart.com.ng</a>
                <a href="tel:+2349130428547">+234 913 042 8547</a>
                <div>Osun State University</div>
              </div>
            </div>

            {footerLinks.map((column) => (
              <div key={column.title} className="footer-column">
                <h4>{column.title}</h4>
                <div className="footer-links">
                  {column.links.map((link) => (
                    <a key={link} href="#">{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-bottom">© 2026 Blorbmart. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
