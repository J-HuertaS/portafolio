import type { CaseStudy } from '@/lib/case'
import type { Lang } from '@/lib/i18n'
import type { CaseSlug } from '@/lib/site'
import esResva from './es/resva'
import esRunpath from './es/runpath'
import esSentinel from './es/sentinel'
import enResva from './en/resva'
import enRunpath from './en/runpath'
import enSentinel from './en/sentinel'

const studies: Record<Lang, Record<CaseSlug, CaseStudy>> = {
  es: { resva: esResva, runpath: esRunpath, sentinel: esSentinel },
  en: { resva: enResva, runpath: enRunpath, sentinel: enSentinel },
}

export function getCase(lang: Lang, slug: CaseSlug): CaseStudy {
  return studies[lang][slug]
}
