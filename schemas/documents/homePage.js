import {HomeIcon} from '@sanity/icons'
export default {
  title: 'Home page',
  name: 'homePage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    {
      name: 'heroExample',
      type: 'hero',
      title: 'Hero example'
    },
    {
      title: 'Modules',
      name: 'modules',
      type: 'array',
      of: [{type: 'hero'}, {type: 'recentPosts'}, {type: 'featureProjects'}]
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