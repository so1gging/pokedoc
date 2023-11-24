'use client'
import Header from '@/templates/layout/Header'
import HomeTemplate from '@/templates/pages/home/HomeTemplate'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="fixed w-full h-full top-0 z-50 pt-32 pl-12 pr-12 pb-12 flex justify-center">
        <HomeTemplate />
      </div>
    </main>
  )
}
