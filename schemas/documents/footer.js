import {MenuIcon} from '@sanity/icons'

export default {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  icon: MenuIcon,
  fields: [
    {
      title: 'Footer',
      name: 'footer',
      type: 'string'
    },
    {
      title: 'Social Icons',
      name: 'socialIcons',
      type: 'array',
      of: [{type: 'socialIcon'}]
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