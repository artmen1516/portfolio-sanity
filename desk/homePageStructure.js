// Exporting a default structure definition
export default (S) =>
  S.listItem()
  .id('home') // This line creates a new id for the structure we want to display
  .title('Home page') // This is the title that will be displayed above the module
  .schemaType('homePage') // This is the schema that we want this structure to use
  .child( // This is the child that will be displayed in the structure, basically the document
    S.document()
    .id('03c70148-0074-4983-af85-faea3a550541') // We select the document that we previously created
    .schemaType('homePage') // We select the document and tell it what schema will be displayed in it
  )
