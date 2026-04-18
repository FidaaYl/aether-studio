import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Play, ArrowDown } from 'lucide-react'
import Navbar from './Navbar'
import heroBg from '../assets/hero-bg.mp4'
import { getLight, subscribe } from '../theme'
import NarrativeSection from './NarrativeSection'
import WorkShowcase from './WorkShowcase'
import FeaturesSection from './FeaturesSection'
import Testimonials from './Testimonials'
import FinalCTA from './FinalCTA'

// ─── Reactive theme hook ──────────────────────────────────────────────────────
function useTheme() {
  const [light, setLight] = useState(getLight)
  useEffect(() => subscribe(setLight), [])
  return light
}

// ─── Token builder ────────────────────────────────────────────────────────────
function tokens(L: boolean) {
  return L ? {
    siteBg:'#f8f5ef', altBg:'#f2ede3', card:'#ffffff',
    cardBdr:'rgba(160,120,30,0.13)', text:'#16140d',
    sub:'rgba(22,20,10,0.48)', muted:'rgba(22,20,10,0.26)',
    gold:'#9b6f1a', goldDim:'rgba(130,90,20,0.6)',
    goldBg:'rgba(130,90,20,0.07)', goldBdr:'rgba(130,90,20,0.18)',
    line:'rgba(130,90,20,0.1)',
    shadow:'0 1px 3px rgba(0,0,0,0.06),0 4px 16px rgba(0,0,0,0.05)',
    shadowMd:'0 8px 32px rgba(0,0,0,0.1)',
    btn:'linear-gradient(135deg,#9b6f1a,#b86825)', btnText:'#ffffff',
    orbA:'rgba(130,90,20,0.08)', orbB:'rgba(70,100,60,0.06)',
  } : {
    siteBg:'#0c0a07', altBg:'#0f0d09', card:'rgba(20,17,11,0.95)',
    cardBdr:'rgba(201,168,76,0.1)', text:'#f0e8d0',
    sub:'rgba(210,195,155,0.48)', muted:'rgba(178,148,62,0.3)',
    gold:'#c9a84c', goldDim:'rgba(201,168,76,0.52)',
    goldBg:'rgba(178,148,62,0.08)', goldBdr:'rgba(201,168,76,0.18)',
    line:'rgba(201,168,76,0.09)',
    shadow:'0 4px 24px rgba(0,0,0,0.45)',
    shadowMd:'0 16px 48px rgba(0,0,0,0.55)',
    btn:'linear-gradient(135deg,#c9a84c,#c07030)', btnText:'#0c0a07',
    orbA:'rgba(100,75,20,0.1)', orbB:'rgba(45,65,90,0.09)',
  }
}

const EASE = [0.22,1,0.36,1] as const
const CROSSFADE = 3.4
const ff = "'DM Sans',sans-serif"

// ─── Data ─────────────────────────────────────────────────────────────────────
const TRUST = ['Google','Stripe','Notion','Figma','Linear'] as const

// ─── Animations ───────────────────────────────────────────────────────────────
const stagger = { hidden:{}, visible:{ transition:{ staggerChildren:0.1, delayChildren:0.06 } } }
const up = { hidden:{ opacity:0,y:36,filter:'blur(6px)' }, visible:{ opacity:1,y:0,filter:'blur(0px)', transition:{ duration:0.9,ease:EASE } } }

// ─── Seamless video crossfade ─────────────────────────────────────────────────
function useVideo(src: string) {
  const rA=useRef<HTMLVideoElement>(null), rB=useRef<HTMLVideoElement>(null)
  const [opA,setOpA]=useState(1), [opB,setOpB]=useState(0)
  const active=useRef<'A'|'B'>('A'), running=useRef(false)
  const xfade=useCallback((from:'A'|'B')=>{
    if(running.current)return; running.current=true
    const next=from==='A'?rB.current:rA.current
    const sF=from==='A'?setOpA:setOpB, sT=from==='A'?setOpB:setOpA
    if(!next)return; next.currentTime=0; next.play().catch(()=>{})
    const steps=90,ms=(CROSSFADE*1000)/steps; let i=0
    const t=setInterval(()=>{ i++;const p=i/steps;sF(1-p);sT(p)
      if(i>=steps){clearInterval(t);active.current=from==='A'?'B':'A';running.current=false
        const d=from==='A'?rA.current:rB.current;if(d){d.pause();d.currentTime=0}}
    },ms)
  },[])
  useEffect(()=>{
    const a=rA.current,b=rB.current;if(!a||!b)return
    ;[a,b].forEach(v=>{v.src=src;v.muted=true;v.playsInline=true;v.preload='auto'})
    const fn=()=>{const c=active.current==='A'?a:b;if(!c.duration)return
      if(c.duration-c.currentTime<=CROSSFADE)xfade(active.current)}
    a.addEventListener('timeupdate',fn);b.addEventListener('timeupdate',fn)
    a.play().catch(()=>{})
    return()=>{a.removeEventListener('timeupdate',fn);b.removeEventListener('timeupdate',fn)}
  },[src,xfade])
  return {rA,rB,opA,opB}
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE
// ══════════════════════════════════════════════════════════════════════════════
export default function Page() {
  const L = useTheme()
  const T = tokens(L)

  const heroRef=useRef<HTMLDivElement>(null)
  const {rA,rB,opA,opB}=useVideo(heroBg)
  const {scrollYProgress}=useScroll({target:heroRef,offset:['start start','end start']})
  const s=useSpring(scrollYProgress,{stiffness:55,damping:18})
  const vY=useTransform(s,[0,1],['0%','28%'])
  const vSc=useTransform(s,[0,1],[1.0,1.18])
  const cY=useTransform(s,[0,0.65],['0%','-9%'])
  const cOp=useTransform(s,[0,0.48],[1,0])
  const cBl=useTransform(s,[0,0.48],[0,10])
  const oOp=useTransform(s,[0,1],[0.8,2.0])

  return (
    <motion.div style={{background: L ? T.siteBg : '#0c0a07', overflowX:'hidden'}} animate={{background: L ? T.siteBg : '#0c0a07'}} transition={{duration:0.5}}>

      {/* ══════════ §1 HERO ═══════════════════════════════════════════════ */}
      <section ref={heroRef} style={{position:'relative',width:'100%',height:'100vh',overflow:'hidden'}}>
        <motion.div style={{position:'absolute',top:'-12%',left:0,right:0,bottom:'-12%',zIndex:0,y:vY,scale:vSc}}>
          <video ref={rA} muted playsInline aria-hidden="true" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:opA}}/>
          <video ref={rB} muted playsInline aria-hidden="true" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:opB}}/>
        </motion.div>
        <motion.div aria-hidden="true" style={{position:'absolute',inset:0,zIndex:1,opacity:oOp,background:`linear-gradient(to bottom,rgba(12,10,7,0.08) 0%,rgba(12,10,7,0.22) 35%,rgba(12,10,7,0.72) 78%,#0c0a07 100%)`}}/>
        <div aria-hidden="true" style={{position:'absolute',inset:0,zIndex:2,background:'radial-gradient(ellipse 110% 55% at 50% 110%,rgba(12,10,7,0.9) 0%,transparent 60%)'}}/>
        <div aria-hidden="true" style={{position:'absolute',inset:0,zIndex:2,background:'radial-gradient(ellipse 25% 100% at 0% 50%,rgba(12,10,7,0.65) 0%,transparent 55%)'}}/>
        <div aria-hidden="true" style={{position:'absolute',inset:0,zIndex:2,background:'radial-gradient(ellipse 25% 100% at 100% 50%,rgba(12,10,7,0.65) 0%,transparent 55%)'}}/>
        <Navbar/>
        <motion.div style={{position:'absolute',inset:0,zIndex:10,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 24px',y:cY,opacity:cOp,filter:useTransform(cBl,v=>`blur(${v}px)`),pointerEvents:'none'}}>
          <motion.div variants={stagger} initial="hidden" animate="visible" style={{display:'flex',flexDirection:'column',alignItems:'center',maxWidth:980,width:'100%',pointerEvents:'auto'}}>
            <motion.div variants={up} style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(178,148,62,0.09)',border:'1px solid rgba(201,168,76,0.22)',borderRadius:100,padding:'6px 18px',backdropFilter:'blur(20px)',WebkitBackdropFilter:'blur(20px)',marginBottom:28}}>
              <motion.span style={{width:6,height:6,borderRadius:'50%',background:'#c9a84c',display:'block',flexShrink:0}} animate={{opacity:[0.3,1,0.3],scale:[1,1.6,1]}} transition={{repeat:Infinity,duration:2.2,ease:'easeInOut'}}/>
              <span style={{fontFamily:ff,fontSize:11,fontWeight:500,letterSpacing:'0.16em',textTransform:'uppercase' as const,color:'rgba(210,185,120,0.72)'}}>Digital Design Studio</span>
            </motion.div>
            <motion.h1 variants={up} style={{margin:'0 0 20px',width:'100%'}}>
              <span style={{display:'block',fontFamily:ff,fontWeight:600,fontSize:'clamp(40px,5.8vw,76px)',letterSpacing:'-0.044em',lineHeight:1.04,color:'#fff'}}>Designing digital experiences</span>
              <span style={{display:'block',fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:'clamp(44px,6.6vw,86px)',letterSpacing:'-0.02em',lineHeight:1.06,color:'#f0e8d0'}}>that feel cinematic</span>
            </motion.h1>
            <motion.p variants={up} style={{fontFamily:ff,fontSize:18,fontWeight:300,lineHeight:1.68,color:'rgba(220,205,170,0.62)',maxWidth:480,margin:'0 0 40px'}}>
              Crafting immersive websites, brands and digital products that inspire users and elevate businesses.
            </motion.p>
            <motion.div variants={up} style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',gap:12,marginBottom:60}}>
              <motion.button onClick={()=>document.getElementById('work')?.scrollIntoView({behavior:'smooth'})}
                whileHover={{scale:1.05,y:-2,boxShadow:'0 18px 50px rgba(178,148,62,0.35)'}} whileTap={{scale:0.97}}
                style={{display:'inline-flex',alignItems:'center',gap:8,fontFamily:ff,fontSize:15,fontWeight:600,color:'#0c0a07',background:'linear-gradient(135deg,#c9a84c,#c07830)',border:'none',borderRadius:100,padding:'15px 30px',cursor:'pointer',boxShadow:'0 4px 28px rgba(178,148,62,0.25)'}}>
                Explore Our Work <ArrowRight size={16} strokeWidth={2.2}/>
              </motion.button>
              <motion.button onClick={()=>document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}
                whileHover={{scale:1.04,y:-2,backgroundColor:'rgba(178,148,62,0.1)'}} whileTap={{scale:0.97}}
                style={{display:'inline-flex',alignItems:'center',gap:9,fontFamily:ff,fontSize:15,fontWeight:400,color:'rgba(230,215,180,0.85)',background:'rgba(178,148,62,0.07)',border:'1px solid rgba(201,168,76,0.2)',borderRadius:100,padding:'15px 30px',cursor:'pointer',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)'}}>
                <Play size={14} fill="currentColor" strokeWidth={0}/> Watch Showreel
              </motion.button>
            </motion.div>
            <motion.div variants={up}>
              <p style={{fontFamily:ff,fontSize:11,letterSpacing:'0.16em',textTransform:'uppercase' as const,color:'rgba(178,148,62,0.32)',marginBottom:16}}>Trusted by innovative teams</p>
              <ul style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',gap:'10px 36px',listStyle:'none',margin:0,padding:0,opacity:0.38,filter:'grayscale(1) brightness(2.8)'}}>
                {TRUST.map(l=><li key={l} style={{fontFamily:ff,fontSize:15,fontWeight:600,color:'#fff',letterSpacing:'-0.02em'}}>{l}</li>)}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div aria-hidden="true" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.9,duration:1}}
          style={{position:'absolute',bottom:32,left:'50%',transform:'translateX(-50%)',zIndex:20,display:'flex',flexDirection:'column',alignItems:'center',gap:7,pointerEvents:'none'}}>
          <span style={{fontFamily:ff,fontSize:9,letterSpacing:'0.24em',textTransform:'uppercase' as const,color:'rgba(178,148,62,0.36)'}}>Scroll</span>
          <div style={{position:'relative',width:1,height:54,background:'rgba(178,148,62,0.15)',borderRadius:1,overflow:'hidden'}}>
            <motion.div style={{position:'absolute',inset:0,background:'rgba(201,168,76,0.9)'}} initial={{y:'-100%'}} animate={{y:'200%'}} transition={{repeat:Infinity,duration:1.75,ease:'easeInOut',delay:2.1}}/>
          </div>
          <motion.div animate={{y:[0,5,0]}} transition={{repeat:Infinity,duration:1.5,ease:'easeInOut'}}>
            <ArrowDown size={12} color="rgba(178,148,62,0.36)"/>
          </motion.div>
        </motion.div>
      </section>

      <NarrativeSection T={T} L={L} />
      <WorkShowcase T={T} L={L} />
      <FeaturesSection T={T} L={L} />
      <Testimonials T={T} L={L} />
      <FinalCTA T={T} L={L} />
    </motion.div>
  )
}