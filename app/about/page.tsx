'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FormState {
  nome: string
  email: string
  messaggio: string
  consenso: boolean
}

const initialForm: FormState = {
  nome: '',
  email: '',
  messaggio: '',
  consenso: false,
}

export default function AboutPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {}
    if (!form.nome.trim()) newErrors.nome = 'Il nome è obbligatorio.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Inserisci un indirizzo email valido.'
    if (!form.messaggio.trim() || form.messaggio.length < 10)
      newErrors.messaggio = 'Il messaggio deve contenere almeno 10 caratteri.'
    if (!form.consenso) newErrors.consenso = 'Devi accettare il trattamento dei dati.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Simulate sending
    await new Promise((res) => setTimeout(res, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target
    const value =
      target instanceof HTMLInputElement && target.type === 'checkbox'
        ? target.checked
        : target.value
    setForm((prev) => ({ ...prev, [target.name]: value }))
    if (errors[target.name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [target.name]: undefined }))
    }
  }

  return (
    <>
      {/* Page hero */}
      <div className="pt-32 pb-20 bg-cream-deep">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-5">
            Il Progetto
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground text-balance max-w-3xl leading-none mb-8">
            Chi <span className="italic font-medium">siamo</span>
          </h1>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-xl">
            Italian Grappa Culture è un portale informativo dedicato alla cultura
            delle bevande italiane. Il nostro impegno è divulgare storia,
            tradizioni e patrimonio enogastronomico dell&apos;Italia con rigore e passione.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 bg-background" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 id="mission-heading" className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8">
                La nostra missione
              </h2>
              <div className="flex flex-col divide-y divide-border">
                {[
                  {
                    title: 'Informare',
                    text: 'Offriamo contenuti accurati, imparziali e aggiornati sulla grappa, sulla birra artigianale e sulle bevande tradizionali italiane. Nessuna promozione commerciale, solo cultura.',
                  },
                  {
                    title: 'Preservare',
                    text: 'Le tradizioni distillatorie e brassicole italiane sono patrimonio vivo. Documentarle e renderle accessibili è il nostro contributo alla loro continuità.',
                  },
                  {
                    title: 'Educare',
                    text: 'Il consumo consapevole e responsabile dell\'alcol è al centro di ogni contenuto che pubblichiamo. Non promuoviamo il consumo eccessivo né alcuna forma di dipendenza.',
                  },
                ].map((item) => (
                  <div key={item.title} className="py-7">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="border border-border p-8 md:p-10 mb-8">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Dichiarazione importante</p>
                <p className="font-serif text-xl italic text-foreground leading-relaxed mb-4">
                  Questo sito non vende prodotti, non offre servizi commerciali
                  e non contiene link affiliati ad alcun produttore.
                </p>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  Tutti i contenuti hanno finalità esclusivamente informative e culturali.
                  Le informazioni sulle gradazioni alcoliche sono indicative e a scopo divulgativo.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Avviso responsabile</p>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  Il consumo di alcol deve avvenire con moderazione e responsabilità.
                  I contenuti di questo sito sono destinati esclusivamente a persone maggiorenni.
                  Se ritieni di avere problemi legati al consumo di alcol, rivolgiti a un medico
                  o a un servizio specializzato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-20 md:py-32 bg-cream-deep" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-5">Scrivici</p>
              <h2 id="contact-heading" className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
                Contattaci
              </h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-10">
                Per domande sui contenuti, segnalazioni di errori o richieste
                di collaborazione editoriale, puoi scriverci al seguente indirizzo
                o utilizzare il modulo di contatto.
              </p>
              <div className="border-t border-border pt-6">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2">Email</p>
                <a
                  href="mailto:info@italiangrappaculture.com"
                  className="font-mono text-sm text-foreground hover:text-primary transition-colors"
                >
                  info@italiangrappaculture.com
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-labelledby="contact-heading"
              >
                {/* Nome */}
                <div className="mb-6">
                  <label
                    htmlFor="nome"
                    className="block font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2"
                  >
                    Nome e cognome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    autoComplete="name"
                    className="w-full bg-background border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Il tuo nome"
                    aria-invalid={!!errors.nome}
                    aria-describedby={errors.nome ? 'nome-error' : undefined}
                  />
                  {errors.nome && (
                    <p id="nome-error" className="font-mono text-xs text-destructive mt-1" role="alert">
                      {errors.nome}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2"
                  >
                    Indirizzo email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="w-full bg-background border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    placeholder="la.tua@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="font-mono text-xs text-destructive mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Messaggio */}
                <div className="mb-6">
                  <label
                    htmlFor="messaggio"
                    className="block font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    value={form.messaggio}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-background border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Scrivi il tuo messaggio..."
                    aria-invalid={!!errors.messaggio}
                    aria-describedby={errors.messaggio ? 'messaggio-error' : undefined}
                  />
                  {errors.messaggio && (
                    <p id="messaggio-error" className="font-mono text-xs text-destructive mt-1" role="alert">
                      {errors.messaggio}
                    </p>
                  )}
                </div>

                {/* Checkbox */}
                <div className="mb-8">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consenso"
                      checked={form.consenso}
                      onChange={handleChange}
                      className="mt-0.5 shrink-0 w-4 h-4 border border-border bg-background checked:bg-primary checked:border-primary focus:outline-none cursor-pointer"
                      aria-invalid={!!errors.consenso}
                      aria-describedby={errors.consenso ? 'consenso-error' : undefined}
                    />
                    <span className="font-mono text-xs text-muted-foreground leading-relaxed">
                      Acconsento al trattamento dei miei dati personali ai sensi del Reg. UE 2016/679 (GDPR)
                      per il solo scopo di rispondere alla mia richiesta. Consulta la{' '}
                      <Link href="/privacy-policy" className="underline hover:text-foreground">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                  {errors.consenso && (
                    <p id="consenso-error" className="font-mono text-xs text-destructive mt-1" role="alert">
                      {errors.consenso}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-foreground text-background font-mono text-xs tracking-widest uppercase py-4 hover:bg-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Invio in corso...' : 'Invia messaggio'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success popup */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-heading"
        >
          <div className="bg-background max-w-md w-full p-10 relative">
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Messaggio inviato
            </p>
            <h2 id="popup-heading" className="font-serif text-3xl font-light text-foreground mb-4">
              Grazie per averci scritto
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">
              Abbiamo ricevuto il tuo messaggio. Ti risponderemo il prima possibile
              all&apos;indirizzo email che hai indicato.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setForm(initialForm)
              }}
              className="font-mono text-xs tracking-widest uppercase bg-foreground text-background px-8 py-3 hover:bg-primary transition-colors"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}

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
