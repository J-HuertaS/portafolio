// Diagramas del caso: el dibujo completo para pantallas anchas y la versión apilada para el celular.
import { ResponsiveFigure, DiagramFit } from '@/components/case/figure'

export const figure1 = (
  <ResponsiveFigure
    desktop={
      <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ border: '1px solid var(--c-1f1f1f)', borderRadius: '0', background: 'var(--c-0d0d0d)', overflow: 'hidden' }}>
          <DiagramFit width={1200} height={784}>
            <div style={{ position: 'relative', width: '1200px', height: '784px', fontSize: '12.5px', lineHeight: '16px' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '152px',
                  top: '40px',
                  width: '888px',
                  height: '110px',
                  boxSizing: 'border-box',
                  border: '1px dashed var(--c-262626)',
                  borderRadius: '0',
                  background: 'var(--c-0f0f0f)',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  left: '152px',
                  top: '196px',
                  width: '888px',
                  height: '104px',
                  boxSizing: 'border-box',
                  border: '1px dashed var(--c-262626)',
                  borderRadius: '0',
                  background: 'var(--c-0f0f0f)',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  left: '152px',
                  top: '376px',
                  width: '888px',
                  height: '104px',
                  boxSizing: 'border-box',
                  border: '1px dashed var(--c-262626)',
                  borderRadius: '0',
                  background: 'var(--c-0f0f0f)',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  left: '152px',
                  top: '520px',
                  width: '888px',
                  height: '224px',
                  boxSizing: 'border-box',
                  border: '1px dashed var(--c-262626)',
                  borderRadius: '0',
                  background: 'var(--c-0f0f0f)',
                }}
              ></div>
              <div style={{ position: 'absolute', left: '164px', top: '46px', fontSize: '12px', color: 'var(--c-8f8f8f)' }}>
                Presentación
              </div>
              <div style={{ position: 'absolute', left: '164px', top: '202px', fontSize: '12px', color: 'var(--c-8f8f8f)' }}>
                Comunicación
              </div>
              <div style={{ position: 'absolute', left: '164px', top: '380px', fontSize: '12px', color: 'var(--c-8f8f8f)' }}>Lógica</div>
              <div style={{ position: 'absolute', left: '164px', top: '526px', fontSize: '12px', color: 'var(--c-8f8f8f)' }}>Datos</div>
              <svg
                width="23"
                height="8"
                viewBox="0 0 23 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '144px',
                  top: '94px',
                  width: '23px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-11" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 19 4" markerEnd="url(#dc-arrow-head-filled-11)" />
              </svg>
              <svg
                width="8"
                height="132"
                viewBox="0 0 8 132"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '80px',
                  top: '126px',
                  width: '8px',
                  height: '132px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <path d="M 4 0 L 4 132" />
              </svg>
              <svg
                width="83"
                height="8"
                viewBox="0 0 83 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '84px',
                  top: '254px',
                  width: '83px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-12" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 79 4" markerEnd="url(#dc-arrow-head-filled-12)" />
              </svg>
              <svg
                width="165"
                height="8"
                viewBox="0 0 165 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '296px',
                  top: '94px',
                  width: '165px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-13" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 161 4" markerEnd="url(#dc-arrow-head-filled-13)" />
              </svg>
              <svg
                width="8"
                height="99"
                viewBox="0 0 8 99"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '522px',
                  top: '126px',
                  width: '8px',
                  height: '99px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-14" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 95" markerEnd="url(#dc-arrow-head-filled-14)" />
              </svg>
              <svg
                width="147"
                height="8"
                viewBox="0 0 147 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '608px',
                  top: '254px',
                  width: '147px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-15" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 143 4" markerEnd="url(#dc-arrow-head-filled-15)" />
              </svg>
              <svg
                width="8"
                height="109"
                viewBox="0 0 8 109"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '375px',
                  top: '290px',
                  width: '8px',
                  height: '109px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-16" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 105" markerEnd="url(#dc-arrow-head-filled-16)" />
              </svg>
              <svg
                width="8"
                height="109"
                viewBox="0 0 8 109"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '501px',
                  top: '290px',
                  width: '8px',
                  height: '109px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-17" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 105" markerEnd="url(#dc-arrow-head-filled-17)" />
              </svg>
              <svg
                width="8"
                height="109"
                viewBox="0 0 8 109"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '816px',
                  top: '290px',
                  width: '8px',
                  height: '109px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-18" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 105" markerEnd="url(#dc-arrow-head-filled-18)" />
              </svg>
              <svg
                width="378"
                height="8"
                viewBox="0 0 378 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '547px',
                  top: '336px',
                  width: '378px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <path d="M 0 4 L 378 4" />
              </svg>
              <svg
                width="8"
                height="59"
                viewBox="0 0 8 59"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '543px',
                  top: '340px',
                  width: '8px',
                  height: '59px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-19" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 55" markerEnd="url(#dc-arrow-head-filled-19)" />
              </svg>
              <svg
                width="8"
                height="59"
                viewBox="0 0 8 59"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '669px',
                  top: '340px',
                  width: '8px',
                  height: '59px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-20" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 55" markerEnd="url(#dc-arrow-head-filled-20)" />
              </svg>
              <svg
                width="8"
                height="59"
                viewBox="0 0 8 59"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '921px',
                  top: '340px',
                  width: '8px',
                  height: '59px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-21" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 55" markerEnd="url(#dc-arrow-head-filled-21)" />
              </svg>
              <svg
                width="8"
                height="109"
                viewBox="0 0 8 109"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '963px',
                  top: '290px',
                  width: '8px',
                  height: '109px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-d9a441)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 5',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-22" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 105" markerEnd="url(#dc-arrow-head-filled-22)" />
              </svg>
              <svg
                width="8"
                height="90"
                viewBox="0 0 8 90"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '690px',
                  top: '310px',
                  width: '8px',
                  height: '90px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-d9a441)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 5',
                }}
              >
                <path d="M 4 90 L 4 0" />
              </svg>
              <svg
                width="8"
                height="90"
                viewBox="0 0 8 90"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '837px',
                  top: '310px',
                  width: '8px',
                  height: '90px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-d9a441)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 5',
                }}
              >
                <path d="M 4 90 L 4 0" />
              </svg>
              <svg
                width="252"
                height="8"
                viewBox="0 0 252 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '694px',
                  top: '306px',
                  width: '252px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-d9a441)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 5',
                }}
              >
                <path d="M 0 4 L 252 4" />
              </svg>
              <svg
                width="8"
                height="19"
                viewBox="0 0 8 19"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '942px',
                  top: '291px',
                  width: '8px',
                  height: '19px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-d9a441)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-23" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 19 L 4 4" markerEnd="url(#dc-arrow-head-filled-23)" />
              </svg>
              <svg
                width="32"
                height="8"
                viewBox="0 0 32 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '1031px',
                  top: '428px',
                  width: '32px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-24" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 28 4" markerEnd="url(#dc-arrow-head-filled-24)" />
              </svg>
              <svg
                width="8"
                height="128"
                viewBox="0 0 8 128"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '1043px',
                  top: '368px',
                  width: '8px',
                  height: '128px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <path d="M 4 0 L 4 128" />
              </svg>
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '1047px',
                  top: '364px',
                  width: '16px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-25" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 12 4" markerEnd="url(#dc-arrow-head-filled-25)" />
              </svg>
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '1047px',
                  top: '492px',
                  width: '16px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-26" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 12 4" markerEnd="url(#dc-arrow-head-filled-26)" />
              </svg>
              <svg
                width="23"
                height="8"
                viewBox="0 0 23 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '145px',
                  top: '428px',
                  width: '23px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-27" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 23 4 L 4 4" markerEnd="url(#dc-arrow-head-filled-27)" />
              </svg>
              <svg
                width="8"
                height="377"
                viewBox="0 0 8 377"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '448px',
                  top: '290px',
                  width: '8px',
                  height: '377px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 377" />
              </svg>
              <svg
                width="8"
                height="108"
                viewBox="0 0 8 108"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '228px',
                  top: '464px',
                  width: '8px',
                  height: '108px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 108" />
              </svg>
              <svg
                width="8"
                height="108"
                viewBox="0 0 8 108"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '396px',
                  top: '464px',
                  width: '8px',
                  height: '108px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 108" />
              </svg>
              <svg
                width="8"
                height="81"
                viewBox="0 0 8 81"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '354px',
                  top: '464px',
                  width: '8px',
                  height: '81px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 81" />
              </svg>
              <svg
                width="105"
                height="8"
                viewBox="0 0 105 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '253px',
                  top: '541px',
                  width: '105px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 0 4 L 105 4" />
              </svg>
              <svg
                width="8"
                height="27"
                viewBox="0 0 8 27"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '249px',
                  top: '545px',
                  width: '8px',
                  height: '27px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 27" />
              </svg>
              <svg
                width="9"
                height="8"
                viewBox="0 0 9 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '296px',
                  top: '444px',
                  width: '9px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 0 4 L 9 4" />
              </svg>
              <svg
                width="8"
                height="152"
                viewBox="0 0 8 152"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '301px',
                  top: '448px',
                  width: '8px',
                  height: '152px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 152" />
              </svg>
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '305px',
                  top: '596px',
                  width: '10px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 0 4 L 10 4" />
              </svg>
              <svg
                width="8"
                height="108"
                viewBox="0 0 8 108"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '522px',
                  top: '464px',
                  width: '8px',
                  height: '108px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 108" />
              </svg>
              <svg
                width="8"
                height="108"
                viewBox="0 0 8 108"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '669px',
                  top: '464px',
                  width: '8px',
                  height: '108px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 108" />
              </svg>
              <svg
                width="8"
                height="108"
                viewBox="0 0 8 108"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '816px',
                  top: '464px',
                  width: '8px',
                  height: '108px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 108" />
              </svg>
              <svg
                width="8"
                height="108"
                viewBox="0 0 8 108"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '963px',
                  top: '464px',
                  width: '8px',
                  height: '108px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-5a5a5a)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 108" />
              </svg>
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '70px',
                  width: '120px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-3a3a3a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Firebase Auth</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>identidad</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  position: 'absolute',
                  left: '24px',
                  top: '404px',
                  width: '120px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-0a0a0a)',
                  border: '1px dashed var(--c-3a3a3a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>API de escaneo</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>saneamiento</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '668px',
                  width: '120px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-3a3a3a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>App Insights</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>observa todo</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '168px',
                  top: '70px',
                  width: '128px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>App móvil</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Android</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '462px',
                  top: '70px',
                  width: '128px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Proxy inverso</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>APIM</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '168px',
                  top: '226px',
                  width: '440px',
                  height: '64px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>API Gateway</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure API Management · valida JWT · publica eventos</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '756px',
                  top: '226px',
                  width: '128px',
                  height: '64px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Event Grid</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>enrutador de eventos</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '903px',
                  top: '226px',
                  width: '128px',
                  height: '64px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Service Bus</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>cola de notificaciones</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  position: 'absolute',
                  left: '168px',
                  top: '400px',
                  width: '128px',
                  height: '64px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-151515)',
                  border: '1px dashed var(--c-2e2e2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Saneamiento</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure Function</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  position: 'absolute',
                  left: '315px',
                  top: '400px',
                  width: '128px',
                  height: '64px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-151515)',
                  border: '1px dashed var(--c-2e2e2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Evidencias</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>microservicio</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '462px',
                  top: '400px',
                  width: '128px',
                  height: '64px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Robos</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>microservicio</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '609px',
                  top: '400px',
                  width: '128px',
                  height: '64px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Datos personales</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>microservicio</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '756px',
                  top: '400px',
                  width: '128px',
                  height: '64px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Geolocalización</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>microservicio</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '903px',
                  top: '400px',
                  width: '128px',
                  height: '64px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-ededed)',
                  color: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-ff5b2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Notificaciones</b>
                  <br />
                  <span style={{ color: 'var(--c-4a4a4a)' }}>mi servicio</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  position: 'absolute',
                  left: '168px',
                  top: '572px',
                  width: '128px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-111111)',
                  border: '1px dashed var(--c-2a2a2a)',
                  borderRadius: '64px / 14px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Cuarentena</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Blob Storage</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  position: 'absolute',
                  left: '315px',
                  top: '572px',
                  width: '128px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-111111)',
                  border: '1px dashed var(--c-2a2a2a)',
                  borderRadius: '64px / 14px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Evidencias</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Blob Storage</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '462px',
                  top: '572px',
                  width: '128px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-111111)',
                  border: '1px solid var(--c-2a2a2a)',
                  borderRadius: '64px / 14px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Robos</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure SQL</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '609px',
                  top: '572px',
                  width: '128px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-111111)',
                  border: '1px solid var(--c-2a2a2a)',
                  borderRadius: '64px / 14px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Personas</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure SQL</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '756px',
                  top: '572px',
                  width: '128px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-111111)',
                  border: '1px solid var(--c-2a2a2a)',
                  borderRadius: '64px / 14px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Ubicaciones</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Redis GEO</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '903px',
                  top: '572px',
                  width: '128px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-111111)',
                  border: '1px solid var(--c-2a2a2a)',
                  borderRadius: '64px / 14px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Dispositivos</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure SQL</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  position: 'absolute',
                  left: '388px',
                  top: '668px',
                  width: '128px',
                  height: '56px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-111111)',
                  border: '1px dashed var(--c-2a2a2a)',
                  borderRadius: '64px / 14px',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Métricas</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Redis</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '1064px',
                  top: '344px',
                  width: '120px',
                  height: '48px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-3a3a3a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Firebase FCM</b>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  position: 'absolute',
                  left: '1064px',
                  top: '408px',
                  width: '120px',
                  height: '48px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-0a0a0a)',
                  border: '1px dashed var(--c-3a3a3a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Email</b>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '1064px',
                  top: '472px',
                  width: '120px',
                  height: '48px',
                  boxSizing: 'border-box',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-0a0a0a)',
                  border: '1px dashed var(--c-3a3a3a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>SMS</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>fuera del prototipo</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '650px',
                  top: '230px',
                  width: '64px',
                  textAlign: 'center',
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: 'var(--c-8f8f8f)',
                }}
              >
                eventos
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
            color: 'var(--c-8f8f8f)',
          }}
        >
          <span>
            Fig. 1 — Vista de componentes y conectores que diseñamos en equipo. Atenuado y punteado, lo que quedó solo en el diseño.
          </span>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', fontSize: '13px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="28"
                height="8"
                viewBox="0 0 28 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: 'var(--c-6b6b6b)', strokeWidth: '2' }}
              >
                <path d="M 0 4 L 28 4" />
              </svg>
              REST / HTTPS
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="28"
                height="8"
                viewBox="0 0 28 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: 'var(--c-d9a441)', strokeWidth: '2', strokeDasharray: '6 5' }}
              >
                <path d="M 0 4 L 28 4" />
              </svg>
              AMQP (cola)
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="28"
                height="8"
                viewBox="0 0 28 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: 'var(--c-5a5a5a)', strokeWidth: '1.5', strokeDasharray: '2 4' }}
              >
                <path d="M 0 4 L 28 4" />
              </svg>
              acceso a datos
            </span>
          </span>
        </figcaption>
      </figure>
    }
    mobile={
      <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div
          style={{
            border: '1px solid var(--c-1f1f1f)',
            borderRadius: '0',
            background: 'var(--c-0d0d0d)',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '12.5px',
            lineHeight: '16px',
          }}
        >
          <div
            style={{
              border: '1px dashed var(--c-262626)',
              borderRadius: '0',
              background: 'var(--c-0f0f0f)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '12px', color: 'var(--c-8f8f8f)' }}>Presentación</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  gridColumn: '1 / -1',
                  background: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-3a3a3a)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>App móvil</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Android</span>
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
                stroke: 'var(--c-6b6b6b)',
                strokeWidth: '2',
                strokeLinecap: 'round',
              }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-312" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-312)" />
            </svg>
            <span style={{ fontSize: '11.5px', color: 'var(--c-8f8f8f)' }}>REST / HTTPS</span>
          </div>
          <div
            style={{
              border: '1px dashed var(--c-3a3a3a)',
              borderRadius: '0',
              background: 'var(--c-121212)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '12px', color: 'var(--c-a1a1a1)' }}>Comunicación</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  gridColumn: '1 / -1',
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>API Gateway</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure API Management · valida JWT · publica eventos</span>
                </span>
              </div>
              <div
                style={{
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Event Grid</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>enrutador de eventos</span>
                </span>
              </div>
              <div
                style={{
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Service Bus</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>cola de notificaciones</span>
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
                stroke: 'var(--c-d9a441)',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeDasharray: '6 5',
              }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-313" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-313)" />
            </svg>
            <span style={{ fontSize: '11.5px', color: 'var(--c-d9a441)' }}>eventos</span>
          </div>
          <div
            style={{
              border: '1px dashed var(--c-262626)',
              borderRadius: '0',
              background: 'var(--c-0f0f0f)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '12px', color: 'var(--c-8f8f8f)' }}>Lógica</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Robos</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>microservicio</span>
                </span>
              </div>
              <div
                style={{
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Datos personales</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>microservicio</span>
                </span>
              </div>
              <div
                style={{
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Geolocalización</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>microservicio</span>
                </span>
              </div>
              <div
                style={{
                  background: 'var(--c-ededed)',
                  color: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-ff5b2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Notificaciones</b>
                  <br />
                  <span style={{ color: 'var(--c-4a4a4a)' }}>mi servicio</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  background: 'var(--c-151515)',
                  border: '1px dashed var(--c-3a3a3a)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Evidencias</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>microservicio</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  background: 'var(--c-151515)',
                  border: '1px dashed var(--c-3a3a3a)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Saneamiento</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure Function</span>
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
                stroke: 'var(--c-5a5a5a)',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
                strokeDasharray: '2 4',
              }}
            >
              <path d="M 4 0 L 4 26" />
            </svg>
            <span style={{ fontSize: '11.5px', color: 'var(--c-8f8f8f)' }}>acceso a datos</span>
          </div>
          <div
            style={{
              border: '1px dashed var(--c-262626)',
              borderRadius: '0',
              background: 'var(--c-0f0f0f)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '12px', color: 'var(--c-8f8f8f)' }}>Datos</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  background: 'var(--c-111111)',
                  border: '1px solid var(--c-2a2a2a)',
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
                  <b style={{ fontWeight: '600' }}>Robos</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure SQL</span>
                </span>
              </div>
              <div
                style={{
                  background: 'var(--c-111111)',
                  border: '1px solid var(--c-2a2a2a)',
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
                  <b style={{ fontWeight: '600' }}>Personas</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure SQL</span>
                </span>
              </div>
              <div
                style={{
                  background: 'var(--c-111111)',
                  border: '1px solid var(--c-2a2a2a)',
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
                  <b style={{ fontWeight: '600' }}>Ubicaciones</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Redis GEO</span>
                </span>
              </div>
              <div
                style={{
                  background: 'var(--c-111111)',
                  border: '1px solid var(--c-2a2a2a)',
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
                  <b style={{ fontWeight: '600' }}>Dispositivos</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure SQL</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  background: 'var(--c-111111)',
                  border: '1px dashed var(--c-3a3a3a)',
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
                  <b style={{ fontWeight: '600' }}>Evidencias</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Blob Storage</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  background: 'var(--c-111111)',
                  border: '1px dashed var(--c-3a3a3a)',
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
                  <b style={{ fontWeight: '600' }}>Cuarentena</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Blob Storage</span>
                </span>
              </div>
              <div
                style={{
                  gridColumn: '1 / -1',
                  opacity: '0.5',
                  background: 'var(--c-111111)',
                  border: '1px dashed var(--c-3a3a3a)',
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
                  <b style={{ fontWeight: '600' }}>Métricas</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Redis</span>
                </span>
              </div>
            </div>
          </div>
          <div style={{ height: '14px' }}></div>
          <div
            style={{
              border: '1px dashed var(--c-262626)',
              borderRadius: '0',
              background: 'var(--c-0f0f0f)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '12px', color: 'var(--c-8f8f8f)' }}>Servicios externos</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  background: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-3a3a3a)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Firebase Auth</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>identidad</span>
                </span>
              </div>
              <div
                style={{
                  background: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-3a3a3a)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Firebase FCM</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>push al celular</span>
                </span>
              </div>
              <div
                style={{
                  background: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-3a3a3a)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>App Insights</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>observa todo</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  background: 'var(--c-151515)',
                  border: '1px dashed var(--c-3a3a3a)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>API de escaneo</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>saneamiento</span>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  background: 'var(--c-151515)',
                  border: '1px dashed var(--c-3a3a3a)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Email</b>
                </span>
              </div>
              <div
                style={{
                  opacity: '0.5',
                  background: 'var(--c-151515)',
                  border: '1px dashed var(--c-3a3a3a)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>SMS</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>fuera del prototipo</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <figcaption style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--c-8f8f8f)' }}>
          <span>Fig. 1 — Componentes por capa, que diseñamos en equipo. Atenuado y punteado, lo que quedó solo en el diseño.</span>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px', fontSize: '13px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="24"
                height="8"
                viewBox="0 0 24 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: 'var(--c-6b6b6b)', strokeWidth: '2' }}
              >
                <path d="M 0 4 L 24 4" />
              </svg>
              REST / HTTPS
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="24"
                height="8"
                viewBox="0 0 24 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: 'var(--c-d9a441)', strokeWidth: '2', strokeDasharray: '6 5' }}
              >
                <path d="M 0 4 L 24 4" />
              </svg>
              AMQP (cola)
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg
                width="24"
                height="8"
                viewBox="0 0 24 8"
                aria-hidden="true"
                style={{ fill: 'none', stroke: 'var(--c-5a5a5a)', strokeWidth: '1.5', strokeDasharray: '2 4' }}
              >
                <path d="M 0 4 L 24 4" />
              </svg>
              acceso a datos
            </span>
          </span>
          <span style={{ fontSize: '13px', color: 'var(--c-6f6f6f)' }}>
            Versión compacta: en pantallas grandes se ven todos los conectores.
          </span>
        </figcaption>
      </figure>
    }
  />
)

export const figure2 = (
  <ResponsiveFigure
    desktop={
      <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ border: '1px solid var(--c-1f1f1f)', borderRadius: '0', background: 'var(--c-0d0d0d)', overflow: 'hidden' }}>
          <DiagramFit width={1240} height={416}>
            <div style={{ position: 'relative', width: '1240px', height: '416px', fontSize: '13px', lineHeight: '18px' }}>
              <svg
                width="31"
                height="8"
                viewBox="0 0 31 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '192px',
                  top: '156px',
                  width: '31px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-1" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 27 4" markerEnd="url(#dc-arrow-head-filled-1)" />
              </svg>
              <svg
                width="31"
                height="8"
                viewBox="0 0 31 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '352px',
                  top: '156px',
                  width: '31px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-2" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 27 4" markerEnd="url(#dc-arrow-head-filled-2)" />
              </svg>
              <svg
                width="31"
                height="8"
                viewBox="0 0 31 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '512px',
                  top: '156px',
                  width: '31px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-3" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 27 4" markerEnd="url(#dc-arrow-head-filled-3)" />
              </svg>
              <svg
                width="31"
                height="8"
                viewBox="0 0 31 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '672px',
                  top: '156px',
                  width: '31px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-4" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 27 4" markerEnd="url(#dc-arrow-head-filled-4)" />
              </svg>
              <svg
                width="31"
                height="8"
                viewBox="0 0 31 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '832px',
                  top: '156px',
                  width: '31px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-5" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 27 4" markerEnd="url(#dc-arrow-head-filled-5)" />
              </svg>
              <svg
                width="31"
                height="8"
                viewBox="0 0 31 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '992px',
                  top: '156px',
                  width: '31px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-6" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 27 4" markerEnd="url(#dc-arrow-head-filled-6)" />
              </svg>
              <svg
                width="8"
                height="79"
                viewBox="0 0 8 79"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '924px',
                  top: '200px',
                  width: '8px',
                  height: '79px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-7" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 75" markerEnd="url(#dc-arrow-head-filled-7)" />
              </svg>
              <svg
                width="8"
                height="48"
                viewBox="0 0 8 48"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '444px',
                  top: '72px',
                  width: '8px',
                  height: '48px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 6',
                }}
              >
                <path d="M 4 48 L 4 0" />
              </svg>
              <svg
                width="480"
                height="8"
                viewBox="0 0 480 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '448px',
                  top: '68px',
                  width: '480px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 6',
                }}
              >
                <path d="M 0 4 L 480 4" />
              </svg>
              <svg
                width="8"
                height="47"
                viewBox="0 0 8 47"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '924px',
                  top: '72px',
                  width: '8px',
                  height: '47px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: 'var(--c-6b6b6b)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 6',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-8" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 43" markerEnd="url(#dc-arrow-head-filled-8)" />
              </svg>
              <div
                style={{
                  position: 'absolute',
                  left: '64px',
                  top: '120px',
                  width: '128px',
                  height: '80px',
                  boxSizing: 'border-box',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-141414)',
                  border: '1px solid var(--c-2a2a2a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>App móvil</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Android</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '224px',
                  top: '120px',
                  width: '128px',
                  height: '80px',
                  boxSizing: 'border-box',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-141414)',
                  border: '1px solid var(--c-2a2a2a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>API Gateway</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure APIM</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '384px',
                  top: '120px',
                  width: '128px',
                  height: '80px',
                  boxSizing: 'border-box',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-141414)',
                  border: '1px solid var(--c-2a2a2a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Event Grid</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>eventos</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '544px',
                  top: '120px',
                  width: '128px',
                  height: '80px',
                  boxSizing: 'border-box',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-141414)',
                  border: '1px solid var(--c-2a2a2a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Geolocalización</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Redis GEO</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '704px',
                  top: '120px',
                  width: '128px',
                  height: '80px',
                  boxSizing: 'border-box',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-141414)',
                  border: '1px solid var(--c-2a2a2a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Service Bus</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>cola de mensajes</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '864px',
                  top: '120px',
                  width: '128px',
                  height: '80px',
                  boxSizing: 'border-box',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-ededed)',
                  color: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-ff5b2e)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Notificaciones</b>
                  <br />
                  <span style={{ color: 'var(--c-4a4a4a)' }}>mi servicio</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '1024px',
                  top: '120px',
                  width: '128px',
                  height: '80px',
                  boxSizing: 'border-box',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-141414)',
                  border: '1px solid var(--c-2a2a2a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Firebase FCM</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>push al celular</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '864px',
                  top: '280px',
                  width: '128px',
                  height: '72px',
                  boxSizing: 'border-box',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'var(--c-141414)',
                  border: '1px solid var(--c-2a2a2a)',
                  borderRadius: '0',
                }}
              >
                <span>
                  <b style={{ fontWeight: '600' }}>Azure SQL</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>un FID por usuario</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '588px',
                  top: '44px',
                  width: '200px',
                  textAlign: 'center',
                  fontSize: '12.5px',
                  lineHeight: '16px',
                  color: 'var(--c-8f8f8f)',
                }}
              >
                registro y rotación del FID
              </div>
            </div>
          </DiagramFit>
        </div>
        <figcaption style={{ fontSize: '14px', color: 'var(--c-8f8f8f)' }}>
          Fig. 2 — El camino de una alerta, desde que alguien reporta un robo hasta que suena el celular de quienes están cerca. Mi
          servicio, resaltado.
        </figcaption>
      </figure>
    }
    mobile={
      <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div
          style={{
            border: '1px solid var(--c-1f1f1f)',
            borderRadius: '0',
            background: 'var(--c-0d0d0d)',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '12.5px',
            lineHeight: '16px',
          }}
        >
          <div
            style={{
              border: '1px dashed var(--c-262626)',
              borderRadius: '0',
              background: 'var(--c-0f0f0f)',
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
                  background: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-3a3a3a)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>App móvil</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Android</span>
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
                stroke: 'var(--c-6b6b6b)',
                strokeWidth: '2',
                strokeLinecap: 'round',
              }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-315" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-315)" />
            </svg>
          </div>
          <div
            style={{
              border: '1px dashed var(--c-262626)',
              borderRadius: '0',
              background: 'var(--c-0f0f0f)',
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
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>API Gateway</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Azure APIM</span>
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
                stroke: 'var(--c-6b6b6b)',
                strokeWidth: '2',
                strokeLinecap: 'round',
              }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-316" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-316)" />
            </svg>
          </div>
          <div
            style={{
              border: '1px dashed var(--c-262626)',
              borderRadius: '0',
              background: 'var(--c-0f0f0f)',
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
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Event Grid</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>eventos</span>
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
                stroke: 'var(--c-d9a441)',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeDasharray: '6 5',
              }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-317" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-317)" />
            </svg>
          </div>
          <div
            style={{
              border: '1px dashed var(--c-262626)',
              borderRadius: '0',
              background: 'var(--c-0f0f0f)',
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
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Geolocalización</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>Redis GEO</span>
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
                stroke: 'var(--c-d9a441)',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeDasharray: '6 5',
              }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-318" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-318)" />
            </svg>
          </div>
          <div
            style={{
              border: '1px dashed var(--c-262626)',
              borderRadius: '0',
              background: 'var(--c-0f0f0f)',
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
                  background: 'var(--c-151515)',
                  border: '1px solid var(--c-2e2e2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Service Bus</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>cola de mensajes</span>
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
                stroke: 'var(--c-d9a441)',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeDasharray: '6 5',
              }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-319" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-319)" />
            </svg>
          </div>
          <div
            style={{
              border: '1px dashed var(--c-262626)',
              borderRadius: '0',
              background: 'var(--c-0f0f0f)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
              <div
                style={{
                  background: 'var(--c-ededed)',
                  color: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-ff5b2e)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Notificaciones</b>
                  <br />
                  <span style={{ color: 'var(--c-4a4a4a)' }}>mi servicio</span>
                </span>
              </div>
              <div
                style={{
                  background: 'var(--c-111111)',
                  border: '1px solid var(--c-2a2a2a)',
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
                  <b style={{ fontWeight: '600' }}>Azure SQL</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>un FID por usuario</span>
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
                stroke: 'var(--c-6b6b6b)',
                strokeWidth: '2',
                strokeLinecap: 'round',
              }}
            >
              <defs>
                <marker id="dc-arrow-head-filled-320" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-320)" />
            </svg>
          </div>
          <div
            style={{
              border: '1px dashed var(--c-262626)',
              borderRadius: '0',
              background: 'var(--c-0f0f0f)',
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
                  background: 'var(--c-0a0a0a)',
                  border: '1px solid var(--c-3a3a3a)',
                  borderRadius: '0',
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
                  <b style={{ fontWeight: '600' }}>Firebase FCM</b>
                  <br />
                  <span style={{ color: 'var(--c-8f8f8f)' }}>push al celular</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <figcaption style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--c-8f8f8f)' }}>
          <span>
            Fig. 2 — El camino de una alerta, desde que alguien reporta un robo hasta que suena el celular de quienes están cerca. Mi
            servicio, resaltado.
          </span>
        </figcaption>
      </figure>
    }
  />
)
