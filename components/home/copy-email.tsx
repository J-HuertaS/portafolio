'use client'

import { useEffect, useRef, useState } from 'react'
import { site } from '@/lib/site'
import { cx } from '@/lib/cx'
import s from './home.module.css'

function CopyIcon({ size, stroke }: { size: number; stroke: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" style={{ fill: 'none', stroke, strokeWidth: 1.4 }}>
      <rect x="5" y="5" width="9" height="9" rx="2" />
      <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" />
    </svg>
  )
}
function CheckIcon({ size, stroke }: { size: number; stroke: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" style={{ fill: 'none', stroke, strokeWidth: 1.7 }}>
      <path d="M3 8.5l3 3 7-7" />
    </svg>
  )
}

/** Botón que copia el correo y confirma durante un momento. */
export function CopyEmail({ variant, label, copiedLabel }: { variant: 'small' | 'large'; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email)
    } catch {
      // Sin permiso de portapapeles: el correo sigue visible para copiarlo a mano.
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 1600)
  }

  const large = variant === 'large'
  return (
    <button type="button" onClick={copy} aria-label={label} className={cx(s.copy, large ? s.copyLarge : s.copySmall)}>
      <span aria-live="polite" className={cx(large && s.copyText, copied && s.copyDone)}>
        {copied ? copiedLabel : site.email}
      </span>
      {large ? (
        <span className={s.copyBadge}>{copied ? <CheckIcon size={16} stroke="#0A0A0A" /> : <CopyIcon size={16} stroke="#0A0A0A" />}</span>
      ) : copied ? (
        <CheckIcon size={13} stroke="#EDEDED" />
      ) : (
        <CopyIcon size={13} stroke="currentColor" />
      )}
    </button>
  )
}
