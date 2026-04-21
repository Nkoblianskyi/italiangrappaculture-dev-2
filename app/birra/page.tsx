import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Birra Italiana — Cultura Brassicola e Tradizioni Regionali | Italian Grappa Culture',
  description:
    'La birra artigianale italiana: storia dei birrifici locali, culture dei pub regionali, tipologie e gradazioni alcoliche. Scopri la ricchezza brassicola dell\'Italia.',
  alternates: { canonical: '/birra' },
  openGraph: {
    title: 'Birra Italiana — Cultura Brassicola e Tradizioni Regionali',
    description: 'Approfondimento sulla birra artigianale italiana e la cultura dei pub locali.',
    images: [{ url: '/images/birra-italiana.jpg', alt: 'Birra artigianale italiana' }],
  },
}

const beers = [
  {
    name: 'Lager Alpina',
    style: 'Lager / Pilsner',
    abv: '4,2 – 5,0% vol.',
    color: 'Giallo paglierino',
    aroma: 'Floreale, cerealicolo, leggermente erbaceo',
    region: 'Trentino, Alto Adige, Friuli',
    description:
      'La Lager alpina nasce dall\'influenza austro-tedesca sulle regioni del Nord-Est. Fermentazione bassa, lunga maturazione a freddo, limpidezza cristallina. Il perfetto equilibrio tra amaro e dolce.',
  },
  {
    name: 'Birra Ambrata Italiana',
    style: 'Amber Ale / Märzen',
    abv: '4,8 – 6,0% vol.',
    color: 'Ramato / Ambrato',
    aroma: 'Caramello, malto tostato, frutti secchi',
    region: 'Toscana, Umbria, Lazio',
    description:
      'L\'ambrata italiana interpreta il classico stile Märzen con malti locali. Il corpo medio-pieno e la dolcezza bilanciata la rendono ideale per accompagnare la cucina tradizionale del Centro Italia.',
  },
  {
    name: 'Birra Rossa del Sud',
    style: 'Red Ale',
    abv: '5,0 – 6,5% vol.',
    color: 'Rosso rubino',
    aroma: 'Frutti di bosco, malto caramellato, spezie',
    region: 'Campania, Sicilia, Calabria',
    description:
      'I birrifici del Sud Italia hanno sviluppato uno stile rosso dai tratti distintivi: utilizzo di ingredienti locali come arance e mandorle, amaro moderato, finale dolce e avvolgente.',
  },
  {
    name: 'Birra Bianca Veneta',
    style: 'Wheat Beer / Witbier',
    abv: '4,5 – 5,5% vol.',
    color: 'Giallo velato',
    aroma: 'Coriandolo, agrumi, lievito fresco',
    region: 'Veneto, Friuli Venezia Giulia',
    description:
      'Prodotta con frumento non maltato e aromatizzata con coriandolo e scorze d\'arancia, la birra bianca del Triveneto è uno stile di grande freschezza, perfetto per l\'estate.',
  },
  {
    name: 'Birra Scura Trentina',
    style: 'Dunkel / Dark Lager',
    abv: '4,8 – 5,5% vol.',
    color: 'Bruno scuro',
    aroma: 'Cioccolato, caffè, malto tostato',
    region: 'Trentino, Alto Adige',
    description:
      'La tradizione bavarese delle regioni alpine si esprime nella birra scura a bassa fermentazione. Note di cacao e caffè, corpo rotondo, finale pulito. Complessità senza pesantezza.',
  },
  {
    name: 'IPA Italiana',
    style: 'India Pale Ale',
    abv: '5,5 – 7,5% vol.',
    color: 'Ambrato chiaro',
    aroma: 'Luppolo aromatico, agrumi, resina',
    region: 'Nazionale (Craft)',
    description:
      'Il movimento craft italiano ha abbracciato con entusiasmo lo stile IPA, reinterpretandolo con luppoli locali e internazionali. Alta intensità aromatica, amaro persistente, struttura decisa.',
  },
]

const pubCulture = [
  {
    title: 'Il pub come agorà',
    text:
      'In Italia il pub è diventato negli anni Novanta un luogo di aggregazione sociale alternativo al bar tradizionale. Non solo birra: musica dal vivo, conversazione e cultura si mescolano in questi spazi.',
  },
  {
    title: 'I birrifici artigianali aperti',
    text:
      'Il "taproom" — la mescita diretta del birrificio — è un fenomeno in forte crescita. I produttori aprono le porte, raccontano i processi e fanno vivere l\'esperienza della birra nel luogo dove nasce.',
  },
  {
    title: 'Il cibo e la birra',
    text:
      'La cultura italiana del cibo si intreccia con quella della birra in modo sempre più consapevole. Ogni stile brassicolo trova il suo abbinamento ideale nella ricca tradizione gastronomica regionale.',
  },
]

export default function BirraPage() {
  return (
    <>
      {/* Page hero */}
      <div className="relative pt-16 min-h-[55vh] flex items-end overflow-hidden bg-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/birra-pub.jpg')" }}
          role="img"
          aria-label="Interno di un pub artigianale italiano"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <p className="font-mono text-xs tracking-widest uppercase text-background/50 mb-4">
            Cultura Brassicola
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-background leading-none text-balance max-w-2xl">
            Birra <span className="italic font-medium">Artigianale</span><br />Italiana
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-background" aria-labelledby="birra-intro">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 id="birra-intro" className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">
                Il rinascimento brassicolo italiano
              </h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
                Dagli anni Novanta in poi, l&apos;Italia ha assistito a una vera
                rivoluzione nel mondo della birra. I piccoli birrifici artigianali
                hanno trasformato il paesaggio brassicolo nazionale, portando
                qualità, creatività e identità territoriale in un mercato
                dominato per secoli dalla produzione industriale.
              </p>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
                Oggi l&apos;Italia conta migliaia di birrifici artigianali distribuiti
                in tutto il territorio nazionale, dagli archi alpini del Nord
                alle isole del Mediterraneo. Ogni zona porta il suo contributo:
                ingredienti locali, influenze culturali diverse, un approccio
                che fonde tradizione e sperimentazione.
              </p>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                La birra italiana non compete con le grandi tradizioni del
                Nord Europa: le omaggia, le interpreta e crea qualcosa di
                inedito, profondamente italiano nel gusto e nell&apos;approccio.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {[
                { label: 'Gradazione media Lager', value: '4,5% vol.' },
                { label: 'Gradazione media Ale', value: '5,0% vol.' },
                { label: 'Gradazione media IPA', value: '6,0% vol.' },
                { label: 'Normativa di riferimento', value: 'D.Lgs. n. 35/2010' },
              ].map((item) => (
                <div key={item.label} className="border-t border-border pt-4">
                  <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-mono text-sm font-medium text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beer grid */}
      <section className="py-20 md:py-32 bg-cream-deep" aria-labelledby="beers-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4 text-center">Tipologie e Gradazioni</p>
          <h2 id="beers-heading" className="font-serif text-4xl md:text-5xl font-light text-foreground text-center text-balance mb-16">
            Stili e regioni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-border">
            {beers.map((beer) => (
              <div key={beer.name} className="border-b border-r border-border p-8">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-2xl font-medium text-foreground">{beer.name}</h3>
                  <span className="strength-badge shrink-0" aria-label={`Gradazione: ${beer.abv}`}>{beer.abv}</span>
                </div>
                <p className="font-mono text-xs tracking-wider uppercase text-muted-foreground mb-1">{beer.style}</p>
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  {beer.region} &nbsp;|&nbsp; {beer.color} &nbsp;|&nbsp; {beer.aroma}
                </p>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">{beer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/birra-italiana.jpg"
          alt="Birra artigianale italiana in un bicchiere illuminato dalla luce naturale"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Pub culture */}
      <section className="py-20 md:py-32 bg-background" aria-labelledby="pub-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4 text-center">Cultura e Socialità</p>
          <h2 id="pub-heading" className="font-serif text-4xl md:text-5xl font-light text-foreground text-center text-balance mb-16">
            La cultura del pub in Italia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
            {pubCulture.map((item, i) => (
              <div
                key={item.title}
                className={`pt-10 pb-8 ${i < pubCulture.length - 1 ? 'md:pr-10 md:mr-10 md:border-r border-border' : ''}`}
              >
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">{item.title}</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back nav */}
      <div className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Torna alla home"
          >
            <span aria-hidden="true">&#8592;</span>
            Torna alla home
          </Link>
        </div>
      </div>
    </>
  )
}
