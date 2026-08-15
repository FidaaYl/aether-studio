import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T: any
  L: boolean
}

const CLIENT_LOGOS = [
  'CHRONOS SPATIAL',
  'VELOCE AUTOMOTIVE',
  'NEXUS PROTOCOL',
  'SOLIS ACOUSTICS',
  'MONOLITH VENTURES',
  'AURA HARDWARE',
]

const TESTIMONIALS = [
  {
    quote:
      'Aether took our spatial product from an ambitious concept to a culturally defining digital flagship. The conversion rate jumped by 240% in our first quarter post-launch.',
    author: 'Julian Thorne',
    role: 'Founder & CEO',
    company: 'Chronos Spatial',
    year: '2025 Commission',
  },
  {
    quote:
      'The sheer engineering rigor and visual obsession Aether brings to the table is unmatched. They delivered a ray-traced 3D configurator with sub-second loading on mobile.',
    author: 'Elena Rostova',
    role: 'VP of Digital Experience',
    company: 'Veloce Hypercars',
    year: '2025 Commission',
  },
  {
    quote:
      'They do not build standard templates. Aether constructs bespoke digital architecture that elevates your entire brand perception to institutional tier.',
    author: 'Dr. Marcus Vance',
    role: 'Managing Partner',
    company: 'Nexus Capital',
    year: '2024 Commission',
  },
]

export default function Testimonials({ T, L }: Props) {
  const [currentIdx, setCurrentIdx] = useState<number>(0)

  const nextTestimonial = () => {
    setCurrentIdx(prev => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentIdx(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section
      style={{
        background: T.siteBg,
        position: 'relative',
        transition: 'background 0.5s',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
        borderTop: `1px solid ${T.line}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section Header */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
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
              04 / Client Impact & Trust
            </span>
          </div>
        </Reveal>

        {/* Client Logos Marquee */}
        <Reveal delay={0.05}>
          <div
            style={{
              padding: '24px 0 clamp(48px, 6vw, 72px)',
              borderBottom: `1px solid ${T.line}`,
              marginBottom: 'clamp(48px, 6vw, 72px)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '20px 40px',
            }}
          >
            {CLIENT_LOGOS.map((name, i) => (
              <span
                key={name}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(12px, 1.2vw, 15px)',
                  letterSpacing: '0.12em',
                  color: T.sub,
                  opacity: 0.5,
                  transition: 'opacity 0.3s, color 0.3s',
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Featured Testimonial Card */}
        <Reveal delay={0.1}>
          <div
            style={{
              background: L ? 'rgba(255,255,255,0.9)' : 'rgba(22,18,12,0.9)',
              border: `1px solid ${T.goldBdr}`,
              borderRadius: 20,
              padding: 'clamp(32px, 5vw, 64px)',
              position: 'relative',
              boxShadow: T.shadowMd,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: T.goldBg,
                  border: `1px solid ${T.goldBdr}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Quote size={20} color={T.gold} />
              </div>

              {/* Slider Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: T.muted,
                    marginRight: 8,
                  }}
                >
                  0{currentIdx + 1} / 0{TESTIMONIALS.length}
                </span>

                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'transparent',
                    border: `1px solid ${T.cardBdr}`,
                    color: T.text,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ChevronLeft size={16} />
                </motion.button>

                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: T.goldBg,
                    border: `1px solid ${T.goldBdr}`,
                    color: T.gold,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </div>

            {/* Quote Body */}
            <motion.p
              key={currentIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(20px, 2.6vw, 32px)',
                fontWeight: 300,
                lineHeight: 1.45,
                color: T.text,
                margin: '0 0 36px',
                letterSpacing: '-0.01em',
              }}
            >
              “{TESTIMONIALS[currentIdx].quote}”
            </motion.p>

            {/* Author Footer */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: 16,
                paddingTop: 24,
                borderTop: `1px solid ${T.line}`,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: T.text,
                    marginBottom: 4,
                  }}
                >
                  {TESTIMONIALS[currentIdx].author}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13,
                    color: T.sub,
                  }}
                >
                  {TESTIMONIALS[currentIdx].role}, <strong style={{ color: T.gold }}>{TESTIMONIALS[currentIdx].company}</strong>
                </div>
              </div>

              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: T.muted,
                  letterSpacing: '0.08em',
                }}
              >
                {TESTIMONIALS[currentIdx].year}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
