// Exporting a default structure definition
export default (S) =>
  S.listItem()
  .id('headerMenu') // This line creates a new id for the structure we want to display
  .title('Header') // This is the title that will be displayed above the module
  .schemaType('header') // This is the schema that we want this structure to use
  .child( // This is the child that will be displayed in the structure, basically the document
    S.document()
    .id('f0462348-9041-46ed-8aee-a23bb0022163') // We select the document that we previously created
    .schemaType('header') // We select the document and tell it what schema will be displayed in it
  )
