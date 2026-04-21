import Link from 'next/link'
import Image from 'next/image'

const beerTypes = [
  {
    name: 'Lager Artigianale',
    region: 'Nord Italia',
    abv: '4,5% vol.',
    description:
      'Birra a bassa fermentazione, limpida e dorata, con profumi floreali e una leggera amarezza erbacea. Prodotta tradizionalmente nelle regioni alpine.',
  },
  {
    name: 'Birra Ambrata',
    region: 'Toscana / Lazio',
    abv: '5,2% vol.',
    description:
      'Colore ramato intenso, profumi di cereali tostati e caramello. Corpo medio con finale dolce e leggermente speziato.',
  },
  {
    name: 'Birra Rossa',
    region: 'Sicilia / Campania',
    abv: '5,8% vol.',
    description:
      'Ispirata alle tradizioni maltate del Sud Italia, con note di frutti rossi, malto caramellato e un retrogusto persistente.',
  },
  {
    name: 'Birra Bianca Frumentata',
    region: 'Veneto / Friuli',
    abv: '4,8% vol.',
    description:
      'Torbida e aromatica, prodotta con frumento non maltato. Note citrine, coriandolo e un profilo levitato tipicamente nordorientale.',
  },
]

export function BeerSection() {
  return (
    <section
      id="birra"
      className="py-24 md:py-36 bg-background"
      aria-labelledby="beer-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Label */}
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-16 text-center">
          Cultura Brassicola
        </p>

        {/* Hero row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div>
            <h2
              id="beer-heading"
              className="font-serif text-4xl md:text-6xl font-light text-foreground leading-tight text-balance mb-6"
            >
              Birra italiana:<br />
              <span className="italic">il rinascimento</span><br />
              artigianale
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
              Negli ultimi vent&apos;anni, l&apos;Italia ha vissuto una vera e propria
              rivoluzione brassicola. Piccoli birrifici artigianali sono fioriti
              in ogni regione, recuperando ingredienti locali e interpretando gli
              stili internazionali con creatività tutta italiana.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-10">
              Dai pub delle città alpine ai locali del Sud, la birra artigianale
              italiana esprime oggi una identità culturale precisa: rispetto per
              le materie prime, territorialità e passione per il processo.
            </p>

            <Link
              href="/birra"
              className="inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors"
              aria-label="Scopri di più sulla birra italiana"
            >
              Approfondisci la cultura della birra
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/birra-italiana.jpg"
                alt="Birra artigianale italiana in un bicchiere su tavolo di legno"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Beer types grid */}
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-8 text-center">
            Tipologie regionali — gradazione indicativa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-border">
            {beerTypes.map((beer) => (
              <div
                key={beer.name}
                className="border-b border-r border-border p-8"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-0.5">
                      {beer.name}
                    </h3>
                    <p className="font-mono text-xs tracking-wider uppercase text-muted-foreground">
                      {beer.region}
                    </p>
                  </div>
                  <span
                    className="strength-badge shrink-0"
                    aria-label={`Gradazione alcolica: ${beer.abv}`}
                  >
                    {beer.abv}
                  </span>
                </div>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {beer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
