import Link from 'next/link'
import type { Lang } from '@/lib/i18n'
import { cx } from '@/lib/cx'
import s from './lang-switch.module.css'

/** Selector ES/EN: enlaza la misma página en el otro idioma. */
export function LangSwitch({
  lang,
  hrefs,
  label,
  size = 'md',
}: {
  lang: Lang
  hrefs: Record<Lang, string>
  label: string
  size?: 'sm' | 'md'
}) {
  return (
    <nav aria-label={label} className={cx(s.switch, size === 'sm' && s.sm)}>
      {(['es', 'en'] as const).map((l) => (
        <Link
          key={l}
          href={hrefs[l]}
          hrefLang={l}
          aria-current={l === lang ? 'page' : undefined}
          className={cx(s.option, l === lang && s.active)}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </nav>
  )
}
