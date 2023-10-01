import Pokeball from '@/assets/icons/pokeball.svg'
import Logo from '@/assets/icons/logo.svg'
import { useRouter } from 'next/navigation'
export default function TitleBar() {
  const router = useRouter()
  return (
    <div className="flex gap-4 pt-3 pb-6 px-3 cursor-pointer" onClick={() => router.push('/')}>
      <Pokeball width={24} fill="white" />
      <Logo />
    </div>
  )
}
