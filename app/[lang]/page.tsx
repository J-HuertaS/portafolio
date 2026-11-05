import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { home } from '@/content/home'
import { ui } from '@/content/ui'
import { isLang } from '@/lib/i18n'
import { caseHref, cvHref, homeHref, site } from '@/lib/site'
import { cx } from '@/lib/cx'
import { LangSwitch } from '@/components/lang-switch'
import { Clock } from '@/components/home/clock'
import { CopyEmail } from '@/components/home/copy-email'
import { Experience } from '@/components/home/experience'
import s from '@/components/home/home.module.css'

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = home[lang]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { languages: { es: homeHref('es'), en: homeHref('en') } },
  }
}

function Seal({ size, className }: { size: number; className?: string }) {
  return (
    <picture className={className}>
      <source media="(prefers-color-scheme: dark)" srcSet="/brand/hatake-dark.svg" />
      <img src="/brand/hatake.svg" alt="畑 (hatake)" width={size} height={size} />
    </picture>
  )
}

function PlateHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className={s.plateHead}>
      <span className={s.kicker}>{kicker}</span>
      <h2 className={s.plateTitle}>{title}</h2>
    </header>
  )
}

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = home[lang]
  const u = ui[lang]
  const a = t.architecture

  return (
    <div className={s.page}>
      <div className={s.topbar}>
        <a href="#" className={s.wordmark} aria-label={site.name}>
          huertas<span className={s.dot}>.</span>
          <span className={s.wordmarkSub}>/dev</span>
        </a>
        <nav aria-label={u.sections} className={s.navLinks}>
          <a href="#proyectos">~/{t.nav.projects.toLowerCase()}</a>
          <a href="#arquitectura">~/{t.nav.architecture.toLowerCase()}</a>
          <a href="#sobre-mi">~/{t.nav.about.toLowerCase()}</a>
          <a href="#contacto">~/{t.nav.contact.toLowerCase()}</a>
        </nav>
        <div className={s.topRight}>
          <span className={s.topClock}>
            Bogotá · <Clock lang={lang} />
          </span>
          <LangSwitch lang={lang} label={u.language} hrefs={{ es: homeHref('es'), en: homeHref('en') }} />
        </div>
      </div>

      {/* LÁMINA 01 */}
      <section className={s.hero}>
        <div className={s.heroArt}>
          <picture>
            <source media="(prefers-color-scheme: dark)" srcSet={`/brand/hero-${lang}-dark.svg`} />
            <img src={`/brand/hero-${lang}-light.svg`} alt="" width={590} height={790} />
          </picture>
        </div>
        <div className={s.heroText}>
          <span className={s.kicker}>{t.heroKicker}</span>
          <div className={s.nameRow}>
            <h1 className={s.name}>
              Juan
              <br />
              Huertas
            </h1>
            <Seal size={66} className={s.nameSeal} />
          </div>
          <p className={s.tagline}>{t.tagline}</p>
          <p className={s.lead}>{t.heroLead}</p>
          <figure className={s.specimen} aria-label="specimen.ts">
            <figcaption className={s.specimenHead}>
              <span>specimen.ts</span>
              <span>
                <span className={s.kanji}>育</span> · SODATERU
              </span>
            </figcaption>
            <pre>
              <code>
                <span className={s.kw}>const</span> juan = {'{'}
                {'\n  '}role: <span className={s.str}>&quot;software engineer&quot;</span>,{'\n  '}based:{' '}
                <span className={s.str}>&quot;bogotá&quot;</span>,{'\n  '}thinks_in: [
                <span className={s.str}>&quot;quality attributes&quot;</span>, <span className={s.str}>&quot;trade-offs&quot;</span>],
                {'\n  '}practice: [<span className={s.str}>&quot;design&quot;</span>, <span className={s.str}>&quot;prune&quot;</span>,{' '}
                <span className={s.str}>&quot;wait&quot;</span>],{'\n  '}status: <span className={s.str}>&quot;open to work&quot;</span>,
                {'\n'}
                {'};'}
              </code>
            </pre>
          </figure>
          <div className={s.actions}>
            <a href="#proyectos" className={cx('nav', s.btnPrimary)}>
              {t.seeWork}{' '}
              <span className="go" aria-hidden="true">
                →
              </span>
            </a>
            <a href={cvHref[lang]} target="_blank" rel="noopener" className={s.btnSecondary}>
              {u.downloadCv} ↓
            </a>
          </div>
        </div>
      </section>

      {/* LÁMINA 02 */}
      <section id="experiencia" className={s.plate}>
        <PlateHead kicker={t.plates.experience} title={t.titles.experience} />
        <Experience t={t} />
      </section>

      {/* LÁMINA 03 */}
      <section id="proyectos" className={s.plate}>
        <PlateHead kicker={t.plates.projects} title={t.titles.projects} />
        <div className={s.cases}>
          {t.projects.map((p, i) => {
            const featured = i === 0
            return (
              <Link key={p.slug} href={caseHref(lang, p.slug)} className={cx('row', s.caseRow, featured && s.caseFeatured)}>
                <div className={s.caseMain}>
                  <span className={s.caseNo}>
                    {t.caseFile} 00{i + 1}
                  </span>
                  <h3 className={s.caseName}>{p.name}</h3>
                  <span className={s.caseMeta}>{p.meta}</span>
                </div>
                <div className={s.caseSide}>
                  <p className={s.caseDesc}>{p.description}</p>
                  {p.stack && <span className={s.caseStack}>{p.stack}</span>}
                  <span className={s.caseRead}>
                    {t.readCase}{' '}
                    <span className="go" aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
                {featured && (
                  <div className={s.shotFrame}>
                    <div className={s.shot}>
                      <Image
                        src="/images/resva-panel.png"
                        alt={
                          lang === 'es'
                            ? 'Panel de Resva: inicio del propietario con reservas, cobros, ocupación del día y sus sedes'
                            : "Resva dashboard: an owner's home with bookings, payments, today's occupancy and locations"
                        }
                        fill
                        sizes="(max-width: 1360px) 100vw, 1200px"
                      />
                    </div>
                    <span className={s.shotCaption}>
                      fig. c — resva.digital · {lang === 'es' ? 'panel del propietario' : "owner's dashboard"}
                    </span>
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </section>

      {/* LÁMINA 04 */}
      <section id="arquitectura" className={s.plate}>
        <PlateHead kicker={t.plates.architecture} title={t.titles.architecture} />
        <div className={s.tree}>
          <div className={s.node}>
            <span className={s.nodeKey}>{a.craft.key}</span>
          </div>
          <div className={s.sub}>
            {a.craft.branches.map((b) => (
              <div key={b.label} className={s.branch}>
                <span className={s.branchLabel}>{b.label}</span>
                <span className={s.val}>{b.value}</span>
              </div>
            ))}
          </div>

          <div className={s.ground} aria-hidden="true">
            <span>{a.above}</span>
            <span>{a.below}</span>
          </div>

          <div className={s.node}>
            <span className={s.nodeKey}>{a.arch.key}</span>
          </div>
          <div className={s.sub}>
            {a.arch.branches.map((b) => (
              <div key={b.label} className={s.branch}>
                <span className={s.branchLabel}>{b.label}</span>
                <span className={s.val}>{b.value}</span>
              </div>
            ))}
            <div className={s.branch}>
              <span className={s.branchLabel}>{a.arch.quality}</span>
              <span className={cx(s.val, s.valMuted)}>{a.arch.qualityHead}</span>
              <span className={s.whereHead}>{a.arch.whereHead}</span>
            </div>
            <div className={s.sub2}>
              {a.qualities.map((q) => (
                <div key={q.attribute} className={s.qrow}>
                  <span className={s.qAttr}>{q.attribute}</span>
                  <span className={s.qTactic}>{q.tactic}</span>
                  <span className={s.qWhere}>{q.where}</span>
                </div>
              ))}
            </div>
          </div>

          {a.roots.map((r) => (
            <div key={r.key} className={s.node}>
              <span className={s.nodeKey}>{r.key}</span>
              <span className={s.val}>{r.value}</span>
            </div>
          ))}
          <div className={cx(s.node, s.nodeNew)}>
            <span className={s.nodeKey}>{a.newGrowth.key}</span>
            <span className={cx(s.val, s.valMuted)}>
              {a.newGrowth.value} {a.newGrowth.note}
            </span>
          </div>
        </div>
        <p className={s.fig}>{a.fig}</p>
      </section>

      {/* LÁMINA 05 */}
      <section id="sobre-mi" className={s.plate}>
        <PlateHead kicker={t.plates.about} title={t.titles.about} />
        <div className={s.aboutGrid}>
          <p className={s.aboutText}>{t.about}</p>
          <figure className={s.photo}>
            <div className={s.photoFrame}>
              <Image src="/images/juan.jpg" alt={u.photoAlt} fill sizes="(max-width: 960px) 60vw, 280px" className={s.photoImg} />
            </div>
            <figcaption>fig. f — {lang === 'es' ? 'espécimen recolectado en Bogotá' : 'specimen collected in Bogotá'}</figcaption>
          </figure>
        </div>
        <h3 className={s.currentlyTitle}>{t.titles.currently}</h3>
        <ul className={s.currently}>
          {t.currently.map((c) => (
            <li key={c.verb}>
              <span className={cx(s.verb, c.accent && s.verbAccent)}>{c.verb}</span>
              <span>{c.text}</span>
              {c.aside && <span className={s.aside}>{c.aside}</span>}
            </li>
          ))}
        </ul>
      </section>

      {/* LÁMINA 06 */}
      <section id="contacto" className={s.plate}>
        <PlateHead kicker={t.plates.contact} title={t.contactLead} />
        <p className={s.contactSub}>{t.contactSub}</p>
        <div className={s.contactActions}>
          <CopyEmail variant="large" label={u.copyEmail} copiedLabel={u.copied} />
          <div className={s.contactLinks}>
            <a href={site.github} target="_blank" rel="noopener">
              ~/github
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener">
              ~/linkedin
            </a>
            <a href={cvHref[lang]} target="_blank" rel="noopener">
              ~/cv ↓
            </a>
          </div>
        </div>

        <footer className={s.colophon}>
          <div>
            <span className={s.colophonName}>{site.name}</span>
            <span className={s.colophonSub}>
              {t.tagline} · © 2026 · Bogotá, <Clock lang={lang} />
            </span>
          </div>
          <div className={s.colophonRight}>
            <div className={s.motto}>
              <span className={s.kanjiLarge}>育てる</span>
              <span className={s.colophonSub}>{t.motto}</span>
            </div>
            <Seal size={76} className={s.colophonSeal} />
          </div>
        </footer>
      </section>
    </div>
  )
}
