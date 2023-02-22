export default {
  title: 'Posts',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
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
    prepare() {
      return {
        title: 'Posts'
      }
    }
  }
}