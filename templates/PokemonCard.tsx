'use client'
import Card from '@/components/Card/Card'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'

interface PokemonCardProps {
  name: string
  url: string
}
export default function PokemonCard({ name, url }: PokemonCardProps) {
  const router = useRouter()
  const [hover, setHover] = useState(false)

  const number = url.match('(?<=pokemon/)(.*)(?=/)')?.[0] ?? 'no'
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${number}.png`
  const animatedImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${number}.gif`

  const handleClick = () => {
    router.push(`/detail/${number}`)
  }

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <Card
          key={name}
          subtitle={number}
          title={name}
          content={
            hover ? (
              <Image src={animatedImageUrl} width={72} height={72} alt={'pokemon'} />
            ) : (
              <Image src={imageUrl} width={72} height={72} alt={'pokemon'} />
            )
          }
        />
      </div>
    </div>
  )
}
