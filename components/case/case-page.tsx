import { Fragment } from 'react'
import Link from 'next/link'
import type { CaseStudy } from '@/lib/case'
import type { Lang } from '@/lib/i18n'
import { caseHref, homeHref, site } from '@/lib/site'
import { cx } from '@/lib/cx'
import { LangSwitch } from '@/components/lang-switch'
import { ui } from '@/content/ui'
import s from './case.module.css'

export function CasePage({ lang, study }: { lang: Lang; study: CaseStudy }) {
  const t = ui[lang]
  const hrefFor = (target: CaseStudy['pager'][number]['target'], l: Lang) =>
    target === 'home' ? `${homeHref(l)}#proyectos` : caseHref(l, target)

  return (
    <div className={s.page}>
      <div className={s.topbar}>
        <Link href={homeHref(lang)} className={cx(s.back, 'back')}>
          <span className="go" aria-hidden="true">
            ←
          </span>
          {site.shortName}
        </Link>
        <div className={s.topRight}>
          <span className={s.crumb}>
            {t.projects} / {study.number}
          </span>
          <LangSwitch lang={lang} label={t.language} size="sm" hrefs={{ es: caseHref('es', study.slug), en: caseHref('en', study.slug) }} />
        </div>
      </div>

      <header className={s.header}>
        <span className={s.kicker}>{study.kicker}</span>
        <h1 className={s.title}>{study.title}</h1>
        <p className={s.lead}>{study.lead}</p>
        {study.link && (
          <a href={study.link.href} target="_blank" rel="noopener" className={cx(s.productLink, 'nav')}>
            {study.link.label}{' '}
            <span className="go" aria-hidden="true">
              ↗
            </span>
          </a>
        )}
        <dl className={s.meta}>
          {study.meta.map((m) => (
            <div key={m.term}>
              <dt>{m.term}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className={s.figures}>{study.figures}</div>

      <div className={s.layout}>
        <nav className={s.toc} aria-label={study.tocLabel}>
          <span className={s.tocLabel}>{study.tocLabel}</span>
          {study.sections.map((sec) => (
            <a key={sec.id} href={`#${sec.id}`}>
              {sec.label}
            </a>
          ))}
        </nav>
        <article className={s.article}>
          {study.sections.map((sec) => (
            <Fragment key={sec.id}>{sec.body}</Fragment>
          ))}
        </article>
      </div>

      <nav className={s.pager} aria-label={t.moreProjects}>
        {study.pager.map((p) => (
          <Link key={p.dir} href={hrefFor(p.target, lang)} className={cx(s.pagerLink, p.dir === 'next' ? cx(s.pagerNext, 'nav') : 'back')}>
            <span className={s.pagerLabel}>
              {p.dir === 'prev' && (
                <span className="go" aria-hidden="true">
                  ←{' '}
                </span>
              )}
              {p.label}
              {p.dir === 'next' && (
                <span className="go" aria-hidden="true">
                  {' '}
                  →
                </span>
              )}
            </span>
            <span className={s.pagerName}>{p.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
