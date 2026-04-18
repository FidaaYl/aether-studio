import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal, useMouse } from './cinematic-hooks'

interface Props { T: any; L: boolean }

const STATS = [
  { v: '120+', l: 'Projects' }, { v: '8yrs', l: 'Of craft' },
  { v: '40+', l: 'Clients' }, { v: '12', l: 'Awards' },
] as const

export default function NarrativeSection({ T, L }: Props) {
  const photoRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])
  const mouse = useMouse()

  return (
    <section style={{ background: T.siteBg, transition: 'background 0.5s' }}>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(100px,14vw,200px) clamp(28px,5vw,80px) clamp(60px,8vw,100px)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(24px,4vw,60px)' }}>

          {/* Giant decorative number — parallax on cursor */}
          <Reveal>
            <div style={{
              flexShrink: 0,
              transform: `translate(${(mouse.x - 0.5) * -8}px, ${(mouse.y - 0.5) * -6}px)`,
              transition: 'transform 0.3s ease-out',
            }}>
              <div style={{ fontFamily: "'JetBrains Mono'", fontWeight: 300, fontSize: 'clamp(80px,12vw,160px)', lineHeight: 0.85, color: T.muted, letterSpacing: '-0.06em' }}>8</div>
              <div style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: T.muted, marginTop: 8 }}>years</div>
            </div>
          </Reveal>

          {/* Text block */}
          <div style={{ maxWidth: 700, paddingTop: 12 }}>
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{ width: 20, height: 1, background: T.goldDim }} />
                <span style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: T.goldDim }}>About the studio</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: 'clamp(32px,4vw,56px)', letterSpacing: '-0.04em', lineHeight: 1.1, color: T.text, margin: '0 0 24px', transition: 'color 0.5s' }}>
                We build brands, websites & products for people who refuse to{' '}
                <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: T.gold }}>blend in.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p style={{ fontFamily: "'Outfit'", fontSize: 16, fontWeight: 300, color: T.sub, lineHeight: 1.8, maxWidth: 520, margin: '0 0 52px', transition: 'color 0.5s' }}>
                Every project begins with one question — what should this <em style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', color: T.goldDim }}>feel</em> like? We design from emotion outward. Strategy, visuals, code.
              </p>
            </Reveal>

            {/* Stats row */}
            <Reveal delay={0.15}>
              <div style={{ display: 'flex', gap: 0, borderTop: `1px solid ${T.line}`, transition: 'border-color 0.5s' }}>
                {STATS.map((s, i) => (
                  <div key={s.l} style={{ flex: 1, padding: '28px 0', borderRight: i < 3 ? `1px solid ${T.line}` : 'none', paddingLeft: i > 0 ? 24 : 0, transition: 'border-color 0.5s' }}>
                    <div style={{ fontFamily: "'JetBrains Mono'", fontWeight: 400, fontSize: 'clamp(28px,3.5vw,44px)', color: T.text, letterSpacing: '-0.04em', lineHeight: 1, transition: 'color 0.5s' }}>{s.v}</div>
                    <div style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: T.muted, marginTop: 8, transition: 'color 0.5s' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Full-bleed parallax photo */}
      <Reveal>
        <div ref={photoRef} style={{ position: 'relative', overflow: 'hidden', height: '55vh', margin: '0 clamp(20px,3vw,40px)' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 100, background: `linear-gradient(to bottom, ${T.siteBg}, transparent)`, zIndex: 2, transition: 'background 0.5s' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: `linear-gradient(to top, ${T.siteBg}, transparent)`, zIndex: 2, transition: 'background 0.5s' }} />
          <motion.div style={{ width: '100%', height: '120%', marginTop: '-10%', y: imgY }}>
    <img
  src="https://images.pexels.com/photos/30231780/pexels-photo-30231780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt="Studio"
  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block', filter: L ? 'none' : 'brightness(0.6) saturate(0.7)', borderRadius: 12, transition: 'filter 0.5s' }}
/>
          </motion.div>
          {/* Corner accents */}
          {[[false,false],[true,false],[false,true],[true,true]].map(([r, b], i) => (
            <div key={i} style={{
              position: 'absolute', zIndex: 3, width: 10, height: 10,
              ...(r ? { right: 20 } : { left: 20 }),
              ...(b ? { bottom: 20 } : { top: 20 }),
              borderTop: !b ? `1px solid rgba(${L ? '0,0,0,0.2' : '255,255,255,0.2'})` : 'none',
              borderBottom: b ? `1px solid rgba(${L ? '0,0,0,0.2' : '255,255,255,0.2'})` : 'none',
              borderLeft: !r ? `1px solid rgba(${L ? '0,0,0,0.2' : '255,255,255,0.2'})` : 'none',
              borderRight: r ? `1px solid rgba(${L ? '0,0,0,0.2' : '255,255,255,0.2'})` : 'none',
            }} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}