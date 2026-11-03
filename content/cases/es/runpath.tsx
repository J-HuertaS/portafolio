// Contenido del caso. Se generó desde los diseños aprobados; edita el texto aquí. Las clases vienen de components/case/case.module.css.
import type { CaseStudy } from '@/lib/case'
import { cx } from '@/lib/cx'
import s from '@/components/case/case.module.css'
import * as figures from './runpath.figures'

const study: CaseStudy = {
  slug: 'runpath',
  number: '02',
  kicker: '02 · Caso de estudio',
  title: 'RunPath',
  lead: 'Una plataforma web y móvil para encontrar rutas de trote cerca en Bogotá, construida con microservicios a lo largo de cuatro prototipos. Mi trabajo se concentró en autenticación, seguridad de red y despliegue: que el sistema resistiera ataques, carga y fallas.',
  meta: [
    { term: 'Mi parte', value: 'Arquitecto en una iteración; autenticación, seguridad y despliegue' },
    { term: 'Equipo', value: '7 personas' },
    { term: 'Duración', value: '4 prototipos · Arquitectura de Software, UNAL · 2025-1' },
    { term: 'Plataforma', value: 'Docker, Nginx, Kubernetes en Google Cloud' },
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
            RunPath muestra rutas de trote cercanas según la ubicación del usuario, con distancia, duración estimada y recorrido, y le envía
            recordatorios por correo para que se mantenga activo. Funciona en web y en Android.
          </p>
          <p className={cx(s.p)}>
            Lo construimos siete personas en el curso de Arquitectura de Software, en cuatro prototipos. Cada uno sumaba atributos de
            calidad sobre el anterior: primero la estructura, luego seguridad y rendimiento, y al final confiabilidad e interoperabilidad en
            la nube. Fui el arquitecto de una de las iteraciones y me encargué del servicio de autenticación, de la seguridad de red y del
            despliegue con réplicas en Google Cloud.
          </p>
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
              <h3 className={cx(s.h3)}>Microservicios con una sola puerta</h3>
              <p className={cx(s.pMuted)}>
                Cada capacidad (autenticación, rutas, distancias, notificaciones) es un servicio independiente, en el lenguaje que mejor le
                servía: Python, Node.js y Java. Web y móvil entran por un único API Gateway que autentica y enruta, así los clientes nunca
                conocen la topología interna.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>02</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Asíncrono donde nadie necesita esperar</h3>
              <p className={cx(s.pMuted)}>
                Cuando alguien termina una ruta, el servicio de rutas publica un evento en RabbitMQ y responde de inmediato; notificaciones
                lo consume y envía el correo cuando puede. Si el correo falla o tarda, terminar la ruta no se entera.
              </p>
            </div>
          </div>
          <div className={cx(s.decision, s.last)}>
            <span className={cx(s.num)}>03</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Autenticación centralizada con tokens</h3>
              <p className={cx(s.pMuted)}>
                El servicio de autenticación es la única autoridad de identidad: se apoya en Firebase y emite tokens JWT que cualquier
                servicio valida a través del gateway. Nadie más guarda contraseñas ni duplica la lógica de sesiones.
              </p>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 'seguridad',
      label: 'Seguridad',
      body: (
        <section id="seguridad" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Seguridad: lo que no se ve desde afuera</h2>
          <p className={cx(s.p)}>
            Diseñamos cuatro escenarios de seguridad (interceptación, acceso directo a componentes internos, movimiento lateral y denegación
            de servicio) y respondimos a cada uno con una capa concreta.
          </p>
          <div className={cx(s.rows)}>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Canal cifrado</b>
              <span className={cx(s.muted)}>Todo el tráfico web va por HTTPS con certificados TLS en la entrada.</span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Proxies inversos</b>
              <span className={cx(s.muted)}>Dos puntos públicos, uno web y uno móvil, que esconden el gateway y los servicios.</span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Redes segmentadas</b>
              <span className={cx(s.muted)}>
                Cinco redes; cada capa solo habla con la adyacente. Comprometer el frontend no da acceso a la base de datos.
              </span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Firewall de aplicación</b>
              <span className={cx(s.muted)}>Bloquea una IP que supera cinco peticiones por segundo y le muestra un aviso.</span>
            </div>
          </div>
          <p className={cx(s.p)}>
            Lo verificamos atacándolo: con Wireshark el tráfico capturado era ilegible, los pings entre contenedores de redes no adyacentes
            fallaron como debían, y una ráfaga de 200 peticiones simultáneas terminó con la IP de origen bloqueada.
          </p>
        </section>
      ),
    },
    {
      id: 'carga',
      label: 'Carga y fallas',
      body: (
        <section id="carga" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Carga y fallas</h2>
          <p className={cx(s.p)}>
            Las pruebas de carga con JMeter mostraron dónde estaba el cuello de botella: con unos 120 usuarios por segundo, el frontend
            respondía en 38 ms, pero autenticar tomaba cerca de 28 segundos. La respuesta fue replicar: tres instancias de autenticación
            detrás de su propio balanceador Nginx, y tres del frontend detrás del proxy web.
          </p>
          <p className={cx(s.p)}>
            En la última iteración llevamos el sistema a Kubernetes en Google Cloud. Las réplicas pasaron a ser repuestos en caliente: si un
            pod de autenticación o del frontend cae, Kubernetes redirige el tráfico a los sanos sin que el usuario lo note. RabbitMQ quedó
            como un clúster con estado, para que la caída de un nodo no pierda mensajes.
          </p>
        </section>
      ),
    },
    {
      id: 'resultados',
      label: 'Resultados',
      body: (
        <section id="resultados" className={cx(s.section, s.sectionLoose)}>
          <h2 className={cx(s.h2)}>Resultados</h2>
          <div className={s.stats}>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>~600</span>
              <span className={cx(s.statLabel)}>usuarios concurrentes antes del punto de quiebre en Google Cloud</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>200</span>
              <span className={cx(s.statLabel)}>peticiones de un ataque simulado, bloqueadas por el firewall</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>5</span>
              <span className={cx(s.statLabel)}>redes aisladas; solo los dos proxies son públicos</span>
            </div>
          </div>
          <p className={cx(s.p)}>
            <b className={cx(s.strong)}>Un hallazgo que no esperábamos:</b>
            {
              ' la prueba completa en la nube se cortó antes de tiempo porque Firebase tiene un límite de escrituras. Sin las actualizaciones de perfil, el sistema llegó al doble de usuarios. El límite no estaba en nuestro código, sino en un servicio externo.'
            }
          </p>
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
            <b className={cx(s.strong)}>Medir antes de escalar.</b>
            {' Sin la prueba de carga habríamos replicado lo que parecía lento, no lo que realmente lo era.'}
          </p>
          <p className={cx(s.lesson)}>
            <b className={cx(s.strong)}>Las dependencias externas también tienen límites.</b>
            {' Una cuota de un proveedor puede ser el verdadero techo del sistema; hay que conocerla en el diseño, no en la prueba.'}
          </p>
          <p className={cx(s.lesson)}>
            <b className={cx(s.strong)}>Patrones con un porqué.</b>
            {
              ' Proxies inversos, balanceadores, réplicas, colas, redes segmentadas: los conocía de clase, pero aquí cada uno respondió a un escenario de calidad concreto que pudimos atacar y medir. Ahí entendí la arquitectura como decisiones, no como diagramas.'
            }
          </p>
          <p className={cx(s.lesson, s.last)}>
            <b className={cx(s.strong)}>Los microservicios liberan al equipo, si se comunica.</b>
            {
              ' Como arquitecto de la iteración, repartí el trabajo siguiendo los dominios: cada quien fue dueño de un servicio y siete personas avanzamos en paralelo sin pisarnos. Pero esa libertad depende de hablar: los contratos entre servicios se acuerdan a tiempo, no se adivinan.'
            }
          </p>
        </section>
      ),
    },
  ],
  pager: [
    { label: 'Anterior', name: 'Resva', target: 'resva', dir: 'prev' },
    { label: 'Siguiente', name: 'Sentinel', target: 'sentinel', dir: 'next' },
  ],
}

export default study
