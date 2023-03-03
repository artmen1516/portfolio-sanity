import {LinkIcon} from '@sanity/icons'

export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'label'
      }
    }
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'slug.current'
    },
    prepare({title, subtitle}) {
      return {
        title: title,
        subtitle: subtitle,
        media: LinkIcon
      }
    }
  }
}