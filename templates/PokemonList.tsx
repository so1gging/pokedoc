import { GetPokemonResponse } from '@/libs/apis/pokemons/models'
import PokemonCard from '@/templates/PokemonCard'

interface PokemonListProps {
  data: GetPokemonResponse
}
export default function PokemonList({ data }: PokemonListProps) {
  return (
    <div className="grid py-12 px-6 bg-white shadow-shadow2 grid-cols-3 gap-4 w-352 h-500 rounded-md overflow-auto">
      {data.results.map((item) => (
        <PokemonCard key={item.name} name={item.name} url={item.url} />
      ))}
    </div>
  )
}
