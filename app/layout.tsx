import './globals.css'
import { Roboto } from 'next/font/google'
import LootRayout from '@/templates/LootRayout'
// These styles apply to every route in the application

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <LootRayout>{children}</LootRayout>
      </body>
    </html>
  )
}
