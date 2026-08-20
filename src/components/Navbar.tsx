import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
          maxWidth: 1100,
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: 100,
          padding: '8px 12px 8px 24px',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.04)',
          transition: 'all 0.3s ease',
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
              width: 26,
              height: 26,
              borderRadius: '50%',
              background: '#bef264',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              color: '#14532d',
              fontWeight: 800,
            }}
          >
            ✦
          </span>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 17,
              fontWeight: 800,
              color: '#111827',
              letterSpacing: '-0.03em',
            }}
          >
            Aether
          </span>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: '#6b7280',
            }}
          >
            Studio
          </span>
        </a>

        {/* Navigation Links */}
        <ul
          className="nav-desktop-links"
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
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#374151',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#0284c7')}
                onMouseLeave={e => (e.currentTarget.style.color = '#374151')}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact CTA Button */}
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
            boxShadow: '0 2px 10px rgba(190,242,100,0.4)',
          }}
        >
          CONTACT US
        </motion.button>
      </div>
    </motion.nav>
  )
}
