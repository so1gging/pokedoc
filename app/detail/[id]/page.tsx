'use client'
import TypeBadge from '@/components/TypeBadge/TypeBadge'
import DetailHeader from '@/templates/detail/DetailHeader'
import DetailOverview from '@/templates/detail/DetailOverview'
import DetailImage from '@/templates/detail/DetailImage'
import DetailAbout from '@/templates/detail/DetailAbout'
import DetailBaseStats from '@/templates/detail/DetailBaseStats'
import DetailAppearance from '@/templates/detail/DetailAppearance'
import Spinner from '@/components/Spinner/Spinner'
import useGetPokemonAllDetails from '@/templates/detail/hooks/useGetPokemonAllDetails'

export default function Page({ params }: { params: { id: string } }) {
  const detailData = useGetPokemonAllDetails(params.id)

  if (!detailData) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <>
      <DetailOverview
        type={detailData.types[0]}
        header={<DetailHeader name={detailData.name} id={detailData.id} />}
        pokemonImage={<DetailImage id={detailData.id} />}
      />
      <div className="w-full flex flex-col gap-4 items-center pt-20 px-5">
        <div className="flex gap-1">
          {detailData.types.map((name) => (
            <TypeBadge key={name} title={name} type={name} />
          ))}
        </div>
        <DetailAbout weight={detailData.weight} height={detailData.height} abilities={detailData.abilities} />
        <span className="text-center">{detailData.flavor}</span>
        <DetailBaseStats stats={detailData.stats} />
        <DetailAppearance basic={detailData.sprites} versions={detailData.sprites.versions} />
      </div>
    </>
  )
}
