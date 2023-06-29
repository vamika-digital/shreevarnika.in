import './globals.css'
import { Inter } from 'next/font/google'
import TopNavigation from '@/components/layout/top-navigation'
import MainFooter from '@/components/layout/main-footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shree Varnika Royal Products Private Limited',
  description: 'Shree Varnika Royal Products Private Limited',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <div className="bg-white">
          <TopNavigation />
          {children}
          <MainFooter />
        </div>
      </body>
    </html>
  )
}
