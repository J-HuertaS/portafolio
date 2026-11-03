// Contenido del caso. Se generó desde los diseños aprobados; edita el texto aquí. Las clases vienen de components/case/case.module.css.
import type { CaseStudy } from '@/lib/case'
import { cx } from '@/lib/cx'
import s from '@/components/case/case.module.css'
import * as figures from './resva.figures'

const study: CaseStudy = {
  slug: 'resva',
  number: '01',
  kicker: '01 · Case study',
  title: 'Resva',
  lead: "Booking software for sports venues in Colombia. Each business gets its own public page, multiple locations, a dashboard for its staff and its own Mercado Pago account. I design and build it end to end, and it's in production.",
  link: { href: 'https://resva.digital', label: 'resva.digital' },
  meta: [
    { term: 'My part', value: 'Co-founder and CTO; architecture and end-to-end development' },
    { term: 'Company', value: 'TaoTek, founded August 2026 · Resva in development since September 2025' },
    { term: 'Status', value: 'In production · first venue onboarding' },
    { term: 'Platform', value: 'Next.js, Supabase, Vercel, Mercado Pago, WhatsApp' },
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
              "Booking a court usually happens over chat: ask what's free, wait for a reply, send a screenshot of the deposit. Resva gives each business a page where players see open slots, book and pay, and a dashboard where staff manage courts, prices, opening hours, customers and memberships."
            }
          </p>
          <p className={cx(s.p)}>
            {
              "It's truly multi-tenant: a business has several locations, each with its own hours, holidays and prices per court category, and its own staff with different permissions for owner, supervisor and employee. The money from every booking goes straight to the business's or location's Mercado Pago account; Resva takes no commission."
            }
          </p>
          {figures.figure2}
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
              <h3 className={cx(s.h3)}>Logic lives in a single layer</h3>
              <p className={cx(s.pMuted)}>
                Routes authenticate, validate the shape of the input and call a service; no page or component queries the database. There
                are 31 services, one per domain, and the pure rules (availability, opening hours, holidays, deposits) live separately with
                their unit tests. A test fails if a route bypasses the layer.
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>02</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>The database is the source of truth</h3>
              <p className={cx(s.pMuted)}>
                {
                  "The schema lives in three files (tables, policies and triggers), and the code's types are generated from it: a column that doesn't exist won't compile. What must never fail is guaranteed by Postgres, not by code: two overlapping bookings on the same court are rejected by an exclusion constraint."
                }
              </p>
            </div>
          </div>
          <div className={cx(s.decision)}>
            <span className={cx(s.num)}>03</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Time-based behavior lives in the database</h3>
              <p className={cx(s.pMuted)}>
                {
                  "An unpaid booking holds the slot for 15 minutes. pg_cron expires it every minute, and a trigger broadcasts every slot change over Realtime to that court's channel for that date. No new route has to remember to notify anyone: if it takes or frees a slot, the database announces it on its own."
                }
              </p>
            </div>
          </div>
          <div className={cx(s.decision, s.last)}>
            <span className={cx(s.num)}>04</span>
            <div className={cx(s.stack)}>
              <h3 className={cx(s.h3)}>Few round trips to the database</h3>
              <p className={cx(s.pMuted)}>
                {
                  "A business's availability for a date comes from a single round of parallel queries (locations, courts, rates, bookings and blocks) and is computed in memory with pure rules. That's also where combined courts are resolved: booking the big court takes the smaller ones it's made of, and vice versa."
                }
              </p>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 'dinero',
      label: 'Money',
      body: (
        <section id="dinero" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Money: two simultaneous operations must never overpay</h2>
          <p className={cx(s.p)}>
            The first version read the balance on the server and then wrote it. With two simultaneous operations, updates got lost and a
            booking could end up overpaid. I changed it at the root: deposits, credit balance, cancellations, refunds and memberships go
            through SQL functions that lock the row and check limits in a single transaction. Whether a booking is paid is maintained by a
            trigger; the code never writes it.
          </p>
          <p className={cx(s.p)}>
            {
              "With Mercado Pago, the webhook notice isn't trusted: the signature is verified, it's discarded if that payment was already processed, and the status is fetched from Mercado Pago's API. An approved payment on a booking that already expired doesn't revive it: it's flagged as a late payment for the business to refund."
            }
          </p>
          {figures.figure3}
          <p className={cx(s.p)}>
            {
              "Concurrency tests fire money operations at the same booking simultaneously and check that the total never exceeds the limit. And no booking is ever deleted: it's cancelled, so the money trail is never lost."
            }
          </p>
        </section>
      ),
    },
    {
      id: 'seguridad',
      label: 'Security and data',
      body: (
        <section id="seguridad" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>Security and data</h2>
          <p className={cx(s.p)}>
            {
              "The dashboard uses Realtime, so an employee's token reaches their browser and could be used to query the database directly. The design starts from that reality instead of ignoring it."
            }
          </p>
          <div className={cx(s.rows)}>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Writes only through the API</b>
              <span className={cx(s.muted)}>
                No policy allows writes from the browser; every change goes through the server and its rules.
              </span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Reads scoped by location</b>
              <span className={cx(s.muted)}>
                {
                  "The database filters bookings, payments and customers by each user's locations. An employee at one location can't see another, even within the same business."
                }
              </span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Two systems, one rule</b>
              <span className={cx(s.muted)}>
                {
                  "The API and the database policies must say the same thing. A document maps them table by table, and a test attacks the database with each role's token."
                }
              </span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>Code via WhatsApp</b>
              <span className={cx(s.muted)}>
                {"Booking and viewing your own bookings require verifying your number. Before, typing a phone number showed anyone's name."}
              </span>
            </div>
            <div className={cx(s.row)}>
              <b className={cx(s.term)}>A narrow public surface</b>
              <span className={cx(s.muted)}>
                {
                  "An enforcing content security policy, per-IP limits on endpoints that cost money, and personal data handled under Colombia's data protection law (Ley 1581)."
                }
              </span>
            </div>
          </div>
          <p className={cx(s.p)}>
            <b className={cx(s.strong)}>A performance finding:</b>
            {
              ' the first version of the policies evaluated a function on every row, about 0.27 ms per row: 8 seconds with 30,000 customers. Rewriting them with sets that Postgres evaluates only once brought that query down to 23 ms.'
            }
          </p>
        </section>
      ),
    },
    {
      id: 'proceso',
      label: 'How I build it',
      body: (
        <section id="proceso" className={cx(s.section)}>
          <h2 className={cx(s.h2)}>How I build it: AI agents, tests as the gate</h2>
          <p className={cx(s.p)}>
            {
              "I build Resva with AI agents, and that changed where I put the rigor. There's no time to review every change by hand, so quality doesn't depend on reading code: it depends on tests catching problems. Every behavior change updates the test that covers it, and every bug fix comes with the test that would have caught it."
            }
          </p>
          <p className={cx(s.p)}>
            The path is fixed: work branch, staging, production. On staging, GitHub Actions runs the unit and API tests; before production
            it runs the full suite, including the browser at 390 and 1280 px, and nothing merges if it fails. Decisions are written down as
            ADRs, and the code cites them by name, so an agent arriving with no context knows why things are the way they are.
          </p>
        </section>
      ),
    },
    {
      id: 'estado',
      label: 'Where it stands',
      body: (
        <section id="estado" className={cx(s.section, s.sectionLoose)}>
          <h2 className={cx(s.h2)}>Where it stands</h2>
          <p className={cx(s.p)}>
            {
              "Resva is in production: a first venue is starting to use it and others are trying the demo. There isn't enough volume yet to show usage metrics, so I don't show any. What I can show is how it's built."
            }
          </p>
          <div className={s.stats}>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>32</span>
              <span className={cx(s.statLabel)}>architecture decisions written as ADRs</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>58</span>
              <span className={cx(s.statLabel)}>security policies in the database, tested on every run</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>86</span>
              <span className={cx(s.statLabel)}>integration suites: 61 API suites per role and 25 in the browser</span>
            </div>
            <div className={cx(s.stat)}>
              <span className={cx(s.statValue)}>8 s → 23 ms</span>
              <span className={cx(s.statLabel)}>customer reads after rewriting the policies</span>
            </div>
          </div>
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
            <b className={cx(s.strong)}>Money rules belong where the data lives.</b>
            {
              " Validating on the server seemed enough until two requests arrived at the same time. A transaction with a locked row isn't an optimization: it's the rule."
            }
          </p>
          <p className={cx(s.lesson)}>
            <b className={cx(s.strong)}>With agents, the spec is the test.</b>
            {
              " An agent writes code fast and confidently. What keeps it honest isn't the instruction but a test suite that fails when it's wrong."
            }
          </p>
          <p className={cx(s.lesson, s.last)}>
            <b className={cx(s.strong)}>Writing decisions down saves arguing them twice.</b>
            {' Each ADR says what was decided, why, and what was ruled out. When a rule changes, its ADR changes in the same commit.'}
          </p>
        </section>
      ),
    },
  ],
  pager: [
    { label: 'Back', name: 'Projects', target: 'home', dir: 'prev' },
    { label: 'Next', name: 'RunPath', target: 'runpath', dir: 'next' },
  ],
}

export default study
