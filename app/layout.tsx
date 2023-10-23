import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
// import {HashRouter} from 'react-router-dom'
const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Octosave',
  description: 'Instagram downloader',
  
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icon512_rounded.png" type="image/x-icon" />
         <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
       {/* <HashRouter> */}
        {children}
       {/* </HashRouter> */}
      </body>
    </html>
  )
}
