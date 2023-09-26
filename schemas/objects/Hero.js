import { ImageIcon } from '@sanity/icons'

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  fields: [
    {
      title: 'First Title',
      name: 'firstTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Second Title',
      name: 'secondTitle',
      type: 'string'
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
      title: 'Resume file',
      name: 'resumeFile',
      type: 'file'
    },
    {
      title: 'Button label',
      name: 'buttonLabel',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'firstTitle',
      subtitle: 'subtitle',
      media: 'imageSrc'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title,
        subtitle: subtitle,
        media: media || ImageIcon
      }
    }
  }
}