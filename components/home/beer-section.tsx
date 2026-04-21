import Link from 'next/link'
import Image from 'next/image'

const beerTypes = [
  {
    name: 'Lager Artigianale',
    region: 'Nord Italia',
    abv: '4,5% vol.',
    style: 'Bassa fermentazione',
    color: 'Dorata limpida',
    description:
      'Prodotta tradizionalmente nelle regioni alpine con luppolo locale. Profumi floreali, corpo leggero e una leggera amarezza erbacea. Ideale servita fresca tra 4 e 6 gradi.',
  },
  {
    name: 'Birra Ambrata',
    region: 'Toscana / Lazio',
    abv: '5,2% vol.',
    style: 'Ale ambrata',
    color: 'Ramato intenso',
    description:
      'Colore ramato con riflessi rubino, profumi di cereali tostati e caramello morbido. Corpo medio con finale dolce e leggermente speziato. Accompagna bene i secondi di carne.',
  },
  {
    name: 'Birra Rossa',
    region: 'Sicilia / Campania',
    abv: '5,8% vol.',
    style: 'Red Ale italiana',
    color: 'Rosso rubino',
    description:
      'Ispirata alle tradizioni maltate del Sud Italia. Note di frutti rossi, malto caramellato e un retrogusto persistente con sentori di agrumi meridionali e spezie locali.',
  },
  {
    name: 'Birra Bianca Frumentata',
    region: 'Veneto / Friuli',
    abv: '4,8% vol.',
    style: 'Weizen italiana',
    color: 'Giallo torbido',
    description:
      'Torbida e aromatica, prodotta con frumento non maltato del Nordest. Note citrine, coriandolo e un profilo levitato con schiuma persistente e morbida.',
  },
  {
    name: 'Birra Scura',
    region: 'Piemonte / Valle d\'Aosta',
    abv: '6,2% vol.',
    style: 'Porter alpina',
    color: 'Bruno scuro',
    description:
      'Nata nelle valli alpine, con malti tostati intensi che evocano cioccolato fondente e caffè. Corpo pieno, schiuma compatta color nocciola. Ottima con formaggi stagionati.',
  },
  {
    name: 'Birra Doppio Malto',
    region: 'Lombardia / Emilia',
    abv: '7,5% vol.',
    style: 'Doppelbock italiana',
    color: 'Ambra scura',
    description:
      'Alta concentrazione di malto per una birra strutturata e complessa. Dolcezza morbida bilanciata da luppoli resinosi. Tradizione brassicola padana con influenze mitteleuropee.',
  },
  {
    name: 'Birra di Farro',
    region: 'Umbria / Marche',
    abv: '4,2% vol.',
    style: 'Specialty grain',
    color: 'Dorata tenue',
    description:
      'Prodotta con farro antico delle zone collinari dell\'Italia centrale. Profilo cerealicolo delicato, leggermente nocciolato, con una schiuma fine e persistente. Stile in riscoperta.',
  },
  {
    name: 'IPA Mediterranea',
    region: 'Sardegna / Puglia',
    abv: '6,0% vol.',
    style: 'India Pale Ale',
    color: 'Arancio dorato',
    description:
      'Reinterpretazione italiana dello stile IPA con luppoli selezionati e agrumi del Mediterraneo. Amaro deciso ma pulito, profumi di arancia rossa, bergamotto e resina.',
  },
]

const facts = [
  { label: 'Birrifici artigianali attivi in Italia', value: '900+' },
  { label: 'Regioni con produzione brassicola', value: '20' },
  { label: 'Stili documentati di produzione locale', value: '60+' },
  { label: 'Anni del rinascimento brassicolo italiano', value: '25' },
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
          Cultura Brassicola Italiana
        </p>

        {/* Hero row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          <div>
            <h2
              id="beer-heading"
              className="font-serif text-4xl md:text-6xl font-light text-foreground leading-tight text-balance mb-6"
            >
              Birra italiana:<br />
              <span className="italic">il rinascimento</span><br />
              artigianale
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-5">
              Negli ultimi vent&apos;anni, l&apos;Italia ha vissuto una vera e propria
              rivoluzione brassicola. Piccoli birrifici artigianali sono fioriti
              in ogni regione, recuperando ingredienti locali — farro antico,
              agrumi meridionali, erbe alpine — e reinterpretando gli stili
              internazionali con creatività tutta italiana.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-5">
              Dai pub delle città alpine ai locali del profondo Sud, la birra
              artigianale italiana esprime oggi una identità culturale precisa:
              rispetto per le materie prime, forte territorialità e passione
              artigianale per ogni fase del processo produttivo.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-10">
              La cultura dei pub italiani si distingue per l&apos;attenzione alla
              spillatura corretta, alla temperatura di servizio e all&apos;abbinamento
              con la cucina regionale. Ogni birra racconta il territorio che la
              produce.
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

          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/birra-italiana.jpg"
                alt="Birra artigianale italiana in un bicchiere su tavolo di legno"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/2] overflow-hidden">
              <Image
                src="/images/birra-pub.jpg"
                alt="Interno di un pub artigianale italiano con spine e ambiente rustico"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-border py-10 mb-20 gap-y-8">
          {facts.map((f) => (
            <div key={f.label} className="text-center px-4">
              <p className="font-serif text-4xl md:text-5xl font-light text-foreground mb-2">
                {f.value}
              </p>
              <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground leading-relaxed">
                {f.label}
              </p>
            </div>
          ))}
        </div>

        {/* Beer types grid — 8 beers */}
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-8 text-center">
            Tipologie regionali — gradazione indicativa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-border">
            {beerTypes.map((beer) => (
              <div
                key={beer.name}
                className="border-b border-r border-border p-8 group hover:bg-primary/5 transition-colors duration-200"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-3">
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

                {/* Style + colour tags */}
                <div className="flex gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase border border-border px-2 py-0.5 text-muted-foreground">
                    {beer.style}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase border border-border px-2 py-0.5 text-muted-foreground">
                    {beer.color}
                  </span>
                </div>

                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {beer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/birra"
              className="inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors"
            >
              Esplora tutta la cultura brassicola
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
