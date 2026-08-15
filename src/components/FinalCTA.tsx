import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, MapPin, Mail, Phone, Building2 } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T: any
  L: boolean
}

export default function FinalCTA({ T, L }: Props) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    business: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.email) return
    setSent(true)
  }

  const inputStyle = (name: string) => ({
    width: '100%',
    padding: '14px 16px',
    borderRadius: 12,
    border: `1px solid ${focused === name ? '#0284c7' : '#e5e7eb'}`,
    background: '#ffffff',
    fontSize: 14,
    fontFamily: "'Outfit', sans-serif",
    color: '#111827',
    outline: 'none',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.25s',
  })

  return (
    <>
      {/* ✦ 1. SKY BLUE "GET IN TOUCH WITH US" HERO CONTACT CARD (Matching Reference 1) */}
      <section
        id="contact"
        style={{
          background: 'linear-gradient(180deg, #0284c7 0%, #0ea5e9 60%, #38bdf8 100%)',
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
          position: 'relative',
          color: '#ffffff',
          overflow: 'hidden',
        }}
      >
        {/* Soft Stylized Ambient Background Orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '50vw',
            height: '50vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Heading & Description */}
            <div style={{ gridColumn: 'span 5' }}>
              <Reveal>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#bef264',
                    textTransform: 'uppercase',
                    marginBottom: 20,
                  }}
                >
                  ( CONTACT )
                </div>

                <h2
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(38px, 5.2vw, 64px)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1.08,
                    color: '#ffffff',
                    margin: '0 0 20px',
                    textShadow: '0 2px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  Get in Touch With Us
                </h2>

                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(15px, 1.2vw, 18px)',
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: 'rgba(255,255,255,0.92)',
                    margin: '0 0 36px',
                  }}
                >
                  We would love to hear from you. Whether you have a question, feedback, or want to explore working
                  together, our team is here to listen.
                </p>

                {/* Quick Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontFamily: "'Outfit'" }}>
                    <Mail size={16} color="#bef264" />
                    <span>hello@aether-studio.com</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontFamily: "'Outfit'" }}>
                    <Phone size={16} color="#bef264" />
                    <span>+1 (415) 890-4200</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Sleek Floating Form Card (Matching Reference 1) */}
            <div style={{ gridColumn: 'span 7' }}>
              <Reveal delay={0.1}>
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: 24,
                    padding: 'clamp(28px, 4vw, 44px)',
                    boxShadow: '0 24px 60px rgba(0,0,0,0.15)',
                    color: '#111827',
                  }}
                >
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.div
                        key="sent"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ textAlign: 'center', padding: '48px 16px' }}
                      >
                        <div
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            background: '#bef264',
                            color: '#14532d',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 20px',
                          }}
                        >
                          <Check size={32} strokeWidth={2.5} />
                        </div>
                        <h3
                          style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 800,
                            fontSize: 24,
                            color: '#111827',
                            marginBottom: 8,
                          }}
                        >
                          Thank You for Reaching Out!
                        </h3>
                        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: '#6b7280', margin: 0 }}>
                          We have received your message and will respond within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {/* Row 1: First Name & Last Name */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                          <div>
                            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: "'Outfit'" }}>
                              First Name
                            </label>
                            <input
                              required
                              placeholder="Your first name"
                              style={inputStyle('firstName')}
                              value={form.firstName}
                              onChange={e => setForm({ ...form, firstName: e.target.value })}
                              onFocus={() => setFocused('firstName')}
                              onBlur={() => setFocused(null)}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: "'Outfit'" }}>
                              Last Name
                            </label>
                            <input
                              placeholder="Your last name"
                              style={inputStyle('lastName')}
                              value={form.lastName}
                              onChange={e => setForm({ ...form, lastName: e.target.value })}
                              onFocus={() => setFocused('lastName')}
                              onBlur={() => setFocused(null)}
                            />
                          </div>
                        </div>

                        {/* Row 2: Phone & Email */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                          <div>
                            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: "'Outfit'" }}>
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              placeholder="Your phone number"
                              style={inputStyle('phone')}
                              value={form.phone}
                              onChange={e => setForm({ ...form, phone: e.target.value })}
                              onFocus={() => setFocused('phone')}
                              onBlur={() => setFocused(null)}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: "'Outfit'" }}>
                              Email Address
                            </label>
                            <input
                              required
                              type="email"
                              placeholder="Your email address"
                              style={inputStyle('email')}
                              value={form.email}
                              onChange={e => setForm({ ...form, email: e.target.value })}
                              onFocus={() => setFocused('email')}
                              onBlur={() => setFocused(null)}
                            />
                          </div>
                        </div>

                        {/* Row 3: Business Name */}
                        <div>
                          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: "'Outfit'" }}>
                            Business Name
                          </label>
                          <input
                            placeholder="Your business name"
                            style={inputStyle('business')}
                            value={form.business}
                            onChange={e => setForm({ ...form, business: e.target.value })}
                            onFocus={() => setFocused('business')}
                            onBlur={() => setFocused(null)}
                          />
                        </div>

                        {/* Row 4: Message */}
                        <div>
                          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: "'Outfit'" }}>
                            Message
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Write a message..."
                            style={{ ...inputStyle('message'), resize: 'vertical' }}
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                            onFocus={() => setFocused('message')}
                            onBlur={() => setFocused(null)}
                          />
                        </div>

                        {/* Submit Button (Electric Lime Green #bef264) */}
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            width: '100%',
                            padding: '16px',
                            borderRadius: 14,
                            border: 'none',
                            background: '#bef264',
                            color: '#14532d',
                            fontFamily: "'Syne', sans-serif",
                            fontSize: 16,
                            fontWeight: 700,
                            cursor: 'pointer',
                            boxShadow: '0 4px 16px rgba(190,242,100,0.4)',
                            marginTop: 6,
                          }}
                        >
                          Submit
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

      {/* ✦ 2. "OUR OFFICES" SECTION (Matching Reference 1) */}
      <section
        style={{
          background: '#ffffff',
          padding: 'clamp(60px, 8vw, 90px) clamp(24px, 5vw, 80px)',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 32,
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  color: '#111827',
                  margin: '0 0 10px',
                }}
              >
                Our Offices
              </h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: '#6b7280', margin: 0 }}>
                If you are nearby, you are always welcome to visit us.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 'clamp(32px, 5vw, 64px)', flexWrap: 'wrap' }}>
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#0284c7',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  CALIFORNIA
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    color: '#111827',
                    lineHeight: 1.3,
                  }}
                >
                  San Francisco, CA 94107,
                  <br />
                  United States
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#0284c7',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  UNITED KINGDOM
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    color: '#111827',
                    lineHeight: 1.3,
                  }}
                >
                  Soho, London W1F 8FL,
                  <br />
                  United Kingdom
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✦ 3. CLEAN MULTI-COLUMN EDITORIAL FOOTER */}
      <footer
        style={{
          background: '#f9fafb',
          padding: 'clamp(60px, 8vw, 80px) clamp(24px, 5vw, 80px) 32px',
          color: '#111827',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 40,
              paddingBottom: 40,
              borderBottom: '1px solid #e5e7eb',
              marginBottom: 28,
            }}
          >
            {/* Brand Column */}
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#bef264' }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: '#111827' }}>
                  Aether Studio
                </span>
              </div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6b7280', lineHeight: 1.6, maxWidth: 280 }}>
                High-performance digital products, design systems, and intelligent strategy for ambitious global teams.
              </p>
            </div>

            {/* Navigation Columns */}
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#111827', marginBottom: 14 }}>
                Company
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6b7280' }}>
                <a href="#about" style={{ color: '#6b7280', textDecoration: 'none' }}>About Us</a>
                <a href="#services" style={{ color: '#6b7280', textDecoration: 'none' }}>Services & Lab</a>
                <a href="#contact" style={{ color: '#6b7280', textDecoration: 'none' }}>Get in Touch</a>
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#111827', marginBottom: 14 }}>
                Disciplines
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6b7280' }}>
                <span>AI & Spatial Strategy</span>
                <span>Design Systems & Tokens</span>
                <span>Creative Engineering</span>
                <span>High-Scale Performance</span>
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#111827', marginBottom: 14 }}>
                Resources
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6b7280' }}>
                <span>Brand Guidelines</span>
                <span>Component Library</span>
                <span>Case Studies</span>
                <span>Careers</span>
              </div>
            </div>
          </div>

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
            <div>© 2026 Aether Studio Inc. All rights reserved.</div>
            <div style={{ display: 'flex', gap: 20 }}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Security</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
