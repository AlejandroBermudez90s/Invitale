import { useEffect, useRef, useState } from 'react'
import garden from './assets/jardin-azul.webp'
import bouquet from './assets/ramo-azul.webp'
import portrait from '../assets/portada.webp'
import './ArtisticApp.css'

const eventDate = new Date('2026-05-16T19:00:00+02:00')
const bankAccount = 'ES72 0182 1086 6902 0162 8165'

function Butterfly({ className = '', style }) {
  return <svg className={`a-butterfly ${className}`} style={style} viewBox="0 0 100 80" fill="none" aria-hidden="true">
    <g className="a-wing-left"><path d="M49 41C26 4 1 5 9 31c4 14 23 18 40 10C15 29 11 59 29 65c12 4 18-11 20-24Z" fill="currentColor" fillOpacity=".65" /><path d="M49 41 15 20m34 21L25 54M15 13q-4 14 7 20m-1 27q9-2 12-14" /></g>
    <g className="a-wing-right"><path d="M51 41C74 4 99 5 91 31c-4 14-23 18-40 10C85 29 89 59 71 65c-12 4-18-11-20-24Z" fill="currentColor" fillOpacity=".65" /><path d="m51 41 34-21M51 41l24 13m10-41q4 14-7 20m1 27q-9-2-12-14" /></g>
    <path d="M50 33v25m0-24-6-12m6 12 6-12" strokeWidth="1.8" />
  </svg>
}

function Flourish() {
  return <svg className="a-flourish" viewBox="0 0 220 35" fill="none" aria-hidden="true"><path d="M0 19h67q19 0 24-8t16 2l3 6 3-6q11-10 16-2t24 8h67M80 25q17 9 30-6 13 15 30 6" /><circle cx="110" cy="19" r="3" /></svg>
}

function Bouquet({ className = '' }) {
  return <img className={`a-bouquet ${className}`} src={bouquet} width="850" height="1275" alt="" loading="lazy" />
}

function Monogram() {
  return <div className="a-monogram" aria-label="Monograma de Andrea"><span aria-hidden="true">A</span><svg viewBox="0 0 130 160" fill="none" aria-hidden="true"><ellipse cx="65" cy="80" rx="57" ry="73" /><ellipse cx="65" cy="80" rx="52" ry="68" /><path d="M29 130q-21-50 0-91m-9 24-10-8m9 26-10-6m12 26-11-3m91 32q21-50 0-91m9 24 10-8m-9 26 10-6m-12 26 11-3" /></svg></div>
}

function Envelope({ reduced, onOpen }) {
  const [opening, setOpening] = useState(false)
  const timer = useRef(null), button = useRef(null)
  useEffect(() => { button.current?.focus({ preventScroll: true }); return () => clearTimeout(timer.current) }, [])
  function open() {
    if (opening) return
    if (reduced) return onOpen()
    setOpening(true)
    timer.current = setTimeout(onOpen, 2400)
  }
  return <div className={`a-envelope ${opening ? 'a-opening' : ''}`}>
    <div className="a-envelope-art" style={{ backgroundImage: `url(${garden})` }} />
    <div className="a-envelope-top"><p className="a-eyebrow">Una invitación para ti</p><p className="a-envelope-name">Andrea</p><p className="a-eyebrow">Mis quince años</p></div>
    <div className="a-envelope-fold a-fold-left" /><div className="a-envelope-fold a-fold-right" /><div className="a-envelope-fold a-fold-bottom" /><div className="a-envelope-flap" />
    <button ref={button} className="a-seal" onClick={open} disabled={opening} aria-label="Abrir la invitación de Andrea"><Butterfly /><span>XV</span></button>
    <p className="a-open-hint">Toca el sello para abrir <span aria-hidden="true">la magia</span></p>
    <span className="a-envelope-date">16 de mayo de 2026</span>
  </div>
}

function Music() {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false), [error, setError] = useState('')
  async function toggle() {
    try {
      if (audio.current.paused) await audio.current.play()
      else audio.current.pause()
      setError('')
    } catch { setError('No se ha podido reproducir la música. Inténtalo de nuevo.') }
  }
  return <div className="a-music"><audio ref={audio} src={`${import.meta.env.BASE_URL}tiempo_de_vals.mp3`} loop preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setError('La música no está disponible.')} />
    <button onClick={toggle} aria-label={playing ? 'Pausar música' : 'Reproducir música'} aria-pressed={playing}><span className={playing ? 'a-spin' : ''} aria-hidden="true">♫</span></button>{!playing && <span className="a-music-hint">un vals de fondo</span>}<span className="a-sr" role="status">{error}</span>
  </div>
}

function Countdown() {
  const [remaining, setRemaining] = useState(() => Math.max(0, eventDate - Date.now()))
  useEffect(() => {
    if (eventDate <= Date.now()) return
    const timer = setInterval(() => setRemaining(Math.max(0, eventDate - Date.now())), 1000)
    return () => clearInterval(timer)
  }, [])
  if (!remaining) return <p className="a-date-memory">Un día para guardar <em>para siempre.</em></p>
  const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60]
  return <div className="a-countdown" aria-label="Tiempo hasta la celebración">{values.map((value, i) => <div key={i}><strong>{String(value).padStart(2, '0')}</strong><span>{['días', 'horas', 'minutos', 'segundos'][i]}</span></div>)}</div>
}

function CalendarLink() {
  const calendar = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Invitale//Andrea XV//ES', 'BEGIN:VEVENT', 'UID:andrea-xv-20260516@invitale.es', 'DTSTAMP:20261018T080000Z', 'DTSTART:20260516T170000Z', 'DTEND:20260516T215900Z', 'SUMMARY:Los quince de Andrea', 'LOCATION:Hotel Playa Grande - Puerto de Mazarrón', 'DESCRIPTION:Celebramos los quince años de Andrea.', 'END:VEVENT', 'END:VCALENDAR', ''].join('\r\n')
  return <a className="a-link" href={`data:text/calendar;charset=utf-8,${encodeURIComponent(calendar)}`} download="andrea-mis-quince.ics">Guardar en mi calendario <span aria-hidden="true">↗</span></a>
}

function RSVP() {
  const [sent, setSent] = useState(false), [attending, setAttending] = useState('yes')
  const result = useRef(null), name = useRef(null)
  useEffect(() => { if (sent) result.current?.focus({ preventScroll: true }) }, [sent])
  return <section className="a-rsvp a-section" id="confirmar" aria-labelledby="a-rsvp-title">
    <Bouquet className="a-rsvp-flowers" />
    <div className="a-rsvp-copy a-reveal"><span className="a-chapter">05 / Un lugar para ti</span><Butterfly /><p className="a-eyebrow">El detalle que falta eres tú</p><h2 id="a-rsvp-title">¿Vienes a <em>celebrar?</em></h2><p>Me hará mucha ilusión compartir<br />esta noche contigo.</p><span className="a-script">Te guardo un abrazo.</span></div>
    <div className="a-form-paper a-reveal"><p className="a-demo">Vista de diseño · formulario de prueba.<br />Las respuestas no se envían ni se guardan.</p>
      {sent ? <div className="a-form-success"><Butterfly /><h3 tabIndex={-1} ref={result}>¡Gracias por probarla!</h3><p>Esta respuesta es una demostración.<br />No se ha enviado una confirmación real.</p><button className="a-link" onClick={() => { setSent(false); requestAnimationFrame(() => name.current?.focus()) }}>Probar otra respuesta ↗</button></div> : <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
        <label htmlFor="a-name">Tu nombre o familia</label><input ref={name} id="a-name" name="nombre" autoComplete="name" required maxLength={120} placeholder="¿A quién tengo el gusto de invitar?" />
        <label htmlFor="a-attending">¿Me acompañas?</label><select id="a-attending" name="asistencia" value={attending} onChange={e => setAttending(e.target.value)}><option value="yes">Sí, no me lo perdería</option><option value="no">No podré acompañarte</option></select>
        {attending === 'yes' && <><label htmlFor="a-guests">Personas, incluyéndote</label><input id="a-guests" name="personas" type="number" min="1" max="10" defaultValue="1" required /><label htmlFor="a-names">Nombres de quienes asistirán</label><textarea id="a-names" name="asistentes" rows="2" maxLength={1000} placeholder="Para preparar cada detalle…" /></>}
        <button className="a-button" type="submit">Confirmar respuesta de prueba <span aria-hidden="true">↗</span></button>
      </form>}
    </div>
  </section>
}

function Gifts() {
  const [message, setMessage] = useState('')
  async function copy() {
    try { await navigator.clipboard.writeText(bankAccount); setMessage('Cuenta copiada') }
    catch { setMessage('Puedes seleccionar y copiar el número de cuenta.') }
  }
  return <section className="a-gifts a-section" aria-labelledby="a-gifts-title"><div className="a-reveal"><span className="a-chapter">04 / Lo que de verdad importa</span><Flourish /><h2 id="a-gifts-title">El mejor regalo es<br /><em>tenerte cerca.</em></h2><p>Tu presencia es lo más bonito que puedes regalarme.<br />Si además quieres tener un detalle, te dejo esta opción con cariño.</p><p className="a-account-label">Número de cuenta</p><p className="a-account">{bankAccount}</p><button className="a-link" onClick={copy}>Copiar número de cuenta <span aria-hidden="true">↗</span></button><p className="a-copy-status" role="status">{message}</p></div></section>
}

export default function ArtisticApp() {
  const [opened, setOpened] = useState(false)
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const root = useRef(null), heading = useRef(null)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)'), change = () => setReduced(media.matches)
    media.addEventListener('change', change)
    return () => media.removeEventListener('change', change)
  }, [])
  useEffect(() => {
    const previous = document.documentElement.style.overflow
    if (!opened) document.documentElement.style.overflow = 'hidden'
    else { window.scrollTo(0, 0); heading.current?.focus({ preventScroll: true }) }
    return () => { document.documentElement.style.overflow = previous }
  }, [opened])
  useEffect(() => {
    if (!opened || reduced || !('IntersectionObserver' in window)) return
    const elements = root.current.querySelectorAll('.a-reveal')
    elements.forEach(el => el.classList.add('a-pending'))
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('a-visible'); observer.unobserve(entry.target) }
    }), { threshold: .08 })
    elements.forEach(el => observer.observe(el))
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('a-pending', 'a-visible')) }
  }, [opened, reduced])
  return <div className="a-invitation" ref={root}>
    {!opened && <Envelope reduced={reduced} onOpen={() => setOpened(true)} />}
    {opened && <><Music /><div className="a-flight" aria-hidden="true">{[0, 1, 2, 3].map(i => <Butterfly key={i} style={{ '--i': i }} />)}</div></>}
    <main inert={!opened} className={opened ? 'a-is-open' : 'a-is-closed'}>
      <a className="a-skip" href="#confirmar">Ir a la confirmación</a>
      <header className="a-hero" id="inicio">
        <figure className="a-hero-portrait"><img src={portrait} width="4024" height="6048" alt="Andrea con su vestido azul de quinceañera" fetchPriority="high" /></figure>
        <Bouquet className="a-hero-flower-left" /><Bouquet className="a-hero-flower-right" />
        <div className="a-topline"><span>Una noche para florecer</span><span>Puerto de Mazarrón</span></div>
        <div className="a-hero-copy a-reveal"><Butterfly /><p className="a-eyebrow">Con ilusión te invito a celebrar</p><h1 tabIndex={-1} ref={heading}>Andrea</h1><p className="a-xv"><span />Mis quince años<span /></p><p className="a-hero-phrase">Hay sueños que empiezan<br /><em>a desplegar sus alas.</em></p><div className="a-hero-date"><span>Sábado</span><strong>16 <i>/</i> 05 <i>/</i> 26</strong><span>A las 19:00 h</span></div><a className="a-scroll" href="#carta">Descubre tu invitación <span aria-hidden="true">↓</span></a></div>
        <span className="a-hero-footnote">Un jardín de sueños azules</span>
      </header>

      <section className="a-letter a-section" id="carta" aria-labelledby="a-letter-title"><Bouquet className="a-letter-flowers" /><div className="a-letter-mark a-reveal"><Monogram /><span className="a-eyebrow">Una nueva etapa</span></div><div className="a-letter-copy a-reveal"><span className="a-chapter">01 / Una carta para ti</span><h2 id="a-letter-title">Hay momentos<br />que nos hacen <em>florecer.</em></h2><p>Hay momentos en la vida que marcan el corazón para siempre. Hoy dejo atrás mi niñez para comenzar una nueva etapa, llena de sueños y de historias por escribir.</p><p>Quiero vivir este día rodeada de las personas que forman parte de mi vida. Brindar por lo que viene, bailar sin mirar el reloj y guardar un recuerdo que dure para siempre.</p><p>Y en ese recuerdo, <em>quiero que estés tú.</em></p><span className="a-script">Con cariño, Andrea</span><Flourish /></div></section>

      <section className="a-celebration a-section" id="celebracion" aria-labelledby="a-date-title"><span className="a-chapter a-reveal">02 / Una fecha para recordar</span><div className="a-date-layout"><div className="a-date-card a-reveal"><p className="a-eyebrow">Mayo</p><span className="a-big-date">16</span><p className="a-date-year">2026</p><Flourish /><p>Sábado · 19:00 h</p><Butterfly /></div><div className="a-date-copy a-reveal"><p className="a-eyebrow">Reserva un pedacito de tu tiempo</p><h2 id="a-date-title">Una noche.<br /><em>Mil recuerdos.</em></h2><p>Quince años de historias.<br />Una noche para celebrar todo lo que viene.</p><Countdown /><CalendarLink /></div></div></section>

      <section className="a-venue a-section" aria-labelledby="a-venue-title"><div className="a-venue-art a-reveal"><div className="a-arch"><span className="a-arch-xv">XV</span><Butterfly /><p className="a-script">Donde la ilusión<br />se vuelve recuerdo.</p><span className="a-eyebrow">Andrea · 16 de mayo</span></div><Bouquet /></div><div className="a-venue-copy a-reveal"><p className="a-eyebrow">Nos encontramos aquí</p><h2 id="a-venue-title">Hotel<br /><em>Playa Grande</em></h2><p className="a-location">Puerto de Mazarrón · Murcia</p><Flourish /><p>Un lugar para reunirnos, brindar y llenar de alegría una noche muy especial.</p><dl className="a-venue-details"><div><dt>La bienvenida</dt><dd>19:00 h</dd></div><div><dt>El aparcamiento</dt><dd>Hotel y alrededores</dd></div></dl><a className="a-button" href="https://maps.app.goo.gl/1Bj1ATQmb9188Hdm8" target="_blank" rel="noopener noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a></div></section>

      <section className="a-dress a-section" aria-labelledby="a-dress-title"><Bouquet className="a-dress-flowers" /><div className="a-dress-copy a-reveal"><span className="a-chapter">03 / El arte de celebrar</span><p className="a-eyebrow">Una ocasión especial merece</p><h2 id="a-dress-title">Un poquito<br />de <em>elegancia.</em></h2><p>Ellas, bellas y divinas.<br />Ellos, guapos y elegantes.</p><p>Ven con tu mejor sonrisa y,<br />sobre todo, con ganas de bailar.</p></div><div className="a-color-card a-reveal"><span className="a-color-ribbon" aria-hidden="true" /><p className="a-eyebrow">Un color, una protagonista</p><h3>Azul rey</h3><p>Este color está reservado<br />para la quinceañera.</p><span className="a-script">Gracias por hacerlo especial.</span></div></section>
      <Gifts />
      <RSVP />
      <footer className="a-footer"><Bouquet className="a-footer-left" /><Bouquet className="a-footer-right" /><div className="a-reveal"><Monogram /><p className="a-eyebrow">Algunas noches se quedan para siempre</p><h2>Esta será <em>una de ellas.</em></h2><p>Gracias por formar parte de mi historia.</p><span className="a-script">Te espero, Andrea</span><p className="a-footer-date">16 de mayo de 2026 · Mis quince años</p></div><a className="a-brand" href="/"><span>Diseñado para recordar</span><strong>Invitale</strong></a></footer>
    </main>
  </div>
}
