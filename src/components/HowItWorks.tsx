export default function HowItWorks() {
  return (
    <>
      <style>{`
        .how-section {
          padding: 80px 24px;
          max-width: 960px;
          margin: 0 auto;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
        }
        .how-heading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 16px;
          color: #0f172a;
        }
        .how-sub {
          font-size: 1.05rem;
          color: #64748b;
          max-width: 720px;
          margin: 0 auto 48px;
          line-height: 1.6;
        }
        .personas {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 32px;
          margin-bottom: 64px;
        }
        .persona {
          text-align: left;
        }
        .persona h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .persona ul {
          list-style: disc inside;
          color: #475569;
          line-height: 1.6;
          padding-left: 0;
        }
        .persona ul li {
          margin-bottom: 6px;
        }
        .process-heading {
          font-family: 'Sora', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 24px;
          color: #0f172a;
        }
        .process-steps {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 32px;
        }
        .process-step {
          max-width: 160px;
          text-align: center;
        }
        .process-step h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #0f172a;
          margin: 8px 0 4px;
        }
        .process-step p {
          font-size: 0.875rem;
          color: #52525b;
          line-height: 1.4;
        }
        .download-btn {
          display: inline-block;
          margin-top: 32px;
          padding: 12px 28px;
          background: #2563eb;
          color: white;
          font-weight: 700;
          border-radius: 8px;
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .how-sub { font-size: 0.95rem; padding: 0 16px; }
          .personas { gap: 24px; }
          .process-steps { gap: 24px; }
          .download-btn { width: 100%; text-align: center; }
        }
      `}</style>

      <section className="how-section">
        <h2 className="how-heading">How Blorbmart Works</h2>
        <p className="how-sub">
          Whether you're shopping, selling, or delivering, our platform makes campus commerce simple and efficient
        </p>

        <div className="personas">
          <div className="persona">
            <h3>Buyers (Students)</h3>
            <ul>
              <li>Browse campus stores and order anything you need in minutes</li>
              <li>Browse campus stores</li>
              <li>Order in minutes</li>
              <li>Fast delivery</li>
              <li>Track orders in real-time</li>
            </ul>
          </div>
          <div className="persona">
            <h3>Sellers</h3>
            <ul>
              <li>Create your store and start earning from the campus community</li>
              <li>Create a store</li>
              <li>Upload products</li>
              <li>Earn directly</li>
              <li>Manage orders easily</li>
            </ul>
          </div>
          <div className="persona">
            <h3>Riders</h3>
            <ul>
              <li>Accept delivery requests and earn on your flexible schedule</li>
              <li>Accept delivery requests</li>
              <li>Flexible schedule</li>
              <li>Earn per delivery</li>
              <li>Campus navigation</li>
            </ul>
          </div>
        </div>

        <h3 className="process-heading">Simple Process, Great Results</h3>
        <div className="process-steps">
          <div className="process-step">
            <h4>Download App</h4>
            <p>Get the mobile app</p>
          </div>
          <div className="process-step">
            <h4>Browse/Order</h4>
            <p>Find what you need</p>
          </div>
          <div className="process-step">
            <h4>Track</h4>
            <p>Watch your delivery</p>
          </div>
          <div className="process-step">
            <h4>Enjoy</h4>
            <p>Get your items fast</p>
          </div>
        </div>

        <a href="#" className="download-btn">Download App</a>
      </section>
    </>
  );
}
