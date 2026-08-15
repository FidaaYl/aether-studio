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
    const x = (clientX / window.innerWidth - 0.5) * 12
    const y = (clientY / window.innerHeight - 0.5) * 12
    setMousePos({ x, y })
  }

  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden', color: '#111827' }} onMouseMove={handleMouseMove}>
      {/* ✦ 1. AETHER UNIVERSE HERO — DENSE ORBITAL COMPOSITION (REFERENCE A BLUEPRINT) */}
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
          padding: 'clamp(110px, 12vw, 150px) 20px clamp(60px, 7vw, 90px)',
          boxSizing: 'border-box',
        }}
      >
        <Navbar />

        {/* ═════════════════════════════════════════════════════════════════════
            PHASE 2: EDITORIAL DOODLE, ORBIT PATH & SPARKLE NETWORK (SVG LAYER)
            ═════════════════════════════════════════════════════════════════════ */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 3,
          }}
          viewBox="0 0 1600 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* 1. Orbit Arc from Top-Left Explorer down around Web Preview */}
          <path
            d="M 120 180 C 260 220, 360 380, 240 520 C 140 640, 180 780, 320 820"
            stroke="#cbd5e1"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />

          {/* 2. Loose Orbit passing behind AETHER / WEB toward Headline */}
          <path
            d="M 380 260 C 480 230, 540 320, 480 430 C 420 540, 310 590, 210 560"
            stroke="#94a3b8"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            strokeLinecap="round"
          />

          {/* 3. Orbit from Spatial Orb extending toward central headline */}
          <path
            d="M 1480 140 C 1280 90, 1050 180, 1140 340 C 1220 480, 1420 440, 1460 620"
            stroke="#cbd5e1"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />

          {/* 4. Neon-Lime connecting trajectory behind Systems panel */}
          <path
            d="M 1180 320 C 1320 280, 1460 360, 1380 500 C 1300 640, 1140 680, 1260 840"
            stroke="#84cc16"
            strokeWidth="1.5"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* 5. Curved ground/trajectory line under Cyclist */}
          <path
            d="M 1120 920 C 1260 900, 1420 930, 1560 910"
            stroke="#64748b"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M 1200 935 C 1320 925, 1460 945, 1540 930"
            stroke="#94a3b8"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* 6. Hand-Drawn Editorial Arrows */}
          {/* Arrow: Web Preview -> Headline */}
          <path
            d="M 420 380 C 460 390, 480 410, 500 420"
            stroke="#1e293b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M 490 410 L 502 422 L 488 428" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />

          {/* Arrow: Systems Panel -> Central Idea */}
          <path
            d="M 1140 440 C 1100 450, 1070 470, 1050 490"
            stroke="#1e293b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M 1062 480 L 1048 492 L 1060 502" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />

          {/* Arrow: Spatial Orb -> Headline */}
          <path
            d="M 1190 220 C 1140 240, 1080 260, 1040 280"
            stroke="#1e293b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M 1054 270 L 1038 282 L 1050 292" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />

          {/* 7. Tiny Green Energy Nodes on Orbits */}
          <circle cx="240" cy="520" r="4.5" fill="#84cc16" />
          <circle cx="360" cy="380" r="3.5" fill="#84cc16" />
          <circle cx="1140" cy="340" r="4.5" fill="#84cc16" />
          <circle cx="1380" cy="500" r="4" fill="#84cc16" />
          <circle cx="1200" cy="820" r="4" fill="#84cc16" />
          <circle cx="580" cy="740" r="3.5" fill="#84cc16" />

          {/* 8. Hand-Drawn Stars & Sparkles in Negative Spaces */}
          {/* Sparkle near Top-Center */}
          <g transform="translate(680, 140)">
            <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8" fill="#84cc16" />
          </g>
          {/* Sparkle near Left Web Preview */}
          <g transform="translate(180, 310)">
            <path d="M0 -10 Q0 0 10 0 Q0 0 0 10 Q0 0 -10 0 Q0 0 0 -10" fill="#1e293b" />
          </g>
          {/* Sparkle between Web and Headline */}
          <g transform="translate(460, 520)">
            <path d="M0 -7 Q0 0 7 0 Q0 0 0 7 Q0 0 -7 0 Q0 0 0 -7" fill="#84cc16" />
          </g>
          {/* Sparkle near Upper-Right Spatial */}
          <g transform="translate(1080, 160)">
            <path d="M0 -9 Q0 0 9 0 Q0 0 0 9 Q0 0 -9 0 Q0 0 0 -9" fill="#84cc16" />
          </g>
          {/* Sparkle near Systems Panel */}
          <g transform="translate(1440, 360)">
            <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8" fill="#1e293b" />
          </g>
          {/* Sparkle near Lower-Left Glass Cube */}
          <g transform="translate(480, 810)">
            <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8" fill="#84cc16" />
          </g>
          {/* Sparkle near Lower-Right Cyclist */}
          <g transform="translate(1420, 780)">
            <path d="M0 -7 Q0 0 7 0 Q0 0 0 7 Q0 0 -7 0 Q0 0 0 -7" fill="#1e293b" />
          </g>

          {/* 9. Micro-Doodles: Crosses, Dashes & Tiny Circles */}
          <text x="320" y="240" fill="#94a3b8" fontSize="14" fontFamily="monospace">✦</text>
          <text x="1260" y="190" fill="#84cc16" fontSize="16" fontFamily="monospace">★</text>
          <text x="1100" y="620" fill="#94a3b8" fontSize="12" fontFamily="monospace">+</text>
          <text x="520" y="660" fill="#94a3b8" fontSize="14" fontFamily="monospace">+</text>
          <text x="1360" y="680" fill="#84cc16" fontSize="12" fontFamily="monospace">✦</text>
        </svg>

        {/* ═════════════════════════════════════════════════════════════════════
            PHASE 1 CORRECTION: PROPORTIONAL LARGE ASSETS BROUGHT CLOSE TO HEADLINE
            ═════════════════════════════════════════════════════════════════════ */}

        {/* ─── 1. TOP-LEFT: EXPLORER CHARACTER + "idea → system → experience" ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '8%',
            left: 'clamp(2%, 4.5vw, 7%)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
            zIndex: 6,
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: 'clamp(100px, 9vw, 140px)' }}>
            <img
              src="/user_uploads/explorer.png"
              alt="Aether Explorer Character"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
          <div style={{ width: 'clamp(130px, 12vw, 180px)', marginTop: 8 }}>
            <img
              src="/user_uploads/idea_note.png"
              alt="idea system experience"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 2. LEFT: AETHER / WEB MINIATURE PROJECT PREVIEW (19-22vw LARGE) ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.85, y: mousePos.y * -0.85 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.04, rotate: -4 }}
          style={{
            position: 'absolute',
            top: '26%',
            left: 'clamp(1.5%, 4vw, 6%)',
            width: 'clamp(280px, 21vw, 380px)',
            transform: 'rotate(-5deg)',
            zIndex: 7,
            cursor: 'pointer',
          }}
        >
          <img
            src="/user_uploads/aether_web.png"
            alt="Aether Web Project Preview"
            style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.11))' }}
          />
        </motion.div>

        {/* ─── 3. LOWER-LEFT: CLIENT TESTIMONIAL & 3D GLASS CUBE (14-16vw) ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.65, y: mousePos.y * -0.65 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '12%',
            left: 'clamp(2%, 4.5vw, 7%)',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            zIndex: 6,
          }}
        >
          <div style={{ width: 'clamp(150px, 14vw, 220px)' }}>
            <img
              src="/user_uploads/testimonial.png"
              alt="Aether Studio Testimonial"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.06))' }}
            />
          </div>

          <div style={{ width: 'clamp(120px, 12vw, 180px)' }}>
            <img
              src="/user_uploads/glass_cube.png"
              alt="3D Glass Cube Artifact"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 4. BOTTOM-LEFT: ORGANIC GLASS SHAPES (10-12vw) ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.45, y: mousePos.y * -0.45 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '2%',
            left: 'clamp(3%, 5.5vw, 8%)',
            width: 'clamp(130px, 11vw, 170px)',
            zIndex: 5,
          }}
        >
          <img
            src="/user_uploads/organic_glass.png"
            alt="Organic Glass Prisms"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* ─── 5. UPPER-RIGHT: AETHER / SPATIAL 3D ORB (15-18vw LARGE & INWARD) ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.85, y: mousePos.y * 0.85 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '7%',
            right: 'clamp(2%, 4.5vw, 7%)',
            width: 'clamp(200px, 17vw, 290px)',
            zIndex: 6,
          }}
        >
          <img
            src="/user_uploads/spatial_orb.png"
            alt="Aether Spatial 3D Sphere"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* ─── 6. RIGHT: AETHER / SYSTEMS DESIGN PANEL (16-19vw LARGE & INWARD) ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.75, y: mousePos.y * 0.75 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.04, rotate: 2 }}
          style={{
            position: 'absolute',
            top: '29%',
            right: 'clamp(2%, 4vw, 6.5%)',
            width: 'clamp(230px, 18vw, 320px)',
            zIndex: 6,
            cursor: 'pointer',
          }}
        >
          <img
            src="/user_uploads/systems_panel.png"
            alt="Aether Design Systems Panel"
            style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.08))' }}
          />
        </motion.div>

        {/* ─── 7. LOWER-RIGHT: COLOR PALETTE PILL & GREEN CURSOR ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.65, y: mousePos.y * 0.65 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '20%',
            right: 'clamp(3%, 5vw, 8%)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            zIndex: 6,
          }}
        >
          <div style={{ width: 'clamp(140px, 13vw, 190px)' }}>
            <img
              src="/user_uploads/palette_pill.png"
              alt="Color Palette Swatches"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.05))' }}
            />
          </div>
          <div style={{ width: 28 }}>
            <img
              src="/user_uploads/green_cursor.png"
              alt="Green Cursor"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 8. BOTTOM-RIGHT: CYCLIST ILLUSTRATION + "made to be remembered." (15-18vw) ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.55, y: mousePos.y * 0.55 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '2%',
            right: 'clamp(2%, 4vw, 6.5%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: 'clamp(130px, 12vw, 180px)', marginBottom: 2 }}>
            <img
              src="/user_uploads/remembered_note.png"
              alt="made to be remembered"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>

          <div style={{ width: 'clamp(160px, 16vw, 240px)' }}>
            <img
              src="/user_uploads/cyclist.png"
              alt="Aether Cyclist Illustration"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ═════════════════════════════════════════════════════════════════════
            BASE HERO: UNCHANGED HEADLINE, HIGHLIGHT, PARAGRAPH & ACTION BUTTONS
            ═════════════════════════════════════════════════════════════════════ */}
        <div style={{ maxWidth: 840, textAlign: 'center', position: 'relative', zIndex: 10 }}>
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
              fontSize: 'clamp(42px, 6vw, 80px)',
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
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              fontWeight: 300,
              lineHeight: 1.65,
              color: '#6b7280',
              maxWidth: 540,
              margin: '0 auto 30px',
            }}
          >
            We partner with visionary founders and iconic brands to design bespoke web experiences, 3D spatial
            interfaces, and scalable token design systems.
          </motion.p>

          {/* Action Buttons with Indicator Arrow */}
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
