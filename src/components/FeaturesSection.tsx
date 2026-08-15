import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Layers, Zap, Sparkles, Check, ArrowRight, Play, CheckCircle2 } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T: any
  L: boolean
}

const FEATURE_CARDS = [
  {
    title: 'User-friendly editor',
    desc: 'Create amazing motion graphics and interactive layouts with an intuitive visual canvas.',
    badge: 'VISUAL CANVAS',
    accent: '#3b82f6',
    preview: (
      <div
        style={{
          background: '#111827',
          borderRadius: 14,
          padding: 16,
          height: 170,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
        </div>
        <div style={{ background: '#1f2937', borderRadius: 8, height: 48, padding: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 6, background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Play size={14} color="#fff" />
          </div>
          <div style={{ flex: 1, height: 6, background: '#374151', borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
            <div style={{ width: '65%', height: '100%', background: '#60a5fa', borderRadius: 4 }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#9ca3af', fontFamily: "'JetBrains Mono'" }}>
          <span>00:04:12</span>
          <span>60 FPS</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Render at lightning speed',
    desc: 'Test and compile your web experiences directly in the browser without long build queues.',
    badge: 'SUB-SECOND ENGINE',
    accent: '#10b981',
    preview: (
      <div
        style={{
          background: '#064e3b',
          borderRadius: 14,
          padding: 18,
          height: 170,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 12,
            boxShadow: '0 0 20px rgba(16,185,129,0.5)',
          }}
        >
          <Zap size={24} color="#ffffff" />
        </div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, lineHeight: 1 }}>0.42s</div>
        <div style={{ fontSize: 11, color: '#a7f3d0', marginTop: 4, fontFamily: "'Outfit'" }}>Ultra-fast Edge Execution</div>
      </div>
    ),
  },
  {
    title: 'High-quality design templates',
    desc: 'Never start from a blank canvas with our ever-growing token architecture and component systems.',
    badge: 'DESIGN TOKENS',
    accent: '#8b5cf6',
    preview: (
      <div
        style={{
          background: '#581c87',
          borderRadius: 14,
          padding: 16,
          height: 170,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 600, fontFamily: "'JetBrains Mono'" }}>ATOMIC KIT v2.4</span>
          <span style={{ background: '#7c3aed', padding: '2px 8px', borderRadius: 100, fontSize: 10 }}>NEW</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          {[1, 2, 3].map(n => (
            <div key={n} style={{ background: '#7e22ce', borderRadius: 8, height: 54, border: '1px solid #9333ea' }} />
          ))}
        </div>
        <div style={{ fontSize: 11, color: '#e9d5ff', fontFamily: "'Outfit'" }}>50+ Ready UI Components</div>
      </div>
    ),
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Simple And Fast Setup',
    desc: 'Connect your repositories, domain, and tokens in minutes with zero configuration hurdles.',
  },
  {
    step: '02',
    title: 'Work Together Effortlessly',
    desc: 'Seamless real-time collaboration with instant previews and live interactive state review.',
  },
  {
    step: '03',
    title: 'Monitor Your Progress & Scale',
    desc: 'Comprehensive telemetry and Core Web Vitals analytics for exceptional decision making.',
  },
]

export default function FeaturesSection({ T, L }: Props) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section
      style={{
        background: '#ffffff',
        position: 'relative',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Fast and Simple Header */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 24,
              marginBottom: 'clamp(40px, 6vw, 64px)',
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 56px)',
                letterSpacing: '-0.04em',
                color: '#111827',
                margin: 0,
              }}
            >
              Fast and simple
            </h2>

            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 16,
                fontWeight: 300,
                color: '#6b7280',
                maxWidth: 420,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              —No matter your scale or complexity, it’s effortless to ship world-class digital experiences with Aether.
            </p>
          </div>
        </Reveal>

        {/* 3-Card Product Feature Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            marginBottom: 'clamp(80px, 10vw, 140px)',
          }}
        >
          {FEATURE_CARDS.map((fc, i) => (
            <Reveal key={fc.title} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: 24,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                }}
              >
                {/* Visual Preview */}
                {fc.preview}

                <div>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: '#111827',
                      margin: '0 0 8px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {fc.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 14,
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: '#6b7280',
                      margin: 0,
                    }}
                  >
                    {fc.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* 3 Easy Steps Section (from TaskGo) */}
        <div style={{ paddingTop: 'clamp(40px, 6vw, 60px)', borderTop: '1px solid #f3f4f6' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto clamp(48px, 6vw, 64px)' }}>
            <Reveal>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(32px, 4.2vw, 48px)',
                  letterSpacing: '-0.035em',
                  color: '#111827',
                  margin: '0 0 12px',
                }}
              >
                Get Started In Just 3 Easy Steps
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 15,
                  fontWeight: 300,
                  color: '#6b7280',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Launch your digital project with a guided studio onboarding experience designed for speed and simplicity.
              </p>
            </Reveal>
          </div>

          {/* Split 2-Column: Left App UI Card, Right 3 Steps */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center',
            }}
          >
            {/* Left: App UI Card */}
            <div style={{ gridColumn: 'span 7' }}>
              <Reveal delay={0.1}>
                <div
                  style={{
                    background: '#111827',
                    borderRadius: 24,
                    padding: 24,
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    border: '1px solid #374151',
                    color: '#ffffff',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16 }}>Aether TaskBoard</span>
                    <span style={{ fontSize: 11, color: '#9ca3af', fontFamily: "'JetBrains Mono'" }}>Sprint 42 // Live</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                    {[
                      { col: 'To Do', items: ['Design Token Architecture', 'GLSL Shader Review'] },
                      { col: 'In Progress', items: ['Spatial Computing OS', 'WebGL Rendering'] },
                      { col: 'Done', items: ['Vercel Edge Setup', 'Client Audit 100/100'] },
                    ].map(col => (
                      <div key={col.col} style={{ background: '#1f2937', borderRadius: 12, padding: 12 }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#d1d5db', marginBottom: 8 }}>{col.col}</div>
                        {col.items.map(item => (
                          <div
                            key={item}
                            style={{
                              background: '#374151',
                              borderRadius: 8,
                              padding: '8px 10px',
                              fontSize: 11,
                              marginBottom: 6,
                              color: '#f3f4f6',
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: 3 Numbered Steps */}
            <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {STEPS.map((s, idx) => {
                const isCurrent = activeStep === idx

                return (
                  <Reveal key={s.step} delay={0.1 + idx * 0.05}>
                    <motion.div
                      onClick={() => setActiveStep(idx)}
                      whileHover={{ x: 4 }}
                      style={{
                        background: isCurrent ? '#f9fafb' : '#ffffff',
                        border: `1px solid ${isCurrent ? '#2563eb' : '#e5e7eb'}`,
                        borderRadius: 18,
                        padding: 20,
                        cursor: 'pointer',
                        display: 'flex',
                        gap: 16,
                        boxShadow: isCurrent ? '0 4px 16px rgba(37,99,235,0.08)' : 'none',
                        transition: 'all 0.25s',
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          background: isCurrent ? '#2563eb' : '#f3f4f6',
                          color: isCurrent ? '#ffffff' : '#6b7280',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          flexShrink: 0,
                          transition: 'all 0.25s',
                        }}
                      >
                        {s.step}
                      </div>

                      <div>
                        <h4
                          style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 700,
                            fontSize: 16,
                            color: '#111827',
                            margin: '0 0 4px',
                          }}
                        >
                          {s.title}
                        </h4>
                        <p
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 13,
                            fontWeight: 300,
                            lineHeight: 1.55,
                            color: '#6b7280',
                            margin: 0,
                          }}
                        >
                          {s.desc}
                        </p>
                      </div>
                    </motion.div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
