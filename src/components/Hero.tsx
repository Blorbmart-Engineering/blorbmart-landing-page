import { useEffect, useState } from 'react'

type Slide = {
  title: string
  subtitle: string
  tag: string
  icon: React.ReactNode
  image: string
  imageAlt: string
  accent: string
}

const slides: Slide[] = [
  {
    title: 'Fresh campus finds',
    subtitle: 'New items posted every hour for student buyers',
    tag: 'Marketplace',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="21" r="1" fill="currentColor" />
        <circle cx="20" cy="21" r="1" fill="currentColor" />
      </svg>
    ),
    image: '/18132.jpg',
    imageAlt: 'Students browsing products in the Blorbmart campus marketplace',
    accent: '#3b82f6',
  },
  {
    title: 'Sell in 60 seconds',
    subtitle: 'Students can list products and services fast on campus',
    tag: 'Sell',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-5 9 5v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 9l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    image: '/2149220667.jpg',
    imageAlt: 'Student seller listing an item on Blorbmart',
    accent: '#8b5cf6',
  },
  {
    title: 'Delivered between classes',
    subtitle: 'Campus riders move orders across university grounds',
    tag: 'Delivery',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M2 16l4 4 8-8-4-4-8 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 4l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    image: '/49737.jpg',
    imageAlt: 'Campus rider delivering an order for Blorbmart',
    accent: '#06b6d4',
  },
]

const DURATION = 4500

function PremiumCarousel() {
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(media.matches)

    update()

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update)
      return () => media.removeEventListener('change', update)
    }

    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, DURATION)

    return () => window.clearInterval(timer)
  }, [isMobile])

  const slide = slides[index]

  return (
    <>
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .carousel-text-enter {
          animation: fadeSlide 0.45s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes scaleIn {
          from { transform: scale(1.06); opacity: 0.6; }
          to   { transform: scale(1); opacity: 1; }
        }
        .carousel-img-enter {
          animation: scaleIn 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes progressRun {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .progress-bar {
          animation: progressRun ${DURATION}ms linear forwards;
        }
        .carousel-dot {
          transition: all 0.3s ease;
        }
        .slide-tag {
          animation: fadeSlide 0.3s 0.1s ease both;
        }
        .carousel-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 24px;
          overflow: hidden;
          backdrop-filter: blur(12px);
          box-shadow: 0 32px 64px rgba(0,0,0,0.35);
        }
        .trust-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 5px 12px;
          font-size: 11px;
          color: rgba(255,255,255,0.55);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .carousel-card {
            backdrop-filter: none;
            box-shadow: 0 16px 32px rgba(0,0,0,0.22);
          }
          .slide-tag,
          .trust-chip {
            backdrop-filter: none !important;
          }
          .carousel-dot {
            transition: none;
          }
        }
      `}</style>

      <div className="w-full" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="carousel-card">
          <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
            <img
              key={index}
              src={slide.image}
              alt={slide.imageAlt}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
              className="carousel-img-enter"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,15,30,0.85) 0%, rgba(10,15,30,0.1) 50%, transparent 100%)',
              }}
            />

            <div
              className="slide-tag"
              key={`tag-${index}`}
              style={{
                position: 'absolute',
                top: 16,
                left: 16,
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '999px',
                padding: '5px 12px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'white',
                letterSpacing: '0.02em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              {slide.icon}
              <span>{slide.tag}</span>
            </div>

            <div
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                fontSize: '11px',
                color: 'rgba(255,255,255,0.45)',
                fontWeight: 600,
                letterSpacing: '0.1em',
              }}
            >
              {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
          </div>

          <div style={{ padding: '20px 24px 24px' }}>
            <div key={`text-${index}`} className="carousel-text-enter">
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'white',
                  fontFamily: "'Sora', sans-serif",
                  lineHeight: 1.25,
                  marginBottom: 6,
                }}
              >
                {slide.title}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{slide.subtitle}</div>
            </div>

            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  flex: 1,
                  height: 3,
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 999,
                  overflow: 'hidden',
                }}
              >
                {!isMobile && (
                  <div
                    key={`progress-${index}`}
                    className="progress-bar"
                    style={{
                      height: '100%',
                      background: `linear-gradient(to right, ${slide.accent}, white)`,
                      borderRadius: 999,
                    }}
                  />
                )}
              </div>

              <div style={{ display: 'flex', gap: 6 }}>
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="carousel-dot"
                    style={{
                      width: i === index ? 20 : 6,
                      height: 6,
                      borderRadius: 999,
                      background: i === index ? slide.accent : 'rgba(255,255,255,0.2)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
          {[
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 8V7a5 5 0 0 0-10 0v1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="7" y="8" width="10" height="8" rx="2" stroke="currentColor" strokeWidth={2} />
                </svg>
              ),
              text: 'Verified students',
            },
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              text: 'Live listings',
            },
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="9" r="2" fill="currentColor" />
                </svg>
              ),
              text: 'On-campus only',
            },
          ].map((item) => (
            <div key={item.text} className="trust-chip">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-section {
          background: #070c1a;
          position: relative;
          overflow: hidden;
          min-height: calc(100vh - var(--header-h));
          display: flex;
          align-items: center;
          width: 100%;
        }

        .hero-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem 24px 24px;
          width: 100%;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(360px, 460px);
          gap: 64px;
          align-items: center;
        }

        .hero-h1 {
          font-size: clamp(2.4rem, 5vw, 3.6rem);
        }
        .hero-sub {
          font-size: 1.05rem;
        }

        .hero-cta {
          display: flex;
        }

        .hero-stats {
          display: flex; align-items: center; gap: 20px;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            padding: 1.5rem 16px 24px;
            gap: 32px;
          }
          .hero-h1 {
            font-size: clamp(2rem, 6vw, 3rem);
          }
          .hero-sub {
            font-size: 0.95rem;
          }
          .hero-cta {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-stats {
            flex-direction: column;
            gap: 24px;
            align-items: flex-start;
          }
          .slide-tag {
            top: 8px;
            left: 8px;
            font-size: 11px;
            padding: 4px 10px;
          }
        }

        @media (max-width: 1100px) and (min-width: 769px) {
          .hero-content {
            grid-template-columns: minmax(0, 1fr) minmax(320px, 400px);
            gap: 40px;
          }
        }

        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 10% 40%, rgba(37,99,235,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 85% 20%, rgba(124,58,237,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 60% 90%, rgba(6,182,212,0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-badge    { animation: heroFadeUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-h1       { animation: heroFadeUp 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-sub      { animation: heroFadeUp 0.6s 0.35s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-cta      { animation: heroFadeUp 0.6s 0.45s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-stats    { animation: heroFadeUp 0.6s 0.55s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-carousel { animation: heroFadeUp 0.7s 0.3s cubic-bezier(0.22,1,0.36,1) both; }

        .btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white; font-weight: 700; font-size: 0.95rem;
          border-radius: 12px; border: none; cursor: pointer;
          box-shadow: 0 8px 24px rgba(37,99,235,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
          font-family: 'Sora', sans-serif;
          letter-spacing: -0.01em;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.15);
        }

        .btn-secondary {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 28px;
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.8); font-weight: 600; font-size: 0.95rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          text-decoration: none;
          font-family: 'Sora', sans-serif;
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }

        .stat-divider {
          width: 1px; height: 32px;
          background: rgba(255,255,255,0.1);
        }

        .avatar-stack {
          display: flex;
        }
        .avatar-stack img,
        .avatar-stack div {
          width: 28px; height: 28px; border-radius: 50%;
          border: 2px solid #070c1a;
          margin-left: -8px;
          object-fit: cover;
        }
        .avatar-stack div {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-size: 9px; font-weight: 700; color: white;
        }
        .avatar-stack :first-child { margin-left: 0; }
      `}</style>

      <section className="hero-section" id="home" aria-labelledby="hero-heading">
        <div className="hero-content">
          <div>
            <header>
              <div
                className="hero-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(37,99,235,0.15)',
                  border: '1px solid rgba(37,99,235,0.35)',
                  borderRadius: 999,
                  padding: '6px 14px',
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#3b82f6',
                    boxShadow: '0 0 8px #3b82f6',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#93c5fd',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Nigeria student marketplace
                </span>
              </div>

              <h1
                id="hero-heading"
                className="hero-h1"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  color: 'white',
                  margin: 0,
                }}
              >
                Blorbmart Campus Marketplace
                <span
                  style={{
                    display: 'block',
                    marginTop: 8,
                    background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Buy and sell on campus with ease.
                </span>
              </h1>

              <p
                className="hero-sub"
                style={{
                  marginTop: 20,
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 1.7,
                  maxWidth: 560,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Blorbmart is a campus marketplace where students can buy and sell items easily within their university.
                This student buy and sell platform helps campus shoppers discover trusted sellers, compare prices, and
                get fast deliveries from student riders.
              </p>
            </header>

            <div className="hero-cta" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
              <a href="/#download" className="btn-primary">
                Download the App
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/#how-it-works" className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor" />
                </svg>
                See how it works
              </a>
            </div>

            <div className="hero-stats" style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 40, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className="avatar-stack">
                  <div>AK</div>
                  <div>TM</div>
                  <div>EB</div>
                  <div>+</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'white', fontFamily: "'Sora', sans-serif" }}>12,000+ students</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans', sans-serif" }}>buying and selling on campus</div>
                </div>
              </div>

              <div className="stat-divider" />

              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'white', fontFamily: "'Sora', sans-serif" }}>4.9 / 5.0</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans', sans-serif" }}>student marketplace rating</div>
              </div>

              <div className="stat-divider" />

              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'white', fontFamily: "'Sora', sans-serif" }}>&lt; 20 min</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans', sans-serif" }}>average campus delivery</div>
              </div>
            </div>
          </div>

          <div className="hero-carousel" style={{ display: 'flex', justifyContent: 'center', alignSelf: 'start' }}>
            <div style={{ width: '100%', maxWidth: 420 }}>
              <PremiumCarousel />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
