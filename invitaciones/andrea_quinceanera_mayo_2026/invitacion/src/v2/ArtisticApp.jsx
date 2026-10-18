import { useEffect, useRef, useState } from 'react'
import garden from './assets/jardin-azul.webp'
import bouquet from './assets/ramo-azul.webp'
// Mismo recurso que carga .cabecera::before en la invitación original publicada.
import portrait from '../assets/portada.jfif'
import hotel from './assets/hotel-playa-grande-acuarela.webp'
import butterfly from './assets/mariposa-azul.webp'
import Written from './Written'
import './ArtisticApp.css'
import './ArtisticDetails.css'

const eventDate = new Date('2026-05-16T19:00:00+02:00')
const bankAccount = 'ES72 0182 1086 6902 0162 8165'

function Butterfly({ className = '', style }) {
  return <span className={`a-butterfly ${className}`} style={style} aria-hidden="true"><img src={butterfly} width="320" height="320" alt="" /></span>
}

function Flourish() {
  return <span className="a-flourish" aria-hidden="true"><i /></span>
}

function Bouquet({ className = '' }) {
  return <img className={`a-bouquet ${className}`} src={bouquet} width="850" height="1275" alt="" loading="lazy" />
}

function Monogram() {
  return <div className="a-monogram" role="img" aria-label="Monograma de Andrea"><span aria-hidden="true">A</span></div>
}

function PaintedHotel() {
  return <figure className="a-painted a-hotel-painting">
    <img src={hotel} width="1450" height="967" alt="Acuarela del Hotel Playa Grande de Puerto de Mazarrón, con sus tejados, entrada central, palmeras y el mar al fondo" loading="lazy" />
    <span className="a-paint-strokes" aria-hidden="true">{Array.from({ length: 14 }, (_, i) => <span key={i} style={{ '--strip': i, backgroundImage: `url(${hotel})`, backgroundPosition: `center ${i * 100 / 13}%` }} />)}</span>
    <figcaption><Written>Hotel Playa Grande · Puerto de Mazarrón</Written></figcaption>
  </figure>
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
    <div className="a-envelope-top"><p className="a-eyebrow"><Written>Una invitación para ti</Written></p><p className="a-envelope-name"><Written>Andrea</Written></p><p className="a-eyebrow"><Written>Mis quince años</Written></p></div>
    <div className="a-envelope-fold a-fold-left" /><div className="a-envelope-fold a-fold-right" /><div className="a-envelope-fold a-fold-bottom" /><div className="a-envelope-flap" />
    <button ref={button} className="a-seal" onClick={open} disabled={opening} aria-label="Abrir la invitación de Andrea"><Butterfly /><span>XV</span></button>
    <p className="a-open-hint"><Written>Toca el sello para abrir </Written><span aria-hidden="true"><Written>la magia</Written></span></p>
    <span className="a-envelope-date"><Written>16 de mayo de 2026</Written></span>
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
    <button onClick={toggle} aria-label={playing ? 'Pausar música' : 'Reproducir música'} aria-pressed={playing}><span className={playing ? 'a-spin' : ''} aria-hidden="true">♫</span></button>{!playing && <span className="a-music-hint"><Written>un vals de fondo</Written></span>}<span className="a-sr" role="status">{error}</span>
  </div>
}

function Countdown() {
  const [remaining, setRemaining] = useState(() => Math.max(0, eventDate - Date.now()))
  useEffect(() => {
    if (eventDate <= Date.now()) return
    const timer = setInterval(() => setRemaining(Math.max(0, eventDate - Date.now())), 1000)
    return () => clearInterval(timer)
  }, [])
  if (!remaining) return <p className="a-date-memory"><Written>Un día para guardar </Written><em><Written>para siempre.</Written></em></p>
  const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60]
  return <div className="a-countdown" aria-label="Tiempo hasta la celebración">{values.map((value, i) => <div key={i}><strong>{String(value).padStart(2, '0')}</strong><span>{['días', 'horas', 'minutos', 'segundos'][i]}</span></div>)}</div>
}

function CalendarLink() {
  const calendar = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Invitale//Andrea XV//ES', 'BEGIN:VEVENT', 'UID:andrea-xv-20260516@invitale.es', 'DTSTAMP:20261018T080000Z', 'DTSTART:20260516T170000Z', 'DTEND:20260516T215900Z', 'SUMMARY:Los quince de Andrea', 'LOCATION:Hotel Playa Grande - Puerto de Mazarrón', 'DESCRIPTION:Celebramos los quince años de Andrea.', 'END:VEVENT', 'END:VCALENDAR', ''].join('\r\n')
  return <a className="a-link" href={`data:text/calendar;charset=utf-8,${encodeURIComponent(calendar)}`} download="andrea-mis-quince.ics"><Written>Guardar en mi calendario </Written><span aria-hidden="true">↗</span></a>
}

function RSVP() {
  const [sent, setSent] = useState(false), [attending, setAttending] = useState('yes')
  const result = useRef(null), name = useRef(null)
  useEffect(() => { if (sent) result.current?.focus({ preventScroll: true }) }, [sent])
  return <section className="a-rsvp a-section" id="confirmar" aria-labelledby="a-rsvp-title">
    <Bouquet className="a-rsvp-flowers" />
    <div className="a-rsvp-copy a-reveal"><span className="a-chapter"><Written>05 / Un lugar para ti</Written></span><Butterfly /><p className="a-eyebrow"><Written>El detalle que falta eres tú</Written></p><h2 id="a-rsvp-title"><Written>¿Vienes a </Written><em><Written>celebrar?</Written></em></h2><p><Written>Me hará mucha ilusión compartir</Written><br /><Written>esta noche contigo.</Written></p><span className="a-script"><Written>Te guardo un abrazo.</Written></span></div>
    <div className="a-form-paper a-reveal"><p className="a-demo"><Written>Vista de diseño · formulario de prueba.</Written><br /><Written>Las respuestas no se envían ni se guardan.</Written></p>
      {sent ? <div className="a-form-success"><Butterfly /><h3 tabIndex={-1} ref={result}><Written>¡Gracias por probarla!</Written></h3><p><Written>Esta respuesta es una demostración.</Written><br /><Written>No se ha enviado una confirmación real.</Written></p><button className="a-link" onClick={() => { setSent(false); requestAnimationFrame(() => name.current?.focus()) }}><Written>Probar otra respuesta ↗</Written></button></div> : <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
        <label htmlFor="a-name"><Written>Tu nombre o familia</Written></label><input ref={name} id="a-name" name="nombre" autoComplete="name" required maxLength={120} placeholder="¿A quién tengo el gusto de invitar?" />
        <label htmlFor="a-attending"><Written>¿Me acompañas?</Written></label><select id="a-attending" name="asistencia" value={attending} onChange={e => setAttending(e.target.value)}><option value="yes">Sí, no me lo perdería</option><option value="no">No podré acompañarte</option></select>
        {attending === 'yes' && <><label htmlFor="a-guests"><Written>Personas, incluyéndote</Written></label><input id="a-guests" name="personas" type="number" min="1" max="10" defaultValue="1" required /><label htmlFor="a-names"><Written>Nombres de quienes asistirán</Written></label><textarea id="a-names" name="asistentes" rows="2" maxLength={1000} placeholder="Para preparar cada detalle…" /></>}
        <button className="a-button" type="submit"><Written>Confirmar respuesta de prueba </Written><span aria-hidden="true">↗</span></button>
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
  return <section className="a-gifts a-section" aria-labelledby="a-gifts-title"><div className="a-reveal"><span className="a-chapter"><Written>04 / Lo que de verdad importa</Written></span><Flourish /><h2 id="a-gifts-title"><Written>El mejor regalo es</Written><br /><em><Written>tenerte cerca.</Written></em></h2><p><Written>Tu presencia es lo más bonito que puedes regalarme.</Written><br /><Written>Si además quieres tener un detalle, te dejo esta opción con cariño.</Written></p><p className="a-account-label"><Written>Número de cuenta</Written></p><p className="a-account">{bankAccount}</p><button className="a-link" onClick={copy}><Written>Copiar número de cuenta </Written><span aria-hidden="true">↗</span></button><p className="a-copy-status" role="status">{message}</p></div></section>
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
    if (reduced || !('IntersectionObserver' in window)) return
    const scope = root.current.querySelector(opened ? 'main' : '.a-envelope')
    if (!scope) return
    const enrolled = new Set()
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.classList.contains('a-written') ? 'a-writing' : 'a-visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: .08 })
    function enroll() {
      scope.querySelectorAll('.a-reveal, .a-written, .a-painted').forEach(el => {
        if (enrolled.has(el)) return
        enrolled.add(el)
        el.classList.add(el.classList.contains('a-written') ? 'a-write-ready' : 'a-pending')
        observer.observe(el)
      })
    }
    enroll()
    const changes = new MutationObserver(enroll)
    changes.observe(scope, { childList: true, subtree: true })
    return () => {
      observer.disconnect(); changes.disconnect()
      enrolled.forEach(el => el.classList.remove('a-pending', 'a-visible', 'a-write-ready', 'a-writing'))
    }
  }, [opened, reduced])
  return <div className="a-invitation" ref={root}>
    {!opened && <Envelope reduced={reduced} onOpen={() => setOpened(true)} />}
    {opened && <><Music /><div className="a-flight" aria-hidden="true">{[0, 1, 2, 3].map(i => <Butterfly key={i} style={{ '--i': i }} />)}</div></>}
    <main inert={!opened} className={opened ? 'a-is-open' : 'a-is-closed'}>
      <a className="a-skip" href="#confirmar">Ir a la confirmación</a>
      <header className="a-hero" id="inicio">
        <div className="a-topline"><span><Written>Una noche para florecer</Written></span><span><Written>Puerto de Mazarrón</Written></span></div>
        <div className="a-hero-title a-reveal"><Butterfly /><p className="a-eyebrow"><Written>Con ilusión te invito a celebrar</Written></p><h1 tabIndex={-1} ref={heading}><Written>Andrea</Written></h1><p className="a-xv"><span /><Written>Mis quince años</Written><span /></p></div>
        <div className="a-photo-composition"><figure className="a-hero-portrait"><img src={portrait} width="2444" height="3673" alt="Fotografía original de Andrea, mirando hacia abajo con su vestido azul de quinceañera" fetchPriority="high" /></figure><Bouquet className="a-hero-flower-left" /><Bouquet className="a-hero-flower-right" /></div>
        <div className="a-hero-copy a-reveal"><p className="a-hero-phrase"><Written>Hay sueños que empiezan</Written><br /><em><Written>a desplegar sus alas.</Written></em></p><div className="a-hero-date"><span><Written>Sábado</Written></span><strong><Written>16 </Written><i>/</i><Written> 05 </Written><i>/</i><Written> 26</Written></strong><span><Written>A las 19:00 h</Written></span></div><a className="a-scroll" href="#carta"><Written>Descubre tu invitación </Written><span aria-hidden="true">↓</span></a></div>
        <span className="a-hero-footnote"><Written>Un jardín de sueños azules</Written></span>
      </header>

      <section className="a-letter a-section" id="carta" aria-labelledby="a-letter-title"><Bouquet className="a-letter-flowers" /><div className="a-letter-mark a-reveal"><Monogram /><span className="a-eyebrow"><Written>Una nueva etapa</Written></span></div><div className="a-letter-copy a-reveal"><span className="a-chapter"><Written>01 / Una carta para ti</Written></span><h2 id="a-letter-title"><Written>Hay momentos</Written><br /><Written>que nos hacen </Written><em><Written>florecer.</Written></em></h2><p><Written>Hay momentos en la vida que marcan el corazón para siempre. Hoy dejo atrás mi niñez para comenzar una nueva etapa, llena de sueños y de historias por escribir.</Written></p><p><Written>Quiero vivir este día rodeada de las personas que forman parte de mi vida. Brindar por lo que viene, bailar sin mirar el reloj y guardar un recuerdo que dure para siempre.</Written></p><p><Written>Y en ese recuerdo, </Written><em><Written>quiero que estés tú.</Written></em></p><span className="a-script"><Written>Con cariño, Andrea</Written></span><Flourish /></div></section>

      <section className="a-celebration a-section" id="celebracion" aria-labelledby="a-date-title"><span className="a-chapter a-reveal"><Written>02 / Una fecha para recordar</Written></span><div className="a-date-layout"><div className="a-date-card a-reveal"><p className="a-eyebrow"><Written>Mayo</Written></p><span className="a-big-date"><Written>16</Written></span><p className="a-date-year"><Written>2026</Written></p><Flourish /><p><Written>Sábado · 19:00 h</Written></p><Butterfly /></div><div className="a-date-copy a-reveal"><p className="a-eyebrow"><Written>Reserva un pedacito de tu tiempo</Written></p><h2 id="a-date-title"><Written>Una noche.</Written><br /><em><Written>Mil recuerdos.</Written></em></h2><p><Written>Quince años de historias.</Written><br /><Written>Una noche para celebrar todo lo que viene.</Written></p><Countdown /><CalendarLink /></div></div></section>

      <section className="a-venue a-section" id="lugar" aria-labelledby="a-venue-title"><div className="a-venue-art"><PaintedHotel /><Butterfly className="a-hotel-butterfly" /></div><div className="a-venue-copy a-reveal"><p className="a-eyebrow"><Written>Nos encontramos aquí</Written></p><h2 id="a-venue-title"><Written>Hotel</Written><br /><em><Written>Playa Grande</Written></em></h2><p className="a-location"><Written>Puerto de Mazarrón · Murcia</Written></p><Flourish /><p><Written>Un lugar para reunirnos, brindar y llenar de alegría una noche muy especial.</Written></p><dl className="a-venue-details"><div><dt><Written>La bienvenida</Written></dt><dd><Written>19:00 h</Written></dd></div><div><dt><Written>El aparcamiento</Written></dt><dd><Written>Hotel y alrededores</Written></dd></div></dl><a className="a-button" href="https://maps.app.goo.gl/1Bj1ATQmb9188Hdm8" target="_blank" rel="noopener noreferrer"><Written>Cómo llegar </Written><span aria-hidden="true">↗</span></a></div></section>

      <section className="a-dress a-section" aria-labelledby="a-dress-title"><Bouquet className="a-dress-flowers" /><div className="a-dress-copy a-reveal"><span className="a-chapter"><Written>03 / El arte de celebrar</Written></span><p className="a-eyebrow"><Written>Una ocasión especial merece</Written></p><h2 id="a-dress-title"><Written>Un poquito</Written><br /><Written>de </Written><em><Written>elegancia.</Written></em></h2><p><Written>Ellas, bellas y divinas.</Written><br /><Written>Ellos, guapos y elegantes.</Written></p><p><Written>Ven con tu mejor sonrisa y,</Written><br /><Written>sobre todo, con ganas de bailar.</Written></p></div><div className="a-color-card a-reveal"><span className="a-color-ribbon" aria-hidden="true" /><p className="a-eyebrow"><Written>Un color, una protagonista</Written></p><h3><Written>Azul rey</Written></h3><p><Written>Este color está reservado</Written><br /><Written>para la quinceañera.</Written></p><span className="a-script"><Written>Gracias por hacerlo especial.</Written></span></div></section>
      <Gifts />
      <RSVP />
      <footer className="a-footer"><Bouquet className="a-footer-left" /><Bouquet className="a-footer-right" /><div className="a-reveal"><Monogram /><p className="a-eyebrow"><Written>Algunas noches se quedan para siempre</Written></p><h2><Written>Esta será </Written><em><Written>una de ellas.</Written></em></h2><p><Written>Gracias por formar parte de mi historia.</Written></p><span className="a-script"><Written>Te espero, Andrea</Written></span><p className="a-footer-date"><Written>16 de mayo de 2026 · Mis quince años</Written></p></div><a className="a-brand" href="/"><span><Written>Diseñado para recordar</Written></span><strong><Written>Invitale</Written></strong></a></footer>
    </main>
  </div>
}
