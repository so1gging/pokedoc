import { useGetPokemonDetail } from '@/libs/apis/pokemon/apis'
import { useGetPokemonSpecies } from '@/libs/apis/pokemon-species/api'
import { GetPokemonDetailResponse } from '@/libs/apis/pokemon/models'
import { PokemonType } from '@/libs/utils/types'

type PokemonAllDetailType = {
  id: number
  name: string
  types: PokemonType[]
  weight: number
  height: number
  abilities: string[]
  flavor: string
  stats: GetPokemonDetailResponse['stats']
  sprites: GetPokemonDetailResponse['sprites']
  versions: GetPokemonDetailResponse['sprites']['versions']
}

export default function useGetPokemonAllDetails(pokemonId: string): PokemonAllDetailType | null {
  const { data: summaryData } = useGetPokemonDetail(pokemonId)
  const { data: speciesData } = useGetPokemonSpecies(pokemonId)

  if (!summaryData || !speciesData) {
    return null
  }

  return {
    id: Number(pokemonId),
    name: summaryData.name,
    types: summaryData.types.map((item) => item.type.name),
    weight: summaryData.weight,
    height: summaryData.height,
    abilities: summaryData.abilities.map((item) => item.ability.name),
    flavor: speciesData.flavor_text_entries[0].flavor_text,
    stats: summaryData.stats,
    sprites: summaryData.sprites,
    versions: summaryData.sprites.versions,
  }
}
