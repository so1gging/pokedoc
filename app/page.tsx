import { getPokemon } from '@/libs/apis/pokemons/apis'
import PokemonList from '@/templates/PokemonList'
import TitleBar from '@/templates/layout/TitleBar'

export default async function Home() {
  const dd = await getPokemon()

  console.log('pokemon/123/'.match('(?<=pokemon/)(.*)(?=/)'))
  return (
    <main>
      <TitleBar />
      <PokemonList data={dd} />
    </main>
  )
}
