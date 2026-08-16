import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Compass, BarChart2 } from 'lucide-react'

interface Props {
  T: any
  L: boolean
}

export default function WorkShowcase({ T, L }: Props) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((clientY - rect.top) / rect.height - 0.5) * 12
    setMousePos({ x, y })
  }

  return (
    <section
      id="services"
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        width: '100%',
        background: '#faf9f5',
        overflow: 'hidden',
        padding: 'clamp(90px, 10vw, 140px) 24px clamp(80px, 9vw, 130px)',
        boxSizing: 'border-box',
      }}
    >
      {/* ═════════════════════════════════════════════════════════════════════
          SVG LAYER: EDITORIAL CONNECTING ORBITS, SPARKLES & DIRECTIONAL ARROWS
          ═════════════════════════════════════════════════════════════════════ */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2,
        }}
        viewBox="0 0 1600 950"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Left-to-Right Large Connecting Orbit */}
        <path
          d="M 60 420 C 60 300, 180 340, 320 370 C 580 430, 840 320, 1100 210 C 1320 120, 1480 180, 1420 380"
          stroke="#cbd5e1"
          strokeWidth="1.15"
          strokeDasharray="4 6"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Upper Right Orbit Loop behind Trusted card */}
        <path
          d="M 1120 180 C 1280 140, 1480 180, 1420 380 C 1380 500, 1260 560, 1140 590"
          stroke="#e2e8f0"
          strokeWidth="1"
          strokeDasharray="3 5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Orbit Nodes */}
        <circle cx="120" cy="350" r="3" fill="#84cc16" opacity="0.85" />
        <circle cx="680" cy="355" r="3.5" fill="#84cc16" opacity="0.9" />
        <circle cx="970" cy="270" r="3" fill="#84cc16" opacity="0.9" />
        <circle cx="1120" cy="180" r="3.2" fill="#94a3b8" opacity="0.85" />
        <circle cx="1360" cy="280" r="3.5" fill="#84cc16" opacity="0.9" />

        {/* Delicate Sparkles */}
        <g transform="translate(120, 435)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(340, 930)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(780, 360)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(1025, 295)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(1485, 280)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#94a3b8" opacity="0.8" />
        </g>
        <g transform="translate(1410, 370)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(1205, 820)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#84cc16" opacity="0.85" />
        </g>

        {/* Micro-Doodles */}
        <text x="1530" y="760" fill="#94a3b8" fontSize="13" fontFamily="monospace">✦</text>
        <text x="90" y="850" fill="#94a3b8" fontSize="13" fontFamily="monospace">+</text>
      </svg>

      <div style={{ maxWidth: 1440, margin: '0 auto', position: 'relative', zIndex: 3 }}>
        
        {/* ═════════════════════════════════════════════════════════════════════
            TOP ROW: EDITORIAL HEADER + TOP RIGHT FLOATING ASSETS
            ═════════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 40,
            marginBottom: 50,
            position: 'relative',
          }}
        >
          {/* Top-Left: Tag, Main Headline, Highlight, Subtitle, CTA Button */}
          <div style={{ maxWidth: 640, position: 'relative' }}>
            {/* Tag */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#6b7280',
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#84cc16' }} />
              SERVICES
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(36px, 4.2vw, 56px)',
                letterSpacing: '-0.035em',
                lineHeight: 1.1,
                color: '#111827',
                margin: '0 0 20px',
              }}
            >
              Solutions designed
              <br />
              to move your ideas
              <br />
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: '#65a30d',
                  display: 'inline-block',
                }}
              >
                forward
              </span>
            </h2>

            {/* Paragraph */}
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(15px, 1.15vw, 17px)',
                fontWeight: 300,
                lineHeight: 1.65,
                color: '#6b7280',
                maxWidth: 480,
                margin: '0 0 28px',
              }}
            >
              We combine strategy, creativity, and technology to build digital experiences that are intelligent,
              meaningful, and built to scale.
            </p>

            {/* Let's build together Pill Button */}
            <div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#ffffff',
                  color: '#111827',
                  border: '1px solid #e5e7eb',
                  borderRadius: 100,
                  padding: '8px 8px 8px 20px',
                  textDecoration: 'none',
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                }}
              >
                Let’s build together
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#bef264',
                    color: '#14532d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </span>
              </motion.a>
            </div>
          </div>

          {/* Top-Center & Top-Right: Handwritten Notes + Floating Trusted Brands Card */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 40,
              position: 'relative',
              marginTop: 10,
            }}
          >
            {/* Exact "strategy -> design -> impact" handwriting note */}
            <motion.div
              animate={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{ width: 'clamp(120px, 10vw, 150px)', transform: 'rotate(-2deg)' }}
            >
              <img
                src="/services_assets/strategy_note.png"
                alt="strategy design impact"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </motion.div>

            {/* Floating Trusted by 200+ Global Brands Card */}
            <motion.div
              animate={{ x: mousePos.x * 0.6, y: mousePos.y * 0.6 }}
              transition={{ type: 'spring', damping: 25 }}
              whileHover={{ scale: 1.04, y: -4 }}
              style={{
                width: 'clamp(210px, 17vw, 265px)',
                cursor: 'pointer',
                filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.06))',
              }}
            >
              <img
                src="/services_assets/trusted_brands_card.png"
                alt="Trusted by 200+ global brands"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            MIDDLE ROW: 3 DIVERSE FLOATING SERVICE CARDS + TEAM PHOTO & ARTIFACTS
            ═════════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 20,
            alignItems: 'center',
            position: 'relative',
            marginTop: 20,
          }}
        >
          {/* ─── CARD 1: AI & Spatial Strategy (Tilted Left, Floating) ─── */}
          <div style={{ gridColumn: 'span 3', position: 'relative' }}>
            <motion.div
              animate={{ x: mousePos.x * -0.7, y: mousePos.y * -0.7 }}
              transition={{ type: 'spring', damping: 25 }}
              whileHover={{ scale: 1.04, rotate: -2, y: -6 }}
              style={{
                background: '#ffffff',
                border: '1px solid #f3f4f6',
                borderRadius: 24,
                padding: '32px 28px',
                minHeight: 380,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transform: 'rotate(-3.5deg)',
                boxShadow: '0 16px 36px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 4,
              }}
            >
              {/* Icon in Neon Lime Box */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: '#bef264',
                  color: '#14532d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={22} strokeWidth={2.2} />
              </div>

              {/* Title & Desc */}
              <div style={{ marginTop: 20, marginBottom: 20 }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 21,
                    letterSpacing: '-0.02em',
                    color: '#111827',
                    margin: '0 0 12px',
                  }}
                >
                  AI & Spatial Strategy
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13.5,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: '#6b7280',
                    margin: 0,
                  }}
                >
                  We identify high-impact opportunities for spatial and generative AI integration directly into your product workflows.
                </p>
              </div>

              {/* Bottom Small Lime Arrow Button */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#bef264',
                  color: '#14532d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </motion.div>
          </div>

          {/* ─── CARD 2: Creative Direction (Taller, Centered, Straight) ─── */}
          <div style={{ gridColumn: 'span 3', position: 'relative' }}>
            <motion.div
              animate={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}
              transition={{ type: 'spring', damping: 25 }}
              whileHover={{ scale: 1.04, y: -6 }}
              style={{
                background: '#ffffff',
                border: '1px solid #f3f4f6',
                borderRadius: 24,
                padding: '36px 30px',
                minHeight: 410,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 42px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 5,
              }}
            >
              {/* Icon in Neon Lime Box */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: '#bef264',
                  color: '#14532d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Compass size={22} strokeWidth={2.2} />
              </div>

              {/* Title & Desc */}
              <div style={{ marginTop: 24, marginBottom: 24 }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: '-0.02em',
                    color: '#111827',
                    margin: '0 0 14px',
                  }}
                >
                  Creative Direction
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: '#6b7280',
                    margin: 0,
                  }}
                >
                  We architect distinct visual systems and brand guidelines that drive customer loyalty and set category standards.
                </p>
              </div>

              {/* Bottom Small Lime Arrow Button */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#bef264',
                  color: '#14532d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </motion.div>
          </div>

          {/* ─── CARD 3: Data & Architecture (Slight Right Lift) ─── */}
          <div style={{ gridColumn: 'span 3', position: 'relative' }}>
            <motion.div
              animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
              transition={{ type: 'spring', damping: 25 }}
              whileHover={{ scale: 1.04, rotate: 1.5, y: -6 }}
              style={{
                background: '#ffffff',
                border: '1px solid #f3f4f6',
                borderRadius: 24,
                padding: '34px 28px',
                minHeight: 390,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transform: 'rotate(1.5deg)',
                boxShadow: '0 16px 36px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 4,
              }}
            >
              {/* Icon in Neon Lime Box */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: '#bef264',
                  color: '#14532d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BarChart2 size={22} strokeWidth={2.2} />
              </div>

              {/* Title & Desc */}
              <div style={{ marginTop: 20, marginBottom: 20 }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 21,
                    letterSpacing: '-0.02em',
                    color: '#111827',
                    margin: '0 0 12px',
                  }}
                >
                  Data & Architecture
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13.5,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: '#6b7280',
                    margin: 0,
                  }}
                >
                  We turn complex technical systems into sub-second interfaces using modern full-stack frameworks and edge compute.
                </p>
              </div>

              {/* Bottom Small Lime Arrow Button */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#bef264',
                  color: '#14532d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </motion.div>
          </div>

          {/* ─── 4TH ELEMENT: INTEGRATED TEAM PHOTO WITH "Collaborative by nature" BADGE ─── */}
          <div style={{ gridColumn: 'span 3', position: 'relative' }}>
            <motion.div
              animate={{ x: mousePos.x * 0.7, y: mousePos.y * 0.7 }}
              transition={{ type: 'spring', damping: 25 }}
              whileHover={{ scale: 1.03, y: -4 }}
              style={{
                borderRadius: 24,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 42px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transform: 'rotate(-1.5deg)',
              }}
            >
              <img
                src="/services_assets/team_collab_photo.png"
                alt="Collaborative by nature"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />

              {/* "Collaborative by nature" Floating Pill on Photo */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  background: 'rgba(17, 24, 39, 0.85)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 100,
                  padding: '6px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#84cc16' }} />
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#ffffff',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Collaborative by nature
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            BOTTOM ROW: FLOATING SPATIAL ARTIFACTS & EDITORIAL NOTES
            ═════════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
            position: 'relative',
          }}
        >
          {/* Bottom-Left: "Insightful by design" handwritten note with arrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <motion.div
              animate={{ x: mousePos.x * -0.4, y: mousePos.y * -0.4 }}
              style={{ width: 'clamp(90px, 8vw, 120px)' }}
            >
              <img
                src="/services_assets/insightful_note.png"
                alt="Insightful by design"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </motion.div>
            <motion.div
              animate={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}
              style={{ width: 28 }}
            >
              <img
                src="/services_assets/arrow_doodle.png"
                alt="Arrow"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </motion.div>
          </div>

          {/* Bottom-Center: 3D Glass Torus / Donut ring with neon-lime glowing core */}
          <motion.div
            animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
            transition={{ type: 'spring', damping: 25 }}
            whileHover={{ scale: 1.1, rotate: 12 }}
            style={{ width: 'clamp(100px, 9vw, 140px)', cursor: 'pointer' }}
          >
            <img
              src="/services_assets/glass_torus.png"
              alt="3D Glass Artifact"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </motion.div>

          {/* Bottom-Right: Waveform slider card + "Real people. Real results." note */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {/* Waveform Slider Micro-Card */}
            <motion.div
              animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{ width: 'clamp(120px, 10vw, 150px)', cursor: 'pointer', filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.05))' }}
            >
              <img
                src="/services_assets/waveform_slider_card.png"
                alt="Interactive Waveform Control"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>

            {/* "Real people. Real results." handwriting */}
            <motion.div
              animate={{ x: mousePos.x * 0.6, y: mousePos.y * 0.6 }}
              style={{ width: 'clamp(95px, 8.5vw, 125px)' }}
            >
              <img
                src="/services_assets/real_results_note.png"
                alt="Real people Real results"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </motion.div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            DECORATIVE FLANK ARTIFACTS (TOP-LEFT GLASS PLUS & PRISM)
            ═════════════════════════════════════════════════════════════════════ */}
        {/* Glass Plus on far upper left */}
        <motion.div
          animate={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          style={{
            position: 'absolute',
            top: 20,
            left: -30,
            width: 'clamp(80px, 7vw, 110px)',
            pointerEvents: 'auto',
            cursor: 'pointer',
            zIndex: 2,
          }}
        >
          <img
            src="/services_assets/glass_plus.png"
            alt="3D Glass Plus"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* Glass Prism on middle left */}
        <motion.div
          animate={{ x: mousePos.x * -0.8, y: mousePos.y * -0.8 }}
          whileHover={{ scale: 1.15, rotate: -8 }}
          style={{
            position: 'absolute',
            top: 190,
            left: 20,
            width: 'clamp(50px, 4.5vw, 75px)',
            pointerEvents: 'auto',
            cursor: 'pointer',
            zIndex: 2,
          }}
        >
          <img
            src="/services_assets/glass_prism.png"
            alt="Glass Prism Artifact"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* Dotted Matrix decorative card behind Card 1 on the far left */}
        <motion.div
          animate={{ x: mousePos.x * -0.4, y: mousePos.y * -0.4 }}
          style={{
            position: 'absolute',
            bottom: 80,
            left: -20,
            width: 'clamp(100px, 9vw, 135px)',
            zIndex: 1,
            opacity: 0.75,
            pointerEvents: 'none',
          }}
        >
          <img
            src="/services_assets/dotted_matrix_card.png"
            alt="Dotted Matrix"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
