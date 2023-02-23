import {DocumentIcon} from '@sanity/icons'
export default {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  icon: DocumentIcon,
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
    prepare() {
      return {
        title: 'Footer',
      }
    }
  }
}