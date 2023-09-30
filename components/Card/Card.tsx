'use client'
import Image from 'next/image'

interface CardProps {
  subtitle: string
  title: string
  src: string
}
export default function Card({ subtitle, title, src }: CardProps) {
  return (
    <div className="flex flex-col w-104 h-108 shadow-shadow2 bg-white rounded-md relative justify-between">
      <span className="text-right text-grayscale-Medium text-caption py-2 px-4">#{subtitle}</span>
      <div className="absolute top-6 left-8">
        <Image src={src} width={72} height={72} alt={'pokemon'} />
      </div>
      <div className="w-full bg-grayscale-Background text-center pt-12 px-4 pb-2">{title}</div>
    </div>
  )
}
