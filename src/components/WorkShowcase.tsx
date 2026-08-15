import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, Layers, Sparkles, Cpu } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T: any
  L: boolean
}

const WORKS = [
  {
    title: 'Chronos Spatial',
    category: 'Spatial Computing & WebGL Platform',
    year: '2025',
    accent: '#c9a84c',
    rgb: '201,168,76',
    tags: ['Three.js', 'GLSL Shaders', 'Awwwards SOTD'],
    metric: '+340% User Dwell Time',
    desc: 'An immersive browser-based spatial computing interface featuring real-time light scattering and procedural physics.',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80',
    span: 'large',
  },
  {
    title: 'Veloce Hypercar',
    category: '3D Automotive Experience',
    year: '2025',
    accent: '#e05a47',
    rgb: '224,90,71',
    tags: ['Interactive 3D', 'WebGL', 'FWA of the Day'],
    metric: '€42M Pre-orders Generated',
    desc: 'Digital flagship configurator with ray-traced reflections and custom audio spatialization for next-gen electric hypercars.',
    img: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1000&q=80',
    span: 'small',
  },
  {
    title: 'Nexus Core',
    category: 'Decentralized Liquidity Terminal',
    year: '2024',
    accent: '#4e9df5',
    rgb: '78,157,245',
    tags: ['React', 'Design System', 'Fintech'],
    metric: '$1.2B Volume Handled',
    desc: 'Ultra-low latency institutional trading environment with generative real-time market depth visualization.',
    img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1000&q=80',
    span: 'small',
  },
  {
    title: 'Solis Neural Audio',
    category: 'Hardware Interface & Sound Architecture',
    year: '2024',
    accent: '#52c48b',
    rgb: '82,196,139',
    tags: ['WebAudio API', 'Design Tokens', 'Red Dot Winner'],
    metric: 'Featured in Wallpaper*',
    desc: 'Tactile sound synthesis hardware platform companion with generative acoustic waves and micro-haptic feedback.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80',
    span: 'large',
  },
] as const

export default function WorkShowcase({ T, L }: Props) {
  const [activeHover, setActiveHover] = useState<number | null>(null)

  return (
    <section
      id="work"
      style={{
        background: T.siteBg,
        position: 'relative',
        transition: 'background 0.5s',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section Header */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: 20,
              marginBottom: 'clamp(40px, 6vw, 64px)',
            }}
          >
            <div>
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
                  02 / Selected Commissions
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
                Featured Works &{' '}
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: T.gold,
                  }}
                >
                  digital artistry
                </span>
              </h2>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: T.goldBg,
                border: `1px solid ${T.goldBdr}`,
                borderRadius: 100,
                padding: '6px 16px',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: T.gold,
                  display: 'block',
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: T.gold,
                  letterSpacing: '0.08em',
                }}
              >
                2024 — 2026 ARCHIVE
              </span>
            </div>
          </div>
        </Reveal>

        {/* Case Studies Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(16px, 2.5vw, 28px)',
          }}
        >
          {WORKS.map((w, i) => {
            const isHov = activeHover === i
            const colSpan = w.span === 'large' ? 'span 7' : 'span 5'

            return (
              <div
                key={w.title}
                style={{
                  gridColumn: colSpan,
                  minWidth: 0,
                }}
              >
                <Reveal delay={i * 0.08}>
                  <motion.div
                    onHoverStart={() => setActiveHover(i)}
                    onHoverEnd={() => setActiveHover(null)}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'relative',
                      borderRadius: 16,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      background: L ? '#f4eee1' : '#14110b',
                      border: `1px solid ${isHov ? T.goldBdr : T.cardBdr}`,
                      boxShadow: isHov ? T.shadowMd : T.shadow,
                      transition: 'border-color 0.4s, box-shadow 0.4s, background 0.4s',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Image Container */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: w.span === 'large' ? '16/10' : '4/3',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.img
                        src={w.img}
                        alt={w.title}
                        animate={{ scale: isHov ? 1.08 : 1.0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          filter: isHov ? 'brightness(0.95)' : 'brightness(0.85) contrast(1.05)',
                          transition: 'filter 0.4s',
                        }}
                      />

                      {/* Cinematic Gradient Vignette */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(to top, rgba(12,10,7,0.85) 0%, rgba(12,10,7,0.2) 50%, transparent 100%)',
                          pointerEvents: 'none',
                        }}
                      />

                      {/* Year & Metric Pills (Top) */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          right: 16,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          zIndex: 2,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10,
                            letterSpacing: '0.12em',
                            color: '#fff',
                            background: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(10px)',
                            padding: '4px 10px',
                            borderRadius: 100,
                            border: '1px solid rgba(255,255,255,0.15)',
                          }}
                        >
                          {w.year}
                        </span>

                        <span
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 11,
                            fontWeight: 600,
                            color: w.accent,
                            background: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(10px)',
                            padding: '4px 12px',
                            borderRadius: 100,
                            border: `1px solid rgba(${w.rgb},0.35)`,
                          }}
                        >
                          {w.metric}
                        </span>
                      </div>

                      {/* Hover Arrow Action */}
                      <motion.div
                        animate={{
                          scale: isHov ? 1 : 0.8,
                          opacity: isHov ? 1 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        style={{
                          position: 'absolute',
                          bottom: 16,
                          right: 16,
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          background: w.accent,
                          color: '#0c0a07',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 8px 24px rgba(${w.rgb},0.45)`,
                          zIndex: 2,
                        }}
                      >
                        <ArrowUpRight size={20} strokeWidth={2.4} />
                      </motion.div>
                    </div>

                    {/* Card Body */}
                    <div style={{ padding: '24px 24px 28px' }}>
                      <div
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: T.gold,
                          marginBottom: 8,
                        }}
                      >
                        {w.category}
                      </div>

                      <h3
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: 'clamp(22px, 2.4vw, 32px)',
                          letterSpacing: '-0.03em',
                          color: T.text,
                          margin: '0 0 10px',
                          lineHeight: 1.15,
                          transition: 'color 0.5s',
                        }}
                      >
                        {w.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 13,
                          fontWeight: 300,
                          lineHeight: 1.65,
                          color: T.sub,
                          margin: '0 0 18px',
                          transition: 'color 0.5s',
                        }}
                      >
                        {w.desc}
                      </p>

                      {/* Tag Capsules */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {w.tags.map(t => (
                          <span
                            key={t}
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: 11,
                              fontWeight: 500,
                              color: isHov ? w.accent : T.sub,
                              background: isHov ? `rgba(${w.rgb},0.12)` : T.goldBg,
                              border: `1px solid ${isHov ? `rgba(${w.rgb},0.3)` : T.cardBdr}`,
                              padding: '3px 10px',
                              borderRadius: 100,
                              transition: 'all 0.3s',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
