'use client'

import { useState } from 'react'
import type { HomeContent } from '@/content/home'
import s from './home.module.css'

type Open = 'tao' | 'unal' | null

/** Experiencia: filas que se despliegan; empieza abierta la de TaoTek. */
export function Experience({ t }: { t: Pick<HomeContent, 'experience' | 'present'> }) {
  const [open, setOpen] = useState<Open>('tao')
  const toggle = (key: Exclude<Open, null>) => setOpen((o) => (o === key ? null : key))
  const { tao, unal, diploma } = t.experience
  return (
    <div className={s.expBox}>
      <button type="button" className={s.expRow} onClick={() => toggle('tao')} aria-expanded={open === 'tao'} aria-controls="exp-tao">
        <span className={s.expHead}>
          <span className={s.expOrg}>{tao.org}</span>
          <span className={s.expRole}>{tao.role}</span>
        </span>
        <span className={s.expRight}>
          <span className={s.expYears}>
            {tao.years} – {t.present}
          </span>
          <span aria-hidden="true" className={s.expSign}>
            {open === 'tao' ? '−' : '+'}
          </span>
        </span>
      </button>
      {open === 'tao' && (
        <p id="exp-tao" className={s.expBody}>
          {tao.description}
        </p>
      )}

      <button type="button" className={s.expRow} onClick={() => toggle('unal')} aria-expanded={open === 'unal'} aria-controls="exp-unal">
        <span className={s.expHead}>
          <span className={s.expOrg}>{unal.org}</span>
          <span className={s.expRole}>{unal.role}</span>
        </span>
        <span className={s.expRight}>
          <span className={s.expYears}>
            {unal.years} – {t.present}
          </span>
          <span aria-hidden="true" className={s.expSign}>
            {open === 'unal' ? '−' : '+'}
          </span>
        </span>
      </button>
      {open === 'unal' && (
        <div id="exp-unal" className={s.expDetail}>
          <span>{unal.degree}</span>
          <span className={s.expYears}>
            {unal.years} – {t.present}
          </span>
        </div>
      )}

      <div className={s.expStatic}>
        <div className={s.expStaticHead}>
          <span className={s.expHead}>
            <span className={s.expOrg}>{diploma.title}</span>
            <span className={s.expRole}>{diploma.org}</span>
          </span>
          <span className={s.expYears}>{diploma.year}</span>
        </div>
        <ul aria-label={diploma.modulesLabel} className={s.modules}>
          {diploma.modules.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
