import {ComposeIcon} from '@sanity/icons'

export default {
  title: 'Posts',
  name: 'post',
  type: 'document',
  icon: ComposeIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Labels',
      name: 'labels',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'richText'}]
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