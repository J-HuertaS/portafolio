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
    photoAlt: 'Foto de Juan Esteban Cárdenas',
    sections: 'Secciones',
  },
  en: {
    language: 'Language',
    projects: 'Projects',
    moreProjects: 'More projects',
    copyEmail: 'Copy email',
    copied: 'Copied',
    downloadCv: 'Download résumé',
    photoAlt: 'Photo of Juan Esteban Cárdenas',
    sections: 'Sections',
  },
} satisfies Record<Lang, Record<string, string>>
