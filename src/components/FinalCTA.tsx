import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T: any
  L: boolean
}

export default function FinalCTA({ T, L }: Props) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSent(true)
  }

  return (
    <>
      {/* End-to-End Solution Section (from Reference 2 - Artboard) */}
      <section
        id="contact"
        style={{
          background: '#ffffff',
          position: 'relative',
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
          borderTop: '1px solid #f3f4f6',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto clamp(48px, 6vw, 64px)' }}>
            <Reveal>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(32px, 4.5vw, 54px)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.15,
                  color: '#111827',
                  margin: '0 0 16px',
                }}
              >
                Unleash your creativity with Aether Studio’s end-to-end design solution
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 16,
                  fontWeight: 300,
                  color: '#6b7280',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Start from scratch or partner with us to transform your vision into an award-winning digital experience.
              </p>
            </Reveal>
          </div>

          {/* Clean Contact Form Container */}
          <div style={{ maxWidth: 580, margin: '0 auto' }}>
            <Reveal delay={0.1}>
              <div
                style={{
                  background: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: 24,
                  padding: 'clamp(28px, 4vw, 40px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ textAlign: 'center', padding: '36px 0' }}
                    >
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: '50%',
                          background: '#10b981',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 16px',
                        }}
                      >
                        <Check size={26} strokeWidth={2.5} />
                      </div>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 22, color: '#111827', marginBottom: 8 }}>
                        Message Sent Successfully
                      </h3>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#6b7280', margin: 0 }}>
                        We’ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        <div>
                          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: "'Outfit'" }}>
                            Your Name
                          </label>
                          <input
                            required
                            placeholder="Alex Morgan"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              borderRadius: 12,
                              border: '1px solid #d1d5db',
                              fontSize: 14,
                              fontFamily: "'Outfit'",
                              outline: 'none',
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: "'Outfit'" }}>
                            Work Email
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="alex@company.com"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              borderRadius: 12,
                              border: '1px solid #d1d5db',
                              fontSize: 14,
                              fontFamily: "'Outfit'",
                              outline: 'none',
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: "'Outfit'" }}>
                          Project Details
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Tell us what you are building..."
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: 12,
                            border: '1px solid #d1d5db',
                            fontSize: 14,
                            fontFamily: "'Outfit'",
                            outline: 'none',
                            boxSizing: 'border-box',
                            resize: 'vertical',
                          }}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 8,
                          background: '#111827',
                          color: '#ffffff',
                          padding: '14px 28px',
                          borderRadius: 100,
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: "'Syne', sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          marginTop: 4,
                          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                        }}
                      >
                        Try Aether Studio for Free <ArrowRight size={15} strokeWidth={2.2} />
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Clean Multi-Column Editorial Footer (from Reference 2 - Artboard Studio) */}
      <footer
        style={{
          background: '#f9fafb',
          borderTop: '1px solid #e5e7eb',
          padding: 'clamp(60px, 8vw, 90px) clamp(24px, 5vw, 80px) 32px',
          color: '#111827',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 40,
              paddingBottom: 48,
              borderBottom: '1px solid #e5e7eb',
              marginBottom: 32,
            }}
          >
            {/* Column 1: Brand Info */}
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: '#111827' }}>
                  ✦ Aether
                </span>
              </div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6b7280', lineHeight: 1.6, maxWidth: 280 }}>
                Created by designers for designers. Building high-performance digital products and spatial experiences.
              </p>
            </div>

            {/* Column 2: Company */}
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#111827', marginBottom: 16 }}>
                Company
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6b7280' }}>
                <a href="#about" style={{ color: '#6b7280', textDecoration: 'none' }}>About</a>
                <a href="#services" style={{ color: '#6b7280', textDecoration: 'none' }}>Services</a>
                <a href="#contact" style={{ color: '#6b7280', textDecoration: 'none' }}>Contact</a>
              </div>
            </div>

            {/* Column 3: Product */}
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#111827', marginBottom: 16 }}>
                Product
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6b7280' }}>
                <span>Creative Automation</span>
                <span>Motion Design</span>
                <span>Design System & Tokens</span>
                <span>Spatial OS Lab</span>
              </div>
            </div>

            {/* Column 4: Content Library */}
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#111827', marginBottom: 16 }}>
                Content Library
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6b7280' }}>
                <span>Mockups</span>
                <span>Motion Templates</span>
                <span>Social Media & Banner Ads</span>
                <span>Learn & Tutorials</span>
              </div>
            </div>
          </div>

          {/* Bottom Copyright and Locations */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 16,
              fontSize: 12,
              color: '#9ca3af',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <div>
              Aether Studio Inc. · London Office: W1F 8FL · Zurich Office: 8001 Zürich
            </div>
            <div>
              © 2026 Aether Studio Inc. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
