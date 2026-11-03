# Portafolio — Juan Esteban Cárdenas

Sitio personal en español e inglés: inicio, tres casos de estudio (Resva, RunPath, Sentinel) y hoja de vida en PDF.

**Stack:** Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · CSS Modules · fuentes Geist. Sin base de datos ni APIs: todo se genera estático.

## Correr

```bash
pnpm install
pnpm dev        # http://localhost:3000 → redirige a /es o /en según el navegador
pnpm build      # build de producción
pnpm lint && pnpm typecheck
```

## Rutas

| Ruta                                  | Qué es                                                         |
| ------------------------------------- | -------------------------------------------------------------- |
| `/`                                   | Redirige a `/es` o `/en` (`proxy.ts`, según `Accept-Language`) |
| `/es`, `/en`                          | Inicio                                                         |
| `/es/resva`, `/en/runpath`, …         | Casos de estudio                                               |
| `/cv/CV-Juan-Esteban-Cardenas-ES.pdf` | Hoja de vida (también `-EN`)                                   |

## Dónde está cada cosa

```
app/[lang]/layout.tsx         <html lang>, fuentes, metadatos base
app/[lang]/page.tsx           inicio (tarjeta de identidad, hero, experiencia, proyectos, sobre mí, contacto)
app/[lang]/[slug]/page.tsx    caso de estudio
components/home/              piezas del inicio; reloj, copiar correo, foto (efecto de vidrio) y experiencia son de cliente
components/case/              plantilla del caso, estilos del contenido y figuras (escritorio / celular)
content/home.ts               textos del inicio (es / en)
content/ui.ts                 textos de interfaz compartidos
content/cases/{es,en}/*.tsx   contenido de cada caso; *.figures.tsx tiene sus diagramas
lib/                          idiomas, datos del sitio (correo, enlaces, CV), tipos
public/images, public/cv      foto, logo de Resva, pantallazo del panel, PDFs
```

## Editar contenido

- **Textos del inicio:** `content/home.ts`. Cada clave existe en `es` y en `en`; TypeScript avisa si falta una.
- **Un caso de estudio:** `content/cases/es/<caso>.tsx` y su par en `en/`. El texto está como JSX normal; las clases
  (`s.p`, `s.decision`, `s.stats`…) vienen de `components/case/case.module.css`.
- **Diagramas:** `content/cases/<idioma>/<caso>.figures.tsx`. Cada figura tiene el dibujo completo (cajas con posición
  absoluta y flechas SVG) y una versión apilada por capas para pantallas de 760 px o menos.
- **Correo, GitHub, LinkedIn, CV:** `lib/site.ts`.

## Diseño

Tokens en `app/globals.css` (`--bg`, `--text`, `--accent: #FF5B2E`…). Puntos de quiebre: el inicio pasa a una columna
bajo 960 px; los casos usan la versión de celular bajo 760 px. Se revisó a 390 y 1280 px.

## Publicar

En Vercel: importar el repositorio y desplegar; no necesita variables de entorno. Para un dominio propio, agrégalo en
el proyecto de Vercel y, si quieres URLs absolutas en los metadatos, define `metadataBase` en `app/[lang]/layout.tsx`.
