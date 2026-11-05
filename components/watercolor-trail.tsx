'use client'

import { useEffect, useRef } from 'react'

/**
 * El único gesto animado de la marca: el cursor deja manchas de acuarela que florecen y se
 * desvanecen. Van detrás del contenido (z-index 0) para no teñir el texto. Se apaga con
 * "reducir movimiento" y en pantallas táctiles.
 */
export function WatercolorTrail() {
  const layer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = layer.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const fine = window.matchMedia('(pointer: fine)')
    if (reduced.matches || !fine.matches) return

    const MAX = 24
    const SPACING = 26
    let last: { x: number; y: number } | null = null

    function onMove(e: PointerEvent) {
      if (!el) return
      const p = { x: e.clientX, y: e.clientY }
      if (last && Math.hypot(p.x - last.x, p.y - last.y) < SPACING) return
      last = p
      const r = 16 + Math.random() * 26
      const roll = Math.random()
      const color = roll < 0.1 ? 'var(--hanko)' : roll < 0.55 ? 'var(--wash-deep)' : 'var(--wash)'
      const blot = document.createElement('span')
      blot.style.cssText =
        `position:fixed;left:${p.x - r}px;top:${p.y - r * 0.86}px;width:${2 * r}px;height:${2 * r * 0.86}px;` +
        `border-radius:50%;pointer-events:none;filter:blur(5px);` +
        `background:radial-gradient(circle at 45% 45%, ${color} 0%, ${color} 38%, transparent 72%);` +
        `animation:wc-bloom 2.8s ease-out forwards;`
      blot.addEventListener('animationend', () => blot.remove())
      el.appendChild(blot)
      while (el.childElementCount > MAX) el.firstElementChild?.remove()
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div ref={layer} aria-hidden="true" className="wc-layer">
      <style>{`
        .wc-layer { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; mix-blend-mode: multiply; }
        @media (prefers-color-scheme: dark) { .wc-layer { mix-blend-mode: screen; opacity: .7; } }
        @keyframes wc-bloom { 0% { opacity: .34; transform: scale(.55); } 35% { opacity: .26; } 100% { opacity: 0; transform: scale(1.3); } }
      `}</style>
    </div>
  )
}
