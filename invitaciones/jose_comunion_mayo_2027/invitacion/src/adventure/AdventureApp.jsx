import { useEffect, useRef, useState } from 'react'
import rocket from './assets/cohete.webp'
import room from './assets/habitacion.webp'
import meadow from './assets/celebracion.webp'
import woody from '../assets/woody.png'
import buzz from '../assets/buzz.png'
import badge from './assets/insignia-jose.webp'
import MusicButton from './MusicButton'
import ToyDecorations, { ToyStar } from './ToyDecorations'
import './AdventureApp.css'
import './AdventureStory.css'

const date = new Date('2027-05-15T12:00:00+02:00')
const moments = [
  ['11:30', 'Nos vemos en San Roque', 'Llegada a la parroquia, con un poquito de tiempo.'],
  ['12:00', 'Mi Primera Comunión', 'El momento más especial, en San Roque.'],
  ['13:30', '¡Todos reunidos!', 'Aperitivo, fotos y abrazos en La Pradera.'],
  ['14:30', 'A comer en familia', 'Un sitio en la mesa para cada uno.'],
  ['17:00', 'Una tarde muy dulce', 'Merienda, tarta y alguna sorpresa.'],
  ['19:00', 'Hora de jugar', 'La aventura continúa con mis amigos.'],
]

function Star({ className = '' }) {
  return <svg className={`jo-star ${className}`} viewBox="0 0 100 100" aria-hidden="true"><path d="m50 5 13 29 32 4-24 23 6 33-27-16-27 16 6-33L5 38l32-4Z" fill="currentColor" /></svg>
}

function Launch({ reduced, onOpen }) {
  const [stage, setStage] = useState(null)
  const button = useRef(null)
  useEffect(() => { button.current?.focus({ preventScroll: true }) }, [])
  useEffect(() => {
    if (stage === null) return
    const timer = setTimeout(() => {
      if (stage === 0) onOpen()
      else setStage(stage - 1)
    }, stage === 0 ? 1250 : 650)
    return () => clearTimeout(timer)
  }, [stage, onOpen])
  const launch = () => { if (reduced) onOpen(); else setStage(3) }
  return <div className={`jo-launch ${stage === 0 ? 'jo-launching' : ''}`}>
    <div className="jo-orbit" aria-hidden="true" />
    <div className="jo-launch-top"><span>UNA INVITACIÓN PARA TI</span></div>
    <p className="jo-launch-eyebrow">Tripulación, ¿preparada?</p>
    <h1>Una misión<br /><em>muy especial.</em></h1>
    <p className="jo-launch-subtitle">La Primera Comunión de José</p>
    <button ref={button} className="jo-rocket-button" onClick={launch} disabled={stage !== null} aria-label="Despegar y abrir la invitación de José">
      <img className="jo-rocket" src={rocket} alt="Cohete de juguete rojo y crema, ilustrado a mano" width="1024" height="1536" />
      <span className="jo-launch-label">{stage === null ? '¡DESPEGAMOS!' : stage > 0 ? `${stage}…` : '¡AL INFINITO!'}</span>
    </button>
    <p className="jo-launch-hint">Toca el cohete y ven conmigo</p>
    <div className="jo-launch-status jo-sr" role="status">{stage !== null && (stage > 0 ? `Despegue en ${stage}` : 'Abriendo la invitación')}</div>
    <span className="jo-launch-bottom">Una gran aventura empieza con un pequeño sí.</span>
  </div>
}

function Countdown() {
  const [remaining, setRemaining] = useState(() => Math.max(0, date - Date.now()))
  useEffect(() => { const timer = setInterval(() => setRemaining(Math.max(0, date - Date.now())), 1000); return () => clearInterval(timer) }, [])
  const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60]
  return <div className="jo-countdown" aria-label="Tiempo hasta la Primera Comunión">{values.map((value, i) => <div key={i}><strong>{String(value).padStart(2, '0')}</strong><span>{['días', 'horas', 'minutos', 'segundos'][i]}</span></div>)}</div>
}

function RSVP() {
  const [expanded, setExpanded] = useState(false)
  const [sent, setSent] = useState(false)
  const [attending, setAttending] = useState('yes')
  const name = useRef(null), result = useRef(null), trigger = useRef(null)
  useEffect(() => { if (expanded) name.current?.focus({ preventScroll: true }) }, [expanded])
  useEffect(() => { if (sent) result.current?.focus({ preventScroll: true }) }, [sent])
  return <section id="confirmar" className="jo-rsvp jo-section" aria-labelledby="jo-rsvp-title">
    <ToyDecorations scene="rsvp" />
    <Star className="jo-rsvp-star" />
    <div className="jo-reveal"><p className="jo-kicker">EN ESTA AVENTURA FALTAS TÚ</p>
      <h2 id="jo-rsvp-title">¿Te vienes<br />conmigo?</h2>
      <p>Me haría muchísima ilusión verte.<br />Confirma antes del <strong>15 de abril de 2027.</strong></p>
      <button ref={trigger} className="jo-button" aria-expanded={expanded} aria-controls="jo-form" onClick={() => setExpanded(!expanded)}>{expanded ? 'Cerrar formulario' : '¡Me apunto a la aventura!'} <span aria-hidden="true">↗</span></button>
    </div>
    <div id="jo-form" className="jo-form-paper" hidden={!expanded}>
      <p className="jo-demo">Invitación de muestra: las respuestas no se envían ni se guardan.</p>
      {sent ? <div className="jo-success"><Star /><h3 ref={result} tabIndex={-1}>¡Prueba completada!</h3><p>Esta confirmación es una demostración. No se ha enviado ninguna respuesta.</p><button className="jo-text-button" onClick={() => { setSent(false); requestAnimationFrame(() => name.current?.focus()) }}>Probar otra respuesta</button></div> : <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
        <label htmlFor="jo-name">Tu nombre o familia</label><input ref={name} id="jo-name" name="nombre" autoComplete="name" required maxLength={120} placeholder="Ej. Familia García" />
        <label htmlFor="jo-attending">¿Podréis venir?</label><select id="jo-attending" name="asistencia" value={attending} onChange={e => setAttending(e.target.value)}><option value="yes">¡Sí, allí estaremos!</option><option value="no">No podremos acompañarte</option></select>
        {attending === 'yes' && <><div className="jo-form-row"><div><label htmlFor="jo-adults">Adultos</label><input id="jo-adults" name="adultos" type="number" min="1" max="20" defaultValue="1" required /></div><div><label htmlFor="jo-kids">Niños</label><input id="jo-kids" name="ninos" type="number" min="0" max="20" defaultValue="0" required /></div></div><label htmlFor="jo-guests">Nombres de los asistentes</label><textarea id="jo-guests" name="asistentes" rows="2" maxLength={1000} placeholder="Nuestra tripulación será…" /><label htmlFor="jo-allergies">Alergias o intolerancias</label><textarea id="jo-allergies" name="alergias" rows="2" maxLength={1000} placeholder="Para que todos disfrutemos de la comida" /></>}
        <label htmlFor="jo-message">Un mensaje para José</label><textarea id="jo-message" name="mensaje" rows="2" maxLength={1000} placeholder="Si te apetece…" />
        <button className="jo-button" type="submit">Confirmar respuesta de prueba <span aria-hidden="true">↗</span></button>
      </form>}
      <button className="jo-text-button" onClick={() => { setExpanded(false); trigger.current?.focus() }}>Cerrar confirmación</button>
    </div>
  </section>
}

export default function AdventureApp() {
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
    const elements = root.current.querySelectorAll('.jo-reveal')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('jo-visible'); observer.unobserve(entry.target) }
    }), { threshold: .07 })
    elements.forEach(el => { el.classList.add('jo-pending'); observer.observe(el) })
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('jo-pending', 'jo-visible')) }
  }, [opened, reduced])
  return <div className="jo-adventure" ref={root} data-motion={reduced ? 'reduced' : 'full'}>
    {!opened && <Launch reduced={reduced} onOpen={() => setOpened(true)} />}
    <main inert={!opened} className={opened ? 'jo-open' : 'jo-closed'}>
      <a className="jo-skip" href="#confirmar">Ir a confirmar asistencia</a>
      <header className="jo-hero" id="inicio">
        <div className="jo-hero-copy"><div className="jo-name-wrap"><ToyStar className="jo-name-star-left" /><h1 ref={heading} tabIndex={-1}>José</h1><ToyStar className="jo-name-star-right" /></div>
          <p className="jo-hero-subtitle">¡Al infinito y más allá!</p>
          <div className="jo-hero-date"><span>SÁBADO</span><strong>15 <i>de</i> mayo</strong><span>2027 · 12:00 H</span></div>
          <p className="jo-hero-communion">Mi Primera Comunión</p>
          <p className="jo-hero-motto">Hay días que son<br />toda una aventura.</p>
        </div>
        <img className="jo-friends" src={room} width="1536" height="1024" alt="Habitación ilustrada con nubes y juguetes de colores" fetchPriority="high" />
        <div className="jo-toys" aria-label="Woody y Buzz te dan la bienvenida"><img className="jo-woody" src={woody} alt="Woody" /><img className="jo-buzz" src={buzz} alt="Buzz Lightyear" /></div>
        <a className="jo-scroll" href="#mi-dia">La aventura empieza aquí <span aria-hidden="true">↓</span></a>
      </header>
      <section id="mi-dia" className="jo-intro jo-section">
        <ToyDecorations scene="intro" />
        <div className="jo-reveal"><p className="jo-kicker">UN DÍA PEQUEÑO EN EL CALENDARIO, ENORME PARA MÍ</p><Star />
          <h2>Mi primera gran<br /><em>aventura de fe.</em></h2>
          <p>Hay aventuras que no necesitan una nave espacial.<br className="jo-desktop-break" /> Solo a las personas que más quieres, muy cerquita.</p>
          <p>El día de mi <strong>Primera Comunión</strong> daré un paso muy especial.<br className="jo-desktop-break" /> Y me encantaría compartirlo contigo, con mi familia<br className="jo-desktop-break" /> y con un poquito de la magia de mis juguetes favoritos.</p>
          <span className="jo-signature">Con ilusión, José</span>
        </div>
      </section>
      <section className="jo-places jo-section" id="lugares">
        <ToyDecorations scene="places" />
        <div className="jo-reveal"><p className="jo-kicker">DOS PARADAS. UN RECUERDO PARA SIEMPRE.</p><h2>El mapa de<br />nuestro día.</h2></div>
        <figure className="jo-meadow jo-reveal"><img src={meadow} alt="Ilustración imaginaria de una capilla y una celebración en el campo con banderines de colores" width="1536" height="1024" loading="lazy" /><figcaption>Un pequeño paisaje imaginado para este gran día.</figcaption></figure>
        <div className="jo-place-grid jo-reveal">
          <article><span className="jo-number">01</span><p className="jo-kicker">LA CEREMONIA · 12:00 H</p><h3>Parroquia<br />San Roque</h3><p>Calle Mayor, 12</p><a className="jo-text-link" href="https://www.google.com/maps/search/?api=1&query=Parroquia+San+Roque" target="_blank" rel="noopener noreferrer">Ver en el mapa <span aria-hidden="true">↗</span></a></article>
          <article><span className="jo-number">02</span><p className="jo-kicker">LA CELEBRACIÓN · 13:30 H</p><h3>Restaurante<br />La Pradera</h3><p>Camino del Bosque, 4</p><a className="jo-text-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+La+Pradera" target="_blank" rel="noopener noreferrer">Ver en el mapa <span aria-hidden="true">↗</span></a></article>
        </div>
        <p className="jo-place-note">Lugares y direcciones ficticios de esta invitación de muestra.</p>
      </section>
      <section className="jo-plan jo-section" id="plan">
        <ToyDecorations scene="plan" />
        <div className="jo-plan-heading jo-reveal"><p className="jo-kicker">LA HOJA DE RUTA</p><h2>Un día para<br /><em>recordar.</em></h2><p>De la primera emoción<br />al último trocito de tarta.</p><div className="jo-plan-rocket"><img src={rocket} alt="" width="1024" height="1536" loading="lazy" /></div></div>
        <ol className="jo-timeline">{moments.map(([time, title, detail], i) => <li key={time} className="jo-reveal"><span className="jo-timeline-dot" aria-hidden="true">{i === 1 ? '✦' : '•'}</span><time>{time}</time><h3>{title}</h3><p>{detail}</p></li>)}</ol>
      </section>
      <section className="jo-wait jo-section"><ToyDecorations scene="countdown" /><div className="jo-reveal"><p className="jo-kicker">LA CUENTA ATRÁS MÁS BONITA</p><h2>¡Ya queda menos!</h2><Countdown /><p>Para reunir a mi tripulación favorita.</p></div></section>
      <RSVP />
      <section className="jo-gift jo-section"><ToyDecorations scene="gift" /><div className="jo-reveal"><span className="jo-gift-mark" aria-hidden="true">✦</span><p className="jo-kicker">EL MEJOR REGALO</p><h2>Que formes parte<br />de mi historia.</h2><p>Tu compañía es lo que más ilusión me hace.<br />Si te apetece tener un detalle conmigo, habrá una mesa<br className="jo-desktop-break" /> de regalos en la celebración.</p><p className="jo-signature">¡Gracias por venir a mi aventura!</p></div></section>
      <footer className="jo-footer"><img className="jo-badge-painted" src={badge} width="640" height="640" alt="Insignia ilustrada de José: una J roja sobre una estrella de sheriff dorada" loading="lazy" /><p>Hay un amigo en ti.</p><strong>José · 15 de mayo de 2027</strong><a href="#inicio">Volver a las nubes ↑</a><div className="jo-footer-brand"><a href="/">InvitAle</a><span>Diseñado para recordar</span></div></footer>
      {opened && <MusicButton />}
    </main>
  </div>
}
