import type { Metadata } from 'next'
import { Unbounded, Roboto, Roboto_Flex, Barriecito } from 'next/font/google'
import './globals.css'
import Analytics from './components/analytics'

const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin'],
  display: 'swap',
  weight: ['900'],
})
const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
})
const barriecito = Barriecito({
  variable: '--font-barriecito',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})
const robotoFlex = Roboto_Flex({
  variable: '--font-roboto-flex',
  subsets: ['latin'],
  display: 'swap',
  axes: ['wdth'],
})

export const metadata: Metadata = {
  title: 'Les Gniarfs – La BD que vous devez lire à tout prix !',
  description:
    'Tout ce que vous vouliez savoir sur les Gniarfs sans oser le demander : où les lire ? quand les lire ? pourquoi les lire ?',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable} ${roboto.variable} ${robotoFlex.variable} ${barriecito.variable} antialiased`}
      >
        <Analytics GA_MEASUREMENT_ID="G-TZ8ZTVR2VW" />
        {children}
      </body>
    </html>
  )
}
