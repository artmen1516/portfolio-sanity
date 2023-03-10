import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_TITLE || 'kc8fuu63',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  }
})
