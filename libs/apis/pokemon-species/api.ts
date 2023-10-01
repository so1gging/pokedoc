import getFetcher from '@/libs/apis/fetcher'
import { useQuery } from 'react-query'
import { GetPokemonSpeciesResponse } from '@/libs/apis/pokemon-species/models'

const getPokemonSpecies = async (id: string) => {
  return await getFetcher<GetPokemonSpeciesResponse>({
    path: `/pokemon-species/${id}`,
  })
}

export const useGetPokemonSpecies = (id: string) => {
  return useQuery(['pokemon-species', id], () => getPokemonSpecies(id))
}
