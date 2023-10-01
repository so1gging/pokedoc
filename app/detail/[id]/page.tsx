'use client'
import { useGetPokemonDetail } from '@/libs/apis/pokemon/apis'
import TypeBadge from '@/components/TypeBadge/TypeBadge'
import DetailHeader from '@/templates/detail/DetailHeader'
import DetailOverview from '@/templates/detail/DetailOverview'
import DetailImage from '@/templates/detail/DetailImage'
import DetailAbout from '@/templates/detail/DetailAbout'

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useGetPokemonDetail(params.id)

  if (!data) {
    return null
  }

  return (
    <>
      <DetailOverview
        type={data.types[0].type.name}
        header={<DetailHeader name={data.name} id={data.id} />}
        pokemonImage={<DetailImage id={data.id} />}
      />
      {/* 상세 */}
      <div className="w-full flex flex-col gap-4 items-center pt-20">
        <div className="flex gap-1">
          {data?.types.map((item) => <TypeBadge key={item.type.name} title={item.type.name} type={item.type.name} />)}
        </div>
        <DetailAbout
          weight={data.weight}
          height={data.height}
          abilities={data.abilities.map((item) => item.ability.name)}
        />
      </div>
    </>
  )
}
