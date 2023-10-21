'use client'
import DetailHeader from '@/templates/detail/DetailHeader'
import DetailOverview from '@/templates/detail/DetailOverview'
import DetailImage from '@/templates/detail/DetailImage'
import DetailAbout from '@/templates/detail/DetailAbout'
import DetailBaseStats from '@/templates/detail/DetailBaseStats'
import DetailAppearance from '@/templates/detail/DetailAppearance'
import Spinner from '@/components/Spinner/Spinner'
import useGetPokemonAllDetails from '@/templates/detail/hooks/useGetPokemonAllDetails'
import DetailContents from '@/templates/detail/DetailContents'
import DetailTypes from '@/templates/detail/DetailTypes'

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
      <DetailContents>
        <DetailTypes types={detailData.types} />
        <DetailAbout weight={detailData.weight} height={detailData.height} abilities={detailData.abilities} />
        <span className="text-center">{detailData.flavor}</span>
        <DetailBaseStats stats={detailData.stats} />
        <DetailAppearance basic={detailData.sprites} versions={detailData.sprites.versions} />
      </DetailContents>
    </>
  )
}
