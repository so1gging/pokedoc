import useInfiniteCall from '@/libs/hooks/useInfiniteCall'
import { GetPokemonResponse } from '@/libs/apis/pokemons/models'
import { getPokemonList } from '@/libs/apis/pokemons/apis'
import Spinner from '@/components/Spinner/Spinner'
import PokemonCard from '@/templates/pages/home/list/PokemonCard'

export default function PokemonListPanel() {
  const { list, loading, obsRef } = useInfiniteCall<GetPokemonResponse>({ fetcher: getPokemonList })

  if (loading || !list) {
    return (
      <div className="bg-white flex items-center justify-center w-full h-full">
        <Spinner />
      </div>
    )
  }

  return (
    <div data-testid="pokemon-list" className="overflow-auto h-full w-[1000px]">
      <div className="grid p-5 grid-cols-3 gap-5">
        {list?.results.map((item) => <PokemonCard key={item.name} name={item.name} url={item.url} />)}
      </div>
      <div ref={obsRef} className="py-1.5 bg-red-500 text-white text-center">
        옵저버 Element
      </div>
    </div>
  )
}
