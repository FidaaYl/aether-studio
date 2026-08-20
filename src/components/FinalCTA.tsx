import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Mail,
  Phone,
  Building2,
  Clock,
  Globe,
  ArrowUp,
  Copy,
  ExternalLink,
  Sparkles,
  Send,
  Coffee,
} from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props {
  T?: any
  L?: boolean
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
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSent, setNewsletterSent] = useState(false)
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const [copiedCity, setCopiedCity] = useState<string | null>(null)

  // Live clocks for offices
  const [times, setTimes] = useState({ sf: '', london: '' })

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date()
      setTimes({
        sf: now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
        london: now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      })
    }
    updateClocks()
    const timer = setInterval(updateClocks, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyAddress = (city: string, text: string) => {
    navigator.clipboard?.writeText(text)
    setCopiedCity(city)
    setTimeout(() => setCopiedCity(null), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.email) return
    setSent(true)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterSent(true)
    setTimeout(() => setNewsletterSent(false), 4000)
    setNewsletterEmail('')
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
      {/* ✦ 1. SKY BLUE "GET IN TOUCH WITH US" HERO CONTACT CARD */}
      <section
        id="contact"
        style={{
          background: 'linear-gradient(180deg, #0284c7 0%, #0ea5e9 60%, #38bdf8 100%)',
          padding: 'clamp(80px, 9vw, 120px) clamp(24px, 5vw, 80px)',
          position: 'relative',
          color: '#ffffff',
          overflow: 'hidden',
        }}
      >
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
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Left Column: Heading & Description */}
            <div style={{ flex: '1 1 360px', maxWidth: 500, width: '100%' }}>
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

            {/* Right Column: Sleek Floating Form Card */}
            <div style={{ flex: '1 1 420px', maxWidth: 640, width: '100%' }}>
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
                            <label
                              style={{
                                display: 'block',
                                fontSize: 12,
                                fontWeight: 600,
                                color: '#374151',
                                marginBottom: 6,
                                fontFamily: "'Outfit'",
                              }}
                            >
                              First Name
                            </label>
                            <input
                              required
                              placeholder="Your first name"
                              style={inputStyle('firstName')}
                              value={form.firstName}
                              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                              onFocus={() => setFocused('firstName')}
                              onBlur={() => setFocused(null)}
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                display: 'block',
                                fontSize: 12,
                                fontWeight: 600,
                                color: '#374151',
                                marginBottom: 6,
                                fontFamily: "'Outfit'",
                              }}
                            >
                              Last Name
                            </label>
                            <input
                              placeholder="Your last name"
                              style={inputStyle('lastName')}
                              value={form.lastName}
                              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                              onFocus={() => setFocused('lastName')}
                              onBlur={() => setFocused(null)}
                            />
                          </div>
                        </div>

                        {/* Row 2: Phone & Email */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                          <div>
                            <label
                              style={{
                                display: 'block',
                                fontSize: 12,
                                fontWeight: 600,
                                color: '#374151',
                                marginBottom: 6,
                                fontFamily: "'Outfit'",
                              }}
                            >
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              placeholder="Your phone number"
                              style={inputStyle('phone')}
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              onFocus={() => setFocused('phone')}
                              onBlur={() => setFocused(null)}
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                display: 'block',
                                fontSize: 12,
                                fontWeight: 600,
                                color: '#374151',
                                marginBottom: 6,
                                fontFamily: "'Outfit'",
                              }}
                            >
                              Email Address
                            </label>
                            <input
                              required
                              type="email"
                              placeholder="Your email address"
                              style={inputStyle('email')}
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              onFocus={() => setFocused('email')}
                              onBlur={() => setFocused(null)}
                            />
                          </div>
                        </div>

                        {/* Row 3: Business Name */}
                        <div>
                          <label
                            style={{
                              display: 'block',
                              fontSize: 12,
                              fontWeight: 600,
                              color: '#374151',
                              marginBottom: 6,
                              fontFamily: "'Outfit'",
                            }}
                          >
                            Business Name
                          </label>
                          <input
                            placeholder="Your business name"
                            style={inputStyle('business')}
                            value={form.business}
                            onChange={(e) => setForm({ ...form, business: e.target.value })}
                            onFocus={() => setFocused('business')}
                            onBlur={() => setFocused(null)}
                          />
                        </div>

                        {/* Row 4: Message */}
                        <div>
                          <label
                            style={{
                              display: 'block',
                              fontSize: 12,
                              fontWeight: 600,
                              color: '#374151',
                              marginBottom: 6,
                              fontFamily: "'Outfit'",
                            }}
                          >
                            Message
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Write a message..."
                            style={{ ...inputStyle('message'), resize: 'vertical' }}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            onFocus={() => setFocused('message')}
                            onBlur={() => setFocused(null)}
                          />
                        </div>

                        {/* Submit Button */}
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

      {/* ✦ 2. "OUR OFFICES" SECTION WITH HAND-DRAWN DOODLES, SPARKLES & SPIRALS */}
      <section
        id="offices"
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #faf9f5 100%)',
          padding: '90px clamp(24px, 5vw, 80px) 90px',
          borderBottom: '1px solid #ede8dc',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ═════════════════════════════════════════════════════════════════════
            RICH SVG DOODLE ECOSYSTEM (Zero collision, pure atmospheric charm)
            ═════════════════════════════════════════════════════════════════════ */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 2,
          }}
          viewBox="0 0 1440 680"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* 1. Global Transatlantic Orbit connecting SF & London */}
          <path
            d="M 80 440 C 350 260, 680 520, 1360 280"
            stroke="#84cc16"
            strokeWidth="1.2"
            strokeDasharray="4 7"
            opacity="0.45"
          />

          {/* 2. Left Dotted Spiral */}
          <path
            d="M 75 220 A 10 10 0 0 1 75 240 A 20 20 0 0 1 75 200 A 32 32 0 0 1 75 264 A 46 46 0 0 1 75 172 A 60 60 0 0 1 75 292"
            stroke="#84cc16"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            strokeLinecap="round"
            fill="none"
            opacity="0.65"
          />

          {/* 3. Right Dotted Spiral */}
          <path
            d="M 1375 360 A 10 10 0 0 1 1375 380 A 20 20 0 0 1 1375 340 A 32 32 0 0 1 1375 404 A 46 46 0 0 1 1375 312 A 60 60 0 0 1 1375 432"
            stroke="#84cc16"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            strokeLinecap="round"
            fill="none"
            opacity="0.65"
          />

          {/* 4. Playful Doodle Sparkles & Stars */}
          {/* Top Left Sparkle */}
          <g transform="translate(160, 70)">
            <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8" fill="#84cc16" opacity="0.85" />
          </g>
          {/* Top Center Orbit Sparkle */}
          <g transform="translate(730, 45)">
            <path d="M0 -7 Q0 0 7 0 Q0 0 0 7 Q0 0 -7 0 Q0 0 0 -7" fill="#0284c7" opacity="0.65" />
          </g>
          {/* Top Right Big Star Sparkle */}
          <g transform="translate(1340, 80)">
            <path d="M0 -10 Q0 0 10 0 Q0 0 0 10 Q0 0 -10 0 Q0 0 0 -10" fill="#84cc16" opacity="0.9" />
          </g>
          {/* Center Gap Sparkle between Cards */}
          <g transform="translate(710, 360)">
            <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8" fill="#84cc16" opacity="0.75" />
          </g>
          {/* Bottom Left Sparkle */}
          <g transform="translate(85, 540)">
            <path d="M0 -7 Q0 0 7 0 Q0 0 0 7 Q0 0 -7 0 Q0 0 0 -7" fill="#0284c7" opacity="0.6" />
          </g>
          {/* Bottom Right Sparkle */}
          <g transform="translate(1370, 560)">
            <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8" fill="#84cc16" opacity="0.8" />
          </g>

          {/* 5. Micro Typography Accents & Doodle Stars */}
          <text x="1300" y="240" fill="#84cc16" fontSize="16" fontFamily="monospace">★</text>
          <text x="120" y="320" fill="#94a3b8" fontSize="14" fontFamily="monospace">✦</text>
          <text x="1380" y="170" fill="#cbd5e1" fontSize="14" fontFamily="monospace">+</text>
          <text x="60" y="490" fill="#cbd5e1" fontSize="14" fontFamily="monospace">+</text>
          <text x="740" y="580" fill="#84cc16" fontSize="13" fontFamily="monospace">★</text>
        </svg>

        <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: 24,
              marginBottom: 48,
            }}
          >
            <div>
              {/* Badge + Coffee Tagline with subtle doodle bracket */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 12,
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    padding: '5px 14px',
                    borderRadius: 100,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#84cc16',
                      display: 'inline-block',
                      boxShadow: '0 0 8px rgba(132, 204, 22, 0.7)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#15803d',
                    }}
                  >
                    PHYSICAL STUDIOS
                  </span>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontSize: 14,
                    color: '#16a34a',
                    fontWeight: 600,
                  }}
                >
                  <Coffee size={14} color="#16a34a" />
                  <span>Drop by for coffee anytime</span>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(34px, 4.2vw, 48px)',
                  letterSpacing: '-0.035em',
                  color: '#0f172a',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                Our Offices
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: '0.62em',
                    color: '#64748b',
                  }}
                >
                  (2 Global Hubs)
                </span>
              </h3>
            </div>

            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                color: '#64748b',
                maxWidth: 440,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              We operate across key design & tech capitals with seamless hybrid collaboration. Visit us in California or
              London.
            </p>
          </div>

          {/* 2 Elevated Bento Office Cards with Doodle Badges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: 28,
            }}
          >
            {/* ─── Card 1: San Francisco (California) ─── */}
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.07)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: 24,
                padding: '32px 32px 28px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 260,
                boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
              }}
            >
              {/* Top Accent Gradient Strip */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 32,
                  right: 32,
                  height: 3,
                  background: 'linear-gradient(90deg, #38bdf8 0%, #84cc16 100%)',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
              />

              <div>
                {/* Badge Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 10,
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      background: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      color: '#15803d',
                      padding: '5px 12px',
                      borderRadius: 100,
                      fontSize: 11,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                    }}
                  >
                    <MapPin size={13} color="#16a34a" />
                    SAN FRANCISCO, CA
                  </div>

                  {/* Live Clock with pulsing green dot */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      padding: '4px 12px',
                      borderRadius: 100,
                      fontSize: 11.5,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: '#334155',
                      fontWeight: 600,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#22c55e',
                        boxShadow: '0 0 8px rgba(34,197,94,0.8)',
                      }}
                    />
                    <Clock size={12} color="#64748b" />
                    <span>{times.sf || 'PST (GMT-7)'}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <h4
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: 24,
                      color: '#0f172a',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      margin: '0 0 6px',
                    }}
                  >
                    San Francisco Studio
                  </h4>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: 12.5,
                      color: '#16a34a',
                      fontWeight: 600,
                    }}
                  >
                    ✦ Pacific HQ
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 14.5,
                    color: '#475569',
                    lineHeight: 1.5,
                    marginBottom: 14,
                  }}
                >
                  548 Market Street, Suite 8200
                  <br />
                  <span style={{ color: '#94a3b8', fontSize: 13 }}>San Francisco, CA 94107, United States</span>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: '#94a3b8',
                    letterSpacing: '0.04em',
                  }}
                >
                  <Globe size={12} color="#94a3b8" />
                  <span>37.7891° N, 122.4014° W</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 22,
                  paddingTop: 16,
                  borderTop: '1px solid #f1f5f9',
                }}
              >
                <button
                  onClick={() =>
                    handleCopyAddress('sf', '548 Market Street, Suite 8200, San Francisco, CA 94107, United States')
                  }
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    padding: '8px 16px',
                    borderRadius: 10,
                    fontSize: 12.5,
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    color: copiedCity === 'sf' ? '#16a34a' : '#334155',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {copiedCity === 'sf' ? <Check size={13} /> : <Copy size={13} />}
                  {copiedCity === 'sf' ? 'Address Copied!' : 'Copy Address'}
                </button>

                <motion.a
                  href="https://maps.google.com/?q=548+Market+Street+San+Francisco+CA+94107"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: '#bef264',
                    color: '#14532d',
                    padding: '8px 16px',
                    borderRadius: 10,
                    fontSize: 12.5,
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(190,242,100,0.3)',
                  }}
                >
                  View on Maps <ArrowUpRight size={14} strokeWidth={2.5} />
                </motion.a>
              </div>
            </motion.div>

            {/* ─── Card 2: London (United Kingdom) ─── */}
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.07)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: 24,
                padding: '32px 32px 28px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 260,
                boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
              }}
            >
              {/* Top Accent Gradient Strip */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 32,
                  right: 32,
                  height: 3,
                  background: 'linear-gradient(90deg, #84cc16 0%, #38bdf8 100%)',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
              />

              <div>
                {/* Badge Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 10,
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      background: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      color: '#15803d',
                      padding: '5px 12px',
                      borderRadius: 100,
                      fontSize: 11,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                    }}
                  >
                    <MapPin size={13} color="#16a34a" />
                    LONDON, UK
                  </div>

                  {/* Live Clock with pulsing green dot */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      padding: '4px 12px',
                      borderRadius: 100,
                      fontSize: 11.5,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: '#334155',
                      fontWeight: 600,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#22c55e',
                        boxShadow: '0 0 8px rgba(34,197,94,0.8)',
                      }}
                    />
                    <Clock size={12} color="#64748b" />
                    <span>{times.london || 'GMT (UTC+0)'}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <h4
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: 24,
                      color: '#0f172a',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      margin: '0 0 6px',
                    }}
                  >
                    London Studio
                  </h4>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: 12.5,
                      color: '#16a34a',
                      fontWeight: 600,
                    }}
                  >
                    ✦ European Hub
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 14.5,
                    color: '#475569',
                    lineHeight: 1.5,
                    marginBottom: 14,
                  }}
                >
                  14 Broadwick Street, Soho
                  <br />
                  <span style={{ color: '#94a3b8', fontSize: 13 }}>London W1F 8FL, United Kingdom</span>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: '#94a3b8',
                    letterSpacing: '0.04em',
                  }}
                >
                  <Globe size={12} color="#94a3b8" />
                  <span>51.5133° N, 0.1368° W</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 22,
                  paddingTop: 16,
                  borderTop: '1px solid #f1f5f9',
                }}
              >
                <button
                  onClick={() =>
                    handleCopyAddress('london', '14 Broadwick Street, Soho, London W1F 8FL, United Kingdom')
                  }
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    padding: '8px 16px',
                    borderRadius: 10,
                    fontSize: 12.5,
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    color: copiedCity === 'london' ? '#16a34a' : '#334155',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {copiedCity === 'london' ? <Check size={13} /> : <Copy size={13} />}
                  {copiedCity === 'london' ? 'Address Copied!' : 'Copy Address'}
                </button>

                <motion.a
                  href="https://maps.google.com/?q=14+Broadwick+Street+Soho+London+W1F+8FL"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: '#bef264',
                    color: '#14532d',
                    padding: '8px 16px',
                    borderRadius: 10,
                    fontSize: 12.5,
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(190,242,100,0.3)',
                  }}
                >
                  View on Maps <ArrowUpRight size={14} strokeWidth={2.5} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✦ 3. ICONIC DARK SIGNATURE STUDIO FOOTER */}
      <footer
        style={{
          background: '#090d16',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          padding: '80px clamp(24px, 5vw, 80px) 40px',
        }}
      >
        {/* Subtle Ambient Radial Glows */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '30%',
            width: '40vw',
            height: '300px',
            background: 'radial-gradient(ellipse at top, rgba(190,242,100,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Top Hero Callout inside Footer */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24,
              padding: 'clamp(32px, 4vw, 48px)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 28,
              marginBottom: 64,
            }}
          >
            <div style={{ maxWidth: 580 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#bef264',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                <span>✦ AETHER DISPATCH</span>
              </div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(24px, 2.8vw, 36px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: '#ffffff',
                  margin: '0 0 10px',
                }}
              >
                Let’s create something unforgettable together.
              </h3>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 14.5,
                  color: '#94a3b8',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Join 14,000+ creators, founders, and engineers receiving our monthly curations on spatial design, WebGL,
                and modern design systems.
              </p>
            </div>

            {/* Newsletter Input Box */}
            <div style={{ minWidth: 320, flex: '1 1 320px', maxWidth: 440 }}>
              <form
                onSubmit={handleNewsletterSubmit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 100,
                  padding: '6px 6px 6px 18px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}
              >
                <input
                  type="email"
                  required
                  placeholder={newsletterSent ? 'Subscribed! Welcome aboard ✦' : 'Enter your email...'}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#ffffff',
                    fontSize: 14,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: '#bef264',
                    color: '#14532d',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: 100,
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: 'pointer',
                    boxShadow: '0 2px 10px rgba(190,242,100,0.3)',
                  }}
                >
                  {newsletterSent ? 'Done ✓' : 'Subscribe'} <Send size={13} />
                </motion.button>
              </form>
            </div>
          </div>

          {/* Main Footer Navigation Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'clamp(32px, 4vw, 56px)',
              paddingBottom: 48,
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              marginBottom: 36,
            }}
          >
            {/* Brand Column */}
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#bef264',
                    boxShadow: '0 0 12px rgba(190,242,100,0.8)',
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 22,
                    letterSpacing: '-0.03em',
                    color: '#ffffff',
                  }}
                >
                  Aether Studio
                </span>
              </div>

              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 14,
                  color: '#94a3b8',
                  lineHeight: 1.65,
                  maxWidth: 340,
                  margin: '0 0 24px',
                }}
              >
                A visionary design partner dedicated to building smarter, unforgettable digital products and spatial
                interfaces for world-class founders.
              </p>

              {/* Status Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '6px 14px',
                  borderRadius: 100,
                  fontSize: 12,
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#cbd5e1',
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 8px rgba(34,197,94,0.8)',
                  }}
                />
                <span>Systems 100% Operational</span>
              </div>
            </div>

            {/* Column 1: Navigation */}
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#bef264',
                  marginBottom: 18,
                }}
              >
                Navigation
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 14,
                }}
              >
                <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>
                  About Us
                </a>
                <a href="#services" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Services & Lab
                </a>
                <a href="#features" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Core Features
                </a>
                <a href="#testimonials" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Client Reviews
                </a>
                <a href="#offices" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Studio Locations
                </a>
              </div>
            </div>

            {/* Column 2: Capabilities */}
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#bef264',
                  marginBottom: 18,
                }}
              >
                Capabilities
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 14,
                  color: '#94a3b8',
                }}
              >
                <span>AI & Spatial Strategy</span>
                <span>Design Systems & Tokens</span>
                <span>Creative WebGL & 3D</span>
                <span>High-Scale Performance</span>
                <span>Full-Stack Engineering</span>
              </div>
            </div>

            {/* Column 3: Social & Connect */}
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#bef264',
                  marginBottom: 18,
                }}
              >
                Connect
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 14,
                }}
              >
                <a
                  href="https://github.com/FidaaYl/aether-studio"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
                >
                  GitHub <ArrowUpRight size={13} color="#bef264" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
                >
                  Twitter / X <ArrowUpRight size={13} color="#bef264" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
                >
                  LinkedIn <ArrowUpRight size={13} color="#bef264" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
                >
                  Dribbble <ArrowUpRight size={13} color="#bef264" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright + Legal + Back to Top */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 16,
              fontSize: 13,
              color: '#64748b',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <div>© 2026 Aether Studio Inc. All rights reserved.</div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Privacy Policy</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Terms of Service</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Security</span>

              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: '7px 16px',
                  borderRadius: 100,
                  color: '#ffffff',
                  fontSize: 12,
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Back to Top <ArrowUp size={13} strokeWidth={2.5} color="#bef264" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
