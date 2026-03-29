import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createClient } from '@sanity/client'

function loadEnvFile() {
  const envPath = resolve(process.cwd(), '.env')
  const env = {}

  try {
    const raw = readFileSync(envPath, 'utf8')
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const separatorIndex = trimmed.indexOf('=')
      if (separatorIndex === -1) continue
      const key = trimmed.slice(0, separatorIndex).trim()
      const value = trimmed.slice(separatorIndex + 1).trim()
      env[key] = value
    }
  } catch {
    return env
  }

  return env
}

const envFromFile = loadEnvFile()

function getEnv(name) {
  return process.env[name] || envFromFile[name]
}

const projectId = getEnv('VITE_SANITY_PROJECT_ID')
const dataset = getEnv('VITE_SANITY_DATASET')
const apiVersion = getEnv('VITE_SANITY_API_VERSION') || '2025-01-01'
const token = getEnv('SANITY_API_WRITE_TOKEN')

if (!projectId || !dataset) {
  console.error('Missing Sanity project settings. Check .env for VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET.')
  process.exit(1)
}

if (!token) {
  console.error('Missing SANITY_API_WRITE_TOKEN. Add a write token to .env before seeding.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const seedData = [
  {
    id: 'how-students-make-money-on-campus',
    title: 'How Students Can Make Money on Campus',
    excerpt:
      'A practical guide to finding student demand, choosing what to sell, and building repeat income on campus.',
    publishedAt: '2026-03-12T09:00:00.000Z',
    author: 'Blorbmart Team',
    category: 'Student Business',
    seoTitle: 'How Students Can Make Money on Campus | Blorbmart Blog',
    seoDescription:
      'Learn practical ways students can make money on campus with delivery, reselling, on-demand services, and campus commerce.',
    body: [
      'Students make the most money on campus when they solve urgent problems quickly. The easiest wins usually come from everyday needs like food, fashion, printing, beauty items, gadgets, and quick delivery.',
      'Start by looking at what students already ask for often. If people repeatedly need a product or service, that is a sign of stable demand. Then keep your offer simple, your response time fast, and your prices clear.',
      'The real advantage on campus is convenience. Many buyers are willing to pay for speed, reliability, and someone who understands the environment.',
    ],
  },
  {
    id: 'best-items-to-sell-in-university',
    title: 'Best Items to Sell in University',
    excerpt:
      'A simple list of high-demand products students buy often, plus how to choose the ones with the fastest turnover.',
    publishedAt: '2026-03-18T09:00:00.000Z',
    author: 'Blorbmart Team',
    category: 'Campus Selling',
    seoTitle: 'Best Items to Sell in University | Blorbmart Blog',
    seoDescription:
      'Discover the best items to sell in university, including essentials, fashion, snacks, accessories, and fast-moving campus products.',
    body: [
      'The best items to sell in university are usually affordable, needed often, and easy to deliver. That includes snacks, drinks, thrift wear, phone accessories, toiletries, wigs, slides, and room essentials.',
      'Avoid picking products only because they look trendy. The better question is whether students buy them repeatedly and whether you can restock easily.',
      'Fast-moving items usually beat expensive items because they keep cash flowing and help you learn what your campus really wants.',
    ],
  },
  {
    id: 'guide-to-campus-buying-and-selling',
    title: 'Guide to Campus Buying and Selling',
    excerpt:
      'A practical framework for safer, faster, and more trustworthy transactions between students on campus.',
    publishedAt: '2026-03-24T09:00:00.000Z',
    author: 'Blorbmart Team',
    category: 'Marketplace Tips',
    seoTitle: 'Guide to Campus Buying and Selling | Blorbmart Blog',
    seoDescription:
      'Learn how students can buy and sell on campus safely with better listings, clear communication, and smoother delivery.',
    body: [
      'Good campus transactions depend on trust. Buyers want accurate information, while sellers want serious customers who are ready to complete the order.',
      'If you are selling, use clear product photos, honest descriptions, and fast replies. If you are buying, ask the right questions early and confirm delivery details properly.',
      'A strong campus marketplace reduces confusion by helping both sides communicate clearly and complete orders faster.',
    ],
  },
]

function toBlocks(paragraphs) {
  return paragraphs.map((text, index) => ({
    _type: 'block',
    _key: `block-${index + 1}`,
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: `span-${index + 1}`,
        text,
        marks: [],
      },
    ],
  }))
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

async function ensureAuthor(name) {
  const id = `author-${slugify(name)}`
  await client.createOrReplace({
    _id: id,
    _type: 'author',
    name,
  })
  return { _type: 'reference', _ref: id }
}

async function ensureCategory(title) {
  const id = `category-${slugify(title)}`
  await client.createOrReplace({
    _id: id,
    _type: 'category',
    title,
  })
  return { _type: 'reference', _ref: id }
}

async function seed() {
  console.log(`Seeding ${seedData.length} blog posts into ${projectId}/${dataset}...`)

  for (const entry of seedData) {
    const authorRef = await ensureAuthor(entry.author)
    const categoryRef = await ensureCategory(entry.category)

    await client.createOrReplace({
      _id: `post-${entry.id}`,
      _type: 'post',
      title: entry.title,
      slug: {
        _type: 'slug',
        current: entry.id,
      },
      excerpt: entry.excerpt,
      publishedAt: entry.publishedAt,
      author: authorRef,
      category: categoryRef,
      seoTitle: entry.seoTitle,
      seoDescription: entry.seoDescription,
      body: toBlocks(entry.body),
    })

    console.log(`Seeded: ${entry.title}`)
  }

  console.log('Done. Open /studio to review or edit the imported posts.')
}

seed().catch((error) => {
  console.error('Failed to seed Sanity blog content.', error)
  process.exit(1)
})
