import Image from 'next/image'

const lightDrinks = [
  {
    name: 'Vino da Tavola',
    abv: 'fino a 12% vol.',
    description:
      'Il vino da tavola italiano, frutto di vitigni autoctoni, accompagna ogni pasto con naturalezza. Bianco, rosso o rosato, esprime il carattere del suo territorio.',
    note: 'Bevanda tradizionale della tavola italiana',
  },
  {
    name: 'Vino Frizzante',
    abv: 'circa 8% vol.',
    description:
      'Leggermente effervescente, fresco e profumato. Prodotto nei Colli Euganei, nelle Langhe e in tante altre denominazioni minori di grande fascino.',
    note: 'Nota frizzante naturale o rifermentata',
  },
  {
    name: 'Sidro di Mele',
    abv: 'circa 5% vol.',
    description:
      'Nelle vallate alpine del Trentino e della Val d&apos;Aosta, la tradizione del sidro di mele ha radici profonde quanto quella viticola. Leggero, profumato e dissetante.',
    note: 'Tradizione alpina norditaliana',
  },
  {
    name: 'Cerasuolo d\'Abruzzo',
    abv: 'circa 12,5% vol.',
    description:
      'Vino rosato strutturato dell&apos;Abruzzo, prodotto da uve Montepulciano. Colore ciliegia brillante, profumi di melagrana e fiori, sorso sapido e minerale.',
    note: 'Denominazione DOC regionale',
  },
  {
    name: 'Lambrusco Amabile',
    abv: 'circa 8% vol.',
    description:
      'Tipico dell&apos;Emilia-Romagna, questo rosso frizzante dolce-amabile si abbina perfettamente ai sapori intensi della cucina emiliana. Profumi di frutti di bosco.',
    note: 'Vitigno autoctono emiliano',
  },
  {
    name: 'Moscato Naturale',
    abv: 'circa 5,5% vol.',
    description:
      'Il Moscato a bassa gradazione è tra i vini da dessert più amati d&apos;Italia. Spumante leggero, dolce, con vivaci profumi di pesca bianca, albicocca e fiori d&apos;arancio.',
    note: 'Piemonte e zone meridionali',
  },
]

export function LightDrinksSection() {
  return (
    <section
      id="bevande-leggere"
      className="py-24 md:py-36 bg-cream-deep"
      aria-labelledby="light-drinks-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-5">
              Bevande Leggere Regionali
            </p>
            <h2
              id="light-drinks-heading"
              className="font-serif text-4xl md:text-6xl font-light text-foreground leading-tight text-balance"
            >
              La ricchezza<br />
              <span className="italic">leggera</span>{' '}
              dell&apos;Italia
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Oltre alla grappa, l&apos;Italia vanta una straordinaria varietà di
              bevande a bassa gradazione alcolica, radicate nelle tradizioni
              agricole e gastronomiche di ogni regione. Tutte le bevande
              presentate in questa sezione non superano il 17% vol.
            </p>
          </div>
        </div>

        {/* Drinks list */}
        <div className="relative">
          <div className="relative aspect-[21/9] overflow-hidden mb-16">
            <Image
              src="/images/bevande-leggere.jpg"
              alt="Aperitivo italiano con bevande leggere su terrazza mediterranea"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 to-transparent" />
            <div className="absolute bottom-8 left-8 md:left-10">
              <p className="font-serif text-2xl md:text-4xl italic text-background font-light text-balance max-w-md">
                Ogni regione, una storia nel bicchiere
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
            {lightDrinks.map((drink) => (
              <div
                key={drink.name}
                className="border-b border-r border-border p-8"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-serif text-xl font-medium text-foreground leading-tight">
                    {drink.name}
                  </h3>
                  <span
                    className="strength-badge shrink-0 text-nowrap"
                    aria-label={`Gradazione alcolica: ${drink.abv}`}
                  >
                    {drink.abv}
                  </span>
                </div>
                <p className="font-mono text-xs tracking-wider uppercase text-muted-foreground mb-3">
                  {drink.note}
                </p>
                <p
                  className="font-mono text-sm text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: drink.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
