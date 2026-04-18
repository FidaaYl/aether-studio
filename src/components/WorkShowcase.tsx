import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './cinematic-hooks'

interface Props { T: any; L: boolean }

const WORKS = [
  { 
    title: 'Luminary', cat: 'Brand Identity', year: '2024', accent: '#c9a84c', rgb: '201,168,76', tags: ['Branding', 'Strategy'], 
    img: 'https://images.pexels.com/photos/8516167/pexels-photo-8516167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    span: 'large' 
  },
  { 
    title: 'Orbit', cat: 'Web Experience', year: '2024', accent: '#6aad78', rgb: '106,173,120', tags: ['WebGL', 'Motion'], 
    img: 'https://images.pexels.com/photos/18337612/pexels-photo-18337612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    span: 'small' 
  },
  { 
    title: 'Solstice', cat: 'Digital Product', year: '2023', accent: '#d4894a', rgb: '212,137,74', tags: ['UX', 'iOS'], 
    img: 'https://images.pexels.com/photos/6807304/pexels-photo-6807304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    span: 'small' 
  },
  { 
    title: 'Aura', cat: 'Motion & 3D', year: '2023', accent: '#6b93b8', rgb: '107,147,184', tags: ['Three.js', 'Cinema4D'], 
    img: 'https://images.pexels.com/photos/15638268/pexels-photo-15638268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    span: 'large' 
  },
] as const

export default function WorkShowcase({ T, L }: Props) {
  const [hov, setHov] = useState<number | null>(null)

  return (
    <section id="work" style={{ background: T.siteBg, transition: 'background 0.5s' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(100px,14vw,200px) clamp(28px,5vw,80px) clamp(60px,8vw,100px)' }}>

        {/* Header */}
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 20, height: 1, background: T.goldDim }} />
                <span style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: T.goldDim }}>Selected Work</span>
              </div>
              <h2 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: 'clamp(36px,4.5vw,60px)', letterSpacing: '-0.04em', lineHeight: 1, color: T.text, margin: 0, transition: 'color 0.5s' }}>
                Recent{' '}
                <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: T.gold }}>projects</span>
              </h2>
            </div>
            <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: T.muted, letterSpacing: '0.06em' }}>2021—2024</span>
          </div>
        </Reveal>

        {/* Bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12 }}>
          {WORKS.map((w, i) => {
            const isHov = hov === i
            return (
              <Reveal key={i} delay={i * 0.05}>
                <motion.div
                  onHoverStart={() => setHov(i)}
                  onHoverEnd={() => setHov(null)}
                  style={{
                    position: 'relative', borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
                    aspectRatio: w.span === 'large' ? '16/10' : '4/3',
                    border: `1px solid ${isHov ? T.goldBdr : T.line}`,
                    transition: 'border-color 0.3s',
                  }}>

                  {/* Image */}
                  <motion.img
                    src={w.img} alt={w.title}
                    animate={{ scale: isHov ? 1.06 : 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />

                  {/* Dark gradient overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)' }} />

                  {/* Accent top line on hover */}
                  <motion.div
                    animate={{ scaleX: isHov ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: w.accent, transformOrigin: 'left' }}
                  />

                  {/* Corner marks */}
                  {[[false, false], [true, false]].map(([r, b], ci) => (
                    <div key={ci} style={{
                      position: 'absolute', width: 12, height: 12,
                      top: 12, ...(r ? { right: 12 } : { left: 12 }),
                      borderTop: '1px solid rgba(255,255,255,0.2)',
                      borderLeft: !r ? '1px solid rgba(255,255,255,0.2)' : 'none',
                      borderRight: r ? '1px solid rgba(255,255,255,0.2)' : 'none',
                      opacity: isHov ? 1 : 0, transition: 'opacity 0.3s',
                    }} />
                  ))}

                  {/* Content */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(20px,3vw,32px)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                        <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>0{i + 1}</span>
                        <span style={{ width: 12, height: 1, background: 'rgba(255,255,255,0.15)' }} />
                        <span style={{ fontFamily: "'Outfit'", fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{w.cat}</span>
                      </div>
                      <h3 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: w.span === 'large' ? 'clamp(28px,3vw,40px)' : 'clamp(22px,2.5vw,32px)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>{w.title}</h3>
                      {/* Tags — show on hover */}
                      <motion.div
                        animate={{ opacity: isHov ? 1 : 0, y: isHov ? 0 : 6 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'flex', gap: 6, marginTop: 12 }}>
                        {w.tags.map(tag => (
                          <span key={tag} style={{
                            fontFamily: "'Outfit'", fontSize: 10, fontWeight: 500, color: w.accent,
                            background: `rgba(${w.rgb},0.15)`, border: `1px solid rgba(${w.rgb},0.25)`,
                            borderRadius: 100, padding: '3px 10px', letterSpacing: '0.04em',
                          }}>{tag}</span>
                        ))}
                      </motion.div>
                    </div>

                    <motion.div
                      animate={{ opacity: isHov ? 1 : 0.3, scale: isHov ? 1 : 0.9 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                        border: `1px solid rgba(255,255,255,${isHov ? 0.3 : 0.12})`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: isHov ? `${w.accent}18` : 'transparent',
                        transition: 'border-color 0.3s, background 0.3s',
                      }}>
                      <ArrowUpRight size={15} color="#fff" />
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