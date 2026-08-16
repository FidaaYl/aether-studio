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
        minHeight: '100vh',
        background: '#faf9f5',
        overflow: 'hidden',
        padding: 'clamp(60px, 6vw, 90px) 24px clamp(50px, 5vw, 80px)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* ═════════════════════════════════════════════════════════════════════
          SVG LAYER: CONTINUOUS SWEEPING ORBITS, SPARKLES & DIRECTIONAL ARROWS
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
        {/* Main Sweeping Orbital Trajectory behind Headline, Cards & Photo */}
        <path
          d="M 50 400 C 60 260, 200 320, 360 380 C 640 450, 920 310, 1140 180 C 1340 70, 1540 160, 1460 390 C 1400 560, 1160 620, 860 630"
          stroke="#cbd5e1"
          strokeWidth="1.15"
          strokeDasharray="4 6"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Orbit loop behind top-right Trusted card */}
        <path
          d="M 1080 180 C 1220 120, 1420 150, 1460 310 C 1480 440, 1380 520, 1260 560"
          stroke="#e2e8f0"
          strokeWidth="1"
          strokeDasharray="3 5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Orbit Nodes */}
        <circle cx="110" cy="350" r="3.2" fill="#84cc16" opacity="0.9" />
        <circle cx="490" cy="410" r="3" fill="#84cc16" opacity="0.85" />
        <circle cx="780" cy="360" r="3.5" fill="#84cc16" opacity="0.9" />
        <circle cx="1020" cy="240" r="3" fill="#84cc16" opacity="0.85" />
        <circle cx="1140" cy="180" r="3.2" fill="#94a3b8" opacity="0.85" />
        <circle cx="1400" cy="280" r="3.5" fill="#84cc16" opacity="0.9" />
        <circle cx="1320" cy="540" r="3" fill="#84cc16" opacity="0.85" />

        {/* Subtle Star Sparkles along the canvas */}
        <g transform="translate(120, 435)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(780, 290)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(1040, 275)">
          <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(1480, 280)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#94a3b8" opacity="0.8" />
        </g>
        <g transform="translate(1210, 820)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#84cc16" opacity="0.85" />
        </g>

        {/* Micro-Doodles */}
        <text x="1510" y="750" fill="#94a3b8" fontSize="13" fontFamily="monospace">✦</text>
        <text x="70" y="850" fill="#94a3b8" fontSize="13" fontFamily="monospace">+</text>
      </svg>

      {/* ═════════════════════════════════════════════════════════════════════
          MAIN STAGE CONTAINER (FIXED ASPECT CANVAS, SINGLE VIEWPORT HARMONY)
          ═════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          width: '100%',
          maxWidth: 1440,
          position: 'relative',
          zIndex: 3,
        }}
      >
        {/* ─── 1. TOP-LEFT: EDITORIAL HEADLINE & COPY ─── */}
        <div style={{ maxWidth: 540, marginBottom: 20 }}>
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

          {/* Headline */}
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(32px, 3.8vw, 48px)',
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
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

          {/* Paragraph */}
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

        {/* ─── 2. TOP-CENTER & TOP-RIGHT FLOATING ELEMENTS ─── */}
        {/* Exact "strategy -> design -> impact" handwriting note */}
        <motion.div
          animate={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
          transition={{ type: 'spring', damping: 25 }}
          style={{
            position: 'absolute',
            top: '2%',
            left: '52%',
            width: 'clamp(115px, 9.5vw, 145px)',
            transform: 'rotate(-2deg)',
            zIndex: 4,
            pointerEvents: 'none',
          }}
        >
          <img
            src="/services_assets/strategy_note.png"
            alt="strategy design impact"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </motion.div>

        {/* Floating Trusted by 200+ Global Brands Card in upper right */}
        <motion.div
          animate={{ x: mousePos.x * 0.6, y: mousePos.y * 0.6 }}
          transition={{ type: 'spring', damping: 25 }}
          whileHover={{ scale: 1.04, y: -4 }}
          style={{
            position: 'absolute',
            top: '3%',
            right: '4%',
            width: 'clamp(210px, 17vw, 275px)',
            cursor: 'pointer',
            filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.06))',
            zIndex: 5,
          }}
        >
          <img
            src="/services_assets/trusted_brands_card.png"
            alt="Trusted by 200+ global brands"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </motion.div>

        {/* ─── 3. CENTRAL STAGE: OVERLAPPING, STAGGERED SERVICE CARDS + INTEGRATED PHOTO ─── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(430px, 36vw, 520px)',
            marginTop: 10,
          }}
        >
          {/* ── CARD 1: AI & Spatial Strategy (Left, Lower, Rotated Left -3.5°, Width ~24vw) ── */}
          <motion.div
            animate={{ x: mousePos.x * -0.7, y: mousePos.y * -0.7 }}
            transition={{ type: 'spring', damping: 25 }}
            whileHover={{ scale: 1.04, rotate: -2, y: -6, zIndex: 10 }}
            style={{
              position: 'absolute',
              top: '12%',
              left: '3%',
              width: 'clamp(260px, 23.5vw, 340px)',
              height: 'clamp(370px, 30vw, 440px)',
              background: '#ffffff',
              border: '1px solid #f0f1f3',
              borderRadius: 24,
              padding: 'clamp(24px, 2.2vw, 32px)',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transform: 'rotate(-4deg)',
              boxShadow: '0 18px 40px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              zIndex: 4,
            }}
          >
            {/* Top Icon in Neon Lime Box */}
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

            {/* Content */}
            <div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(19px, 1.5vw, 23px)',
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
                  fontSize: 'clamp(13px, 0.95vw, 14.5px)',
                  fontWeight: 300,
                  lineHeight: 1.6,
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
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: '#bef264',
                color: '#14532d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* ── CARD 2: Creative Direction (Centered, Taller, In Front, Width ~24.5vw) ── */}
          <motion.div
            animate={{ x: mousePos.x * -0.2, y: mousePos.y * -0.2 }}
            transition={{ type: 'spring', damping: 25 }}
            whileHover={{ scale: 1.04, y: -6, zIndex: 10 }}
            style={{
              position: 'absolute',
              top: '0%',
              left: '25%',
              width: 'clamp(275px, 24.5vw, 355px)',
              height: 'clamp(395px, 32vw, 470px)',
              background: '#ffffff',
              border: '1px solid #eef0f3',
              borderRadius: 24,
              padding: 'clamp(26px, 2.4vw, 34px)',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 24px 48px rgba(0,0,0,0.06)',
              cursor: 'pointer',
              zIndex: 6,
            }}
          >
            {/* Top Icon in Neon Lime Box */}
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

            {/* Content */}
            <div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 1.6vw, 24px)',
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
                  fontSize: 'clamp(13.5px, 1vw, 15px)',
                  fontWeight: 300,
                  lineHeight: 1.6,
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
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: '#bef264',
                color: '#14532d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* ── CARD 3: Data & Architecture (Right of Center, Slightly Lower, Rotated +2°, Width ~23.5vw) ── */}
          <motion.div
            animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
            transition={{ type: 'spring', damping: 25 }}
            whileHover={{ scale: 1.04, rotate: 3, y: -6, zIndex: 10 }}
            style={{
              position: 'absolute',
              top: '6%',
              left: '48%',
              width: 'clamp(260px, 23.5vw, 340px)',
              height: 'clamp(380px, 30.5vw, 450px)',
              background: '#ffffff',
              border: '1px solid #f0f1f3',
              borderRadius: 24,
              padding: 'clamp(24px, 2.2vw, 32px)',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transform: 'rotate(2deg)',
              boxShadow: '0 18px 40px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              zIndex: 4,
            }}
          >
            {/* Top Icon in Neon Lime Box */}
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

            {/* Content */}
            <div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(19px, 1.5vw, 23px)',
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
                  fontSize: 'clamp(13px, 0.95vw, 14.5px)',
                  fontWeight: 300,
                  lineHeight: 1.6,
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
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: '#bef264',
                color: '#14532d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* ── 4. RIGHT SIDE: PROMINENT TEAM PHOTO BESIDE AND BEHIND CARD 3 ── */}
          <motion.div
            animate={{ x: mousePos.x * 0.7, y: mousePos.y * 0.7 }}
            transition={{ type: 'spring', damping: 25 }}
            whileHover={{ scale: 1.03, y: -4 }}
            style={{
              position: 'absolute',
              top: '6%',
              right: '2%',
              width: 'clamp(280px, 26vw, 385px)',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 24px 48px rgba(0,0,0,0.08)',
              cursor: 'pointer',
              zIndex: 3,
            }}
          >
            <img
              src="/services_assets/team_collab_photo.png"
              alt="Collaborative by nature"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />

            {/* "Collaborative by nature" Dark Overlay Pill */}
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
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

          {/* ── 5. LOWER FLANKS & ORBIT ANCHORS ── */}
          {/* Dotted Matrix Decorative Card on far left behind Card 1 */}
          <motion.div
            animate={{ x: mousePos.x * -0.4, y: mousePos.y * -0.4 }}
            style={{
              position: 'absolute',
              top: '40%',
              left: '-2%',
              width: 'clamp(100px, 9vw, 135px)',
              zIndex: 2,
              opacity: 0.8,
              pointerEvents: 'none',
            }}
          >
            <img
              src="/services_assets/dotted_matrix_card.png"
              alt="Dotted Matrix"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </motion.div>

          {/* Bottom-Center: 3D Glass Torus (Ring) with Neon Lime Glowing Core */}
          <motion.div
            animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
            transition={{ type: 'spring', damping: 25 }}
            whileHover={{ scale: 1.1, rotate: 12 }}
            style={{
              position: 'absolute',
              bottom: '-8%',
              left: '42%',
              width: 'clamp(105px, 9vw, 140px)',
              cursor: 'pointer',
              zIndex: 7,
            }}
          >
            <img
              src="/services_assets/glass_torus.png"
              alt="3D Glass Torus"
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </motion.div>

          {/* Bottom-Right: Waveform Slider Micro-Card */}
          <motion.div
            animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
            whileHover={{ scale: 1.05 }}
            style={{
              position: 'absolute',
              bottom: '-5%',
              left: '60%',
              width: 'clamp(120px, 10vw, 150px)',
              cursor: 'pointer',
              filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.05))',
              zIndex: 7,
            }}
          >
            <img
              src="/services_assets/waveform_slider_card.png"
              alt="Interactive Waveform Slider"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </motion.div>

          {/* Bottom-Right Annotation: "Real people. Real results." with hand-drawn arrow */}
          <motion.div
            animate={{ x: mousePos.x * 0.6, y: mousePos.y * 0.6 }}
            style={{
              position: 'absolute',
              bottom: '-12%',
              right: '3%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 4,
              zIndex: 6,
            }}
          >
            <div style={{ width: 24, marginLeft: 6 }}>
              <img
                src="/services_assets/curved_arrow_doodle.png"
                alt="Arrow"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>
            <div style={{ width: 'clamp(100px, 8.5vw, 130px)' }}>
              <img
                src="/services_assets/real_results_note.png"
                alt="Real people Real results"
                style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              />
            </div>
          </motion.div>

          {/* Bottom-Left Annotation: "Insightful by design" + arrow doodle */}
          <motion.div
            animate={{ x: mousePos.x * -0.4, y: mousePos.y * -0.4 }}
            style={{
              position: 'absolute',
              bottom: '-8%',
              left: '0%',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              zIndex: 6,
            }}
          >
            <div style={{ width: 'clamp(90px, 7.5vw, 115px)' }}>
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
          </motion.div>
        </div>

        {/* ─── 6. FAR LEFT DECORATIVE GLASS ARTIFACTS ─── */}
        {/* 3D Glass Plus on top left */}
        <motion.div
          animate={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          style={{
            position: 'absolute',
            top: 10,
            left: -40,
            width: 'clamp(80px, 6.5vw, 105px)',
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
            top: 180,
            left: 10,
            width: 'clamp(48px, 4vw, 70px)',
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
      </div>
    </section>
  )
}
