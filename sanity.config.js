import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { structure } from './desk'

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_PROJECT_TITLE || 'Portfolio',

  projectId: process.env.SANITY_STUDIO_PROJECT_TITLE || 'kc8fuu63',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [deskTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
