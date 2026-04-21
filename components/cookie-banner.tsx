'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('igc_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('igc_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('igc_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Consenso cookie"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-background border-t border-background/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <p className="font-mono text-xs text-background/75 leading-relaxed max-w-2xl">
          Questo sito utilizza cookie tecnici necessari al funzionamento. Non utilizziamo cookie di profilazione
          o marketing. Per saperne di più consulta la nostra{' '}
          <Link href="/cookie-policy" className="underline text-background/90 hover:text-background">
            Cookie Policy
          </Link>{' '}
          e la{' '}
          <Link href="/privacy-policy" className="underline text-background/90 hover:text-background">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-mono text-xs tracking-widest uppercase text-background/50 hover:text-background/80 transition-colors px-4 py-2"
          >
            Rifiuta
          </button>
          <button
            onClick={accept}
            className="font-mono text-xs tracking-widest uppercase bg-background text-foreground px-5 py-2 hover:bg-background/90 transition-colors"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  )
}
