import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas/index'

export default defineConfig({
  name: 'default',
  title: 'Godwa Dairy Expo',

  projectId: 'tgsy9rl4',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
