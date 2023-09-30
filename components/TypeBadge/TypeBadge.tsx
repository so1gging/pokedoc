import { PokemonType } from '@/libs/utils/types'

interface BadgeProps {
  title: string
  type: PokemonType
}

const StyleByPokemonType: Record<PokemonType, string> = {
  bug: 'bg-pokemon-bug py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  dark: 'bg-pokemon-dark py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  dragon: 'bg-pokemon-dragon py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  electric: 'bg-pokemon-electric py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  fairy: 'bg-pokemon-fairy py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  fighting: 'bg-pokemon-fighting py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  fire: 'bg-pokemon-fire py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  flying: 'bg-pokemon-flying py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  ghost: 'bg-pokemon-ghost py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  normal: 'bg-pokemon-normal py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  grass: 'bg-pokemon-grass py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  ground: 'bg-pokemon-ground py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  ice: 'bg-pokemon-ice py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  poison: 'bg-pokemon-poison py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  psychic: 'bg-pokemon-psychic py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  rock: 'bg-pokemon-rock py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  steel: 'bg-pokemon-steel py-1 px-2.5 text-subtitle2 rounded-xl text-white',
  water: 'bg-pokemon-water py-1 px-2.5 text-subtitle2 rounded-xl text-white',
}
export default function TypeBadge({ title, type }: BadgeProps) {
  return <span className={StyleByPokemonType[type]}>{title}</span>
}
