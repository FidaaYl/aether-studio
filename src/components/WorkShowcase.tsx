import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Props {
  T: any
  L: boolean
}

export default function WorkShowcase({ T, L }: Props) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width - 0.5) * 8
    const y = ((clientY - rect.top) / rect.height - 0.5) * 8
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
        padding: 'clamp(50px, 5vw, 80px) 24px clamp(40px, 4vw, 60px)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ═════════════════════════════════════════════════════════════════════
          SVG BACKGROUND LAYER: EXACT CONNECTING ORBITAL NETWORK
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
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Main Sweeping Orbital Trajectory behind Headline, Cards & Photo */}
        <path
          d="M 50 360 C 60 220, 180 260, 320 300 C 600 370, 860 240, 1100 130 C 1320 30, 1540 80, 1470 290 C 1410 450, 1260 520, 1020 540"
          stroke="#cbd5e1"
          strokeWidth="1.15"
          strokeDasharray="4 6"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Orbit loop behind top-right Trusted card */}
        <path
          d="M 1080 120 C 1220 60, 1420 90, 1460 230 C 1480 350, 1380 430, 1260 470"
          stroke="#e2e8f0"
          strokeWidth="1"
          strokeDasharray="3 5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Orbit Energy Nodes */}
        <circle cx="115" cy="285" r="3.2" fill="#84cc16" opacity="0.9" />
        <circle cx="120" cy="350" r="3" fill="#84cc16" opacity="0.85" />
        <circle cx="770" cy="260" r="3.2" fill="#84cc16" opacity="0.9" />
        <circle cx="970" cy="180" r="3" fill="#84cc16" opacity="0.85" />
        <circle cx="1120" cy="120" r="3.2" fill="#94a3b8" opacity="0.85" />
        <circle cx="1390" cy="240" r="3.5" fill="#84cc16" opacity="0.9" />
        <circle cx="1310" cy="450" r="3" fill="#84cc16" opacity="0.85" />

        {/* Star Sparkles matching reference */}
        <g transform="translate(125, 430)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(780, 275)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(1025, 215)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(1485, 195)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#94a3b8" opacity="0.8" />
        </g>
        <g transform="translate(1205, 680)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#84cc16" opacity="0.85" />
        </g>

        {/* Micro-Doodles */}
        <text x="1460" y="480" fill="#94a3b8" fontSize="13" fontFamily="monospace">✦</text>
        <text x="75" y="650" fill="#94a3b8" fontSize="13" fontFamily="monospace">+</text>
      </svg>

      {/* ═════════════════════════════════════════════════════════════════════
          MAIN CANVAS CONTAINER (EXACT GEOMETRY & HARMONY)
          ═════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          width: '100%',
          maxWidth: 1380,
          position: 'relative',
          zIndex: 3,
        }}
      >
        {/* ─── 1. TOP ROW: HEADLINE (LEFT) & FLOATING STRATEGY NOTE + TRUSTED CARD (RIGHT) ─── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'relative',
            marginBottom: 20,
          }}
        >
          {/* Top-Left Headline & Copy */}
          <div style={{ maxWidth: 460, position: 'relative', zIndex: 5 }}>
            {/* Tag */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#6b7280',
                marginBottom: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#84cc16' }} />
              SERVICES
            </div>

            {/* Headline with Playfair Display italic highlight */}
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px, 3vw, 42px)',
                letterSpacing: '-0.035em',
                lineHeight: 1.1,
                color: '#111827',
                margin: '0 0 12px',
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

            {/* Subtitle Paragraph */}
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(13px, 0.9vw, 14.5px)',
                fontWeight: 300,
                lineHeight: 1.55,
                color: '#6b7280',
                maxWidth: 390,
                margin: '0 0 16px',
              }}
            >
              We combine strategy, creativity, and technology to build digital experiences that are intelligent,
              meaningful, and built to scale.
            </p>

            {/* Let's build together Button */}
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
                  padding: '6px 6px 6px 16px',
                  textDecoration: 'none',
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                }}
              >
                Let’s build together
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#bef264',
                    color: '#14532d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </motion.a>
            </div>
          </div>

          {/* Top-Right: Exact "strategy -> design -> impact" note + Trusted Card */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 28, position: 'relative' }}>
            {/* "strategy -> design -> impact" handwriting */}
            <motion.div
              animate={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{ width: 'clamp(105px, 8vw, 130px)', transform: 'rotate(-2deg)', marginTop: 10 }}
            >
              <img
                src="/services_assets/strategy_note.png"
                alt="strategy design impact"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </motion.div>

            {/* Floating Trusted Card in Upper Right */}
            <motion.div
              animate={{ x: mousePos.x * 0.6, y: mousePos.y * 0.6 }}
              transition={{ type: 'spring', damping: 25 }}
              whileHover={{ scale: 1.04, y: -4 }}
              style={{
                width: 'clamp(190px, 14.5vw, 240px)',
                cursor: 'pointer',
                filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.06))',
                zIndex: 5,
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

        {/* ─── 2. STAGGERED OVERLAPPING CARDS + INTEGRATED RIGHT PHOTO ─── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 16,
            alignItems: 'center',
            position: 'relative',
            marginTop: 5,
          }}
        >
          {/* ── CARD 1: AI & Spatial Strategy (Tilted -3.5°, Lower, Left) ── */}
          <div style={{ gridColumn: 'span 3', position: 'relative' }}>
            {/* Dotted matrix card layered behind Card 1 on the left */}
            <div
              style={{
                position: 'absolute',
                top: 25,
                left: -35,
                width: 'clamp(85px, 7vw, 115px)',
                zIndex: 1,
                opacity: 0.8,
                pointerEvents: 'none',
              }}
            >
              <img
                src="/services_assets/dotted_matrix_card.png"
                alt="Dotted Matrix"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <motion.div
              animate={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}
              transition={{ type: 'spring', damping: 25 }}
              whileHover={{ scale: 1.04, rotate: -2, y: -6 }}
              style={{
                background: '#ffffff',
                border: '1px solid #f0f1f3',
                borderRadius: 24,
                padding: 'clamp(20px, 1.7vw, 26px)',
                height: 'clamp(330px, 26vw, 380px)',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transform: 'rotate(-3.5deg)',
                boxShadow: '0 16px 36px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 4,
              }}
            >
              {/* Top Icon in Neon Lime Box */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: '#bef264',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/services_assets/lime_spark_icon.png" alt="Sparkles" style={{ width: 20, height: 20 }} />
              </div>

              {/* Title & Desc */}
              <div style={{ marginTop: 10, marginBottom: 10 }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(16.5px, 1.3vw, 20px)',
                    letterSpacing: '-0.02em',
                    color: '#111827',
                    margin: '0 0 8px',
                  }}
                >
                  AI & Spatial Strategy
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(12px, 0.85vw, 13.5px)',
                    fontWeight: 300,
                    lineHeight: 1.55,
                    color: '#6b7280',
                    margin: 0,
                  }}
                >
                  We identify high-impact opportunities for spatial and generative AI integration directly into your product workflows.
                </p>
              </div>

              {/* Bottom Lime Circle Arrow */}
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  background: '#bef264',
                  color: '#14532d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </div>
            </motion.div>
          </div>

          {/* ── CARD 2: Creative Direction (Centered, Taller, In Front) ── */}
          <div style={{ gridColumn: 'span 3', position: 'relative' }}>
            <motion.div
              animate={{ x: mousePos.x * -0.2, y: mousePos.y * -0.2 }}
              transition={{ type: 'spring', damping: 25 }}
              whileHover={{ scale: 1.04, y: -6 }}
              style={{
                background: '#ffffff',
                border: '1px solid #eef0f3',
                borderRadius: 24,
                padding: 'clamp(22px, 1.9vw, 28px)',
                height: 'clamp(360px, 28vw, 410px)',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 22px 44px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 6,
              }}
            >
              {/* Top Icon in Neon Lime Box */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: '#bef264',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/services_assets/lime_compass_icon.png" alt="Compass" style={{ width: 20, height: 20 }} />
              </div>

              {/* Title & Desc */}
              <div style={{ marginTop: 12, marginBottom: 12 }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(17.5px, 1.4vw, 21px)',
                    letterSpacing: '-0.02em',
                    color: '#111827',
                    margin: '0 0 10px',
                  }}
                >
                  Creative Direction
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(12.5px, 0.88vw, 13.8px)',
                    fontWeight: 300,
                    lineHeight: 1.55,
                    color: '#6b7280',
                    margin: 0,
                  }}
                >
                  We architect distinct visual systems and brand guidelines that drive customer loyalty and set category standards.
                </p>
              </div>

              {/* Bottom Lime Circle Arrow */}
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  background: '#bef264',
                  color: '#14532d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </div>
            </motion.div>
          </div>

          {/* ── CARD 3: Data & Architecture (Right of Center, Tilted +2°) ── */}
          <div style={{ gridColumn: 'span 3', position: 'relative' }}>
            <motion.div
              animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
              transition={{ type: 'spring', damping: 25 }}
              whileHover={{ scale: 1.04, rotate: 3, y: -6 }}
              style={{
                background: '#ffffff',
                border: '1px solid #f0f1f3',
                borderRadius: 24,
                padding: 'clamp(20px, 1.7vw, 26px)',
                height: 'clamp(340px, 26.5vw, 390px)',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transform: 'rotate(2deg)',
                boxShadow: '0 16px 36px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 4,
              }}
            >
              {/* Top Icon in Neon Lime Box */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: '#bef264',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/services_assets/lime_chart_icon.png" alt="Chart" style={{ width: 20, height: 20 }} />
              </div>

              {/* Title & Desc */}
              <div style={{ marginTop: 10, marginBottom: 10 }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(16.5px, 1.3vw, 20px)',
                    letterSpacing: '-0.02em',
                    color: '#111827',
                    margin: '0 0 8px',
                  }}
                >
                  Data & Architecture
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(12px, 0.85vw, 13.5px)',
                    fontWeight: 300,
                    lineHeight: 1.55,
                    color: '#6b7280',
                    margin: 0,
                  }}
                >
                  We turn complex technical systems into sub-second interfaces using modern full-stack frameworks and edge compute.
                </p>
              </div>

              {/* Bottom Lime Circle Arrow */}
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  background: '#bef264',
                  color: '#14532d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </div>
            </motion.div>
          </div>

          {/* ── CARD 4: PROMINENT TEAM COLLABORATION PHOTO ── */}
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
                zIndex: 3,
              }}
            >
              <img
                src="/services_assets/team_collab_photo.png"
                alt="Collaborative by nature"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />

              {/* "Collaborative by nature" Overlay Pill */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 14,
                  left: 14,
                  background: 'rgba(17, 24, 39, 0.88)',
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

        {/* ─── 3. BOTTOM ROW: ANCHORED GLASS ARTIFACTS & EDITORIAL NOTES ─── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
            position: 'relative',
          }}
        >
          {/* Bottom-Left: "Insightful by design" note + curved arrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 'clamp(75px, 6vw, 100px)' }}>
              <img
                src="/services_assets/insightful_note.png"
                alt="Insightful by design"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>
            <div style={{ width: 20 }}>
              <img
                src="/services_assets/arrow_doodle.png"
                alt="Arrow"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>
          </div>

          {/* Bottom-Center: 3D Glass Torus with glowing neon-lime core */}
          <motion.div
            animate={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
            transition={{ type: 'spring', damping: 25 }}
            whileHover={{ scale: 1.1, rotate: 12 }}
            style={{ width: 'clamp(85px, 7vw, 115px)', cursor: 'pointer', zIndex: 7 }}
          >
            <img
              src="/services_assets/glass_torus.png"
              alt="3D Glass Torus"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </motion.div>

          {/* Bottom-Right: Waveform slider card + "Real people. Real results." note */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <motion.div
              animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{ width: 'clamp(105px, 8.5vw, 135px)', cursor: 'pointer', filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.05))', zIndex: 7 }}
            >
              <img
                src="/services_assets/waveform_slider_card.png"
                alt="Interactive Waveform Slider"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 3 }}>
              <div style={{ width: 18, marginLeft: 4 }}>
                <img
                  src="/services_assets/curved_arrow_doodle.png"
                  alt="Arrow"
                  style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
                />
              </div>
              <div style={{ width: 'clamp(80px, 6.5vw, 110px)' }}>
                <img
                  src="/services_assets/real_results_note.png"
                  alt="Real people Real results"
                  style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── 4. FLANK 3D ASSETS: GLASS PLUS & PRISM (POSITIONED PRECISELY NEAR HEADING) ─── */}
        {/* 3D Glass Plus at top left (partially overlapping heading flank) */}
        <motion.div
          animate={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          style={{
            position: 'absolute',
            top: -15,
            left: -55,
            width: 'clamp(60px, 4.8vw, 80px)',
            pointerEvents: 'auto',
            cursor: 'pointer',
            zIndex: 4,
          }}
        >
          <img
            src="/services_assets/glass_plus.png"
            alt="3D Glass Plus"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* Glass Prism near "ideas" on heading */}
        <motion.div
          animate={{ x: mousePos.x * -0.8, y: mousePos.y * -0.8 }}
          whileHover={{ scale: 1.15, rotate: -8 }}
          style={{
            position: 'absolute',
            top: 70,
            left: -35,
            width: 'clamp(38px, 3vw, 52px)',
            pointerEvents: 'auto',
            cursor: 'pointer',
            zIndex: 4,
          }}
        >
          <img
            src="/services_assets/glass_prism.png"
            alt="Glass Prism"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
