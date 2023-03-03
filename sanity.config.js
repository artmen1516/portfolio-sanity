import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './desk'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'kc8fuu63',
  dataset: 'production',

  plugins: [deskTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
