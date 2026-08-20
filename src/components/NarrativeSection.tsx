import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowUpRight, BarChart3, CheckCircle2 } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T: any
  L: boolean
}

export default function NarrativeSection({ T, L }: Props) {
  return (
    <section
      id="about"
      style={{
        background: 'linear-gradient(180deg, #faf9f5 0%, #ffffff 220px, #ffffff calc(100% - 240px), #faf9f5 100%)',
        position: 'relative',
        padding: 'clamp(40px, 4.5vw, 60px) clamp(24px, 5vw, 80px) clamp(60px, 6vw, 90px)',
        color: '#111827',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top Logo Bar */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px 40px',
              paddingBottom: 'clamp(24px, 3vw, 36px)',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              marginBottom: 'clamp(32px, 4vw, 48px)',
              opacity: 0.5,
            }}
          >
            {['Dropbox', 'Microsoft', 'Klarna', 'Squarespace', 'Shopify', 'Zapier', 'Sephora'].map(logo => (
              <span
                key={logo}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.4vw, 18px)',
                  letterSpacing: '-0.02em',
                  color: '#1f2937',
                }}
              >
                {logo}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Section Heading with Inline Badges */}
        <div style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto clamp(48px, 6vw, 72px)' }}>
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
              About Us
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                color: '#111827',
                margin: 0,
              }}
            >
              A global design partner dedicated to building{' '}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#e0f2fe',
                  color: '#0284c7',
                  verticalAlign: 'middle',
                  margin: '0 4px',
                }}
              >
                ✦
              </span>{' '}
              smarter and{' '}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#dcfce7',
                  color: '#16a34a',
                  verticalAlign: 'middle',
                  margin: '0 4px',
                }}
              >
                ●
              </span>{' '}
              more adaptive
            </h2>
          </Reveal>
        </div>

        {/* 4-Card Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 20,
          }}
        >
          {/* Card 1: Blue Card with Team Photo & 120+ Pill */}
          <div style={{ gridColumn: 'span 4' }}>
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: '#2563eb',
                  borderRadius: 24,
                  padding: 24,
                  height: 340,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(37,99,235,0.15)',
                }}
              >
                {/* Card Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: '#ffffff' }}>
                    AETHER
                  </span>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    <BarChart3 size={14} />
                  </div>
                </div>

                {/* Center Image */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Team"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    mixBlendMode: 'luminosity',
                    opacity: 0.85,
                  }}
                />

                {/* Bottom Overlay Pill */}
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: 18,
                    padding: '16px 20px',
                    zIndex: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: 32,
                      color: '#111827',
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    120+
                  </div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#6b7280', lineHeight: 1.4 }}>
                    Collaborating with leading AI and global technology teams.
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Card 2: White 100% Social Proof Card */}
          <div style={{ gridColumn: 'span 4' }}>
            <Reveal delay={0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: 24,
                  padding: '28px 24px',
                  height: 340,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 12,
                      fontWeight: 500,
                      color: '#6b7280',
                      marginBottom: 8,
                    }}
                  >
                    Commitment to measurable impact
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: 44,
                      color: '#111827',
                      lineHeight: 1,
                    }}
                  >
                    100%
                  </div>
                </div>

                <div>
                  {/* Overlapping Avatars */}
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 14 }}>
                    {[
                      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
                      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
                      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
                    ].map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt="Avatar"
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          border: '2px solid #ffffff',
                          marginLeft: idx > 0 ? -10 : 0,
                          objectFit: 'cover',
                        }}
                      />
                    ))}
                  </div>

                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13,
                      color: '#4b5563',
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    “Their creative architecture completely reshaped how we launch digital products. It is fast,
                    intelligent, and seamless.”
                  </p>
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Column 3: Lime Green 520k+ Card & Dark Continents Pill */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Top Lime Green Card */}
            <Reveal delay={0.2}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: '#bef264',
                  borderRadius: 22,
                  padding: '24px 22px',
                  height: 220,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#365314',
                      marginBottom: 6,
                    }}
                  >
                    Data & Interactions
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: 40,
                      color: '#14532d',
                      lineHeight: 1,
                    }}
                  >
                    520k+
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#365314',
                    lineHeight: 1.4,
                  }}
                >
                  Monthly user sessions powered across our client deployments.
                </div>
              </motion.div>
            </Reveal>

            {/* Bottom Dark Pill Card */}
            <Reveal delay={0.25}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: '#111827',
                  borderRadius: 20,
                  padding: '18px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#ffffff',
                }}
              >
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, color: '#9ca3af' }}>
                  Global Reach
                </span>
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 28,
                    color: '#ffffff',
                  }}
                >
                  20+ Continents & Hubs
                </span>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
