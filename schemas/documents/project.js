import {PresentationIcon} from '@sanity/icons'

export default {
  title: 'Projects',
  name: 'project',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Year',
      name: 'year',
      type: 'date',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'Text',
      name: 'text',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title,
        media: image || PresentationIcon,
      }
    },
  },
}
