import { readFileSync, writeFileSync } from 'node:fs'
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

function getEnv(name, fallback = '') {
  return process.env[name] || envFromFile[name] || fallback
}

const siteUrl = getEnv('SITE_URL', 'https://www.blorbmart.com.ng').replace(/\/$/, '')
const projectId = getEnv('VITE_SANITY_PROJECT_ID')
const dataset = getEnv('VITE_SANITY_DATASET')
const apiVersion = getEnv('VITE_SANITY_API_VERSION', '2025-01-01')
const readToken = getEnv('SANITY_API_READ_TOKEN')

const staticPages = [
  { loc: `${siteUrl}/`, changefreq: 'weekly', priority: '1.0' },
  { loc: `${siteUrl}/blog`, changefreq: 'weekly', priority: '0.9' },
]

async function fetchPostEntries() {
  if (!projectId || !dataset) {
    return []
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token: readToken || undefined,
    useCdn: false,
  })

  try {
    const posts = await client.fetch(
      `*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc){
        "slug": slug.current,
        "updatedAt": coalesce(_updatedAt, publishedAt, _createdAt)
      }`,
    )

    return posts.map((post) => ({
      loc: `${siteUrl}/blog/${post.slug}`,
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
    }))
  } catch (error) {
    console.warn('Could not fetch Sanity blog posts for sitemap generation. Falling back to static sitemap only.')
    console.warn(error instanceof Error ? error.message : error)
    return []
  }
}

function toUrlEntry(entry) {
  return [
    '  <url>',
    `    <loc>${entry.loc}</loc>`,
    entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n')
}

async function generateSitemap() {
  const postEntries = await fetchPostEntries()
  const allEntries = [...staticPages, ...postEntries]

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allEntries.map(toUrlEntry),
    '</urlset>',
    '',
  ].join('\n')

  const outputPath = resolve(process.cwd(), 'public', 'sitemap.xml')
  writeFileSync(outputPath, xml, 'utf8')
  console.log(`Sitemap generated with ${allEntries.length} URLs.`)
}

generateSitemap().catch((error) => {
  console.error('Failed to generate sitemap.', error)
  process.exit(1)
})
