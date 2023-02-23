import {DocumentIcon} from '@sanity/icons'
export default {
  title: 'Header',
  name: 'header',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{type: 'link'}]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      }
    }
  }
}