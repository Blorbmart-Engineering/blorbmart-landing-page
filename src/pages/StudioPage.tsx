import { Studio } from 'sanity'
import { isSanityConfigured } from '../lib/sanity'
import sanityConfig from '../sanity/sanity.config'

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_28px_70px_rgba(15,23,42,0.4)]">
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
            Sanity Studio
          </span>
          <h1 className="mt-5 font-['Sora'] text-4xl font-semibold tracking-[-0.04em] text-white">
            Connect Sanity to open the editor
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Add your Sanity project values in `.env` first. Once `VITE_SANITY_PROJECT_ID` and
            `VITE_SANITY_DATASET` are set, this page becomes your blog admin interface at `/studio`.
          </p>
          <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-5 font-mono text-sm text-slate-200">
            VITE_SANITY_PROJECT_ID=your_project_id
            <br />
            VITE_SANITY_DATASET=production
            <br />
            VITE_SANITY_API_VERSION=2025-01-01
          </div>
        </div>
      </main>
    )
  }

  return <Studio config={sanityConfig} />
}
