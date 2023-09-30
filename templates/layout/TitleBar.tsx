import Pokeball from '@/assets/icons/pokeball.svg'
import Logo from '@/assets/icons/logo.svg'
export default function TitleBar() {
  return (
    <div className="flex gap-4 pt-3 pb-6 px-3">
      <Pokeball width={24} fill="white" />
      <Logo />
    </div>
  )
}
