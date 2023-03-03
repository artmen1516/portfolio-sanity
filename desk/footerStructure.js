// Exporting a default structure definition
export default (S) =>
  S.listItem()
  .id('footerMenu') // This line creates a new id for the structure we want to display
  .title('Footer') // This is the title that will be displayed above the module
  .schemaType('footer') // This is the schema that we want this structure to use
  .child( // This is the child that will be displayed in the structure, basically the document
    S.document()
    .id('e1f218c0-e442-4b6c-a245-55f58d10c353') // We select the document that we previously created
    .schemaType('footer') // We select the document and tell it what schema will be displayed in it
  )
