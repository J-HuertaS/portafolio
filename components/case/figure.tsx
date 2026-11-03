import type { CSSProperties, ReactNode } from 'react'
import s from './case.module.css'

/**
 * Un diagrama tiene dos dibujos: el completo, con todos los conectores, para pantallas
 * anchas, y uno apilado por capas para el celular (o nada, si en el celular sobra). Se muestra uno u otro con CSS.
 */
export function ResponsiveFigure({ desktop, mobile }: { desktop: ReactNode; mobile: ReactNode | null }) {
  return (
    <>
      <div className={s.desktopOnly}>{desktop}</div>
      {mobile && <div className={s.mobileOnly}>{mobile}</div>}
    </>
  )
}

/**
 * Escala un diagrama dibujado a un ancho fijo para que quepa en su columna, sin scroll
 * horizontal. Solo CSS: el factor sale de comparar el ancho del contenedor (cqw) con el
 * del dibujo; nunca agranda por encima del tamaño original.
 */
export function DiagramFit({ width, height, children }: { width: number; height: number; children: ReactNode }) {
  const vars = { '--w': `${width}px`, aspectRatio: `${width} / ${height}` } as CSSProperties
  return (
    <div className={s.fit}>
      <div className={s.fitBox} style={vars}>
        <div className={s.fitDraw}>{children}</div>
      </div>
    </div>
  )
}
