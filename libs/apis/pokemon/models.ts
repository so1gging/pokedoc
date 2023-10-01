import { CommonPokemonAbilities, CommonPokemonImgType, CommonBasicType } from '@/libs/apis/common/models'
import { PokemonType } from '@/libs/utils/types'

export interface PokemonVersionsGeneration {
  'generation-i': { 'red-blue': CommonPokemonImgType; yellow: CommonPokemonImgType }
  'generation-ii': {
    crystal: CommonPokemonImgType
    gold: CommonPokemonImgType
    silver: CommonPokemonImgType
  }
  'generation-iii': {
    emerald: CommonPokemonImgType
    'firered-leafgreen': CommonPokemonImgType
    'ruby-sapphire': CommonPokemonImgType
  }
  'generation-iv': {
    'diamond-pearl': CommonPokemonImgType
    'heartgold-soulsilver': CommonPokemonImgType
    platinum: CommonPokemonImgType
  }
  'generation-v': {
    'black-white': { animated: CommonPokemonImgType; front_default: string }
  }
  'generation-vi': {
    'omegaruby-alphasapphire': CommonPokemonImgType
    'x-y': CommonPokemonImgType
  }
  'generation-vii': { 'ultra-sun-ultra-moon': CommonPokemonImgType }
}

export interface GetPokemonDetailResponse {
  abilities: CommonPokemonAbilities[]
  base_experience: number
  forms: CommonBasicType
  game_indices: {
    game_index: string
    version: CommonBasicType
  }

  height: number
  held_items: {
    items: CommonBasicType
    version_details: {
      rarity: number
      version: CommonBasicType
    }
  }
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: []
  name: string
  order: number
  past_types: []
  species: CommonBasicType
  sprites: {
    [key: string]: any
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
    versions: PokemonVersionsGeneration
  }
  stats: {
    base_stat: number
    effort: number
    stat: CommonBasicType
  }
  types: {
    slot: number
    type: { name: PokemonType; url: string }
  }[]
  weight: number
}
