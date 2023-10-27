'use client'
import { ReactNode } from 'react'

interface CardProps {
  subtitle: string
  title: string
  content: ReactNode
}
export default function Card({ subtitle, title, content }: CardProps) {
  return (
    <div className="flex flex-col shadow-shadow1 bg-white rounded-md relative justify-between">
      <span className="text-right text-grayscale-medium text-caption py-1 px-2">#{subtitle}</span>
      <div className="absolute top-1 left-1/2 -translate-x-1/2">{content}</div>
      <div className="w-full bg-grayscale-Background text-center pt-12 px-2 pb-1 rounded-b">{title}</div>
    </div>
  )
}
