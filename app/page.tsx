'use client'
import Header from '@/templates/layout/Header'
import PokemonList from '@/templates/PokemonList'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="fixed w-full h-full top-0 z-50 pt-32 pl-12 pr-12 pb-12 flex justify-center">
        <PokemonList />
      </div>
    </main>
  )
}
