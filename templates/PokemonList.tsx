import PokemonCard from '@/templates/PokemonCard'
import { GetPokemonResponse } from '@/libs/apis/pokemons/models'
import useInfiniteCall from '@/libs/hooks/useInfiniteCall'
import { getPokemonList } from '@/libs/apis/pokemons/apis'

export default function PokemonList() {
  const { list, obsRef, pageNum, pageChange } = useInfiniteCall<GetPokemonResponse>({ fetcher: getPokemonList })

  return (
    <div className="h-500 rounded-l overflow-auto">
      <div className="grid py-12 px-6 bg-white shadow-shadow2 grid-cols-3 gap-4 w-352">
        {list?.results.map((item) => <PokemonCard key={item.name} name={item.name} url={item.url} />)}
      </div>
      <div ref={obsRef} className="py-3 bg-red-500 text-white text-center">
        옵저버 Element
      </div>
    </div>
  )
}
