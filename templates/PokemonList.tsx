import PokemonCard from '@/templates/PokemonCard'
import { GetPokemonResponse } from '@/libs/apis/pokemons/models'
import useInfiniteCall from '@/libs/hooks/useInfiniteCall'
import { getPokemonList } from '@/libs/apis/pokemons/apis'

export default function PokemonList() {
  const { list, obsRef } = useInfiniteCall<GetPokemonResponse>({ fetcher: getPokemonList })

  if (!list) {
    return (
      <div className="rounded-l overflow-auto" style={{ height: 'calc(100vh - 70px)' }}>
        <div className="grid py-6 px-3 bg-white shadow-shadow2 grid-cols-3 gap-2 w-352 h-full"></div>
      </div>
    )
  }

  return (
    <div className="rounded-l overflow-auto" style={{ height: 'calc(100vh - 70px)' }}>
      <div className="grid py-6 px-3 bg-white shadow-shadow2 grid-cols-3 gap-2 w-352">
        {list?.results.map((item) => <PokemonCard key={item.name} name={item.name} url={item.url} />)}
      </div>
      <div ref={obsRef} className="py-1.5 bg-red-500 text-white text-center">
        옵저버 Element
      </div>
    </div>
  )
}
