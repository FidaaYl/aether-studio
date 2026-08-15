import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Sparkles,
  Check,
  Star,
  Layers,
  Send,
  Zap,
  Play,
  Heart,
  Smile,
  ShieldCheck,
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
    const x = (clientX / window.innerWidth - 0.5) * 20
    const y = (clientY / window.innerHeight - 0.5) * 20
    setMousePos({ x, y })
  }

  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden', color: '#111827' }} onMouseMove={handleMouseMove}>
      {/* ✦ 1. UMI-STYLE FLOATING INTERACTIVE DESIGN STUDIO HERO */}
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
          padding: 'clamp(120px, 14vw, 160px) 24px clamp(60px, 8vw, 100px)',
          boxSizing: 'border-box',
        }}
      >
        <Navbar />

        {/* ─── FLOATING SERVICE CARDS & DOODLES (MATCHING UMI REFERENCE) ─── */}

        {/* 1. Top-Left: Brand Identity Card */}
        <motion.div
          animate={{ x: mousePos.x * -0.8, y: mousePos.y * -0.8 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '18%',
            left: 'clamp(2%, 6vw, 10%)',
            background: '#f3efe6',
            border: '1px solid #e7e0d3',
            borderRadius: 20,
            padding: '14px 18px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.06, rotate: -2 }}
        >
          <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: '#8c8272', marginBottom: 4 }}>
            QUALITY CRAFT
          </div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: '#2d2922' }}>
            Brand & Strategy
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
            <div style={{ display: 'flex' }}>
              <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#bef264', display: 'inline-block' }} />
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: '#2563eb',
                  display: 'inline-block',
                  marginLeft: -6,
                }}
              />
            </div>
            <span style={{ fontSize: 11, color: '#786e5e', fontFamily: "'Outfit'" }}>Senior Team</span>
          </div>
        </motion.div>

        {/* 2. Top-Center-Left: Lime Green "Goal Complete" Capsule */}
        <motion.div
          animate={{ x: mousePos.x * 1.2, y: mousePos.y * 1.2 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '14%',
            left: 'clamp(32%, 36vw, 42%)',
            background: '#bef264',
            borderRadius: 16,
            padding: '10px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            boxShadow: '0 6px 20px rgba(190,242,100,0.35)',
            zIndex: 6,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.08, rotate: 3 }}
        >
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, fontSize: 14, color: '#14532d' }}>
            Design System Ready!
          </span>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#14532d', color: '#bef264', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Check size={12} strokeWidth={3} />
          </div>
        </motion.div>

        {/* 3. Top-Right: 3D & WebGL Service Pill */}
        <motion.div
          animate={{ x: mousePos.x * -1.1, y: mousePos.y * -1.1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '16%',
            right: 'clamp(4%, 7vw, 12%)',
            background: '#f3efe6',
            border: '1px solid #e7e0d3',
            borderRadius: 18,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.06, rotate: 2 }}
        >
          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#2563eb', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={15} />
          </div>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#2d2922' }}>
              3D & WebGL Canvas
            </div>
            <div style={{ fontSize: 10, color: '#786e5e', fontFamily: "'JetBrains Mono'" }}>60 FPS Physics</div>
          </div>
        </motion.div>

        {/* 4. Middle-Left: Client Chat Bubble (Matching Umi) */}
        <motion.div
          animate={{ x: mousePos.x * 0.7, y: mousePos.y * 0.7 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '46%',
            left: 'clamp(2%, 4vw, 8%)',
            background: '#ffffff',
            border: '1px solid #ede8dc',
            borderRadius: '20px 20px 20px 4px',
            padding: '14px 18px',
            maxWidth: 220,
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#bef264' }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: '#111827', fontFamily: "'Outfit'" }}>
              Aether Studio
            </span>
          </div>
          <p style={{ fontSize: 12, color: '#4b5563', margin: 0, lineHeight: 1.4, fontFamily: "'Outfit'" }}>
            “Let’s build something culturally defining for your brand.”
          </p>
        </motion.div>

        {/* 5. Middle-Right: Illustrated Paper Airplane & Doodles */}
        <motion.div
          animate={{ x: mousePos.x * 1.5, y: mousePos.y * 1.5 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '42%',
            right: 'clamp(3%, 6vw, 10%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 4,
          }}
        >
          <div
            style={{
              background: '#f3efe6',
              border: '1px solid #e7e0d3',
              borderRadius: 18,
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
              marginBottom: 10,
            }}
          >
            <Zap size={16} color="#eab308" />
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#2d2922' }}>
              Sub-Second Execution
            </span>
          </div>

          <svg width="70" height="30" viewBox="0 0 70 30" fill="none" style={{ opacity: 0.6 }}>
            <path
              d="M2 28C15 10 35 2 68 12"
              stroke="#111827"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* 6. Bottom-Left: Rating & Review Card */}
        <motion.div
          animate={{ x: mousePos.x * -0.9, y: mousePos.y * -0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '12%',
            left: 'clamp(3%, 6vw, 11%)',
            background: '#f3efe6',
            border: '1px solid #e7e0d3',
            borderRadius: 20,
            padding: '14px 20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.06, rotate: -2 }}
        >
          <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono'", color: '#8c8272', marginBottom: 2 }}>
            CLIENT REPUTATION
          </div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: '#2d2922', marginBottom: 4 }}>
            Award-Winning Results
          </div>
          <div style={{ display: 'flex', gap: 2, color: '#eab308' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <Star key={n} size={12} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
        </motion.div>

        {/* 7. Bottom-Right: Activity & Fitness Capsule (Matching Umi) */}
        <motion.div
          animate={{ x: mousePos.x * 0.9, y: mousePos.y * 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '12%',
            right: 'clamp(4%, 7vw, 13%)',
            background: '#bef264',
            borderRadius: 18,
            padding: '12px 18px',
            boxShadow: '0 8px 24px rgba(190,242,100,0.3)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.08, rotate: 2 }}
        >
          <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono'", fontWeight: 700, color: '#365314', marginBottom: 2 }}>
            SERVICE // LAB
          </div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14, color: '#14532d' }}>
            UI/UX & Mobile Flagship
          </div>
        </motion.div>

        {/* ─── CENTER CONTENT HERO (MATCHING UMI HEADLINE & VIBE) ─── */}
        <div style={{ maxWidth: 840, textAlign: 'center', position: 'relative', zIndex: 10 }}>
          {/* Top Tag */}
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
              marginBottom: 28,
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

          {/* Headline (Matching Umi typography with lime highlighter effect) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(42px, 6.2vw, 82px)',
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
                padding: '2px 14px',
                borderRadius: 12,
                color: '#14532d',
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: 600,
                display: 'inline-block',
                transform: 'rotate(-1.5deg)',
                boxShadow: '0 4px 14px rgba(190,242,100,0.4)',
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
              fontSize: 'clamp(16px, 1.4vw, 20px)',
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

          {/* Action Pills */}
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
