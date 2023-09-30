'use client'
import TitleBar from '@/templates/layout/TitleBar'
import PokemonList from '@/templates/PokemonList'

export default function Home() {
  return (
    <main>
      <TitleBar />
      <PokemonList />
    </main>
  )
}
