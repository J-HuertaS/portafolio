import type { ReactNode } from 'react'
import type { CaseSlug } from './site'

export interface CaseSection {
  id: string
  /** Texto corto para el índice lateral. */
  label: string
  body: ReactNode
}

export interface CasePagerLink {
  label: string
  name: string
  target: CaseSlug | 'home'
  dir: 'prev' | 'next'
}

export interface CaseStudy {
  slug: CaseSlug
  number: string
  kicker: string
  title: string
  lead: string
  link?: { href: string; label: string }
  meta: { term: string; value: string }[]
  tocLabel: string
  figures: ReactNode
  sections: CaseSection[]
  pager: CasePagerLink[]
}
