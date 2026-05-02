import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Sellers', href: '/#sellers' },
    { label: 'Riders', href: '/#riders' },
    { label: 'Team', href: '/#team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Download', href: '/#download' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[26px] border border-white/80 bg-white/85 shadow-[0_18px_40px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-6px_18px_rgba(148,163,184,0.12)] backdrop-blur-xl">
          <div className="flex min-h-[56px] items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-4">
              <a href="/#home" className="flex items-center no-underline" aria-label="Blorbmart home">
                <img
                  src="/fulllogo.png"
                  alt="Blorbmart campus marketplace logo"
                  className="h-12 w-auto object-contain sm:h-14"
                  fetchPriority="high"
                />
              </a>
            </div>

            <nav className="hidden items-center space-x-6 md:flex" aria-label="Primary navigation">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center space-x-3 md:flex">
              <a
                href="/#download"
                className="rounded-full border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 py-2 text-sm font-semibold text-slate-800 shadow-[0_10px_24px_rgba(148,163,184,0.18),inset_0_1px_0_rgba(255,255,255,0.95)] transition hover:-translate-y-0.5 hover:text-blue-600"
              >
                Download App
              </a>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-[0_8px_18px_rgba(148,163,184,0.18)] transition hover:text-blue-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-out md:hidden ${
              open ? 'max-h-[520px] opacity-100 px-4 pb-4 sm:px-6 sm:pb-6' : 'max-h-0 opacity-0 px-4 pb-0 sm:px-6'
            }`}
          >
            <div className="border-t border-slate-100/80 pt-4">
              <nav className="flex flex-col space-y-5" aria-label="Mobile navigation">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-slate-700 transition hover:text-blue-600"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="/#download"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-max rounded-full bg-[linear-gradient(135deg,#2563eb,#1d4ed8)] px-6 py-3 font-semibold text-white shadow-[0_14px_32px_rgba(37,99,235,0.32)]"
                >
                  Download App
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
