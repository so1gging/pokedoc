import Pokeball from '@/assets/icons/pokeball.svg'
import Logo from '@/assets/icons/logo.svg'
export default function TitleBar() {
  return (
    <div className="flex gap-8 pt-6 pb-12 px-6">
      <Pokeball />
      <Logo />
    </div>
  )
}
