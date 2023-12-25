import './globals.css'
import { Montserrat } from 'next/font/google'
import { Suspense } from 'react'
import Loading from '@/pages/Loading'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={`${montserrat.className} bg-white dark:bg-black`}>
        <Suspense fallback={ <Loading /> }>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
