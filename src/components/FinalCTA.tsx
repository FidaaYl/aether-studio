import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Check } from 'lucide-react'
import { Reveal, useMouse } from './cinematic-hooks'

interface Props { T: any; L: boolean }

/* ─── Marquee band ─── */
function Marquee({ T }: { T: any }) {
  const items = ['Brand Strategy', 'Web Design', 'Product Design', 'WebGL', 'Motion', 'Branding', 'UI/UX', '3D', 'Creative Direction', 'Design Systems']
  return (
    <div style={{ borderTop: `1px solid ${T.line}`, borderBottom: `1px solid ${T.line}`, padding: '18px 0', overflow: 'hidden', transition: 'border-color 0.5s' }}>
      <div className="marquee-track">
        {[0, 1].map(rep => (
          <div key={rep} style={{ display: 'flex', alignItems: 'center' }}>
            {items.map((txt, i) => (
              <span key={`${rep}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2.5vw,32px)', padding: '0 clamp(16px,2.5vw,32px)' }}>
                <span style={{ fontFamily: "'Syne'", fontWeight: 500, fontSize: 'clamp(13px,1.2vw,16px)', color: T.sub, whiteSpace: 'nowrap' as const, transition: 'color 0.5s' }}>{txt}</span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: T.gold, flexShrink: 0, opacity: 0.4 }} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FinalCTA({ T, L }: Props) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [foc, setFoc] = useState<string | null>(null)
  const mouse = useMouse()

  const fieldStyle = (name: string): React.CSSProperties => ({
    fontFamily: "'Outfit'", fontSize: 14, fontWeight: 300, color: T.text,
    background: L ? 'rgba(130,90,20,0.04)' : 'rgba(24,20,12,0.6)',
    border: `1px solid ${foc === name ? T.goldBdr : T.line}`,
    borderRadius: 12, padding: '14px 18px', width: '100%', outline: 'none',
    transition: 'border-color 0.25s, background 0.25s', boxSizing: 'border-box' as const,
  })

  return (
    <>
      <Marquee T={T} />

      <section id="contact" style={{
        background: T.siteBg, transition: 'background 0.5s',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Cursor glow */}
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: T.gold, filter: 'blur(180px)', opacity: 0.03,
          left: `${mouse.x * 100}%`, top: `${mouse.y * 100}%`,
          transform: 'translate(-50%, -50%)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(100px,14vw,200px) clamp(28px,5vw,80px) clamp(60px,8vw,100px)', position: 'relative', zIndex: 2 }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(48px,7vw,120px)', alignItems: 'start' }}>

            {/* Left — heading + info */}
            <Reveal>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                  <div style={{ width: 20, height: 1, background: T.goldDim }} />
                  <span style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: T.goldDim }}>Start a project</span>
                </div>

                <h2 style={{
                  fontFamily: "'Syne'", fontWeight: 800,
                  fontSize: 'clamp(40px,5.5vw,72px)', letterSpacing: '-0.05em',
                  lineHeight: 0.95, color: T.text, margin: '0 0 24px', transition: 'color 0.5s',
                }}>
                  Let's build<br />something{' '}
                  <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: T.gold }}>great.</span>
                </h2>

                <p style={{ fontFamily: "'Outfit'", fontSize: 16, fontWeight: 300, color: T.sub, lineHeight: 1.75, maxWidth: 420, margin: '0 0 40px', transition: 'color 0.5s' }}>
                  Tell us about your vision. We'll respond within 24 hours with a thoughtful take — not a template.
                </p>

                <div style={{ display: 'flex', gap: 'clamp(24px,4vw,48px)' }}>
                  {([['hello@aether.co', 'Email'], ['Berlin · London', 'Location'], ['< 24hrs', 'Response']] as const).map(([v, l]) => (
                    <div key={l}>
                      <div style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: T.muted, marginBottom: 4, transition: 'color 0.5s' }}>{l}</div>
                      <div style={{ fontFamily: "'Outfit'", fontSize: 14, color: T.sub, transition: 'color 0.5s' }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal delay={0.05}>
              <div style={{
                background: L ? 'rgba(255,255,255,0.7)' : 'rgba(20,17,11,0.8)',
                border: `1px solid ${T.cardBdr}`, borderRadius: 20,
                padding: 'clamp(28px,3.5vw,44px)', position: 'relative', overflow: 'hidden',
                boxShadow: T.shadow, transition: 'border-color 0.5s, box-shadow 0.5s, background 0.5s',
              }}>
                {/* Subtle glow */}
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: 200, height: 200,
                  background: `radial-gradient(circle, rgba(${L ? '130,90,20' : '178,148,62'},0.06) 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div key="sent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
                      style={{ textAlign: 'center', padding: '44px 0', position: 'relative', zIndex: 1 }}>
                      <div style={{ width: 56, height: 56, borderRadius: '50%', margin: '0 auto 20px', background: T.btn, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Check size={24} color={L ? '#fff' : '#0c0a07'} strokeWidth={2.5} />
                      </div>
                      <h3 style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontSize: 26, color: T.text, marginBottom: 10 }}>We'll be in touch</h3>
                      <p style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 300, color: T.sub }}>Expect a response within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'relative', zIndex: 1 }}>
                      <h3 style={{ fontFamily: "'Syne'", fontWeight: 600, fontSize: 18, color: T.text, letterSpacing: '-0.02em', marginBottom: 24, transition: 'color 0.5s' }}>Send a message</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                          <div>
                            <label style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: T.muted, display: 'block', marginBottom: 6 }}>Name</label>
                            <input style={fieldStyle('name')} placeholder="Alex Morgan" value={form.name}
                              onChange={e => setForm({ ...form, name: e.target.value })}
                              onFocus={() => setFoc('name')} onBlur={() => setFoc(null)} />
                          </div>
                          <div>
                            <label style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: T.muted, display: 'block', marginBottom: 6 }}>Email</label>
                            <input type="email" style={fieldStyle('email')} placeholder="alex@co.com" value={form.email}
                              onChange={e => setForm({ ...form, email: e.target.value })}
                              onFocus={() => setFoc('email')} onBlur={() => setFoc(null)} />
                          </div>
                        </div>
                        <div>
                          <label style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: T.muted, display: 'block', marginBottom: 6 }}>Project</label>
                          <textarea style={{ ...fieldStyle('message'), minHeight: 100, resize: 'vertical' as const, lineHeight: 1.7, display: 'block' }}
                            placeholder="Tell us what you're building..."
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                            onFocus={() => setFoc('message')} onBlur={() => setFoc(null)} />
                        </div>
                        <motion.button type="button" onClick={() => setSent(true)}
                          whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                          style={{
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                            fontFamily: "'Syne'", fontSize: 14, fontWeight: 600,
                            color: L ? '#fff' : '#0c0a07', background: T.btn,
                            border: 'none', borderRadius: 100, padding: '15px 32px',
                            cursor: 'pointer', marginTop: 4,
                            boxShadow: `0 6px 24px rgba(201,168,76,${L ? 0.12 : 0.2})`,
                          }}>
                          Send Message <ArrowRight size={15} strokeWidth={2.2} />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${T.line}`, background: T.siteBg, transition: 'all 0.5s' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px clamp(28px,5vw,80px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: `linear-gradient(135deg, ${T.gold}, #d4893a)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, color: '#0c0a07', fontWeight: 700 }}>✦</div>
            <span style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: 13, color: T.text, letterSpacing: '-0.02em' }}>Aether</span>
            <span style={{ fontFamily: "'Outfit'", fontWeight: 300, fontSize: 13, color: T.muted }}>Studio</span>
          </a>
          <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: T.muted }}>© 2024</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy', 'Terms', 'Contact'].map(s => (
              <span key={s} style={{ fontFamily: "'Outfit'", fontSize: 12, color: T.muted, cursor: 'pointer', transition: 'color 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.color = T.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = T.muted)}
              >{s}</span>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}