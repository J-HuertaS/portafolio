// Contenido del caso. Se generó desde los diseños aprobados; edita el texto aquí. Las clases vienen de components/case/case.module.css.
import type { CaseStudy } from '@/lib/case'
import { cx } from '@/lib/cx'
import s from '@/components/case/case.module.css'
import * as figures from './runpath.figures'

const study: CaseStudy = {
  slug: 'runpath',
  number: '02',
  kicker: '02 · Case study',
  title: 'RunPath',
  lead: 'A web and mobile platform for finding running routes nearby in Bogotá, built with microservices over four prototypes. My work focused on authentication, network security and deployment: making the system hold up under attacks, load and failures.',
  meta: [
    { term: 'My part', value: 'Architect for one iteration; authentication, security and deployment' },
    { term: 'Team', value: '7 people' },
    { term: 'Duration', value: '4 prototypes · Software Architecture, UNAL · 2025-1' },
    { term: 'Platform', value: 'Docker, Nginx, Kubernetes on Google Cloud' },
  ],
  tocLabel: 'On this page',
  figures: <>{figures.figure1}</>,
  sections: [
    {
      id: 'contexto',
      label: 'Context',
      body: (
        <section id="contexto" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Context</h2>
          <p className={cx(s.p)}>
            {
              "RunPath shows running routes near the user's location, with distance, estimated duration and the route itself, and sends email reminders to help them stay active. It works on the web and on Android."
            }
          </p>
          <p className={cx(s.p)}>
            Seven of us built it in the Software Architecture course, across four prototypes. Each one added quality attributes on top of
            the previous: first structure, then security and performance, and finally reliability and interoperability in the cloud. I was
            the architect for one of the iterations and owned the authentication service, network security and the replicated deployment on
            Google Cloud.
          </p>
        </section>
      ),
    },
    {
      id: 'diseno',
      label: 'System design',
      body: (
        <section id="diseno" className={cx(s.section, s.sectionTight)}>
          <h2 className={cx(s.h2, s.h2Spaced)}>System design</h2>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>01</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Microservices behind a single door</h3>
              <p className={cx(s.pMuted)}>
                Each capability (authentication, routes, distances, notifications) is an independent service, in whichever language suited
                it best: Python, Node.js and Java. Web and mobile come in through a single API Gateway that authenticates and routes, so
                clients never see the internal topology.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>02</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Asynchronous where nobody needs to wait</h3>
              <p className={cx(s.pMuted)}>
                When someone finishes a route, the routes service publishes an event to RabbitMQ and responds right away; notifications
                consumes it and sends the email when it can. If email fails or is slow, finishing the route never notices.
              </p>
            </div>
          </div>
          <div className={cx(s.decision, s.last)}>
            <span className={cx(s.num)}>03</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Centralized token-based authentication</h3>
              <p className={cx(s.pMuted)}>
                The authentication service is the single identity authority: it builds on Firebase and issues JWTs that any service
                validates through the gateway. Nobody else stores passwords or duplicates session logic.
              </p>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 'seguridad',
      label: 'Security',
      body: (
        <section id="seguridad" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>{"Security: what you can't see from outside"}</h2>
          <p className={cx(s.p)}>
            We designed four security scenarios (interception, direct access to internal components, lateral movement and denial of service)
            and answered each one with a concrete layer.
          </p>
          <div className={cx(s.rows)}>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Encrypted channel</b>
              <span className={cx(s.muted)}>All web traffic goes over HTTPS with TLS certificates at the edge.</span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Reverse proxies</b>
              <span className={cx(s.muted)}>
                Two public entry points, one for web and one for mobile, that hide the gateway and the services.
              </span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Segmented networks</b>
              <span className={cx(s.muted)}>
                Five networks; each layer only talks to the adjacent one. Compromising the frontend gives no access to the database.
              </span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Application firewall</b>
              <span className={cx(s.muted)}>Blocks any IP that exceeds five requests per second and shows it a notice.</span>
            </div>
          </div>
          <p className={cx(s.p)}>
            We verified it by attacking it: traffic captured with Wireshark was unreadable, pings between containers on non-adjacent
            networks failed as they should, and a burst of 200 simultaneous requests ended with the source IP blocked.
          </p>
        </section>
      ),
    },
    {
      id: 'carga',
      label: 'Load and failures',
      body: (
        <section id="carga" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Load and failures</h2>
          <p className={cx(s.p)}>
            Load tests with JMeter showed where the bottleneck was: at about 120 users per second the frontend responded in 38 ms, but
            authenticating took around 28 seconds. The answer was replication: three authentication instances behind their own Nginx load
            balancer, and three frontend instances behind the web proxy.
          </p>
          <p className={cx(s.p)}>
            {
              "In the last iteration we moved the system to Kubernetes on Google Cloud. The replicas became hot spares: if an authentication or frontend pod goes down, Kubernetes routes traffic to the healthy ones without the user noticing. RabbitMQ became a stateful cluster, so losing a node doesn't lose messages."
            }
          </p>
        </section>
      ),
    },
    {
      id: 'resultados',
      label: 'Results',
      body: (
        <section id="resultados" className={cx(s.section, s.sectionLoose)}>
          <h2 className={cx(s.h2)}>Results</h2>
          <div className={s.stats}>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>~600</span>
              <span className={cx(s.statLabel)}>concurrent users before the breaking point on Google Cloud</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>200</span>
              <span className={cx(s.statLabel)}>requests from a simulated attack, blocked by the firewall</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>5</span>
              <span className={cx(s.statLabel)}>isolated networks; only the two proxies are public</span>
            </div>
          </div>
          <p className={cx(s.p)}>
            <b className={cx(s.strong)}>{"A finding we didn't expect:"}</b>
            {
              " the full cloud test stopped early because Firebase has a write quota. Without profile updates, the system reached twice as many users. The limit wasn't in our code but in an external service."
            }
          </p>
        </section>
      ),
    },
    {
      id: 'aprendizajes',
      label: 'Lessons learned',
      body: (
        <section id="aprendizajes" className={cx(s.section, s.sectionTight)}>
          <h2 className={cx(s.h2, s.h2Spaced)}>Lessons learned</h2>
          <p className={cx(s.lesson)}>
            <b className={cx(s.strong)}>Measure before you scale.</b>
            {' Without the load test we would have replicated what looked slow, not what actually was.'}
          </p>
          <p className={cx(s.lesson)}>
            <b className={cx(s.strong)}>External dependencies have limits too.</b>
            {" A provider's quota can be the system's real ceiling; you need to know it at design time, not during the test."}
          </p>
          <p className={cx(s.lesson)}>
            <b className={cx(s.strong)}>Patterns with a reason.</b>
            {
              " Reverse proxies, load balancers, replicas, queues, segmented networks: I knew them from class, but here each one answered a concrete quality scenario we could attack and measure. That's where I understood architecture as decisions, not diagrams."
            }
          </p>
          <p className={cx(s.lesson, s.last)}>
            <b className={cx(s.strong)}>Microservices free the team, if the team talks.</b>
            {
              " As the iteration's architect, I split the work along domain lines: each person owned a service, and seven of us moved in parallel without stepping on each other. But that freedom depends on talking: contracts between services have to be agreed on in time, not guessed."
            }
          </p>
        </section>
      ),
    },
  ],
  pager: [
    { label: 'Previous', name: 'Resva', target: 'resva', dir: 'prev' },
    { label: 'Next', name: 'Sentinel', target: 'sentinel', dir: 'next' },
  ],
}

export default study
