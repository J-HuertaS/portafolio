import type { Lang } from './i18n'

export const site = {
  name: 'Juan Esteban Cárdenas Huertas',
  shortName: 'Juan Esteban Cárdenas',
  email: 'juan.cardenas.huertas@gmail.com',
  github: 'https://github.com/J-HuertaS',
  linkedin: 'https://www.linkedin.com/in/juan-huertaszz',
  timeZone: 'America/Bogota',
} as const

export const cvHref: Record<Lang, string> = {
  es: '/cv/CV-Juan-Esteban-Cardenas-ES.pdf',
  en: '/cv/CV-Juan-Esteban-Cardenas-EN.pdf',
}

export const caseSlugs = ['resva', 'runpath', 'sentinel'] as const
export type CaseSlug = (typeof caseSlugs)[number]

export function isCaseSlug(value: string): value is CaseSlug {
  return (caseSlugs as readonly string[]).includes(value)
}

export const homeHref = (lang: Lang) => `/${lang}`
export const caseHref = (lang: Lang, slug: CaseSlug) => `/${lang}/${slug}`
