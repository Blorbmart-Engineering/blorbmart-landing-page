export default function About() {
  const stats = [
    { value: "12K+", label: "Active Students" },
    { value: "3.2K", label: "Products Listed" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "50+", label: "Campus Riders" },
  ];

  const features = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Campus Verified Users",
      desc: "Every account is tied to a verified student email — keeping the community safe and trusted.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 10h20" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Fast & Secure Payments",
      desc: "Built-in escrow protection so buyers and sellers both feel confident in every transaction.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "24/7 Customer Support",
      desc: "Got an issue? Our support team — fellow students — is always a message away, day or night.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Lightning-Fast Delivery",
      desc: "Campus riders deliver your orders between classes — sometimes in under 20 minutes.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');

        .about-section {
          font-family: 'DM Sans', sans-serif;
          background: #f8f9ff;
          overflow: hidden;
          position: relative;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -120px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(59,130,246,0.1);
          color: #2563eb;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid rgba(59,130,246,0.2);
          margin-bottom: 16px;
        }

        .about-heading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .about-heading span {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-desc {
          color: #64748b;
          font-size: 1.05rem;
          line-height: 1.75;
          max-width: 480px;
        }

        /* Stats row */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          overflow: hidden;
          margin-top: 40px;
        }

        .stat-item {
          padding: 20px 16px;
          text-align: center;
          border-right: 1px solid #f1f5f9;
          position: relative;
        }

        .stat-item:last-child { border-right: none; }

        .stat-value {
          font-family: 'Sora', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #2563eb;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #94a3b8;
          margin-top: 4px;
          font-weight: 500;
        }

        /* Feature cards */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 32px;
        }

        .feature-card {
          background: white;
          border-radius: 14px;
          padding: 18px;
          border: 1px solid #e8edf5;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          cursor: default;
        }

        .feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(37,99,235,0.1);
          border-color: rgba(37,99,235,0.3);
        }

        .feature-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-title {
          font-family: 'Sora', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .feature-desc {
          font-size: 0.78rem;
          color: #94a3b8;
          line-height: 1.55;
        }

        /* Image side */
        .image-wrapper {
          position: relative;
        }

        .image-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(37,99,235,0.15);
        }

        .image-frame img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
        }

        /* Floating badge */
        .float-badge {
          position: absolute;
          bottom: 28px;
          left: -24px;
          background: white;
          border-radius: 14px;
          padding: 14px 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 200px;
          z-index: 2;
        }

        .float-badge-icon {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .float-badge-text strong {
          font-family: 'Sora', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
          display: block;
          line-height: 1;
        }

        .float-badge-text span {
          font-size: 0.72rem;
          color: #94a3b8;
          font-weight: 500;
        }

        /* Top-right accent chip */
        .image-chip {
          position: absolute;
          top: 24px;
          right: -16px;
          background: #0f172a;
          color: white;
          border-radius: 12px;
          padding: 10px 16px;
          font-family: 'Sora', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          line-height: 1.3;
          box-shadow: 0 8px 24px rgba(15,23,42,0.25);
          z-index: 2;
        }

        .image-chip span {
          display: block;
          font-size: 1.1rem;
          color: #60a5fa;
        }

        /* Decorative dot grid */
        .dot-grid {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 120px;
          height: 120px;
          background-image: radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px);
          background-size: 16px 16px;
          opacity: 0.6;
          z-index: 0;
        }

        @media (max-width: 768px) {
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .features-grid { grid-template-columns: 1fr; }
          .float-badge { left: 12px; }
          .image-chip { right: 12px; }
          .image-frame img { height: 340px; }
        }
      `}</style>

      <section id="about" className="about-section py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 items-center">

            {/* LEFT: Text content */}
            <div>
              <div className="about-badge">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <circle cx="5" cy="5" r="5"/>
                </svg>
                About Blorbmart
              </div>

              <h2 className="about-heading">
                The marketplace<br/>
                <span>built for campus life</span>
              </h2>

              <p className="about-desc mt-5">
                Blorbmart is a campus-wide marketplace built for students by students. Whether you're buying textbooks, selling your old gear, or getting food delivered between classes — we make it easy, affordable, and safe.
              </p>

              {/* Stats */}
              <div className="stats-row">
                {stats.map((s) => (
                  <div className="stat-item" key={s.label}>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Feature cards */}
              <div className="features-grid">
                {features.map((f) => (
                  <div className="feature-card" key={f.title}>
                    <div className="feature-icon">{f.icon}</div>
                    <div>
                      <div className="feature-title">{f.title}</div>
                      <div className="feature-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="image-wrapper">
              <div className="image-frame">
                <img src="/32450.jpg" alt="Students shopping" />
              </div>

              {/* Floating bottom-left card */}
              <div className="float-badge">
                <div className="float-badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="float-badge-text">
                  <strong>Top Rated</strong>
                  <span>Campus marketplace 2025</span>
                </div>
              </div>

              {/* Top-right chip */}
              <div className="image-chip">
                <span>12,000+</span>
                Students using<br/>Blorbmart
              </div>

              {/* Dot grid decoration */}
              <div className="dot-grid" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}