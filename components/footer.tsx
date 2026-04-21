import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      {/* Top accent line */}
      <div className="h-px w-full bg-primary/30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main footer body */}
        <div className="py-16 md:py-20 flex flex-col md:flex-row gap-14 md:gap-0 md:justify-between">

          {/* Brand block */}
          <div className="md:w-72">
            {/* Wordmark */}
            <span
              aria-label="Italian Grappa Culture"
              className="flex items-center gap-3 leading-none select-none mb-7"
            >
              <span
                className="font-serif leading-none text-foreground"
                style={{ fontSize: '32px', fontWeight: 700, fontStyle: 'italic', letterSpacing: '-0.02em' }}
              >
                IGC
              </span>
              <span className="block w-px h-8 bg-border" aria-hidden="true" />
              <span className="flex flex-col gap-0.5">
                <span
                  className="font-serif leading-none text-foreground"
                  style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.12em' }}
                >
                  Italian Grappa
                </span>
                <span
                  className="font-mono leading-none uppercase text-muted-foreground"
                  style={{ fontSize: '8px', fontWeight: 500, letterSpacing: '0.38em' }}
                >
                  Culture
                </span>
              </span>
            </span>
            <p className="font-mono text-[10px] tracking-wide text-muted-foreground leading-relaxed max-w-xs">
              Portale informativo dedicato alla cultura della grappa e delle bevande
              tipiche italiane. Nessuna vendita di prodotti.
            </p>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-mono text-[10px] tracking-wide text-muted-foreground">
                info@italiangrappaculture.com
              </p>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-20">
            <nav aria-label="Navigazione principale footer">
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-primary mb-6">
                Esplora
              </p>
              <ul className="flex flex-col gap-4" role="list">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/grappa', label: 'La Grappa' },
                  { href: '/birra', label: 'Birra Italiana' },
                  { href: '/about', label: 'Chi Siamo' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Link legali footer">
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-primary mb-6">
                Legale
              </p>
              <ul className="flex flex-col gap-4" role="list">
                {[
                  { href: '/cookie-policy', label: 'Cookie Policy' },
                  { href: '/privacy-policy', label: 'Privacy Policy' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">
            Sito a finalità esclusivamente informative. Vietato ai minori di 18 anni.
            Il consumo di alcol va praticato responsabilmente.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground/50 shrink-0">
            &copy; {year} Italian Grappa Culture
          </p>
        </div>
      </div>
    </footer>
  )
}
