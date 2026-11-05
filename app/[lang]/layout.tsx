import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import localFont from 'next/font/local'
import { isLang, locales } from '@/lib/i18n'
import { WatercolorTrail } from '@/components/watercolor-trail'
import '../globals.css'

/* La voz: Instrument Serif. Los hechos: JetBrains Mono. El kanji del lema: Zen Antique (solo 育てる). */
const instrument = localFont({
  src: [
    { path: '../fonts/instrument-serif.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/instrument-serif-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-instrument',
  display: 'swap',
})
const jetbrains = localFont({
  src: [
    { path: '../fonts/jetbrains-mono-400.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/jetbrains-mono-500.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/jetbrains-mono-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-jetbrains',
  display: 'swap',
})
const zen = localFont({
  src: '../fonts/zen-antique-sodateru.woff2',
  variable: '--font-zen',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#141414' },
  ],
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  return (
    <html lang={lang} className={`${instrument.variable} ${jetbrains.variable} ${zen.variable}`}>
      <body>
        <WatercolorTrail />
        <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
      </body>
    </html>
  )
}
