import Navbar from '@components/navbar/navbar.js'
import '@styles/globals.css'
export const metadata = {
  title: 'Input Field App',
  description: 'Tugas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
