import PokemonCard from '@/templates/PokemonCard'
import { GetPokemonResponse } from '@/libs/apis/pokemons/models'
import useInfiniteCall from '@/libs/hooks/useInfiniteCall'
import { getPokemonList } from '@/libs/apis/pokemons/apis'
import Spinner from '@/components/Spinner/Spinner'

export default function PokemonList() {
  const { list, obsRef } = useInfiniteCall<GetPokemonResponse>({ fetcher: getPokemonList })

  if (!list) {
    return (
      <div className="rounded-xl overflow-auto" style={{ height: 'calc(100vh - 70px)' }}>
        <div className="py-6 px-3 bg-white shadow-shadow2 flex items-center justify-center w-352 h-full">
          <Spinner />
        </div>
      </div>
    )
  }

  return (
    <div data-testid="pokemon-list" className="overflow-auto h-full w-[1000px]">
      <div className="grid p-5 grid-cols-3 gap-5">
        {list.results.map((item) => (
          <PokemonCard key={item.name} name={item.name} url={item.url} />
        ))}
      </div>
      <div ref={obsRef} className="py-1.5 bg-red-500 text-white text-center">
        옵저버 Element
      </div>
    </div>
  )
}
