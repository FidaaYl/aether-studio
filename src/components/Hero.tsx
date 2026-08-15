import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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
    const x = (clientX / window.innerWidth - 0.5) * 14
    const y = (clientY / window.innerHeight - 0.5) * 14
    setMousePos({ x, y })
  }

  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden', color: '#111827' }} onMouseMove={handleMouseMove}>
      {/* ✦ 1. EXACT AETHER STUDIO UNIVERSE HERO WITH EXTRACTED ASSET COLLECTION */}
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
          padding: 'clamp(140px, 15vw, 170px) 24px clamp(80px, 9vw, 110px)',
          boxSizing: 'border-box',
        }}
      >
        <Navbar />

        {/* ─── DOTTED ORBIT NETWORK, NODES & ISOLATED STARS ─── */}
        <svg
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          {/* Delicate Dotted Orbit Curves */}
          <path
            d="M 140 180 Q 300 190 440 220 T 780 240"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <path
            d="M 780 240 Q 1040 210 1200 230 T 1500 210"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <path
            d="M 850 490 Q 1120 480 1280 540 T 1480 660"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <path
            d="M 320 400 Q 240 500 260 620"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />

          {/* Green Connecting Nodes */}
          <circle cx="440" cy="220" r="3.5" fill="#84cc16" />
          <circle cx="1040" cy="210" r="3.5" fill="#84cc16" />
          <circle cx="1120" cy="480" r="3.5" fill="#84cc16" />
          <circle cx="260" cy="620" r="3.5" fill="#84cc16" />

          {/* Isolated Stars & Sparkles */}
          <path d="M 180 120 L 183 130 L 193 133 L 183 136 L 180 146 L 177 136 L 167 133 L 177 130 Z" fill="#111827" />
          <path d="M 480 160 L 483 170 L 493 173 L 483 176 L 480 186 L 477 176 L 467 173 L 477 170 Z" fill="#84cc16" />
          <path d="M 1260 120 L 1263 130 L 1273 133 L 1263 136 L 1260 146 L 1257 136 L 1247 133 L 1257 130 Z" fill="#111827" />
          <path d="M 1300 290 L 1302 298 L 1310 300 L 1302 302 L 1300 310 L 1298 302 L 1290 300 L 1298 298 Z" fill="#84cc16" />
          <path d="M 1520 180 L 1522 186 L 1528 188 L 1522 190 L 1520 196 L 1518 190 L 1512 188 L 1518 186 Z" fill="#111827" />
          <path d="M 330 520 L 332 528 L 340 530 L 332 532 L 330 540 L 328 532 L 320 530 L 328 528 Z" fill="#111827" />
        </svg>

        {/* ─── 1. TOP-LEFT: EXPLORER CHARACTER & "idea → system → experience" ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.7, y: mousePos.y * -0.7 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '8%',
            left: 'clamp(2%, 4vw, 7%)',
            width: 'clamp(200px, 22vw, 300px)',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          <img
            src="/hero/explorer_character.png"
            alt="Aether Explorer & Sketchbook"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* ─── 2. LEFT: AETHER / WEB MINIATURE PROJECT PREVIEW ─── */}
        <motion.div
          animate={{ x: mousePos.x * -1.0, y: mousePos.y * -1.0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.04, y: -4 }}
          style={{
            position: 'absolute',
            top: '24%',
            left: 'clamp(1%, 3vw, 4%)',
            width: 'clamp(240px, 24vw, 340px)',
            zIndex: 6,
            cursor: 'pointer',
          }}
        >
          <img
            src="/hero/aether_web_card.png"
            alt="Aether Web Project"
            style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.12))' }}
          />
        </motion.div>

        {/* ─── 3. LOWER-LEFT: CLIENT TESTIMONIAL & 3D GLASS CUBE ARTIFACT ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.8, y: mousePos.y * -0.8 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '14%',
            left: 'clamp(2%, 4vw, 6%)',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            zIndex: 6,
          }}
        >
          {/* Testimonial Quote Card */}
          <div style={{ width: 'clamp(150px, 15vw, 200px)' }}>
            <img
              src="/hero/client_quote_card.png"
              alt="Aether Studio Testimonial"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.06))' }}
            />
          </div>

          {/* 3D Glass Cube Artifact */}
          <div style={{ width: 'clamp(120px, 14vw, 180px)' }}>
            <img
              src="/hero/glass_cube_artifact.png"
              alt="3D Glass Artifact"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 4. BOTTOM-LEFT: SERVICE LAB BADGE ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.04 }}
          style={{
            position: 'absolute',
            bottom: '4%',
            left: 'clamp(2%, 4vw, 6%)',
            width: 'clamp(180px, 18vw, 240px)',
            zIndex: 7,
            cursor: 'pointer',
          }}
        >
          <img
            src="/hero/service_lab_pill.png"
            alt="Service Lab Design Systems"
            style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 8px 20px rgba(190,242,100,0.3))' }}
          />
        </motion.div>

        {/* ─── 5. UPPER-RIGHT: AETHER / SPATIAL ORB & SPATIAL OS BADGE ─── */}
        <motion.div
          animate={{ x: mousePos.x * 1.0, y: mousePos.y * 1.0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '8%',
            right: 'clamp(2%, 4vw, 6%)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            zIndex: 6,
          }}
        >
          {/* Spatial 3D Glass Orb */}
          <div style={{ width: 'clamp(140px, 15vw, 190px)' }}>
            <img
              src="/hero/aether_spatial_orb.png"
              alt="Aether Spatial 3D"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Spatial Computing OS Badge */}
          <div style={{ width: 'clamp(130px, 13vw, 170px)' }}>
            <img
              src="/hero/spatial_os_badge.png"
              alt="Spatial Computing OS"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.06))' }}
            />
          </div>
        </motion.div>

        {/* ─── 6. RIGHT: AETHER / SYSTEMS DESIGN PANEL ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.9, y: mousePos.y * 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.04, y: -4 }}
          style={{
            position: 'absolute',
            top: '32%',
            right: 'clamp(2%, 4vw, 6%)',
            width: 'clamp(210px, 21vw, 280px)',
            zIndex: 6,
            cursor: 'pointer',
          }}
        >
          <img
            src="/hero/aether_systems_panel.png"
            alt="Aether Systems Panel"
            style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.08))' }}
          />
        </motion.div>

        {/* ─── 7. LOWER-RIGHT: AETHER / MOTION CARD ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.8, y: mousePos.y * 0.8 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.04 }}
          style={{
            position: 'absolute',
            bottom: '22%',
            right: 'clamp(2%, 4vw, 7%)',
            width: 'clamp(180px, 17vw, 230px)',
            zIndex: 6,
            cursor: 'pointer',
          }}
        >
          <img
            src="/hero/aether_motion_card.png"
            alt="Aether Motion Card"
            style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.06))' }}
          />
        </motion.div>

        {/* ─── 8. BOTTOM-RIGHT: "MADE TO BE REMEMBERED" & CYCLIST ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.7, y: mousePos.y * 0.7 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '4%',
            right: 'clamp(2%, 4vw, 7%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          {/* Handwritten Annotation */}
          <div style={{ width: 'clamp(130px, 13vw, 170px)', marginBottom: 2 }}>
            <img
              src="/hero/made_to_remembered.png"
              alt="made to be remembered"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Cyclist Character */}
          <div style={{ width: 'clamp(140px, 15vw, 190px)' }}>
            <img
              src="/hero/cyclist_illustration.png"
              alt="Aether Cyclist"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 9. CENTER HERO HEADLINE & ACTIONS (MATCHING BASE) ─── */}
        <div style={{ maxWidth: 880, textAlign: 'center', position: 'relative', zIndex: 10 }}>
          {/* Top Pill Tag */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 100,
                padding: '6px 18px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#84cc16' }} />
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#84cc16' }} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#374151',
                }}
              >
                TRUSTED BY OVER 200+ GLOBAL BRANDS
              </span>
            </div>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(44px, 6.4vw, 84px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#111827',
              margin: '0 0 20px',
            }}
          >
            Aether helps
            <br />
            you build
            <br />
            <span
              style={{
                background: '#bef264',
                padding: '4px 20px',
                borderRadius: 16,
                color: '#14532d',
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: 600,
                display: 'inline-block',
                transform: 'rotate(-1.2deg)',
                boxShadow: '0 6px 20px rgba(190,242,100,0.4)',
                margin: '6px 0',
              }}
            >
              unforgettable digital
              <br />
              products
            </span>
            <br />
            together
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(15px, 1.25vw, 18px)',
              fontWeight: 300,
              lineHeight: 1.65,
              color: '#6b7280',
              maxWidth: 560,
              margin: '0 auto 32px',
            }}
          >
            We partner with visionary founders and iconic brands to design bespoke web experiences, 3D spatial
            interfaces, and scalable token design systems.
          </motion.p>

          {/* Action Buttons with Narrowed Indicator Arrow */}
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
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
