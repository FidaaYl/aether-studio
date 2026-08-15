import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T: any
  L: boolean
}

const STATS = [
  {
    metric: '40%',
    title: 'Faster Delivery',
    desc: 'Automated design tokens and component systems reduce development cycles.',
  },
  {
    metric: '3x',
    title: 'Team Alignment',
    desc: 'Real-time design audits and instant staging previews for all stakeholders.',
  },
  {
    metric: '100%',
    title: 'Real-Time Insights',
    desc: 'Full visibility across sprint velocity, user dwell times, and web vitals.',
  },
  {
    metric: '10k+',
    title: 'Active Users',
    desc: 'Across high-growth startups, enterprise brands, and creative agencies.',
  },
]

export default function Testimonials({ T, L }: Props) {
  return (
    <section
      style={{
        background: '#f9fafb',
        position: 'relative',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px) 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
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
              Why Teams Choose Aether
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
              Trusted by teams to build and scale more efficiently. Designed to help teams do their best work.
            </p>
          </Reveal>
        </div>

        {/* 4 Stat Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
            marginBottom: 'clamp(80px, 10vw, 120px)',
          }}
        >
          {STATS.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 20,
                  padding: 24,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: 200,
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: 38,
                      color: '#111827',
                      lineHeight: 1,
                    }}
                  >
                    {s.metric}
                  </span>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#7c3aed',
                      display: 'block',
                    }}
                  />
                </div>

                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600, color: '#111827', marginBottom: 4 }}>
                    {s.title}
                  </div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#6b7280', lineHeight: 1.5 }}>
                    {s.desc}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full-Width Lavender Partner Banner (from Reference 2 - Artboard) */}
      <div
        style={{
          background: '#ede9fe',
          padding: 'clamp(60px, 8vw, 90px) clamp(24px, 5vw, 80px)',
          textAlign: 'center',
          color: '#1e1b4b',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Reveal>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(20px, 2.5vw, 32px)',
                letterSpacing: '-0.02em',
                margin: '0 0 32px',
                color: '#1e1b4b',
              }}
            >
              Join the world’s best design and creative professionals
            </h3>
          </Reveal>

          {/* Logos Row */}
          <Reveal delay={0.05}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '24px 44px',
                alignItems: 'center',
                marginBottom: 36,
                opacity: 0.85,
              }}
            >
              {['Dropbox', 'Microsoft', 'Klarna', 'Squarespace', 'Shopify', 'Zapier', 'GoDaddy', 'Sephora'].map(
                name => (
                  <span
                    key={name}
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: 'clamp(14px, 1.4vw, 17px)',
                      color: '#1e1b4b',
                    }}
                  >
                    {name}
                  </span>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#111827',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: 100,
                textDecoration: 'none',
                fontFamily: "'Syne', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}
            >
              Start Free Today <ArrowUpRight size={15} strokeWidth={2.4} />
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
