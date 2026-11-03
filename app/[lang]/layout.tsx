import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { isLang, locales } from '@/lib/i18n'
import '../globals.css'

export const metadata: Metadata = {
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  return (
    <html lang={lang} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
