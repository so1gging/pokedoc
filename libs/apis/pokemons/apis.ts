import getFetcher from '@/libs/apis/fetcher'
import { GetPokemonRequest, GetPokemonResponse } from '@/libs/apis/pokemons/models'

export const getPokemon = async (reqParams: GetPokemonRequest) => {
  const req = {
    url: 'https://pokeapi.co/api/v2/pokemon',
    params: reqParams,
  }
  return await getFetcher<GetPokemonResponse>(req)
}
