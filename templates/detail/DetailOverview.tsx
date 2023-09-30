import PokeBall from '@/assets/icons/pokeball.svg'
import { ReactNode } from 'react'
import { PokemonType } from '@/libs/utils/types'
import Image from 'next/image'

const StyleByPokemonType: Record<PokemonType, string> = {
  bug: 'bg-pokemon-bug relative w-full h-220',
  dark: 'bg-pokemon-dark relative w-full h-220',
  dragon: 'bg-pokemon-dragon relative w-full h-220',
  electric: 'bg-pokemon-electric relative w-full h-220',
  fairy: 'bg-pokemon-fairy relative w-full h-220',
  fighting: 'bg-pokemon-fighting relative w-full h-220',
  fire: 'bg-pokemon-fire relative w-full h-220',
  flying: 'bg-pokemon-flying relative w-full h-220',
  ghost: 'bg-pokemon-ghost relative w-full h-220',
  normal: 'bg-pokemon-normal relative w-full h-220',
  grass: 'bg-pokemon-grass relative w-full h-220',
  ground: 'bg-pokemon-ground relative w-full h-220',
  ice: 'bg-pokemon-ice relative w-full h-220',
  poison: 'bg-pokemon-poison relative w-full h-220',
  psychic: 'bg-pokemon-psychic relative w-full h-220',
  rock: 'bg-pokemon-rock relative w-full h-220',
  steel: 'bg-pokemon-steel relative w-full h-220',
  water: 'bg-pokemon-water relative w-full h-220',
}

export default function DetailOverview({ id, type, header }: { id: number; type: PokemonType; header: ReactNode }) {
  return (
    <div className={StyleByPokemonType[type]}>
      <div className="absolute right-1 bottom-1">
        <PokeBall width="208" hegiht="208" fill="bg-amber-300" opacity={0.1} />
      </div>
      {header}
      <div className="absolute w-full flex justify-center">
        <Image
          className="text-center"
          width={200}
          height={200}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={'detail'}
        />
      </div>
    </div>
  )
}
