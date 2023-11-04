import Back from '@/assets/icons/arrow_back.svg'
import { useRouter } from 'next/navigation'

interface DetailHeaderProps {
  id: number
  name: string
}
export default function DetailHeader({ id, name }: DetailHeaderProps) {
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className="w-full flex gap-2 items-center pt-5 pb-6 px-5 justify-between">
      <Back width="48px" fill="white" onClick={handleBack} className="cursor-pointer" />
      <span className="text-headline text-white">{name}</span>
      <span className="text-subtitle2 text-white">#{id}</span>
    </div>
  )
}
