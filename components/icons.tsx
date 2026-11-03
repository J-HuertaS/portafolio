export function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" style={{ display: 'block', flex: `0 0 ${size}px` }}>
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  )
}

export function LinkedInIcon({ size = 15, cutout = '#101010' }: { size?: number; cutout?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" style={{ display: 'block', flex: `0 0 ${size}px` }}>
      <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="currentColor" />
      <circle cx="4.4" cy="4.4" r="1.25" fill={cutout} />
      <rect x="3.4" y="6.4" width="2" height="6.4" fill={cutout} />
      <path
        fill={cutout}
        d="M7 6.4h1.9v.9c.4-.7 1.2-1.1 2.1-1.1 1.6 0 2.4 1 2.4 2.9v3.7h-2V9.4c0-.9-.3-1.4-1-1.4-.8 0-1.4.5-1.4 1.5v3.3H7z"
      />
    </svg>
  )
}

export function ArrowIcon({ color = '#EDEDED', width = 1.6 }: { color?: string; width?: number }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" style={{ display: 'block' }}>
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
