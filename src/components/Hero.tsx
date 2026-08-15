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
      {/* ✦ PHASE 1: ASSET PLACEMENT & COMPOSITION (FROM D:\Downloads\Untitled design) */}
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

        {/* ─── 1. TOP-LEFT: EXPLORER ILLUSTRATION & "idea → system → experience" ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.7, y: mousePos.y * -0.7 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '8%',
            left: 'clamp(2%, 4vw, 7%)',
            width: 'clamp(210px, 22vw, 310px)',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          <img
            src="/hero/explorer_character.png"
            alt="Aether Explorer Illustration"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* ─── 2. LEFT: AETHER / WEB PROJECT PREVIEW ─── */}
        <motion.div
          animate={{ x: mousePos.x * -1.0, y: mousePos.y * -1.0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.04, y: -4 }}
          style={{
            position: 'absolute',
            top: '25%',
            left: 'clamp(1%, 3vw, 4%)',
            width: 'clamp(250px, 24vw, 350px)',
            zIndex: 6,
            cursor: 'pointer',
          }}
        >
          <img
            src="/hero/aether_web_card.png"
            alt="Aether Web Project Preview"
            style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.12))' }}
          />
        </motion.div>

        {/* ─── 3. LOWER-LEFT: CLIENT TESTIMONIAL & 3D CRYSTAL/GLASS CUBE ─── */}
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
          {/* Testimonial Card */}
          <div style={{ width: 'clamp(150px, 15vw, 200px)' }}>
            <img
              src="/hero/client_quote_card.png"
              alt="Aether Testimonial Card"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.06))' }}
            />
          </div>

          {/* 3D Crystal / Glass Cube */}
          <div style={{ width: 'clamp(120px, 14vw, 180px)' }}>
            <img
              src="/hero/glass_cube_artifact.png"
              alt="3D Crystal Glass Object"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 4. BOTTOM-LEFT: SERVICE BADGE ─── */}
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
            alt="Service Badge"
            style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 8px 20px rgba(190,242,100,0.3))' }}
          />
        </motion.div>

        {/* ─── 5. UPPER-RIGHT: AETHER / SPATIAL ASSET & SPATIAL COMPUTING OS CARD ─── */}
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
          {/* Spatial 3D Asset */}
          <div style={{ width: 'clamp(140px, 15vw, 190px)' }}>
            <img
              src="/hero/aether_spatial_orb.png"
              alt="Aether Spatial Asset"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Spatial Computing OS Card */}
          <div style={{ width: 'clamp(130px, 13vw, 170px)' }}>
            <img
              src="/hero/spatial_os_badge.png"
              alt="Spatial Computing OS Card"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.06))' }}
            />
          </div>
        </motion.div>

        {/* ─── 6. RIGHT: AETHER / SYSTEMS DESIGN-SYSTEM PANEL ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.9, y: mousePos.y * 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.04, y: -4 }}
          style={{
            position: 'absolute',
            top: '32%',
            right: 'clamp(2%, 4vw, 6%)',
            width: 'clamp(220px, 21vw, 290px)',
            zIndex: 6,
            cursor: 'pointer',
          }}
        >
          <img
            src="/hero/aether_systems_panel.png"
            alt="Aether Systems Design Panel"
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

        {/* ─── 8. BOTTOM-RIGHT: CYCLIST ILLUSTRATION & "made to be remembered." ─── */}
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
              alt="made to be remembered."
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Cyclist Illustration */}
          <div style={{ width: 'clamp(140px, 15vw, 190px)' }}>
            <img
              src="/hero/cyclist_illustration.png"
              alt="Aether Cyclist Illustration"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 9. CENTER HERO HEADLINE & ACTIONS (UNCHANGED BASE) ─── */}
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
