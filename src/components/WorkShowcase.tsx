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
    const x = ((clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((clientY - rect.top) / rect.height - 0.5) * 10
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
        padding: 'clamp(80px, 8vw, 120px) clamp(20px, 4vw, 60px) clamp(70px, 7vw, 110px)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* ═════════════════════════════════════════════════════════════════════
          SVG BACKGROUND LAYER: DOTTED ORBITAL NETWORK, NODES & SPARKLES
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
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Left arc sweeping from far left behind headline */}
        <path
          d="M 40 430 C 50 310, 180 340, 320 370 C 560 420, 800 320, 1060 210 C 1280 120, 1500 170, 1450 380 C 1400 520, 1240 600, 1020 620"
          stroke="#cbd5e1"
          strokeWidth="1.15"
          strokeDasharray="4 6"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Orbit loop circling behind top-right Trusted card */}
        <path
          d="M 1080 180 C 1220 120, 1420 150, 1460 310 C 1480 440, 1380 520, 1260 560"
          stroke="#e2e8f0"
          strokeWidth="1"
          strokeDasharray="3 5"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Lime & Slate Energy Nodes along Orbit */}
        <circle cx="110" cy="350" r="3.2" fill="#84cc16" opacity="0.9" />
        <circle cx="120" cy="420" r="3" fill="#84cc16" opacity="0.85" />
        <circle cx="770" cy="330" r="3.2" fill="#84cc16" opacity="0.9" />
        <circle cx="970" cy="250" r="3" fill="#84cc16" opacity="0.85" />
        <circle cx="1120" cy="190" r="3.2" fill="#94a3b8" opacity="0.85" />
        <circle cx="1380" cy="330" r="3.5" fill="#84cc16" opacity="0.9" />
        <circle cx="1300" cy="550" r="3" fill="#84cc16" opacity="0.85" />

        {/* Star Sparkles matching reference */}
        <g transform="translate(125, 525)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(775, 360)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(1025, 295)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(1485, 280)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#94a3b8" opacity="0.8" />
        </g>
        <g transform="translate(1205, 820)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#84cc16" opacity="0.85" />
        </g>

        {/* Micro-Doodles */}
        <text x="1460" y="600" fill="#94a3b8" fontSize="13" fontFamily="monospace">✦</text>
        <text x="75" y="800" fill="#94a3b8" fontSize="13" fontFamily="monospace">+</text>
      </svg>

      {/* ═════════════════════════════════════════════════════════════════════
          MAIN ART-DIRECTED STAGE CONTAINER (MATCHING REFERENCE 3 EXACTLY)
          ═════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          width: '100%',
          maxWidth: 1400,
          position: 'relative',
          zIndex: 3,
        }}
      >
        {/* ─── 1. TOP ROW: HEADLINE (LEFT) & FLOATING TRUSTED CARD + NOTE (RIGHT) ─── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 30,
            marginBottom: 40,
            position: 'relative',
          }}
        >
          {/* Top-Left Headline & Copy */}
          <div style={{ maxWidth: 520, position: 'relative' }}>
            {/* Tag */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#6b7280',
                marginBottom: 14,
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
                fontSize: 'clamp(32px, 3.6vw, 48px)',
                letterSpacing: '-0.035em',
                lineHeight: 1.1,
                color: '#111827',
                margin: '0 0 16px',
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
                fontSize: 'clamp(14px, 1.05vw, 16px)',
                fontWeight: 300,
                lineHeight: 1.6,
                color: '#6b7280',
                maxWidth: 440,
                margin: '0 0 22px',
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
                  padding: '7px 7px 7px 18px',
                  textDecoration: 'none',
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 13.5,
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                }}
              >
                Let’s build together
                <span
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
                </span>
              </motion.a>
            </div>
          </div>

          {/* Top-Right: Exact "strategy -> design -> impact" note + Trusted by 200+ Brands Card */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 30, marginTop: 10 }}>
            {/* "strategy -> design -> impact" handwriting */}
            <motion.div
              animate={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{ width: 'clamp(115px, 9vw, 140px)', transform: 'rotate(-2deg)', marginTop: 8 }}
            >
              <img
                src="/services_assets/strategy_note.png"
                alt="strategy design impact"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </motion.div>

            {/* Floating "Trusted by 200+ global brands" Card */}
            <motion.div
              animate={{ x: mousePos.x * 0.6, y: mousePos.y * 0.6 }}
              transition={{ type: 'spring', damping: 25 }}
              whileHover={{ scale: 1.04, y: -4 }}
              style={{
                width: 'clamp(200px, 16vw, 250px)',
                cursor: 'pointer',
                filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.06))',
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

        {/* ─── 2. MAIN 4-COLUMN COMPOSITION: 3 OVERLAPPING CARDS + RIGHT PHOTO ─── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 16,
            alignItems: 'center',
            position: 'relative',
            marginTop: 10,
          }}
        >
          {/* ── CARD 1: AI & Spatial Strategy (Left, Tilted -3.5°, Lower) ── */}
          <div style={{ gridColumn: 'span 3', position: 'relative' }}>
            {/* Dotted matrix card layered behind Card 1 on the left */}
            <div
              style={{
                position: 'absolute',
                top: 40,
                left: -35,
                width: 'clamp(100px, 8.5vw, 130px)',
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
                padding: 'clamp(24px, 2vw, 30px)',
                height: 'clamp(380px, 31vw, 430px)',
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
              {/* Icon in Neon Lime Box */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: '#bef264',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/services_assets/lime_spark_icon.png" alt="Sparkles" style={{ width: 22, height: 22 }} />
              </div>

              {/* Title & Desc */}
              <div style={{ marginTop: 16, marginBottom: 16 }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 1.45vw, 22px)',
                    letterSpacing: '-0.02em',
                    color: '#111827',
                    margin: '0 0 10px',
                  }}
                >
                  AI & Spatial Strategy
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(13px, 0.92vw, 14px)',
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
                padding: 'clamp(26px, 2.2vw, 32px)',
                height: 'clamp(410px, 33vw, 460px)',
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
              {/* Icon in Neon Lime Box */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: '#bef264',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/services_assets/lime_compass_icon.png" alt="Compass" style={{ width: 22, height: 22 }} />
              </div>

              {/* Title & Desc */}
              <div style={{ marginTop: 20, marginBottom: 20 }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(19px, 1.55vw, 23px)',
                    letterSpacing: '-0.02em',
                    color: '#111827',
                    margin: '0 0 12px',
                  }}
                >
                  Creative Direction
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(13.5px, 0.96vw, 14.5px)',
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

          {/* ── CARD 3: Data & Architecture (Right of Center, Rotated +2°) ── */}
          <div style={{ gridColumn: 'span 3', position: 'relative' }}>
            <motion.div
              animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
              transition={{ type: 'spring', damping: 25 }}
              whileHover={{ scale: 1.04, rotate: 3, y: -6 }}
              style={{
                background: '#ffffff',
                border: '1px solid #f0f1f3',
                borderRadius: 24,
                padding: 'clamp(24px, 2vw, 30px)',
                height: 'clamp(390px, 31.5vw, 440px)',
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
              {/* Icon in Neon Lime Box */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: '#bef264',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/services_assets/lime_chart_icon.png" alt="Chart" style={{ width: 22, height: 22 }} />
              </div>

              {/* Title & Desc */}
              <div style={{ marginTop: 16, marginBottom: 16 }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 1.45vw, 22px)',
                    letterSpacing: '-0.02em',
                    color: '#111827',
                    margin: '0 0 10px',
                  }}
                >
                  Data & Architecture
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(13px, 0.92vw, 14px)',
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

              {/* "Collaborative by nature" Floating Pill */}
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

        {/* ─── 3. BOTTOM ROW: ANCHORED GLASS ARTIFACTS & HANDWRITTEN NOTES ─── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 35,
            position: 'relative',
          }}
        >
          {/* Bottom-Left: "Insightful by design" note + curved arrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 'clamp(85px, 7vw, 110px)' }}>
              <img
                src="/services_assets/insightful_note.png"
                alt="Insightful by design"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>
            <div style={{ width: 24 }}>
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
            style={{ width: 'clamp(95px, 8vw, 130px)', cursor: 'pointer', zIndex: 7 }}
          >
            <img
              src="/services_assets/glass_torus.png"
              alt="3D Glass Torus"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </motion.div>

          {/* Bottom-Right: Waveform slider card + "Real people. Real results." note */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <motion.div
              animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{ width: 'clamp(115px, 9.5vw, 145px)', cursor: 'pointer', filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.05))', zIndex: 7 }}
            >
              <img
                src="/services_assets/waveform_slider_card.png"
                alt="Interactive Waveform Slider"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
              <div style={{ width: 22, marginLeft: 4 }}>
                <img
                  src="/services_assets/curved_arrow_doodle.png"
                  alt="Arrow"
                  style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
                />
              </div>
              <div style={{ width: 'clamp(90px, 7.5vw, 120px)' }}>
                <img
                  src="/services_assets/real_results_note.png"
                  alt="Real people Real results"
                  style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── 4. FAR LEFT FLANK ARTIFACTS (GLASS PLUS & PRISM) ─── */}
        {/* 3D Glass Plus at top left */}
        <motion.div
          animate={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          style={{
            position: 'absolute',
            top: 0,
            left: -40,
            width: 'clamp(70px, 5.5vw, 95px)',
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

        {/* Glass Prism artifact at middle left */}
        <motion.div
          animate={{ x: mousePos.x * -0.8, y: mousePos.y * -0.8 }}
          whileHover={{ scale: 1.15, rotate: -8 }}
          style={{
            position: 'absolute',
            top: 170,
            left: 5,
            width: 'clamp(45px, 3.5vw, 65px)',
            pointerEvents: 'auto',
            cursor: 'pointer',
            zIndex: 2,
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
