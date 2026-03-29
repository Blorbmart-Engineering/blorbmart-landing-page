import imageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2025-01-01'

export const isSanityConfigured = Boolean(projectId && dataset)

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null

const imageBuilder = isSanityConfigured && sanityClient ? imageUrlBuilder(sanityClient) : null

export function urlForImage(source: unknown) {
  if (!imageBuilder || !source) {
    return null
  }

  return imageBuilder.image(source)
}
