import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Mail, Clock, MapPin, Sparkles } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T: any
  L: boolean
}

const PROJECT_TYPES = [
  'Web Experience & 3D',
  'Mobile Flagship App',
  'Brand & Spatial Identity',
  'Design System & Tokens',
]

const BUDGET_TIERS = ['$15,000 — $30,000', '$30,000 — $60,000', '$60,000+']

export default function FinalCTA({ T, L }: Props) {
  const [selectedType, setSelectedType] = useState<string>(PROJECT_TYPES[0])
  const [selectedBudget, setSelectedBudget] = useState<string>(BUDGET_TIERS[1])
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSent(true)
  }

  const fieldStyle = (name: string) => ({
    width: '100%',
    padding: '16px 18px',
    background: L ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${focusedField === name ? T.gold : T.cardBdr}`,
    borderRadius: 12,
    fontFamily: "'Outfit', sans-serif",
    fontSize: 14,
    color: T.text,
    outline: 'none',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.3s, background 0.3s',
  })

  return (
    <>
      <section
        id="contact"
        style={{
          background: T.siteBg,
          position: 'relative',
          transition: 'background 0.5s',
          padding: 'clamp(100px, 12vw, 180px) clamp(24px, 5vw, 80px) clamp(60px, 8vw, 100px)',
          borderTop: `1px solid ${T.line}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'start',
            }}
          >
            {/* Left: Studio Intent */}
            <div style={{ gridColumn: 'span 5' }}>
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
                    05 / Initiate Engagement
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(32px, 4vw, 52px)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1.1,
                    color: T.text,
                    margin: '0 0 24px',
                    transition: 'color 0.5s',
                  }}
                >
                  Let’s build something{' '}
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontStyle: 'italic',
                      fontWeight: 400,
                      color: T.gold,
                    }}
                  >
                    enduring.
                  </span>
                </h2>

                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 15,
                    fontWeight: 300,
                    color: T.sub,
                    lineHeight: 1.75,
                    margin: '0 0 40px',
                    transition: 'color 0.5s',
                  }}
                >
                  We accept a strictly limited number of commissions per quarter to ensure uncompromised quality and
                  executive-level focus on every project.
                </p>

                {/* Quick Info Badges */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: T.goldBg,
                        border: `1px solid ${T.goldBdr}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Mail size={14} color={T.gold} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: T.muted }}>Direct Channel</div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 500, color: T.text }}>
                        direct@aether-studio.design
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: T.goldBg,
                        border: `1px solid ${T.goldBdr}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Clock size={14} color={T.gold} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: T.muted }}>Response Window</div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 500, color: T.text }}>
                        Within 12 business hours
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: T.goldBg,
                        border: `1px solid ${T.goldBdr}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <MapPin size={14} color={T.gold} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: T.muted }}>Studio Locations</div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 500, color: T.text }}>
                        London · Zurich · Global Remote
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Interactive Commission Inquiry Suite */}
            <div style={{ gridColumn: 'span 7' }}>
              <Reveal delay={0.08}>
                <div
                  style={{
                    background: L ? 'rgba(255,255,255,0.9)' : 'rgba(22,18,12,0.9)',
                    border: `1px solid ${T.goldBdr}`,
                    borderRadius: 20,
                    padding: 'clamp(28px, 4vw, 44px)',
                    boxShadow: T.shadowMd,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.div
                        key="sent"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35 }}
                        style={{ textAlign: 'center', padding: '48px 16px' }}
                      >
                        <div
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            background: T.btn,
                            margin: '0 auto 24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: L ? '#fff' : '#0c0a07',
                          }}
                        >
                          <Check size={28} strokeWidth={2.5} />
                        </div>
                        <h3
                          style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 700,
                            fontSize: 26,
                            color: T.text,
                            marginBottom: 10,
                          }}
                        >
                          Commission Request Received
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 15,
                            fontWeight: 300,
                            color: T.sub,
                            maxWidth: 420,
                            margin: '0 auto',
                            lineHeight: 1.6,
                          }}
                        >
                          Our partners will review your project requirements and respond with a customized proposal within 12
                          hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        {/* Scope Selector */}
                        <div>
                          <label
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: 12,
                              fontWeight: 600,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: T.gold,
                              display: 'block',
                              marginBottom: 10,
                            }}
                          >
                            Project Scope
                          </label>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {PROJECT_TYPES.map(type => {
                              const active = selectedType === type
                              return (
                                <button
                                  key={type}
                                  type="button"
                                  onClick={() => setSelectedType(type)}
                                  style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 12,
                                    fontWeight: 500,
                                    padding: '8px 14px',
                                    borderRadius: 100,
                                    cursor: 'pointer',
                                    background: active ? T.goldBg : 'transparent',
                                    border: `1px solid ${active ? T.gold : T.cardBdr}`,
                                    color: active ? T.gold : T.sub,
                                    transition: 'all 0.25s',
                                  }}
                                >
                                  {type}
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Budget Selector */}
                        <div>
                          <label
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: 12,
                              fontWeight: 600,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: T.gold,
                              display: 'block',
                              marginBottom: 10,
                            }}
                          >
                            Estimated Budget Tier
                          </label>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {BUDGET_TIERS.map(tier => {
                              const active = selectedBudget === tier
                              return (
                                <button
                                  key={tier}
                                  type="button"
                                  onClick={() => setSelectedBudget(tier)}
                                  style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 12,
                                    fontWeight: 500,
                                    padding: '8px 14px',
                                    borderRadius: 100,
                                    cursor: 'pointer',
                                    background: active ? T.goldBg : 'transparent',
                                    border: `1px solid ${active ? T.gold : T.cardBdr}`,
                                    color: active ? T.gold : T.sub,
                                    transition: 'all 0.25s',
                                  }}
                                >
                                  {tier}
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Text Inputs */}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: 12,
                          }}
                        >
                          <div>
                            <input
                              required
                              placeholder="Your Name / Title"
                              style={fieldStyle('name')}
                              value={form.name}
                              onChange={e => setForm({ ...form, name: e.target.value })}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                            />
                          </div>

                          <div>
                            <input
                              required
                              type="email"
                              placeholder="Your Work Email"
                              style={fieldStyle('email')}
                              value={form.email}
                              onChange={e => setForm({ ...form, email: e.target.value })}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                            />
                          </div>
                        </div>

                        <div>
                          <textarea
                            rows={3}
                            placeholder="Tell us about the vision, timeline, and key milestones..."
                            style={{ ...fieldStyle('message'), resize: 'vertical' }}
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                          />
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 10,
                            fontFamily: "'Syne', sans-serif",
                            fontSize: 15,
                            fontWeight: 700,
                            color: L ? '#fff' : '#0c0a07',
                            background: T.btn,
                            border: 'none',
                            borderRadius: 100,
                            padding: '16px 36px',
                            cursor: 'pointer',
                            boxShadow: `0 8px 30px rgba(201,168,76,${L ? 0.2 : 0.35})`,
                            marginTop: 4,
                          }}
                        >
                          Submit Commission Brief <ArrowRight size={16} strokeWidth={2.4} />
                        </motion.button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Studio Footer */}
      <footer
        style={{
          borderTop: `1px solid ${T.line}`,
          background: T.siteBg,
          transition: 'all 0.5s',
          padding: '32px clamp(24px, 5vw, 80px)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${T.gold}, #c07030)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                color: '#0c0a07',
                fontWeight: 700,
              }}
            >
              ✦
            </div>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: T.text,
                letterSpacing: '-0.02em',
              }}
            >
              Aether
            </span>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 300,
                fontSize: 15,
                color: T.muted,
              }}
            >
              Studio
            </span>
          </div>

          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: T.muted,
              letterSpacing: '0.04em',
            }}
          >
            © 2026 AETHER STUDIO INC. ALL RIGHTS RESERVED.
          </span>

          <div style={{ display: 'flex', gap: 28 }}>
            {['Selected Works', 'Capabilities', 'Direct Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase().includes('work') ? 'work' : item.toLowerCase().includes('cap') ? 'services' : 'contact'}`}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 12,
                  color: T.muted,
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = T.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = T.muted)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
