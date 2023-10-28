'use client'
import { ReactNode } from 'react'
import Pokeball from '@/assets/icons/pokeball.svg'
import theme from '@/libs/styles/theme'

interface CardProps {
  title: string
  content: ReactNode
  subTitles: string[]
  color?: string
}
export default function Card({ title, content, subTitles, color }: CardProps) {
  return (
    <div className={`flex flex-col w-[280px] h-[200px] shadow-shadow1 rounded-[20px] ${color}`}>
      <div className="relative w-full h-full overflow-hidden pt-[50px] pb-[10px] px-[15px]">
        <div className="absolute -right-16 -top-11">
          <Pokeball width={200} fill={theme.color.grayscale.Background} opacity={0.2} />
        </div>
        <div className="text-headline text-white">{title}</div>
        <div className="flex flex-col gap-[10px]">
          {subTitles.map((sub) => (
            <div
              key={sub}
              className="text-subtitle1 w-fit font-medium text-white p-[8px] px-[20px] rounded-[20px]"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              {sub}
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 right-[10px]">{content}</div>
      </div>
    </div>
  )
}
