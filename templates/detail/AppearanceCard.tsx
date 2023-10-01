import { CommonPokemonImgType } from '@/libs/apis/common/models'
import Image from 'next/image'
import { isNotNil } from '@/libs/utils/functions'

type AppearanceType = keyof CommonPokemonImgType

const APPEARANCE_KEYS: AppearanceType[] = ['front_default', 'back_default', 'front_shiny', 'back_shiny']

interface AppearanceCardProps {
  item: CommonPokemonImgType
  size?: number
}
export default function AppearanceCard({ item, size = 96 }: AppearanceCardProps) {
  const filtered = APPEARANCE_KEYS.filter((key) => isNotNil(item[key]))

  return (
    <div className="grid grid-cols-4">
      {filtered.map((key) => (
        <Image key={key} width={size} height={size} src={item[key]} alt={`detail-appearance-${key}`} />
      ))}
    </div>
  )
}
