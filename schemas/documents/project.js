export default {
  title: 'Projects',
  name: 'project',
  type: 'document',
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
      of: [{type: 'string'}]
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [{type: 'richText'}]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Project'
      }
    }
  }
}