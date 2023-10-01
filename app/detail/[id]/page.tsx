'use client'
import { useGetPokemonDetail } from '@/libs/apis/pokemon/apis'
import TypeBadge from '@/components/TypeBadge/TypeBadge'
import DetailHeader from '@/templates/detail/DetailHeader'
import DetailOverview from '@/templates/detail/DetailOverview'
import DetailImage from '@/templates/detail/DetailImage'
import DetailAbout from '@/templates/detail/DetailAbout'
import { useGetPokemonSpecies } from '@/libs/apis/pokemon-species/api'
import DetailBaseStats from '@/templates/detail/DetailBaseStats'
import DetailAppearance from '@/templates/detail/DetailAppearance'

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useGetPokemonDetail(params.id)
  const { data: speciesData } = useGetPokemonSpecies(params.id)

  if (!data || !speciesData) {
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
      <div className="w-full flex flex-col gap-4 items-center pt-20 px-5">
        <div className="flex gap-1">
          {data?.types.map((item) => <TypeBadge key={item.type.name} title={item.type.name} type={item.type.name} />)}
        </div>
        <DetailAbout
          weight={data.weight}
          height={data.height}
          abilities={data.abilities.map((item) => item.ability.name)}
        />
        <span className="text-center">{speciesData.flavor_text_entries[0].flavor_text}</span>
        <DetailBaseStats stats={data.stats} />
        <DetailAppearance basic={data.sprites} versions={data.sprites.versions} />
      </div>
    </>
  )
}
