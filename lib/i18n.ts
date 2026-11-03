export const locales = ['es', 'en'] as const
export type Lang = (typeof locales)[number]
export const defaultLang: Lang = 'es'

export function isLang(value: string): value is Lang {
  return (locales as readonly string[]).includes(value)
}

export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es'
}
