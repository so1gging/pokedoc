'use client'
import Pokeball from '@/assets/icons/pokeball.svg'
import theme from '@/libs/styles/theme'
import Image from 'next/image'

interface CardProps {
  number: string
  name: string
  types?: string[]
  color?: string
  imageUrl: string
}
export default function Card({ number, name, imageUrl, types, color }: CardProps) {
  return (
    <div className={`w-full h-full shadow-shadow1 rounded-[12px] ${color}`}>
      <div className="relative w-full h-full overflow-hidden pt-[10px] pb-[10px] px-[15px]">
        <div className="absolute -right-10 -top-8">
          <Pokeball width={120} fill={theme.color.grayscale.Background} opacity={0.2} />
        </div>
        <div className="flex flex-col gap-[3px]">
          <div className="flex flex-col">
            <div className="text-caption text-white">#{number}</div>
            <div className="text-heading3 text-white">{name}</div>
          </div>
          <div className="flex flex-col gap-[5px]">
            {types?.map((sub) => (
              <div
                key={sub}
                className="text-caption w-fit text-white p-[2px] px-[13px] rounded-[15px]"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                {sub}
              </div>
            ))}
          </div>
          <div className="absolute bottom-[10px] right-[5px]">
            <Image src={imageUrl} width={85} height={85} alt={'pokemon'} />
          </div>
        </div>
      </div>
    </div>
  )
}
