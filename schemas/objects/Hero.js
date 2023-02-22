import {ImageIcon} from '@sanity/icons'

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Image',
      name: 'imageSrc',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Button label',
      name: 'buttonLabel',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'imageSrc'
    },
    prepare({title, subtitle, media}) {
      return {
        title: title,
        subtitle: subtitle,
        media: media || ImageIcon
      }
    }
  }
}