import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy | Italian Grappa Culture',
  description: 'Informativa sui cookie del sito italiangrappaculture.com: tipologie di cookie utilizzati, finalità e modalità di gestione del consenso.',
  robots: { index: false, follow: false },
}

function getUpdateDate() {
  const now = new Date()
  return now.toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default function CookiePolicyPage() {
  const updateDate = getUpdateDate()

  return (
    <>
      <div className="pt-32 pb-12 bg-cream-deep">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Documenti Legali</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground text-balance mb-4">
            Cookie Policy
          </h1>
          <p className="font-mono text-xs text-muted-foreground">
            Ultimo aggiornamento: {updateDate}
          </p>
        </div>
      </div>

      <article className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="prose-custom font-mono text-sm text-muted-foreground leading-relaxed space-y-10">

            <section aria-labelledby="intro-cookie">
              <h2 id="intro-cookie" className="font-serif text-2xl font-medium text-foreground mb-4">1. Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web visitati dagli utenti inviano ai loro
                terminali (computer, tablet, smartphone), dove vengono memorizzati per essere poi
                ritrasmessi agli stessi siti alla visita successiva. I cookie sono utilizzati per diverse
                finalità: eseguire autenticazioni informatiche, monitorare sessioni, memorizzare
                informazioni sui siti visitati.
              </p>
            </section>

            <section aria-labelledby="cookie-types">
              <h2 id="cookie-types" className="font-serif text-2xl font-medium text-foreground mb-4">2. Tipologie di cookie utilizzati</h2>

              <div className="border-t border-border pt-5 mb-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">2.1 Cookie tecnici necessari</h3>
                <p className="mb-3">
                  Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento
                  del portale. Tali cookie non richiedono il consenso dell&apos;utente ai sensi del
                  Provvedimento del Garante per la protezione dei dati personali dell&apos;8 maggio 2014.
                </p>
                <div className="bg-secondary p-4 border-l-2 border-primary">
                  <p className="font-semibold text-foreground mb-1">igc_cookie_consent</p>
                  <p>Memorizza la preferenza dell&apos;utente in merito all&apos;accettazione dei cookie. Durata: 365 giorni. Origine: first-party.</p>
                </div>
              </div>

              <div className="border-t border-border pt-5">
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">2.2 Cookie di profilazione</h3>
                <p>
                  Questo sito <strong className="text-foreground">non utilizza</strong> cookie di profilazione,
                  cookie di marketing, cookie di tracciamento comportamentale o strumenti di analisi
                  che prevedano il trasferimento di dati a terze parti.
                </p>
              </div>
            </section>

            <section aria-labelledby="cookie-third-party">
              <h2 id="cookie-third-party" className="font-serif text-2xl font-medium text-foreground mb-4">3. Cookie di terze parti</h2>
              <p>
                Il sito non integra servizi di terze parti che richiedano il posizionamento di cookie
                sul dispositivo dell&apos;utente (es. social media, strumenti di analisi, reti pubblicitarie).
              </p>
            </section>

            <section aria-labelledby="cookie-management">
              <h2 id="cookie-management" className="font-serif text-2xl font-medium text-foreground mb-4">4. Gestione e disabilitazione dei cookie</h2>
              <p className="mb-3">
                L&apos;utente può gestire o disabilitare i cookie attraverso le impostazioni del proprio
                browser. Si ricorda che la disabilitazione dei cookie tecnici potrebbe pregiudicare
                il corretto funzionamento del sito.
              </p>
              <p>
                Le istruzioni per la gestione dei cookie nei principali browser sono disponibili
                sulla documentazione ufficiale di ciascun produttore di browser.
              </p>
            </section>

            <section aria-labelledby="cookie-references">
              <h2 id="cookie-references" className="font-serif text-2xl font-medium text-foreground mb-4">5. Riferimenti normativi</h2>
              <ul className="list-none space-y-2">
                <li>Direttiva 2002/58/CE (Direttiva ePrivacy)</li>
                <li>Regolamento UE 2016/679 (GDPR)</li>
                <li>D.Lgs. n. 196/2003 (Codice Privacy) e successive modifiche</li>
                <li>Provvedimento Garante Privacy n. 229 dell&apos;8 maggio 2014</li>
              </ul>
            </section>

            <section aria-labelledby="cookie-contact">
              <h2 id="cookie-contact" className="font-serif text-2xl font-medium text-foreground mb-4">6. Contatti</h2>
              <p>
                Per qualsiasi domanda relativa alla presente Cookie Policy, è possibile contattarci
                all&apos;indirizzo:{' '}
                <a
                  href="mailto:info@italiangrappaculture.com"
                  className="text-foreground underline hover:text-primary transition-colors"
                >
                  info@italiangrappaculture.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
            <Link
              href="/privacy-policy"
              className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Leggi la Privacy Policy &#8594;
            </Link>
            <Link
              href="/"
              className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              &#8592; Torna alla home
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
