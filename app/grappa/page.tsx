import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'La Grappa Italiana — Storia, Produzione e Cultura | Italian Grappa Culture',
  description:
    'Tutto sulla grappa italiana: origini storiche, processo di distillazione, varietà regionali, gradazioni alcoliche e patrimonio culturale del distillato nazionale italiano.',
  alternates: { canonical: '/grappa' },
  openGraph: {
    title: 'La Grappa Italiana — Storia, Produzione e Cultura',
    description: 'Approfondimento completo sulla grappa: origine, distillazione, tipologie e cultura.',
    images: [{ url: '/images/grappa-detail.jpg', alt: 'Grappa italiana in bicchiere' }],
  },
}

const regions = [
  {
    name: 'Trentino',
    description:
      'Il Trentino è patria di una tradizione distillatoria secolare. Le vinacce di Marzemino, Teroldego e Nosiola danno origine a grappe eleganti, floreali, di grande finezza aromatica.',
    style: 'Aromatica e floreale',
    abv: '40 – 50% vol.',
  },
  {
    name: 'Friuli Venezia Giulia',
    description:
      'La grappa friulana si distingue per la sua pulizia olfattiva e la raffinatezza tecnica. La Picolit, la Ribolla Gialla e il Ramandolo producono grappe monovitigno di eccelsa qualità.',
    style: 'Pulita e minerale',
    abv: '38 – 52% vol.',
  },
  {
    name: 'Piemonte',
    description:
      'In Piemonte la grappa nasce dalle vinacce di Nebbiolo, Barbera e Moscato. La grappa di Barolo, ottenuta dalle vinacce del re dei vini piemontesi, è tra le più celebri d\'Italia.',
    style: 'Strutturata e complessa',
    abv: '40 – 55% vol.',
  },
  {
    name: 'Veneto',
    description:
      'La grappa veneta esprime la varietà di un territorio vastissimo: dalle Valpolicelle alle Prosecco Hills, ogni zona regala caratteristiche aromatiche uniche e profili sensoriali distinti.',
    style: 'Versatile e fruttata',
    abv: '40 – 50% vol.',
  },
  {
    name: 'Lombardia',
    description:
      'Le vinacce della Franciacorta e della Valtellina danno vita a grappe di alta montagna, con note alpine di erbe e fiori. L\'invecchiamento in barriques aggiunge struttura e armonia.',
    style: 'Alpina ed erbacea',
    abv: '42 – 55% vol.',
  },
  {
    name: 'Alto Adige',
    description:
      'La fusione tra tradizione italiana e influenza austro-tirolese crea grappe di rara precisione tecnica. Vinacce di Gewürztraminer e Pinot Grigio producono distillati molto aromatici.',
    style: 'Speziata e precisa',
    abv: '40 – 48% vol.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Raccolta e pressatura dell\'uva',
    text:
      'Terminata la vinificazione, le vinacce — bucce, vinaccioli e raspi fermentati — vengono raccolte con cura. La rapidità di lavorazione è fondamentale per preservarne le qualità aromatiche.',
  },
  {
    step: '02',
    title: 'Fermentazione delle vinacce',
    text:
      'Se non già avvenuta durante la vinificazione, le vinacce vengono sottoposte a fermentazione alcolica controllata. I lieviti trasformano gli zuccheri residui in alcol etilico.',
  },
  {
    step: '03',
    title: 'Distillazione in alambicco',
    text:
      'Il cuore del processo. Il vapore riscalda le vinacce in modo indiretto, estraendone i componenti volatili. Il distillatore "taglia" la testa e la coda, conservando solo il cuore nobile.',
  },
  {
    step: '04',
    title: 'Riduzione e affinamento',
    text:
      'La grappa viene ridotta alla gradazione finale con acqua distillata o demineralizzata. Può essere imbottigliata giovane o avviata all\'affinamento in legno per i tipi invecchiati.',
  },
]

export default function GrappaPage() {
  return (
    <>
      {/* Page hero */}
      <div className="relative pt-16 min-h-[55vh] flex items-end overflow-hidden bg-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/grappa-regions.jpg')" }}
          role="img"
          aria-label="Vigneti italiani a terrazze al tramonto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <p className="font-mono text-xs tracking-widest uppercase text-background/50 mb-4">
            Il Distillato Nazionale
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-background leading-none text-balance max-w-2xl">
            La <span className="italic font-medium">Grappa</span> Italiana
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-background" aria-labelledby="grappa-intro">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 id="grappa-intro" className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">
                Un distillato con 700 anni di storia
              </h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
                La grappa è l&apos;unico distillato al mondo ottenuto esclusivamente
                dalla distillazione delle vinacce — i sottoprodotti solidi della
                vinificazione — e prodotto interamente in Italia. Questa unicità
                è sancita dalla normativa europea, che riserva la denominazione
                &quot;Grappa&quot; ai soli prodotti di origine italiana.
              </p>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
                Le origini risalgono al Medioevo, quando i monaci delle Alpi
                nordorientali scoprirono che dalla distillazione delle vinacce
                era possibile ottenere un distillato dalle proprietà curative e
                dal carattere inconfondibile. Da bevanda povera dei contadini
                a simbolo dell&apos;eccellenza italiana: questo è il percorso
                della grappa nel corso dei secoli.
              </p>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Oggi la grappa è protagonista di un rinascimento culturale e
                artigianale. I piccoli distillatori custodiscono tecniche
                tradizionali affiancandole all&apos;innovazione, producendo
                distillati di qualità elevatissima riconosciuti in tutto il mondo.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border-t border-border pt-5">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2">Gradazione minima</p>
                <p className="font-serif text-4xl font-light text-primary">37,5% <span className="font-mono text-base text-muted-foreground">vol.</span></p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2">Gradazione massima</p>
                <p className="font-serif text-4xl font-semibold text-primary">60% <span className="font-mono text-base text-muted-foreground">vol.</span></p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2">Materia prima</p>
                <p className="font-mono text-sm text-foreground">Sole vinacce italiane</p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2">Tutela legale</p>
                <p className="font-mono text-sm text-foreground">Reg. CE n. 110/2008</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <Image
          src="/images/tradition.jpg"
          alt="Alambicco in rame per la distillazione della grappa"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-serif text-2xl md:text-4xl italic text-background font-light text-center text-balance px-6">
            &quot;La grappa è il riassunto di tutta la civiltà contadina italiana&quot;
          </p>
        </div>
      </div>

      {/* Process */}
      <section className="py-20 md:py-32 bg-cream-deep" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4 text-center">Arte e Tecnica</p>
          <h2 id="process-heading" className="font-serif text-4xl md:text-5xl font-light text-foreground text-center text-balance mb-16">
            Il processo di distillazione
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-border">
            {processSteps.map((step) => (
              <div key={step.step} className="border-b border-r border-border p-8 md:p-10">
                <p className="font-serif text-5xl font-light text-primary/30 mb-4">{step.step}</p>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3">{step.title}</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 md:py-32 bg-background" aria-labelledby="regions-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4 text-center">Espressioni Territoriali</p>
          <h2 id="regions-heading" className="font-serif text-4xl md:text-5xl font-light text-foreground text-center text-balance mb-16">
            La grappa nelle regioni italiane
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
            {regions.map((region) => (
              <div key={region.name} className="border-b border-r border-border p-8">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-1">{region.name}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{region.style}</span>
                  <span className="strength-badge">{region.abv}</span>
                </div>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grappa image + types */}
      <section className="py-20 md:py-32 bg-cream-deep" aria-labelledby="types-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Tipologie principali</p>
              <h2 id="types-heading" className="font-serif text-4xl md:text-5xl font-light text-foreground text-balance mb-10">
                Come si classifica la grappa
              </h2>
              <div className="flex flex-col divide-y divide-border">
                {[
                  { name: 'Grappa Giovane', abv: '37,5 – 60% vol.', desc: 'Non subisce affinamento in legno. Il profilo aromatico è diretto, fruttato e floreale, fedele alla materia prima.' },
                  { name: 'Grappa Affinata', abv: '37,5 – 60% vol.', desc: 'Riposa in legno per almeno 12 mesi. Acquista morbidezza e note speziate mantenendo la vivacità.' },
                  { name: 'Grappa Invecchiata', abv: '38 – 60% vol.', desc: 'Affinata per almeno 18 mesi in piccole botti. Colore ambrato, complessità aromatica elevata.' },
                  { name: 'Grappa Stravecchia / Riserva', abv: '38 – 60% vol.', desc: 'Almeno 18 mesi di invecchiamento. La Riserva richiede un minimo di 5 anni per raggiungere la massima espressione.' },
                  { name: 'Grappa Aromatica', abv: '37,5 – 60% vol.', desc: 'Prodotta da vinacce di uve aromatiche (Moscato, Gewürztraminer, Brachetto). Profumi intensi di fiori e frutta.' },
                  { name: 'Grappa Monovitigno', abv: '37,5 – 60% vol.', desc: 'Da un unico vitigno, in purezza. Permette di apprezzare le qualità specifiche di ogni varietà d\'uva.' },
                ].map((type) => (
                  <div key={type.name} className="py-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-lg font-medium text-foreground">{type.name}</h3>
                      <span className="strength-badge shrink-0">{type.abv}</span>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/grappa-detail.jpg"
                  alt="Bicchiere di grappa con vinacce italiane"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-2/3 h-2/3 border border-border -z-10" aria-hidden="true" />
            </div>
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
