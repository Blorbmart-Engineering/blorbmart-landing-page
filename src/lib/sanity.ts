import { createImageUrlBuilder } from '@sanity/image-url'
import { createClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID?.trim()
const dataset = import.meta.env.VITE_SANITY_DATASET?.trim()
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2025-01-01'

const invalidProjectIdValues = new Set(['demo', 'your_project_id', 'undefined', 'null'])
const invalidDatasetValues = new Set(['your_dataset', 'undefined', 'null'])

const normalizedProjectId = projectId?.toLowerCase()
const normalizedDataset = dataset?.toLowerCase()

const hasValidProjectId = Boolean(projectId && normalizedProjectId && !invalidProjectIdValues.has(normalizedProjectId))
const hasValidDataset = Boolean(dataset && normalizedDataset && !invalidDatasetValues.has(normalizedDataset))

export const isSanityConfigured = hasValidProjectId && hasValidDataset

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null

const imageBuilder = isSanityConfigured && sanityClient ? createImageUrlBuilder(sanityClient) : null

export function urlForImage(source: unknown) {
  if (!imageBuilder || !source) {
    return null
  }

  return imageBuilder.image(source)
}
