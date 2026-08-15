import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Compass, BarChart2, Layers } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T: any
  L: boolean
}

const SERVICES = [
  {
    icon: Sparkles,
    title: 'AI & Spatial Strategy',
    desc: 'We identify high-impact opportunities for spatial and generative AI integration directly into your product workflows.',
  },
  {
    icon: Compass,
    title: 'Creative Direction',
    desc: 'We architect distinct visual systems and brand guidelines that drive customer loyalty and set category standards.',
  },
  {
    icon: BarChart2,
    title: 'Data & Architecture',
    desc: 'We turn complex technical systems into sub-second interfaces using modern full-stack frameworks and edge compute.',
  },
]

export default function WorkShowcase({ T, L }: Props) {
  return (
    <section
      id="services"
      style={{
        background: '#f9fafb',
        position: 'relative',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
        borderTop: '1px solid #f3f4f6',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto clamp(40px, 6vw, 64px)' }}>
          <Reveal>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#6b7280',
                marginBottom: 16,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#6b7280' }} />
              Services
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                color: '#111827',
                margin: '0 0 16px',
              }}
            >
              Comprehensive consulting and intelligent innovation
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 16,
                fontWeight: 300,
                color: '#6b7280',
                lineHeight: 1.65,
                margin: '0 0 32px',
              }}
            >
              Whether you’re optimizing today or building for tomorrow, we help you move faster with absolute confidence.
            </p>
          </Reveal>

          {/* Centered Pill Button with Lime Circle */}
          <Reveal delay={0.15}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: '#111827',
                color: '#ffffff',
                padding: '8px 8px 8px 24px',
                borderRadius: 100,
                textDecoration: 'none',
                fontFamily: "'Syne', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.04em',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              }}
            >
              GET STARTED
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background: '#bef264',
                  color: '#111827',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </motion.a>
          </Reveal>
        </div>

        {/* 4-Column Service Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 20,
          }}
        >
          {SERVICES.map((s, idx) => {
            const Icon = s.icon

            return (
              <Reveal key={s.title} delay={0.1 + idx * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: 20,
                    padding: 28,
                    height: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: '#bef264',
                      color: '#14532d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} strokeWidth={2.2} />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: 20,
                        color: '#111827',
                        margin: '0 0 10px',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 13,
                        fontWeight: 300,
                        lineHeight: 1.6,
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

          {/* 4th Column: Team Collaboration Photo */}
          <Reveal delay={0.25}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                height: 280,
                position: 'relative',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Studio Collaboration"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
