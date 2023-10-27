import Pokeball from '@/assets/icons/pokeball.svg'
import { useRouter } from 'next/navigation'
import theme from '@/libs/styles/theme'

export default function Header() {
  const router = useRouter()
  return (
    <div className="relative w-screen h-screen overflow-hidden" onClick={() => router.push('/')}>
      <div className="p-12">
        <span className="text-title">Pokédex</span>
      </div>
      <div className="absolute -right-16 -top-11">
        <Pokeball width={200} fill={theme.color.grayscale.Background} />
      </div>
    </div>
  )
}
