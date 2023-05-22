import NavComponent from './components/NavComponent'
import Footer from './components/Footer'
import './globals.css'

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Senso-skates :)',
  description: 'Wen site de skates para skates',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
          <NavComponent/>
            {children}
          <Footer/>
      </body>
    </html>
  )
}
