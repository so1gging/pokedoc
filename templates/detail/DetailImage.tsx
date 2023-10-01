import Image from 'next/image'

interface DetailImageProps {
  id: number
}
export default function DetailImage({ id }: DetailImageProps) {
  return (
    <Image
      width={200}
      height={200}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
      alt="detail"
    />
  )
}
