'use client'
import './globals.css'
import { Roboto } from 'next/font/google'
import Root from '@/templates/layout/Root'
import { QueryClient, QueryClientProvider } from 'react-query'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

const client = new QueryClient()
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <QueryClientProvider client={client}>
          <Root>{children}</Root>
        </QueryClientProvider>
      </body>
    </html>
  )
}
