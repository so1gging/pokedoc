import { rest } from 'msw'
import mockPokemons from '../cypress/fixtures/pokemons.json'

const handler = [
  rest.get('https://pokeapi.co/api/v2/pokemon', (_, res, ctx) => {
    return res(ctx.json(mockPokemons))
  }),
]

export default handler
