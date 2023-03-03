import homePage from './homePageStructure'
import header from './headerStructure'
import footer from './footerStructure'

const hiddenDocTypes = listItem => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return !['homePage', 'header', 'footer'].includes(id)
}

export const structure = (S, context) =>
  S.list().title('Portfolio content').items([
    header(S, context),
    footer(S, context),
    S.divider(),
    homePage(S, context),
    S.divider(),
    ...S.documentTypeListItems().filter(hiddenDocTypes)
  ])
