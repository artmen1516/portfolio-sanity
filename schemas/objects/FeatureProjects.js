import {PresentationIcon} from '@sanity/icons'

export default {
  title: 'Feature projects',
  name: 'featureProjects',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({title}) {
      return {
        title: title,
        media: PresentationIcon
      }
    }
  }
}