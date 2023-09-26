import { HomeIcon } from '@sanity/icons'
export default {
  title: 'Home page',
  name: 'homePage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    {
      title: 'Modules',
      name: 'modules',
      type: 'array',
      of: [{ type: 'hero' }, { type: 'recentPosts' }, { type: 'featureProjects' }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Home page',
      }
    }
  }
}