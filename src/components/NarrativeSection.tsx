import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Award, ShieldCheck, TrendingUp } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T: any
  L: boolean
}

const STATS = [
  {
    icon: Award,
    value: '12×',
    label: 'Awwwards SOTD',
    detail: 'Recognized for creative excellence & WebGL innovation',
  },
  {
    icon: Sparkles,
    value: '08×',
    label: 'FWA of the Day',
    detail: 'Pushing browser boundaries & interactive storytelling',
  },
  {
    icon: ShieldCheck,
    value: '99.4%',
    label: 'Architecture Delivery',
    detail: 'Strict engineering rigor, zero technical debt',
  },
  {
    icon: TrendingUp,
    value: '$180M+',
    label: 'Client Value Generated',
    detail: 'Across venture-backed startups & iconic enterprises',
  },
]

export default function NarrativeSection({ T, L }: Props) {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  return (
    <section
      id="about"
      style={{
        background: T.siteBg,
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.5s',
        padding: 'clamp(100px, 12vw, 180px) clamp(24px, 5vw, 80px)',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70vw',
          height: '400px',
          background: `radial-gradient(ellipse at center, ${L ? 'rgba(178,148,62,0.06)' : 'rgba(201,168,76,0.07)'} 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header Tag */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
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
              01 / The Manifesto
            </span>
          </div>
        </Reveal>

        {/* Main Statement */}
        <Reveal delay={0.08}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(32px, 4.8vw, 68px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: T.text,
              maxWidth: 1050,
              margin: '0 0 32px',
              transition: 'color 0.5s',
            }}
          >
            We engineer digital monuments for brands that{' '}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: T.gold,
              }}
            >
              refuse to blend in.
            </span>
          </h2>
        </Reveal>

        {/* Narrative Paragraphs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(24px, 4vw, 56px)',
            marginBottom: 'clamp(64px, 8vw, 100px)',
          }}
        >
          <Reveal delay={0.12}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(16px, 1.2vw, 19px)',
                fontWeight: 300,
                lineHeight: 1.75,
                color: T.sub,
                margin: 0,
                transition: 'color 0.5s',
              }}
            >
              Aether is a boutique digital design and creative engineering studio. We operate at the intersection of
              brutalist clarity and cinematic motion—crafting bespoke platforms, immersive spatial experiences, and
              resilient design systems.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(16px, 1.2vw, 19px)',
                fontWeight: 300,
                lineHeight: 1.75,
                color: T.sub,
                margin: 0,
                transition: 'color 0.5s',
              }}
            >
              We believe a studio’s output should never look like an algorithm made it. Every transition, shader, and
              typographic anchor is authored with obsessive human intention to evoke feeling, demand attention, and
              drive tangible business value.
            </p>
          </Reveal>
        </div>

        {/* Metric Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
          }}
        >
          {STATS.map((s, i) => {
            const isHov = hoveredStat === i
            const Icon = s.icon

            return (
              <Reveal key={s.label} delay={0.1 + i * 0.05}>
                <motion.div
                  onHoverStart={() => setHoveredStat(i)}
                  onHoverEnd={() => setHoveredStat(null)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{
                    background: isHov
                      ? L
                        ? 'rgba(255,255,255,0.95)'
                        : 'rgba(28,24,16,0.95)'
                      : L
                      ? 'rgba(255,255,255,0.6)'
                      : 'rgba(18,15,10,0.7)',
                    border: `1px solid ${isHov ? T.goldBdr : T.cardBdr}`,
                    borderRadius: 14,
                    padding: '28px 24px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: isHov ? T.shadowMd : T.shadow,
                    transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
                  }}
                >
                  {/* Subtle top indicator */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: T.gold,
                      opacity: isHov ? 1 : 0,
                      transition: 'opacity 0.3s',
                    }}
                  />

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: isHov ? T.goldBg : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${isHov ? T.goldBdr : 'rgba(255,255,255,0.06)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.3s, border-color 0.3s',
                      }}
                    >
                      <Icon size={18} color={T.gold} strokeWidth={1.8} />
                    </div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        color: T.muted,
                      }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(28px, 3.2vw, 42px)',
                      letterSpacing: '-0.03em',
                      color: T.text,
                      lineHeight: 1,
                      marginBottom: 8,
                      transition: 'color 0.5s',
                    }}
                  >
                    {s.value}
                  </div>

                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      color: T.gold,
                      marginBottom: 6,
                    }}
                  >
                    {s.label}
                  </div>

                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 12,
                      fontWeight: 300,
                      lineHeight: 1.5,
                      color: T.sub,
                      transition: 'color 0.5s',
                    }}
                  >
                    {s.detail}
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
