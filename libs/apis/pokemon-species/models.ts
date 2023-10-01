import { CommonBasicType } from '@/libs/apis/common/models'

interface PokemonGenera {
  genus: string
  language: {
    name: string
    url: string
  }
}

interface PokemonFlavor {
  flavor_text: string
  language: CommonBasicType
  version: CommonBasicType
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
  growth_rate: CommonBasicType
  pokedex_numbers: []
  egg_groups: CommonBasicType
  color: CommonBasicType
  shape: CommonBasicType
  evolves_from_species: CommonBasicType
  evolution_chain: {
    url: string
  }
  habitat: null
  generation: CommonBasicType
  names: []
  flavor_text_entries: PokemonFlavor[]
  form_descriptions: []
  genera: PokemonGenera[]
  varieties: []
}
