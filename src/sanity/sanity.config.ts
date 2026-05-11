import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID?.trim()
const dataset = import.meta.env.VITE_SANITY_DATASET?.trim()

export default defineConfig({
  name: 'default',
  title: 'Blorbmart Studio',
  projectId: projectId || 'demo',
  dataset: dataset || 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
