export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Sezione hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-grappa.jpg')" }}
        role="img"
        aria-label="Vigneti italiani al tramonto dorato"
      />

      {/* Strong dark gradient from bottom — ensures text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      {/* Warm tint */}
      <div className="absolute inset-0 bg-primary/8" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-3xl">

          {/* Label */}
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/60 mb-7">
            Cultura &amp; Tradizione Italiana
          </p>

          {/* Headline */}
          <h1 className="font-serif text-balance text-5xl md:text-7xl lg:text-[5.5rem] font-light text-white leading-[1.0] mb-7">
            L&apos;anima<br />
            <em className="font-medium not-italic" style={{ fontStyle: 'italic' }}>distillata</em><br />
            dell&apos;Italia
          </h1>

          {/* Subheadline */}
          <p className="font-mono text-sm text-white/75 leading-relaxed max-w-lg mb-12">
            Esplora il patrimonio della grappa italiana: storia millenaria,
            tradizioni regionali e la ricchezza culturale del distillato
            nazionale per eccellenza.
          </p>

          {/* Disclaimer 18+ — glassmorphism backdrop */}
          <div
            className="inline-block backdrop-blur-md bg-black/40 border border-white/20 px-5 py-4 max-w-xl"
            role="note"
            aria-label="Avviso età e responsabilità"
          >
            <p className="font-mono text-[11px] leading-[1.7] text-white/90">
              <span className="font-bold text-white mr-2 text-xs">18+</span>
              Sito a carattere puramente informativo. Non vengono effettuate vendite.
              Il consumo di bevande alcoliche deve avvenire con responsabilità e
              consapevolezza. Vietato ai minori di 18 anni.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 z-10 flex flex-col items-center gap-2">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/40 [writing-mode:vertical-rl]">
          Scorri
        </span>
        <div className="w-px h-12 bg-white/15 relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-white/60"
            style={{
              height: '40%',
              animation: 'scrollIndicator 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollIndicator {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  )
}
