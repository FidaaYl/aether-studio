import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
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
      {/* ✦ 1. AETHER UNIVERSE HERO — CONNECTED RIGHT-SIDE ART-DIRECTION */}
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
            EDITED SVG LAYER: RIGHT-SIDE CONNECTING ORBIT TRAJECTORY & DOODLES
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
          {/* 1. Left Partial Arc behind Web Preview */}
          <path
            d="M 180 220 C 280 260, 340 380, 260 480"
            stroke="#cbd5e1"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* 2. Soft Trajectory near Web -> Headline */}
          <path
            d="M 390 320 C 450 300, 490 360, 460 430"
            stroke="#e2e8f0"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* 3. Upper-Right Spatial Arc */}
          <path
            d="M 1360 200 C 1220 180, 1140 280, 1190 390"
            stroke="#cbd5e1"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* ─── 4. NEW: CONNECTING TRAJECTORY FROM SYSTEMS CARD TO BOTTOM-RIGHT CLUSTER ─── */}
          {/* Begins behind Systems card, curves gently through negative space toward "made to be remembered." and cyclist */}
          <path
            d="M 1250 420 C 1320 480, 1370 560, 1340 650 C 1320 710, 1270 750, 1350 820"
            stroke="#cbd5e1"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.75"
          />
          {/* Subtle lime accent curve on the connecting path */}
          <path
            d="M 1340 650 C 1365 720, 1420 760, 1480 810"
            stroke="#84cc16"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* 5. Simplified loose curved ground line beneath cyclist */}
          <path
            d="M 1200 890 C 1280 870, 1390 885, 1480 870"
            stroke="#cbd5e1"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* 6. Hand-Drawn Editorial Arrows */}
          {/* Web Preview -> Headline */}
          <path
            d="M 440 380 C 470 388, 485 402, 500 412"
            stroke="#475569"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M 492 404 L 502 414 L 490 418" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />

          {/* Systems Panel -> Headline */}
          <path
            d="M 1120 410 C 1090 418, 1070 434, 1052 448"
            stroke="#475569"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M 1062 440 L 1050 450 L 1060 460" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />

          {/* Spatial Orb -> Central Headline */}
          <path
            d="M 1160 230 C 1120 245, 1080 262, 1050 278"
            stroke="#475569"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M 1062 270 L 1048 280 L 1058 290" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />

          {/* Arrow near "made to be remembered." toward Cyclist */}
          <path
            d="M 1330 730 C 1350 740, 1360 755, 1370 770"
            stroke="#1e293b"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M 1362 762 L 1372 772 L 1376 760" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" />

          {/* 7. Tiny Green Energy Nodes along Trajectories */}
          <circle cx="260" cy="480" r="3.5" fill="#84cc16" />
          <circle cx="340" cy="380" r="3" fill="#84cc16" />
          <circle cx="1190" cy="390" r="3.5" fill="#84cc16" />
          <circle cx="560" cy="710" r="3" fill="#84cc16" />

          {/* Green nodes along the right-side connecting story */}
          <circle cx="1290" cy="520" r="3" fill="#84cc16" />
          <circle cx="1340" cy="650" r="3.5" fill="#84cc16" />
          <circle cx="1420" cy="760" r="3" fill="#84cc16" />
          <circle cx="1400" cy="875" r="3" fill="#84cc16" />

          {/* 8. Hand-Drawn Stars & Sparkles in Negative Spaces */}
          <g transform="translate(680, 140)">
            <path d="M0 -7 Q0 0 7 0 Q0 0 0 7 Q0 0 -7 0 Q0 0 0 -7" fill="#84cc16" />
          </g>
          <g transform="translate(200, 310)">
            <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8" fill="#475569" />
          </g>
          <g transform="translate(460, 500)">
            <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" />
          </g>
          <g transform="translate(1060, 170)">
            <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8" fill="#84cc16" />
          </g>
          <g transform="translate(1380, 330)">
            <path d="M0 -7 Q0 0 7 0 Q0 0 0 7 Q0 0 -7 0 Q0 0 0 -7" fill="#475569" />
          </g>
          <g transform="translate(480, 770)">
            <path d="M0 -7 Q0 0 7 0 Q0 0 0 7 Q0 0 -7 0 Q0 0 0 -7" fill="#84cc16" />
          </g>
          <g transform="translate(1420, 680)">
            <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" />
          </g>

          {/* 9. Micro-Doodles */}
          <text x="320" y="240" fill="#94a3b8" fontSize="13" fontFamily="monospace">✦</text>
          <text x="1230" y="200" fill="#84cc16" fontSize="14" fontFamily="monospace">★</text>
          <text x="1080" y="550" fill="#cbd5e1" fontSize="12" fontFamily="monospace">+</text>
          <text x="520" y="640" fill="#cbd5e1" fontSize="13" fontFamily="monospace">+</text>
        </svg>

        {/* ═════════════════════════════════════════════════════════════════════
            ART-DIRECTED ARTIFACT CLUSTERS AROUND HEADLINE
            ═════════════════════════════════════════════════════════════════════ */}

        {/* ─── 1. TOP-LEFT: EXACT SUPPLIED "idea → system → experience" + EXPLORER ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '9%',
            left: 'clamp(3%, 5.5vw, 8%)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
            zIndex: 6,
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: 'clamp(95px, 8.5vw, 135px)' }}>
            <img
              src="/user_uploads/explorer.png"
              alt="Aether Explorer"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
          <div style={{ width: 'clamp(120px, 11vw, 170px)', marginTop: 6 }}>
            <img
              src="/user_uploads/idea_note.png"
              alt="idea system experience"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 2. LEFT: AETHER / WEB MINIATURE PROJECT PREVIEW ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.85, y: mousePos.y * -0.85 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.04, rotate: -4 }}
          style={{
            position: 'absolute',
            top: '26%',
            left: 'clamp(2.5%, 5vw, 7.5%)',
            width: 'clamp(290px, 21.5vw, 390px)',
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

        {/* ─── 3. LOWER-LEFT CLUSTER: TESTIMONIAL + 3D GLASS CUBE ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.65, y: mousePos.y * -0.65 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '16%',
            left: 'clamp(3%, 5.5vw, 8%)',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            zIndex: 6,
          }}
        >
          <div style={{ width: 'clamp(145px, 13vw, 200px)', transform: 'rotate(-1.5deg)' }}>
            <img
              src="/user_uploads/testimonial.png"
              alt="Aether Studio Testimonial"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.06))' }}
            />
          </div>

          <div style={{ width: 'clamp(130px, 13vw, 190px)', transform: 'rotate(2deg)' }}>
            <img
              src="/user_uploads/glass_cube.png"
              alt="3D Glass Cube Artifact"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>

        {/* ─── 4. LOWER-LEFT: TILTED FLOATING SERVICE LAB BADGE (-3.5° TILT) ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.04, rotate: -2 }}
          style={{
            position: 'absolute',
            bottom: '7%',
            left: 'clamp(4%, 6vw, 9%)',
            width: 'clamp(250px, 17vw, 300px)',
            background: '#bef264',
            borderRadius: 100,
            padding: '11px 18px 11px 22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transform: 'rotate(-3.5deg)',
            boxShadow: '0 10px 25px rgba(190,242,100,0.38), 0 4px 10px rgba(0,0,0,0.06)',
            zIndex: 7,
            cursor: 'pointer',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9.5,
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#166534',
              }}
            >
              SERVICE LAB
            </span>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 13.5,
                fontWeight: 700,
                color: '#14532d',
                whiteSpace: 'nowrap',
              }}
            >
              Design Systems & 3D UI
            </span>
          </div>

          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: '#111827',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              flexShrink: 0,
            }}
          >
            <ArrowRight size={16} strokeWidth={2.5} />
          </div>
        </motion.div>

        {/* ─── 5. UPPER-RIGHT: AETHER / SPATIAL 3D ORB ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.85, y: mousePos.y * 0.85 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '10%',
            right: 'clamp(3.5%, 6vw, 8.5%)',
            width: 'clamp(200px, 17vw, 280px)',
            zIndex: 6,
          }}
        >
          <img
            src="/user_uploads/spatial_orb.png"
            alt="Aether Spatial 3D Sphere"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* ─── 6. RIGHT: AETHER / SYSTEMS DESIGN PANEL (UP & LEFT BY ~25PX) ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.75, y: mousePos.y * 0.75 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.04, rotate: 2 }}
          style={{
            position: 'absolute',
            top: '24%',
            right: 'clamp(3.5%, 6vw, 8.5%)',
            width: 'clamp(270px, 20vw, 360px)',
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

        {/* ─── 7 & 8. RIGHT-SIDE: LIFTED UNIFIED BOTTOM-RIGHT CLUSTER (UP BY ~80PX) ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.55, y: mousePos.y * 0.55 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '12%',
            right: 'clamp(4%, 6.5vw, 9.5%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 8,
            zIndex: 6,
          }}
        >
          {/* Top of Cluster: Palette Pill + Cursor + "made to be remembered." */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 'clamp(120px, 11vw, 160px)' }}>
              <img
                src="/user_uploads/palette_pill.png"
                alt="Color Palette Swatches"
                style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.05))' }}
              />
            </div>
            <div style={{ width: 22 }}>
              <img
                src="/user_uploads/green_cursor.png"
                alt="Green Cursor"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>
            {/* EXACT SUPPLIED "made to be remembered." IMAGE ASSET */}
            <div style={{ width: 'clamp(125px, 12vw, 175px)' }}>
              <img
                src="/user_uploads/remembered_note.png"
                alt="made to be remembered"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>
          </div>

          {/* Bottom of Cluster: Cyclist (Enlarged by ~12%) */}
          <div style={{ width: 'clamp(170px, 16.5vw, 250px)', marginTop: 2 }}>
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
