import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Slide = {
  title: string
  subtitle: string
  tag: string
  image: string
  imageAlt: string
  accent: string
}

const slides: Slide[] = [
  {
    title: 'Fresh campus finds',
    subtitle: 'New items posted every hour for student buyers',
    tag: 'Marketplace',
    image: '/18132.jpg',
    imageAlt: 'Students browsing products in the Blorbmart campus marketplace',
    accent: '#1f77f1',
  },
  {
    title: 'Sell in 60 seconds',
    subtitle: 'Students can list products and services fast on campus',
    tag: 'Sell',
    image: '/2149220667.jpg',
    imageAlt: 'Student seller listing an item on Blorbmart',
    accent: '#a855f7',
  },
  {
    title: 'Delivered between classes',
    subtitle: 'Campus riders move orders across university grounds',
    tag: 'Delivery',
    image: '/49737.jpg',
    imageAlt: 'Campus rider delivering an order for Blorbmart',
    accent: '#06b6d4',
  },
]

const DURATION = 4500

const orbs = [
  { w: 560, h: 560, x: '-10%', y: '15%', color: 'rgba(31,119,241,0.18)', dur: 10, dx: [0, 40, -20, 0], dy: [0, -30, 50, 0] },
  { w: 400, h: 400, x: '70%', y: '-5%', color: 'rgba(168,85,247,0.12)', dur: 14, dx: [0, -50, 30, 0], dy: [0, 40, -20, 0] },
  { w: 300, h: 300, x: '55%', y: '60%', color: 'rgba(6,182,212,0.1)', dur: 12, dx: [0, 30, -40, 0], dy: [0, -25, 35, 0] },
]

function PhysicsBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          animate={{ x: o.dx, y: o.dy }}
          transition={{ duration: o.dur, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: o.x,
            top: o.y,
            width: o.w,
            height: o.h,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
            filter: 'blur(80px)',
          }}
        />
      ))}
      {/* subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />
    </div>
  )
}

function PremiumCarousel() {
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const timer = window.setInterval(() => setIndex(c => (c + 1) % slides.length), DURATION)
    return () => window.clearInterval(timer)
  }, [isMobile])

  const slide = slides[index]

  return (
    <motion.div
      className="w-full"
      style={{ fontFamily: "'Raleway', 'DM Sans', sans-serif" }}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(1.06); opacity: 0.6; }
          to   { transform: scale(1); opacity: 1; }
        }
        .car-img { animation: scaleIn 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes progressRun { from { width: 0%; } to { width: 100%; } }
        .car-progress { animation: progressRun ${DURATION}ms linear forwards; }
        .carousel-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 28px;
          overflow: hidden;
          backdrop-filter: blur(16px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        }
      `}</style>

      <div className="carousel-card">
        <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
          <img
            key={index}
            src={slide.image}
            alt={slide.imageAlt}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
            className="car-img"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,16,31,0.88) 0%, rgba(7,16,31,0.08) 50%, transparent 100%)' }} />

          <div style={{
            position: 'absolute', top: 16, left: 16,
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.14)', borderRadius: 999,
            padding: '6px 14px', fontSize: 12, fontWeight: 700, color: 'white',
            display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '0.03em',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: slide.accent, boxShadow: `0 0 8px ${slide.accent}` }} />
            {slide.tag}
          </div>

          <div style={{
            position: 'absolute', top: 16, right: 16,
            fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 700, letterSpacing: '0.1em',
          }}>
            {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>
        </div>

        <div style={{ padding: '22px 26px 26px' }}>
          <div key={`text-${index}`} style={{ animation: 'fadeUp 0.45s cubic-bezier(0.22,1,0.36,1) both' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white', lineHeight: 1.25, marginBottom: 6, letterSpacing: '-0.01em' }}>
              {slide.title}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.55 }}>{slide.subtitle}</div>
          </div>

          <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 999, overflow: 'hidden' }}>
              {!isMobile && (
                <div key={`p-${index}`} className="car-progress" style={{ height: '100%', background: `linear-gradient(to right, ${slide.accent}, white)`, borderRadius: 999 }} />
              )}
            </div>
            <div style={{ display: 'flex', gap: 7 }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    width: i === index ? 22 : 7, height: 7, borderRadius: 999,
                    background: i === index ? slide.accent : 'rgba(255,255,255,0.22)',
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'width 0.3s, background 0.3s',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
        {[
          { dot: '#1f77f1', text: 'Verified students' },
          { dot: '#a855f7', text: 'Live listings' },
          { dot: '#06b6d4', text: 'On-campus only' },
        ].map((chip) => (
          <div key={chip.text} style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 999, padding: '6px 14px', fontSize: 11,
            color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.02em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: chip.dot, flexShrink: 0 }} />
            {chip.text}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-section {
          background: #07101f;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .hero-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 180px 24px 64px;
          width: 100%;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(360px, 460px);
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            padding: 140px 16px 56px;
            gap: 36px;
          }
        }
        @media (max-width: 1100px) and (min-width: 769px) {
          .hero-content {
            grid-template-columns: minmax(0, 1fr) minmax(320px, 400px);
            gap: 44px;
            padding: 160px 24px 56px;
          }
        }

        .stat-divider { width: 1px; height: 36px; background: rgba(255,255,255,0.1); }

        .avatar-stack { display: flex; }
        .avatar-stack div {
          width: 30px; height: 30px; border-radius: 50%;
          border: 2.5px solid #07101f;
          margin-left: -9px;
          background: linear-gradient(135deg, #1f77f1, #a855f7);
          display: flex; align-items: center; justify-content: center;
          font-size: 9px; font-weight: 800; color: white;
          font-family: 'Raleway', sans-serif;
        }
        .avatar-stack :first-child { margin-left: 0; }

        .btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 9px;
          padding: 15px 30px;
          background: linear-gradient(135deg, #1f77f1, #1560cc);
          color: white; font-weight: 800; font-size: 0.97rem;
          border-radius: 14px; border: none; cursor: pointer;
          box-shadow: 0 10px 28px rgba(31,119,241,0.42), inset 0 1px 0 rgba(255,255,255,0.18);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
          font-family: 'Raleway', sans-serif;
          letter-spacing: 0.01em;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(31,119,241,0.52), inset 0 1px 0 rgba(255,255,255,0.18);
        }

        .btn-secondary {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 15px 28px;
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.85); font-weight: 700; font-size: 0.97rem;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.14);
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s;
          text-decoration: none;
          font-family: 'Raleway', sans-serif;
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.12);
          color: white;
          border-color: rgba(255,255,255,0.22);
        }
      `}</style>

      <section className="hero-section" id="home" aria-labelledby="hero-heading">
        <PhysicsBackground />

        <div className="hero-content">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'rgba(31,119,241,0.14)',
                border: '1px solid rgba(31,119,241,0.32)',
                borderRadius: 999, padding: '7px 16px', marginBottom: 28,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1f77f1', boxShadow: '0 0 10px #1f77f1', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#93c5fd', letterSpacing: '0.07em', textTransform: 'uppercase', fontFamily: "'Raleway', sans-serif" }}>
                Nigeria's campus marketplace
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              style={{
                fontFamily: "'Raleway', 'Sora', sans-serif",
                fontSize: 'clamp(2.6rem, 5.5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                color: 'white',
                margin: 0,
              }}
            >
              Blorbmart Campus Marketplace
              <span style={{
                display: 'block', marginTop: 10,
                background: 'linear-gradient(135deg, #1f77f1 0%, #60a5fa 40%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Buy and sell on campus with ease.
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.35}
              variants={fadeUp}
              style={{
                marginTop: 22,
                fontSize: '1.07rem',
                color: 'rgba(255,255,255,0.68)',
                lineHeight: 1.75,
                maxWidth: 560,
                fontFamily: "'Raleway', 'DM Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              Blorbmart is a campus marketplace where students can buy and sell items easily within their university.
              Discover trusted sellers, compare prices, and get fast deliveries from Campus Runs riders.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.48}
              variants={fadeUp}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 38 }}
            >
              <a href="/#download" className="btn-primary">
                Download the App
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="/#how-it-works" className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor" /></svg>
                See how it works
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.58}
              variants={fadeUp}
              style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 44, flexWrap: 'wrap' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="avatar-stack">
                  <div>AK</div><div>TM</div><div>EB</div><div>+</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: 'white', fontFamily: "'Raleway', sans-serif" }}>12,000+ students</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: "'Raleway', sans-serif" }}>buying and selling on campus</div>
                </div>
              </div>
              <div className="stat-divider" />
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: 'white', fontFamily: "'Raleway', sans-serif" }}>4.9 / 5.0</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: "'Raleway', sans-serif" }}>student rating</div>
              </div>
              <div className="stat-divider" />
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: 'white', fontFamily: "'Raleway', sans-serif" }}>&lt; 20 min</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: "'Raleway', sans-serif" }}>avg. campus delivery</div>
              </div>
            </motion.div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
            <div style={{ width: '100%', maxWidth: 440 }}>
              <PremiumCarousel />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
