import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'

export const FeaturesSection: React.FC<{ T?: any; L?: boolean }> = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

  const stepsData = [
    {
      id: 0,
      num: '01',
      title: 'Simple And Fast Setup',
      desc: 'Connect your repositories, choose, and kickstart your studio with zero configuration hassle.',
      icon: '/assets/features/11.png',
      color: '#2563eb',
      borderActive: '#3b82f6',
      shadowActive: '0 16px 40px rgba(37, 99, 235, 0.14), 0 2px 8px rgba(0,0,0,0.02)',
      bgActive: '#ffffff',
    },
    {
      id: 1,
      num: '02',
      title: 'Work Together Effortlessly',
      desc: 'Seamless real-time collaboration with instant previews and live interactive state review.',
      icon: '/assets/features/12.png',
      color: '#65a30d',
      borderActive: '#84cc16',
      shadowActive: '0 16px 40px rgba(132, 204, 22, 0.14), 0 2px 8px rgba(0,0,0,0.02)',
      bgActive: '#ffffff',
    },
    {
      id: 2,
      num: '03',
      title: 'Monitor Your Progress & Scale',
      desc: 'Comprehensive telemetry and Core Web Vitals analytics for exceptional decision making.',
      icon: '/assets/features/13.png',
      color: '#7c3aed',
      borderActive: '#a855f7',
      shadowActive: '0 16px 40px rgba(168, 85, 247, 0.14), 0 2px 8px rgba(0,0,0,0.02)',
      bgActive: '#ffffff',
    },
  ]

  return (
    <section
      id="features"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #f8fafc 0%, #f8fafc 85%, #fafbfc 100%)',
        padding: '40px 32px 50px',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 500,
          background: 'radial-gradient(ellipse at center, rgba(186, 230, 253, 0.2) 0%, rgba(248, 250, 252, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* 1280px Centered Master Container */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* =========================================================================
            TOP ROW: 2-COLUMN BALANCED COMPOSITION (LEFT 52% vs RIGHT 48%)
            ========================================================================= */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 48,
            position: 'relative',
          }}
        >
          {/* -----------------------------------------------------------------------
              LEFT COLUMN (52% Width): EYEBROW, 2-LINE HEADLINE, DESCRIPTION & TASKBOARD
              ----------------------------------------------------------------------- */}
          <div
            style={{
              width: '52%',
              maxWidth: 660,
              minWidth: 500,
              position: 'relative',
              zIndex: 10,
              flexShrink: 0,
            }}
          >
            {/* Header Content Block */}
            <div style={{ position: 'relative', marginBottom: 28 }}>
              {/* Dark Sparkle Star on top-left */}
              <img
                src="/assets/features/6.png"
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: -24,
                  left: -32,
                  width: 20,
                  height: 'auto',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              />

              {/* Eyebrow Label: • FEATURES */}
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
                  FEATURES
                </span>
              </div>

              {/* Headline with underline strictly placed under "Steps" with comfortable breathing room */}
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 52,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.1,
                  color: '#0f172a',
                  margin: '0 0 20px',
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>Get Started In Just 3</span>
                <br />
                Easy{' '}
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  <span style={{ position: 'relative', zIndex: 2 }}>Steps</span>
                  {/* Lime-green handwritten underline asset moved down below descenders */}
                  <img
                    src="/assets/features/4.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: -6,
                      bottom: -23,
                      width: '112%',
                      height: 'auto',
                      pointerEvents: 'none',
                      zIndex: 1,
                    }}
                  />
                </span>
              </h2>

              {/* Description Paragraph */}
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#64748b',
                  maxWidth: 450,
                  margin: '22px 0 0',
                }}
              >
                Launch your digital project with a guided studio onboarding experience designed for speed and simplicity.
              </p>
            </div>

            {/* Dark Aether TaskBoard Visual (~640px wide) */}
            <div style={{ position: 'relative', marginTop: 36, width: '100%' }}>
              {/* Dotted Grid (5.png) behind TaskBoard */}
              <img
                src="/assets/features/5.png"
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: -24,
                  left: -36,
                  width: 140,
                  height: 'auto',
                  opacity: 0.8,
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Large 3D Glass Torus (2.png) positioned outside bottom-left corner */}
              <motion.img
                src="/assets/features/2.png"
                alt=""
                aria-hidden="true"
                animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  bottom: -65,
                  left: -75,
                  width: 155,
                  height: 'auto',
                  pointerEvents: 'none',
                  zIndex: 25,
                  filter: 'drop-shadow(0 16px 28px rgba(0,0,0,0.12))',
                }}
              />

              {/* Dark TaskBoard Container */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 10,
                  background: '#0d131f',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 20,
                  padding: '20px 22px 24px',
                  boxShadow: '0 25px 60px -12px rgba(13, 19, 31, 0.42), 0 0 0 1px rgba(255, 255, 255, 0.04)',
                }}
              >
                {/* Window Top Bar: 14.png Traffic Lights + Title + Live Status */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 16,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <img
                      src="/assets/features/14.png"
                      alt="Window buttons"
                      style={{ height: 11, width: 'auto', display: 'block' }}
                    />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      fontWeight: 500,
                      color: '#94a3b8',
                    }}
                  >
                    <span>Sprint 42 / Live</span>
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#22c55e',
                        boxShadow: '0 0 8px rgba(34, 197, 94, 0.9)',
                      }}
                    />
                  </div>
                </div>

                {/* Window Title */}
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    color: '#f8fafc',
                    letterSpacing: '-0.02em',
                    margin: '0 0 16px',
                  }}
                >
                  Aether TaskBoard
                </h3>

                {/* 3 Kanban Columns with dynamic highlight based on active card */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 10,
                  }}
                >
                  {/* Column 1: To Do */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                      opacity: activeStep === 0 ? 1 : 0.75,
                      transition: 'opacity 0.25s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 2 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#84cc16' }} />
                      <span style={{ fontSize: 11.5, fontWeight: 600, color: '#e2e8f0' }}>To Do</span>
                    </div>
                    <div
                      style={{
                        background: activeStep === 0 ? '#1b273d' : '#161f30',
                        border: activeStep === 0 ? '1px solid rgba(132, 204, 22, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: 8,
                        padding: '10px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 7,
                        transition: 'all 0.2s',
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#84cc16', flexShrink: 0 }} />
                      <span style={{ fontSize: 10.5, color: '#e2e8f0', fontWeight: 500, lineHeight: 1.25 }}>
                        Design Token Architecture
                      </span>
                    </div>
                    <div
                      style={{
                        background: activeStep === 0 ? '#1b273d' : '#161f30',
                        border: activeStep === 0 ? '1px solid rgba(132, 204, 22, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: 8,
                        padding: '10px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 7,
                        transition: 'all 0.2s',
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#84cc16', flexShrink: 0 }} />
                      <span style={{ fontSize: 10.5, color: '#e2e8f0', fontWeight: 500, lineHeight: 1.25 }}>
                        GLSL Shader Review
                      </span>
                    </div>
                  </div>

                  {/* Column 2: In Progress */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                      opacity: activeStep === 1 ? 1 : 0.75,
                      transition: 'opacity 0.25s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 2 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3b82f6' }} />
                      <span style={{ fontSize: 11.5, fontWeight: 600, color: '#e2e8f0' }}>In Progress</span>
                    </div>
                    <div
                      style={{
                        background: activeStep === 1 ? '#1b273d' : '#161f30',
                        border: activeStep === 1 ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: 8,
                        padding: '10px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 7,
                        transition: 'all 0.2s',
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#3b82f6', flexShrink: 0 }} />
                      <span style={{ fontSize: 10.5, color: '#e2e8f0', fontWeight: 500, lineHeight: 1.25 }}>
                        Spatial Computing OS
                      </span>
                    </div>
                    <div
                      style={{
                        background: activeStep === 1 ? '#1b273d' : '#161f30',
                        border: activeStep === 1 ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: 8,
                        padding: '10px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 7,
                        transition: 'all 0.2s',
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#3b82f6', flexShrink: 0 }} />
                      <span style={{ fontSize: 10.5, color: '#e2e8f0', fontWeight: 500, lineHeight: 1.25 }}>
                        WebGL Rendering
                      </span>
                    </div>
                  </div>

                  {/* Column 3: Done */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                      opacity: activeStep === 2 ? 1 : 0.75,
                      transition: 'opacity 0.25s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 2 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a855f7' }} />
                      <span style={{ fontSize: 11.5, fontWeight: 600, color: '#e2e8f0' }}>Done</span>
                    </div>
                    <div
                      style={{
                        background: activeStep === 2 ? '#1b273d' : '#161f30',
                        border: activeStep === 2 ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: 8,
                        padding: '10px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 7,
                        transition: 'all 0.2s',
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#a855f7', flexShrink: 0 }} />
                      <span style={{ fontSize: 10.5, color: '#e2e8f0', fontWeight: 500, lineHeight: 1.25 }}>
                        Vercel Edge Setup
                      </span>
                    </div>
                    <div
                      style={{
                        background: activeStep === 2 ? '#1b273d' : '#161f30',
                        border: activeStep === 2 ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: 8,
                        padding: '10px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 4,
                        transition: 'all 0.2s',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7, overflow: 'hidden' }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#a855f7', flexShrink: 0 }} />
                        <span
                          style={{
                            fontSize: 10.5,
                            color: '#e2e8f0',
                            fontWeight: 500,
                            lineHeight: 1.25,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Client Audit 100/100
                        </span>
                      </div>
                      <div
                        style={{
                          width: 15,
                          height: 15,
                          borderRadius: '50%',
                          background: '#22c55e',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Check size={10} color="#0d131f" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              CENTER ZONE: 3D GLASS CUBE (1.png) BALANCED IN THE OPEN GAP
              ----------------------------------------------------------------------- */}
          <motion.img
            src="/assets/features/1.png"
            alt=""
            aria-hidden="true"
            animate={{ y: [0, -8, 0], rotate: [0, 2.5, -2.5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 5,
              left: '46.5%',
              transform: 'translateX(-50%)',
              width: 110,
              height: 'auto',
              pointerEvents: 'none',
              zIndex: 15,
              filter: 'drop-shadow(0 14px 25px rgba(0,0,0,0.06))',
            }}
          />

          {/* Lime Sparkle Star in negative space near cube */}
          <motion.img
            src="/assets/features/7.png"
            alt=""
            aria-hidden="true"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 140,
              left: '44%',
              width: 16,
              height: 'auto',
              pointerEvents: 'none',
              zIndex: 16,
            }}
          />

          {/* Pair of Sparkle Stars (8.png) in top-right negative space */}
          <img
            src="/assets/features/8.png"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: -15,
              right: 15,
              width: 24,
              height: 'auto',
              pointerEvents: 'none',
              zIndex: 16,
            }}
          />

          {/* -----------------------------------------------------------------------
              RIGHT COLUMN (48% Width): 3 INTERACTIVE CLICKABLE WORKFLOW CARDS
              ----------------------------------------------------------------------- */}
          <div
            style={{
              width: '48%',
              maxWidth: 580,
              minWidth: 480,
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              paddingTop: 6,
              flexShrink: 0,
            }}
          >
            {/* Dashed connector path with lime nodes (15.png) BEHIND cards */}
            <img
              src="/assets/features/15.png"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: -20,
                left: -35,
                width: 320,
                height: 'auto',
                opacity: 0.95,
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* Render Clickable Cards */}
            {stepsData.map((step) => {
              const isSelected = activeStep === step.id

              return (
                <motion.div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveStep(step.id)
                    }
                  }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  style={{
                    position: 'relative',
                    zIndex: isSelected ? 5 : 2,
                    background: '#ffffff',
                    border: isSelected ? `2px solid ${step.borderActive}` : '1.5px solid #e2e8f0',
                    borderRadius: 22,
                    padding: '22px 24px',
                    minHeight: 155,
                    boxShadow: isSelected ? step.shadowActive : '0 4px 20px rgba(0,0,0,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    cursor: 'pointer',
                    userSelect: 'none',
                    outline: 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                    {/* Large 62px Colored Icon Tile */}
                    <motion.img
                      src={step.icon}
                      alt={`Step ${step.num} Icon`}
                      animate={{ scale: isSelected ? [1, 1.08, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: 62,
                        height: 62,
                        borderRadius: 15,
                        objectFit: 'contain',
                        flexShrink: 0,
                      }}
                    />

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                        <span
                          style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 800,
                            fontSize: 16.5,
                            color: step.color,
                          }}
                        >
                          {step.num}
                        </span>
                        <h4
                          style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 800,
                            fontSize: 18,
                            color: '#0f172a',
                            letterSpacing: '-0.025em',
                            margin: 0,
                          }}
                        >
                          {step.title}
                        </h4>
                      </div>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 13.5,
                          fontWeight: 400,
                          lineHeight: 1.5,
                          color: '#64748b',
                          margin: 0,
                          maxWidth: 350,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Circular Arrow Button with Active State Feedback */}
                  <motion.div
                    animate={{
                      rotate: isSelected ? 45 : 0,
                      backgroundColor: isSelected ? step.borderActive : '#f8fafc',
                      color: isSelected ? '#ffffff' : '#0f172a',
                      borderColor: isSelected ? step.borderActive : '#e2e8f0',
                    }}
                    transition={{ duration: 0.25 }}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isSelected ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                    }}
                  >
                    <ArrowUpRight size={17} strokeWidth={2.4} />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM ROW: 3-COLUMN BENEFITS PANEL WITH 3D GLASS PRISM
            ========================================================================= */}
        <div style={{ position: 'relative', marginTop: 68, width: '100%' }}>
          {/* 3D Glass Triangle (3.png) outside bottom-right corner */}
          <motion.img
            src="/assets/features/3.png"
            alt=""
            aria-hidden="true"
            animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: -45,
              right: -40,
              width: 145,
              height: 'auto',
              pointerEvents: 'none',
              zIndex: 25,
              filter: 'drop-shadow(0 16px 30px rgba(0,0,0,0.12))',
            }}
          />

          {/* Wide Rounded Container */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: 24,
              padding: '28px 40px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              alignItems: 'center',
            }}
          >
            {/* Column 1: Fast and simple (17.png) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                paddingRight: 28,
                borderRight: '1px solid #f1f5f9',
              }}
            >
              <img
                src="/assets/features/17.png"
                alt="Fast and simple"
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  objectFit: 'contain',
                  flexShrink: 0,
                }}
              />
              <div>
                <h4
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 17,
                    color: '#0f172a',
                    letterSpacing: '-0.02em',
                    margin: '0 0 5px',
                  }}
                >
                  Fast and simple
                </h4>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13.5,
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: '#64748b',
                    margin: 0,
                  }}
                >
                  No matter your scale or complexity, it's effortless to ship world-class digital experiences with Aether.
                </p>
              </div>
            </div>

            {/* Column 2: Built for speed (18.png) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                paddingLeft: 28,
                paddingRight: 28,
                borderRight: '1px solid #f1f5f9',
              }}
            >
              <img
                src="/assets/features/18.png"
                alt="Built for speed"
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  objectFit: 'contain',
                  flexShrink: 0,
                }}
              />
              <div>
                <h4
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 17,
                    color: '#0f172a',
                    letterSpacing: '-0.02em',
                    margin: '0 0 5px',
                  }}
                >
                  Built for speed
                </h4>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13.5,
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: '#64748b',
                    margin: 0,
                  }}
                >
                  Optimized workflows, powerful tools, and performance-first architecture that moves as fast as you do.
                </p>
              </div>
            </div>

            {/* Column 3: Designed to scale (19.png) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                paddingLeft: 28,
              }}
            >
              <img
                src="/assets/features/19.png"
                alt="Designed to scale"
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  objectFit: 'contain',
                  flexShrink: 0,
                }}
              />
              <div>
                <h4
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 17,
                    color: '#0f172a',
                    letterSpacing: '-0.02em',
                    margin: '0 0 5px',
                  }}
                >
                  Designed to scale
                </h4>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13.5,
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: '#64748b',
                    margin: 0,
                  }}
                >
                  From solo projects to enterprise platforms—Aether grows with your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
