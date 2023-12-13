'use client'
import './globals.css'
import { Roboto } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

const client = new QueryClient()
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <QueryClientProvider client={client}>
          <div className="w-screen h-screen flex justify-center overflow-hidden">
            <div className="min-w-[352px] max-w-[430px]">{children}</div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  )
}
