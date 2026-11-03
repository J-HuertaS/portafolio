import { NextResponse, type NextRequest } from 'next/server'

/** La raíz manda al idioma del navegador: inglés si lo prefiere, si no español. */
export function proxy(request: NextRequest) {
  const accept = request.headers.get('accept-language') ?? ''
  const first = accept.split(',')[0]?.trim().toLowerCase() ?? ''
  const lang = first.startsWith('en') ? 'en' : 'es'
  return NextResponse.redirect(new URL(`/${lang}`, request.url))
}

export const config = {
  matcher: ['/'],
}
