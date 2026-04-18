import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, useMouse } from './cinematic-hooks'

interface Props { T: any; L: boolean }

const QUOTES = [
  { q: 'Aether transformed our brand from forgettable to iconic. Every pixel felt intentional — like they could see the future we wanted.', name: 'Sarah Chen', role: 'CEO, Luminary', ini: 'SC', metric: '+312%', metricLabel: 'conversion' },
  { q: "The site won Awwwards SOTD in week one. It wasn't just beautiful — it converted. That's the difference between decoration and design.", name: 'Marcus Reid', role: 'Founder, Orbit', ini: 'MR', metric: 'SOTD', metricLabel: 'awwwards' },
  { q: "Working with Aether felt like gaining a creative partner who understands craft. No briefs needed. No revisions wasted. Just excellence.", name: 'Yuki Tanaka', role: 'CPO, Solstice', ini: 'YT', metric: '4.2×', metricLabel: 'engagement' },
] as const

export default function Testimonials({ T, L }: Props) {
  const [idx, setIdx] = useState(0)
  const mouse = useMouse()
  const q = QUOTES[idx]

  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % QUOTES.length), 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{ background: T.siteBg, transition: 'background 0.5s' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(100px,14vw,200px) clamp(28px,5vw,80px)', position: 'relative', overflow: 'hidden', minHeight: 500 }}>

        {/* Label */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 56 }}>
            <div style={{ width: 20, height: 1, background: T.goldDim }} />
            <span style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: T.goldDim }}>Client voices</span>
          </div>
        </Reveal>

        {/* Giant ghost metric in background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={idx + '-metric'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute', right: 'clamp(0px,2vw,60px)', top: '50%',
              fontFamily: "'JetBrains Mono'", fontWeight: 300,
              fontSize: 'clamp(100px,18vw,260px)', color: T.muted,
              transform: `translateY(-50%) translate(${(mouse.x - 0.5) * -10}px, ${(mouse.y - 0.5) * -8}px)`,
              letterSpacing: '-0.06em', lineHeight: 1,
              userSelect: 'none', pointerEvents: 'none',
            }}
          >{q.metric}</motion.div>
        </AnimatePresence>

        {/* Quote content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720 }}>

          {/* Giant quotation mark */}
          <div style={{
            fontFamily: "'Instrument Serif'", fontStyle: 'italic',
            fontSize: 'clamp(100px,14vw,180px)', color: T.muted,
            lineHeight: 0.6, marginBottom: -16, userSelect: 'none', opacity: 0.5,
            transition: 'color 0.5s',
          }}>"</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p style={{
                fontFamily: "'Instrument Serif'", fontStyle: 'italic',
                fontSize: 'clamp(24px,3vw,40px)', letterSpacing: '-0.01em',
                lineHeight: 1.4, color: T.text, margin: '0 0 40px',
                transition: 'color 0.5s',
              }}>
                {q.q}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${T.gold}, #c07830)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span style={{ fontFamily: "'Outfit'", fontSize: 13, fontWeight: 600, color: L ? '#fff' : '#0c0a07' }}>{q.ini}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne'", fontWeight: 600, fontSize: 15, color: T.text, letterSpacing: '-0.01em', transition: 'color 0.5s' }}>{q.name}</div>
                  <div style={{ fontFamily: "'Outfit'", fontSize: 13, color: T.muted, marginTop: 2, transition: 'color 0.5s' }}>{q.role}</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: T.muted, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>{q.metricLabel}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div style={{ display: 'flex', gap: 8, marginTop: 48 }}>
            {QUOTES.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} style={{
                width: i === idx ? 32 : 8, height: 3, border: 'none', cursor: 'pointer',
                background: i === idx ? T.gold : T.line, borderRadius: 2, padding: 0,
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
              }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}