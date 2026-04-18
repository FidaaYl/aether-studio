import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { getLight, toggleTheme, subscribe } from '../theme'

const NAV_LINKS = [
  { label:'About',    href:'#about'    },
  { label:'Work',     href:'#work'     },
  { label:'Services', href:'#services' },
  { label:'Contact',  href:'#contact'  },
] as const

function useTheme() {
  const [light, setLight] = useState(getLight)
  useEffect(() => subscribe(setLight), [])
  return light
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const isLight = useTheme()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  const bg       = isLight ? (scrolled ? 'rgba(248,245,239,0.96)' : 'rgba(248,245,239,0.75)') : (scrolled ? 'rgba(10,8,5,0.94)' : 'rgba(15,12,8,0.6)')
  const bdr      = isLight ? 'rgba(130,90,20,0.15)' : 'rgba(201,168,76,0.15)'
  const logoMain = isLight ? '#9b6f1a' : '#c9a84c'
  const logoSub  = isLight ? 'rgba(22,20,10,0.5)' : 'rgba(220,205,170,0.5)'
  const linkBase = isLight ? 'rgba(22,20,10,0.48)' : 'rgba(220,205,170,0.5)'
  const linkHov  = isLight ? '#9b6f1a' : '#c9a84c'
  const btnBg    = isLight ? 'linear-gradient(135deg,#9b6f1a,#b86825)' : 'linear-gradient(135deg,#c9a84c,#b8832a)'
  const btnColor = isLight ? '#ffffff' : '#0c0a07'
  const shdw     = scrolled ? `0 8px 40px rgba(0,0,0,${isLight ? 0.1 : 0.55})` : `0 4px 24px rgba(0,0,0,${isLight ? 0.05 : 0.3})`

  return (
    <motion.nav initial={{ opacity:0, y:-24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
      style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, display:'flex', justifyContent:'center', padding:'18px 24px 0' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', maxWidth:1060,
        background:bg, border:`1px solid ${bdr}`, borderRadius:14, padding:'11px 22px',
        backdropFilter:'blur(32px)', WebkitBackdropFilter:'blur(32px)',
        boxShadow:shdw, transition:'background 0.4s, box-shadow 0.4s', gap:20 }}>

        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top:0, behavior:'smooth' }) }}
          style={{ textDecoration:'none', flexShrink:0, display:'flex', alignItems:'center', gap:7 }}>
          <span style={{ width:18, height:18, borderRadius:'50%', background:'linear-gradient(135deg,#c9a84c,#d4893a)',
            display:'flex', alignItems:'center', justifyContent:'center', fontSize:9, color:'#0c0a07', fontWeight:700, flexShrink:0 }}>✦</span>
          <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:700, color:logoMain, letterSpacing:'-0.3px' }}>Aether</span>
          <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:400, color:logoSub, letterSpacing:'-0.2px' }}>Studio</span>
        </a>

        {/* Links */}
        <ul style={{ display:'flex', alignItems:'center', gap:26, listStyle:'none', margin:0, padding:0, flex:1, justifyContent:'center' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <button onClick={() => go(href)}
                style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13.5, fontWeight:400, color:linkBase,
                  background:'none', border:'none', cursor:'pointer', padding:0, transition:'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = linkHov)}
                onMouseLeave={e => (e.currentTarget.style.color = linkBase)}>
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + CTA */}
        <div style={{ display:'flex', alignItems:'center', gap:10, flexShrink:0 }}>
          {/* Theme toggle button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale:1.08 }}
            whileTap={{ scale:0.93 }}
            title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
            style={{ width:36, height:36, borderRadius:'50%', border:`1px solid ${bdr}`,
              background: isLight ? 'rgba(130,90,20,0.08)' : 'rgba(201,168,76,0.08)',
              display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', flexShrink:0, transition:'background 0.3s, border-color 0.3s' }}>
            <AnimatePresence mode="wait" initial={false}>
              {isLight ? (
                <motion.div key="moon" initial={{ opacity:0, rotate:-30, scale:0.7 }} animate={{ opacity:1, rotate:0, scale:1 }} exit={{ opacity:0, rotate:30, scale:0.7 }} transition={{ duration:0.22 }}>
                  <Moon size={15} color="#9b6f1a" strokeWidth={1.8} />
                </motion.div>
              ) : (
                <motion.div key="sun" initial={{ opacity:0, rotate:30, scale:0.7 }} animate={{ opacity:1, rotate:0, scale:1 }} exit={{ opacity:0, rotate:-30, scale:0.7 }} transition={{ duration:0.22 }}>
                  <Sun size={15} color="#c9a84c" strokeWidth={1.8} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA */}
          <motion.button onClick={() => go('#contact')}
            whileHover={{ scale:1.04, boxShadow:'0 4px 20px rgba(178,148,62,0.38)' }}
            whileTap={{ scale:0.97 }}
            style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:600, background:btnBg, color:btnColor,
              border:'none', borderRadius:100, padding:'9px 20px', cursor:'pointer', whiteSpace:'nowrap', letterSpacing:'0.01em' }}>
            Start a Project
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
