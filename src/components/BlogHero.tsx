import { Link } from 'react-router-dom'
import type { BlogPost } from '../types/blog'

type BlogHeroProps = {
  eyebrow: string
  title: string
  description: string
  totalPosts: number
  featuredPost?: BlogPost
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

export default function BlogHero({ eyebrow, title, description, totalPosts, featuredPost }: BlogHeroProps) {
  return (
    <section className="px-4 pb-6 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1.15fr)_380px]">
        <div className="overflow-hidden rounded-[36px] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.24),_transparent_34%),linear-gradient(135deg,#eef5ff_0%,#ffffff_58%,#f8fafc_100%)] px-6 py-10 shadow-[0_28px_70px_rgba(148,163,184,0.18)] sm:px-10">
          <span className="inline-flex rounded-full border border-blue-100 bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl font-['Sora'] text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={featuredPost ? `/blog/${featuredPost.slug}` : '#posts'}
              className="inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-[0_16px_32px_rgba(37,99,235,0.28)] transition hover:bg-blue-700"
            >
              Read featured article
            </Link>
            <a
              href="#posts"
              className="inline-flex rounded-full border border-slate-200 bg-white/90 px-6 py-3 font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
            >
              Browse all posts
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/80 bg-white/75 p-4">
              <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">{totalPosts}</div>
              <div className="mt-1 text-sm uppercase tracking-[0.12em] text-slate-500">Published posts</div>
            </div>
            <div className="rounded-[24px] border border-white/80 bg-white/75 p-4">
              <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">SEO</div>
              <div className="mt-1 text-sm uppercase tracking-[0.12em] text-slate-500">Optimized URLs</div>
            </div>
            <div className="rounded-[24px] border border-white/80 bg-white/75 p-4">
              <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">CMS</div>
              <div className="mt-1 text-sm uppercase tracking-[0.12em] text-slate-500">Sanity managed</div>
            </div>
          </div>
        </div>

        <aside className="overflow-hidden rounded-[36px] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_28px_70px_rgba(15,23,42,0.24)]">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
              Featured
            </span>
            {featuredPost && <span className="text-sm text-slate-300">{formatDate(featuredPost.publishedAt)}</span>}
          </div>

          {featuredPost ? (
            <>
              <div className="mt-5 overflow-hidden rounded-[28px] border border-white/10">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="h-52 w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="mt-5">
                <div className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">
                  {featuredPost.category || 'Blorbmart Blog'}
                </div>
                <h2 className="mt-3 font-['Sora'] text-3xl font-semibold tracking-[-0.04em] text-white">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">{featuredPost.excerpt}</p>
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="mt-6 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-blue-50"
                >
                  Open article
                </Link>
              </div>
            </>
          ) : (
            <div className="mt-6 rounded-[28px] border border-dashed border-white/15 p-6 text-slate-300">
              Publish your first Sanity post and it will appear here as the featured article.
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}
