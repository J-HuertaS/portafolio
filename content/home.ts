import type { Lang } from '@/lib/i18n'
import type { CaseSlug } from '@/lib/site'

export interface HomeProject {
  slug: CaseSlug
  name: string
  meta: string
  description: string
  stack?: string
}

/** Una rama del árbol de arquitectura: etiqueta corta y su contenido. */
export interface Branch {
  label: string
  value: string
}

export interface Quality {
  attribute: string
  tactic: string
  where: string
}

export interface HomeContent {
  metaTitle: string
  metaDescription: string
  nav: { home: string; projects: string; experience: string; about: string; contact: string; architecture: string }
  role: string
  tagline: string
  heroKicker: string
  heroLead: string
  seeWork: string
  present: string
  plates: { experience: string; projects: string; architecture: string; about: string; contact: string }
  titles: { experience: string; projects: string; architecture: string; about: string; currently: string }
  caseFile: string
  experience: {
    tao: { org: string; role: string; years: string; description: string }
    unal: { org: string; role: string; years: string }
    diploma: { title: string; org: string; year: string; modules: string[]; modulesLabel: string }
  }
  projects: HomeProject[]
  readCase: string
  architecture: {
    above: string
    below: string
    craft: { key: string; branches: Branch[] }
    arch: { key: string; branches: Branch[]; quality: string; qualityHead: string; whereHead: string }
    qualities: Quality[]
    roots: { key: string; value: string }[]
    newGrowth: { key: string; value: string; note: string }
    fig: string
  }
  about: string
  currently: { verb: string; text: string; aside?: string; accent?: boolean }[]
  contactLead: string
  contactSub: string
  motto: string
}

const stackResva = 'Next.js · TypeScript · Supabase · PostgreSQL · MercadoPago · WhatsApp API'

export const home: Record<Lang, HomeContent> = {
  es: {
    metaTitle: 'Juan Huertas — Ingeniero de Software',
    metaDescription:
      'Ingeniero de Software en Bogotá. Diseño sistemas a partir del problema y sus requisitos, y construyo Resva, un software de reservas para complejos deportivos.',
    nav: {
      home: 'Inicio',
      projects: 'Trabajo',
      experience: 'Trayectoria',
      about: 'Sobre mí',
      contact: 'Contacto',
      architecture: 'Arquitectura',
    },
    role: 'Ingeniero de Software',
    tagline: 'Cultivo software.',
    heroKicker: 'LÁMINA 01 — JUNIPERUS REFACTORIS',
    heroLead:
      'Ingeniero de Software en Bogotá, co-fundador y CTO de TaoTek. Empiezo por el problema: lo vuelvo requisitos, diseño a partir de ellos y planteo escenarios de calidad que, al construir el sistema, se vuelven propiedades. Después lo podo y le doy tiempo para madurar, como a un bonsái.',
    seeWork: 'Ver el trabajo',
    present: 'hoy',
    plates: {
      experience: 'LÁMINA 02 — TRAYECTORIA',
      projects: 'LÁMINA 03 — CASOS DE CAMPO',
      architecture: 'LÁMINA 04 — OFICIO Y RAÍCES',
      about: 'LÁMINA 05 — SOBRE MÍ',
      contact: 'LÁMINA 06 — CONTACTO',
    },
    titles: {
      experience: 'Trayectoria,',
      projects: 'Casos de campo,',
      architecture: 'Cómo cultivo sistemas,',
      about: 'Sobre mí,',
      currently: 'Ahora mismo',
    },
    caseFile: 'EXPEDIENTE Nº',
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
        role: 'Ingeniería de Sistemas y Computación',
        years: '2022',
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
    architecture: {
      above: 'ARRIBA: OFICIO',
      below: 'ABAJO: FUNDAMENTOS',
      craft: {
        key: 'oficio/',
        branches: [
          { label: 'lenguajes', value: 'Python · TypeScript · JavaScript · SQL · C++' },
          { label: 'frameworks', value: 'FastAPI · Flask · NestJS · Node.js · Next.js · React' },
        ],
      },
      arch: {
        key: 'arquitectura/',
        branches: [
          { label: 'estilos', value: 'microservicios · basada en servicios · monolito · dirigida por eventos' },
          { label: 'patrones', value: 'API gateway · broker · proxy inverso · publicar–suscribir' },
        ],
        quality: 'calidad',
        qualityHead: 'atributo → táctica',
        whereHead: 'aplicado en',
      },
      qualities: [
        {
          attribute: 'seguridad',
          tactic: 'WAF · redes segmentadas · seguridad a nivel de fila · webhooks firmados',
          where: 'RunPath · Resva',
        },
        { attribute: 'disponibilidad', tactic: 'servicios replicados detrás de un proxy inverso Nginx', where: 'RunPath' },
        { attribute: 'elasticidad', tactic: 'réplicas sin estado que escalan en Kubernetes (GCP)', where: 'RunPath' },
        { attribute: 'rendimiento', tactic: 'pruebas de carga con JMeter: más de 600 usuarios concurrentes', where: 'RunPath' },
        { attribute: 'interoperabilidad', tactic: 'servicios en varios lenguajes que hablan por un broker', where: 'RunPath' },
        { attribute: 'resiliencia', tactic: 'notificaciones desacopladas sobre una cola de mensajes', where: 'Sentinel' },
        { attribute: 'multi-tenancy', tactic: 'aislamiento por complejo aplicado en la base de datos', where: 'Resva' },
      ],
      roots: [
        { key: 'datos/', value: 'PostgreSQL (RLS, migraciones, diseño de esquemas) · Supabase · SQLite · Firestore' },
        {
          key: 'infraestructura/',
          value: 'Docker · Kubernetes · GCP · Azure · Terraform · Nginx · RabbitMQ · Loki / Grafana · Linux · Git',
        },
        { key: 'pruebas/', value: 'pytest · pruebas de carga y rendimiento con JMeter' },
        { key: 'algoritmos/', value: 'estructuras de datos y algoritmos · NeetCode, en Python' },
      ],
      newGrowth: { key: 'nuevo-brote/', value: 'Go · Java · Spring Boot', note: '( aprendiendo ahora )' },
      fig: 'fig. e — un árbol: lo visible crece de lo que no se ve',
    },
    about:
      'Me enfoco en el producto completo, no solo en el código: entender qué necesita el negocio, decidir cómo se construye y llevarlo a producción. Lo que más me interesa es la arquitectura, cómo dividir un sistema para que pueda crecer sin romperse. En mi día a día trabajo con agentes de IA como Claude Code, y los trato como una herramienta más: hay que saber dirigirlos y revisar lo que hacen.',
    currently: [
      { verb: 'construyendo', text: 'Resva, un SaaS multi-tenant: reorganizando su jerarquía de complejos y sedes.' },
      { verb: 'estudiando', text: 'arquitectura y calidad de software; Go y Spring Boot, a mano.' },
      { verb: 'entrenando', text: 'estructuras de datos y algoritmos, un problema a la vez.' },
      { verb: 'leyendo', text: 'en inglés, un capítulo a la vez.' },
      { verb: 'viendo', text: 'One Piece, entre despliegues.', aside: '( es una serie larga. )' },
      { verb: 'abierto a', text: 'roles de ingeniería de software y prácticas desde 2027-1.', accent: true },
    ],
    contactLead: 'Busco mi primer rol como ingeniero de software.',
    contactSub: 'Una práctica profesional desde 2027-1 o un trabajo de tiempo completo. Si tienes algo en mente, escríbeme.',
    motto: 'sodateru — hacer crecer, criar',
  },
  en: {
    metaTitle: 'Juan Huertas — Software Engineer',
    metaDescription:
      "Software engineer in Bogotá. I design systems from the problem and its requirements, and I'm building Resva, a booking platform for sports venues.",
    nav: {
      home: 'Home',
      projects: 'Work',
      experience: 'Path',
      about: 'About',
      contact: 'Contact',
      architecture: 'Architecture',
    },
    role: 'Software Engineer',
    tagline: 'I grow software.',
    heroKicker: 'PLATE 01 — JUNIPERUS REFACTORIS',
    heroLead:
      'Software engineer in Bogotá, co-founder & CTO at TaoTek. I start from the problem: I turn it into requirements, design from them and set quality scenarios that become properties as the system is built. Then I prune it and give it time to mature, like a bonsai.',
    seeWork: 'See the work',
    present: 'now',
    plates: {
      experience: 'PLATE 02 — PATH',
      projects: 'PLATE 03 — FIELD CASES',
      architecture: 'PLATE 04 — CRAFT & ROOTS',
      about: 'PLATE 05 — ABOUT',
      contact: 'PLATE 06 — CONTACT',
    },
    titles: {
      experience: 'The path so far,',
      projects: 'Field cases,',
      architecture: 'How I grow systems,',
      about: 'About me,',
      currently: 'Currently',
    },
    caseFile: 'CASE FILE Nº',
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
        role: 'Systems and Computing Engineering',
        years: '2022',
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
    architecture: {
      above: 'ABOVE: CRAFT',
      below: 'BELOW: FUNDAMENTALS',
      craft: {
        key: 'craft/',
        branches: [
          { label: 'languages', value: 'Python · TypeScript · JavaScript · SQL · C++' },
          { label: 'frameworks', value: 'FastAPI · Flask · NestJS · Node.js · Next.js · React' },
        ],
      },
      arch: {
        key: 'architecture/',
        branches: [
          { label: 'styles', value: 'microservices · service-based · monolith · event-driven' },
          { label: 'patterns', value: 'API gateway · broker · reverse proxy · publish–subscribe' },
        ],
        quality: 'quality',
        qualityHead: 'attribute → tactic',
        whereHead: 'applied in',
      },
      qualities: [
        { attribute: 'security', tactic: 'WAF · segmented networks · row-level security · signed webhooks', where: 'RunPath · Resva' },
        { attribute: 'availability', tactic: 'replicated services behind an Nginx reverse proxy', where: 'RunPath' },
        { attribute: 'elasticity', tactic: 'stateless replicas scaled on Kubernetes (GCP)', where: 'RunPath' },
        { attribute: 'performance', tactic: 'load-tested with JMeter: 600+ concurrent users', where: 'RunPath' },
        { attribute: 'interoperability', tactic: 'polyglot services talking through a broker', where: 'RunPath' },
        { attribute: 'resilience', tactic: 'notifications decoupled over a message queue', where: 'Sentinel' },
        { attribute: 'tenancy', tactic: 'per-tenant isolation enforced in the database', where: 'Resva' },
      ],
      roots: [
        { key: 'data/', value: 'PostgreSQL (RLS, migrations, schema design) · Supabase · SQLite · Firestore' },
        {
          key: 'infrastructure/',
          value: 'Docker · Kubernetes · GCP · Azure · Terraform · Nginx · RabbitMQ · Loki / Grafana · Linux · Git',
        },
        { key: 'testing/', value: 'pytest · JMeter load and performance testing' },
        { key: 'algorithms/', value: 'data structures & algorithms · NeetCode, in Python' },
      ],
      newGrowth: { key: 'new-growth/', value: 'Go · Java · Spring Boot', note: '( currently learning )' },
      fig: 'fig. e — a tree: what you see grows from what you don’t',
    },
    about:
      'I focus on the whole product, not just the code: understanding what the business needs, deciding how to build it and getting it into production. What interests me most is architecture, how to split a system so it can grow without breaking. Day to day I work with AI agents like Claude Code, and I treat them as one more tool: you have to know how to steer them and review what they do.',
    currently: [
      { verb: 'building', text: 'Resva, a multi-tenant SaaS: reworking its venue and location hierarchy.' },
      { verb: 'studying', text: 'software architecture & quality; Go and Spring Boot, by hand.' },
      { verb: 'training', text: 'data structures & algorithms, one problem at a time.' },
      { verb: 'reading', text: 'in English, a chapter at a time.' },
      { verb: 'watching', text: 'One Piece, between deploys.', aside: "( it's a long show. )" },
      { verb: 'open to', text: 'software engineering roles & internships from 2027-1.', accent: true },
    ],
    contactLead: "I'm looking for my first role as a software engineer.",
    contactSub: 'An internship starting in 2027-1 or a full-time position. If you have something in mind, write to me.',
    motto: 'sodateru — to grow, to raise',
  },
}
