// Contenido del caso. Se generó desde los diseños aprobados; edita el texto aquí. Las clases vienen de components/case/case.module.css.
import type { CaseStudy } from '@/lib/case'
import { cx } from '@/lib/cx'
import s from '@/components/case/case.module.css'
import * as figures from './resva.figures'

const study: CaseStudy = {
  slug: 'resva',
  number: '01',
  kicker: '01 · Caso de estudio',
  title: 'Resva',
  lead: 'Un software de reservas para complejos deportivos en Colombia. Cada negocio tiene su página pública, varias sedes, un panel para su equipo y su propia cuenta de Mercado Pago. Lo diseño y lo construyo de punta a punta, y está en producción.',
  link: { href: 'https://resva.digital', label: 'resva.digital' },
  meta: [
    { term: 'Mi parte', value: 'Co-fundador y CTO; arquitectura y desarrollo de punta a punta' },
    { term: 'Empresa', value: 'TaoTek, fundada en agosto de 2026 · Resva en desarrollo desde septiembre de 2025' },
    { term: 'Estado', value: 'En producción · primer complejo empezando' },
    { term: 'Plataforma', value: 'Next.js, Supabase, Vercel, Mercado Pago, WhatsApp' },
  ],
  tocLabel: 'En esta página',
  figures: <>{figures.figure1}</>,
  sections: [
    {
      id: 'contexto',
      label: 'Contexto',
      body: (
        <section id="contexto" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Contexto</h2>
          <p className={cx(s.p)}>
            Reservar una cancha suele resolverse por chat: preguntar qué hay libre, esperar la respuesta, mandar el comprobante del abono.
            Resva le da a cada negocio una página donde el jugador ve los turnos libres, reserva y paga, y un panel donde el equipo
            administra canchas, precios, horarios, clientes y membresías.
          </p>
          <p className={cx(s.p)}>
            Es multi-tenant de verdad: un negocio tiene varias sedes, cada sede su horario, sus festivos y sus precios por categoría de
            cancha, y su equipo con permisos distintos para propietario, supervisor y empleado. El dinero de cada reserva va directo a la
            cuenta de Mercado Pago del negocio o de la sede; Resva no retiene comisión.
          </p>
          {figures.figure2}
        </section>
      ),
    },
    {
      id: 'diseno',
      label: 'Diseño del sistema',
      body: (
        <section id="diseno" className={cx(s.section, s.sectionTight)}>
          <h2 className={cx(s.h2, s.h2Spaced)}>Diseño del sistema</h2>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>01</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>La lógica vive en una sola capa</h3>
              <p className={cx(s.pMuted)}>
                Las rutas autentican, validan la forma de la entrada y llaman a un servicio; ninguna página ni componente consulta la base.
                Son 31 servicios, uno por dominio, y las reglas puras (disponibilidad, horarios, festivos, abonos) viven aparte con sus
                pruebas unitarias. Una prueba falla si una ruta se salta la capa.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>02</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>La base es la fuente de verdad</h3>
              <p className={cx(s.pMuted)}>
                El esquema está en tres archivos (tablas, políticas y triggers) y los tipos del código se generan desde él: una columna que
                no existe no compila. Lo que no puede fallar lo garantiza Postgres y no el código: dos reservas que se cruzan en la misma
                cancha las rechaza una restricción de exclusión.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>03</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Lo que depende del tiempo, en la base</h3>
              <p className={cx(s.pMuted)}>
                Una reserva sin pagar aparta el turno 15 minutos. pg_cron la vence cada minuto, y un trigger avisa cada cambio de turno por
                Realtime al canal de esa cancha y fecha. Así ninguna ruta nueva tiene que acordarse de avisar: si ocupa o libera un turno,
                la base lo anuncia sola.
              </p>
            </div>
          </div>
          <div className={cx(s.decision, s.last)}>
            <span className={cx(s.num)}>04</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Pocos viajes a la base</h3>
              <p className={cx(s.pMuted)}>
                La disponibilidad de un negocio en una fecha sale de una sola ronda de consultas en paralelo (sedes, canchas, tarifas,
                reservas y bloqueos) y se calcula en memoria con reglas puras. Ahí se resuelven también las canchas combinadas: reservar la
                cancha grande ocupa las pequeñas que la forman, y al revés.
              </p>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 'dinero',
      label: 'El dinero',
      body: (
        <section id="dinero" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>El dinero: dos operaciones a la vez no pueden sobrepagar</h2>
          <p className={cx(s.p)}>
            La primera versión leía el saldo en el servidor y luego escribía. Con dos operaciones simultáneas se perdían actualizaciones y
            una reserva podía quedar sobrepagada. Lo cambié de raíz: abonos, saldo a favor, cancelaciones, devoluciones y membresías pasan
            por funciones SQL que bloquean la fila y validan los topes en una sola transacción. Si una reserva está pagada lo mantiene un
            trigger; el código nunca lo escribe.
          </p>
          <p className={cx(s.p)}>
            Con Mercado Pago, el aviso del webhook no se cree: se verifica la firma, se descarta si ese pago ya se procesó y el estado se
            consulta a la API de Mercado Pago. Un pago aprobado sobre una reserva que ya venció no la revive: queda como pago tardío para
            que el negocio lo devuelva.
          </p>
          {figures.figure3}
          <p className={cx(s.p)}>
            Las pruebas de concurrencia lanzan operaciones de dinero al mismo tiempo sobre la misma reserva y verifican que la suma nunca
            pase del tope. Y ninguna reserva se borra: se cancela, para que el rastro del dinero no se pierda.
          </p>
        </section>
      ),
    },
    {
      id: 'seguridad',
      label: 'Seguridad y datos',
      body: (
        <section id="seguridad" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Seguridad y datos</h2>
          <p className={cx(s.p)}>
            El panel usa Realtime, así que el token de un empleado llega a su navegador y con él podría consultar la base directamente. El
            diseño parte de esa realidad en lugar de ignorarla.
          </p>
          <div className={cx(s.rows)}>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Escrituras solo por la API</b>
              <span className={cx(s.muted)}>
                Ninguna política permite escribir desde el navegador; todo cambio pasa por el servidor y sus reglas.
              </span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Lectura limitada por sede</b>
              <span className={cx(s.muted)}>
                La base filtra reservas, pagos y clientes por las sedes de cada usuario. Un empleado de una sede no ve la otra, ni siquiera
                dentro del mismo negocio.
              </span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Dos sistemas, una regla</b>
              <span className={cx(s.muted)}>
                La API y las políticas de la base deben decir lo mismo. Un documento las cruza tabla por tabla y una prueba ataca la base
                con el token de cada rol.
              </span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Código por WhatsApp</b>
              <span className={cx(s.muted)}>
                Reservar y ver las propias reservas exige verificar el número. Antes, escribir un teléfono mostraba el nombre de cualquiera.
              </span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Superficie pública acotada</b>
              <span className={cx(s.muted)}>
                Política de contenido que bloquea, límites por IP en los endpoints con costo y datos personales tratados según la Ley 1581.
              </span>
            </div>
          </div>
          <p className={cx(s.p)}>
            <b className={cx(s.strong)}>Un hallazgo de rendimiento:</b>
            {
              ' la primera versión de las políticas evaluaba una función por cada fila, unos 0,27 ms por fila: 8 segundos con 30.000 clientes. Reescribirlas con conjuntos que Postgres evalúa una sola vez bajó esa consulta a 23 ms.'
            }
          </p>
        </section>
      ),
    },
    {
      id: 'proceso',
      label: 'Cómo lo construyo',
      body: (
        <section id="proceso" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Cómo lo construyo: agentes de IA, pruebas como puerta</h2>
          <p className={cx(s.p)}>
            Desarrollo Resva con agentes de IA, y eso cambió dónde pongo el rigor. No hay tiempo para revisar a mano cada cambio, así que la
            calidad no depende de leer código: depende de que las pruebas lo atrapen. Cada cambio de comportamiento actualiza la prueba que
            lo cubre, y cada error corregido trae la prueba que lo habría detectado.
          </p>
          <p className={cx(s.p)}>
            El camino es fijo: rama de trabajo, staging y producción. En staging, GitHub Actions corre las pruebas unitarias y las de la
            API; antes de producción corre la batería completa, también en el navegador a 390 y 1280 px, y si falla no se une. Las
            decisiones quedan escritas como ADR, y el código las cita por su nombre: un agente que llega sin contexto sabe por qué las cosas
            son como son.
          </p>
        </section>
      ),
    },
    {
      id: 'estado',
      label: 'Dónde está hoy',
      body: (
        <section id="estado" className={cx(s.section, s.sectionLoose)}>
          <h2 className={cx(s.h2)}>Dónde está hoy</h2>
          <p className={cx(s.p)}>
            Resva está en producción: un primer complejo está empezando a usarlo y otros están probando la demo. Todavía no hay volumen para
            mostrar métricas de uso, así que no las pongo: lo que sí puedo mostrar es cómo está construido.
          </p>
          <div className={s.stats}>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>32</span>
              <span className={cx(s.statLabel)}>decisiones de arquitectura escritas como ADR</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>58</span>
              <span className={cx(s.statLabel)}>políticas de seguridad en la base, probadas en cada corrida</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>86</span>
              <span className={cx(s.statLabel)}>suites de integración: 61 de API por rol y 25 en el navegador</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>8 s → 23 ms</span>
              <span className={cx(s.statLabel)}>lectura de clientes tras reescribir las políticas</span>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 'aprendizajes',
      label: 'Aprendizajes',
      body: (
        <section id="aprendizajes" className={cx(s.section, s.sectionTight)}>
          <h2 className={cx(s.h2, s.h2Spaced)}>Aprendizajes</h2>
          <p className={cx(s.lesson)}>
            <b className={cx(s.strong)}>Las reglas del dinero van donde está el dato.</b>
            {
              ' Validar en el servidor parecía suficiente hasta que dos peticiones llegaron al mismo tiempo. La transacción con la fila bloqueada no es una optimización: es la regla.'
            }
          </p>
          <p className={cx(s.lesson)}>
            <b className={cx(s.strong)}>Con agentes, la especificación es la prueba.</b>
            {
              ' Un agente escribe código rápido y seguro de sí mismo. Lo que lo mantiene honesto no es la instrucción, sino una batería que falla cuando se equivoca.'
            }
          </p>
          <p className={cx(s.lesson, s.last)}>
            <b className={cx(s.strong)}>Escribir las decisiones ahorra discutirlas dos veces.</b>
            {' Cada ADR dice qué se decidió, por qué y qué se descartó. Cuando una regla cambia, cambia su ADR en el mismo cambio.'}
          </p>
        </section>
      ),
    },
  ],
  pager: [
    { label: 'Volver', name: 'Proyectos', target: 'home', dir: 'prev' },
    { label: 'Siguiente', name: 'RunPath', target: 'runpath', dir: 'next' },
  ],
}

export default study
