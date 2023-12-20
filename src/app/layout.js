import { Montserrat } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Loading from '@/pages/Loading'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
