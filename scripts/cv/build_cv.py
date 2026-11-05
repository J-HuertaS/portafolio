"""Hoja de vida con la marca Juan Huertas. Uso:
  python3 scripts/cv/build_cv.py /tmp/cv && node scripts/cv/pdf.js /tmp/cv public/cv

CV in the Juan Huertas brand: one US Letter page, real selectable text, single column (ATS-safe).
Content is copied verbatim from the previous CV PDFs; only the design changes."""
import base64, html, os, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
def b64(f): return base64.b64encode(open(os.path.join(ROOT, "app", "fonts", f), "rb").read()).decode()
SEAL = base64.b64encode(open(os.path.join(ROOT, "public", "brand", "hatake.svg"), "rb").read()).decode()
e = html.escape

CV = {
 "en": dict(
  lang="en", title="Juan Huertas — CV",
  role="Systems and Computing Engineering student · Software Engineer",
  tagline="I grow software.",
  contact=["Bogotá, Colombia", "juan.cardenas.huertas@gmail.com", "linkedin.com/in/juan-huertaszz", "github.com/J-HuertaS"],
  labels=dict(profile="Profile", exp="Experience", proj="Projects", edu="Education", skills="Technical skills"),
  profile="Systems and Computing Engineering student (GPA 4.7/5.0) focused on backend and software architecture. I co-founded and build Resva, a multi-tenant SaaS in production; I was the architect for a microservices platform on Kubernetes and helped design a cloud-native platform on Azure.",
  exp=[dict(title="Co-founder & CTO · TaoTek SAS · Resva (resva.digital)", when="Sep 2025 – present · Bogotá", bullets=[
    "Built and launched end to end a multi-tenant booking SaaS for sports venues (Next.js, TypeScript, PostgreSQL/Supabase), now in production.",
    "Designed the backend as a modular monolith (31 domain services) and the PostgreSQL schema: 49 tables, exclusion constraints against overlapping bookings and row-level security (RLS) per location; rewriting the policies cut a read from 8 s to 23 ms.",
    "Guaranteed money integrity with atomic SQL functions that lock the row; concurrency tests verify that two simultaneous payments never overpay.",
    "Integrated Mercado Pago (OAuth 2.0, HMAC-signed webhooks with idempotency) and WhatsApp Business (verification codes and 24-hour reminders); per-IP rate limits and input validation.",
    "Build with AI agents and tests as the gate: 86 integration suites (API per role and browser) on GitHub Actions, staging and production environments, 32 decisions documented as ADRs."],
    stack="Next.js, React, TypeScript, PostgreSQL, Supabase, Mercado Pago, WhatsApp Business API, Vercel, GitHub Actions")],
  proj=[dict(title="Sentinel · Cloud-native platform for theft alerts", when="UNAL diploma program, 2026 · team of 6", bullets=[
    "Helped design the whole architecture (views, nine quality scenarios, cross-cutting decisions) on Azure: API Management, Container Apps, Event Grid, Service Bus, Azure SQL and Redis GEO.",
    "Built the notification microservice: peek-lock queue with dead-lettering, Firebase error classification and an atomic SQL upsert; alerts in 1.65 s and 0 failures across 3,624 reports with 50 concurrent users."],
    stack="Azure, Terraform (infrastructure as code), GitHub Actions, Azure SQL, Redis, Firebase Cloud Messaging"),
   dict(title="RunPath · Microservices for running routes in Bogotá", when="UNAL Software Architecture, 2025-1 · team of 7", bullets=[
    "Software architect for one of four iterations: defined the component-and-connector, deployment, decomposition and layered views.",
    "Applied API Gateway, reverse proxy with WAF, load balancing and replication across 5 segmented networks; JMeter exposed a ~28 s authentication bottleneck, solved with load-balanced replicas. Deployed on Kubernetes (GCP), handling 600+ concurrent users."],
    stack="Python/FastAPI, Node.js/NestJS, Java/Spring Boot, Kotlin, RabbitMQ, Docker, Kubernetes, GCP, Nginx")],
  edu=[dict(title="B.S. in Systems and Computing Engineering · Universidad Nacional de Colombia", when="Expected 2027", sub="GPA 4.7/5.0"),
       dict(title="Diploma in Software Architecture and Quality · Universidad Nacional de Colombia", when="Aug – Dec 2026", sub="Cloud-Based Software Engineering · Large-Scale Software Architecture · Software Quality")],
  skills=[("Languages", "TypeScript, JavaScript, Python, SQL, C++; Java/Spring Boot (intermediate)"),
    ("Backend & APIs", "Node.js/NestJS, FastAPI, Flask, REST, OpenAPI, webhooks, OAuth 2.0"),
    ("Data", "PostgreSQL (schemas, migrations, RLS), Supabase, Redis, SQLite, Firestore"),
    ("Architecture", "Microservices, modular monolith, layered, API Gateway, broker, async messaging, ADRs"),
    ("Cloud & DevOps", "Azure, GCP, Vercel, Terraform, Docker, Kubernetes, GitHub Actions, Git Flow, Linux"),
    ("Testing", "pytest, integration and concurrency tests, Playwright, JMeter, Loki/Grafana"),
    ("Frontend", "React, Next.js, HTML, CSS"),
    ("AI-assisted development", "Claude Code and agents to implement, debug and review, with tests as the gate"),
    ("Languages spoken", "Spanish (native), English (C1)"),
    ("Algorithms", "Completed Blind 75 and 81 of a 150-problem list in Python, with complexity analysis")]),
 "es": dict(
  lang="es", title="Juan Huertas — Hoja de vida",
  role="Estudiante de Ingeniería de Sistemas y Computación · Ingeniero de Software",
  tagline="Cultivo software.",
  contact=["Bogotá, Colombia", "juan.cardenas.huertas@gmail.com", "linkedin.com/in/juan-huertaszz", "github.com/J-HuertaS"],
  labels=dict(profile="Perfil", exp="Experiencia", proj="Proyectos", edu="Educación", skills="Habilidades técnicas"),
  profile="Estudiante de Ingeniería de Sistemas y Computación (promedio 4.7/5.0) enfocado en backend y arquitectura de software. Cofundé y construyo Resva, un SaaS multi-tenant en producción; fui arquitecto de una plataforma de microservicios en Kubernetes y participé en el diseño de una plataforma nativa de la nube en Azure.",
  exp=[dict(title="Cofundador y CTO · TaoTek SAS · Resva (resva.digital)", when="Sep 2025 – hoy · Bogotá", bullets=[
    "Construí y lancé de punta a punta un SaaS multi-tenant de reservas para complejos deportivos (Next.js, TypeScript, PostgreSQL/Supabase), en producción.",
    "Diseñé el backend como monolito modular (31 servicios por dominio) y el esquema en PostgreSQL: 49 tablas, restricciones de exclusión contra reservas solapadas y seguridad a nivel de fila (RLS) por sede; reescribir las políticas bajó una lectura de 8 s a 23 ms.",
    "Garanticé la integridad del dinero con funciones SQL atómicas que bloquean la fila; pruebas de concurrencia verifican que dos pagos simultáneos nunca sobrepagan.",
    "Integré Mercado Pago (OAuth 2.0, webhooks con firma HMAC e idempotencia) y WhatsApp Business (códigos de verificación y recordatorios de 24 h); límites por IP y validación de entradas.",
    "Desarrollo con agentes de IA y las pruebas como puerta: 86 suites de integración (API por rol y navegador) en GitHub Actions, ambientes de staging y producción, 32 decisiones documentadas como ADR."],
    stack="Next.js, React, TypeScript, PostgreSQL, Supabase, Mercado Pago, WhatsApp Business API, Vercel, GitHub Actions")],
  proj=[dict(title="Sentinel · Plataforma nativa de la nube para alertas de robo", when="Diplomado UNAL, 2026 · equipo de 6", bullets=[
    "Participé en el diseño de toda la arquitectura (vistas, nueve escenarios de calidad, decisiones transversales) sobre Azure: API Management, Container Apps, Event Grid, Service Bus, Azure SQL y Redis GEO.",
    "Construí el microservicio de notificaciones: cola con peek-lock y cola de mensajes muertos, clasificación de errores de Firebase y upsert atómico en SQL; alertas en 1,65 s y 0 fallos en 3.624 reportes con 50 usuarios simultáneos."],
    stack="Azure, Terraform (infraestructura como código), GitHub Actions, Azure SQL, Redis, Firebase Cloud Messaging"),
   dict(title="RunPath · Microservicios para rutas de trote en Bogotá", when="Arquitectura de Software UNAL, 2025-1 · equipo de 7", bullets=[
    "Arquitecto de software en una de las cuatro iteraciones: definí las vistas de componentes y conectores, despliegue, descomposición y capas.",
    "Apliqué API Gateway, proxy inverso con WAF, balanceo de carga y replicación sobre 5 redes segmentadas; JMeter reveló un cuello de botella de ~28 s en autenticación, resuelto con réplicas balanceadas. Despliegue en Kubernetes (GCP) con más de 600 usuarios concurrentes."],
    stack="Python/FastAPI, Node.js/NestJS, Java/Spring Boot, Kotlin, RabbitMQ, Docker, Kubernetes, GCP, Nginx")],
  edu=[dict(title="Ingeniería de Sistemas y Computación · Universidad Nacional de Colombia", when="Graduación esperada: 2027", sub="Promedio 4.7/5.0"),
       dict(title="Diplomado en Arquitectura y Calidad de Software · Universidad Nacional de Colombia", when="Ago – Dic 2026", sub="Ingeniería de Software basada en la Nube · Arquitectura de Software a Gran Escala · Calidad de Software")],
  skills=[("Lenguajes", "TypeScript, JavaScript, Python, SQL, C++; Java/Spring Boot (intermedio)"),
    ("Backend y APIs", "Node.js/NestJS, FastAPI, Flask, REST, OpenAPI, webhooks, OAuth 2.0"),
    ("Datos", "PostgreSQL (esquemas, migraciones, RLS), Supabase, Redis, SQLite, Firestore"),
    ("Arquitectura", "Microservicios, monolito modular, capas, API Gateway, broker, mensajería asíncrona, ADR"),
    ("Nube y DevOps", "Azure, GCP, Vercel, Terraform, Docker, Kubernetes, GitHub Actions, Git Flow, Linux"),
    ("Pruebas", "pytest, pruebas de integración y de concurrencia, Playwright, JMeter, Loki/Grafana"),
    ("Frontend", "React, Next.js, HTML, CSS"),
    ("Desarrollo con IA", "Claude Code y agentes para implementar, depurar y revisar, con las pruebas como puerta"),
    ("Idiomas", "Español (nativo), inglés (C1)"),
    ("Algoritmos", "Blind 75 completo y 81 de una lista de 150 problemas en Python, con análisis de complejidad")]),
}

LINKS = {"juan.cardenas.huertas@gmail.com": "mailto:juan.cardenas.huertas@gmail.com",
         "linkedin.com/in/juan-huertaszz": "https://www.linkedin.com/in/juan-huertaszz",
         "github.com/J-HuertaS": "https://github.com/J-HuertaS"}

CSS = f"""
@font-face{{font-family:IS;src:url(data:font/woff2;base64,{b64('instrument-serif.woff2')})}}
@font-face{{font-family:IS;font-style:italic;src:url(data:font/woff2;base64,{b64('instrument-serif-italic.woff2')})}}
@font-face{{font-family:JB;font-weight:400;src:url(data:font/woff2;base64,{b64('jetbrains-mono-400.woff2')})}}
@font-face{{font-family:JB;font-weight:700;src:url(data:font/woff2;base64,{b64('jetbrains-mono-700.woff2')})}}
@page{{size:Letter;margin:0}}
*{{box-sizing:border-box}}
html,body{{margin:0}}
body{{width:8.5in;height:11in;padding:.45in .55in .5in;font-family:JB,monospace;font-size:7.3pt;line-height:1.38;color:#141414;
  background:#fff radial-gradient(#e2ded4 .6px,transparent .7px) 0 0/12pt 12pt;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
a{{color:inherit;text-decoration:none}}
header{{display:grid;grid-template-columns:1fr auto;gap:0 18pt;align-items:end;padding-bottom:8pt;border-bottom:1pt solid #141414}}
.name{{display:flex;align-items:flex-end;gap:9pt}}
h1{{font-family:IS,serif;font-weight:400;font-size:36pt;line-height:.9;margin:0}}
.seal{{width:25pt;height:25pt;transform:rotate(-3deg);margin-bottom:3pt}}
.legal{{font-size:7pt;color:#555;letter-spacing:.3pt;margin-top:5pt}}
.role{{font-size:7.6pt;margin-top:2pt}}
.tag{{font-family:IS,serif;font-style:italic;font-size:13pt;margin-top:3pt}}
.contact{{text-align:right;font-size:7.3pt;line-height:1.6}}
section{{margin-top:7.5pt}}
h2{{display:flex;align-items:center;gap:8pt;margin:0 0 4pt;font-family:JB,monospace;font-weight:400;font-size:6.6pt;letter-spacing:2.4pt;text-transform:uppercase;color:#555}}
h2::after{{content:"";flex:1;border-top:.6pt solid #d6d2c8}}
.entry{{margin-top:5pt}}
.head{{display:flex;justify-content:space-between;gap:12pt;align-items:baseline}}
h3{{margin:0;font-family:IS,serif;font-weight:400;font-size:12pt;line-height:1.1}}
.when{{white-space:nowrap;color:#555;font-size:7pt}}
ul{{margin:2.5pt 0 0;padding:0;list-style:none}}
li{{position:relative;padding-left:11pt;margin-top:1.6pt}}
li::before{{content:"";position:absolute;left:1pt;top:.62em;width:5pt;border-top:.7pt solid #141414}}
.stack{{margin-top:2.5pt;color:#555;font-size:7pt}}
.stack::before{{content:"→ ";color:#b8312f}}
.sub{{color:#555;font-size:7pt;margin-top:1pt}}
.skills{{display:grid;grid-template-columns:112pt 1fr;gap:1.2pt 10pt}}
.skills dt{{color:#555}}
.skills dd{{margin:0}}
.profile{{margin:0}}
footer{{position:absolute;left:.55in;right:.55in;bottom:.22in;display:flex;justify-content:space-between;font-size:6.4pt;color:#777;letter-spacing:.6pt}}
.accent{{color:#b8312f}}
"""

def page(c):
    L = c["labels"]
    contact = "<br>".join(f'<a href="{LINKS[x]}">{e(x)}</a>' if x in LINKS else e(x) for x in c["contact"])
    def entries(items):
        out = []
        for it in items:
            b = "".join(f"<li>{e(x)}</li>" for x in it["bullets"])
            out.append(f'<div class="entry"><div class="head"><h3>{e(it["title"])}</h3><span class="when">{e(it["when"])}</span></div>'
                       f'<ul>{b}</ul><div class="stack">{e(it["stack"])}</div></div>')
        return "".join(out)
    edu = "".join(f'<div class="entry"><div class="head"><h3>{e(x["title"])}</h3><span class="when">{e(x["when"])}</span></div><div class="sub">{e(x["sub"])}</div></div>' for x in c["edu"])
    skills = "".join(f"<dt>{e(k)}</dt><dd>{e(v)}</dd>" for k, v in c["skills"])
    return f"""<!doctype html><html lang="{c['lang']}"><head><meta charset="utf-8"><title>{e(c['title'])}</title><style>{CSS}</style></head><body style="position:relative">
<header><div><div class="name"><h1>Juan Huertas</h1><img class="seal" alt="畑" src="data:image/svg+xml;base64,{SEAL}"></div>
<div class="legal">Juan Esteban Cárdenas Huertas</div><div class="role">{e(c['role'])}</div><div class="tag">{e(c['tagline'])}</div></div>
<div class="contact">{contact}</div></header>
<section><h2>{L['profile']}</h2><p class="profile">{e(c['profile'])}</p></section>
<section><h2>{L['exp']}</h2>{entries(c['exp'])}</section>
<section><h2>{L['proj']}</h2>{entries(c['proj'])}</section>
<section><h2>{L['edu']}</h2>{edu}</section>
<section><h2>{e(L['skills'])}</h2><dl class="skills">{skills}</dl></section>
<footer><span>JUAN HUERTAS · <span class="accent">huertas.</span>/dev</span><span>jucardenash.vercel.app</span></footer>
</body></html>"""

if __name__ == "__main__":
    out = sys.argv[1]
    for k, c in CV.items():
        open(os.path.join(out, f"cv-{k}.html"), "w").write(page(c))
    print("html written")
