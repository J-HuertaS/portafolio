import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CasePage } from '@/components/case/case-page'
import { getCase } from '@/content/cases'
import { isLang, locales } from '@/lib/i18n'
import { caseHref, caseSlugs, isCaseSlug } from '@/lib/site'

export function generateStaticParams() {
  return locales.flatMap((lang) => caseSlugs.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLang(lang) || !isCaseSlug(slug)) return {}
  const study = getCase(lang, slug)
  return {
    title: `${study.title} — ${lang === 'es' ? 'Caso de estudio' : 'Case study'} · Juan Esteban Cárdenas`,
    description: study.lead,
    alternates: { languages: { es: caseHref('es', slug), en: caseHref('en', slug) } },
  }
}

export default async function Page({ params }: PageProps<'/[lang]/[slug]'>) {
  const { lang, slug } = await params
  if (!isLang(lang) || !isCaseSlug(slug)) notFound()
  return <CasePage lang={lang} study={getCase(lang, slug)} />
}
