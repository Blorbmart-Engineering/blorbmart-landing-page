import { Link } from 'react-router-dom'
import { isSanityConfigured } from '../lib/sanity'

export default function SeoNotice() {
  if (isSanityConfigured) {
    return null
  }

  return (
    <div className="mx-auto mt-6 max-w-7xl rounded-[28px] border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-900 sm:px-6">
      Sanity is not connected yet, so the blog is showing fallback content. Add your env values and then manage real
      posts in <Link to="/studio" className="font-semibold underline">/studio</Link>.
    </div>
  )
}
