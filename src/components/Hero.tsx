import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Sparkles,
  Check,
  Star,
  Zap,
  Play,
  Heart,
  Smile,
} from 'lucide-react'
import Navbar from './Navbar'
import NarrativeSection from './NarrativeSection'
import WorkShowcase from './WorkShowcase'
import FeaturesSection from './FeaturesSection'
import Testimonials from './Testimonials'
import FinalCTA from './FinalCTA'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth - 0.5) * 16
    const y = (clientY / window.innerHeight - 0.5) * 16
    setMousePos({ x, y })
  }

  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden', color: '#111827' }} onMouseMove={handleMouseMove}>
      {/* ✦ 1. UMI-STYLE FLOATING ILLUSTRATIVE HERO */}
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

        {/* ─── ILLUSTRATIONS & FLOATING CAPSULES (MATCHING UMI) ─── */}

        {/* 1. Top-Left: Studio Designer & Puppy Illustration */}
        <motion.div
          animate={{ x: mousePos.x * -0.7, y: mousePos.y * -0.7 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '14%',
            left: 'clamp(1%, 4vw, 8%)',
            width: 'clamp(140px, 16vw, 200px)',
            zIndex: 4,
            pointerEvents: 'none',
          }}
        >
          <img
            src="/illustrations/designer-tablet.jpg"
            alt="Designer Drawing"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 24,
              mixBlendMode: 'multiply',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.04))',
            }}
          />
        </motion.div>

        {/* 2. Top-Right: Case Study Thumbnail Card (Like Curry Card in Umi) */}
        <motion.div
          animate={{ x: mousePos.x * -1.1, y: mousePos.y * -1.1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '14%',
            right: 'clamp(2%, 6vw, 10%)',
            background: '#f3efe6',
            border: '1px solid #e7e0d3',
            borderRadius: 18,
            padding: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.06, rotate: 2 }}
        >
          <img
            src="/projects/project-spatial.jpg"
            alt="Spatial OS"
            style={{ width: 44, height: 44, borderRadius: 12, objectFit: 'cover' }}
          />
          <div style={{ paddingRight: 8 }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12, color: '#2d2922' }}>
              Spatial Computing OS
            </div>
            <div style={{ fontSize: 10, color: '#786e5e', fontFamily: "'JetBrains Mono'" }}>★ 4.9 · WebGL Platform</div>
          </div>
        </motion.div>

        {/* 3. Top-Right-Lower: 3D Automotive Card */}
        <motion.div
          animate={{ x: mousePos.x * 1.1, y: mousePos.y * 1.1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '28%',
            right: 'clamp(1%, 4vw, 6%)',
            background: '#f3efe6',
            border: '1px solid #e7e0d3',
            borderRadius: 18,
            padding: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.06, rotate: -2 }}
        >
          <img
            src="/projects/project-hypercar.jpg"
            alt="Hypercar"
            style={{ width: 44, height: 44, borderRadius: 12, objectFit: 'cover' }}
          />
          <div style={{ paddingRight: 8 }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12, color: '#2d2922' }}>
              Flux Hypercar 3D
            </div>
            <div style={{ fontSize: 10, color: '#786e5e', fontFamily: "'JetBrains Mono'" }}>Raytraced Configurator</div>
          </div>
        </motion.div>

        {/* 4. Middle-Left: Chat Dialogue Bubble */}
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

        {/* 5. Bottom-Right: Bicycle Designer Illustration (Matching Umi) */}
        <motion.div
          animate={{ x: mousePos.x * 0.9, y: mousePos.y * 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '8%',
            right: 'clamp(1%, 4vw, 7%)',
            width: 'clamp(150px, 18vw, 220px)',
            zIndex: 4,
            pointerEvents: 'none',
          }}
        >
          <img
            src="/illustrations/designer-bicycle.jpg"
            alt="Designer on Bicycle"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 24,
              mixBlendMode: 'multiply',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.04))',
            }}
          />
        </motion.div>

        {/* 6. Bottom-Left: Goal Complete Lime Capsule */}
        <motion.div
          animate={{ x: mousePos.x * -0.9, y: mousePos.y * -0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '12%',
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

        {/* ─── CENTER HERO TEXT WITH PROPER VERTICAL SPACING ─── */}
        <div style={{ maxWidth: 860, textAlign: 'center', position: 'relative', zIndex: 10, marginTop: 10 }}>
          {/* Top Pill Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#f3efe6',
              border: '1px solid #e7e0d3',
              borderRadius: 100,
              padding: '6px 18px',
              marginBottom: 24,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#4a443a',
              }}
            >
              DIGITAL DESIGN & CREATIVE ENGINEERING STUDIO
            </span>
          </motion.div>

          {/* Headline (Matching Umi) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(40px, 5.8vw, 76px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              color: '#111827',
              margin: '0 0 24px',
            }}
          >
            Aether helps you build{' '}
            <span
              style={{
                background: '#bef264',
                padding: '4px 16px',
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

          {/* Action Buttons */}
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
