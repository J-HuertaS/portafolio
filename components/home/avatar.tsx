'use client'

import Image from 'next/image'
import { useRef, type PointerEvent } from 'react'
import s from './home.module.css'

const MAX_TILT = 9 // grados

/**
 * La foto es como una credencial de vidrio: con el mouse se inclina en 3D y un reflejo sigue
 * al cursor; en el celular, al tocarla, un destello la cruza. Es el detalle escondido de la página.
 */
export function Avatar({ alt }: { alt: string }) {
  const ref = useRef<HTMLDivElement>(null)

  function move(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse') return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${((0.5 - y) * 2 * MAX_TILT).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${((x - 0.5) * 2 * MAX_TILT).toFixed(2)}deg`)
    el.style.setProperty('--px', `${(x * 100).toFixed(1)}%`)
    el.style.setProperty('--py', `${(y * 100).toFixed(1)}%`)
  }

  function leave() {
    const el = ref.current
    if (!el) return
    for (const v of ['--rx', '--ry', '--px', '--py']) el.style.removeProperty(v)
  }

  function tap(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el || e.pointerType === 'mouse') return
    el.classList.remove(s.sweep)
    void el.offsetWidth // reinicia la animación si se toca de nuevo
    el.classList.add(s.sweep)
  }

  return (
    <div className={s.avatarStage}>
      <div ref={ref} className={s.avatar} onPointerMove={move} onPointerLeave={leave} onPointerDown={tap}>
        <Image src="/images/juan.jpg" alt={alt} fill sizes="(max-width: 960px) 72px, 360px" className={s.avatarPhoto} priority />
        <span className={s.glare} aria-hidden="true" />
        <span className={s.sheen} aria-hidden="true" />
      </div>
    </div>
  )
}
