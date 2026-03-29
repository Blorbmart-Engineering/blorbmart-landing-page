import BlogCard from '../components/BlogCard'
import BlogHero from '../components/BlogHero'
import PageShell from '../components/PageShell'
import SEO from '../components/SEO'
import SeoNotice from '../components/SeoNotice'
import { useAllPosts } from '../hooks/useBlogPosts'
import { siteConfig } from '../siteConfig'

export default function BlogIndexPage() {
  const { data: posts, isLoading } = useAllPosts()

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
            description="This page lists every blog post. Each article gets its own SEO-friendly URL, and the newest posts can also show on the landing page."
          />
          <SeoNotice />
          <section className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
              {isLoading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-[420px] animate-pulse rounded-[30px] bg-white shadow-[0_22px_50px_rgba(148,163,184,0.18)]"
                    />
                  ))
                : posts.map((post) => <BlogCard key={post.id} post={post} />)}
            </div>
          </section>
        </main>
      </PageShell>
    </>
  )
}
