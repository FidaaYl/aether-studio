import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Sparkles,
  Check,
  Star,
  Zap,
} from 'lucide-react'
import Navbar from './Navbar'
import NarrativeSection from './NarrativeSection'
import WorkShowcase from './WorkShowcase'
import FeaturesSection from './FeaturesSection'
import Testimonials from './Testimonials'
import FinalCTA from './FinalCTA'

const MORPH_TEXTS = [
  '✦ AVAILABLE FOR NEW COMMISSIONS Q3–Q4',
  '★ AWWWARDS STUDIO OF THE YEAR NOMINEE',
  '⚡ 3D WEBGL, SPATIAL SYSTEMS & FULL-STACK',
  '● TRUSTED BY OVER 200+ GLOBAL BRANDS',
]

export default function Hero() {
  const [textIdx, setTextIdx] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIdx(prev => (prev + 1) % MORPH_TEXTS.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth - 0.5) * 16
    const y = (clientY / window.innerHeight - 0.5) * 16
    setMousePos({ x, y })
  }

  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden', color: '#111827' }} onMouseMove={handleMouseMove}>
      {/* ✦ 1. ORIGINKIT & UMI-STYLE FLOATING INTERACTIVE DESIGN STUDIO HERO */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          background: '#faf9f5',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 'clamp(140px, 16vw, 180px) 24px clamp(80px, 10vw, 120px)',
          boxSizing: 'border-box',
        }}
      >
        <Navbar />

        {/* ─── PURE TRANSPARENT VECTOR ILLUSTRATIONS (ZERO WHITE BOXES) ─── */}

        {/* 1. Top-Left: Transparent Line Art Studio Designer SVG */}
        <motion.div
          animate={{ x: mousePos.x * -0.7, y: mousePos.y * -0.7 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '12%',
            left: 'clamp(2%, 4vw, 8%)',
            width: 'clamp(140px, 15vw, 190px)',
            zIndex: 4,
            pointerEvents: 'none',
          }}
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
            <circle cx="100" cy="55" r="22" stroke="#111827" strokeWidth="3" />
            <path d="M88 48C90 44 95 40 105 40C115 40 118 46 118 50" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
            <circle cx="94" cy="54" r="2.5" fill="#111827" />
            <circle cx="106" cy="54" r="2.5" fill="#111827" />
            <path d="M98 62C100 64 104 64 106 62" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="94" cy="54" r="6" stroke="#16a34a" strokeWidth="2" />
            <circle cx="106" cy="54" r="6" stroke="#16a34a" strokeWidth="2" />
            <line x1="100" y1="54" x2="100" y2="54" stroke="#16a34a" strokeWidth="2" />
            <path d="M78 85C78 78 86 74 100 74C114 74 122 78 122 85L128 130H72L78 85Z" stroke="#111827" strokeWidth="3" fill="#ffffff" />
            <path d="M82 95L118 95" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M84 108L116 108" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="88" y="105" width="46" height="34" rx="4" transform="rotate(-15 88 105)" fill="#bef264" stroke="#111827" strokeWidth="2.5" />
            <line x1="94" y1="112" x2="114" y2="107" stroke="#14532d" strokeWidth="2" strokeLinecap="round" />
            <path d="M148 140C148 125 158 120 168 120C178 120 186 125 186 140H148Z" stroke="#111827" strokeWidth="3" fill="#bef264" />
            <circle cx="158" cy="130" r="2.5" fill="#14532d" />
            <circle cx="174" cy="130" r="2.5" fill="#14532d" />
            <path d="M164 135C166 137 168 137 170 135" stroke="#14532d" strokeWidth="2" />
            <ellipse cx="100" cy="155" rx="75" ry="16" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </motion.div>

        {/* 2. Top-Right: Spatial OS Case Study Capsule */}
        <motion.div
          animate={{ x: mousePos.x * -1.1, y: mousePos.y * -1.1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '14%',
            right: 'clamp(2%, 5vw, 9%)',
            background: '#ffffff',
            border: '1px solid #ede8dc',
            borderRadius: 18,
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.06, rotate: 2 }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: '#0284c7',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Sparkles size={16} />
          </div>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#111827' }}>
              Spatial Computing OS
            </div>
            <div style={{ fontSize: 10, color: '#6b7280', fontFamily: "'JetBrains Mono'" }}>★ 4.9 · WebGL Platform</div>
          </div>
        </motion.div>

        {/* 3. Middle-Right: Raytraced Automotive 3D Capsule */}
        <motion.div
          animate={{ x: mousePos.x * 1.1, y: mousePos.y * 1.1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '32%',
            right: 'clamp(1%, 4vw, 6%)',
            background: '#ffffff',
            border: '1px solid #ede8dc',
            borderRadius: 18,
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.06, rotate: -2 }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: '#f97316',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Zap size={16} />
          </div>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#111827' }}>
              Flux Hypercar 3D
            </div>
            <div style={{ fontSize: 10, color: '#6b7280', fontFamily: "'JetBrains Mono'" }}>Raytraced Configurator</div>
          </div>
        </motion.div>

        {/* 4. Middle-Left: Client Chat Bubble */}
        <motion.div
          animate={{ x: mousePos.x * 0.8, y: mousePos.y * 0.8 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '46%',
            left: 'clamp(2%, 4vw, 7%)',
            background: '#ffffff',
            border: '1px solid #ede8dc',
            borderRadius: '20px 20px 20px 4px',
            padding: '14px 18px',
            maxWidth: 210,
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#bef264' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', fontFamily: "'Outfit'" }}>
              Aether Studio
            </span>
          </div>
          <p style={{ fontSize: 12, color: '#4b5563', margin: 0, lineHeight: 1.4, fontFamily: "'Outfit'" }}>
            “Let’s build something culturally defining for your brand.”
          </p>
        </motion.div>

        {/* 5. Bottom-Right: Transparent Designer on Bicycle SVG */}
        <motion.div
          animate={{ x: mousePos.x * 0.9, y: mousePos.y * 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '6%',
            right: 'clamp(1%, 4vw, 7%)',
            width: 'clamp(150px, 17vw, 210px)',
            zIndex: 4,
            pointerEvents: 'none',
          }}
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
            <circle cx="50" cy="150" r="26" stroke="#111827" strokeWidth="3" />
            <circle cx="150" cy="150" r="26" stroke="#111827" strokeWidth="3" />
            <circle cx="50" cy="150" r="4" fill="#84cc16" />
            <circle cx="150" cy="150" r="4" fill="#84cc16" />
            <path d="M50 150L90 150L130 110L150 150M90 150L105 105L125 105M105 105L70 120" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
            <rect x="135" y="90" width="22" height="18" rx="3" stroke="#111827" strokeWidth="2.5" fill="#bef264" />
            <line x1="140" y1="85" x2="144" y2="105" stroke="#111827" strokeWidth="2" />
            <line x1="148" y1="82" x2="152" y2="105" stroke="#111827" strokeWidth="2" />
            <circle cx="95" cy="65" r="14" stroke="#111827" strokeWidth="3" />
            <path d="M85 92C85 82 95 78 105 78C115 78 120 85 115 110L90 125" stroke="#111827" strokeWidth="3" fill="#ffffff" />
            <path d="M102 78L125 90" stroke="#84cc16" strokeWidth="3" strokeLinecap="round" />
            <path d="M165 50C170 45 175 48 180 44" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            <path d="M150 35C155 30 160 33 165 29" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* 6. Bottom-Left: Design Systems & Token Lab Capsule */}
        <motion.div
          animate={{ x: mousePos.x * -0.9, y: mousePos.y * -0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '10%',
            left: 'clamp(2%, 5vw, 9%)',
            background: '#bef264',
            borderRadius: 18,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            boxShadow: '0 8px 24px rgba(190,242,100,0.35)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.08, rotate: -2 }}
        >
          <div>
            <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono'", fontWeight: 700, color: '#365314', marginBottom: 2 }}>
              SERVICE LAB
            </div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 13, color: '#14532d' }}>
              Design Systems & 3D UI
            </div>
          </div>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: '#14532d',
              color: '#bef264',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Check size={13} strokeWidth={3} />
          </div>
        </motion.div>

        {/* ─── CENTER HERO TEXT & ANIMATED ORIGINKIT TEXT MORPH ─── */}
        <div style={{ maxWidth: 880, textAlign: 'center', position: 'relative', zIndex: 10 }}>
          {/* Animated Text Morph Pill (OriginKit Style) */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 100,
                padding: '7px 20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                height: 34,
                boxSizing: 'border-box',
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#374151',
                  }}
                >
                  {MORPH_TEXTS[textIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Headline (Matching Umi) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(42px, 6vw, 80px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.06,
              color: '#111827',
              margin: '0 0 24px',
            }}
          >
            Aether helps you build{' '}
            <span
              style={{
                background: '#bef264',
                padding: '4px 18px',
                borderRadius: 14,
                color: '#14532d',
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: 600,
                display: 'inline-block',
                transform: 'rotate(-1.2deg)',
                boxShadow: '0 4px 16px rgba(190,242,100,0.4)',
              }}
            >
              unforgettable digital products
            </span>{' '}
            together
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(16px, 1.35vw, 19px)',
              fontWeight: 300,
              lineHeight: 1.65,
              color: '#6b7280',
              maxWidth: 580,
              margin: '0 auto 36px',
            }}
          >
            We partner with visionary founders and iconic brands to design bespoke web experiences, 3D spatial
            interfaces, and scalable token design systems.
          </motion.p>

          {/* Action Buttons with Narrowed Swooping Indicator Arrow */}
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Narrowed Curved Indicator Callout & Arrow (Arches gracefully from the left towards the button) */}
            <div
              style={{
                position: 'absolute',
                top: '-34px',
                left: '-14px',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                pointerEvents: 'none',
                zIndex: 10,
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: 13,
                  color: '#16a34a',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                ✦ Book intro call
              </span>
              <svg width="42" height="28" viewBox="0 0 42 28" fill="none">
                <path
                  d="M2 4C14 2 28 8 36 22M36 22L27 21M36 22L34 13"
                  stroke="#16a34a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

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
                  boxShadow: '0 8px 24px rgba(190,242,100,0.35)',
                }}
              >
                Start a Project <ArrowUpRight size={18} strokeWidth={2.5} />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#ffffff',
                  color: '#111827',
                  border: '1px solid #d1d5db',
                  padding: '15px 28px',
                  borderRadius: 100,
                  textDecoration: 'none',
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                Explore Our Services
              </motion.a>
            </motion.div>
          </div>
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
