import './globals.css'
import { Roboto } from 'next/font/google'
import Root from '@/templates/layout/Root'
// These styles apply to every route in the application

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Root>{children}</Root>
      </body>
    </html>
  )
}
