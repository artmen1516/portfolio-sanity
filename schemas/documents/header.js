import {MenuIcon} from '@sanity/icons'

export default {
  title: 'Header',
  name: 'header',
  type: 'document',
  icon: MenuIcon,
  fields: [
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{type: 'link'}]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare() {
      return {
        title: 'Header',
        media: MenuIcon
      }
    }
  }
}