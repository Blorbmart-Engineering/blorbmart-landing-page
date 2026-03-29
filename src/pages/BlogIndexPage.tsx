import BlogCard from '../components/BlogCard'
import BlogHero from '../components/BlogHero'
import PageShell from '../components/PageShell'
import SEO from '../components/SEO'
import SeoNotice from '../components/SeoNotice'
import { useAllPosts } from '../hooks/useBlogPosts'
import { siteConfig } from '../siteConfig'

export default function BlogIndexPage() {
  const { data: posts, isLoading } = useAllPosts()
  const [featuredPost, ...remainingPosts] = posts

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${siteConfig.siteUrl}/blog#blog`,
      url: `${siteConfig.siteUrl}/blog`,
      name: 'Blorbmart Blog',
      description:
        'Advice, market insights, and campus selling tips for students using the Blorbmart marketplace in Nigeria.',
      publisher: {
        '@type': 'Organization',
        name: 'Blorbmart',
        url: siteConfig.siteUrl,
      },
      blogPost: posts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: `${siteConfig.siteUrl}/blog/${post.slug}`,
        datePublished: post.publishedAt,
      })),
    },
  ]

  return (
    <>
      <SEO
        title="Blorbmart Blog | Campus Marketplace Tips for Students in Nigeria"
        description="Read Blorbmart blog posts about campus business ideas, student selling tips, marketplace growth, and buying and selling on campus."
        keywords={[
          'blorbmart blog',
          'campus marketplace blog',
          'student business ideas nigeria',
          'what to sell in university',
          'how to make money on campus',
        ]}
        canonical={`${siteConfig.siteUrl}/blog`}
        image={`${siteConfig.siteUrl}${siteConfig.defaultOgImage}`}
        structuredData={structuredData}
      />
      <PageShell>
        <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_36%,#f8fafc_100%)] pb-20">
          <BlogHero
            eyebrow="Blorbmart Blog"
            title="Campus business ideas, selling tips, and student marketplace insights"
            description="Actionable content for students, sellers, and campus founders. The newest post is featured here, and the rest are easy to scan below."
            totalPosts={posts.length}
            featuredPost={featuredPost}
          />
          <SeoNotice />
          <section id="posts" className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Latest articles</div>
                  <h2 className="mt-2 font-['Sora'] text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                    Read what students actually need
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-slate-600">
                  The grid below should feel like a proper content library, not an afterthought under the hero.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-[420px] animate-pulse rounded-[30px] bg-white shadow-[0_22px_50px_rgba(148,163,184,0.18)]"
                    />
                  ))
                : (remainingPosts.length ? remainingPosts : featuredPost ? [featuredPost] : []).map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </div>
          </section>
        </main>
      </PageShell>
    </>
  )
}
