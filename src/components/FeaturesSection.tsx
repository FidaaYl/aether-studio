import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Globe, Zap, Box } from 'lucide-react'
import { Reveal, useMouse } from './cinematic-hooks'

interface Props { T: any; L: boolean }

const SERVICES = [
  { icon: Sparkles, n: '01', title: 'Brand Identity', desc: 'Visual systems that outlive trends. Logos, typography, color architecture — how the world perceives you.', accent: '#c9a84c', rgb: '201,168,76' },
  { icon: Globe, n: '02', title: 'Web Experience', desc: 'Sites built for performance and emotion. Awwwards-quality, one team, zero handoffs.', accent: '#6aad78', rgb: '106,173,120' },
  { icon: Zap, n: '03', title: 'Digital Products', desc: 'SaaS, apps, internal tools. Interfaces where every interaction feels inevitable.', accent: '#d4894a', rgb: '212,137,74' },
  { icon: Box, n: '04', title: 'Motion & 3D', desc: 'WebGL, showreels, scroll-driven cinema. The work people screenshot.', accent: '#6b93b8', rgb: '107,147,184' },
] as const

export default function FeaturesSection({ T, L }: Props) {
  const [active, setActive] = useState<number | null>(null)
  const mouse = useMouse()

  const cardBg  = L ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)'
  const cardBgH = L ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.05)'
  const bdr     = L ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'
  const bdrH    = L ? 'rgba(0,0,0,0.1)'  : 'rgba(255,255,255,0.12)'

  return (
    <section id="services" style={{ background: T.siteBg, transition: 'background 0.5s', padding: 'clamp(100px,14vw,200px) 0', position: 'relative', overflow: 'hidden' }}>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: active !== null ? SERVICES[active].accent : T.gold,
        filter: 'blur(180px)', opacity: active !== null ? 0.06 : 0.02,
        left: `${mouse.x * 100}%`, top: `${mouse.y * 100}%`,
        transform: 'translate(-50%, -50%)', pointerEvents: 'none',
        transition: 'opacity 0.6s, background 0.6s',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(28px,5vw,80px)' }}>

        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 20, height: 1, background: T.goldDim }} />
            <span style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: T.goldDim }}>What we do</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 40 }}>
            <h2 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: 'clamp(36px,4.5vw,60px)', letterSpacing: '-0.04em', lineHeight: 1, color: T.text, margin: 0, transition: 'color 0.5s' }}>
              Four disciplines.{' '}
              <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: T.gold }}>One obsession.</span>
            </h2>
            <p style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 300, color: T.sub, maxWidth: 300, lineHeight: 1.7, textAlign: 'right', flexShrink: 0, transition: 'color 0.5s' }}>
              We don't spread thin. Every service has been executed hundreds of times at the highest level.
            </p>
          </div>
        </Reveal>

        {/* Grid — active column expands */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: active !== null
            ? SERVICES.map((_, i) => i === active ? '2.4fr' : '1fr').join(' ')
            : '1fr 1fr 1fr 1fr',
          gap: 3, transition: 'grid-template-columns 0.55s cubic-bezier(0.16,1,0.3,1)',
          minHeight: 400,
        }}>
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            const isActive = active === i
            const isOther = active !== null && active !== i

            return (
              <Reveal key={i} delay={i * 0.04}>
                <motion.div
                  onClick={() => setActive(isActive ? null : i)}
                  animate={{ opacity: isOther ? 0.35 : 1 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    position: 'relative', overflow: 'hidden', cursor: 'pointer',
                    background: isActive ? cardBgH : cardBg,
                    border: `1px solid ${isActive ? bdrH : bdr}`,
                    borderRadius: 16, height: '100%',
                    padding: isActive ? 'clamp(28px,3vw,44px)' : 'clamp(20px,2vw,28px)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    transition: 'background 0.4s, border-color 0.4s, padding 0.55s cubic-bezier(0.16,1,0.3,1)',
                  }}>

                  {/* Accent corner glow */}
                  <div style={{
                    position: 'absolute', top: -60, right: -60, width: 200, height: 200,
                    borderRadius: '50%', background: s.accent, filter: 'blur(80px)',
                    opacity: isActive ? 0.12 : 0, transition: 'opacity 0.5s', pointerEvents: 'none',
                  }} />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                      <div style={{
                        width: 42, height: 42, borderRadius: 12,
                        background: isActive ? `rgba(${s.rgb},0.12)` : T.goldBg,
                        border: `1px solid ${isActive ? `rgba(${s.rgb},0.25)` : T.goldBdr}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.4s',
                      }}>
                        <Icon size={17} color={isActive ? s.accent : T.goldDim} strokeWidth={1.5} style={{ transition: 'color 0.4s' }} />
                      </div>
                      <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: T.muted, letterSpacing: '0.08em' }}>{s.n}</span>
                    </div>

                    <h3 style={{
                      fontFamily: "'Syne'", fontWeight: 700,
                      fontSize: isActive ? 'clamp(22px,2.2vw,30px)' : 'clamp(16px,1.4vw,20px)',
                      letterSpacing: '-0.03em', color: T.text, marginBottom: 12,
                      transition: 'font-size 0.5s cubic-bezier(0.16,1,0.3,1), color 0.5s',
                    }}>{s.title}</h3>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 300, color: T.sub, lineHeight: 1.75, overflow: 'hidden', margin: 0 }}
                        >{s.desc}</motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 20, position: 'relative', zIndex: 1 }}>
                    <span style={{ fontFamily: "'Outfit'", fontSize: 13, fontWeight: 500, color: isActive ? s.accent : T.muted, transition: 'color 0.3s' }}>
                      {isActive ? 'Collapse' : 'Explore'}
                    </span>
                    <motion.div animate={{ rotate: isActive ? 90 : 0 }} transition={{ duration: 0.3 }}>
                      <ArrowRight size={12} color={isActive ? s.accent : T.muted} style={{ transition: 'color 0.3s' }} />
                    </motion.div>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}