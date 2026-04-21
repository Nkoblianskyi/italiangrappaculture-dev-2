import Image from 'next/image'

const facts = [
  {
    number: 'IX',
    label: 'Secolo',
    description:
      'Le prime testimonianze documentate della distillazione delle vinacce in Italia risalgono al Medioevo, nelle Alpi del Nord-Est.',
  },
  {
    number: '150+',
    label: 'Vitigni',
    description:
      'L\'Italia è il paese con la maggiore biodiversità viticola al mondo. Ogni vitigno regala alla grappa un carattere distintivo e irripetibile.',
  },
  {
    number: '100%',
    label: 'Italiana',
    description:
      'Per legge europea, la grappa può essere prodotta e imbottigliata esclusivamente in Italia, a garanzia di autenticità e qualità.',
  },
]

const traditions = [
  {
    title: 'La distillazione artigianale',
    text:
      'Il cuore del processo è la caldaia a vapore indiretto, che scalda le vinacce senza bruciarle. L\'alambicco in rame, forgiato a mano, è l\'eredità viva di secoli di sapienza distillatoria.',
  },
  {
    title: 'Il rito della condivisione',
    text:
      'In molte famiglie italiane, la grappa è il "resentin" — il piccolo sorso nel fondo della tazzina di caffè. Un gesto quotidiano che unisce generazioni e racconta l\'identità di un popolo.',
  },
  {
    title: 'L\'invecchiamento in legno',
    text:
      'La grappa invecchiata riposa in botti di rovere, castagno o ciliegio. Il legno cede alla grappa colore ambrato, tannini e aromi complessi: vaniglia, spezie, frutta secca.',
  },
  {
    title: 'Le denominazioni geografiche',
    text:
      'Friuli, Trentino, Piemonte, Veneto, Lombardia: ogni indicazione geografica garantisce che il distillato nasca dal terroir locale, rispettando rigidi disciplinari di produzione.',
  },
]

export function TraditionSection() {
  return (
    <section
      className="py-24 md:py-36 bg-cream-deep"
      aria-labelledby="tradition-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
            Radici &amp; Storia
          </p>
          <h2
            id="tradition-heading"
            className="font-serif text-4xl md:text-6xl font-light text-foreground text-balance max-w-3xl mx-auto"
          >
            Tradizione,{' '}
            <span className="italic">cultura</span>{' '}
            e identità italiana
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-24 border-t border-border">
          {facts.map((fact) => (
            <div
              key={fact.number}
              className="border-b md:border-b-0 md:border-r border-border last:border-r-0 pt-10 pb-8 md:px-8 first:pl-0 last:pr-0"
            >
              <p className="font-serif text-6xl md:text-7xl font-light text-primary mb-2 leading-none">
                {fact.number}
              </p>
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
                {fact.label}
              </p>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {fact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/tradition.jpg"
                alt="Alambicco in rame per la distillazione artigianale della grappa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute -top-4 -left-4 w-1/2 h-1/2 border border-border -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Traditions list */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            {traditions.map((item, i) => (
              <div
                key={item.title}
                className={`py-8 ${i < traditions.length - 1 ? 'border-b border-border' : ''}`}
              >
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
