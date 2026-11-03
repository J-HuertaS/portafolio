// Diagramas del caso: el dibujo completo para pantallas anchas y la versión apilada para el celular.
/* eslint-disable @next/next/no-img-element -- pantallazo con tamaño fijo dentro del diagrama */
import { ResponsiveFigure, DiagramFit } from '@/components/case/figure'

export const figure1 = (
  <ResponsiveFigure
    desktop={
      <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ border: '1px solid #1F1F1F', borderRadius: '20px', background: '#0D0D0D', overflow: 'hidden' }}>
          <DiagramFit width={1200} height={680}>
            <div style={{ position: 'relative', width: '1200px', height: '680px', fontSize: '12.5px', lineHeight: '16px' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '192px',
                  top: '40px',
                  width: '744px',
                  height: '140px',
                  boxSizing: 'border-box',
                  border: '1px dashed #3A3A3A',
                  borderRadius: '14px',
                  background: '#121212',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  left: '192px',
                  top: '230px',
                  width: '744px',
                  height: '420px',
                  boxSizing: 'border-box',
                  border: '1px dashed #262626',
                  borderRadius: '14px',
                  background: '#0F0F0F',
                }}
              ></div>
              <div style={{ position: 'absolute', left: '204px', top: '46px', fontSize: '12px', color: '#A1A1A1' }}>Vercel · Next.js</div>
              <div style={{ position: 'absolute', left: '204px', top: '236px', fontSize: '12px', color: '#8F8F8F' }}>
                Supabase · Postgres, Auth, Realtime, pg_cron
              </div>
              <div style={{ position: 'absolute', left: '744px', top: '46px', fontSize: '11.5px', color: '#D9A441' }}>
                webhook · signature + idempotency
              </div>
              <div style={{ position: 'absolute', left: '404px', top: '594px', fontSize: '11.5px', color: '#D9A441' }}>slot update</div>
              <svg
                width="48"
                height="8"
                viewBox="0 0 48 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '168px',
                  top: '116px',
                  width: '48px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-61" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 44 4" markerEnd="url(#dc-arrow-head-filled-61)" />
              </svg>
              <svg
                width="40"
                height="8"
                viewBox="0 0 40 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '392px',
                  top: '116px',
                  width: '40px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-62" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 36 4" markerEnd="url(#dc-arrow-head-filled-62)" />
              </svg>
              <svg
                width="40"
                height="8"
                viewBox="0 0 40 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '640px',
                  top: '116px',
                  width: '40px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-63" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 36 4" markerEnd="url(#dc-arrow-head-filled-63)" />
              </svg>
              <svg
                width="60"
                height="8"
                viewBox="0 0 60 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '924px',
                  top: '116px',
                  width: '60px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-64" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 56 4" markerEnd="url(#dc-arrow-head-filled-64)" />
              </svg>
              <svg
                width="216"
                height="132"
                viewBox="0 0 216 132"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '92px',
                  top: '148px',
                  width: '216px',
                  height: '132px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-65" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 132 L 4 57 L 212 57 L 212 4" markerEnd="url(#dc-arrow-head-filled-65)" />
              </svg>
              <svg
                width="48"
                height="8"
                viewBox="0 0 48 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '168px',
                  top: '304px',
                  width: '48px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#5A5A5A',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 0 4 L 48 4" />
              </svg>
              <svg
                width="132"
                height="120"
                viewBox="0 0 132 120"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '300px',
                  top: '336px',
                  width: '132px',
                  height: '120px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#5A5A5A',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 116 L 132 116" />
              </svg>
              <svg
                width="8"
                height="132"
                viewBox="0 0 8 132"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '798px',
                  top: '148px',
                  width: '8px',
                  height: '132px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-66" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 128" markerEnd="url(#dc-arrow-head-filled-66)" />
              </svg>
              <svg
                width="148"
                height="116"
                viewBox="0 0 148 116"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '532px',
                  top: '304px',
                  width: '148px',
                  height: '116px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#5A5A5A',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 148 4 L 4 4 L 4 116" />
              </svg>
              <svg
                width="152"
                height="108"
                viewBox="0 0 152 108"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '388px',
                  top: '484px',
                  width: '152px',
                  height: '108px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#D9A441',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 5',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-67" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 148 0 L 148 104 L 8 104" markerEnd="url(#dc-arrow-head-filled-67)" />
              </svg>
              <svg
                width="124"
                height="256"
                viewBox="0 0 124 256"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '92px',
                  top: '336px',
                  width: '124px',
                  height: '256px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#D9A441',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 5',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-68" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 124 252 L 4 252 L 4 4" markerEnd="url(#dc-arrow-head-filled-68)" />
              </svg>
              <svg
                width="8"
                height="224"
                viewBox="0 0 8 224"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '798px',
                  top: '336px',
                  width: '8px',
                  height: '224px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-69" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 224 L 4 4" markerEnd="url(#dc-arrow-head-filled-69)" />
              </svg>
              <svg
                width="552"
                height="32"
                viewBox="0 0 552 32"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '532px',
                  top: '60px',
                  width: '552px',
                  height: '32px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#D9A441',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 5',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-70" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 548 32 L 548 4 L 4 4 L 4 28" markerEnd="url(#dc-arrow-head-filled-70)" />
              </svg>
              <svg
                width="34"
                height="298"
                viewBox="0 0 34 298"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '924px',
                  top: '134px',
                  width: '34px',
                  height: '298px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <path d="M 0 4 L 30 4 L 30 294" />
              </svg>
              <svg
                width="30"
                height="8"
                viewBox="0 0 30 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '954px',
                  top: '224px',
                  width: '30px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-71" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 26 4" markerEnd="url(#dc-arrow-head-filled-71)" />
              </svg>
              <svg
                width="30"
                height="8"
                viewBox="0 0 30 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '954px',
                  top: '324px',
                  width: '30px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-72" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 26 4" markerEnd="url(#dc-arrow-head-filled-72)" />
              </svg>
              <svg
                width="30"
                height="8"
                viewBox="0 0 30 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '954px',
                  top: '424px',
                  width: '30px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-73" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 26 4" markerEnd="url(#dc-arrow-head-filled-73)" />
              </svg>
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '92px',
                  width: '144px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Player</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>public page</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '280px',
                  width: '144px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Business staff</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>dashboard per location</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '216px',
                  top: '92px',
                  width: '176px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Proxy</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>business by URL · CSP</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '432px',
                  top: '92px',
                  width: '208px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>API routes</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>authenticate and validate</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '680px',
                  top: '92px',
                  width: '244px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Domain services</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>all business logic</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '216px',
                  top: '280px',
                  width: '176px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#EDEDED',
                  color: '#0A0A0A',
                  border: '1px solid #FF5B2E',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>RLS per location</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>read-only</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '680px',
                  top: '280px',
                  width: '244px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#EDEDED',
                  color: '#0A0A0A',
                  border: '1px solid #FF5B2E',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Money functions</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>atomic SQL, locked row</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '432px',
                  top: '420px',
                  width: '208px',
                  height: '64px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#111111',
                  border: '1px solid #2A2A2A',
                  borderRadius: '64px / 14px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Postgres</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>49 tables · triggers</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '216px',
                  top: '560px',
                  width: '176px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Realtime</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>live slots</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '680px',
                  top: '560px',
                  width: '244px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>pg_cron</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>expires pending bookings every minute</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '984px',
                  top: '92px',
                  width: '192px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Mercado Pago</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>{"each business's account"}</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '984px',
                  top: '200px',
                  width: '192px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>WhatsApp Business</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>codes and notices</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '984px',
                  top: '300px',
                  width: '192px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Resend</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>email</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '984px',
                  top: '400px',
                  width: '192px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Sentry</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>errors</span>
                </span>
              </div>
            </div>
          </DiagramFit>
        </div>
        <figcaption
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '10px 24px',
            fontSize: '14px',
            color: '#8F8F8F',
          }}
        >
          <span>
            Fig. 1 — Components and connectors. Highlighted: the two rules that hold the system up. Money is only written inside the
            database, and everyone reads only their own location.
          </span>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', fontSize: '13px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="28"
                height="8"
                viewBox="0 0 28 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: '#6B6B6B', strokeWidth: '2' }}
              >
                <path d="M 0 4 L 28 4" />
              </svg>
              HTTP / call
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="28"
                height="8"
                viewBox="0 0 28 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: '#D9A441', strokeWidth: '2', strokeDasharray: '6 5' }}
              >
                <path d="M 0 4 L 28 4" />
              </svg>
              event
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="28"
                height="8"
                viewBox="0 0 28 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: '#5A5A5A', strokeWidth: '1.5', strokeDasharray: '2 4' }}
              >
                <path d="M 0 4 L 28 4" />
              </svg>
              data access
            </span>
          </span>
        </figcaption>
      </figure>
    }
    mobile={
      <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div
          style={{
            border: '1px solid #1F1F1F',
            borderRadius: '16px',
            background: '#0D0D0D',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '12.5px',
            lineHeight: '16px',
          }}
        >
          <div
            style={{
              border: '1px dashed #262626',
              borderRadius: '14px',
              background: '#0F0F0F',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '12px', color: '#8F8F8F' }}>Who uses it</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Player</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>public page</span>
                </span>
              </div>
              <div
                style={{
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Business staff</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>dashboard per location</span>
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minHeight: '34px', paddingLeft: '24px' }}>
            <svg
              width="8"
              height="30"
              viewBox="0 0 8 30"
              aria-hidden="true"
              style={{ flex: '0 0 8px', overflow: 'visible', fill: 'none', stroke: '#6B6B6B', strokeWidth: '2', strokeLinecap: 'round' }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-301" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-301)" />
            </svg>
            <span style={{ fontSize: '11.5px', color: '#8F8F8F' }}>HTTP / call</span>
          </div>
          <div
            style={{
              border: '1px dashed #3A3A3A',
              borderRadius: '14px',
              background: '#121212',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '12px', color: '#A1A1A1' }}>Vercel · Next.js</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Proxy</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>business by URL · CSP</span>
                </span>
              </div>
              <div
                style={{
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>API routes</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>authenticate and validate</span>
                </span>
              </div>
              <div
                style={{
                  gridColumn: '1 / -1',
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Domain services</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>all business logic</span>
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minHeight: '34px', paddingLeft: '24px' }}>
            <svg
              width="8"
              height="30"
              viewBox="0 0 8 30"
              aria-hidden="true"
              style={{ flex: '0 0 8px', overflow: 'visible', fill: 'none', stroke: '#6B6B6B', strokeWidth: '2', strokeLinecap: 'round' }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-302" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-302)" />
            </svg>
            <span style={{ fontSize: '11.5px', color: '#8F8F8F' }}>RPC and reads</span>
          </div>
          <div
            style={{
              border: '1px dashed #262626',
              borderRadius: '14px',
              background: '#0F0F0F',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '12px', color: '#8F8F8F' }}>Supabase · Postgres, Auth, Realtime, pg_cron</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  background: '#EDEDED',
                  color: '#0A0A0A',
                  border: '1px solid #FF5B2E',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Money functions</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>atomic SQL, locked row</span>
                </span>
              </div>
              <div
                style={{
                  background: '#EDEDED',
                  color: '#0A0A0A',
                  border: '1px solid #FF5B2E',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>RLS per location</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>read-only</span>
                </span>
              </div>
              <div
                style={{
                  gridColumn: '1 / -1',
                  background: '#111111',
                  border: '1px solid #2A2A2A',
                  borderRadius: '40px / 12px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Postgres</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>49 tables · triggers</span>
                </span>
              </div>
              <div
                style={{
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>pg_cron</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>expires pending bookings every minute</span>
                </span>
              </div>
              <div
                style={{
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Realtime</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>live slots</span>
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minHeight: '34px', paddingLeft: '24px' }}>
            <svg
              width="8"
              height="30"
              viewBox="0 0 8 30"
              aria-hidden="true"
              style={{
                flex: '0 0 8px',
                overflow: 'visible',
                fill: 'none',
                stroke: '#D9A441',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeDasharray: '6 5',
              }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-303" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-303)" />
            </svg>
            <span style={{ fontSize: '11.5px', color: '#D9A441' }}>slot update</span>
          </div>
          <div
            style={{
              border: '1px dashed #262626',
              borderRadius: '14px',
              background: '#0F0F0F',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  gridColumn: '1 / -1',
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Business staff</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>dashboard per location</span>
                </span>
              </div>
            </div>
          </div>
          <div style={{ height: '14px' }}></div>
          <div
            style={{
              border: '1px dashed #262626',
              borderRadius: '14px',
              background: '#0F0F0F',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '12px', color: '#8F8F8F' }}>External services · called by the services</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Mercado Pago</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>{"each business's account"}</span>
                </span>
              </div>
              <div
                style={{
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>WhatsApp Business</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>codes and notices</span>
                </span>
              </div>
              <div
                style={{
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Resend</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>email</span>
                </span>
              </div>
              <div
                style={{
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Sentry</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>errors</span>
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minHeight: '34px', paddingLeft: '24px' }}>
            <svg
              width="8"
              height="30"
              viewBox="0 0 8 30"
              aria-hidden="true"
              style={{
                flex: '0 0 8px',
                overflow: 'visible',
                fill: 'none',
                stroke: '#D9A441',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeDasharray: '6 5',
              }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-304" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-304)" />
            </svg>
            <span style={{ fontSize: '11.5px', color: '#D9A441' }}>webhook · signature + idempotency</span>
          </div>
          <div
            style={{
              border: '1px dashed #262626',
              borderRadius: '14px',
              background: '#0F0F0F',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  gridColumn: '1 / -1',
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>API routes</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>authenticate and validate</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <figcaption style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#8F8F8F' }}>
          <span>
            Fig. 1 — Components by layer. Highlighted: the two rules that hold the system up. Money is only written inside the database, and
            everyone reads only their own location.
          </span>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px', fontSize: '13px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="24"
                height="8"
                viewBox="0 0 24 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: '#6B6B6B', strokeWidth: '2' }}
              >
                <path d="M 0 4 L 24 4" />
              </svg>
              HTTP / call
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="24"
                height="8"
                viewBox="0 0 24 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: '#D9A441', strokeWidth: '2', strokeDasharray: '6 5' }}
              >
                <path d="M 0 4 L 24 4" />
              </svg>
              event
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="24"
                height="8"
                viewBox="0 0 24 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: '#5A5A5A', strokeWidth: '1.5', strokeDasharray: '2 4' }}
              >
                <path d="M 0 4 L 24 4" />
              </svg>
              data access
            </span>
          </span>
          <span style={{ fontSize: '13px', color: '#6F6F6F' }}>Compact version: larger screens show every connector.</span>
        </figcaption>
      </figure>
    }
  />
)

export const figure2 = (
  <ResponsiveFigure
    desktop={
      <figure style={{ margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <img
          src="/images/resva-panel.png"
          alt="Resva dashboard home screen"
          style={{ display: 'block', width: '100%', height: 'auto', border: '1px solid #1F1F1F', borderRadius: '14px' }}
        />
        <figcaption style={{ fontSize: '14px', color: '#8F8F8F' }}>{"Fig. 2 — A business's dashboard home."}</figcaption>
      </figure>
    }
    mobile={null}
  />
)

export const figure3 = (
  <ResponsiveFigure
    desktop={
      <figure style={{ margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ border: '1px solid #1F1F1F', borderRadius: '16px', background: '#0D0D0D', overflow: 'hidden' }}>
          <DiagramFit width={680} height={236}>
            <div style={{ position: 'relative', width: '680px', height: '236px', fontSize: '12.5px', lineHeight: '16px' }}>
              <svg
                width="60"
                height="8"
                viewBox="0 0 60 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '174px',
                  top: '76px',
                  width: '60px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-81" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 56 4" markerEnd="url(#dc-arrow-head-filled-81)" />
              </svg>
              <svg
                width="80"
                height="8"
                viewBox="0 0 80 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '434px',
                  top: '76px',
                  width: '80px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#D9A441',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 5',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-82" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 76 4" markerEnd="url(#dc-arrow-head-filled-82)" />
              </svg>
              <svg
                width="8"
                height="56"
                viewBox="0 0 8 56"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '330px',
                  top: '108px',
                  width: '8px',
                  height: '56px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-83" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 52" markerEnd="url(#dc-arrow-head-filled-83)" />
              </svg>
              <div style={{ position: 'absolute', left: '176px', top: '54px', fontSize: '11.5px', color: '#8F8F8F' }}>booking</div>
              <div style={{ position: 'absolute', left: '440px', top: '54px', fontSize: '11.5px', color: '#D9A441' }}>payment approved</div>
              <div style={{ position: 'absolute', left: '346px', top: '126px', fontSize: '11.5px', color: '#8F8F8F' }}>
                expires unpaid · pg_cron
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '52px',
                  width: '150px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Open slot</b>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '234px',
                  top: '52px',
                  width: '200px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Awaiting payment</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>holds the slot 15 min</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '514px',
                  top: '52px',
                  width: '142px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#EDEDED',
                  color: '#0A0A0A',
                  border: '1px solid #FF5B2E',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Confirmed</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>deposit recorded</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '234px',
                  top: '164px',
                  width: '200px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Cancelled</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>frees the slot, never deleted</span>
                </span>
              </div>
            </div>
          </DiagramFit>
        </div>
        <figcaption style={{ fontSize: '14px', color: '#8F8F8F' }}>
          Fig. 3 — Lifecycle of an online booking. Only the webhook confirms; only time cancels a pending one.
        </figcaption>
      </figure>
    }
    mobile={
      <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div
          style={{
            border: '1px solid #1F1F1F',
            borderRadius: '16px',
            background: '#0D0D0D',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '12.5px',
            lineHeight: '16px',
          }}
        >
          <div
            style={{
              border: '1px dashed #262626',
              borderRadius: '14px',
              background: '#0F0F0F',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  gridColumn: '1 / -1',
                  background: '#0A0A0A',
                  border: '1px solid #3A3A3A',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Open slot</b>
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minHeight: '34px', paddingLeft: '24px' }}>
            <svg
              width="8"
              height="30"
              viewBox="0 0 8 30"
              aria-hidden="true"
              style={{ flex: '0 0 8px', overflow: 'visible', fill: 'none', stroke: '#6B6B6B', strokeWidth: '2', strokeLinecap: 'round' }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-305" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-305)" />
            </svg>
            <span style={{ fontSize: '11.5px', color: '#8F8F8F' }}>booking</span>
          </div>
          <div
            style={{
              border: '1px dashed #262626',
              borderRadius: '14px',
              background: '#0F0F0F',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  gridColumn: '1 / -1',
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Awaiting payment</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>holds the slot 15 min</span>
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minHeight: '34px', paddingLeft: '24px' }}>
            <svg
              width="8"
              height="30"
              viewBox="0 0 8 30"
              aria-hidden="true"
              style={{
                flex: '0 0 8px',
                overflow: 'visible',
                fill: 'none',
                stroke: '#D9A441',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeDasharray: '6 5',
              }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-306" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-306)" />
            </svg>
            <span style={{ fontSize: '11.5px', color: '#D9A441' }}>payment approved → Confirmed · expires unpaid → Cancelled</span>
          </div>
          <div
            style={{
              border: '1px dashed #262626',
              borderRadius: '14px',
              background: '#0F0F0F',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  background: '#EDEDED',
                  color: '#0A0A0A',
                  border: '1px solid #FF5B2E',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Confirmed</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>deposit recorded</span>
                </span>
              </div>
              <div
                style={{
                  background: '#151515',
                  border: '1px solid #2E2E2E',
                  borderRadius: '10px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Cancelled</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>frees the slot, never deleted</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <figcaption style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#8F8F8F' }}>
          <span>Fig. 2 — Lifecycle of an online booking. Only the webhook confirms; only time cancels a pending one.</span>
        </figcaption>
      </figure>
    }
  />
)
