import { useCallback, useEffect, useRef, useState } from 'react'
import botanica from './assets/botanica.webp'
import alcazar from './assets/alcazar-acuarela.webp'
import EnvelopeIntro from './EnvelopeIntro'
import './ArtisticApp.css'
import './CinematicMotion.css'

const weddingDate = new Date('2036-12-26T19:00:00+01:00')
const itinerary = [
  ['18:45', 'La llegada', 'Llegada de la novia'],
  ['19:00', 'El sí, quiero', 'Ceremonia'],
  ['20:00', 'Un brindis', 'Cóctel'],
  ['21:00', 'A la mesa', 'Banquete'],
  ['23:00', 'Nuestro baile', 'Baile de los novios'],
  ['00:00', 'A celebrar', 'Fiesta'],
]

function Countdown() {
  const remaining = () => Math.max(0, weddingDate.getTime() - Date.now())
  const [time, setTime] = useState(remaining)
  useEffect(() => {
    const timer = setInterval(() => setTime(remaining()), 1000)
    return () => clearInterval(timer)
  }, [])
  const values = [Math.floor(time / 86400000), Math.floor(time / 3600000) % 24, Math.floor(time / 60000) % 60, Math.floor(time / 1000) % 60]
  return <div className="ae-countdown" aria-label="Tiempo hasta la boda">
    {values.map((value, i) => <div key={i}><span>{String(value).padStart(2, '0')}</span><small>{['Días', 'Horas', 'Minutos', 'Segundos'][i]}</small></div>)}
  </div>
}

function RSVP() {
  const [sent, setSent] = useState(false)
  const resultRef = useRef(null)
  useEffect(() => { if (sent) resultRef.current?.focus() }, [sent])
  return <section className="ae-rsvp ae-section" id="confirmar" aria-labelledby="ae-rsvp-title">
    <div className="ae-rsvp-intro">
      <p className="ae-kicker">Nos falta tu sí</p>
      <h2 id="ae-rsvp-title">¿Nos acompañas?</h2>
      <p>Tenemos un sitio reservado para ti.<br />Confírmanos antes del 26 de junio de 2036.</p>
      <span className="ae-script">Contigo será más bonito</span>
    </div>
    <div className="ae-form-paper">
      <p className="ae-demo-note">Invitación de muestra · Las respuestas no se envían ni se guardan.</p>
      {sent ? <div className="ae-success">
        <span aria-hidden="true">✓</span>
        <h3 ref={resultRef} tabIndex={-1}>¡Gracias por probarla!</h3>
        <p>Así se verá la confirmación en tu invitación. Esta respuesta es solo una demostración.</p>
        <button className="ae-button" onClick={() => setSent(false)}>Probar otra respuesta</button>
      </div> : <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
        <label htmlFor="ae-family">Tu nombre o familia</label>
        <input id="ae-family" name="nombre" autoComplete="name" placeholder="Familia Pérez" required maxLength={120} />
        <label htmlFor="ae-attending">¿Podrás venir?</label>
        <select id="ae-attending" name="asistencia"><option>Sí, allí estaremos</option><option>No podremos acompañaros</option></select>
        <label htmlFor="ae-guests">Número de personas, incluyéndote</label>
        <input id="ae-guests" name="personas" type="number" min="1" max="10" defaultValue="1" required />
        <label htmlFor="ae-names">Nombres de quienes asistirán</label>
        <textarea id="ae-names" name="asistentes" rows="3" placeholder="Para preparar cada detalle…" maxLength={1000} />
        <button className="ae-button ae-button-solid" type="submit">Confirmar asistencia <span aria-hidden="true">↗</span></button>
      </form>}
    </div>
  </section>
}

function Gift() {
  const [copyStatus, setCopyStatus] = useState('')
  const account = 'ES45 2038 1234 5600 0045 7821'
  async function copy() {
    try { await navigator.clipboard.writeText(account); setCopyStatus('Cuenta de ejemplo copiada') }
    catch { setCopyStatus('Puedes seleccionar y copiar el número de cuenta.') }
  }
  return <section className="ae-gift ae-section" aria-labelledby="ae-gift-title">
    <p className="ae-kicker">El mejor regalo eres tú</p>
    <h2 id="ae-gift-title">Más recuerdos juntos</h2>
    <p>Lo que más ilusión nos hace es compartir este día contigo.<br />Si además quieres tener un detalle, puedes ayudarnos a escribir<br className="ae-desktop-break" /> el primer capítulo de nuestro viaje de novios.</p>
    <details className="ae-gift-details">
      <summary>Un detalle para nuestra luna de miel <span aria-hidden="true">+</span></summary>
      <p>Cuenta ficticia de la invitación de muestra. No realizar transferencias.</p>
      <p className="ae-account">{account}</p>
      <button className="ae-text-button" onClick={copy}>Copiar cuenta de ejemplo</button>
      <p className="ae-copy-status" role="status">{copyStatus}</p>
    </details>
  </section>
}

export default function ArtisticApp() {
  const [opened, setOpened] = useState(false)
  const [revealing, setRevealing] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [paused, setPaused] = useState(false)
  const rootRef = useRef(null)
  const headingRef = useRef(null)
  const revealInvitation = useCallback(() => setRevealing(true), [])
  const finishOpening = useCallback(() => { setRevealing(true); setOpened(true) }, [])

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(preference.matches)
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const previous = document.documentElement.style.overflow
    if (!opened) document.documentElement.style.overflow = 'hidden'
    else { document.documentElement.style.overflow = previous; headingRef.current?.focus({ preventScroll: true }) }
    return () => { document.documentElement.style.overflow = previous }
  }, [opened])

  useEffect(() => {
    if (!opened || reducedMotion || paused || !('IntersectionObserver' in window)) return
    const sections = rootRef.current.querySelectorAll('main > section, main > footer')
    const targets = []
    sections.forEach(section => {
      section.classList.add('ae-scene')
      const children = section.querySelectorAll(':scope > :not(.ae-section-number):not(.ae-botanical), .ae-story-copy > p, .ae-locations > article, .ae-itinerary li')
      children.forEach((element, index) => {
        element.classList.add('ae-reveal')
        element.style.setProperty('--ae-delay', `${Math.min(index * 100, 400)}ms`)
        targets.push(element)
      })
    })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('ae-in-view')
        observer.unobserve(entry.target)
      })
    }, { threshold: .08, rootMargin: '0px 0px -24px 0px' })
    targets.forEach(element => observer.observe(element))
    return () => {
      observer.disconnect()
      targets.forEach(element => element.classList.remove('ae-reveal', 'ae-in-view'))
    }
  }, [opened, reducedMotion, paused])

  function replay() {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setRevealing(false)
    setOpened(false)
  }

  return <div ref={rootRef} className="ae-v2" data-motion={reducedMotion ? 'reduced' : paused ? 'paused' : 'full'} style={{ '--ae-botanica': `url("${botanica}")` }}>
    {!opened && <EnvelopeIntro reducedMotion={reducedMotion || paused} onReveal={revealInvitation} onOpened={finishOpening} />}
    {opened && !reducedMotion && <button className="ae-motion-toggle" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? 'Reanudar movimiento' : 'Pausar movimiento'} <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button>}

    <main inert={!opened} className={revealing ? 'ae-opened' : 'ae-awaiting'}>
      <a className="ae-skip" href="#confirmar">Ir a confirmar asistencia</a>
      <header className="ae-hero">
        <div className="ae-botanical ae-botanical-top" aria-hidden="true" />
        <div className="ae-botanical ae-botanical-bottom" aria-hidden="true" />
        <div className="ae-hero-top"><span>Segovia, España</span><span>26 · XII · 2036</span></div>
        <div className="ae-hero-content">
          <p className="ae-kicker">Con toda la ilusión del mundo</p>
          <h1 ref={headingRef} tabIndex={-1}>Alejandro<span className="ae-ampersand">&amp;</span>Esthefany</h1>
          <div className="ae-date-line"><span>Diciembre</span><strong>26</strong><span>2036</span></div>
          <p className="ae-hero-subtitle">Nos elegimos. Nos casamos.<br />Y queremos celebrarlo contigo.</p>
          <a href="#historia" className="ae-scroll">Nuestra historia <span aria-hidden="true">↓</span></a>
        </div>
        <div className="ae-hero-bottom"><span>Una nueva vida juntos</span><span>19:00 h</span></div>
      </header>

      <section className="ae-story ae-section" id="historia" aria-labelledby="ae-story-title">
        <span className="ae-section-number" aria-hidden="true">01 / Nuestra historia</span>
        <p className="ae-kicker">Hay encuentros que lo cambian todo</p>
        <h2 id="ae-story-title">Lo nuestro,<br /><em>para siempre.</em></h2>
        <div className="ae-story-copy"><p>Hay historias que empiezan sin darse cuenta y terminan escribiendo toda una vida.</p><p>La nuestra empezó cuando menos lo esperábamos, en una cita casual. Hoy nos trae hasta aquí, listos para prometernos para siempre.</p><p>Queremos compartir este día contigo, rodeados de quienes más queremos, brindando por lo que fuimos, lo que somos y lo que seremos.</p></div>
        <p className="ae-script">Alejandro &amp; Esthefany</p>
      </section>

      <section className="ae-venue" aria-labelledby="ae-venue-title">
        <div className="ae-venue-heading"><p className="ae-kicker">Nuestro rincón favorito</p><h2 id="ae-venue-title">Donde empieza<br /><em>nuestro siempre.</em></h2></div>
        <figure><img src={alcazar} alt="Acuarela del Alcázar de Segovia, con sus torres sobre la colina y el paisaje castellano" width="1536" height="1024" loading="lazy" /><figcaption>El Alcázar de Segovia · Nuestro lugar para recordar</figcaption></figure>
        <p className="ae-venue-text">Bajo las torres del Alcázar, entre piedra dorada y cielos de atardecer, celebraremos el comienzo de nuestra nueva vida juntos.</p>
      </section>

      <section className="ae-celebration ae-section" id="celebracion" aria-labelledby="ae-celebration-title">
        <span className="ae-section-number" aria-hidden="true">02 / La celebración</span>
        <p className="ae-kicker">Reserva este día</p><h2 id="ae-celebration-title">26 de diciembre</h2>
        <p className="ae-year">Viernes · 2036 · 19:00 h</p>
        <Countdown />
        <div className="ae-locations">
          <article><span className="ae-location-number" aria-hidden="true">I.</span><p className="ae-kicker">La ceremonia · 19:00 h</p><h3>Iglesia de<br />la Majada</h3><p>Segovia · Aparcamiento cercano</p><a className="ae-text-link" href="https://www.google.com/maps/search/?api=1&query=Iglesia+de+la+Majada+Segovia" target="_blank" rel="noopener noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a></article>
          <article><span className="ae-location-number" aria-hidden="true">II.</span><p className="ae-kicker">El banquete · 21:00 h</p><h3>Alcázar de<br />Segovia</h3><p>Segovia · Aparcamiento cercano</p><a className="ae-text-link" href="https://www.google.com/maps/search/?api=1&query=Alc%C3%A1zar+de+Segovia" target="_blank" rel="noopener noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a></article>
        </div>
      </section>

      <section className="ae-itinerary ae-section" aria-labelledby="ae-itinerary-title">
        <p className="ae-kicker">Cada momento, contigo</p><h2 id="ae-itinerary-title">Así será nuestro día</h2>
        <ol>{itinerary.map(([hour, title, description]) => <li key={hour}><time>{hour}</time><span className="ae-timeline-dot" aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      </section>

      <Gift /><RSVP />

      <footer className="ae-footer">
        <div className="ae-botanical ae-botanical-top" aria-hidden="true" />
        <div className="ae-botanical ae-botanical-bottom" aria-hidden="true" />
        <span className="ae-footer-monogram" aria-hidden="true">A <i>&amp;</i> E</span>
        <p className="ae-kicker">El principio de todo</p><h2>¡Os esperamos!</h2>
        <p>Vuestra presencia hará este día inolvidable.</p>
        <a className="ae-footer-brand" href="/">Diseñado para recordar <span>InvitAle</span></a>
        <a className="ae-original-link" href="/alejandro-y-esthefany/">Ver la versión original ↗</a>
        <button className="ae-replay" onClick={replay}>Volver a abrir el sobre <span aria-hidden="true">↺</span></button>
      </footer>
    </main>
  </div>
}
