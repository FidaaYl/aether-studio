import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Sparkles,
  Check,
  Star,
  Zap,
  Box,
  Layers,
  ArrowRight,
  MousePointer2,
  Play,
  Sliders,
  Code2,
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
    const x = (clientX / window.innerWidth - 0.5) * 12
    const y = (clientY / window.innerHeight - 0.5) * 12
    setMousePos({ x, y })
  }

  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden', color: '#111827' }} onMouseMove={handleMouseMove}>
      {/* ✦ 1. EXACT AETHER UNIVERSE HERO COMPOSITION */}
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

        {/* ─── DOTTED ORBIT PATHS, ISOLATED STARS & GREEN NODES ─── */}
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
          {/* Subtle Delicate Dotted Orbit Curves */}
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

          {/* Isolated Stars & Sparkles (Some connected, some floating freely) */}
          <path d="M 180 120 L 183 130 L 193 133 L 183 136 L 180 146 L 177 136 L 167 133 L 177 130 Z" fill="#111827" />
          <path d="M 480 160 L 483 170 L 493 173 L 483 176 L 480 186 L 477 176 L 467 173 L 477 170 Z" fill="#84cc16" />
          <path d="M 1260 120 L 1263 130 L 1273 133 L 1263 136 L 1260 146 L 1257 136 L 1247 133 L 1257 130 Z" fill="#111827" />
          <path d="M 1300 290 L 1302 298 L 1310 300 L 1302 302 L 1300 310 L 1298 302 L 1290 300 L 1298 298 Z" fill="#84cc16" />
          <path d="M 1520 180 L 1522 186 L 1528 188 L 1522 190 L 1520 196 L 1518 190 L 1512 188 L 1518 186 Z" fill="#111827" />
          <path d="M 330 520 L 332 528 L 340 530 L 332 532 L 330 540 L 328 532 L 320 530 L 328 528 Z" fill="#111827" />
          <path d="M 740 650 L 743 660 L 753 663 L 743 666 L 740 676 L 737 666 L 727 663 L 737 660 Z" fill="#84cc16" />

          {/* Doodled Curved Arrows */}
          <path d="M 50 360 C 30 380 40 410 55 390 M 55 390 L 45 395 M 55 390 L 48 380" stroke="#111827" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 1480 370 C 1500 350 1490 320 1475 340 M 1475 340 L 1485 335 M 1475 340 L 1482 350" stroke="#111827" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 730 630 C 760 620 780 650 795 640 M 795 640 L 785 642 M 795 640 L 790 630" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>

        {/* ─── 1. TOP-LEFT: EXPLORER CHARACTER & "idea → system → experience" ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.7, y: mousePos.y * -0.7 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '11%',
            left: 'clamp(2%, 4vw, 7%)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 14,
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: 92, height: 92 }}>
            <svg viewBox="0 0 100 100" fill="none" style={{ width: '100%', height: '100%' }}>
              <circle cx="50" cy="30" r="14" stroke="#111827" strokeWidth="2.5" />
              <circle cx="45" cy="28" r="3.5" stroke="#16a34a" strokeWidth="1.5" />
              <circle cx="55" cy="28" r="3.5" stroke="#16a34a" strokeWidth="1.5" />
              <circle cx="45" cy="28" r="1.5" fill="#111827" />
              <circle cx="55" cy="28" r="1.5" fill="#111827" />
              <path d="M47 36C49 38 51 38 53 36" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M38 52C38 46 44 42 50 42C56 42 62 46 62 52L66 78H34L38 52Z" stroke="#111827" strokeWidth="2.5" fill="#ffffff" />
              <rect x="42" y="60" width="28" height="20" rx="3" fill="#bef264" stroke="#111827" strokeWidth="2" transform="rotate(-10 42 60)" />
              <circle cx="82" cy="74" r="9" stroke="#111827" strokeWidth="2" fill="#bef264" />
              <circle cx="79" cy="72" r="1.2" fill="#14532d" />
              <circle cx="85" cy="72" r="1.2" fill="#14532d" />
              <ellipse cx="50" cy="88" rx="42" ry="8" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
          </div>

          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(14px, 1.25vw, 17px)',
              color: '#111827',
              lineHeight: 1.2,
              marginTop: 8,
            }}
          >
            idea → system →
            <br />
            experience
          </div>
        </motion.div>

        {/* ─── 2. LEFT: TILTED MINIATURE WEBSITE PREVIEW ("AETHER / WEB") ─── */}
        <motion.div
          animate={{ x: mousePos.x * -1.0, y: mousePos.y * -1.0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.05, rotate: -4 }}
          style={{
            position: 'absolute',
            top: '26%',
            left: 'clamp(1%, 3vw, 5%)',
            width: 'clamp(230px, 22vw, 290px)',
            background: '#0b1120',
            border: '2px solid #1e293b',
            borderRadius: 22,
            padding: 16,
            boxShadow: '0 20px 40px rgba(0,0,0,0.16)',
            transform: 'rotate(-6deg)',
            zIndex: 6,
            color: '#ffffff',
            cursor: 'pointer',
          }}
        >
          {/* Side Tag 01 & Top Pill */}
          <div
            style={{
              position: 'absolute',
              left: -12,
              top: 36,
              background: '#bef264',
              color: '#14532d',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              fontWeight: 800,
              padding: '4px 6px',
              borderRadius: '6px 0 0 6px',
            }}
          >
            01
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span
              style={{
                background: '#bef264',
                color: '#14532d',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: 100,
                letterSpacing: '0.08em',
              }}
            >
              AETHER / WEB
            </span>
            <span style={{ fontSize: 10, color: '#64748b' }}>↗</span>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 13, lineHeight: 1.2, marginBottom: 4 }}>
                Build greater experiences.
              </div>
              <div style={{ fontSize: 9, color: '#94a3b8', fontFamily: "'Outfit'" }}>
                Immersive web for modern brands.
              </div>
            </div>

            {/* Floating Island Graphic */}
            <div
              style={{
                width: 76,
                height: 54,
                borderRadius: 10,
                background: 'radial-gradient(circle at center, #38bdf8 0%, #0369a1 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 0 10px #38bdf8',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 2,
                  width: 48,
                  height: 12,
                  background: '#0f172a',
                  borderRadius: 4,
                }}
              />
            </div>
          </div>

          <div
            style={{
              background: '#1e293b',
              borderRadius: 8,
              padding: '4px 10px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 9,
              color: '#cbd5e1',
              fontFamily: "'Outfit'",
            }}
          >
            Explore ↗
          </div>
        </motion.div>

        {/* ─── 3. BOTTOM-LEFT: ISOMETRIC GLASS CUBE, CHAT BUBBLE & SERVICE PILL ─── */}
        <motion.div
          animate={{ x: mousePos.x * -0.7, y: mousePos.y * -0.7 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '10%',
            left: 'clamp(2%, 4vw, 7%)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            zIndex: 6,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Chat Bubble */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #ede8dc',
                borderRadius: '16px 16px 16px 4px',
                padding: '12px 16px',
                maxWidth: 180,
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#bef264' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', fontFamily: "'Outfit'" }}>
                  Aether Studio
                </span>
              </div>
              <p style={{ fontSize: 11, color: '#4b5563', margin: '0 0 4px', lineHeight: 1.35, fontFamily: "'Outfit'" }}>
                “Let’s build something culturally defining for your brand.”
              </p>
              <div style={{ display: 'flex', gap: 2, color: '#84cc16' }}>
                {[1, 2, 3, 4, 5].map(n => (
                  <Star key={n} size={10} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>

            {/* 3D Glass Cube Artifact with Lime Core */}
            <div style={{ position: 'relative', width: 70, height: 70 }}>
              <svg viewBox="0 0 80 80" fill="none" style={{ width: '100%', height: '100%' }}>
                <polygon points="40,6 72,24 40,42 8,24" fill="rgba(255,255,255,0.7)" stroke="#64748b" strokeWidth="1.5" />
                <polygon points="8,24 40,42 40,74 8,56" fill="rgba(241,245,249,0.8)" stroke="#64748b" strokeWidth="1.5" />
                <polygon points="40,42 72,24 72,56 40,74" fill="rgba(226,232,240,0.85)" stroke="#64748b" strokeWidth="1.5" />
                <polygon points="40,22 56,31 40,40 24,31" fill="#bef264" />
                <polygon points="24,31 40,40 40,56 24,47" fill="#84cc16" />
                <polygon points="40,40 56,31 56,47 40,56" fill="#65a30d" />
              </svg>
              <div
                style={{
                  position: 'absolute',
                  bottom: 2,
                  left: -6,
                  width: 18,
                  height: 18,
                  borderRadius: 4,
                  background: 'rgba(255,255,255,0.9)',
                  border: '1px solid #94a3b8',
                }}
              />
            </div>
          </div>

          {/* Service Lab Pill */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            style={{
              background: '#bef264',
              borderRadius: 14,
              padding: '8px 14px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              boxShadow: '0 6px 20px rgba(190,242,100,0.3)',
              cursor: 'pointer',
              maxWidth: 210,
            }}
          >
            <div>
              <div style={{ fontSize: 9, fontFamily: "'JetBrains Mono'", fontWeight: 800, color: '#365314' }}>
                SERVICE LAB
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 12, color: '#14532d' }}>
                Design Systems & 3D UI
              </div>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: '#14532d',
                color: '#bef264',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowRight size={11} strokeWidth={3} />
            </div>
          </motion.div>
        </motion.div>

        {/* ─── 4. TOP-RIGHT: 3D SPATIAL ORB ("AETHER / SPATIAL") & BLUE BADGE ─── */}
        <motion.div
          animate={{ x: mousePos.x * 1.0, y: mousePos.y * 1.0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            top: '11%',
            right: 'clamp(2%, 4vw, 7%)',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            zIndex: 6,
          }}
        >
          <div style={{ position: 'relative', width: 94, height: 94 }}>
            <span
              style={{
                position: 'absolute',
                top: -8,
                right: -6,
                background: '#bef264',
                color: '#14532d',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: 100,
                zIndex: 10,
              }}
            >
              AETHER / SPATIAL
            </span>

            <svg viewBox="0 0 100 100" fill="none" style={{ width: '100%', height: '100%' }}>
              <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#334155" strokeWidth="1.5" transform="rotate(-25 50 50)" />
              <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#84cc16" strokeWidth="1" strokeDasharray="3 3" transform="rotate(35 50 50)" />
              <circle cx="50" cy="50" r="28" fill="rgba(255,255,255,0.7)" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="14" fill="#bef264" />
              <circle cx="50" cy="50" r="8" fill="#16a34a" opacity="0.6" />
            </svg>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1px solid #ede8dc',
              borderRadius: 16,
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: '#0284c7',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Sparkles size={14} />
            </div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 11, color: '#111827' }}>
                Spatial Computing OS
              </div>
              <div style={{ fontSize: 9, color: '#6b7280', fontFamily: "'JetBrains Mono'" }}>★ 4.9 · WebGL Platform ↗</div>
            </div>
          </div>
        </motion.div>

        {/* ─── 5. RIGHT: DESIGN SYSTEMS TOKEN PANEL ("AETHER / SYSTEMS") ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.9, y: mousePos.y * 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          style={{
            position: 'absolute',
            top: '34%',
            right: 'clamp(2%, 4vw, 7%)',
            width: 'clamp(200px, 20vw, 240px)',
            background: 'rgba(255,255,255,0.95)',
            border: '1px solid #e2e8f0',
            borderRadius: 22,
            padding: 16,
            boxShadow: '0 16px 36px rgba(0,0,0,0.06)',
            transform: 'rotate(4deg)',
            zIndex: 6,
            backdropFilter: 'blur(16px)',
            cursor: 'pointer',
          }}
        >
          {/* Side Tab 02 */}
          <div
            style={{
              position: 'absolute',
              right: -12,
              top: 36,
              background: '#bef264',
              color: '#14532d',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              fontWeight: 800,
              padding: '4px 6px',
              borderRadius: '0 6px 6px 0',
            }}
          >
            02
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span
              style={{
                background: '#bef264',
                color: '#14532d',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: 100,
              }}
            >
              AETHER / SYSTEMS
            </span>
            <span style={{ fontSize: 10, color: '#64748b' }}>↗</span>
          </div>

          {/* Typography Token "Aa" & Font Family */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, background: '#f8fafc', padding: 8, borderRadius: 10 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#111827', lineHeight: 1 }}>
              Aa
            </div>
            <div style={{ fontSize: 9, color: '#64748b', fontFamily: "'Outfit'" }}>
              <div style={{ fontWeight: 700, color: '#111827' }}>Inter</div>
              <div>Regular / Medium / Bold</div>
            </div>
          </div>

          {/* Color Palette Tokens */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
            <span style={{ width: 22, height: 22, borderRadius: 6, background: '#bef264', display: 'inline-block' }} />
            <span style={{ width: 22, height: 22, borderRadius: 6, background: '#0f172a', display: 'inline-block' }} />
            <span style={{ width: 22, height: 22, borderRadius: 6, background: '#94a3b8', display: 'inline-block' }} />
            <span style={{ width: 22, height: 22, borderRadius: 6, background: '#f1f5f9', border: '1px solid #cbd5e1', display: 'inline-block' }} />
          </div>

          {/* Primitive Icons */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
            <Box size={14} color="#64748b" />
            <Sparkles size={14} color="#84cc16" />
            <Code2 size={14} color="#64748b" />
          </div>

          {/* Mini Buttons & Toggle Switch */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 4 }}>
              <span style={{ background: '#bef264', color: '#14532d', fontSize: 8, fontWeight: 700, padding: '3px 8px', borderRadius: 100 }}>
                Primary
              </span>
              <span style={{ background: '#f1f5f9', color: '#64748b', fontSize: 8, padding: '3px 6px', borderRadius: 100, border: '1px solid #e2e8f0' }}>
                Secondary
              </span>
            </div>

            <div
              style={{
                width: 26,
                height: 14,
                borderRadius: 100,
                background: '#bef264',
                padding: 2,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#14532d' }} />
            </div>
          </div>
        </motion.div>

        {/* ─── 6. LOWER RIGHT: AETHER / MOTION TRAJECTORY CARD ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.9, y: mousePos.y * 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          whileHover={{ scale: 1.05 }}
          style={{
            position: 'absolute',
            bottom: '22%',
            right: 'clamp(2%, 4vw, 7%)',
            width: 'clamp(180px, 17vw, 210px)',
            background: '#ffffff',
            border: '1px solid #ede8dc',
            borderRadius: 20,
            padding: 14,
            boxShadow: '0 10px 24px rgba(0,0,0,0.04)',
            zIndex: 6,
            cursor: 'pointer',
          }}
        >
          {/* Side Tab 03 */}
          <div
            style={{
              position: 'absolute',
              left: -12,
              top: 24,
              background: '#bef264',
              color: '#14532d',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              fontWeight: 800,
              padding: '4px 6px',
              borderRadius: '6px 0 0 6px',
            }}
          >
            03
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <span
              style={{
                background: '#bef264',
                color: '#14532d',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: 100,
              }}
            >
              AETHER / MOTION
            </span>
            <span style={{ fontSize: 10, color: '#64748b' }}>↗</span>
          </div>

          <div style={{ fontSize: 9, color: '#6b7280', fontFamily: "'Outfit'", marginBottom: 6 }}>
            Micro Interaction
          </div>

          {/* Easing Trajectory Curve Graph */}
          <div style={{ height: 42, background: '#faf9f5', borderRadius: 10, padding: '4px 6px', position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 100 40" fill="none" style={{ width: '100%', height: '100%' }}>
              <path d="M 0 35 C 30 35, 45 5, 100 5" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="60" cy="18" r="3.5" fill="#14532d" />
            </svg>
          </div>

          {/* Dot Palette & Play */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            <div style={{ display: 'flex', gap: 4 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#bef264' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0f172a' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#94a3b8' }} />
            </div>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#0f172a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Play size={8} fill="currentColor" />
            </div>
          </div>
        </motion.div>

        {/* ─── 7. BOTTOM-RIGHT: "MADE TO BE REMEMBERED" & CYCLIST CHARACTER ─── */}
        <motion.div
          animate={{ x: mousePos.x * 0.8, y: mousePos.y * 0.8 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          style={{
            position: 'absolute',
            bottom: '5%',
            right: 'clamp(2%, 4vw, 8%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(14px, 1.25vw, 17px)',
              color: '#111827',
              lineHeight: 1.2,
              marginBottom: 4,
              transform: 'rotate(-4deg)',
            }}
          >
            made to be
            <br />
            remembered. ↗
          </div>

          <div style={{ width: 110, height: 85 }}>
            <svg viewBox="0 0 120 100" fill="none" style={{ width: '100%', height: '100%' }}>
              <circle cx="28" cy="74" r="16" stroke="#111827" strokeWidth="2.5" />
              <circle cx="92" cy="74" r="16" stroke="#111827" strokeWidth="2.5" />
              <circle cx="28" cy="74" r="3" fill="#84cc16" />
              <circle cx="92" cy="74" r="3" fill="#84cc16" />
              <path d="M28 74L56 74L80 50L92 74M56 74L65 46L78 46M65 46L44 56" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <rect x="84" y="38" width="14" height="12" rx="2" stroke="#111827" strokeWidth="2" fill="#bef264" />
              <circle cx="60" cy="22" r="10" stroke="#111827" strokeWidth="2.5" />
              <path d="M54 38C54 30 60 28 66 28C72 28 76 32 72 50L58 60" stroke="#111827" strokeWidth="2.5" fill="#ffffff" />
              <path d="M64 28L78 36" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="96" y1="20" x2="108" y2="16" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
              <line x1="102" y1="26" x2="114" y2="22" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        {/* ─── 8. CENTER HERO HEADLINE & ACTIONS (MATCHING BASE) ─── */}
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
