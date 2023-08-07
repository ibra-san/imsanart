
import 'bootstrap/dist/css/bootstrap.css'
import "./global.css"
import "./styles/navbar.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = { // This holds the meta data information of the site
  title: 'imsanart',
  description: 'Crafted by imsan',
  name: 'viewport', 
  content: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
