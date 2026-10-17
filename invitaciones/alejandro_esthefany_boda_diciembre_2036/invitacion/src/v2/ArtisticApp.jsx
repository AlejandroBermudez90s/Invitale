import { useCallback, useEffect, useRef, useState } from 'react'
import botanica from './assets/botanica-contemporanea.webp'
import alcazar from './assets/alcazar-acuarela.webp'
import EnvelopeIntro from './EnvelopeIntro'
import MusicButton from './MusicButton'
import FallingLeaves from './FallingLeaves'
import './ArtisticApp.css'
import './CinematicMotion.css'
import './Atmosphere.css'
import './Editorial.css'
import WrittenText from './WrittenText'
import InvitationIcon from './InvitationIcon'
import BotanicalAccent from './BotanicalAccent'
import RSVP from './RSVP'

const weddingDate = new Date('2036-12-26T19:00:00+01:00')
const itinerary = [
  ['18:45', 'La llegada', 'Llegada de la novia', 'bouquet'],
  ['19:00', 'El sí, quiero', 'Ceremonia', 'chapel'],
  ['20:00', 'Un brindis', 'Cóctel', 'glasses'],
  ['21:00', 'A la mesa', 'Banquete', 'dinner'],
  ['23:00', 'Nuestro baile', 'Baile de los novios', 'rings'],
  ['00:00', 'A celebrar', 'Fiesta', 'party'],
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

function Gift() {
  const [copyStatus, setCopyStatus] = useState('')
  const account = 'ES45 2038 1234 5600 0045 7821'
  async function copy() {
    try { await navigator.clipboard.writeText(account); setCopyStatus('Cuenta de ejemplo copiada') }
    catch { setCopyStatus('Puedes seleccionar y copiar el número de cuenta.') }
  }
  return <section className="ae-gift ae-section" aria-labelledby="ae-gift-title">
    <BotanicalAccent side="left" />
    <p className="ae-kicker"><WrittenText text="El mejor regalo eres tú" /></p>
    <h2 id="ae-gift-title"><WrittenText text="Más recuerdos juntos" /></h2>
    <p><WrittenText text="Lo que más ilusión nos hace es compartir este día contigo." /><br /><WrittenText text="Si además quieres tener un detalle, puedes ayudarnos a escribir" /><br className="ae-desktop-break" /><WrittenText text=" el primer capítulo de nuestro viaje de novios." /></p>
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
    if (!opened) return
    const sections = rootRef.current.querySelectorAll('main > section, main > footer')
    const decorated = rootRef.current.querySelectorAll('main > section, main > footer')
    if (reducedMotion || !('IntersectionObserver' in window)) {
      decorated.forEach(section => section.classList.add('ae-decoration-ready'))
      return () => decorated.forEach(section => section.classList.remove('ae-decoration-ready'))
    }
    const targets = []
    sections.forEach(section => {
      section.classList.add('ae-scene')
      const children = section.querySelectorAll(':scope > :not(.ae-section-number):not(.ae-botanical):not(.ae-botanical-accent), .ae-story-copy > p, .ae-locations > article, .ae-itinerary li')
      children.forEach((element, index) => {
        element.classList.add('ae-reveal')
        element.style.setProperty('--ae-delay', `${Math.min(index * 100, 400)}ms`)
        targets.push(element)
      })
    })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('ae-in-view', 'ae-decoration-ready')
        observer.unobserve(entry.target)
      })
    }, { threshold: .08, rootMargin: '0px 0px -24px 0px' })
    targets.forEach(element => observer.observe(element))
    decorated.forEach(section => observer.observe(section))
    return () => {
      observer.disconnect()
      targets.forEach(element => element.classList.remove('ae-reveal', 'ae-in-view'))
      decorated.forEach(section => section.classList.remove('ae-decoration-ready'))
    }
  }, [opened, reducedMotion])

  useEffect(() => {
    if (!revealing || reducedMotion || !('IntersectionObserver' in window)) return
    const texts = rootRef.current.querySelectorAll('.ae-written')
    texts.forEach(text => text.classList.add('ae-write-ready'))
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('ae-write-started')
        observer.unobserve(entry.target)
      })
    }, { threshold: .15, rootMargin: '0px 0px -20px 0px' })
    texts.forEach(text => observer.observe(text))
    return () => {
      observer.disconnect()
      texts.forEach(text => text.classList.remove('ae-write-ready', 'ae-write-started'))
    }
  }, [revealing, reducedMotion])

  return <div ref={rootRef} className="ae-v2" data-motion={reducedMotion ? 'reduced' : 'full'} style={{ '--ae-botanica': `url("${botanica}")` }}>
    {!opened && <EnvelopeIntro reducedMotion={reducedMotion} onReveal={revealInvitation} onOpened={finishOpening} />}
    {opened && <><FallingLeaves /><MusicButton /></>}

    <main inert={!opened} className={revealing ? 'ae-opened' : 'ae-awaiting'}>
      <a className="ae-skip" href="#confirmar">Ir a confirmar asistencia</a>
      <header className="ae-hero">
        <div className="ae-botanical ae-botanical-top" aria-hidden="true" />
        <div className="ae-botanical ae-botanical-bottom" aria-hidden="true" />
        <div className="ae-hero-top"><span>Segovia, España</span><span>26 · 12 · 2036</span></div>
        <div className="ae-hero-content">
          <p className="ae-kicker"><WrittenText text="Con toda la ilusión del mundo" /></p>
          <h1 ref={headingRef} tabIndex={-1}><WrittenText text="Alejandro" pace={100} /><span className="ae-ampersand">&amp;</span><WrittenText text="Esthefany" pace={100} /></h1>
          <div className="ae-date-line"><span>Diciembre</span><strong>26</strong><span>2036</span></div>
          <p className="ae-hero-subtitle"><WrittenText text="Nos elegimos. Nos casamos." /><br /><WrittenText text="Y queremos celebrarlo contigo." /></p>
          <a href="#historia" className="ae-scroll">Nuestra historia <span aria-hidden="true">↓</span></a>
        </div>
      </header>

      <section className="ae-story ae-section" id="historia" aria-labelledby="ae-story-title">
        <BotanicalAccent side="left" birds />
        <span className="ae-section-number" aria-hidden="true">01 / Nuestra historia</span>
        <p className="ae-kicker"><WrittenText text="Hay encuentros que lo cambian todo" /></p>
        <h2 id="ae-story-title"><WrittenText text="Lo nuestro," /><br /><em><WrittenText text="para siempre." /></em></h2>
        <div className="ae-story-copy"><p><WrittenText text="Hay historias que empiezan sin darse cuenta y terminan escribiendo toda una vida." /></p><p><WrittenText text="La nuestra empezó cuando menos lo esperábamos, en una cita casual. Hoy nos trae hasta aquí, listos para prometernos para siempre." /></p><p><WrittenText text="Queremos compartir este día contigo, rodeados de quienes más queremos, brindando por lo que fuimos, lo que somos y lo que seremos." /></p></div>
        <p className="ae-script">Alejandro &amp; Esthefany</p>
      </section>

      <section className="ae-venue" aria-labelledby="ae-venue-title">
        <BotanicalAccent side="right" birds />
        <div className="ae-venue-heading"><p className="ae-kicker"><WrittenText text="Nuestro rincón favorito" /></p><h2 id="ae-venue-title"><WrittenText text="Donde empieza" /><br /><em><WrittenText text="nuestro siempre." /></em></h2></div>
        <figure><img src={alcazar} alt="Acuarela del Alcázar de Segovia, con sus torres sobre la colina y el paisaje castellano" width="1536" height="1024" loading="lazy" /><figcaption>El Alcázar de Segovia · Nuestro lugar para recordar</figcaption></figure>
        <p className="ae-venue-text"><WrittenText text="Bajo las torres del Alcázar, entre piedra dorada y cielos de atardecer, celebraremos el comienzo de nuestra nueva vida juntos." /></p>
      </section>

      <section className="ae-celebration ae-section" id="celebracion" aria-labelledby="ae-celebration-title">
        <BotanicalAccent side="left" />
        <span className="ae-section-number" aria-hidden="true">02 / La celebración</span>
        <p className="ae-kicker"><WrittenText text="Reserva este día" /></p><h2 id="ae-celebration-title"><WrittenText text="26 de diciembre" /></h2>
        <p className="ae-year">Viernes · 2036 · 19:00 h</p>
        <Countdown />
        <div className="ae-locations">
          <article><span className="ae-location-number" aria-hidden="true">I.</span><p className="ae-kicker">La ceremonia · 19:00 h</p><h3><WrittenText text="Iglesia de" /><br /><WrittenText text="la Majada" /></h3><p>Segovia · Aparcamiento cercano</p><a className="ae-text-link" href="https://www.google.com/maps/search/?api=1&query=Iglesia+de+la+Majada+Segovia" target="_blank" rel="noopener noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a></article>
          <article><span className="ae-location-number" aria-hidden="true">II.</span><p className="ae-kicker">El banquete · 21:00 h</p><h3><WrittenText text="Alcázar de" /><br /><WrittenText text="Segovia" /></h3><p>Segovia · Aparcamiento cercano</p><a className="ae-text-link" href="https://www.google.com/maps/search/?api=1&query=Alc%C3%A1zar+de+Segovia" target="_blank" rel="noopener noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a></article>
        </div>
      </section>

      <section className="ae-itinerary ae-section" aria-labelledby="ae-itinerary-title">
        <BotanicalAccent side="right" birds />
        <p className="ae-kicker"><WrittenText text="Cada momento, contigo" /></p><h2 id="ae-itinerary-title"><WrittenText text="Así será nuestro día" /></h2>
        <ol>{itinerary.map(([hour, title, description, icon]) => <li key={hour}><span className="ae-moment-icon"><InvitationIcon name={icon} /></span><div className="ae-moment-copy"><time>{hour}</time><h3><WrittenText text={title} /></h3><p><WrittenText text={description} /></p></div></li>)}</ol>
      </section>

      <Gift /><RSVP />

      <footer className="ae-footer">
        <div className="ae-botanical ae-botanical-top" aria-hidden="true" />
        <div className="ae-botanical ae-botanical-bottom" aria-hidden="true" />
        <div className="ae-footer-copy"><span className="ae-footer-monogram" aria-hidden="true">A <i>&amp;</i> E</span>
        <p className="ae-kicker"><WrittenText text="El principio de todo" /></p><h2><WrittenText text="¡Os esperamos!" /></h2>
        <p><WrittenText text="Vuestra presencia hará este día inolvidable." /></p>
        <p className="ae-footer-brand">Diseñado para recordar <span>InvitAle</span></p></div>
      </footer>
    </main>
  </div>
}
