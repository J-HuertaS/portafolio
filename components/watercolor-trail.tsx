'use client'

import { useEffect, useRef } from 'react'

/**
 * El único gesto animado de la marca: el cursor deja un rastro de acuarela muy tenue.
 *
 * Se pinta en un canvas detrás del contenido. Cada movimiento se interpola en "toques" de pincel
 * suaves (gradiente radial, poca opacidad, que se acumulan como pigmento) y el lienzo se va
 * secando: cada cuadro borra un poco de lo pintado. Más rápido = trazo más delgado y claro.
 * Los toques se superponen, pero el pigmento acumulado se queda en ~10–15 %, así que no ensucia el texto.
 * Se apaga con "reducir movimiento" y en pantallas táctiles.
 */
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
    let dpr = 1
    function resize() {
      if (!canvas || !ctx) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(innerWidth * dpr)
      canvas.height = Math.round(innerHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    // pigmento: azul aguada; en Sumi un poco más claro para que se vea sobre el negro
    const pigment = () => (dark.matches ? [159, 179, 200] : [111, 135, 159])
    const DRY = dark.matches ? 0.045 : 0.05 // cuánto se seca por cuadro
    let last: { x: number; y: number; t: number } | null = null
    let raf = 0
    let wet = 0 // cuadros que faltan para que el lienzo quede seco del todo

    function dab(x: number, y: number, r: number, a: number) {
      if (!ctx) return
      const [R, G, B] = pigment()
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, `rgba(${R},${G},${B},${a})`)
      g.addColorStop(0.55, `rgba(${R},${G},${B},${a * 0.55})`)
      g.addColorStop(1, `rgba(${R},${G},${B},0)`)
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    function frame() {
      if (!ctx || !canvas) return
      ctx.save()
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = `rgba(0,0,0,${DRY})`
      ctx.fillRect(0, 0, innerWidth, innerHeight)
      ctx.restore()
      wet -= 1
      raf = wet > 0 ? requestAnimationFrame(frame) : 0
      if (!raf) ctx.clearRect(0, 0, innerWidth, innerHeight)
    }

    function onMove(e: PointerEvent) {
      const now = performance.now()
      const p = { x: e.clientX, y: e.clientY, t: now }
      if (last && now - last.t < 120) {
        const dx = p.x - last.x
        const dy = p.y - last.y
        const dist = Math.hypot(dx, dy)
        const speed = dist / Math.max(1, now - last.t) // px/ms
        const r = Math.max(10, 26 - speed * 9) // rápido = más delgado
        const a = Math.max(0.008, 0.016 - speed * 0.004) // y más claro
        const steps = Math.max(1, Math.floor(dist / 5))
        for (let i = 1; i <= steps; i++) {
          const k = i / steps
          const jitter = (Math.random() - 0.5) * 3
          dab(last.x + dx * k + jitter, last.y + dy * k + jitter, r * (0.85 + Math.random() * 0.3), a)
        }
      }
      last = p
      wet = 90
      if (!raf) raf = requestAnimationFrame(frame)
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
