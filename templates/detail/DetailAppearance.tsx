import { CommonPokemonImgType } from '@/libs/apis/common/models'
import { PokemonVersionsGeneration } from '@/libs/apis/pokemon/models'
import AppearanceCard from '@/templates/detail/AppearanceCard'

interface DetailAppearanceProps {
  basic: CommonPokemonImgType
  versions: PokemonVersionsGeneration
}

export default function DetailAppearance({ basic, versions }: DetailAppearanceProps) {
  return (
    <>
      <span className="text-subtitle1 text-grayscale-wireframe">Appearance</span>
      <AppearanceCard item={basic} />
    </>
  )
}
