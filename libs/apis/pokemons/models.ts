export interface GetPokemonRequest {
  limit?: number
}

export interface GetPokemonResponse {
  count: number
  next: string | null
  previous: string | null
  results: Array<{ name: string; url: string }>
}
