import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { home } from '@/content/home'
import { ui } from '@/content/ui'
import { isLang, type Lang } from '@/lib/i18n'
import { caseHref, cvHref, homeHref, site } from '@/lib/site'
import { cx } from '@/lib/cx'
import { LangSwitch } from '@/components/lang-switch'
import { ArrowIcon, GitHubIcon, LinkedInIcon } from '@/components/icons'
import { Avatar } from '@/components/home/avatar'
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

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = home[lang]
  const u = ui[lang]

  return (
    <div className={s.page}>
      <IdentityCard lang={lang} />

      <div className={s.topbar}>
        <nav aria-label={u.sections} className={s.navLinks}>
          <a href="#" aria-current="page" className={s.navActive}>
            {t.nav.home}
          </a>
          <a href="#proyectos">{t.nav.projects}</a>
          <a href="#experiencia">{t.nav.experience}</a>
          <a href="#sobre-mi">{t.nav.about}</a>
          <a href="#contacto">{t.nav.contact}</a>
        </nav>
        <span className={s.topClock}>
          Bogotá, <Clock lang={lang} />
        </span>
        <LangSwitch lang={lang} label={u.language} hrefs={{ es: homeHref('es'), en: homeHref('en') }} />
      </div>

      <section className={s.hero}>
        <span className={s.heroName}>{site.name}</span>
        <h1 className={s.heroTitle}>
          {t.heroTitle[0]} <br />
          {t.heroTitle[1]}
          <span className={s.dot}>.</span>
        </h1>
        <p className={s.heroLead}>{t.heroLead}</p>
      </section>

      <section id="experiencia" className={s.experience}>
        <h2 className={s.h2}>{t.nav.experience}</h2>
        <Experience t={t} />
      </section>

      <section id="proyectos" className={s.projects}>
        <h2 className={cx(s.h2, s.projectsTitle)}>{t.nav.projects}</h2>
        {t.projects.map((p, i) => {
          const featured = i === 0
          return (
            <Link key={p.slug} href={caseHref(lang, p.slug)} className={cx('row', s.row, featured && s.rowFeatured)}>
              <div className={s.rowMain}>
                <span className={cx(s.rowNum, featured && s.rowNumFeatured)}>0{i + 1}</span>
                <h3 className={cx(s.rowTitle, featured && s.rowTitleFeatured)}>{p.name}</h3>
                <span className={s.rowMeta}>{p.meta}</span>
              </div>
              <div className={cx(s.rowSide, featured && s.rowSideFeatured)}>
                <p className={cx(s.rowDesc, featured && s.rowDescFeatured)}>{p.description}</p>
                {p.stack && <span className={s.rowStack}>{p.stack}</span>}
                {featured ? (
                  <span className={s.readPill}>
                    {t.readCase}
                    <span className={cx('go', s.readBadge)}>
                      <ArrowIcon color="#0A0A0A" width={1.7} />
                    </span>
                  </span>
                ) : (
                  <span className={s.readLink}>
                    {t.readCase}
                    <span className="go">
                      <ArrowIcon />
                    </span>
                  </span>
                )}
              </div>
              {featured && (
                <div className={s.shot}>
                  <Image
                    src="/images/resva-panel.png"
                    alt={
                      lang === 'es'
                        ? 'Panel de Resva: inicio del propietario con reservas, cobros, ocupación del día y sus sedes'
                        : "Resva dashboard: an owner's home with bookings, payments, today's occupancy and locations"
                    }
                    fill
                    sizes="(max-width: 1360px) 100vw, 1280px"
                  />
                </div>
              )}
            </Link>
          )
        })}
      </section>

      <section id="sobre-mi" className={s.about}>
        <h2 className={cx(s.h2, s.aboutTitle)}>{t.nav.about}</h2>
        <p className={s.aboutText}>{t.about}</p>
      </section>

      <section id="contacto" className={s.contact}>
        <span className={s.contactKicker}>{t.nav.contact}</span>
        <h2 className={s.contactLead}>{t.contactLead}</h2>
        <p className={s.contactSub}>{t.contactSub}</p>
        <div className={s.contactActions}>
          <CopyEmail variant="large" label={u.copyEmail} copiedLabel={u.copied} />
          <div className={s.contactLinks}>
            <a href={site.github} target="_blank" rel="noopener" aria-label="GitHub" title="GitHub" className={s.iconLink}>
              <GitHubIcon size={20} />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn" className={s.iconLink}>
              <LinkedInIcon size={20} cutout="#0A0A0A" />
            </a>
            <a href={cvHref[lang]} target="_blank" rel="noopener" className={s.pillLink}>
              {u.downloadCv} ↓
            </a>
          </div>
        </div>
        <footer className={s.footer}>
          <span>© 2026 {site.name}</span>
          <span className={s.footerClock}>
            Bogotá, <Clock lang={lang} />
          </span>
        </footer>
      </section>
    </div>
  )
}

function IdentityCard({ lang }: { lang: Lang }) {
  const t = home[lang]
  const u = ui[lang]
  return (
    <aside className={s.card}>
      <div className={s.cardInner}>
        <div className={s.cardClock}>
          Bogotá, <Clock lang={lang} />
        </div>
        <div className={s.who}>
          <Avatar alt={u.photoAlt} />
          <div className={s.whoText}>
            <span className={s.whoName}>{site.shortName}</span>
            <span className={s.whoRole}>{t.role}</span>
          </div>
        </div>
        <div className={s.emailRow}>
          <CopyEmail variant="small" label={u.copyEmail} copiedLabel={u.copied} />
        </div>
        <div className={s.socials}>
          <a href={site.github} target="_blank" rel="noopener" className={s.social}>
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener" className={s.social}>
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </div>
        <a href={cvHref[lang]} target="_blank" rel="noopener" className={cx('note', s.cv)}>
          <span>{u.downloadCv}</span>
          <span className={cx('go', s.cvBadge)} aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </aside>
  )
}
