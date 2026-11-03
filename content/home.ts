import type { Lang } from '@/lib/i18n'
import type { CaseSlug } from '@/lib/site'

export interface HomeProject {
  slug: CaseSlug
  name: string
  meta: string
  description: string
  stack?: string
}

export interface HomeContent {
  metaTitle: string
  metaDescription: string
  nav: { home: string; projects: string; experience: string; about: string; contact: string }
  role: string
  heroTitle: [string, string]
  heroLead: string
  present: string
  experience: {
    tao: { org: string; role: string; years: string; description: string }
    unal: { org: string; role: string; years: string; degree: string }
    diploma: { title: string; org: string; year: string; modules: string[]; modulesLabel: string }
  }
  projects: HomeProject[]
  readCase: string
  about: string
  contactLead: string
  contactSub: string
}

const stackResva = 'Next.js · TypeScript · Supabase · PostgreSQL · MercadoPago · WhatsApp API'

export const home: Record<Lang, HomeContent> = {
  es: {
    metaTitle: 'Juan Esteban Cárdenas — Ingeniero de Software',
    metaDescription:
      'Ingeniero de Software en Bogotá. Construyo Resva, un software de reservas para complejos deportivos, y estudio Ingeniería de Sistemas en la Universidad Nacional.',
    nav: { home: 'Inicio', projects: 'Proyectos', experience: 'Experiencia', about: 'Sobre mí', contact: 'Contacto' },
    role: 'Ingeniero de Software',
    heroTitle: ['Ingeniero de', 'Software'],
    heroLead:
      'Me gusta entender bien el problema antes de escribir la primera línea de código. Hoy construyo Resva, un software de reservas para complejos deportivos en Colombia, y estudio Ingeniería de Sistemas en la Universidad Nacional.',
    present: 'hoy',
    experience: {
      tao: {
        org: 'TaoTek SAS',
        role: 'Co-fundador y CTO',
        years: '2025',
        description:
          'Dirijo la parte técnica de la empresa: diseño los sistemas a la medida que desarrollamos para clientes y construyo Resva de punta a punta, desde entender qué necesita un complejo deportivo hasta mantenerlo funcionando.',
      },
      unal: {
        org: 'Universidad Nacional de Colombia',
        role: 'Ingeniería de Sistemas y diplomado en Arquitectura',
        years: '2022',
        degree: 'Ingeniería de Sistemas',
      },
      diploma: {
        title: 'Diplomado en Arquitectura y Calidad de Software',
        org: 'Universidad Nacional de Colombia',
        year: '2026',
        modulesLabel: 'Módulos',
        modules: ['Ingeniería de Software basada en la Nube', 'Arquitectura de Software a Gran Escala', 'Calidad de Software'],
      },
    },
    projects: [
      {
        slug: 'resva',
        name: 'Resva',
        meta: 'En producción · resva.digital',
        description:
          'Software de reservas para complejos deportivos en Colombia. Diseñé cómo se aíslan los datos de cada complejo, cómo evitar que una cancha se reserve dos veces cuando también se puede combinar con otra, y cómo se confirman los pagos.',
        stack: stackResva,
      },
      {
        slug: 'runpath',
        name: 'RunPath',
        meta: 'Proyecto universitario, equipo de siete · 2025-1',
        description:
          'App web y móvil para encontrar rutas de trote en Bogotá, construida con microservicios. Fui arquitecto en una de las cuatro iteraciones y me encargué de la autenticación, la seguridad de red y el despliegue con réplicas en Google Cloud.',
      },
      {
        slug: 'sentinel',
        name: 'Sentinel',
        meta: 'Diplomado, equipo de seis · 2026',
        description:
          'Plataforma nativa de la nube en Azure para reportar robos y alertar a quienes están cerca. Participé en el diseño de toda la arquitectura y construí el servicio de notificaciones: lee eventos de una cola y los entrega como push.',
      },
    ],
    readCase: 'Leer el caso',
    about:
      'Me enfoco en el producto completo, no solo en el código: entender qué necesita el negocio, decidir cómo se construye y llevarlo a producción. Lo que más me interesa es la arquitectura, cómo dividir un sistema para que pueda crecer sin romperse. En mi día a día trabajo con agentes de IA como Claude Code, y los trato como una herramienta más: hay que saber dirigirlos y revisar lo que hacen.',
    contactLead: 'Busco mi primer rol como ingeniero de software.',
    contactSub: 'Una práctica profesional desde 2027-1 o un trabajo de tiempo completo. Si tienes algo en mente, escríbeme.',
  },
  en: {
    metaTitle: 'Juan Esteban Cárdenas — Software Engineer',
    metaDescription:
      "Software engineer in Bogotá. I'm building Resva, a booking platform for sports venues, and studying Systems Engineering at Universidad Nacional.",
    nav: { home: 'Home', projects: 'Projects', experience: 'Experience', about: 'About', contact: 'Contact' },
    role: 'Software Engineer',
    heroTitle: ['Software', 'Engineer'],
    heroLead:
      "I like to understand the problem before writing the first line of code. Right now I'm building Resva, a booking platform for sports venues in Colombia, and studying Systems Engineering at Universidad Nacional.",
    present: 'now',
    experience: {
      tao: {
        org: 'TaoTek SAS',
        role: 'Co-founder & CTO',
        years: '2025',
        description:
          'I lead the technical side of the company: I design the custom systems we build for clients and build Resva end to end, from understanding what a sports venue needs to keeping it running.',
      },
      unal: {
        org: 'Universidad Nacional de Colombia',
        role: 'Systems Engineering and an Architecture diploma',
        years: '2022',
        degree: 'Systems Engineering',
      },
      diploma: {
        title: 'Diploma in Software Architecture and Quality',
        org: 'Universidad Nacional de Colombia',
        year: '2026',
        modulesLabel: 'Modules',
        modules: ['Cloud-Based Software Engineering', 'Large-Scale Software Architecture', 'Software Quality'],
      },
    },
    projects: [
      {
        slug: 'resva',
        name: 'Resva',
        meta: 'In production · resva.digital',
        description:
          "Booking software for sports venues in Colombia. I designed how each venue's data is isolated, how to keep a court from being booked twice when it can also be combined with another, and how payments are confirmed.",
        stack: stackResva,
      },
      {
        slug: 'runpath',
        name: 'RunPath',
        meta: 'University project, team of seven · 2025-1',
        description:
          'A web and mobile app for finding running routes in Bogotá, built with microservices. I was the architect for one of its four iterations and owned authentication, network security and deployment with replicas on Google Cloud.',
      },
      {
        slug: 'sentinel',
        name: 'Sentinel',
        meta: 'Diploma project, team of six · 2026',
        description:
          'A cloud-native platform on Azure for reporting thefts and alerting people nearby. I took part in designing the whole architecture and built the notification service, which reads events from a queue and delivers them as push notifications.',
      },
    ],
    readCase: 'Read the case study',
    about:
      'I focus on the whole product, not just the code: understanding what the business needs, deciding how to build it and getting it into production. What interests me most is architecture, how to split a system so it can grow without breaking. Day to day I work with AI agents like Claude Code, and I treat them as one more tool: you have to know how to steer them and review what they do.',
    contactLead: "I'm looking for my first role as a software engineer.",
    contactSub: 'An internship starting in 2027-1 or a full-time position. If you have something in mind, write to me.',
  },
}
