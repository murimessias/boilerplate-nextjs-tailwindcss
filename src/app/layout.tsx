import { Inter } from 'next/font/google'

import '../styles/globals.css'

export const metadata = {
  title: 'Boilerplate NextJS + TailwindCSS',
  description: 'A simple Boilerplate with NextJS and TailwindCSS',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}
