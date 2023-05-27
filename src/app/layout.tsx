import './globals.css'
import Wrapper from "@/components/shared/wrapper"
import Navbar from "@/components/views/navbar"
import { Maven_Pro } from 'next/font/google'

const inter = Maven_Pro({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <Navbar/>
        {children}
        </Wrapper>
        </body>
    </html>
  )
}