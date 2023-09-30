export type PokemonType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'normal'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water'

export const PokemonBackground: Record<PokemonType, string> = {
  bug: 'bg-pokemon-bug',
  dark: 'bg-pokemon-dark',
  dragon: 'bg-pokemon-dragon',
  electric: 'bg-pokemon-electric',
  fairy: 'bg-pokemon-fairy',
  fighting: 'bg-pokemon-fighting',
  fire: 'bg-pokemon-fire',
  flying: 'bg-pokemon-flying',
  ghost: 'bg-pokemon-ghost',
  normal: 'bg-pokemon-normal',
  grass: 'bg-pokemon-grass',
  ground: 'bg-pokemon-ground',
  ice: 'bg-pokemon-ice',
  poison: 'bg-pokemon-poison',
  psychic: 'bg-pokemon-psychic',
  rock: 'bg-pokemon-rock',
  steel: 'bg-pokemon-steel',
  water: 'bg-pokemon-water',
}
