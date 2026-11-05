// Imprime las hojas de vida HTML a PDF (Letter, una página). Uso: node pdf.js <carpeta-html> <carpeta-pdf>
/* eslint-disable @typescript-eslint/no-require-imports -- script de Node fuera de la app */
const { chromium } = require('playwright')
const path = require('path')
const [src, dst] = process.argv.slice(2)
;(async () => {
  const b = await chromium.launch()
  for (const [k, name] of [['es', 'ES'], ['en', 'EN']]) {
    const p = await b.newPage()
    await p.goto('file://' + path.resolve(src, `cv-${k}.html`))
    await p.waitForTimeout(300)
    await p.pdf({ path: path.resolve(dst, `CV-Juan-Esteban-Cardenas-${name}.pdf`), format: 'Letter', printBackground: true, preferCSSPageSize: true })
  }
  await b.close()
})()
