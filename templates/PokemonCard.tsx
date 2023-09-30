'use client'
import Card from '@/components/Card/Card'
import { useRouter } from 'next/navigation'

interface PokemonCardProps {
  name: string
  url: string
}
export default function PokemonCard({ name, url }: PokemonCardProps) {
  const router = useRouter()

  const number = url.match('(?<=pokemon/)(.*)(?=/)')?.[0] ?? 'no'
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`

  const handleClick = () => {
    router.push(`/${number}`)
  }

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Card key={name} subtitle={number} title={name} src={imageUrl} />
    </div>
  )
}
