// Contenido del caso. Se generó desde los diseños aprobados; edita el texto aquí. Las clases vienen de components/case/case.module.css.
import type { CaseStudy } from '@/lib/case'
import { cx } from '@/lib/cx'
import s from '@/components/case/case.module.css'
import * as figures from './sentinel.figures'

const study: CaseStudy = {
  slug: 'sentinel',
  number: '03',
  kicker: '03 · Case study',
  title: 'Sentinel',
  lead: "A cloud-native platform on Azure for reporting thefts in real time and alerting people nearby. I designed the whole architecture together with the team and built the service that gets the alerts to people's phones.",
  meta: [
    { term: 'My part', value: 'Architecture design and the notification microservice' },
    { term: 'Team', value: '6 people, one microservice each' },
    { term: 'Duration', value: '6 weeks · diploma program, 2026' },
    { term: 'Platform', value: 'Microsoft Azure, Terraform, GitHub Actions' },
  ],
  tocLabel: 'On this page',
  figures: (
    <>
      {figures.figure1}
      {figures.figure2}
    </>
  ),
  sections: [
    {
      id: 'contexto',
      label: 'Context',
      body: (
        <section id="contexto" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Context</h2>
          <p className={cx(s.p)}>
            Sentinel was the project for the first module of the diploma program, Cloud-Based Software Engineering. Someone who is being
            robbed holds a button in the app for three seconds; the system records the incident, finds the users nearby and sends them an
            alert.
          </p>
          <p className={cx(s.p)}>
            There were six of us. We designed the architecture together: I worked on the views, the quality scenarios and the decisions that
            cut across the system. Then each of us built one microservice in its own repository; mine was notifications. It was also my
            first real hands-on work with Microsoft Azure and Terraform.
          </p>
        </section>
      ),
    },
    {
      id: 'diseno',
      label: 'System design',
      body: (
        <section id="diseno" className={cx(s.section, s.sectionTight)}>
          <h2 className={cx(s.h2, s.h2Tight)}>System design</h2>
          <p className={cx(s.pSpaced)}>
            The underlying question was how to take advantage of the cloud instead of just running on it: a platform that scales, recovers
            and is operated with managed services, without the team managing servers. These are the decisions that shaped the system.
          </p>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>01</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Asynchronous by default</h3>
              <p className={cx(s.pMuted)}>
                A theft report triggers work in several services. Chaining them with HTTP calls meant a failure in one would block the user.
                We chose Event Grid to fan each event out to the services that care and Service Bus for notifications. We accepted eventual
                consistency so that reporting never depends on what happens afterwards.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>02</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Delegated authentication, validated at the edge</h3>
              <p className={cx(s.pMuted)}>
                Instead of building a user service, Firebase issues the tokens and the API Gateway (Azure API Management) validates their
                signature with cached public keys. The microservices trust the identity that arrives already validated. If Firebase goes
                down, existing tokens keep working; the cost is depending on an external provider.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>03</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Managed, elastic compute</h3>
              <p className={cx(s.pMuted)}>
                The microservices run on Azure Container Apps, which scales replicas with load and can scale to zero where traffic is
                sporadic. Sanitizing evidence files is an Azure Function that only exists while it runs. No service keeps state in memory,
                so the platform can create or restart instances at any time.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>04</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Each service owns its storage</h3>
              <p className={cx(s.pMuted)}>
                {
                  "The kind of database follows from the queries: serverless SQL for thefts, personal data and notifications; Redis with geospatial search to find users within a radius; Blob Storage for evidence. No service reads another service's database."
                }
              </p>
            </div>
          </div>
          <div className={cx(s.decision, s.last)}>
            <span className={cx(s.num)}>05</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Only the gateway faces the outside</h3>
              <p className={cx(s.pMuted)}>
                The API Gateway lives in a public subnet; microservices, queues and databases live in a private one. Everything that comes
                in goes through a single point that authenticates and routes.
              </p>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 'calidad',
      label: 'Quality attributes',
      body: (
        <section id="calidad" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Quality attributes</h2>
          <p className={cx(s.p)}>
            {
              "We didn't design by gut feeling: we defined nine measurable quality scenarios and chose concrete tactics for each. These are the main ones:"
            }
          </p>
          <div className={cx(s.rows)}>
            <div className={cx(s.qrow)}>
              <span>Elasticity under a spike in reports</span>
              <span className={cx(s.dim)}>autoscaling, load balancing</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>Availability when a replica goes down</span>
              <span className={cx(s.dim)}>health checks, circuit breaker, exponential backoff</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>Alerts in 10 s or less</span>
              <span className={cx(s.dim)}>asynchronous messaging, autoscaling</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>Map and metrics in 2 s or less</span>
              <span className={cx(s.dim)}>in-memory cache</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>Find a failure in under 5 min</span>
              <span className={cx(s.dim)}>structured logging, traces with event ids</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>40% lower cost off-peak</span>
              <span className={cx(s.dim)}>scaling down, tiered storage</span>
            </div>
            <div className={cx(s.qrow)}>
              <span>Data and token security</span>
              <span className={cx(s.dim)}>JWT with asymmetric keys, graceful degradation</span>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 'infra',
      label: 'Infrastructure as code',
      body: (
        <section id="infra" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Infrastructure as code</h2>
          <p className={cx(s.p)}>
            All the infrastructure (gateway, Container Apps, Event Grid, Service Bus, databases and observability) is declared in Terraform
            in its own repository. Every push to a microservice triggers this path, with no manual deployments:
          </p>
          <ol className={cx(s.steps)}>
            <li className={cx(s.step)}>push to main</li>
            <li aria-hidden="true" className={cx(s.stepArrow)}>
              →
            </li>
            <li className={cx(s.step)}>GitHub Actions builds the image</li>
            <li aria-hidden="true" className={cx(s.stepArrow)}>
              →
            </li>
            <li className={cx(s.step)}>infrastructure repo is notified</li>
            <li aria-hidden="true" className={cx(s.stepArrow)}>
              →
            </li>
            <li className={cx(s.step)}>terraform apply</li>
            <li aria-hidden="true" className={cx(s.stepArrow)}>
              →
            </li>
            <li className={cx(s.step)}>new revision on Azure</li>
          </ol>
          <p className={cx(s.p)}>
            Every version in the cloud maps to an exact commit. It was my first time working with Azure and Terraform, and what stuck with
            me most is that infrastructure is designed and reviewed just like code.
          </p>
        </section>
      ),
    },
    {
      id: 'problema',
      label: 'My service',
      body: (
        <section id="problema" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>My service: notifications</h2>
          <p className={cx(s.p)}>
            A theft alert is only useful if it arrives fast. Our target was for 90% of notifications to arrive in 10 seconds or less. But
            delivery depends on an external service, Firebase, which can be slow or fail, and that could not hold back the report of someone
            asking for help.
          </p>
          <blockquote className={s.quote}>Reporting has to be instant even if notifying is slow or fails.</blockquote>
        </section>
      ),
    },
    {
      id: 'decisiones',
      label: 'decisiones',
      body: (
        <section id="decisiones" className={cx(s.section, s.sectionTight)}>
          <h2 className={cx(s.h2Sub)}>Decisions in my service</h2>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>01</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>A queue between computing and notifying</h3>
              <p className={cx(s.pMuted)}>
                {
                  'Geolocation publishes one request per nearby user to Azure Service Bus, and my service consumes them at its own pace, so the geographic computation never waits for Firebase. I use '
                }
                <i>peek-lock</i>
                {
                  ' mode: a message is only deleted once the notification went out, and after 10 failed attempts it moves to a dead-letter queue for review.'
                }
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>02</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Not every error deserves a retry</h3>
              <p className={cx(s.pMuted)}>
                If Firebase says the device no longer exists (the app was uninstalled), retrying is pointless: the message is closed. If
                Firebase is down, the message goes back to the queue to try again. If the message is malformed, it goes straight to the
                dead-letter queue. Classifying errors avoids both losing alerts and retrying forever.
              </p>
            </div>
          </div>
          <div className={cx(s.decision, s.last)}>
            <span className={cx(s.num)}>03</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>One device per user, no race conditions</h3>
              <p className={cx(s.pMuted)}>
                {'Each phone is identified by a Firebase Installation ID that can change. I store it with an '}
                <i>upsert</i>
                {' atomic SQL ('}
                <code className={cx(s.code)}>MERGE … WITH (HOLDLOCK)</code>
                {
                  "), so two replicas handling the same user never create duplicate rows. The user comes from the token already validated at the gateway, not from what the app sends, so nobody can register a device in someone else's name."
                }
              </p>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 'no',
      label: 'What we chose not to do',
      body: (
        <section id="no" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>What we chose not to do</h2>
          <p className={cx(s.p)}>
            {
              "We did not make notifications idempotent. If a message is redelivered, the user may get the alert twice. The basic tier of Service Bus, the one that fit a project with no budget, doesn't detect duplicates, and building our own deduplication added state and complexity that six weeks didn't justify."
            }
          </p>
          <p className={cx(s.p)}>
            {
              "We documented it as a decision, including the key to use if it's ever implemented: event id plus user id. For a safety alert, getting it twice is far less serious than not getting it at all."
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
              <span className={cx(s.statValue)}>1.65 s</span>
              <span className={cx(s.statLabel)}>from report to alert on two phones under normal operation (target: 10 s)</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>24 s</span>
              <span className={cx(s.statLabel)}>with a geolocation replica down: alerts still arrived, just later</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>0 failures</span>
              <span className={cx(s.statLabel)}>across 3,624 test reports with 50 concurrent users (full system)</span>
            </div>
          </div>
          <p className={cx(s.p)}>
            We built the core flow: theft reports, personal data, geolocation and push alerts. Email and SMS notifications stayed on paper,
            along with everything related to evidence: its microservice, storage, file sanitization with the scanning API and quarantine,
            and the metrics in Redis.
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
            <b className={cx(s.strong)}>Contracts come first.</b>
            {
              " Each of us built our service separately, and event formats were agreed on after code already existed. Wiring the services together was the hardest part of the project; that's why my service also accepts the older field names."
            }
          </p>
          <p className={cx(s.lesson)}>
            <b className={cx(s.strong)}>Infrastructure as code from day one.</b>
            {
              ' We started by creating resources by hand in the Azure portal and later had to rebuild them in Terraform. Doing it the other way around would have saved us that work.'
            }
          </p>
          <p className={cx(s.lesson, s.last)}>
            <b className={cx(s.strong)}>{"A decision that isn't written down gets lost."}</b>
            {
              " Several verbal agreements ended up pulling the design apart from what got built. Recording each decision as it's made keeps the whole team on the same page."
            }
          </p>
        </section>
      ),
    },
  ],
  pager: [
    { label: 'Previous', name: 'RunPath', target: 'runpath', dir: 'prev' },
    { label: 'Back', name: 'All projects', target: 'home', dir: 'next' },
  ],
}

export default study
