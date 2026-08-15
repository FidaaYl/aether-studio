import React, { useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowUpRight, Play, Star, Sparkles, TrendingUp, Layers, CheckCircle2 } from 'lucide-react'
import Navbar from './Navbar'
import NarrativeSection from './NarrativeSection'
import WorkShowcase from './WorkShowcase'
import FeaturesSection from './FeaturesSection'
import Testimonials from './Testimonials'
import FinalCTA from './FinalCTA'

const FLOATING_CARDS = [
  {
    title: 'Performance',
    stat: '+49%',
    sub: 'Conversion Uplift',
    color: '#0284c7',
    tag: 'Growth',
    type: 'metric',
  },
  {
    title: 'Strategy & Scale',
    stat: '520k+',
    sub: 'Active Sessions',
    color: '#0ea5e9',
    tag: 'Realtime',
    type: 'data',
  },
  {
    title: 'Design Systems',
    stat: '100%',
    sub: 'Token Architecture',
    color: '#10b981',
    tag: 'Core Lab',
    type: 'core',
  },
  {
    title: 'Creative UI/UX',
    stat: '60 FPS',
    sub: 'WebGL & Interaction',
    color: '#6366f1',
    tag: 'Motion',
    type: 'motion',
  },
]

export default function Hero() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden', color: '#0f172a' }}>
      {/* ✦ 1. SKY BLUE HERO SECTION (Matching Aeline & Gabrun References) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #0284c7 0%, #0ea5e9 45%, #38bdf8 80%, #e0f2fe 100%)',
          color: '#ffffff',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Soft Stylized Ambient Cloud Glows */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '-10%',
            width: '50vw',
            height: '50vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <Navbar />

        {/* Hero Content */}
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: 'clamp(120px, 14vw, 160px) 24px clamp(40px, 6vw, 60px)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: 100,
              padding: '6px 18px',
              marginBottom: 24,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#bef264' }} />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#ffffff',
              }}
            >
              Digital Product & Strategy Studio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(38px, 5.8vw, 76px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              margin: '0 0 20px',
              color: '#ffffff',
              textShadow: '0 2px 20px rgba(2,132,199,0.3)',
            }}
          >
            Building the future with{' '}
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#ffffff',
                textDecoration: 'underline',
                textDecorationColor: '#bef264',
                textUnderlineOffset: 8,
              }}
            >
              design and strategy
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(16px, 1.4vw, 20px)',
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.92)',
              maxWidth: 620,
              margin: '0 auto 36px',
            }}
          >
            We help ambitious organizations unlock breakthrough growth and authority through high-performance digital
            products, brand systems, and intelligent interfaces.
          </motion.p>

          {/* CTA Buttons (Matching Aeline reference) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 14,
              marginBottom: 44,
            }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#bef264',
                color: '#14532d',
                padding: '15px 32px',
                borderRadius: 100,
                textDecoration: 'none',
                fontFamily: "'Syne', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
              }}
            >
              GET STARTED <ArrowUpRight size={18} strokeWidth={2.5} />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.2)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.4)',
                backdropFilter: 'blur(12px)',
                padding: '15px 28px',
                borderRadius: 100,
                textDecoration: 'none',
                fontFamily: "'Syne', sans-serif",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              <Play size={15} fill="currentColor" /> VIEW SHOWREEL
            </motion.a>
          </motion.div>

          {/* Rating Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12,
              fontFamily: "'Outfit', sans-serif",
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 48,
            }}
          >
            <div style={{ display: 'flex', gap: 2, color: '#fef08a' }}>
              {[1, 2, 3, 4, 5].map(n => (
                <Star key={n} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span>Rated 4.9/5 by 200+ global enterprises & startups</span>
          </motion.div>

          {/* ✦ 3D Arc of Floating Glass Cards (Matching Aeline Reference) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 16,
              maxWidth: 1050,
              margin: '0 auto',
            }}
          >
            {FLOATING_CARDS.map((c, i) => (
              <motion.div
                key={c.title}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8, scale: 1.04 }}
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  borderRadius: 20,
                  padding: '20px 22px',
                  width: 'clamp(180px, 20vw, 220px)',
                  boxShadow: '0 20px 40px rgba(2,132,199,0.2)',
                  border: '1px solid rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(20px)',
                  textAlign: 'left',
                  color: '#0f172a',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      fontWeight: 600,
                      color: c.color,
                      background: `${c.color}15`,
                      padding: '3px 8px',
                      borderRadius: 100,
                    }}
                  >
                    {c.tag}
                  </span>
                  <Sparkles size={14} color={c.color} />
                </div>

                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 28,
                    color: '#0f172a',
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {c.stat}
                </div>

                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, color: '#334155' }}>
                  {c.title}
                </div>

                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#64748b', marginTop: 2 }}>
                  {c.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✦ 2. ABOUT US BENTO GRID */}
      <NarrativeSection T={{}} L={true} />

      {/* ✦ 3. COMPREHENSIVE SERVICES */}
      <WorkShowcase T={{}} L={true} />

      {/* ✦ 4. FAST AND SIMPLE PRODUCT FEATURES & 3 STEPS */}
      <FeaturesSection T={{}} L={true} />

      {/* ✦ 5. WHY TEAMS CHOOSE AETHER & PARTNER BANNER */}
      <Testimonials T={{}} L={true} />

      {/* ✦ 6. SKY BLUE GET IN TOUCH CONTACT SUITE & MULTI-COLUMN FOOTER */}
      <FinalCTA T={{}} L={true} />
    </div>
  )
}
