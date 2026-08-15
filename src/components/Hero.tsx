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
    const x = (clientX / window.innerWidth - 0.5) * 14
    const y = (clientY / window.innerHeight - 0.5) * 14
    setMousePos({ x, y })
  }

  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden', color: '#111827' }} onMouseMove={handleMouseMove}>
      {/* ✦ 1. AETHER UNIVERSE HERO */}
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
          padding: 'clamp(140px, 14vw, 180px) 20px clamp(70px, 8vw, 100px)',
          boxSizing: 'border-box',
        }}
      >
        <Navbar />

        {/* ═════════════════════════════════════════════════════════════════════
            SVG LAYER: CONNECTING TRAJECTORIES & ASYMMETRIC CENTRAL CONNECTING ORBIT
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
          {/* ─── 0. ASYMMETRIC CENTRAL CONNECTING ORBIT (BEHIND TYPOGRAPHY) ─── */}
          {/* Left arc of central orbit sweeping from top-left through the flank */}
          <path
            d="M 280 410 C 380 240, 580 190, 710 210"
            stroke="#cbd5e1"
            strokeWidth="1.15"
            strokeDasharray="4 6"
            strokeLinecap="round"
            opacity="0.65"
          />
          {/* Right arc of central orbit sweeping down around the right flank */}
          <path
            d="M 890 220 C 1080 260, 1310 360, 1260 550 C 1220 680, 990 770, 860 760"
            stroke="#cbd5e1"
            strokeWidth="1.15"
            strokeDasharray="4 6"
            strokeLinecap="round"
            opacity="0.65"
          />
          {/* Lower loop completion fading into left side */}
          <path
            d="M 740 760 C 560 750, 330 660, 280 520 C 260 460, 270 430, 280 410"
            stroke="#e2e8f0"
            strokeWidth="1.05"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Tiny nodes on asymmetric central connecting orbit */}
          <circle cx="450" cy="250" r="3.2" fill="#84cc16" opacity="0.9" />
          <circle cx="1180" cy="320" r="3.5" fill="#84cc16" opacity="0.9" />
          <circle cx="1250" cy="600" r="3" fill="#94a3b8" opacity="0.85" />
          <circle cx="380" cy="690" r="3" fill="#84cc16" opacity="0.85" />

          {/* Star accents on central orbit */}
          <g transform="translate(520, 215)">
            <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.9" />
          </g>
          <g transform="translate(1120, 275)">
            <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#94a3b8" opacity="0.85" />
          </g>

          {/* ─── 1. Left Trajectory: Character → Web → 3D/Testimonial → Service Lab ─── */}
          <path
            d="M 170 170 C 270 230, 350 340, 260 460 C 180 570, 200 680, 290 750 C 340 790, 280 870, 210 910"
            stroke="#cbd5e1"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* Left secondary loop near Web preview */}
          <path
            d="M 390 310 C 460 290, 490 360, 460 430"
            stroke="#e2e8f0"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* ─── 2. Right Trajectory: Spatial Orb → Systems → Bottom-Right Cluster ─── */}
          <path
            d="M 1360 170 C 1240 180, 1170 270, 1200 370 C 1240 470, 1370 540, 1340 640 C 1310 710, 1250 740, 1330 810"
            stroke="#cbd5e1"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* Subtle neon-lime accent loop near systems */}
          <path
            d="M 1340 640 C 1365 700, 1420 740, 1470 790"
            stroke="#84cc16"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Simplified ground line beneath cyclist */}
          <path
            d="M 1200 860 C 1280 840, 1390 855, 1480 840"
            stroke="#cbd5e1"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* ─── 3. Directional Arrows ─── */}
          <path
            d="M 450 380 C 475 388, 488 402, 502 412"
            stroke="#475569"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M 494 404 L 504 414 L 492 418" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />

          <path
            d="M 1100 480 C 1070 490, 1050 505, 1030 520"
            stroke="#475569"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M 1042 510 L 1028 522 L 1038 532" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />

          <path
            d="M 1160 220 C 1120 235, 1080 252, 1050 268"
            stroke="#475569"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M 1062 260 L 1048 270 L 1058 280" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />

          <path
            d="M 1330 710 C 1350 720, 1360 735, 1370 750"
            stroke="#1e293b"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M 1362 742 L 1372 752 L 1376 740" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" />

          {/* ─── 4. Side Flow Nodes ─── */}
          <circle cx="260" cy="460" r="3.5" fill="#84cc16" />
          <circle cx="340" cy="360" r="3" fill="#84cc16" />
          <circle cx="290" cy="750" r="3.5" fill="#84cc16" />
          <circle cx="210" cy="910" r="3" fill="#84cc16" />

          <circle cx="1200" cy="370" r="3.5" fill="#84cc16" />
          <circle cx="1270" cy="500" r="3" fill="#84cc16" />
          <circle cx="1340" cy="640" r="3.5" fill="#84cc16" />
          <circle cx="1410" cy="740" r="3" fill="#84cc16" />
          <circle cx="1400" cy="850" r="3" fill="#84cc16" />

          {/* ─── 5. Side Sparkles ─── */}
          <g transform="translate(190, 300)">
            <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8" fill="#475569" />
          </g>
          <g transform="translate(460, 490)">
            <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" />
          </g>
          <g transform="translate(480, 750)">
            <path d="M0 -7 Q0 0 7 0 Q0 0 0 7 Q0 0 -7 0 Q0 0 0 -7" fill="#84cc16" />
          </g>

          <g transform="translate(1060, 160)">
            <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8" fill="#84cc16" />
          </g>
          <g transform="translate(1390, 320)">
            <path d="M0 -7 Q0 0 7 0 Q0 0 0 7 Q0 0 -7 0 Q0 0 0 -7" fill="#475569" />
          </g>
          <g transform="translate(1410, 660)">
            <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" />
          </g>

          {/* Micro-Doodles */}
          <text x="320" y="230" fill="#94a3b8" fontSize="13" fontFamily="monospace">✦</text>
          <text x="1230" y="190" fill="#84cc16" fontSize="14" fontFamily="monospace">★</text>
          <text x="1080" y="530" fill="#cbd5e1" fontSize="12" fontFamily="monospace">+</text>
          <text x="520" y="630" fill="#cbd5e1" fontSize="13" fontFamily="monospace">+</text>
        </svg>

        {/* ═════════════════════════════════════════════════════════════════════
            LEFT SIDE VISUAL ECOSYSTEM
            ═════════════════════════════════════════════════════════════════════ */}

        {/* ─── 1. TOP-LEFT: AETHER CHARACTER + EXACT "idea → system → experience" ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '8.5%',
            left: 'clamp(2.5%, 5vw, 7.5%)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 14,
            zIndex: 6,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: -3, y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            style={{ width: 'clamp(105px, 9.5vw, 145px)', cursor: 'pointer' }}
          >
            <img
              src="/user_uploads/explorer.png"
              alt="Aether Character"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ width: 'clamp(130px, 12vw, 185px)', marginTop: 6, cursor: 'default' }}
          >
            <img
              src="/user_uploads/idea_note.png"
              alt="idea system experience"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </motion.div>
        </motion.div>

        {/* ─── 2. LEFT: AETHER / WEB MINIATURE PROJECT PREVIEW ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.85, y: mousePos.y * -0.85 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.05, rotate: -3, y: -6 }}
          style={{
            position: 'absolute',
            top: '25.5%',
            left: 'clamp(2%, 4.5vw, 7%)',
            width: 'clamp(300px, 22.5vw, 410px)',
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

        {/* ─── 3. LOWER-LEFT: ENLARGED TESTIMONIAL CARD (1.4×) + 3D GLASS CUBE ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.65, y: mousePos.y * -0.65 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '16.5%',
            left: 'clamp(2.5%, 5vw, 7.5%)',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            zIndex: 6,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -4, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 350, damping: 18 }}
            style={{ width: 'clamp(210px, 19.5vw, 295px)', transform: 'rotate(-2deg)', marginBottom: 14, cursor: 'pointer' }}
          >
            <img
              src="/user_uploads/testimonial.png"
              alt="Aether Studio Testimonial"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.07))' }}
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 6, y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            style={{ width: 'clamp(140px, 13.5vw, 200px)', transform: 'rotate(2deg)', cursor: 'pointer' }}
          >
            <img
              src="/user_uploads/glass_cube.png"
              alt="3D Glass Cube Artifact"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </motion.div>
        </motion.div>

        {/* ─── 4. LOWER-LEFT: UNIFIED FLOATING SERVICE LAB GRAPHIC ASSET (PERMANENT -5° TILT IN DEFAULT & HOVER) ─── */}
        <div
          style={{
            position: 'absolute',
            bottom: '6.5%',
            left: 'clamp(3.5%, 5.5vw, 8.5%)',
            zIndex: 7,
            transform: 'rotate(-5deg)',
          }}
        >
          <motion.div
            animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
            transition={{ type: 'spring', damping: 25, stiffness: 80 }}
            whileHover={{ scale: 1.05, rotate: 1.5, y: -3 }}
            style={{
              width: 'clamp(265px, 18vw, 318px)',
              background: '#bef264',
              borderRadius: 100,
              padding: '12px 20px 12px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 14px 32px rgba(190,242,100,0.42), 0 6px 16px rgba(0,0,0,0.08)',
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
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
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#14532d',
                  whiteSpace: 'nowrap',
                }}
              >
                Design Systems & 3D UI
              </span>
            </div>

            <motion.div
              whileHover={{ x: 4 }}
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: '#111827',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0,
              }}
            >
              <ArrowRight size={17} strokeWidth={2.5} />
            </motion.div>
          </motion.div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            RIGHT SIDE VISUAL ECOSYSTEM
            ═════════════════════════════════════════════════════════════════════ */}

        {/* ─── 5. UPPER-RIGHT: AETHER / SPATIAL 3D ORB ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.85, y: mousePos.y * 0.85 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.08, rotate: 4, y: -6 }}
          style={{
            position: 'absolute',
            top: '9.5%',
            right: 'clamp(3.5%, 6vw, 8.5%)',
            width: 'clamp(205px, 17.5vw, 290px)',
            zIndex: 6,
            cursor: 'pointer',
          }}
        >
          <img
            src="/user_uploads/spatial_orb.png"
            alt="Aether Spatial 3D Sphere"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* ─── 6. RIGHT: AETHER / SYSTEMS DESIGN PANEL ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.75, y: mousePos.y * 0.75 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.05, rotate: 3, y: -5 }}
          style={{
            position: 'absolute',
            top: '32%',
            right: 'clamp(5%, 7.5vw, 10.5%)',
            width: 'clamp(280px, 20.5vw, 375px)',
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

        {/* ─── 7 & 8. RIGHT-SIDE: LIFTED BOTTOM-RIGHT GROUP ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.55, y: mousePos.y * 0.55 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '14%',
            right: 'clamp(3.5%, 6vw, 9%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 8,
            zIndex: 6,
          }}
        >
          {/* Top of Cluster: Palette Pill + Cursor + EXACT "made to be remembered." */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              style={{ width: 'clamp(120px, 11vw, 160px)', cursor: 'pointer' }}
            >
              <img
                src="/user_uploads/palette_pill.png"
                alt="Color Palette Swatches"
                style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.05))' }}
              />
            </motion.div>
            <motion.div
              animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              style={{ width: 22 }}
            >
              <img
                src="/user_uploads/green_cursor.png"
                alt="Green Cursor"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              style={{ width: 'clamp(125px, 12vw, 175px)', cursor: 'default' }}
            >
              <img
                src="/user_uploads/remembered_note.png"
                alt="made to be remembered"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </motion.div>
          </div>

          {/* Bottom of Cluster: Cyclist */}
          <motion.div
            whileHover={{ scale: 1.08, x: -6, y: -4 }}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
            style={{ width: 'clamp(175px, 17vw, 260px)', marginTop: 2, cursor: 'pointer' }}
          >
            <img
              src="/user_uploads/cyclist.png"
              alt="Aether Cyclist Illustration"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </motion.div>
        </motion.div>

        {/* ═════════════════════════════════════════════════════════════════════
            BASE HERO: FULLY VISIBLE CENTRAL HEADLINE, HIGHLIGHT, PARAGRAPH & CTAS
            ═════════════════════════════════════════════════════════════════════ */}
        <div style={{ maxWidth: 840, textAlign: 'center', position: 'relative', zIndex: 10, opacity: 1, visibility: 'visible' }}>
          {/* Top Pill Tag */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 100,
                padding: '6px 18px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                cursor: 'default',
              }}
            >
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
            </motion.div>
          </div>

          {/* Central Headline */}
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(42px, 6vw, 80px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#111827',
              margin: '0 0 20px',
              display: 'block',
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
          </h1>

          {/* Descriptive Subtitle Paragraph */}
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              fontWeight: 300,
              lineHeight: 1.65,
              color: '#6b7280',
              maxWidth: 540,
              margin: '0 auto 30px',
              display: 'block',
            }}
          >
            We partner with visionary founders and iconic brands to design bespoke web experiences, 3D spatial
            interfaces, and scalable token design systems.
          </p>

          {/* Action Buttons with Indicator Arrow */}
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* "✦ Book intro call" with narrowed curved arrow */}
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

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 14,
              }}
            >
              {/* Primary Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.06, y: -3, boxShadow: '0 12px 28px rgba(190,242,100,0.45)' }}
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

              {/* Secondary Button */}
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -2, background: '#f9fafb' }}
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
            </div>
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
