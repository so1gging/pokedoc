import PokemonListPanel from '@/templates/pages/home/list/PokemonListPanel'

export default function HomeTemplate() {
  return (
    <div className="fixed w-full h-full top-0 z-50 pt-32 pl-12 pr-12 pb-12 flex justify-center">
      <PokemonListPanel />
    </div>
  )
}
