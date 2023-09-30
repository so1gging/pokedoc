import getFetcher from '@/libs/apis/fetcher'
import { GetPokemonDetailResponse } from '@/libs/apis/pokemon/models'

export const getPokemonDetail = async (id: string) => {
  const req = {
    path: `/pokemon/${id}`,
  }
  return await getFetcher<GetPokemonDetailResponse>(req)
}
