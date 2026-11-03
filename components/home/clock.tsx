'use client'

import { useSyncExternalStore } from 'react'
import { site } from '@/lib/site'
import type { Lang } from '@/lib/i18n'

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 15_000)
  return () => clearInterval(id)
}

/** Hora actual en Bogotá; se renderiza solo en el navegador para no desfasarse con el servidor. */
export function Clock({ lang }: { lang: Lang }) {
  const time = useSyncExternalStore(
    subscribe,
    () =>
      new Date().toLocaleTimeString(lang === 'es' ? 'es-CO' : 'en-US', {
        timeZone: site.timeZone,
        hour: 'numeric',
        minute: '2-digit',
      }),
    () => '',
  )
  return (
    <time suppressHydrationWarning style={{ fontFamily: 'var(--font-mono)', color: 'var(--text)' }}>
      {time}
    </time>
  )
}
