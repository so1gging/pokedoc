'use client'
import HomeTemplate from '@/templates/pages/home/HomeTemplate'
import Pokeball from '@/assets/icons/pokeball.svg'
import theme from '@/libs/styles/theme'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <div className="relative w-screen h-screen overflow-hidden">
          <div className="absolute -right-16 -top-11">
            <Pokeball width={200} fill={theme.color.grayscale.Background} />
          </div>
          <HomeTemplate />
        </div>
      </QueryClientProvider>
    </main>
  )
}
