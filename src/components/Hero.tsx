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
    const x = (clientX / window.innerWidth - 0.5) * 10
    const y = (clientY / window.innerHeight - 0.5) * 10
    setMousePos({ x, y })
  }

  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden', color: '#111827' }} onMouseMove={handleMouseMove}>
      {/* ✦ 1. EXACT AETHER STUDIO HERO WITH ALL USER UPLOADED ASSETS */}
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

        {/* ─── 1. TOP-LEFT: EXPLORER CHARACTER & "idea → system → experience" ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '7%',
            left: 'clamp(1.5%, 3.5vw, 6%)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: 'clamp(80px, 8vw, 120px)' }}>
            <img
              src="/user_uploads/explorer.png"
              alt="Aether Explorer"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
          <div style={{ width: 'clamp(110px, 11vw, 160px)', marginTop: 4 }}>
            <img
              src="/user_uploads/idea_note.png"
              alt="idea system experience"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 2. LEFT: AETHER / WEB MINIATURE PROJECT PREVIEW ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.9, y: mousePos.y * -0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.03, y: -2 }}
          style={{
            position: 'absolute',
            top: '24%',
            left: 'clamp(1%, 2.5vw, 4.5%)',
            width: 'clamp(240px, 23vw, 340px)',
            zIndex: 6,
            cursor: 'pointer',
          }}
        >
          <img
            src="/user_uploads/aether_web.png"
            alt="Aether Web Project"
            style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.08))' }}
          />
        </motion.div>

        {/* ─── 3. LOWER-LEFT: CLIENT TESTIMONIAL & 3D GLASS CUBE ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.7, y: mousePos.y * -0.7 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '12%',
            left: 'clamp(1.5%, 3vw, 5%)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            zIndex: 6,
          }}
        >
          <div style={{ width: 'clamp(130px, 13vw, 180px)' }}>
            <img
              src="/user_uploads/testimonial.png"
              alt="Client Testimonial"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.05))' }}
            />
          </div>

          <div style={{ width: 'clamp(110px, 11vw, 150px)' }}>
            <img
              src="/user_uploads/glass_cube.png"
              alt="3D Glass Cube"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 4. BOTTOM-LEFT: ORGANIC GLASS SHAPES ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '3%',
            left: 'clamp(1.5%, 3vw, 5%)',
            width: 'clamp(130px, 13vw, 180px)',
            zIndex: 7,
          }}
        >
          <img
            src="/user_uploads/organic_glass.png"
            alt="Organic Glass Prisms"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* ─── 5. UPPER-RIGHT: AETHER / SPATIAL ORB ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.9, y: mousePos.y * 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '7%',
            right: 'clamp(1.5%, 3.5vw, 6%)',
            width: 'clamp(170px, 17vw, 240px)',
            zIndex: 6,
          }}
        >
          <img
            src="/user_uploads/spatial_orb.png"
            alt="Aether Spatial 3D Orb"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* ─── 6. RIGHT: AETHER / SYSTEMS DESIGN PANEL ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.8, y: mousePos.y * 0.8 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.03, y: -2 }}
          style={{
            position: 'absolute',
            top: '28%',
            right: 'clamp(1.5%, 3vw, 5%)',
            width: 'clamp(200px, 20vw, 280px)',
            zIndex: 6,
            cursor: 'pointer',
          }}
        >
          <img
            src="/user_uploads/systems_panel.png"
            alt="Aether Systems Panel"
            style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 10px 22px rgba(0,0,0,0.06))' }}
          />
        </motion.div>

        {/* ─── 7. LOWER-RIGHT: COLOR PALETTE PILL & GREEN CURSOR ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.7, y: mousePos.y * 0.7 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '18%',
            right: 'clamp(1.5%, 3vw, 5%)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            zIndex: 6,
          }}
        >
          <div style={{ width: 'clamp(120px, 12vw, 160px)' }}>
            <img
              src="/user_uploads/palette_pill.png"
              alt="Color Palette Swatches"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.04))' }}
            />
          </div>
          <div style={{ width: 24 }}>
            <img
              src="/user_uploads/green_cursor.png"
              alt="Green Cursor"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 8. BOTTOM-RIGHT: CYCLIST ILLUSTRATION & "made to be remembered." ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.6, y: mousePos.y * 0.6 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '3%',
            right: 'clamp(1.5%, 3vw, 5%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: 'clamp(110px, 11vw, 150px)', marginBottom: 2 }}>
            <img
              src="/user_uploads/remembered_note.png"
              alt="made to be remembered"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>

          <div style={{ width: 'clamp(140px, 14vw, 190px)' }}>
            <img
              src="/user_uploads/cyclist.png"
              alt="Aether Cyclist"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 9. CENTER HERO HEADLINE & ACTIONS (UNCHANGED BASE) ─── */}
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

          {/* Action Buttons */}
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
