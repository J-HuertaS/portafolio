// Contenido del caso. Se generó desde los diseños aprobados; edita el texto aquí. Las clases vienen de components/case/case.module.css.
import type { CaseStudy } from '@/lib/case'
import { cx } from '@/lib/cx'
import s from '@/components/case/case.module.css'
import * as figures from './sentinel.figures'

const study: CaseStudy = {
  slug: 'sentinel',
  number: '03',
  kicker: '03 · Caso de estudio',
  title: 'Sentinel',
  lead: 'Una plataforma nativa de la nube en Azure para reportar robos en tiempo real y alertar a las personas que están cerca. Participé en el diseño de toda la arquitectura con el equipo y construí el servicio que hace llegar las alertas al celular.',
  meta: [
    { term: 'Mi parte', value: 'Diseño de la arquitectura y el microservicio de notificaciones' },
    { term: 'Equipo', value: '6 personas, un microservicio cada una' },
    { term: 'Duración', value: '6 semanas · diplomado, 2026' },
    { term: 'Plataforma', value: 'Microsoft Azure, Terraform, GitHub Actions' },
  ],
  tocLabel: 'En esta página',
  figures: (
    <>
      {figures.figure1}
      {figures.figure2}
    </>
  ),
  sections: [
    {
      id: 'contexto',
      label: 'Contexto',
      body: (
        <section id="contexto" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Contexto</h2>
          <p className={cx(s.p)}>
            Sentinel fue el proyecto del primer módulo del diplomado, Ingeniería de Software basada en la Nube. Una persona que sufre un
            robo mantiene presionado un botón en la app durante tres segundos; el sistema registra el incidente, busca a los usuarios que
            están cerca y les envía una alerta.
          </p>
          <p className={cx(s.p)}>
            Éramos seis. El diseño de la arquitectura lo hicimos entre todos: participé en las vistas, los escenarios de calidad y las
            decisiones que atraviesan el sistema. Después cada uno construyó un microservicio en su propio repositorio; el mío fue el de
            notificaciones. Fue también mi primer acercamiento real a Microsoft Azure y a Terraform.
          </p>
        </section>
      ),
    },
    {
      id: 'diseno',
      label: 'Diseño del sistema',
      body: (
        <section id="diseno" className={cx(s.section, s.sectionTight)}>
          <h2 className={cx(s.h2, s.h2Tight)}>Diseño del sistema</h2>
          <p className={cx(s.pSpaced)}>
            La pregunta de fondo era cómo aprovechar la nube en vez de solo correr en ella: que la plataforma escale, se recupere y se opere
            con servicios administrados, sin que el equipo tenga que gestionar servidores. Estas fueron las decisiones que dieron forma al
            sistema.
          </p>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>01</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Asíncrono por defecto</h3>
              <p className={cx(s.pMuted)}>
                Un reporte de robo dispara trabajo en varios servicios. Encadenarlos con llamadas HTTP hacía que una falla en uno bloqueara
                al usuario. Elegimos Event Grid para repartir cada evento a los servicios interesados y Service Bus para las notificaciones.
                Aceptamos consistencia eventual a cambio de que reportar nunca dependa de lo que pase después.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>02</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Autenticación delegada, validada en el borde</h3>
              <p className={cx(s.pMuted)}>
                En lugar de construir un servicio de usuarios, Firebase emite los tokens y el API Gateway (Azure API Management) valida su
                firma con llaves públicas en caché. Los microservicios confían en la identidad que llega validada. Si Firebase se cae, los
                tokens vigentes siguen funcionando: el costo es depender de un proveedor externo.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>03</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Cómputo administrado y elástico</h3>
              <p className={cx(s.pMuted)}>
                Los microservicios corren en Azure Container Apps, que escala réplicas según la carga y puede bajar a cero donde el tráfico
                es esporádico. El saneamiento de archivos de evidencia es una Azure Function que solo existe mientras se ejecuta. Ningún
                servicio guarda estado en memoria, así la plataforma puede crear o reiniciar instancias en cualquier momento.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>04</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Cada servicio con su propio almacenamiento</h3>
              <p className={cx(s.pMuted)}>
                El tipo de base sale de las consultas que se hacen: SQL serverless para robos, datos personales y notificaciones; Redis con
                búsqueda geoespacial para encontrar usuarios en un radio; Blob Storage para las evidencias. Ningún servicio lee la base de
                otro.
              </p>
            </div>
          </div>
          <div className={cx(s.decision, s.last)}>
            <span className={cx(s.num)}>05</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Solo el gateway mira hacia afuera</h3>
              <p className={cx(s.pMuted)}>
                El API Gateway vive en una subred pública; microservicios, colas y bases de datos, en una privada. Todo lo que entra pasa
                por un único punto que autentica y enruta.
              </p>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 'calidad',
      label: 'Atributos de calidad',
      body: (
        <section id="calidad" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Atributos de calidad</h2>
          <p className={cx(s.p)}>
            No diseñamos a ojo: definimos nueve escenarios de calidad medibles y para cada uno escogimos tácticas concretas. Estos son los
            principales:
          </p>
          <div className={cx(s.rows)}>
            <div className={cx(s.qrow)}>
              <span>Elasticidad ante un pico de reportes</span>
              <span className={cx(s.dim)}>autoescalado, balanceo de carga</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>Disponibilidad si cae una réplica</span>
              <span className={cx(s.dim)}>health checks, circuit breaker, backoff exponencial</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>Alertas en 10 s o menos</span>
              <span className={cx(s.dim)}>mensajería asíncrona, autoescalado</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>Mapa y métricas en 2 s o menos</span>
              <span className={cx(s.dim)}>caché en memoria</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>Encontrar una falla en menos de 5 min</span>
              <span className={cx(s.dim)}>logging estructurado, trazas con id de evento</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>40% menos costo en horas valle</span>
              <span className={cx(s.dim)}>escalar hacia abajo, almacenamiento por niveles</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>Seguridad de datos y tokens</span>
              <span className={cx(s.dim)}>JWT con llaves asimétricas, degradación controlada</span>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 'infra',
      label: 'Infraestructura como código',
      body: (
        <section id="infra" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Infraestructura como código</h2>
          <p className={cx(s.p)}>
            Toda la infraestructura (gateway, Container Apps, Event Grid, Service Bus, bases de datos y observabilidad) quedó declarada en
            Terraform en un repositorio propio. Cada push a un microservicio dispara este recorrido, sin despliegues a mano:
          </p>
          <ol className={cx(s.steps)}>
            <li className={cx(s.step)}>push a main</li>
            <li aria-hidden="true" className={cx(s.stepArrow)}>
              →
            </li>
            <li className={cx(s.step)}>GitHub Actions construye la imagen</li>
            <li aria-hidden="true" className={cx(s.stepArrow)}>
              →
            </li>
            <li className={cx(s.step)}>aviso al repo de infraestructura</li>
            <li aria-hidden="true" className={cx(s.stepArrow)}>
              →
            </li>
            <li className={cx(s.step)}>terraform apply</li>
            <li aria-hidden="true" className={cx(s.stepArrow)}>
              →
            </li>
            <li className={cx(s.step)}>nueva revisión en Azure</li>
          </ol>
          <p className={cx(s.p)}>
            Cada versión en la nube corresponde a un commit exacto. Para mí fue la primera vez trabajando con Azure y Terraform, y lo que
            más me quedó es que la infraestructura se diseña y se revisa igual que el código.
          </p>
        </section>
      ),
    },
    {
      id: 'problema',
      label: 'Mi servicio',
      body: (
        <section id="problema" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Mi servicio: las notificaciones</h2>
          <p className={cx(s.p)}>
            Una alerta de robo solo sirve si llega rápido. El objetivo que nos pusimos fue que el 90% de las notificaciones llegara en 10
            segundos o menos. Pero el envío depende de un servicio externo, Firebase, que puede tardar o fallar, y eso no podía frenar el
            reporte de quien está pidiendo ayuda.
          </p>
          <blockquote className={s.quote}>Reportar tiene que ser instantáneo aunque notificar sea lento o falle.</blockquote>
        </section>
      ),
    },
    {
      id: 'decisiones',
      label: 'decisiones',
      body: (
        <section id="decisiones" className={cx(s.section, s.sectionTight)}>
          <h2 className={cx(s.h2Sub)}>Decisiones en mi servicio</h2>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>01</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Una cola entre calcular y notificar</h3>
              <p className={cx(s.pMuted)}>
                {
                  'Geolocalización publica una solicitud por cada usuario cercano en Azure Service Bus, y mi servicio las consume a su ritmo. Así el cálculo geográfico no espera a Firebase. Uso el modo '
                }
                <i>peek-lock</i>: el mensaje solo se borra cuando la notificación salió bien, y después de 10 intentos fallidos pasa a una
                cola de mensajes muertos para revisarlo.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>02</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>No todos los errores merecen un reintento</h3>
              <p className={cx(s.pMuted)}>
                Si Firebase dice que el dispositivo ya no existe (la app se desinstaló), reintentar no sirve: el mensaje se cierra. Si
                Firebase está caído, el mensaje vuelve a la cola para intentarlo de nuevo. Si el mensaje viene mal formado, va directo a
                mensajes muertos. Clasificar los errores evita tanto perder alertas como reintentar para siempre.
              </p>
            </div>
          </div>
          <div className={cx(s.decision, s.last)}>
            <span className={cx(s.num)}>03</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Un dispositivo por usuario, sin carreras</h3>
              <p className={cx(s.pMuted)}>
                {'Cada celular se identifica con un Firebase Installation ID que puede cambiar. Lo guardo con un '}
                <i>upsert</i>
                {' atómico en SQL ('}
                <code className={cx(s.code)}>MERGE … WITH (HOLDLOCK)</code>), así dos réplicas procesando al mismo usuario no crean filas
                duplicadas. El usuario sale del token ya validado en el gateway, no de lo que envía la app, para que nadie registre un
                dispositivo a nombre de otro.
              </p>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 'no',
      label: 'Lo que decidimos no hacer',
      body: (
        <section id="no" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Lo que decidimos no hacer</h2>
          <p className={cx(s.p)}>
            No implementamos idempotencia en las notificaciones. Si un mensaje se reentrega, el usuario puede recibir la alerta dos veces.
            El nivel básico de Service Bus, el que cabía en un proyecto sin presupuesto, no detecta duplicados, y construir nuestra propia
            deduplicación sumaba estado y complejidad que no justificaban seis semanas.
          </p>
          <p className={cx(s.p)}>
            Lo dejamos documentado como decisión, con la llave que habría que usar si se implementa: la combinación del id del evento y el
            id del usuario. Para una alerta de seguridad, recibirla dos veces es mucho menos grave que no recibirla.
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
              <span className={cx(s.statValue)}>1,65 s</span>
              <span className={cx(s.statLabel)}>del reporte a la alerta en dos celulares, en operación normal (objetivo: 10 s)</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>24 s</span>
              <span className={cx(s.statLabel)}>con una réplica de geolocalización caída: llegaron igual, más tarde</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>0 fallos</span>
              <span className={cx(s.statLabel)}>en 3.624 reportes de prueba con 50 usuarios simultáneos (sistema completo)</span>
            </div>
          </div>
          <p className={cx(s.p)}>
            Implementamos el flujo central: reportes de robo, datos personales, geolocalización y alertas push. Quedaron solo en el diseño
            las notificaciones por correo y SMS, y todo el manejo de evidencias: su microservicio, el almacenamiento, el saneamiento de
            archivos con la API de escaneo y la cuarentena, y las métricas en Redis.
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
            <b className={cx(s.strong)}>Los contratos van primero.</b>
            {
              ' Cada quien construyó su servicio por separado y los formatos de los eventos se acordaron cuando ya había código. Conectar los servicios fue lo más difícil del proyecto; por eso mi servicio acepta también los nombres de campos anteriores.'
            }
          </p>
          <p className={cx(s.lesson)}>
            <b className={cx(s.strong)}>La infraestructura como código desde el día uno.</b>
            {
              ' Empezamos creando recursos a mano en el portal de Azure y después tuvimos que reconstruirlos en Terraform. Hacerlo al revés nos habría ahorrado ese trabajo.'
            }
          </p>
          <p className={cx(s.lesson, s.last)}>
            <b className={cx(s.strong)}>Una decisión que no se escribe se pierde.</b>
            {
              ' Varios acuerdos verbales terminaron separando el diseño de lo que se construyó. Registrar cada decisión en el momento mantiene a todo el equipo en el mismo plano.'
            }
          </p>
        </section>
      ),
    },
  ],
  pager: [
    { label: 'Anterior', name: 'RunPath', target: 'runpath', dir: 'prev' },
    { label: 'Volver', name: 'Todos los proyectos', target: 'home', dir: 'next' },
  ],
}

export default study
