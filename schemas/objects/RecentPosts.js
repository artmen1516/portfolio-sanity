import {ComposeIcon} from '@sanity/icons'

export default {
  title: 'Recent posts',
  name: 'recentPosts',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({title}) {
      return {
        title: title,
        media: ComposeIcon
      }
    }
  }
}