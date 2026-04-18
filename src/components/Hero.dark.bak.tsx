import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, Play, ArrowDown, ExternalLink,
  Sparkles, Zap, Globe, Box,
  Mail, MapPin, Phone, ChevronRight, Star, Check
} from 'lucide-react'
import Navbar from './Navbar'
import heroBg from '../assets/hero-bg.mp4'

// ─────────────────────────────────────────────────────────────────────────────
// Design tokens — extracted from video frame (golden meadow, dawn sky)
// bg:    #0c0a07  (warm near-black matching shadowed earth)
// gold:  #c9a84c  (sun hitting the meadow)
// amber: #d4893a  (warm sky edge)
// green: #4d6b4e  (meadow grass, shadowed)
// steel: #3d5468  (storm clouds, right side of frame)
// ─────────────────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as const
const CROSSFADE = 3.4

// ─── Shared styles ───────────────────────────────────────────────────────────
const font = (size: number, weight = 400, color = 'rgba(210,195,155,0.55)') =>
  ({ fontFamily: "'DM Sans',sans-serif", fontSize: size, fontWeight: weight, color } as React.CSSProperties)

// ─── Data ────────────────────────────────────────────────────────────────────
const TRUST_LOGOS = ['Google', 'Stripe', 'Notion', 'Figma', 'Linear'] as const

const WORKS = [
  { id:1, title:'Luminary',  cat:'Brand Identity',  year:'2024', tags:['Branding','Strategy','Visual'],
    bg:'radial-gradient(ellipse at 25% 35%, rgba(110,82,22,0.55) 0%, rgba(14,12,7,0) 65%)',
    accent:'#c9a84c', accentRgb:'201,168,76' },
  { id:2, title:'Orbit',     cat:'Web Experience',   year:'2024', tags:['WebGL','Motion','React'],
    bg:'radial-gradient(ellipse at 70% 25%, rgba(38,75,48,0.55) 0%, rgba(10,14,11,0) 65%)',
    accent:'#6aad78', accentRgb:'106,173,120' },
  { id:3, title:'Solstice',  cat:'Digital Product',  year:'2023', tags:['UX','Design System','iOS'],
    bg:'radial-gradient(ellipse at 20% 65%, rgba(105,58,22,0.55) 0%, rgba(15,10,6,0) 65%)',
    accent:'#d4894a', accentRgb:'212,137,74' },
  { id:4, title:'Aura',      cat:'Motion & 3D',      year:'2023', tags:['Three.js','GSAP','Cinema4D'],
    bg:'radial-gradient(ellipse at 65% 70%, rgba(28,56,95,0.5) 0%, rgba(8,10,16,0) 65%)',
    accent:'#6b93b8', accentRgb:'107,147,184' },
] as const

const SERVICES = [
  { n:'01', icon:Sparkles, title:'Brand Identity',  desc:'Logos, systems and visual languages built to endure. We shape how the world perceives you.',         color:'#c9a84c', rgb:'201,168,76'  },
  { n:'02', icon:Globe,    title:'Web Experience',   desc:'Performant, animated, Awwwards-quality sites. From concept to pixel-perfect production.',             color:'#6aad78', rgb:'106,173,120' },
  { n:'03', icon:Zap,      title:'Digital Products', desc:'SaaS, apps and tools with premium UX. We design flows that feel inevitable.',                          color:'#d4894a', rgb:'212,137,74'  },
  { n:'04', icon:Box,      title:'Motion & 3D',      desc:'Showreels, WebGL scenes and immersive transitions. The kind that makes people stop scrolling.',        color:'#6b93b8', rgb:'107,147,184' },
] as const

const STATS = [
  { v:'120+', l:'Projects delivered' }, { v:'8yrs', l:'Years of craft' },
  { v:'40+',  l:'Global clients'     }, { v:'12',   l:'Awards won'     },
] as const

const PROCESS = [
  { s:'01', l:'Discovery', d:'Deep dive into your brand, goals and audience to understand the full picture.' },
  { s:'02', l:'Strategy',  d:'Define direction, visual tone and technical approach before a pixel moves.'   },
  { s:'03', l:'Design',    d:'Prototype to pixel — every detail, spacing and motion crafted with intention.' },
  { s:'04', l:'Build',     d:'Clean code, fast delivery, zero compromise on quality or performance.'         },
  { s:'05', l:'Launch',    d:'Ship with confidence and receive continued support after delivery.'            },
] as const

const TESTIMONIALS = [
  { q:'Aether transformed our brand from forgettable to iconic. Every pixel felt intentional.',       name:'Sarah Chen',   role:'CEO, Luminary',  ini:'SC', stars:5 },
  { q:'The site they built won an Awwwards SOTD in the first week. Truly world-class work.',           name:'Marcus Reid',  role:'Founder, Orbit', ini:'MR', stars:5 },
  { q:"Working with Aether felt like having a creative partner who just gets it — no briefs needed.", name:'Yuki Tanaka',  role:'CPO, Solstice',  ini:'YT', stars:5 },
] as const

// ─── Animation presets ───────────────────────────────────────────────────────
const stagger = { hidden:{}, visible:{ transition:{ staggerChildren:0.11, delayChildren:0.08 } } }
const itemUp  = {
  hidden:  { opacity:0, y:40, filter:'blur(8px)' },
  visible: { opacity:1, y:0,  filter:'blur(0px)', transition:{ duration:0.95, ease:EASE } },
}
const slideIn = (dir: 'left'|'right' = 'left') => ({
  hidden:  { opacity:0, x: dir==='left' ? -40 : 40 },
  visible: { opacity:1, x:0, transition:{ duration:0.85, ease:EASE } },
})

// ─── Seamless crossfade video hook ───────────────────────────────────────────
function useSeamlessVideo(src: string) {
  const refA = useRef<HTMLVideoElement>(null)
  const refB = useRef<HTMLVideoElement>(null)
  const [opA, setOpA] = useState(1)
  const [opB, setOpB] = useState(0)
  const active  = useRef<'A'|'B'>('A')
  const running = useRef(false)

  const crossfade = useCallback((from: 'A'|'B') => {
    if (running.current) return
    running.current = true
    const next    = from==='A' ? refB.current : refA.current
    const setFrom = from==='A' ? setOpA : setOpB
    const setTo   = from==='A' ? setOpB : setOpA
    if (!next) return
    next.currentTime = 0
    next.play().catch(()=>{})
    const steps = 90, ms = (CROSSFADE * 1000) / steps
    let i = 0
    const t = setInterval(()=>{
      i++; const p = i / steps
      setFrom(1 - p); setTo(p)
      if (i >= steps) {
        clearInterval(t)
        active.current = from==='A' ? 'B' : 'A'
        running.current = false
        const done = from==='A' ? refA.current : refB.current
        if (done) { done.pause(); done.currentTime = 0 }
      }
    }, ms)
  }, [])

  useEffect(()=>{
    const a = refA.current, b = refB.current
    if (!a || !b) return
    ;[a,b].forEach(v => { v.src=src; v.muted=true; v.playsInline=true; v.preload='auto' })
    const onTime = () => {
      const cur = active.current==='A' ? a : b
      if (!cur.duration) return
      if (cur.duration - cur.currentTime <= CROSSFADE) crossfade(active.current)
    }
    a.addEventListener('timeupdate', onTime)
    b.addEventListener('timeupdate', onTime)
    a.play().catch(()=>{})
    return () => { a.removeEventListener('timeupdate',onTime); b.removeEventListener('timeupdate',onTime) }
  }, [src, crossfade])

  return { refA, refB, opA, opB }
}

// ─── Shared UI atoms ─────────────────────────────────────────────────────────
function Orb({ style }: { style?: React.CSSProperties }) {
  return <div aria-hidden="true" style={{ position:'absolute', borderRadius:'50%', pointerEvents:'none', ...style }} />
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:20 }}>
      <span style={{ width:20, height:1, background:'rgba(201,168,76,0.45)', display:'block' }} />
      <span style={{ ...font(11,500,'rgba(201,168,76,0.6)'), letterSpacing:'0.18em', textTransform:'uppercase' as const }}>{children}</span>
      <span style={{ width:20, height:1, background:'rgba(201,168,76,0.45)', display:'block' }} />
    </div>
  )
}

// ─── Root component ───────────────────────────────────────────────────────────
export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { refA, refB, opA, opB } = useSeamlessVideo(heroBg)

  const { scrollYProgress } = useScroll({ target:heroRef, offset:['start start','end start'] })
  const smooth     = useSpring(scrollYProgress, { stiffness:55, damping:18 })
  const videoY     = useTransform(smooth, [0,1], ['0%','28%'])
  const videoScale = useTransform(smooth, [0,1], [1.0,1.18])
  const contentY   = useTransform(smooth, [0,0.65], ['0%','-9%'])
  const contentOp  = useTransform(smooth, [0,0.48], [1,0])
  const contentBl  = useTransform(smooth, [0,0.48], [0,10])
  const overlayOp  = useTransform(smooth, [0,1], [0.8,2.0])

  // Site background — warm dark earth tone matching video's shadowed ground
  const siteBg = '#0c0a07'

  return (
    <div style={{ background: siteBg, overflowX:'hidden', position:'relative' }}>

      {/* ════════════════════════════════════════════════════════════════════
          §1  HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} style={{ position:'relative', width:'100%', height:'100vh', overflow:'hidden' }}>

        {/* Crossfade video layer */}
        <motion.div style={{ position:'absolute', top:'-12%', left:0, right:0, bottom:'-12%', zIndex:0, y:videoY, scale:videoScale }}>
          <video ref={refA} aria-hidden="true" muted playsInline
            style={{ position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:opA }} />
          <video ref={refB} aria-hidden="true" muted playsInline
            style={{ position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:opB }} />
        </motion.div>

        {/* Gradient overlays — paint transition into site bg  */}
        <motion.div aria-hidden="true" style={{ position:'absolute',inset:0,zIndex:1, opacity:overlayOp,
          background:`linear-gradient(to bottom,
            rgba(12,10,7,0.08) 0%,
            rgba(12,10,7,0.22) 35%,
            rgba(12,10,7,0.72) 78%,
            ${siteBg} 100%)`
        }} />
        {/* Bottom radial */}
        <div aria-hidden="true" style={{ position:'absolute',inset:0,zIndex:2,
          background:'radial-gradient(ellipse 110% 55% at 50% 110%, rgba(12,10,7,0.9) 0%, transparent 60%)' }} />
        {/* Edge vignettes */}
        <div aria-hidden="true" style={{ position:'absolute',inset:0,zIndex:2,
          background:'radial-gradient(ellipse 25% 100% at 0% 50%, rgba(12,10,7,0.65) 0%, transparent 55%)' }} />
        <div aria-hidden="true" style={{ position:'absolute',inset:0,zIndex:2,
          background:'radial-gradient(ellipse 25% 100% at 100% 50%, rgba(12,10,7,0.65) 0%, transparent 55%)' }} />
        {/* Top fade */}
        <div aria-hidden="true" style={{ position:'absolute',inset:0,zIndex:2,
          background:'radial-gradient(ellipse 130% 35% at 50% 0%, rgba(12,10,7,0.5) 0%, transparent 55%)' }} />

        <Navbar />

        {/* Content — pointer-events threaded correctly */}
        <motion.div style={{
          position:'absolute',inset:0,zIndex:10,
          display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
          textAlign:'center',padding:'0 24px',
          y:contentY, opacity:contentOp,
          filter: useTransform(contentBl, v => `blur(${v}px)`),
          pointerEvents:'none',
        }}>
          <motion.div variants={stagger} initial="hidden" animate="visible"
            style={{ display:'flex',flexDirection:'column',alignItems:'center',maxWidth:980,width:'100%',pointerEvents:'auto' }}>

            {/* Eyebrow pill */}
            <motion.div variants={itemUp} style={{
              display:'inline-flex',alignItems:'center',gap:8,
              background:'rgba(178,148,62,0.09)',
              border:'1px solid rgba(201,168,76,0.22)',
              borderRadius:100,padding:'6px 18px',
              backdropFilter:'blur(20px)',WebkitBackdropFilter:'blur(20px)',marginBottom:28,
            }}>
              <motion.span
                style={{ width:6,height:6,borderRadius:'50%',background:'#c9a84c',display:'block',flexShrink:0 }}
                animate={{ opacity:[0.3,1,0.3],scale:[1,1.6,1] }}
                transition={{ repeat:Infinity,duration:2.2,ease:'easeInOut' }}
              />
              <span style={{ ...font(11,500,'rgba(210,185,120,0.72)'), letterSpacing:'0.16em',textTransform:'uppercase' }}>
                Digital Design Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemUp} style={{ marginBottom:20,width:'100%',padding:0,margin:'0 0 20px' }}>
              <span style={{ display:'block',fontFamily:"'DM Sans',sans-serif",fontWeight:600,
                fontSize:'clamp(40px,5.8vw,76px)',letterSpacing:'-0.044em',lineHeight:1.04,color:'#fff' }}>
                Designing digital experiences
              </span>
              <span style={{ display:'block',fontFamily:"'Playfair Display',serif",fontStyle:'italic',
                fontSize:'clamp(44px,6.6vw,86px)',letterSpacing:'-0.02em',lineHeight:1.06,color:'#f0e8d0' }}>
                that feel cinematic
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p variants={itemUp} style={{ ...font(18,300,'rgba(220,205,170,0.62)'), lineHeight:1.68,maxWidth:480,margin:'0 0 40px' }}>
              Crafting immersive websites, brands and digital products that inspire users and elevate businesses.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemUp} style={{ display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',gap:12,marginBottom:60 }}>
              <motion.button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior:'smooth' })}
                whileHover={{ scale:1.05,y:-2,boxShadow:'0 18px 50px rgba(178,148,62,0.35)' }}
                whileTap={{ scale:0.97 }}
                style={{ display:'inline-flex',alignItems:'center',gap:8,
                  ...font(15,600,'#0c0a07'),
                  background:'linear-gradient(135deg,#c9a84c,#c07830)',
                  border:'none',borderRadius:100,padding:'15px 30px',cursor:'pointer',
                  letterSpacing:'-0.01em',boxShadow:'0 4px 28px rgba(178,148,62,0.25)' }}
              >Explore Our Work <ArrowRight size={16} strokeWidth={2.2} /></motion.button>

              <motion.button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior:'smooth' })}
                whileHover={{ scale:1.04,y:-2,backgroundColor:'rgba(178,148,62,0.1)',borderColor:'rgba(201,168,76,0.4)' }}
                whileTap={{ scale:0.97 }}
                style={{ display:'inline-flex',alignItems:'center',gap:9,
                  ...font(15,400,'rgba(230,215,180,0.85)'),
                  background:'rgba(178,148,62,0.07)',
                  border:'1px solid rgba(201,168,76,0.2)',
                  borderRadius:100,padding:'15px 30px',cursor:'pointer',
                  backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)' }}
              ><Play size={14} fill="currentColor" strokeWidth={0} /> Watch Showreel</motion.button>
            </motion.div>

            {/* Trust logos */}
            <motion.div variants={itemUp} style={{ width:'100%' }}>
              <p style={{ ...font(11,400,'rgba(178,148,62,0.32)'), letterSpacing:'0.16em',textTransform:'uppercase',marginBottom:16 }}>
                Trusted by innovative teams
              </p>
              <ul style={{ display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',gap:'10px 36px',listStyle:'none',margin:0,padding:0,opacity:0.38,filter:'grayscale(1) brightness(2.8)' }}>
                {TRUST_LOGOS.map(l=><li key={l} style={{ ...font(15,600,'#fff'),letterSpacing:'-0.02em' }}>{l}</li>)}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div aria-hidden="true" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.9,duration:1}}
          style={{ position:'absolute',bottom:32,left:'50%',transform:'translateX(-50%)',zIndex:20,display:'flex',flexDirection:'column',alignItems:'center',gap:7,pointerEvents:'none' }}>
          <span style={{ ...font(9,400,'rgba(178,148,62,0.36)'),letterSpacing:'0.24em',textTransform:'uppercase' }}>Scroll</span>
          <div style={{ position:'relative',width:1,height:54,background:'rgba(178,148,62,0.15)',borderRadius:1,overflow:'hidden' }}>
            <motion.div style={{ position:'absolute',inset:0,background:'rgba(201,168,76,0.9)' }}
              initial={{y:'-100%'}} animate={{y:'200%'}}
              transition={{ repeat:Infinity,duration:1.75,ease:'easeInOut',delay:2.1 }} />
          </div>
          <motion.div animate={{y:[0,5,0]}} transition={{repeat:Infinity,duration:1.5,ease:'easeInOut'}}>
            <ArrowDown size={12} color="rgba(178,148,62,0.36)" />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          §2  STATS — lit from above by the hero's golden glow
      ════════════════════════════════════════════════════════════════════ */}
      <section id="about" style={{ position:'relative',overflow:'hidden',
        background:`linear-gradient(to bottom, ${siteBg}, #131009, ${siteBg})`,
        padding:'80px 40px', borderBottom:'1px solid rgba(201,168,76,0.08)' }}>
        {/* Golden light bloom bleeding down from hero */}
        <Orb style={{ top:-200,left:'50%',transform:'translateX(-50%)',width:900,height:400,
          background:'radial-gradient(ellipse, rgba(178,148,62,0.07) 0%, transparent 70%)',filter:'blur(60px)' }} />

        <div style={{ maxWidth:1100,margin:'0 auto',position:'relative',zIndex:1 }}>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0 }}>
            {STATS.map((s,i)=>(
              <motion.div key={s.l}
                initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}
                viewport={{once:true,margin:'-40px'}} transition={{duration:0.7,delay:i*0.1,ease:EASE}}
                style={{ textAlign:'center',padding:'20px 24px',
                  borderRight: i<3 ? '1px solid rgba(201,168,76,0.08)' : 'none' }}>
                <div style={{ fontFamily:"'Playfair Display',serif",fontStyle:'italic',
                  fontSize:'clamp(38px,3.5vw,54px)',color:'#c9a84c',lineHeight:1,marginBottom:10 }}>{s.v}</div>
                <div style={{ ...font(13,400,'rgba(200,182,130,0.38)'),letterSpacing:'0.06em' }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          §3  WORK
      ════════════════════════════════════════════════════════════════════ */}
      <section id="work" style={{ position:'relative',overflow:'hidden',background:siteBg,padding:'120px 40px 100px' }}>
        {/* Warm amber glow — like sunlight on the left  */}
        <Orb style={{ top:'15%',left:'-8%',width:600,height:600,
          background:'radial-gradient(circle, rgba(100,75,20,0.1) 0%, transparent 70%)',filter:'blur(100px)' }} />
        {/* Cool steel on the right — matching storm clouds in the video */}
        <Orb style={{ bottom:'15%',right:'-6%',width:500,height:500,
          background:'radial-gradient(circle, rgba(45,65,90,0.1) 0%, transparent 70%)',filter:'blur(100px)' }} />

        <div style={{ maxWidth:1100,margin:'0 auto',position:'relative',zIndex:1 }}>
          <div style={{ display:'flex',alignItems:'flex-end',justifyContent:'space-between',flexWrap:'wrap',gap:24,marginBottom:72 }}>
            <motion.div initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:0.85,ease:EASE}}>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 style={{ fontFamily:"'Playfair Display',serif",fontStyle:'italic',
                fontSize:'clamp(32px,3.8vw,58px)',color:'#f0e8d0',letterSpacing:'-0.02em',lineHeight:1.1,marginTop:4 }}>
                Craft that speaks
              </h2>
            </motion.div>
            <motion.button initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6,delay:0.2}}
              onClick={()=>{}}
              whileHover={{scale:1.04,borderColor:'rgba(201,168,76,0.4)',color:'#c9a84c'}}
              whileTap={{scale:0.97}}
              style={{ display:'inline-flex',alignItems:'center',gap:8,...font(13,400,'rgba(200,182,130,0.45)'),
                background:'transparent',border:'1px solid rgba(201,168,76,0.14)',
                borderRadius:100,padding:'10px 20px',cursor:'pointer',transition:'color 0.2s,border-color 0.2s' }}>
              View all work <ArrowRight size={14} />
            </motion.button>
          </div>

          {/* 2×2 card grid */}
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20 }}>
            {WORKS.map((w,i)=><WorkCard key={w.id} work={w} index={i} />)}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          §4  SERVICES
      ════════════════════════════════════════════════════════════════════ */}
      <section id="services" style={{ position:'relative',overflow:'hidden',
        background:'#0e0c08',padding:'120px 40px',
        borderTop:'1px solid rgba(201,168,76,0.07)' }}>
        {/* Central warm glow */}
        <Orb style={{ top:'40%',left:'50%',transform:'translate(-50%,-50%)',width:900,height:600,
          background:'radial-gradient(ellipse, rgba(77,84,58,0.08) 0%, transparent 65%)',filter:'blur(130px)' }} />

        <div style={{ maxWidth:1100,margin:'0 auto',position:'relative',zIndex:1 }}>
          <motion.div initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:0.85,ease:EASE}} style={{marginBottom:72}}>
            <SectionLabel>What We Do</SectionLabel>
            <h2 style={{ fontFamily:"'DM Sans',sans-serif",fontWeight:600,
              fontSize:'clamp(32px,3.8vw,58px)',color:'#f0e8d0',letterSpacing:'-0.04em',lineHeight:1.1,marginTop:4 }}>
              End-to-end digital
            </h2>
          </motion.div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:16 }}>
            {SERVICES.map((s,i)=><ServiceCard key={s.n} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          §5  PROCESS
      ════════════════════════════════════════════════════════════════════ */}
      <section style={{ position:'relative',overflow:'hidden',
        background:`linear-gradient(180deg, #0e0c08 0%, #111009 50%, #0e0c08 100%)`,
        padding:'110px 40px',
        borderTop:'1px solid rgba(201,168,76,0.07)' }}>
        <div aria-hidden="true" style={{ position:'absolute',top:0,left:0,right:0,height:1,
          background:'linear-gradient(to right,transparent,rgba(201,168,76,0.22),transparent)' }} />
        <Orb style={{ top:'60%',right:'-5%',width:500,height:500,
          background:'radial-gradient(circle,rgba(180,148,62,0.06) 0%,transparent 70%)',filter:'blur(90px)' }} />

        <div style={{ maxWidth:1100,margin:'0 auto',position:'relative',zIndex:1 }}>
          <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,ease:EASE}} style={{marginBottom:72}}>
            <SectionLabel>How We Work</SectionLabel>
            <h2 style={{ ...font(48,600,'#f0e8d0'),fontFamily:"'DM Sans',sans-serif",fontSize:'clamp(28px,3vw,48px)',letterSpacing:'-0.04em',marginTop:4 }}>
              Our process
            </h2>
          </motion.div>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:0,position:'relative' }}>
            {/* Horizontal connector line */}
            <div aria-hidden="true" style={{ position:'absolute',top:26,left:'10%',right:'10%',height:1,
              background:'linear-gradient(to right,transparent,rgba(201,168,76,0.14) 20%,rgba(201,168,76,0.14) 80%,transparent)' }} />
            {PROCESS.map((p,i)=>(
              <motion.div key={p.s}
                initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}
                viewport={{once:true,margin:'-30px'}} transition={{duration:0.6,delay:i*0.1,ease:EASE}}
                style={{ padding:'0 16px',textAlign:'center',position:'relative' }}>
                {/* Step bubble */}
                <div style={{ width:52,height:52,borderRadius:'50%',margin:'0 auto 28px',
                  background:'linear-gradient(135deg,rgba(28,24,14,0.9),rgba(20,17,10,0.9))',
                  border:'1px solid rgba(201,168,76,0.2)',
                  display:'flex',alignItems:'center',justifyContent:'center',position:'relative',zIndex:1,
                  boxShadow:'0 0 0 6px rgba(201,168,76,0.04)' }}>
                  <span style={{ ...font(12,500,'rgba(201,168,76,0.8)'),letterSpacing:'0.04em' }}>{p.s}</span>
                </div>
                <div style={{ ...font(17,600,'#e8dfc0'),fontFamily:"'DM Sans',sans-serif",letterSpacing:'-0.02em',marginBottom:10 }}>{p.l}</div>
                <div style={{ ...font(13,300,'rgba(195,178,130,0.38)'),lineHeight:1.65 }}>{p.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          §6  TESTIMONIALS
      ════════════════════════════════════════════════════════════════════ */}
      <section style={{ position:'relative',overflow:'hidden',background:siteBg,padding:'110px 40px',
        borderTop:'1px solid rgba(201,168,76,0.07)' }}>
        <Orb style={{ bottom:'-5%',left:'50%',transform:'translateX(-50%)',width:800,height:400,
          background:'radial-gradient(ellipse,rgba(90,70,20,0.1) 0%,transparent 70%)',filter:'blur(80px)' }} />

        <div style={{ maxWidth:1100,margin:'0 auto',position:'relative',zIndex:1 }}>
          <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,ease:EASE}}
            style={{marginBottom:72,textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <SectionLabel>Client Voices</SectionLabel>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontStyle:'italic',
              fontSize:'clamp(28px,3vw,48px)',color:'#f0e8d0',letterSpacing:'-0.02em',marginTop:4 }}>What they say</h2>
          </motion.div>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:20 }}>
            {TESTIMONIALS.map((t,i)=><TestimonialCard key={t.name} t={t} index={i} />)}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          §7  CONTACT
      ════════════════════════════════════════════════════════════════════ */}
      <section id="contact" style={{ position:'relative',overflow:'hidden',background:'#0e0c08',padding:'130px 40px',
        borderTop:'1px solid rgba(201,168,76,0.07)' }}>
        {/* Two glows — warm left (golden meadow), cool right (storm) */}
        <Orb style={{ top:'30%',left:'-5%',width:700,height:700,
          background:'radial-gradient(circle,rgba(100,80,25,0.12) 0%,transparent 65%)',filter:'blur(110px)' }} />
        <Orb style={{ top:'50%',right:'-8%',width:600,height:600,
          background:'radial-gradient(circle,rgba(40,62,95,0.1) 0%,transparent 65%)',filter:'blur(110px)' }} />
        {/* Decorative grid texture */}
        <div aria-hidden="true" style={{ position:'absolute',inset:0,
          backgroundImage:'linear-gradient(rgba(201,168,76,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.025) 1px,transparent 1px)',
          backgroundSize:'60px 60px',pointerEvents:'none',
          maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)' }} />
        <div aria-hidden="true" style={{ position:'absolute',top:0,left:0,right:0,height:1,
          background:'linear-gradient(to right,transparent,rgba(201,168,76,0.2),transparent)' }} />

        <div style={{ maxWidth:1100,margin:'0 auto',position:'relative',zIndex:1,
          display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'start' }}>

          {/* Left copy */}
          <motion.div variants={slideIn('left')} initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}}>
            <SectionLabel>Start a Project</SectionLabel>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontStyle:'italic',
              fontSize:'clamp(32px,3.5vw,54px)',color:'#f0e8d0',letterSpacing:'-0.02em',lineHeight:1.12,marginTop:4,marginBottom:22 }}>
              Ready to build<br />something extraordinary?
            </h2>
            <p style={{ ...font(17,300,'rgba(195,178,130,0.52)'),lineHeight:1.72,marginBottom:48 }}>
              We take on a limited number of projects each quarter — reach out early to secure a spot.
            </p>

            {/* Contact lines */}
            <div style={{ display:'flex',flexDirection:'column',gap:18,marginBottom:44 }}>
              {([
                { icon:Mail,    label:'hello@aetherstudio.co'   },
                { icon:MapPin,  label:'Berlin · London · Remote' },
                { icon:Phone,   label:'+1 (415) 000 0000'       },
              ] as const).map(({ icon:Icon, label })=>(
                <div key={label} style={{ display:'flex',alignItems:'center',gap:14 }}>
                  <div style={{ width:38,height:38,borderRadius:11,flexShrink:0,
                    background:'rgba(178,148,62,0.07)',border:'1px solid rgba(201,168,76,0.14)',
                    display:'flex',alignItems:'center',justifyContent:'center' }}>
                    <Icon size={16} color="rgba(201,168,76,0.65)" strokeWidth={1.5} />
                  </div>
                  <span style={{ ...font(14,400,'rgba(195,178,130,0.5)') }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Social pills */}
            <div style={{ display:'flex',flexWrap:'wrap',gap:10 }}>
              {['Twitter','Instagram','Dribbble','LinkedIn'].map(s=>(
                <motion.button key={s} onClick={()=>{}}
                  whileHover={{ scale:1.06,backgroundColor:'rgba(178,148,62,0.12)',borderColor:'rgba(201,168,76,0.36)',color:'rgba(201,168,76,0.9)' }}
                  whileTap={{ scale:0.95 }}
                  style={{ ...font(12,400,'rgba(195,178,130,0.42)'),
                    background:'rgba(178,148,62,0.05)',border:'1px solid rgba(201,168,76,0.12)',
                    borderRadius:100,padding:'7px 15px',cursor:'pointer',transition:'all 0.2s' }}>
                  {s}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={slideIn('right')} initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}}>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          §8  FOOTER
      ════════════════════════════════════════════════════════════════════ */}
      <footer style={{ background:'#080705',borderTop:'1px solid rgba(201,168,76,0.1)',padding:'36px 40px',position:'relative' }}>
        <div aria-hidden="true" style={{ position:'absolute',top:0,left:0,right:0,height:1,
          background:'linear-gradient(to right,transparent,rgba(201,168,76,0.18),transparent)' }} />
        <div style={{ maxWidth:1100,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16 }}>
          <div style={{ display:'flex',alignItems:'center',gap:7 }}>
            <span style={{ width:18,height:18,borderRadius:'50%',background:'linear-gradient(135deg,#c9a84c,#d4893a)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,color:'#0c0a07',fontWeight:700,flexShrink:0 }}>✦</span>
            <span style={{ ...font(15,700,'#c9a84c'),letterSpacing:'-0.3px' }}>Aether Studio</span>
          </div>
          <span style={{ ...font(12,400,'rgba(178,148,62,0.28)') }}>© 2024 Aether Studio — All rights reserved</span>
          <div style={{ display:'flex',gap:24 }}>
            {['Privacy','Terms','Cookies'].map(s=>(
              <motion.span key={s} whileHover={{color:'rgba(201,168,76,0.75)'}}
                style={{ ...font(12,400,'rgba(178,148,62,0.3)'),cursor:'pointer' }}>{s}</motion.span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Work Card
// ─────────────────────────────────────────────────────────────────────────────
function WorkCard({ work, index }: { work: typeof WORKS[number]; index: number }) {
  const [hov, setHov] = useState(false)

  return (
    <motion.article
      initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}}
      viewport={{once:true,margin:'-40px'}} transition={{duration:0.8,delay:index*0.1,ease:EASE}}
      onHoverStart={()=>setHov(true)} onHoverEnd={()=>setHov(false)}
      style={{
        position:'relative',borderRadius:20,overflow:'hidden',cursor:'pointer',
        background:`${work.bg}, rgba(18,15,9,0.96)`,
        border:`1px solid rgba(${work.accentRgb},${hov?0.25:0.12})`,
        transition:'transform 0.45s cubic-bezier(0.22,1,0.36,1),box-shadow 0.45s,border-color 0.3s',
        transform: hov ? 'translateY(-7px) scale(1.015)' : 'none',
        boxShadow: hov ? `0 32px 64px rgba(0,0,0,0.65),0 0 0 1px rgba(${work.accentRgb},0.12),0 0 40px rgba(${work.accentRgb},0.06)` : '0 4px 24px rgba(0,0,0,0.45)',
        minHeight:288,padding:'36px 32px',
        display:'flex',flexDirection:'column',justifyContent:'space-between',
      }}
    >
      {/* Top row */}
      <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-start' }}>
        <span style={{ ...font(11,400,'rgba(255,255,255,0.2)'),letterSpacing:'0.1em' }}>
          {String(work.id).padStart(2,'0')}
        </span>
        <AnimatePresence>
          {hov && (
            <motion.div initial={{opacity:0,scale:0.5,rotate:-30}} animate={{opacity:1,scale:1,rotate:0}} exit={{opacity:0,scale:0.5}} transition={{duration:0.22}}>
              <div style={{ width:36,height:36,borderRadius:'50%',background:`rgba(${work.accentRgb},0.12)`,border:`1px solid rgba(${work.accentRgb},0.3)`,display:'flex',alignItems:'center',justifyContent:'center',backdropFilter:'blur(8px)' }}>
                <ExternalLink size={15} color={work.accent} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom */}
      <div>
        <div style={{ display:'flex',gap:7,marginBottom:16,flexWrap:'wrap' }}>
          {work.tags.map(t=>(
            <span key={t} style={{ ...font(10,400,work.accent),
              background:`rgba(${work.accentRgb},0.1)`,
              border:`1px solid rgba(${work.accentRgb},0.22)`,
              borderRadius:100,padding:'3px 10px',letterSpacing:'0.06em' }}>{t}</span>
          ))}
        </div>
        <h3 style={{ fontFamily:"'DM Sans',sans-serif",fontWeight:600,
          fontSize:'clamp(24px,2.5vw,34px)',color:'#f0e8d0',letterSpacing:'-0.03em',lineHeight:1.1,marginBottom:7 }}>
          {work.title}
        </h3>
        <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center' }}>
          <span style={{ ...font(13,400,'rgba(210,195,155,0.35)'),letterSpacing:'0.04em' }}>{work.cat}</span>
          <span style={{ ...font(12,400,'rgba(210,195,155,0.22)') }}>{work.year}</span>
        </div>
      </div>

      {/* Hover shimmer */}
      <AnimatePresence>
        {hov && (
          <motion.div aria-hidden="true" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}
            style={{ position:'absolute',inset:0,borderRadius:20,
              background:`linear-gradient(135deg,rgba(${work.accentRgb},0.05) 0%,transparent 55%)`,
              pointerEvents:'none' }} />
        )}
      </AnimatePresence>
    </motion.article>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Service Card
// ─────────────────────────────────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  const [hov, setHov] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}}
      viewport={{once:true,margin:'-30px'}} transition={{duration:0.7,delay:index*0.09,ease:EASE}}
      onHoverStart={()=>setHov(true)} onHoverEnd={()=>setHov(false)}
      style={{
        position:'relative',borderRadius:20,padding:'40px 32px',cursor:'pointer',overflow:'hidden',
        background: hov ? 'rgba(26,22,14,0.98)' : 'rgba(20,17,11,0.7)',
        border:`1px solid ${hov?`rgba(${service.rgb},0.22)`:'rgba(201,168,76,0.09)'}`,
        transition:'background 0.3s,border-color 0.3s,transform 0.4s cubic-bezier(0.22,1,0.36,1),box-shadow 0.4s',
        transform: hov ? 'translateY(-5px)' : 'none',
        boxShadow: hov ? `0 24px 56px rgba(0,0,0,0.5),0 0 0 1px rgba(${service.rgb},0.1),0 0 30px rgba(${service.rgb},0.05)` : 'none',
      }}
    >
      {/* Top accent line on hover */}
      <AnimatePresence>
        {hov && (
          <motion.div aria-hidden="true" initial={{opacity:0,scaleX:0}} animate={{opacity:1,scaleX:1}} exit={{opacity:0,scaleX:0}} transition={{duration:0.35}}
            style={{ position:'absolute',top:0,left:0,right:0,height:2,
              background:`linear-gradient(to right,transparent,${service.color},transparent)`,
              transformOrigin:'center',pointerEvents:'none' }} />
        )}
      </AnimatePresence>

      {/* Icon */}
      <motion.div animate={{ scale:hov?1.1:1 }} transition={{duration:0.3}}
        style={{ width:46,height:46,borderRadius:13,marginBottom:28,
          background:`rgba(${service.rgb},0.1)`,
          border:`1px solid rgba(${service.rgb},0.2)`,
          display:'flex',alignItems:'center',justifyContent:'center' }}>
        <Icon size={21} color={service.color} strokeWidth={1.5} />
      </motion.div>

      <div style={{ ...font(10,400,'rgba(201,168,76,0.22)'),letterSpacing:'0.14em',marginBottom:14 }}>{service.n}</div>
      <h3 style={{ fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:20,color:'#e8dfc0',letterSpacing:'-0.02em',marginBottom:12,lineHeight:1.2 }}>{service.title}</h3>
      <p style={{ ...font(14,300,'rgba(195,178,130,0.42)'),lineHeight:1.68,marginBottom:28 }}>{service.desc}</p>

      <motion.div animate={{x:hov?5:0}} transition={{duration:0.25}}
        style={{ display:'inline-flex',alignItems:'center',gap:6,...font(13,400,service.color),opacity:hov?1:0.38 }}>
        Learn more <ChevronRight size={13} />
      </motion.div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Testimonial Card
// ─────────────────────────────────────────────────────────────────────────────
function TestimonialCard({ t, index }: { t: typeof TESTIMONIALS[number]; index: number }) {
  return (
    <motion.div
      initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}}
      viewport={{once:true,margin:'-30px'}} transition={{duration:0.75,delay:index*0.12,ease:EASE}}
      style={{ background:'linear-gradient(145deg,rgba(24,20,12,0.95),rgba(16,14,8,0.95))',
        border:'1px solid rgba(201,168,76,0.1)',borderRadius:20,padding:'40px 36px',position:'relative',overflow:'hidden' }}>
      {/* Big quote mark */}
      <div aria-hidden="true" style={{ position:'absolute',top:16,right:28,
        fontFamily:"'Playfair Display',serif",fontSize:90,color:'rgba(178,148,62,0.06)',
        lineHeight:1,userSelect:'none',pointerEvents:'none' }}>"</div>
      {/* Stars */}
      <div style={{ display:'flex',gap:4,marginBottom:20 }}>
        {Array.from({length:t.stars}).map((_,i)=><Star key={i} size={14} fill="#c9a84c" color="#c9a84c" />)}
      </div>
      <p style={{ ...font(16,300,'rgba(215,200,158,0.72)'),lineHeight:1.72,marginBottom:32,fontStyle:'italic',position:'relative',zIndex:1 }}>
        "{t.q}"
      </p>
      <div style={{ display:'flex',alignItems:'center',gap:14 }}>
        <div style={{ width:42,height:42,borderRadius:'50%',flexShrink:0,
          background:'linear-gradient(135deg,#c9a84c,#c07830)',
          display:'flex',alignItems:'center',justifyContent:'center' }}>
          <span style={{ ...font(13,700,'#0c0a07') }}>{t.ini}</span>
        </div>
        <div>
          <div style={{ ...font(14,600,'#e8dfc0'),letterSpacing:'-0.01em' }}>{t.name}</div>
          <div style={{ ...font(12,400,'rgba(178,148,62,0.48)'),marginTop:2 }}>{t.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Contact Form
// ─────────────────────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name:'',email:'',message:'',budget:'' })
  const [sent, setSent] = useState(false)

  const base: React.CSSProperties = {
    fontFamily:"'DM Sans',sans-serif",fontSize:14,color:'#e8dfc0',
    background:'rgba(24,20,12,0.7)',
    border:'1px solid rgba(201,168,76,0.14)',
    borderRadius:12,padding:'14px 18px',width:'100%',outline:'none',
    transition:'border-color 0.2s,background 0.2s', boxSizing:'border-box',
  }
  const focus = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    e.target.style.borderColor='rgba(201,168,76,0.42)'
    e.target.style.background='rgba(32,27,16,0.85)'
  }
  const blur = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    e.target.style.borderColor='rgba(201,168,76,0.14)'
    e.target.style.background='rgba(24,20,12,0.7)'
  }

  return (
    <div style={{ background:'linear-gradient(145deg,rgba(24,20,12,0.9),rgba(16,14,8,0.9))',
      border:'1px solid rgba(201,168,76,0.12)',borderRadius:24,padding:'44px 40px',position:'relative',overflow:'hidden' }}>
      <div aria-hidden="true" style={{ position:'absolute',top:0,right:0,width:250,height:250,
        background:'radial-gradient(circle,rgba(178,148,62,0.06) 0%,transparent 70%)',pointerEvents:'none' }} />

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="sent" initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:0.4}}
            style={{ textAlign:'center',padding:'48px 0' }}>
            <div style={{ width:60,height:60,borderRadius:'50%',margin:'0 auto 24px',
              background:'linear-gradient(135deg,#c9a84c,#c07830)',
              display:'flex',alignItems:'center',justifyContent:'center' }}>
              <Check size={26} color="#0c0a07" strokeWidth={2.5} />
            </div>
            <h3 style={{ fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:28,color:'#f0e8d0',marginBottom:12 }}>We'll be in touch</h3>
            <p style={{ ...font(14,300,'rgba(195,178,130,0.5)'),lineHeight:1.65 }}>Expect to hear from us within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <h3 style={{ fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:20,color:'#e8dfc0',letterSpacing:'-0.02em',marginBottom:28 }}>
              Send us a message
            </h3>
            <div style={{ display:'flex',flexDirection:'column',gap:16 }}>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:14 }}>
                <div>
                  <label style={{ ...font(11,500,'rgba(201,168,76,0.48)'),letterSpacing:'0.08em',display:'block',marginBottom:7 }}>Your name</label>
                  <input style={base} placeholder="Alex Morgan" value={form.name}
                    onChange={e=>setForm({...form,name:e.target.value})} onFocus={focus} onBlur={blur} />
                </div>
                <div>
                  <label style={{ ...font(11,500,'rgba(201,168,76,0.48)'),letterSpacing:'0.08em',display:'block',marginBottom:7 }}>Email</label>
                  <input type="email" style={base} placeholder="alex@co.com" value={form.email}
                    onChange={e=>setForm({...form,email:e.target.value})} onFocus={focus} onBlur={blur} />
                </div>
              </div>
              <div>
                <label style={{ ...font(11,500,'rgba(201,168,76,0.48)'),letterSpacing:'0.08em',display:'block',marginBottom:7 }}>About your project</label>
                <textarea style={{...base,minHeight:110,resize:'vertical'}} placeholder="Tell us what you're building..."
                  value={form.message} onChange={e=>setForm({...form,message:e.target.value})} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={{ ...font(11,500,'rgba(201,168,76,0.48)'),letterSpacing:'0.08em',display:'block',marginBottom:7 }}>Budget range</label>
                <select style={{...base,cursor:'pointer',appearance:'none'}} value={form.budget}
                  onChange={e=>setForm({...form,budget:e.target.value})} onFocus={focus} onBlur={blur}>
                  <option value="" style={{background:'#1a160c'}}>Select a range</option>
                  {['$5k–$15k','$15k–$30k','$30k–$60k','$60k+'].map(b=>(
                    <option key={b} value={b} style={{background:'#1a160c'}}>{b}</option>
                  ))}
                </select>
              </div>
              <motion.button type="button" onClick={()=>setSent(true)}
                whileHover={{scale:1.03,boxShadow:'0 12px 40px rgba(178,148,62,0.28)'}}
                whileTap={{scale:0.97}}
                style={{ display:'inline-flex',alignItems:'center',justifyContent:'center',gap:10,
                  ...font(15,600,'#0c0a07'),
                  background:'linear-gradient(135deg,#c9a84c,#c07830)',
                  border:'none',borderRadius:100,padding:'16px 32px',cursor:'pointer',marginTop:4 }}>
                Send Message <ArrowRight size={16} strokeWidth={2.2} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
