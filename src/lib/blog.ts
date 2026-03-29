import type { BlogPost } from '../types/blog'
import { isSanityConfigured, sanityClient, urlForImage } from './sanity'

type SanityPost = {
  _id: string
  title: string
  slug?: string
  excerpt?: string
  publishedAt?: string
  _updatedAt?: string
  authorName?: string
  category?: string
  seoTitle?: string
  seoDescription?: string
  coverImage?: unknown
  body?: unknown[]
}

const fallbackPosts: BlogPost[] = [
  {
    id: 'fallback-1',
    title: 'How Students Can Make Money on Campus',
    slug: 'how-students-can-make-money-on-campus',
    excerpt:
      'A practical guide to spotting demand on campus, pricing smartly, and turning a small student hustle into repeat income.',
    coverImage: '/2149220645.jpg',
    publishedAt: '2026-03-12T09:00:00.000Z',
    authorName: 'Blorbmart Team',
    category: 'Student Business',
    seoTitle: 'How Students Can Make Money on Campus | Blorbmart Blog',
    seoDescription:
      'Learn practical ways students can make money on campus through buying, selling, delivery, and student-focused services.',
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _key: 'intro-child',
            _type: 'span',
            text: 'Campus businesses work best when they solve urgent, everyday student problems quickly and consistently.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'body-1',
        style: 'normal',
        children: [
          {
            _key: 'body-1-child',
            _type: 'span',
            text: 'Start with categories students already spend on: food delivery, thrift fashion, gadgets, beauty items, and emergency essentials. Then focus on fast response time, clear pricing, and reliable handoff.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    id: 'fallback-2',
    title: 'Best Items to Sell in University',
    slug: 'best-items-to-sell-in-university',
    excerpt:
      'These are the product categories students buy most often, from daily essentials to quick-turn fashion and gadgets.',
    coverImage: '/2149220667.jpg',
    publishedAt: '2026-03-18T09:00:00.000Z',
    authorName: 'Blorbmart Team',
    category: 'Campus Selling',
    seoTitle: 'Best Items to Sell in University | Blorbmart Blog',
    seoDescription:
      'See the most in-demand items to sell in university and how to choose products students already want to buy.',
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _key: 'intro-child',
            _type: 'span',
            text: 'The best products usually sit at the intersection of urgency, affordability, and convenience.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'body-1',
        style: 'normal',
        children: [
          {
            _key: 'body-1-child',
            _type: 'span',
            text: 'High-performing categories often include snacks, beauty products, thrift wear, electronics accessories, toiletries, printed materials, and room supplies. The main advantage is being available faster than off-campus options.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    id: 'fallback-3',
    title: 'Guide to Campus Buying and Selling',
    slug: 'guide-to-campus-buying-and-selling',
    excerpt:
      'A simple framework for buyers and sellers to trade safely, communicate clearly, and build trust in a student marketplace.',
    coverImage: '/18132.jpg',
    publishedAt: '2026-03-24T09:00:00.000Z',
    authorName: 'Blorbmart Team',
    category: 'Marketplace Tips',
    seoTitle: 'Guide to Campus Buying and Selling | Blorbmart Blog',
    seoDescription:
      'Learn how buyers and sellers can use a campus marketplace effectively with better communication, trust, and delivery flow.',
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _key: 'intro-child',
            _type: 'span',
            text: 'Great campus transactions are built on simple things: speed, honesty, and easy coordination.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'body-1',
        style: 'normal',
        children: [
          {
            _key: 'body-1-child',
            _type: 'span',
            text: 'Buyers want accurate product details and responsive sellers. Sellers want serious buyers and efficient delivery. A marketplace helps both sides when listings are clear and communication stays quick.',
            marks: [],
          },
        ],
      },
    ],
  },
]

const postListQuery = `
  *[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc){
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    _updatedAt,
    "authorName": author->name,
    "category": category->title,
    seoTitle,
    seoDescription,
    coverImage
  }
`

const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    _updatedAt,
    "authorName": author->name,
    "category": category->title,
    seoTitle,
    seoDescription,
    coverImage,
    body
  }
`

function normalizePost(post: SanityPost): BlogPost {
  const coverImage = urlForImage(post.coverImage)?.width(1400).height(780).fit('crop').url() || '/32450.jpg'

  return {
    id: post._id,
    title: post.title,
    slug: post.slug || '',
    excerpt: post.excerpt || '',
    coverImage,
    publishedAt: post.publishedAt || post._updatedAt || new Date().toISOString(),
    updatedAt: post._updatedAt,
    authorName: post.authorName || 'Blorbmart Team',
    category: post.category || 'Blorbmart Blog',
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
    body: post.body,
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured || !sanityClient) {
    return fallbackPosts
  }

  try {
    const posts = await sanityClient.fetch<SanityPost[]>(postListQuery)
    if (!posts.length) {
      return fallbackPosts
    }
    return posts.map(normalizePost)
  } catch (error) {
    console.error('Failed to fetch blog posts from Sanity.', error)
    return fallbackPosts
  }
}

export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.slice(0, limit)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!slug) {
    return null
  }

  if (!isSanityConfigured || !sanityClient) {
    return fallbackPosts.find((post) => post.slug === slug) || null
  }

  try {
    const post = await sanityClient.fetch<SanityPost | null>(singlePostQuery, { slug })
    return post ? normalizePost(post) : null
  } catch (error) {
    console.error(`Failed to fetch blog post "${slug}" from Sanity.`, error)
    return fallbackPosts.find((post) => post.slug === slug) || null
  }
}
