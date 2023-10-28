import getFetcher from '@/libs/apis/fetcher'
import { GetPokemonRequest, GetPokemonResponse } from '@/libs/apis/pokemons/models'

export const getPokemonList = async (reqParams?: GetPokemonRequest) => {
  const limit = reqParams?.limit ?? 10
  const page = reqParams?.page ?? 1
  const offset = page !== 1 ? page * limit : 0

  const req = {
    path: '/pokemon',
    params: { limit, offset },
  }
  return await getFetcher<GetPokemonResponse>(req)
}
