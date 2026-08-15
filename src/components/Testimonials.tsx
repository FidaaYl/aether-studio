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

const PARTNER_LOGOS = [
  {
    name: 'Microsoft',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <rect x="1" y="1" width="8.5" height="8.5" fill="#f25022" />
        <rect x="10.5" y="1" width="8.5" height="8.5" fill="#7fba00" />
        <rect x="1" y="10.5" width="8.5" height="8.5" fill="#00a4ef" />
        <rect x="10.5" y="10.5" width="8.5" height="8.5" fill="#ffb900" />
      </svg>
    ),
  },
  {
    name: 'Dropbox',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0061ff">
        <path d="M6 2L0 6L6 10L12 6L6 2ZM18 2L12 6L18 10L24 6L18 2ZM0 14L6 18L12 14L6 10L0 14ZM24 14L18 10L12 14L18 18L24 14ZM6 19.5L12 15.5L18 19.5L12 23.5L6 19.5Z" />
      </svg>
    ),
  },
  {
    name: 'Klarna',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#ffb3c7" />
        <path d="M8 7V17M12 7V17M12 12L16 7M12 12L16 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Squarespace',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 12L12 22L22 12L12 2ZM8 12L12 8L16 12L12 16L8 12Z" fill="#111827" />
      </svg>
    ),
  },
  {
    name: 'Shopify',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#95bf47">
        <path d="M19.5 6L16.5 2H7.5L4.5 6L2 22H22L19.5 6ZM12 5C13.1 5 14 5.9 14 7H10C10 5.9 10.9 5 12 5Z" />
      </svg>
    ),
  },
  {
    name: 'Zapier',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff4a00">
        <path d="M12 2L14 9H21L15 13L18 20L12 15L6 20L9 13L3 9H10L12 2Z" />
      </svg>
    ),
  },
]

export default function Testimonials({ T, L }: Props) {
  return (
    <section
      style={{
        background: '#ffffff',
        position: 'relative',
        padding: 'clamp(80px, 10vw, 140px) 0 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
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
                  background: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: 20,
                  padding: 24,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
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
                      background: '#10b981',
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

      {/* Harmonized Off-White Brand Proof Banner (Clean Studio Palette) */}
      <div
        style={{
          background: '#faf9f5',
          borderTop: '1px solid #ede8dc',
          borderBottom: '1px solid #ede8dc',
          padding: 'clamp(60px, 8vw, 90px) clamp(24px, 5vw, 80px)',
          textAlign: 'center',
          color: '#111827',
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
                margin: '0 0 36px',
                color: '#111827',
              }}
            >
              Join the world’s best design and creative professionals
            </h3>
          </Reveal>

          {/* Real Brand Icons & Names Row */}
          <Reveal delay={0.05}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '28px 48px',
                alignItems: 'center',
                marginBottom: 40,
              }}
            >
              {PARTNER_LOGOS.map(partner => (
                <div
                  key={partner.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: '#ffffff',
                    border: '1px solid #e5e7eb',
                    padding: '8px 18px',
                    borderRadius: 100,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  }}
                >
                  {partner.icon}
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: '#1f2937',
                    }}
                  >
                    {partner.name}
                  </span>
                </div>
              ))}
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
                background: '#bef264',
                color: '#14532d',
                padding: '12px 28px',
                borderRadius: 100,
                textDecoration: 'none',
                fontFamily: "'Syne', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                boxShadow: '0 4px 20px rgba(190,242,100,0.35)',
              }}
            >
              Start Free Today <ArrowUpRight size={15} strokeWidth={2.5} />
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
