import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Italian Grappa Culture',
  description: 'Informativa sulla privacy del sito italiangrappaculture.com: trattamento dei dati personali, diritti degli utenti e basi giuridiche ai sensi del GDPR.',
  robots: { index: false, follow: false },
}

function getUpdateDate() {
  const now = new Date()
  return now.toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default function PrivacyPolicyPage() {
  const updateDate = getUpdateDate()

  return (
    <>
      <div className="pt-32 pb-12 bg-cream-deep">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Documenti Legali</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground text-balance mb-4">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-muted-foreground">
            Ultimo aggiornamento: {updateDate}
          </p>
        </div>
      </div>

      <article className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="font-mono text-sm text-muted-foreground leading-relaxed space-y-10">

            <section aria-labelledby="privacy-intro">
              <h2 id="privacy-intro" className="font-serif text-2xl font-medium text-foreground mb-4">1. Titolare del trattamento</h2>
              <p className="mb-3">
                Il titolare del trattamento dei dati personali relativi al sito
                italiangrappaculture.com è il gestore del portale, raggiungibile
                al seguente indirizzo email:{' '}
                <a href="mailto:info@italiangrappaculture.com" className="text-foreground underline hover:text-primary transition-colors">
                  info@italiangrappaculture.com
                </a>
              </p>
              <p>
                Il sito italiangrappaculture.com ha finalità esclusivamente informative e culturali.
                Non vengono effettuate operazioni commerciali di alcun tipo.
              </p>
            </section>

            <section aria-labelledby="privacy-data-types">
              <h2 id="privacy-data-types" className="font-serif text-2xl font-medium text-foreground mb-4">2. Tipologie di dati trattati</h2>

              <div className="border-t border-border pt-5 mb-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">2.1 Dati di navigazione</h3>
                <p>
                  I sistemi informatici preposti al funzionamento del sito acquisiscono,
                  nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione
                  è implicita nell&apos;uso dei protocolli di comunicazione di Internet. Tali dati
                  (indirizzi IP, tipo di browser, sistema operativo, ora della richiesta, ecc.)
                  sono trattati esclusivamente per finalità tecniche e di sicurezza e vengono
                  cancellati dopo un massimo di 7 giorni.
                </p>
              </div>

              <div className="border-t border-border pt-5 mb-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">2.2 Dati forniti volontariamente dall&apos;utente</h3>
                <p>
                  L&apos;invio facoltativo, esplicito e volontario di messaggi tramite il modulo
                  di contatto comporta la successiva acquisizione dei dati inseriti (nome,
                  indirizzo email, testo del messaggio). Tali dati sono utilizzati esclusivamente
                  per rispondere alla richiesta dell&apos;utente.
                </p>
              </div>

              <div className="border-t border-border pt-5">
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">2.3 Cookie</h3>
                <p>
                  Il sito utilizza esclusivamente cookie tecnici necessari. Per maggiori informazioni
                  consultare la{' '}
                  <Link href="/cookie-policy" className="text-foreground underline hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section aria-labelledby="privacy-purposes">
              <h2 id="privacy-purposes" className="font-serif text-2xl font-medium text-foreground mb-4">3. Finalità e basi giuridiche del trattamento</h2>
              <div className="space-y-4">
                {[
                  {
                    finalita: 'Risposta alle richieste di contatto',
                    base: 'Legittimo interesse del titolare (Art. 6, par. 1, lett. f GDPR)',
                    durata: '12 mesi dalla ricezione del messaggio',
                  },
                  {
                    finalita: 'Sicurezza e funzionamento del sito',
                    base: 'Legittimo interesse del titolare (Art. 6, par. 1, lett. f GDPR)',
                    durata: '7 giorni',
                  },
                ].map((item) => (
                  <div key={item.finalita} className="border border-border p-5">
                    <p className="font-semibold text-foreground mb-1">{item.finalita}</p>
                    <p className="mb-1"><span className="text-foreground">Base giuridica:</span> {item.base}</p>
                    <p><span className="text-foreground">Conservazione:</span> {item.durata}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="privacy-no-share">
              <h2 id="privacy-no-share" className="font-serif text-2xl font-medium text-foreground mb-4">4. Comunicazione a terzi</h2>
              <p>
                I dati personali degli utenti non vengono ceduti, venduti o comunicati a terze parti
                a scopo commerciale o pubblicitario. I dati possono essere trattati da fornitori
                tecnici (hosting, infrastruttura) che operano in qualità di responsabili del trattamento
                ai sensi dell&apos;Art. 28 GDPR, vincolati da idonee garanzie contrattuali.
              </p>
            </section>

            <section aria-labelledby="privacy-rights">
              <h2 id="privacy-rights" className="font-serif text-2xl font-medium text-foreground mb-4">5. Diritti degli interessati</h2>
              <p className="mb-4">
                Ai sensi degli Artt. 15 e ss. del Regolamento UE 2016/679 (GDPR), ogni utente ha il
                diritto di:
              </p>
              <ul className="space-y-2">
                {[
                  'Accedere ai propri dati personali (Art. 15 GDPR)',
                  'Ottenere la rettifica dei dati inesatti (Art. 16 GDPR)',
                  'Ottenere la cancellazione dei dati (Art. 17 GDPR)',
                  'Opporsi al trattamento (Art. 21 GDPR)',
                  'Richiedere la limitazione del trattamento (Art. 18 GDPR)',
                  'Proporre reclamo all\'Autorità Garante per la protezione dei dati personali',
                ].map((right) => (
                  <li key={right} className="flex items-start gap-2">
                    <span className="text-primary shrink-0" aria-hidden="true">&#8212;</span>
                    {right}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Per esercitare i propri diritti, è possibile contattarci all&apos;indirizzo:{' '}
                <a href="mailto:info@italiangrappaculture.com" className="text-foreground underline hover:text-primary transition-colors">
                  info@italiangrappaculture.com
                </a>
              </p>
            </section>

            <section aria-labelledby="privacy-gdpr">
              <h2 id="privacy-gdpr" className="font-serif text-2xl font-medium text-foreground mb-4">6. Normativa di riferimento</h2>
              <ul className="space-y-1">
                <li>Regolamento UE 2016/679 (GDPR)</li>
                <li>D.Lgs. n. 196/2003 (Codice in materia di protezione dei dati personali)</li>
                <li>D.Lgs. n. 101/2018 (adeguamento del Codice Privacy al GDPR)</li>
              </ul>
            </section>

            <section aria-labelledby="privacy-updates">
              <h2 id="privacy-updates" className="font-serif text-2xl font-medium text-foreground mb-4">7. Aggiornamenti della presente informativa</h2>
              <p>
                La presente informativa può essere aggiornata in qualsiasi momento. La data
                dell&apos;ultimo aggiornamento è indicata in cima al documento e viene aggiornata
                automaticamente ad ogni modifica. Si invita l&apos;utente a consultare periodicamente
                questa pagina.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
            <Link
              href="/cookie-policy"
              className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Leggi la Cookie Policy &#8594;
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
