export type CommonBasicType = {
  name: string
  url: string
}

export interface CommonPokemonAbilities {
  ability: CommonBasicType
  is_hidden: false
  slot: number
}

export interface CommonPokemonImgType {
  [key: string]: string
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}
