// Diagramas del caso: el dibujo completo para pantallas anchas y la versión apilada para el celular.
import { ResponsiveFigure, DiagramFit } from '@/components/case/figure'

export const figure1 = (
  <ResponsiveFigure
    desktop={
      <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ border: '1px solid #1F1F1F', borderRadius: '20px', background: '#0D0D0D', overflow: 'hidden' }}>
          <DiagramFit width={1200} height={740}>
            <div style={{ position: 'relative', width: '1200px', height: '740px', fontSize: '12.5px', lineHeight: '16px' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '152px',
                  top: '40px',
                  width: '888px',
                  height: '100px',
                  boxSizing: 'border-box',
                  border: '1px dashed #3A3A3A',
                  borderRadius: '14px',
                  background: '#121212',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  left: '152px',
                  top: '160px',
                  width: '888px',
                  height: '100px',
                  boxSizing: 'border-box',
                  border: '1px dashed #262626',
                  borderRadius: '14px',
                  background: '#0F0F0F',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  left: '152px',
                  top: '280px',
                  width: '888px',
                  height: '100px',
                  boxSizing: 'border-box',
                  border: '1px dashed #262626',
                  borderRadius: '14px',
                  background: '#0F0F0F',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  left: '152px',
                  top: '400px',
                  width: '888px',
                  height: '180px',
                  boxSizing: 'border-box',
                  border: '1px dashed #262626',
                  borderRadius: '14px',
                  background: '#0F0F0F',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  left: '152px',
                  top: '600px',
                  width: '888px',
                  height: '100px',
                  boxSizing: 'border-box',
                  border: '1px dashed #262626',
                  borderRadius: '14px',
                  background: '#0F0F0F',
                }}
              ></div>
              <div style={{ position: 'absolute', left: '164px', top: '46px', fontSize: '12px', color: '#A1A1A1' }}>Public network</div>
              <div style={{ position: 'absolute', left: '164px', top: '166px', fontSize: '12px', color: '#8F8F8F' }}>Frontend network</div>
              <div style={{ position: 'absolute', left: '164px', top: '285px', fontSize: '12px', color: '#8F8F8F' }}>
                Orchestration network
              </div>
              <div style={{ position: 'absolute', left: '164px', top: '406px', fontSize: '12px', color: '#8F8F8F' }}>Backend network</div>
              <div style={{ position: 'absolute', left: '164px', top: '606px', fontSize: '12px', color: '#8F8F8F' }}>Data network</div>
              <svg
                width="71"
                height="8"
                viewBox="0 0 71 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '144px',
                  top: '88px',
                  width: '71px',
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
                  <marker id="dc-arrow-head-filled-31" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 67 4" markerEnd="url(#dc-arrow-head-filled-31)" />
              </svg>
              <svg
                width="303"
                height="8"
                viewBox="0 0 303 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '761px',
                  top: '88px',
                  width: '303px',
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
                  <marker id="dc-arrow-head-filled-32" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 303 4 L 4 4" markerEnd="url(#dc-arrow-head-filled-32)" />
              </svg>
              <svg
                width="8"
                height="67"
                viewBox="0 0 8 67"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '292px',
                  top: '118px',
                  width: '8px',
                  height: '67px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-33" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 63" markerEnd="url(#dc-arrow-head-filled-33)" />
              </svg>
              <svg
                width="8"
                height="67"
                viewBox="0 0 8 67"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '292px',
                  top: '238px',
                  width: '8px',
                  height: '67px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-34" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 63" markerEnd="url(#dc-arrow-head-filled-34)" />
              </svg>
              <svg
                width="8"
                height="187"
                viewBox="0 0 8 187"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '676px',
                  top: '118px',
                  width: '8px',
                  height: '187px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-35" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 183" markerEnd="url(#dc-arrow-head-filled-35)" />
              </svg>
              <svg
                width="8"
                height="73"
                viewBox="0 0 8 73"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '228px',
                  top: '358px',
                  width: '8px',
                  height: '73px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-36" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 69" markerEnd="url(#dc-arrow-head-filled-36)" />
              </svg>
              <svg
                width="8"
                height="73"
                viewBox="0 0 8 73"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '468px',
                  top: '358px',
                  width: '8px',
                  height: '73px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-37" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 69" markerEnd="url(#dc-arrow-head-filled-37)" />
              </svg>
              <svg
                width="8"
                height="73"
                viewBox="0 0 8 73"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '644px',
                  top: '358px',
                  width: '8px',
                  height: '73px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-38" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 69" markerEnd="url(#dc-arrow-head-filled-38)" />
              </svg>
              <svg
                width="160"
                height="8"
                viewBox="0 0 160 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '760px',
                  top: '328px',
                  width: '160px',
                  height: '8px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <path d="M 0 4 L 160 4" />
              </svg>
              <svg
                width="8"
                height="99"
                viewBox="0 0 8 99"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '916px',
                  top: '332px',
                  width: '8px',
                  height: '99px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-39" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 95" markerEnd="url(#dc-arrow-head-filled-39)" />
              </svg>
              <svg
                width="8"
                height="27"
                viewBox="0 0 8 27"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '228px',
                  top: '484px',
                  width: '8px',
                  height: '27px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#6B6B6B',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <defs>
                  <marker id="dc-arrow-head-filled-40" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 0 L 4 23" markerEnd="url(#dc-arrow-head-filled-40)" />
              </svg>
              <svg
                width="23"
                height="8"
                viewBox="0 0 23 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '145px',
                  top: '534px',
                  width: '23px',
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
                  <marker id="dc-arrow-head-filled-41" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 23 4 L 4 4" markerEnd="url(#dc-arrow-head-filled-41)" />
              </svg>
              <svg
                width="8"
                height="54"
                viewBox="0 0 8 54"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '511px',
                  top: '484px',
                  width: '8px',
                  height: '54px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#D9A441',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '6 5',
                }}
              >
                <path d="M 4 0 L 4 54" />
              </svg>
              <svg
                width="204"
                height="8"
                viewBox="0 0 204 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '515px',
                  top: '534px',
                  width: '204px',
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
                  <marker id="dc-arrow-head-filled-42" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 200 4" markerEnd="url(#dc-arrow-head-filled-42)" />
              </svg>
              <svg
                width="72"
                height="8"
                viewBox="0 0 72 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '848px',
                  top: '534px',
                  width: '72px',
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
                <path d="M 0 4 L 72 4" />
              </svg>
              <svg
                width="8"
                height="53"
                viewBox="0 0 8 53"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '916px',
                  top: '485px',
                  width: '8px',
                  height: '53px',
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
                  <marker id="dc-arrow-head-filled-43" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#D9A441" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 4 53 L 4 4" markerEnd="url(#dc-arrow-head-filled-43)" />
              </svg>
              <svg
                width="8"
                height="141"
                viewBox="0 0 8 141"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '426px',
                  top: '484px',
                  width: '8px',
                  height: '141px',
                  overflow: 'visible',
                  fill: 'none',
                  stroke: '#5A5A5A',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeDasharray: '2 4',
                }}
              >
                <path d="M 4 0 L 4 141" />
              </svg>
              <svg
                width="79"
                height="8"
                viewBox="0 0 79 8"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  left: '984px',
                  top: '454px',
                  width: '79px',
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
                  <marker id="dc-arrow-head-filled-44" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                    <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                  </marker>
                </defs>
                <path d="M 0 4 L 75 4" markerEnd="url(#dc-arrow-head-filled-44)" />
              </svg>
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '66px',
                  width: '120px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Browser</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>web user</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '1064px',
                  top: '66px',
                  width: '120px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Android app</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>Kotlin · local SQLite</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '512px',
                  width: '120px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Firebase</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>auth + Firestore</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '1064px',
                  top: '432px',
                  width: '120px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Email</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>to the user</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '216px',
                  top: '66px',
                  width: '160px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Web proxy + WAF</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>Nginx · TLS · per-IP limit</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '600px',
                  top: '66px',
                  width: '160px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Mobile proxy</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>Nginx</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '216px',
                  top: '186px',
                  width: '160px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Web frontend ×3</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>Next.js SSR</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '216px',
                  top: '306px',
                  width: '544px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>API Gateway</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>Express Gateway · authentication and routing</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '168px',
                  top: '432px',
                  width: '128px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Load balancer</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>Nginx</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '168px',
                  top: '512px',
                  width: '128px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Authentication ×3</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>FastAPI</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '408px',
                  top: '432px',
                  width: '128px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Routes</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>Node.js</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '584px',
                  top: '432px',
                  width: '128px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Distance</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>FastAPI · OSRM</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '856px',
                  top: '432px',
                  width: '128px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Notifications</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>Spring Boot</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '720px',
                  top: '512px',
                  width: '128px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>RabbitMQ</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>event queue</span>
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '408px',
                  top: '626px',
                  width: '128px',
                  height: '52px',
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
                  <b style={{ fontWeight: '600' }}>Routes</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>PostgreSQL + PostGIS</span>
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
          <span>Fig. 1 — Components and connectors, grouped by network. Highlighted: what I built.</span>
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
              HTTP / REST
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
              AMQP
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
            <span style={{ fontSize: '12px', color: '#8F8F8F' }}>Clients</span>
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
                  <b style={{ fontWeight: '600' }}>Browser</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>web user</span>
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
                  <b style={{ fontWeight: '600' }}>Android app</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>Kotlin · local SQLite</span>
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
                <marker id="dc-arrow-head-filled-307" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-307)" />
            </svg>
            <span style={{ fontSize: '11.5px', color: '#8F8F8F' }}>HTTP / REST</span>
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
            <span style={{ fontSize: '12px', color: '#A1A1A1' }}>Public network</span>
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
                  <b style={{ fontWeight: '600' }}>Web proxy + WAF</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>Nginx · TLS · per-IP limit</span>
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
                  <b style={{ fontWeight: '600' }}>Mobile proxy</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>Nginx</span>
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
                <marker id="dc-arrow-head-filled-308" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-308)" />
            </svg>
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
            <span style={{ fontSize: '12px', color: '#8F8F8F' }}>Frontend network</span>
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
                  <b style={{ fontWeight: '600' }}>Web frontend ×3</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>Next.js SSR</span>
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
                <marker id="dc-arrow-head-filled-309" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-309)" />
            </svg>
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
            <span style={{ fontSize: '12px', color: '#8F8F8F' }}>Orchestration network</span>
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
                  <b style={{ fontWeight: '600' }}>API Gateway</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>Express Gateway · authentication and routing</span>
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
                <marker id="dc-arrow-head-filled-310" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
                  <path d="M0 0 L4 2 L0 4 Z" fill="#6B6B6B" stroke="none" style={{ stroke: 'none', fill: 'context-stroke' }} />
                </marker>
              </defs>
              <path d="M 4 0 L 4 26" markerEnd="url(#dc-arrow-head-filled-310)" />
            </svg>
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
            <span style={{ fontSize: '12px', color: '#8F8F8F' }}>Backend network</span>
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
                  <b style={{ fontWeight: '600' }}>Load balancer</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>Nginx</span>
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
                  <b style={{ fontWeight: '600' }}>Authentication ×3</b>
                  <br />
                  <span style={{ color: '#4A4A4A' }}>FastAPI</span>
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
                  <b style={{ fontWeight: '600' }}>Routes</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>Node.js</span>
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
                  <b style={{ fontWeight: '600' }}>Distance</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>FastAPI · OSRM</span>
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
                  <b style={{ fontWeight: '600' }}>RabbitMQ</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>event queue</span>
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
                  <b style={{ fontWeight: '600' }}>Notifications</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>Spring Boot</span>
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
                stroke: '#5A5A5A',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
                strokeDasharray: '2 4',
              }}
            >
              <path d="M 4 0 L 4 26" />
            </svg>
            <span style={{ fontSize: '11.5px', color: '#8F8F8F' }}>data access</span>
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
            <span style={{ fontSize: '12px', color: '#8F8F8F' }}>Data network</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
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
                  <b style={{ fontWeight: '600' }}>Routes</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>PostgreSQL + PostGIS</span>
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
            <span style={{ fontSize: '12px', color: '#8F8F8F' }}>External services</span>
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
                  <b style={{ fontWeight: '600' }}>Firebase</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>auth + Firestore</span>
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
                  <b style={{ fontWeight: '600' }}>Email</b>
                  <br />
                  <span style={{ color: '#8F8F8F' }}>to the user</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <figcaption style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#8F8F8F' }}>
          <span>Fig. 1 — Components grouped by network. Highlighted: what I built.</span>
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
              HTTP / REST
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
              AMQP
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
