import { CommonPokemonType } from '@/libs/apis/common/models'

export interface GetPokemonRequest {
  limit?: number
  page?: number
}

export interface GetPokemonResponse {
  count: number
  next: string | null
  previous: string | null
  results: Array<CommonPokemonType>
}
