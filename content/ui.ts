import type { Lang } from '@/lib/i18n'

/** Textos de la interfaz compartidos por todas las páginas. */
export const ui = {
  es: {
    language: 'Idioma',
    projects: 'Proyectos',
    moreProjects: 'Más proyectos',
    copyEmail: 'Copiar correo',
    copied: 'Copiado',
    downloadCv: 'Descargar hoja de vida',
    photoAlt: 'Retrato de Juan Huertas dibujado a tinta',
    sections: 'Secciones',
  },
  en: {
    language: 'Language',
    projects: 'Projects',
    moreProjects: 'More projects',
    copyEmail: 'Copy email',
    copied: 'Copied',
    downloadCv: 'Download résumé',
    photoAlt: 'Ink portrait of Juan Huertas',
    sections: 'Sections',
  },
} satisfies Record<Lang, Record<string, string>>
