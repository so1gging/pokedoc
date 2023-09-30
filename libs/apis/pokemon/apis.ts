import getFetcher from '@/libs/apis/fetcher'
import { GetPokemonDetailResponse } from '@/libs/apis/pokemon/models'
import { useQuery } from 'react-query'

const getPokemonDetail = async (id: string) => {
  const req = {
    path: `/pokemon/${id}`,
  }
  return await getFetcher<GetPokemonDetailResponse>(req)
}

export const useGetPokemonDetail = (id: string) => {
  return useQuery(['pokemon', id], () => getPokemonDetail(id))
}
