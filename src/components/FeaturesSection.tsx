import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layers, Terminal, Sparkles, Cpu, Check, ArrowRight } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T: any
  L: boolean
}

const DISCIPLINES = [
  {
    id: '01',
    icon: Sparkles,
    title: 'Brand Architecture & Spatial Worlds',
    tagline: 'Definitive visual languages and 3D brand environments',
    summary:
      'We craft iconic visual systems, custom typography, and 3D virtual spaces that establish category leadership and emotional resonance.',
    deliverables: [
      'Visual Identity & Art Direction',
      '3D Spatial Environments & CGI',
      'Typography & Custom Type Treatment',
      'Motion Design Guidelines',
      'Interactive Design Token Systems',
    ],
    tech: ['Cinema 4D', 'Blender', 'Figma Tokens', 'Spline 3D'],
  },
  {
    id: '02',
    icon: Terminal,
    title: 'Creative Development & WebGL',
    tagline: 'High-performance interactive physics and custom shaders',
    summary:
      'Pushing the browser to native GPU performance. We engineer custom fragment shaders, particle systems, and 60fps micro-interactions.',
    deliverables: [
      'Custom WebGL & Three.js Canvas',
      'GLSL Fragment & Vertex Shaders',
      'Fluid Kinetic Micro-Interactions',
      'Procedural Physics Simulation',
      'WebAudio Reactive Synthesizers',
    ],
    tech: ['Three.js', 'GLSL', 'Framer Motion', 'Canvas API', 'TypeScript'],
  },
  {
    id: '03',
    icon: Layers,
    title: 'Product Design & Design Systems',
    tagline: 'Scalable multi-platform token architectures for ambitious products',
    summary:
      'From complex SaaS workflows to consumer flagship mobile apps, we engineer cohesive interfaces that eliminate friction and scale seamlessly.',
    deliverables: [
      'Enterprise Component Systems (Atomic)',
      'Multi-Platform Design Tokens (CSS/Tailwind)',
      'Accessibility & WCAG AAA Verification',
      'Interactive Prototypes & State Machines',
      'UX Research & Conversion Architecture',
    ],
    tech: ['React / Next.js', 'Tailwind CSS', 'Radix UI', 'Figma Components'],
  },
  {
    id: '04',
    icon: Cpu,
    title: 'High-Scale Performance & Infrastructure',
    tagline: 'Sub-second global latency, headless commerce, and Edge speed',
    summary:
      'Design without performance is failure. We optimize every millisecond of Time-to-Interactive, asset streaming, and serverless edge delivery.',
    deliverables: [
      'Next.js 15 / Turbopack Optimization',
      'Headless Commerce & Supabase Realtime',
      'Global Edge Caching & CDN Strategy',
      'Sub-Second LCP / Core Web Vitals 100/100',
      'Automated CI/CD & Security Audits',
    ],
    tech: ['Next.js App Router', 'Supabase', 'Vercel Edge', 'Cloudflare Workers'],
  },
]

export default function FeaturesSection({ T, L }: Props) {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <section
      id="services"
      style={{
        background: T.siteBg,
        position: 'relative',
        transition: 'background 0.5s',
        padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 80px)',
        borderTop: `1px solid ${T.line}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section Header */}
        <Reveal>
          <div style={{ marginBottom: 'clamp(48px, 6vw, 72px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 24, height: 1, background: T.gold }} />
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: T.gold,
                }}
              >
                03 / Capabilities & Craft
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                letterSpacing: '-0.04em',
                lineHeight: 1.08,
                color: T.text,
                margin: 0,
                transition: 'color 0.5s',
              }}
            >
              Disciplines built for{' '}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: T.gold,
                }}
              >
                uncompromising standards
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Interactive Capabilities Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(20px, 3vw, 40px)',
            alignItems: 'start',
          }}
        >
          {/* Left: Discipline Selector Tabs */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {DISCIPLINES.map((d, i) => {
              const isActive = activeTab === i
              const Icon = d.icon

              return (
                <motion.button
                  key={d.id}
                  onClick={() => setActiveTab(i)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    width: '100%',
                    padding: '20px 22px',
                    borderRadius: 14,
                    cursor: 'pointer',
                    background: isActive
                      ? L
                        ? 'rgba(255,255,255,0.95)'
                        : 'rgba(28,24,16,0.95)'
                      : 'transparent',
                    border: `1px solid ${isActive ? T.goldBdr : T.line}`,
                    boxShadow: isActive ? T.shadow : 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: isActive ? T.goldBg : 'rgba(255,255,255,0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? T.gold : T.muted,
                        border: `1px solid ${isActive ? T.goldBdr : 'transparent'}`,
                        transition: 'all 0.3s',
                      }}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          color: isActive ? T.gold : T.muted,
                          letterSpacing: '0.1em',
                          marginBottom: 4,
                        }}
                      >
                        {d.id}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: 15,
                          color: isActive ? T.text : T.sub,
                          letterSpacing: '-0.02em',
                          transition: 'color 0.3s',
                        }}
                      >
                        {d.title}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    size={16}
                    color={isActive ? T.gold : T.muted}
                    style={{
                      transform: isActive ? 'translateX(0)' : 'translateX(-4px)',
                      opacity: isActive ? 1 : 0.4,
                      transition: 'all 0.3s',
                    }}
                  />
                </motion.button>
              )
            })}
          </div>

          {/* Right: Active Discipline Deep Dive Panel */}
          <div style={{ gridColumn: 'span 7' }}>
            <AnimatePresence mode="wait">
              {(() => {
                const cur = DISCIPLINES[activeTab]
                const Icon = cur.icon

                return (
                  <motion.div
                    key={cur.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                      background: L ? 'rgba(255,255,255,0.85)' : 'rgba(22,18,12,0.85)',
                      border: `1px solid ${T.goldBdr}`,
                      borderRadius: 18,
                      padding: 'clamp(28px, 4vw, 44px)',
                      boxShadow: T.shadowMd,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Top ambient badge */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                          background: T.goldBg,
                          border: `1px solid ${T.goldBdr}`,
                          borderRadius: 100,
                          padding: '4px 14px',
                        }}
                      >
                        <Icon size={14} color={T.gold} />
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: T.gold,
                          }}
                        >
                          DISCIPLINE {cur.id}
                        </span>
                      </div>

                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 12,
                          color: T.muted,
                        }}
                      >
                        Studio Core
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: 'clamp(24px, 2.5vw, 34px)',
                        letterSpacing: '-0.03em',
                        color: T.text,
                        lineHeight: 1.15,
                        margin: '0 0 10px',
                      }}
                    >
                      {cur.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 14,
                        fontWeight: 400,
                        color: T.gold,
                        margin: '0 0 18px',
                      }}
                    >
                      {cur.tagline}
                    </p>

                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 14,
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: T.sub,
                        margin: '0 0 28px',
                      }}
                    >
                      {cur.summary}
                    </p>

                    {/* Key Deliverables */}
                    <div style={{ marginBottom: 28 }}>
                      <div
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: T.gold,
                          marginBottom: 12,
                        }}
                      >
                        Signature Deliverables
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
                        {cur.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: 13,
                              color: T.text,
                            }}
                          >
                            <div
                              style={{
                                width: 18,
                                height: 18,
                                borderRadius: '50%',
                                background: T.goldBg,
                                border: `1px solid ${T.goldBdr}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                              }}
                            >
                              <Check size={11} color={T.gold} strokeWidth={2.5} />
                            </div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: T.muted,
                          marginBottom: 10,
                        }}
                      >
                        Core Stack & Tools
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {cur.tech.map(tk => (
                          <span
                            key={tk}
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 11,
                              color: T.sub,
                              background: L ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                              border: `1px solid ${T.cardBdr}`,
                              padding: '3px 10px',
                              borderRadius: 6,
                            }}
                          >
                            {tk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
