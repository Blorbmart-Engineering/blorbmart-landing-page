import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'How It Works', href: '#' },
    { label: 'Sellers', href: '#' },
    { label: 'Riders', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Download', href: '#' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3 no-underline">
              <img src="/logo.png" alt="Blorbmart logo" className="w-10 h-10 bg-white rounded-full p-1" />
              <div className="leading-none">
                <div className="font-semibold text-lg">Blorbmart</div>
                <div className="text-xs text-white/80">Campus Marketplace</div>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-white/90 hover:text-white transition">{l.label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="px-4 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-white/90">Get Started</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-white/90 hover:bg-white/10"
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
      </div>

      {open && (
        // backdrop catches clicks to close the menu
        <div
          className="md:hidden fixed inset-0 bg-blue-600/95 backdrop-blur-sm z-50"
          onClick={() => setOpen(false)}
        >
          <div className="pt-20 px-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md text-white/90 hover:bg-white/10"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="pt-6 flex flex-col space-y-6">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white text-lg font-medium"
                >{l.label}</a>
              ))}
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-semibold w-max"
              >Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
