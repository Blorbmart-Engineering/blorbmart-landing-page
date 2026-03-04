import { useEffect, useRef, useState } from 'react'

type Slide = {
  title: string
  subtitle?: string
  image: string
  imageAlt?: string
}
 
const slides: Slide[] = [
  { title: 'Fresh campus finds', subtitle: 'Discover items posted today', image: '/18132.jpg', imageAlt: 'students with items' },
  { title: 'Sell what you don\'t need', subtitle: 'List in under a minute', image: '/2149220667.jpg', imageAlt: 'student listing item' },
  { title: 'Quick campus delivery', subtitle: 'Riders deliver across campus', image: '/49737.jpg', imageAlt: 'rider delivering' },
];

export default function SplitCarousel() {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const runningRef = useRef(true)
  const duration = 4000 // ms per slide

  useEffect(() => {
    let raf = 0
    let start = performance.now()

    function tick(now: number) {
      if (!runningRef.current) {
        start = now
      }

      const elapsed = now - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)

      if (elapsed >= duration) {
        // advance slide
        setIndex((i) => (i + 1) % slides.length)
        start = now
        setProgress(0)
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // pause on hover
  const onMouseEnter = () => {
    runningRef.current = false
  }
  const onMouseLeave = () => {
    runningRef.current = true
  }

  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden">
      <div className="relative bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row relative">
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <div className="w-full h-56 overflow-hidden rounded-md shadow-inner relative">
              {slides.map((s, i) => (
                <img
                  key={i}
                  src={s.image}
                  alt={s.imageAlt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 p-6 flex items-center relative">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <h3 className="text-lg font-semibold text-blue-800">{s.title}</h3>
                {s.subtitle && <p className="mt-2 text-sm text-gray-600">{s.subtitle}</p>}
              </div>
            ))}
          </div>

          {/* vertical/horizontal progress indicator */}
          <div className="flex items-center justify-center md:justify-end md:w-4 w-full mt-4 md:mt-0">
            <div className="bg-blue-100 rounded-full w-full h-1 md:w-1 md:h-40 relative overflow-hidden" aria-hidden>
              <div
                className="absolute top-0 left-0 bg-blue-600 rounded-full"
                style={{ width: `${progress}%`, height: `${progress}%`, transition: 'width 100ms linear, height 100ms linear' }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* small pager */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-blue-600' : 'bg-blue-200'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
