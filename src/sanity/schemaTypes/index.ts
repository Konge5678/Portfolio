import { type SchemaTypeDefinition } from 'sanity'
import { landingPage } from './landingPage'
import { blog } from './blog'
import { tag } from './tag'
import { project } from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    landingPage,
    blog,
    tag,
    project,
  ],
}
