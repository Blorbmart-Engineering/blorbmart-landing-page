import { Link, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import PortableBlogContent from '../components/PortableBlogContent'
import SEO from '../components/SEO'
import SeoNotice from '../components/SeoNotice'
import { useBlogPost } from '../hooks/useBlogPosts'
import { siteConfig } from '../siteConfig'

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const { data: post, isLoading } = useBlogPost(slug)

  if (isLoading) {
    return (
      <PageShell>
        <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_36%,#f8fafc_100%)] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto h-[640px] max-w-4xl animate-pulse rounded-[36px] bg-white shadow-[0_28px_70px_rgba(148,163,184,0.22)]" />
        </main>
      </PageShell>
    )
  }

  if (!post) {
    return (
      <PageShell>
        <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_36%,#f8fafc_100%)] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-[36px] bg-white p-10 text-center shadow-[0_28px_70px_rgba(148,163,184,0.22)]">
            <h1 className="font-['Sora'] text-4xl font-semibold text-slate-950">Post not found</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              This blog post does not exist yet or the slug does not match a published Sanity entry.
            </p>
            <Link
              to="/blog"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Back to blog
            </Link>
          </div>
        </main>
      </PageShell>
    )
  }

  const canonical = `${siteConfig.siteUrl}/blog/${post.slug}`
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.seoDescription || post.excerpt,
      image: [post.coverImage.startsWith('http') ? post.coverImage : `${siteConfig.siteUrl}${post.coverImage}`],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      url: canonical,
      author: {
        '@type': 'Person',
        name: post.authorName || 'Blorbmart Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Blorbmart',
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.siteUrl}/logo.png`,
        },
      },
      mainEntityOfPage: canonical,
    },
  ]

  return (
    <>
      <SEO
        title={post.seoTitle || `${post.title} | Blorbmart Blog`}
        description={post.seoDescription || post.excerpt}
        keywords={[
          post.title,
          post.category || 'Blorbmart Blog',
          'student marketplace',
          'campus business tips',
        ]}
        canonical={canonical}
        image={post.coverImage.startsWith('http') ? post.coverImage : `${siteConfig.siteUrl}${post.coverImage}`}
        structuredData={structuredData}
        type="article"
      />
      <PageShell>
        <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_36%,#f8fafc_100%)] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <SeoNotice />
          <article className="mx-auto max-w-4xl overflow-hidden rounded-[36px] bg-white shadow-[0_28px_70px_rgba(148,163,184,0.22)]">
            <img src={post.coverImage} alt={post.title} className="h-[360px] w-full object-cover sm:h-[460px]" />
            <div className="p-6 sm:p-10">
              <Link to="/blog" className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                Back to all articles
              </Link>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">{post.category}</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span>{post.authorName}</span>
              </div>
              <h1 className="mt-5 font-['Sora'] text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-xl leading-8 text-slate-600">{post.excerpt}</p>
              <div className="mt-10 border-t border-slate-100 pt-6">
                <PortableBlogContent value={post.body} />
              </div>
            </div>
          </article>
        </main>
      </PageShell>
    </>
  )
}
