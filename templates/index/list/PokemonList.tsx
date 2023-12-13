import useInfiniteCall from '@/libs/hooks/useInfiniteCall'
import { GetPokemonResponse } from '@/libs/apis/pokemons/models'
import { getPokemonList } from '@/libs/apis/pokemons/apis'
import Spinner from '@/components/Spinner/Spinner'
import PokemonCard from '@/templates/index/list/PokemonCard'

export default function PokemonList() {
  const { list, obsRef } = useInfiniteCall<GetPokemonResponse>({ fetcher: getPokemonList })

  if (!list) {
    return (
      <div className=" flex items-center justify-center w-full h-screen">
        <Spinner />
      </div>
    )
  }

  return (
    <div data-testid="pokemon-list" className="overflow-auto w-full">
      <div className="flex flex-wrap gap-[10px]">
        {list?.results.map((item) => <PokemonCard key={item.name} name={item.name} url={item.url} />)}
      </div>
      <div ref={obsRef} className="py-1.5 bg-red-500 text-white text-center">
        옵저버 Element
      </div>
    </div>
  )
}
