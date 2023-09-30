import { PokemonType } from '@/libs/utils/types'

interface BadgeProps {
  title: string
  type: PokemonType
}

const StyleByPokemonType: Record<PokemonType, string> = {
  bug: 'bg-pokemon-bug py-1 px-4 text-subtitle3 rounded-md ',
  dark: 'bg-pokemon-dark py-1 px-4 text-subtitle3 rounded-md ',
  dragon: 'bg-pokemon-dragon py-1 px-4 text-subtitle3 rounded-md ',
  electric: 'bg-pokemon-electric py-1 px-4 text-subtitle3 rounded-md ',
  fairy: 'bg-pokemon-fairy py-1 px-4 text-subtitle3 rounded-md ',
  fighting: 'bg-pokemon-fighting py-1 px-4 text-subtitle3 rounded-md ',
  fire: 'bg-pokemon-fire py-1 px-4 text-subtitle3 rounded-md ',
  flying: 'bg-pokemon-flying py-1 px-4 text-subtitle3 rounded-md ',
  ghost: 'bg-pokemon-ghost py-1 px-4 text-subtitle3 rounded-md ',
  normal: 'bg-pokemon-normal py-1 px-4 text-subtitle3 rounded-md ',
  grass: 'bg-pokemon-grass py-1 px-4 text-subtitle3 rounded-md ',
  ground: 'bg-pokemon-ground py-1 px-4 text-subtitle3 rounded-md ',
  ice: 'bg-pokemon-ice py-1 px-4 text-subtitle3 rounded-md ',
  poison: 'bg-pokemon-poison py-1 px-4 text-subtitle3 rounded-md ',
  psychic: 'bg-pokemon-psychic py-1 px-4 text-subtitle3 rounded-md ',
  rock: 'bg-pokemon-rock py-1 px-4 text-subtitle3 rounded-md ',
  steel: 'bg-pokemon-steel py-1 px-4 text-subtitle3 rounded-md ',
  water: 'bg-pokemon-water py-1 px-4 text-subtitle3 rounded-md ',
}
export default function TypeBadge({ title, type }: BadgeProps) {
  return <span className={StyleByPokemonType[type]}>{title}</span>
}
