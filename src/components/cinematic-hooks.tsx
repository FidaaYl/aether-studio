import { useState, useEffect, useRef, type RefObject, type ReactNode, type CSSProperties } from 'react'

/** Tracks scroll progress (0→1) through a tall sticky container */
export function useScrollProgress(ref: RefObject<HTMLDivElement | null>) {
  const [p, setP] = useState(0)
  useEffect(() => {
    const el = ref.current; if (!el) return
    let raf: number
    const tick = () => {
      const r = el.getBoundingClientRect()
      const raw = -r.top / (r.height - window.innerHeight)
      setP(Math.max(0, Math.min(1, raw)))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [ref])
  return p
}

/** Fires once when element enters viewport */
export function useInView(opts: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.unobserve(el) } },
      { threshold: 0.08, ...opts }
    )
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return [ref, v] as const
}

/** Normalized mouse position (0→1) */
export function useMouse() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 })
  useEffect(() => {
    const fn = (e: MouseEvent) =>
      setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    window.addEventListener('mousemove', fn, { passive: true })
    return () => window.removeEventListener('mousemove', fn)
  }, [])
  return pos
}

/** Fade-up reveal wrapper */
export function Reveal({ children, delay = 0, y = 40, style = {} }: {
  children: ReactNode
  delay?: number
  y?: number
  style?: CSSProperties
}) {
  const [ref, vis] = useInView()
  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 1.1s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 1.1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}