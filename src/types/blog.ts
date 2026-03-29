export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  publishedAt: string
  updatedAt?: string
  authorName?: string
  category?: string
  seoTitle?: string
  seoDescription?: string
  body?: unknown[]
}
