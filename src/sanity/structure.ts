import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items(
      [
        ...S.documentTypeListItems().filter(
          (item) => item.getId() !== 'landingPage'
        ),
      S.listItem()
        .title('Landing Page')
        .child(
          S.editor()
            .schemaType('landingPage')
            .documentId('landingPage')
        ),
    ])
