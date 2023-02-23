
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
      of: [{type: 'project'}]
    }
  ],
}