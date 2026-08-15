import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '16px 24px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1120,
          background: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.2)',
          border: '1px solid rgba(255,255,255,0.4)',
          borderRadius: 100,
          padding: '8px 12px 8px 24px',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.03)',
          transition: 'all 0.4s ease',
          gap: 20,
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            scrollTo('#')
          }}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: '#bef264',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 10,
              color: '#14532d',
              fontWeight: 800,
            }}
          >
            ✦
          </span>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 16,
              fontWeight: 800,
              color: scrolled ? '#111827' : '#ffffff',
              letterSpacing: '-0.02em',
              transition: 'color 0.3s',
            }}
          >
            Aether
          </span>
        </a>

        {/* Navigation Links */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 28,
            listStyle: 'none',
            margin: 0,
            padding: 0,
            flex: 1,
            justifyContent: 'center',
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => scrollTo(href)}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: scrolled ? '#4b5563' : 'rgba(255,255,255,0.9)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = scrolled ? '#0284c7' : '#bef264')}
                onMouseLeave={e =>
                  (e.currentTarget.style.color = scrolled ? '#4b5563' : 'rgba(255,255,255,0.9)')
                }
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact CTA Button (Matching Aeline) */}
        <motion.button
          onClick={() => scrollTo('#contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#bef264',
            color: '#14532d',
            border: 'none',
            borderRadius: 100,
            padding: '10px 22px',
            fontFamily: "'Syne', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          }}
        >
          CONTACT US
        </motion.button>
      </div>
    </motion.nav>
  )
}
