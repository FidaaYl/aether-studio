import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'

interface Props {
  T?: any
  L?: boolean
}

const STATS_DATA = [
  {
    icon: '/assets/testimonials/6.png',
    metric: '40%',
    title: 'Faster Delivery',
    desc: 'Automated design tokens and component systems reduce development cycles.',
  },
  {
    icon: '/assets/testimonials/7.png',
    metric: '3x',
    title: 'Team Alignment',
    desc: 'Real-time design audits and instant staging previews for all stakeholders.',
  },
  {
    icon: '/assets/testimonials/9.png',
    metric: '100%',
    title: 'Real-Time Insights',
    desc: 'Full visibility across sprint velocity, user dwell times, and web vitals.',
  },
  {
    icon: '/assets/testimonials/10.png',
    metric: '10k+',
    title: 'Active Users',
    desc: 'Across high-growth startups, enterprise brands, and creative agencies.',
  },
]

const TESTIMONIALS_LIST = [
  {
    quote:
      'Aether completely changed the way our team works. From design handoff to development, everything is faster, clearer, and more aligned than ever.',
    author: 'Sarah Johnson',
    role: 'Head of Product, Luma',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
  },
  {
    quote:
      'The speed of iteration with Aether is unmatched. We shipped our design system and client platform in half the projected timeframe.',
    author: 'Alex Rivera',
    role: 'Design Director, Vesper',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
  },
  {
    quote:
      'The fidelity and spatial attention to detail makes every digital product feel world-class. It is our default studio foundation.',
    author: 'Elena Rostova',
    role: 'VP of Engineering, Apex',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80',
  },
]

const PARTNER_LOGOS = [
  {
    name: 'Microsoft',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <rect x="1" y="1" width="8.5" height="8.5" fill="#f25022" />
        <rect x="10.5" y="1" width="8.5" height="8.5" fill="#7fba00" />
        <rect x="1" y="10.5" width="8.5" height="8.5" fill="#00a4ef" />
        <rect x="10.5" y="10.5" width="8.5" height="8.5" fill="#ffb900" />
      </svg>
    ),
  },
  {
    name: 'Dropbox',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0061ff">
        <path d="M6 2L0 6L6 10L12 6L6 2ZM18 2L12 6L18 10L24 6L18 2ZM0 14L6 18L12 14L6 10L0 14ZM24 14L18 10L12 14L18 18L24 14ZM6 19.5L12 15.5L18 19.5L12 23.5L6 19.5Z" />
      </svg>
    ),
  },
  {
    name: 'Klarna',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#ffb3c7" />
        <path d="M8 7V17M12 7V17M12 12L16 7M12 12L16 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Squarespace',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 12L12 22L22 12L12 2ZM8 12L12 8L16 12L12 16L8 12Z" fill="#111827" />
      </svg>
    ),
  },
  {
    name: 'Shopify',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#95bf47">
        <path d="M19.5 6L16.5 2H7.5L4.5 6L2 22H22L19.5 6ZM12 5C13.1 5 14 5.9 14 7H10C10 5.9 10.9 5 12 5Z" />
      </svg>
    ),
  },
  {
    name: 'Zapier',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff4a00">
        <path d="M12 2L14 9H21L15 13L18 20L12 15L6 20L9 13L3 9H10L12 2Z" />
      </svg>
    ),
  },
]

// Hand-drawn doodle star
const DoodleStar: React.FC<{ size?: number; color?: string; style?: React.CSSProperties }> = ({
  size = 18,
  color = '#1e293b',
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ display: 'inline-block', ...style }}
  >
    <path
      d="M12 2L14.8 8.6L22 9.2L16.5 14L18.2 21L12 17.2L5.8 21L7.5 14L2 9.2L9.2 8.6L12 2Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Four-point sparkle star (✦)
const SparkleStar: React.FC<{ size?: number; color?: string; style?: React.CSSProperties }> = ({
  size = 16,
  color = '#84cc16',
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    style={{ display: 'inline-block', ...style }}
  >
    <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
  </svg>
)

// Hand-drawn spiral swirl doodle
const SpiralDoodle: React.FC<{ width?: number; height?: number; color?: string; style?: React.CSSProperties }> = ({
  width = 28,
  height = 28,
  color = '#1e293b',
  style,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    style={{ display: 'inline-block', ...style }}
  >
    <path
      d="M16 16C14.5 16 13 14.8 13 13.5C13 11.5 15 10 17 10C19.8 10 22 12.2 22 15C22 18.5 19 21.5 15.5 21.5C11 21.5 7.5 18 7.5 13.5C7.5 8 12.5 3.5 18 3.5C24.5 3.5 29.5 9 29.5 15.5C29.5 22.8 23.5 28.5 16 28.5"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
)

export default function Testimonials({ T, L }: Props) {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section
      id="testimonials"
      style={{
        background: '#fafbfc',
        position: 'relative',
        padding: '50px 32px 110px',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Background Soft Dotted Connecting Paths */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.6,
        }}
      >
        <path
          d="M 120 180 C 240 240, 320 120, 600 200 C 900 280, 1100 150, 1240 220"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          fill="none"
        />
        <path
          d="M 80 480 C 300 420, 500 560, 800 490 C 1050 430, 1200 520, 1300 470"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          fill="none"
        />
        {/* Glowing lime nodes along the path */}
        <circle cx="280" cy="185" r="4.5" fill="#84cc16" />
        <circle cx="860" cy="240" r="4.5" fill="#84cc16" />
        <circle cx="520" cy="520" r="4.5" fill="#84cc16" />
        <circle cx="1180" cy="495" r="4.5" fill="#84cc16" />
      </svg>

      {/* Hand-drawn Stars & Doodles in Background Spaces */}
      {/* Top-Right Hand-drawn Star */}
      <DoodleStar
        size={20}
        color="#0f172a"
        style={{
          position: 'absolute',
          top: 45,
          right: 70,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.75,
        }}
      />

      {/* Top-Left Sparkle Star */}
      <SparkleStar
        size={16}
        color="#84cc16"
        style={{
          position: 'absolute',
          top: 60,
          left: 110,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Mid-Left 4-Point Star beside Headline */}
      <SparkleStar
        size={14}
        color="#0f172a"
        style={{
          position: 'absolute',
          top: 150,
          left: 230,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.8,
        }}
      />

      {/* Mid-Right Star Doodle above Cards */}
      <DoodleStar
        size={16}
        color="#0f172a"
        style={{
          position: 'absolute',
          top: 220,
          right: 120,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.7,
        }}
      />

      {/* Left Star Doodle below 'Built for focus' */}
      <DoodleStar
        size={18}
        color="#0f172a"
        style={{
          position: 'absolute',
          top: 360,
          left: 65,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.75,
        }}
      />

      {/* Right Spiral Doodle beside Cards */}
      <SpiralDoodle
        width={30}
        height={30}
        color="#0f172a"
        style={{
          position: 'absolute',
          top: 410,
          right: 65,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.75,
        }}
      />

      {/* Left Sparkle Star near Testimonial */}
      <SparkleStar
        size={18}
        color="#0f172a"
        style={{
          position: 'absolute',
          top: 650,
          left: 140,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.8,
        }}
      />

      {/* Right Star Doodle near Testimonial */}
      <DoodleStar
        size={18}
        color="#0f172a"
        style={{
          position: 'absolute',
          top: 530,
          right: 110,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.7,
        }}
      />

      {/* Right Sparkle Star below Testimonial */}
      <SparkleStar
        size={15}
        color="#0f172a"
        style={{
          position: 'absolute',
          top: 690,
          right: 100,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.8,
        }}
      />

      {/* Bottom Lime Sparkle Star */}
      <SparkleStar
        size={15}
        color="#84cc16"
        style={{
          position: 'absolute',
          bottom: 110,
          right: 120,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 1280px Centered Stage */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* =========================================================================
            TOP HEADER AREA WITH 3D ASSETS & FLOATING "LOVED BY TEAMS"
            ========================================================================= */}
        <div style={{ position: 'relative', marginBottom: 46 }}>
          {/* Top-Left Floating 3D Asset (19.png / Glass Ring) */}
          <motion.img
            className="desktop-only-testimonial-decoration"
            src="/assets/testimonials/19.png"
            alt=""
            aria-hidden="true"
            animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: -30,
              left: 15,
              width: 140,
              height: 'auto',
              pointerEvents: 'none',
              zIndex: 5,
              filter: 'drop-shadow(0 16px 28px rgba(0,0,0,0.1))',
            }}
          />

          {/* Top-Right Floating Widget: "Loved by teams worldwide" (23.png) */}
          <motion.div
            className="desktop-only-testimonial-decoration"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: -15,
              right: 25,
              zIndex: 10,
            }}
          >
            <img
              src="/assets/testimonials/23.png"
              alt="Loved by teams worldwide"
              style={{
                width: 215,
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 12px 25px rgba(0,0,0,0.06))',
              }}
            />
          </motion.div>

          {/* Center Main Header */}
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
            {/* Eyebrow Label: • TESTIMONIALS */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#84cc16',
                  display: 'inline-block',
                  boxShadow: '0 0 8px rgba(132, 204, 22, 0.6)',
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11.5,
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#84cc16',
                }}
              >
                TESTIMONIALS
              </span>
            </div>

            {/* Headline with underline under "Aether" */}
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(40px, 4vw, 56px)',
                letterSpacing: '-0.035em',
                lineHeight: 1.1,
                color: '#0f172a',
                margin: '0 0 18px',
              }}
            >
              Why Teams Choose
              <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ position: 'relative', zIndex: 2 }}>Aether</span>
                {/* Lime highlighter underline stroke under Aether */}
                <svg
                  width="180"
                  height="12"
                  viewBox="0 0 180 12"
                  fill="none"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: -6,
                    width: '108%',
                    height: 'auto',
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                >
                  <path
                    d="M3 7C35 3 85 2 177 6C140 10 70 9 3 7Z"
                    fill="#84cc16"
                  />
                </svg>
              </span>
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 16.5,
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#64748b',
                maxWidth: 500,
                margin: '0 auto',
              }}
            >
              Trusted by teams to build and scale more efficiently.
              <br />
              Designed to help teams do their best work.
            </p>
          </div>
        </div>

        {/* =========================================================================
            MIDDLE ROW: 4 STAT CARDS + EXTERNAL DOODLES & 3D PRISM
            ========================================================================= */}
        <div style={{ position: 'relative', marginBottom: 58 }}>
          {/* Left Doodle Sticker: "Built for focus, speed & impact" (15.png) + Arrow pointing at Card 1 */}
          <div
            className="testimonials-doodle-left"
            style={{
              position: 'absolute',
              top: 15,
              left: -135,
              zIndex: 4,
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src="/assets/testimonials/15.png"
              alt="Built for focus, speed & impact"
              style={{ width: 120, height: 'auto', display: 'block', marginBottom: 2 }}
            />
            {/* Curved arrow pointing down-right into Card 1 */}
            <svg width="42" height="34" viewBox="0 0 42 34" fill="none" style={{ alignSelf: 'flex-end', marginRight: 10 }}>
              <path
                d="M6 4C12 12 20 22 34 26M34 26L26 18M34 26L27 31"
                stroke="#1e293b"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* 3D Glass Triangle / Prism (18.png) floating in the gap between Card 3 and 4 */}
          <motion.img
            className="desktop-only-testimonial-decoration"
            src="/assets/testimonials/18.png"
            alt=""
            aria-hidden="true"
            animate={{ y: [0, -7, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: -48,
              right: 250,
              width: 85,
              height: 'auto',
              pointerEvents: 'none',
              zIndex: 15,
              filter: 'drop-shadow(0 14px 24px rgba(0,0,0,0.1))',
            }}
          />

          {/* Right Doodle Sticker: "Real results from real teams" (14.png) + Arrow pointing directly at Card 4 */}
          <div
            className="testimonials-doodle-right"
            style={{
              position: 'absolute',
              top: 25,
              right: -140,
              zIndex: 4,
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src="/assets/testimonials/14.png"
              alt="Real results from real teams"
              style={{ width: 120, height: 'auto', display: 'block', marginBottom: 2 }}
            />
            {/* Curved arrow pointing down-left directly into Card 4 */}
            <svg width="42" height="34" viewBox="0 0 42 34" fill="none" style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
              <path
                d="M36 4C30 12 22 22 8 26M8 26L16 18M8 26L15 31"
                stroke="#1e293b"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* 4 Stat Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 20,
              position: 'relative',
              zIndex: 2,
            }}
          >
            {STATS_DATA.map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ y: -4, boxShadow: '0 14px 34px rgba(0,0,0,0.06)' }}
                transition={{ duration: 0.2 }}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: 22,
                  padding: '24px 22px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 220,
                  boxSizing: 'border-box',
                  position: 'relative',
                }}
              >
                {/* Card Header: Icon in lime circle + top-right green dot */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 16,
                  }}
                >
                  <img
                    src={s.icon}
                    alt={s.title}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      objectFit: 'contain',
                    }}
                  />
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#84cc16',
                      display: 'inline-block',
                      boxShadow: '0 0 6px rgba(132, 204, 22, 0.6)',
                    }}
                  />
                </div>

                {/* Metric */}
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 40,
                    color: '#0f172a',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    marginBottom: 12,
                  }}
                >
                  {s.metric}
                </div>

                {/* Title & Description */}
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 15.5,
                      fontWeight: 700,
                      color: '#0f172a',
                      letterSpacing: '-0.015em',
                      marginBottom: 6,
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13,
                      fontWeight: 400,
                      color: '#64748b',
                      lineHeight: 1.5,
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            CENTER ROW: TESTIMONIAL QUOTE CARD WITH 3D ASSETS & VELOCITY WIDGET
            ========================================================================= */}
        <div style={{ position: 'relative', maxWidth: 960, margin: '0 auto 70px', width: '100%' }}>
          {/* Floating 3D Glass Torus with Neon Green Core (19.png) on Left */}
          <motion.img
            className="desktop-only-testimonial-decoration"
            src="/assets/testimonials/19.png"
            alt=""
            aria-hidden="true"
            animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 80,
              left: -115,
              width: 140,
              height: 'auto',
              pointerEvents: 'none',
              zIndex: 20,
              filter: 'drop-shadow(0 18px 32px rgba(0,0,0,0.12))',
            }}
          />

          {/* Floating Widget on Right: "Project velocity +72% ↗" (1.png) */}
          <motion.div
            className="desktop-only-testimonial-decoration"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 85,
              right: -55,
              zIndex: 20,
            }}
          >
            <img
              src="/assets/testimonials/1.png"
              alt="Project velocity +72%"
              style={{
                width: 190,
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.08))',
              }}
            />
          </motion.div>

          {/* Floating 3D Glass Cube (17.png) on Bottom Right */}
          <motion.img
            className="desktop-only-testimonial-decoration"
            src="/assets/testimonials/17.png"
            alt=""
            aria-hidden="true"
            animate={{ y: [0, -6, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: -45,
              right: -75,
              width: 110,
              height: 'auto',
              pointerEvents: 'none',
              zIndex: 20,
              filter: 'drop-shadow(0 16px 28px rgba(0,0,0,0.1))',
            }}
          />

          {/* Testimonial Card with Lime-Green Layer Backing */}
          <div style={{ position: 'relative' }}>
            {/* Offset Lime-Green Layer Backing */}
            <div
              style={{
                position: 'absolute',
                top: 8,
                left: -8,
                right: 8,
                bottom: -8,
                background: '#bef264',
                borderRadius: 28,
                zIndex: 1,
                opacity: 0.9,
                transform: 'rotate(-0.6deg)',
              }}
            />

            {/* White Quote Card Container */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: 26,
                padding: 'clamp(28px, 4vw, 42px) clamp(20px, 4vw, 48px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
              }}
            >
              {/* Large Lime Quotation Mark */}
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 52,
                  fontWeight: 900,
                  lineHeight: 0.8,
                  color: '#84cc16',
                  marginBottom: 16,
                }}
              >
                “
              </div>

              {/* Quote Text */}
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(18px, 2.2vw, 22px)',
                  fontWeight: 600,
                  lineHeight: 1.5,
                  color: '#0f172a',
                  margin: '0 0 28px',
                  maxWidth: 720,
                }}
              >
                {TESTIMONIALS_LIST[activeTestimonial].quote}
              </p>

              {/* Footer: Author Info on Left + 5 Lime Stars on Right */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: 20,
                }}
              >
                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <img
                    src={TESTIMONIALS_LIST[activeTestimonial].avatar}
                    alt={TESTIMONIALS_LIST[activeTestimonial].author}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #bef264',
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        color: '#0f172a',
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {TESTIMONIALS_LIST[activeTestimonial].author}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 13,
                        fontWeight: 400,
                        color: '#64748b',
                      }}
                    >
                      {TESTIMONIALS_LIST[activeTestimonial].role}
                    </div>
                  </div>
                </div>

                {/* 5 Lime Stars Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      color="#84cc16"
                      fill="#84cc16"
                      strokeWidth={1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Dot Indicators */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              marginTop: 24,
            }}
          >
            {TESTIMONIALS_LIST.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                style={{
                  width: activeTestimonial === idx ? 22 : 8,
                  height: 8,
                  borderRadius: 10,
                  background: activeTestimonial === idx ? '#84cc16' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.25s ease',
                }}
                aria-label={`Testimonial slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM SECTION: BRAND PROOF & PARTNER BANNER WITH CTA
            ========================================================================= */}
        <div
          style={{
            position: 'relative',
            background: '#faf9f5',
            border: '1.5px solid #ede8dc',
            borderRadius: 28,
            padding: '52px 40px 48px',
            textAlign: 'center',
            boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
          }}
        >
          {/* Top-Left Doodle: "Trusted by innovators" */}
          <div
            className="desktop-only-testimonial-decoration"
            style={{
              position: 'absolute',
              top: 24,
              left: 36,
              textAlign: 'left',
              pointerEvents: 'none',
            }}
          >
            <span
              style={{
                fontFamily: "'Caveat', cursive, sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: '#0f172a',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              Trusted by
              <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                innovators
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: -2,
                    width: '100%',
                    height: 2,
                    background: '#84cc16',
                    borderRadius: 2,
                  }}
                />
              </span>
            </span>
            <svg width="34" height="28" viewBox="0 0 34 28" fill="none" style={{ marginLeft: 24, marginTop: 4 }}>
              <path
                d="M4 2C8 10 16 18 28 22M28 22L20 16M28 22L22 26"
                stroke="#1e293b"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Top-Right Doodle: "Powering teams building the future" (12.png) */}
          <div
            className="desktop-only-testimonial-decoration"
            style={{
              position: 'absolute',
              top: 20,
              right: 36,
              pointerEvents: 'none',
            }}
          >
            <img
              src="/assets/testimonials/12.png"
              alt="Powering teams building the future"
              style={{ width: 140, height: 'auto', display: 'block', marginBottom: 4 }}
            />
            <svg width="34" height="28" viewBox="0 0 34 28" fill="none" style={{ marginLeft: 15 }}>
              <path
                d="M28 2C24 10 16 18 4 22M4 22L12 16M4 22L10 26"
                stroke="#1e293b"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Banner Title with adjusted underline space under "creative professionals" */}
          <div style={{ maxWidth: 720, margin: '0 auto 36px' }}>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(24px, 3vw, 36px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                color: '#0f172a',
                margin: 0,
              }}
            >
              Join the world’s best design
              <br />
              and{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ position: 'relative', zIndex: 2 }}>creative professionals</span>
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: -5,
                    width: '100%',
                    height: 4,
                    background: '#bef264',
                    borderRadius: 3,
                    zIndex: 1,
                  }}
                />
              </span>
            </h3>
          </div>

          {/* Real Brand Logos Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 16,
              alignItems: 'center',
              marginBottom: 36,
            }}
          >
            {PARTNER_LOGOS.map((partner) => (
              <motion.div
                key={partner.name}
                whileHover={{ y: -2, boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  padding: '10px 20px',
                  borderRadius: 100,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  cursor: 'default',
                }}
              >
                {partner.icon}
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 14.5,
                    color: '#0f172a',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button Area + 3D Block Arrow (4.png) */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Hand-drawn 3D block arrow (4.png) on bottom-left */}
            <img
              className="desktop-only-testimonial-decoration"
              src="/assets/testimonials/4.png"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: 5,
                left: -70,
                width: 48,
                height: 'auto',
                pointerEvents: 'none',
              }}
            />

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(190,242,100,0.5)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#bef264',
                color: '#14532d',
                padding: '14px 34px',
                borderRadius: 100,
                textDecoration: 'none',
                fontFamily: "'Syne', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: '-0.01em',
                boxShadow: '0 6px 22px rgba(190,242,100,0.38)',
                cursor: 'pointer',
              }}
            >
              Start Free Today <ArrowUpRight size={17} strokeWidth={2.6} />
            </motion.a>

            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                color: '#64748b',
                marginTop: 10,
                fontWeight: 400,
              }}
            >
              No credit card required
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
