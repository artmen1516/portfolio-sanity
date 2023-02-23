
export default {
  title: 'Social Icon',
  name: 'socialIcon',
  type: 'object',
  fields: [
    {
      title: 'Social Link',
      name: 'socialLink',
      type: 'url',
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'string',
    },
    {
      title: 'Size',
      name: 'size',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'socialLink',
      subtitle: 'icon'
    },
    prepare({title, subtitle}) {
      return {
        title: title,
        subtitle: subtitle,
      }
    }
  }
}