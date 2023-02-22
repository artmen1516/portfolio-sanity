import {HomeIcon} from '@sanity/icons'
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
      of: [{type: 'hero'}, {type: 'recentPosts'}]
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