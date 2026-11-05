'use client'

import { useEffect, useRef } from 'react'

/**
 * El único gesto animado de la marca: el cursor deja un rastro de acuarela.
 *
 * Cada movimiento se interpola en "toques" de pincel (gradiente radial, poca opacidad). Cada toque
 * vive ~2 s: mientras se seca se abre un poco y pierde pigmento, así que el trazo se disuelve en
 * el papel en vez de borrarse de golpe. Se redibuja en un canvas detrás del contenido y el bucle
 * se detiene solo cuando ya no queda pigmento. Se apaga con "reducir movimiento" y en pantallas táctiles.
 */
interface Dab {
  x: number
  y: number
  r: number
  a: number
  born: number
  dx: number
  dy: number
}

const LIFE = 2200 // ms hasta disolverse del todo
const MAX_DABS = 900

export function WatercolorTrail() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dark = window.matchMedia('(prefers-color-scheme: dark)')
    function resize() {
      if (!canvas || !ctx) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(innerWidth * dpr)
      canvas.height = Math.round(innerHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const dabs: Dab[] = []
    let last: { x: number; y: number; t: number } | null = null
    let raf = 0

    function draw(now: number) {
      if (!ctx) return
      ctx.clearRect(0, 0, innerWidth, innerHeight)
      // pigmento: azul aguada; en Sumi más claro para que se lea sobre el negro
      const [R, G, B] = dark.matches ? [159, 179, 200] : [78, 108, 142]
      let alive = 0
      for (const d of dabs) {
        const t = (now - d.born) / LIFE
        if (t >= 1) continue
        alive++
        // se abre al secarse y pierde pigmento con una curva suave (empieza lento, termina lento)
        const spread = 1 + 0.9 * t
        const fade = 1 - t * t * (3 - 2 * t)
        const r = d.r * spread
        const a = d.a * fade
        const x = d.x + d.dx * t
        const y = d.y + d.dy * t
        const g = ctx.createRadialGradient(x, y, 0, x, y, r)
        g.addColorStop(0, `rgba(${R},${G},${B},${a})`)
        g.addColorStop(0.6, `rgba(${R},${G},${B},${a * 0.6})`)
        g.addColorStop(1, `rgba(${R},${G},${B},0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()
      }
      // descarta los toques ya disueltos
      while (dabs.length && now - dabs[0].born >= LIFE) dabs.shift()
      raf = alive ? requestAnimationFrame(draw) : 0
      if (!alive) ctx.clearRect(0, 0, innerWidth, innerHeight)
    }

    function onMove(e: PointerEvent) {
      const now = performance.now()
      const p = { x: e.clientX, y: e.clientY, t: now }
      if (last && now - last.t < 120) {
        const dx = p.x - last.x
        const dy = p.y - last.y
        const dist = Math.hypot(dx, dy)
        const speed = dist / Math.max(1, now - last.t) // px/ms
        const r = Math.max(11, 28 - speed * 8) // rápido = más delgado
        const a = Math.max(0.03, 0.055 - speed * 0.01) // y más claro
        const steps = Math.max(1, Math.floor(dist / 6))
        for (let i = 1; i <= steps; i++) {
          const k = i / steps
          dabs.push({
            x: last.x + dx * k + (Math.random() - 0.5) * 4,
            y: last.y + dy * k + (Math.random() - 0.5) * 4,
            r: r * (0.8 + Math.random() * 0.4),
            a,
            born: now,
            dx: (Math.random() - 0.5) * 10, // el agua lo mueve un poco al secarse
            dy: (Math.random() - 0.5) * 10 + 3,
          })
        }
        if (dabs.length > MAX_DABS) dabs.splice(0, dabs.length - MAX_DABS)
      }
      last = p
      if (!raf) raf = requestAnimationFrame(draw)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
