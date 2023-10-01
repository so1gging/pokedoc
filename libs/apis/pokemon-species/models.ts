import { CommonPokemonType } from '@/libs/apis/common/models'

interface PokemonGenera {
  genus: string
  language: {
    name: string
    url: string
  }
}

interface PokemonFlavor {
  flavor_text: string
  language: CommonPokemonType
  version: CommonPokemonType
}

export interface GetPokemonSpeciesResponse {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: CommonPokemonType
  pokedex_numbers: []
  egg_groups: CommonPokemonType
  color: CommonPokemonType
  shape: CommonPokemonType
  evolves_from_species: CommonPokemonType
  evolution_chain: {
    url: string
  }
  habitat: null
  generation: CommonPokemonType
  names: []
  flavor_text_entries: PokemonFlavor[]
  form_descriptions: []
  genera: PokemonGenera[]
  varieties: []
}
