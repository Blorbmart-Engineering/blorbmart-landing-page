import SplitCarousel from './SplitCarousel'

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 leading-tight">
              Campus shopping, simplified.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Blorbmart connects students, sellers and riders — discover great deals, sell unused items, and get deliveries fast across campus.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">Get Started</a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">Download</a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-sm mx-auto md:mx-0 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 text-blue-600 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Campus verified sellers
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 text-blue-600 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Fast deliveries
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 text-blue-600 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Secure payments
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <SplitCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
