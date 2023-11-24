'use client'
import Card from '@/components/Card/Card'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useGetPokemonAllDetails from '@/templates/detail/hooks/useGetPokemonAllDetails'
import { PokemonBackground } from '@/libs/utils/types'
import Skeleton from '@/components/Skeleton/Skeleton'

interface PokemonCardProps {
  name: string
  url: string
}
export default function PokemonCard({ name, url }: PokemonCardProps) {
  const router = useRouter()

  const number = url.match('(?<=pokemon/)(.*)(?=/)')?.[0] ?? 'no'
  const detail = useGetPokemonAllDetails(number)

  if (!detail) {
    return <Skeleton width={280} height={200} />
  }

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`

  const color = PokemonBackground[detail?.types[0] ?? 'normal']

  const handleClick = () => {
    router.push(`/detail/${number}`)
  }

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Card
        key={name}
        subTitles={detail?.types ?? []}
        color={color}
        title={name}
        content={<Image src={imageUrl} width={150} height={100} alt={'pokemon'} />}
      />
    </div>
  )
}
