import { CommonPokemonAbilities, CommonPokemonImgType, CommonBasicType } from '@/libs/apis/common/models'
import { PokemonType } from '@/libs/utils/types'

export type GenerationI = 'red-blue' | 'yellow'
export type GenerationII = 'crystal' | 'gold' | 'silver'
export type GenerationIII = 'emerald' | 'firered-leafgreen' | 'ruby-sapphire'
export type GenerationIV = 'diamond-pearl' | 'heartgold-soulsilver' | 'platinum'
export type GenerationV = 'black-white'
export type GenerationVI = 'omegaruby-alphasapphire' | 'x-y'
export type GenerationVII = 'ultra-sun-ultra-moon'

export interface PokemonVersionsGeneration {
  'generation-i': Record<GenerationI, CommonPokemonImgType>
  'generation-ii': Record<GenerationII, CommonPokemonImgType>
  'generation-iii': Record<GenerationIII, CommonPokemonImgType>
  'generation-iv': Record<GenerationIV, CommonPokemonImgType>
  'generation-v': Record<GenerationV, CommonPokemonImgType>
  'generation-vi': Record<GenerationVI, CommonPokemonImgType>
  'generation-vii': Record<GenerationVII, CommonPokemonImgType>
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
  sprites: CommonPokemonImgType & {
    versions: PokemonVersionsGeneration
  }
  stats: {
    base_stat: number
    effort: number
    stat: CommonBasicType
  }[]
  types: {
    slot: number
    type: { name: PokemonType; url: string }
  }[]
  weight: number
}
