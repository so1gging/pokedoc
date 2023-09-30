import { PokemonType } from '@/libs/utils/types'

interface BadgeProps {
  title: string
  type: PokemonType
}

const StyleByPokemonType: Record<PokemonType, string> = {
  bug: 'bg-pokemon-bug py-2 px-5 text-subtitle2 rounded-xl text-white',
  dark: 'bg-pokemon-dark py-2 px-5 text-subtitle2 rounded-xl text-white',
  dragon: 'bg-pokemon-dragon py-2 px-5 text-subtitle2 rounded-xl text-white',
  electric: 'bg-pokemon-electric py-2 px-5 text-subtitle2 rounded-xl text-white',
  fairy: 'bg-pokemon-fairy py-2 px-5 text-subtitle2 rounded-xl text-white',
  fighting: 'bg-pokemon-fighting py-2 px-5 text-subtitle2 rounded-xl text-white',
  fire: 'bg-pokemon-fire py-2 px-5 text-subtitle2 rounded-xl text-white',
  flying: 'bg-pokemon-flying py-2 px-5 text-subtitle2 rounded-xl text-white',
  ghost: 'bg-pokemon-ghost py-2 px-5 text-subtitle2 rounded-xl text-white',
  normal: 'bg-pokemon-normal py-2 px-5 text-subtitle2 rounded-xl text-white',
  grass: 'bg-pokemon-grass py-2 px-5 text-subtitle2 rounded-xl text-white',
  ground: 'bg-pokemon-ground py-2 px-5 text-subtitle2 rounded-xl text-white',
  ice: 'bg-pokemon-ice py-2 px-5 text-subtitle2 rounded-xl text-white',
  poison: 'bg-pokemon-poison py-2 px-5 text-subtitle2 rounded-xl text-white',
  psychic: 'bg-pokemon-psychic py-2 px-5 text-subtitle2 rounded-xl text-white',
  rock: 'bg-pokemon-rock py-2 px-5 text-subtitle2 rounded-xl text-white',
  steel: 'bg-pokemon-steel py-2 px-5 text-subtitle2 rounded-xl text-white',
  water: 'bg-pokemon-water py-2 px-5 text-subtitle2 rounded-xl text-white',
}
export default function TypeBadge({ title, type }: BadgeProps) {
  return <span className={StyleByPokemonType[type]}>{title}</span>
}
