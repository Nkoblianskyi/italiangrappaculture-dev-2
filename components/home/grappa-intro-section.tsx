import Link from 'next/link'
import Image from 'next/image'

export function GrappaIntroSection() {
  return (
    <section
      id="grappa"
      className="py-24 md:py-36 bg-background"
      aria-labelledby="grappa-intro-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-16 text-center">
          Il Protagonista
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text column */}
          <div>
            <h2
              id="grappa-intro-heading"
              className="font-serif text-4xl md:text-6xl font-light text-foreground leading-tight text-balance mb-6"
            >
              La Grappa:<br />
              <span className="italic">distillato nazionale</span>
            </h2>

            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
              La grappa è un distillato ottenuto esclusivamente dalla lavorazione
              delle vinacce italiane — le bucce, i vinaccioli e i raspi dell&apos;uva
              fermentata — prodotto interamente sul territorio nazionale. Un prodotto
              tutelato a livello europeo con denominazione d&apos;origine geografica.
            </p>

            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-10">
              Ogni regione italiana contribuisce con caratteristiche organolettiche
              uniche: dal Trentino al Friuli, dal Piemonte alla Sicilia, la grappa
              racconta il terroir e l&apos;ingegno dell&apos;uomo.
            </p>

            {/* Strength indicator */}
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-1">
                  Gradazione alcolica
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-light text-primary">37</span>
                  <span className="font-mono text-sm text-muted-foreground">— fino a —</span>
                  <span className="font-serif text-5xl font-semibold text-primary">60</span>
                  <span className="font-mono text-sm text-muted-foreground">% vol.</span>
                </div>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  Per legge, minimo 37,5% vol. &mdash; massimo 60% vol.
                </p>
              </div>
            </div>

            {/* Attributes */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: 'Materia prima', value: 'Vinacce italiane' },
                { label: 'Produzione', value: 'Solo in Italia' },
                { label: 'Varietà', value: 'Monovitigno / Polivitigno' },
                { label: 'Affinamento', value: 'Giovane / Invecchiata' },
              ].map((item) => (
                <div key={item.label} className="border-t border-border pt-3">
                  <p className="font-mono text-xs tracking-wider uppercase text-muted-foreground mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-mono text-sm text-foreground font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/grappa"
              className="inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors"
              aria-label="Scopri di più sulla grappa italiana"
            >
              Scopri di più sulla grappa
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>

          {/* Image column */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/grappa-detail.jpg"
                alt="Bicchiere di grappa con vinacce su tavolo rustico italiano"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative offset frame */}
            <div
              className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-border -z-10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
