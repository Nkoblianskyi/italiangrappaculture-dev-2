'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/grappa', label: 'La Grappa' },
  { href: '/birra', label: 'Birra Italiana' },
  { href: '/about', label: 'Chi Siamo' },
]

function Wordmark({ light }: { light?: boolean }) {
  const fg = light ? '#f5f0e8' : 'var(--foreground)'
  const dim = light ? 'rgba(245,240,232,0.45)' : 'var(--muted-foreground)'

  return (
    <span
      aria-label="Italian Grappa Culture"
      className="flex items-center gap-3 leading-none select-none"
    >
      {/* Monogram block */}
      <span
        className="font-serif leading-none transition-colors duration-300"
        style={{
          fontSize: '28px',
          fontWeight: 700,
          fontStyle: 'italic',
          color: fg,
          letterSpacing: '-0.02em',
        }}
      >
        IGC
      </span>

      {/* Divider */}
      <span
        className="block w-px h-7 transition-colors duration-300"
        style={{ background: dim }}
        aria-hidden="true"
      />

      {/* Full name — two lines, tiny */}
      <span className="flex flex-col gap-0.5">
        <span
          className="font-serif leading-none transition-colors duration-300"
          style={{
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.12em',
            color: fg,
          }}
        >
          Italian Grappa
        </span>
        <span
          className="font-mono leading-none uppercase transition-colors duration-300"
          style={{
            fontSize: '8px',
            fontWeight: 500,
            letterSpacing: '0.38em',
            color: dim,
          }}
        >
          Culture
        </span>
      </span>
    </span>
  )
}

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a120a]/80 backdrop-blur-md border-b border-white/10 shadow-sm">
      {/* Top thin accent line */}
      <div className="h-px w-full bg-amber-700/50" />

      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[68px]">
        {/* Wordmark */}
        <Link href="/" aria-label="Italian Grappa Culture — Homepage">
          <Wordmark light />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center" role="list">
          {navLinks.map((link, i) => (
            <li key={link.href} className="flex items-center">
              {i > 0 && (
                <span
                  className="mx-5 block h-3 w-px bg-white/20"
                  aria-hidden="true"
                />
              )}
              <Link
                href={link.href}
                className="font-mono text-[10px] tracking-[0.2em] uppercase transition-opacity duration-200 text-white/70 hover:text-white hover:opacity-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px] w-5' : 'w-5'}`}
          />
          <span
            className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 w-3' : 'w-3 ml-auto'}`}
          />
          <span
            className={`block h-px bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px] w-5' : 'w-5'}`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-72' : 'max-h-0'
        } bg-background border-b border-border`}
      >
        <ul className="flex flex-col px-6 py-7 gap-0" role="list">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              {i > 0 && <div className="h-px bg-border/50 my-4" />}
              <Link
                href={link.href}
                className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors block"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
