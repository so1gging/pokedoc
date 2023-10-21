import { PokemonType } from '@/libs/utils/types'
import TypeBadge from '@/components/TypeBadge/TypeBadge'

interface DetailTypesProps {
  types: PokemonType[]
}
export default function DetailTypes({ types }: DetailTypesProps) {
  return (
    <div className="flex gap-1">
      {types.map((name) => (
        <TypeBadge key={name} title={name} type={name} />
      ))}
    </div>
  )
}
