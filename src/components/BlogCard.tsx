import { Link } from 'react-router-dom'
import type { BlogPost } from '../types/blog'

type BlogCardProps = {
  post: BlogPost
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-[0_22px_50px_rgba(148,163,184,0.18)]">
      <Link to={`/blog/${post.slug}`} className="block">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-56 w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </Link>
      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">{post.category}</span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>
        <h2 className="mb-3 font-['Sora'] text-2xl font-semibold text-slate-900">
          <Link to={`/blog/${post.slug}`} className="transition hover:text-blue-600">
            {post.title}
          </Link>
        </h2>
        <p className="mb-5 leading-7 text-slate-600">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="font-semibold text-blue-700 transition hover:text-blue-500">
          Read article
        </Link>
      </div>
    </article>
  )
}
