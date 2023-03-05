import {ImageIcon} from '@sanity/icons'

export default {
  title: 'Content',
  name: 'richText',
  type: 'array',
  of: [{type: 'block'}, {type: 'image', icon: ImageIcon}],
}
