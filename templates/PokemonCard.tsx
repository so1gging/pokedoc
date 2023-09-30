import Card from '@/components/Card/Card'

interface PokemonCardProps {
  name: string
  url: string
}
export default function PokemonCard({ name, url }: PokemonCardProps) {
  const number = url.match('(?<=pokemon/)(.*)(?=/)')?.[0] ?? 'no'
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`

  return <Card key={name} subtitle={number} title={name} src={imageUrl} />
}
