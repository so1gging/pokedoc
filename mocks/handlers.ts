import { rest } from 'msw'
import mockPokemons from '../cypress/fixtures/pokemons.json'

const handler = [
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    if (req.url.search === '?limit=50&offset=0') {
      return res(
        ctx.json({
          count: 1292,
          next: 'https://pokeapi.co/api/v2/pokemon?offset=50&limit=50',
          previous: null,
          results: mockPokemons.results.slice(0, 50),
        }),
      )
    } else {
      return res(
        ctx.json({
          count: 1292,
          next: 'https://pokeapi.co/api/v2/pokemon?offset=50&limit=50',
          previous: null,
          results: mockPokemons.results.slice(50, 100),
        }),
      )
    }
  }),
]

export default handler
