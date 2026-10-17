import { useEffect, useRef, useState } from 'react'
import { DayIcon, Monogram, Shell, Waves } from './MarineArt'
import coast from './assets/costa-brava.webp'
import shells from './assets/conchas.webp'
import chapel from './assets/ermita.webp'
import finca from './assets/finca.webp'
import './MarineApp.css'

const weddingDate = new Date('2027-06-12T19:00:00+02:00')
const moments = [
  ['18:30', 'La bienvenida', 'Llegar, abrazarnos, empezar.', 'arrival'],
  ['19:00', 'Nuestro sí', 'La ceremonia en Sant Elm.', 'chapel'],
  ['20:00', 'Frente al mar', 'Un cóctel y mil brindis.', 'toast'],
  ['21:00', 'A la mesa', 'La cena en Els Ginesters.', 'dinner'],
  ['23:30', 'El primer baile', 'Nuestra canción, contigo.', 'dance'],
  ['00:30', 'Bajo las estrellas', 'La fiesta hasta el amanecer.', 'stars'],
]

function Written({ children }) {
  return <span className="en-written"><span className="en-sr">{children}</span><span aria-hidden="true">{String(children).split(' ').map((word, i) => <span className="en-word" key={i} style={{ '--word': i }}>{word}{' '}</span>)}</span></span>
}

function Envelope({ reduced, onOpen }) {
  const [opening, setOpening] = useState(false)
  const timer = useRef(null)
  const button = useRef(null)
  useEffect(() => { button.current?.focus({ preventScroll: true }); return () => clearTimeout(timer.current) }, [])
  function open() {
    if (opening) return
    if (reduced) { onOpen(); return }
    setOpening(true)
    timer.current = setTimeout(onOpen, 2100)
  }
  return <div className={`en-envelope${opening ? ' is-opening' : ''}`} aria-label="Una carta de Elena y Nicolás">
    <div className="en-envelope-back" />
    <div className="en-envelope-letter"><span>Una carta junto al mar</span><p>Elena <i>&amp;</i> Nicolás</p><small>12 de junio de 2027 · Costa Brava</small></div>
    <div className="en-fold en-fold-left" /><div className="en-fold en-fold-right" /><div className="en-fold en-fold-bottom" />
    <div className="en-envelope-flap" />
    <img className="en-envelope-top-shells" src={shells} alt="" width="1024" height="1024" />
    <div className="en-envelope-address"><span>Para ti, que eres parte</span><span>de nuestra historia.</span></div>
    <button ref={button} className="en-seal" onClick={open} disabled={opening} aria-label="Romper el sello y abrir la invitación"><Shell /></button>
    <p className="en-envelope-hint">toca el sello para abrir la invitación</p>
    <img className="en-envelope-shells" src={shells} alt="" width="1024" height="1024" />
  </div>
}

function Countdown() {
  const [remaining, setRemaining] = useState(() => Math.max(0, weddingDate - Date.now()))
  useEffect(() => { const t = setInterval(() => setRemaining(Math.max(0, weddingDate - Date.now())), 1000); return () => clearInterval(t) }, [])
  const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60]
  return <div className="en-countdown" aria-label="Tiempo hasta la boda">{values.map((v, i) => <div key={i}><strong>{String(v).padStart(2, '0')}</strong><span>{['Días', 'Horas', 'Minutos', 'Segundos'][i]}</span></div>)}</div>
}

// Un pequeño paisaje sonoro propio, sintetizado al pulsar; no carga audio de otro evento.
function SeaMusic() {
  const engine = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => () => { if (engine.current) { clearInterval(engine.current.timer); engine.current.ctx.close() } }, [])
  async function toggle() {
    setError('')
    try {
      if (!engine.current) {
        const AudioEngine = window.AudioContext || window.webkitAudioContext
        if (!AudioEngine) throw new Error('unavailable')
        const ctx = new AudioEngine()
        const master = ctx.createGain(); master.gain.value = .15; master.connect(ctx.destination)
        const delay = ctx.createDelay(2); delay.delayTime.value = .65
        const feedback = ctx.createGain(); feedback.gain.value = .22
        delay.connect(feedback); feedback.connect(delay); delay.connect(master)
        const chords = [[261.63, 329.63, 392, 493.88], [220, 261.63, 329.63, 392], [174.61, 220, 261.63, 329.63], [196, 246.94, 293.66, 392]]
        let beat = 0
        function phrase() {
          const chord = chords[beat++ % chords.length]
          chord.forEach((hz, i) => {
            const oscillator = ctx.createOscillator(), gain = ctx.createGain()
            const start = ctx.currentTime + i * .65
            oscillator.type = 'sine'; oscillator.frequency.value = hz
            gain.gain.setValueAtTime(0, start); gain.gain.linearRampToValueAtTime(.16, start + .035); gain.gain.exponentialRampToValueAtTime(.001, start + 4.8)
            oscillator.connect(gain); gain.connect(master); gain.connect(delay)
            oscillator.start(start); oscillator.stop(start + 5)
          })
        }
        phrase(); engine.current = { ctx, timer: setInterval(() => { if (ctx.state === 'running') phrase() }, 4300) }
      }
      const ctx = engine.current.ctx
      if (playing) { await ctx.suspend(); setPlaying(false) }
      else { await ctx.resume(); setPlaying(ctx.state === 'running') }
    } catch { setError('El sonido no está disponible en este navegador.'); setPlaying(false) }
  }
  return <div className="en-music">
    {!playing && <span className="en-music-hint">un poco de música ↙</span>}
    <button onClick={toggle} aria-label={playing ? 'Pausar música' : 'Reproducir música'} aria-pressed={playing}><span className={playing ? 'is-spinning' : ''} aria-hidden="true">♫</span></button>
    <p className="en-sr" role="status">{error}</p>
  </div>
}

function RSVP() {
  const [expanded, setExpanded] = useState(false)
  const [sent, setSent] = useState(false)
  const [attending, setAttending] = useState('yes')
  const name = useRef(null), result = useRef(null), trigger = useRef(null), panel = useRef(null)
  useEffect(() => {
    if (!expanded) return
    name.current?.focus({ preventScroll: true })
    panel.current?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }, [expanded])
  useEffect(() => { if (sent) result.current?.focus() }, [sent])
  return <section className="en-rsvp en-section" id="confirmar" aria-labelledby="en-rsvp-title">
    <div className="en-reveal"><Shell className="en-section-shell" /><p className="en-kicker">La última pieza de este día eres tú</p>
      <h2 id="en-rsvp-title"><Written>¿Nos acompañas?</Written></h2>
      <p>Nos hace ilusión guardarte un sitio.<br />Confírmanos antes del <strong>12 de abril de 2027.</strong></p>
      <button className="en-button" ref={trigger} aria-expanded={expanded} aria-controls="en-rsvp-panel" onClick={() => setExpanded(v => !v)}>{expanded ? 'Cerrar formulario' : 'Confirmar asistencia'} <span aria-hidden="true">↗</span></button>
    </div>
    <div ref={panel} id="en-rsvp-panel" className="en-form-paper" hidden={!expanded}>
      <p className="en-demo">Invitación de muestra. Las respuestas no se envían ni se guardan.</p>
      {sent ? <div className="en-success"><Shell /><h3 ref={result} tabIndex={-1}>¡Gracias por probarla!</h3><p>Esta confirmación es una demostración.<br />No se ha enviado ninguna respuesta.</p><button className="en-text-button" onClick={() => { setSent(false); requestAnimationFrame(() => name.current?.focus()) }}>Probar otra respuesta</button></div> : <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
        <label htmlFor="en-name">Tu nombre o familia</label><input ref={name} id="en-name" name="nombre" autoComplete="name" required maxLength={120} placeholder="Ej. Familia Pérez" />
        <label htmlFor="en-attending">¿Podrás venir?</label><select id="en-attending" name="asistencia" value={attending} onChange={e => setAttending(e.target.value)}><option value="yes">Sí, allí estaremos</option><option value="no">No podremos acompañaros</option></select>
        {attending === 'yes' && <><label htmlFor="en-guests">Personas, incluyéndote</label><input id="en-guests" name="personas" type="number" min="1" max="10" defaultValue="1" required /><label htmlFor="en-guests-names">Nombres de quienes asistirán</label><textarea id="en-guests-names" name="asistentes" rows="3" maxLength={1000} placeholder="Para preparar cada detalle…" /></>}
        <button className="en-button" type="submit">Confirmar respuesta de prueba <span aria-hidden="true">↗</span></button>
      </form>}
      <button className="en-text-button" onClick={() => { setExpanded(false); trigger.current?.focus() }}>Cerrar confirmación</button>
    </div>
  </section>
}

export default function MarineApp() {
  const [opened, setOpened] = useState(false)
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const root = useRef(null), heading = useRef(null)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)'), change = () => setReduced(media.matches)
    media.addEventListener('change', change); return () => media.removeEventListener('change', change)
  }, [])
  useEffect(() => {
    const previous = document.documentElement.style.overflow
    if (!opened) document.documentElement.style.overflow = 'hidden'
    else heading.current?.focus({ preventScroll: true })
    return () => { document.documentElement.style.overflow = previous }
  }, [opened])
  useEffect(() => {
    if (!opened || reduced || !('IntersectionObserver' in window)) return
    const elements = root.current.querySelectorAll('.en-reveal')
    elements.forEach(el => el.classList.add('en-pending'))
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('en-visible'); observer.unobserve(entry.target) }
    }), { threshold: .08 })
    elements.forEach(el => observer.observe(el))
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('en-pending', 'en-visible')) }
  }, [opened, reduced])
  return <div ref={root} className="en-marine" data-motion={reduced ? 'reduced' : 'full'}>
    {!opened && <Envelope reduced={reduced} onOpen={() => setOpened(true)} />}
    {opened && <SeaMusic />}
    <main inert={!opened} className={opened ? 'en-is-open' : 'en-is-closed'}>
      <a className="en-skip" href="#confirmar">Ir a confirmar asistencia</a>
      <header className="en-hero" id="inicio">
        <div className="en-topline"><span>Elena &amp; Nicolás</span><span>Costa Brava · 2027</span></div>
        <div className="en-hero-copy en-reveal"><p className="en-kicker">El mar nos trajo hasta aquí</p>
          <h1 ref={heading} tabIndex={-1}><Written>Elena</Written><i>&amp;</i><Written>Nicolás</Written></h1>
          <div className="en-date"><span>Sábado</span><strong>12 . 06 . 27</strong><span>A las 19:00 h</span></div>
          <p className="en-hero-note">Una vida juntos.<br /><em>Y el Mediterráneo de testigo.</em></p>
        </div>
        <figure className="en-hero-landscape"><img src={coast} alt="Acuarela de una cala de la Costa Brava, con rocas doradas y un velero sobre el Mediterráneo" width="1536" height="1024" fetchPriority="high" /></figure>
        <svg className="en-gulls" viewBox="0 0 160 70" fill="none" aria-hidden="true"><path d="M5 35q13-12 26 0 13-12 26 0m12-18q10-9 20 0 10-9 20 0m8 37q8-8 16 0 8-8 16 0" /></svg>
        <img className="en-hero-shells" src={shells} alt="" width="1024" height="1024" />
        <a href="#historia" className="en-scroll">Nuestra historia <span aria-hidden="true">↓</span></a>
        <span className="en-cover-label" aria-hidden="true">Una celebración junto al mar</span>
      </header>

      <section className="en-story en-section" id="historia" aria-labelledby="en-story-title">
        <span className="en-section-no">01 / La historia</span>
        <div className="en-story-mark en-reveal"><Monogram /></div>
        <div className="en-story-copy en-reveal"><p className="en-kicker">Hay lugares que siempre serán casa</p>
          <h2 id="en-story-title"><Written>Entre todas las mareas,</Written><br /><em><Written>nos elegimos.</Written></em></h2>
          <p>Hay caminos que empiezan en un puerto cualquiera y terminan llevándote a casa.</p>
          <p>El nuestro empezó frente al mar, en una tarde que no sabíamos que lo cambiaría todo. Hoy nos trae hasta aquí, listos para prometernos para siempre.</p>
          <p>Queremos celebrarlo contigo, frente al horizonte que tanto queremos, brindando por lo que fuimos, lo que somos y lo que seremos.</p>
          <span className="en-script">Elena y Nicolás</span>
        </div><Waves />
      </section>

      <section className="en-place en-section" aria-labelledby="en-place-title">
        <div className="en-reveal"><p className="en-kicker">Nuestro rincón del mundo</p><h2 id="en-place-title"><Written>Donde el tiempo</Written><br /><em><Written>se queda en la orilla.</Written></em></h2></div>
        <figure className="en-coast-figure en-reveal"><img src={coast} alt="Paisaje ilustrado de la Costa Brava en tonos azul océano y arena" width="1536" height="1024" loading="lazy" /><figcaption>Costa Brava, Girona · El horizonte de nuestra historia</figcaption></figure>
        <p className="en-place-note en-reveal">La luz de junio, la brisa salada y esa manera que tiene el mar de hacerlo todo un poco más bonito. Aquí empieza nuestro siempre.</p>
      </section>

      <section className="en-celebration en-section" id="celebracion" aria-labelledby="en-date-title">
        <span className="en-section-no">02 / La celebración</span>
        <div className="en-reveal"><p className="en-kicker">Guarda un día para nosotros</p><h2 id="en-date-title"><Written>12 de junio de 2027</Written></h2><p className="en-date-sub">Sábado · Costa Brava · 19:00 h</p><Countdown /></div>
        <div className="en-venues">
          <article className="en-reveal"><figure><img src={chapel} alt="Interpretación en acuarela de la Ermita de Sant Elm, frente al Mediterráneo" width="1536" height="1024" loading="lazy" /></figure><p className="en-kicker">El sí, quiero · 19:00 h</p><h3>Ermita de Sant Elm</h3><p>Costa Brava, Girona</p><a className="en-text-link" href="https://www.google.com/maps/search/?api=1&query=Ermita+de+Sant+Elm+Sant+Feliu+de+Guixols" target="_blank" rel="noopener noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a></article>
          <article className="en-reveal"><figure><img src={finca} alt="Ilustración de la finca de muestra Els Ginesters, con su terraza preparada para la celebración" width="1536" height="1024" loading="lazy" /></figure><p className="en-kicker">La celebración · 21:00 h</p><h3>Finca Els Ginesters</h3><p>Costa Brava, Girona</p><a className="en-text-link" href="https://www.google.com/maps/search/?api=1&query=Costa+Brava+Girona" target="_blank" rel="noopener noreferrer">Ver la zona <span aria-hidden="true">↗</span></a><small className="en-venue-note">Finca de muestra · ubicación ilustrativa</small></article>
        </div>
      </section>

      <section className="en-day en-section" aria-labelledby="en-day-title"><span className="en-section-no">03 / El día, despacio</span>
        <div className="en-reveal"><p className="en-kicker">De la primera llegada al último baile</p><h2 id="en-day-title"><Written>Sin prisa,</Written> <em><Written>contigo.</Written></em></h2></div>
        <ol className="en-timeline">{moments.map(([hour, title, description, icon]) => <li className="en-reveal" key={hour}><div className="en-moment-art"><DayIcon name={icon} /></div><div><time>{hour}</time><h3>{title}</h3><p>{description}</p></div></li>)}</ol><Waves />
      </section>

      <section className="en-dress en-section" aria-labelledby="en-dress-title"><span className="en-section-no">04 / Los pequeños detalles</span>
        <img className="en-dress-shells en-reveal" src={shells} alt="" width="1024" height="1024" loading="lazy" />
        <div className="en-dress-copy en-reveal"><p className="en-kicker">Elegancia con brisa de mar</p><h2 id="en-dress-title"><Written>Vestirse de verano.</Written></h2><p>Colores suaves, telas ligeras y calzado apto para arena y césped. Queremos verte elegante, pero sobre todo, disfrutar.</p>
          <ul className="en-palette">{[['Océano', '#1f5c78'], ['Hortensia', '#8b93c9'], ['Arena', '#c9a35c'], ['Verde mar', '#7c9b8e']].map(([label, color]) => <li key={label}><span style={{ '--swatch': color }} /><small>{label}</small></li>)}</ul>
          <p className="en-dress-note">Un pequeño favor: reservamos el blanco y el marfil completo para la novia.</p>
        </div>
      </section>
      <RSVP />
      <footer className="en-footer"><Waves /><div className="en-reveal"><Monogram /><p className="en-kicker">Todos los caminos nos traen a este día</p><h2>Nos vemos <em>junto al mar.</em></h2><p>Vuestra presencia lo hará inolvidable.</p><span className="en-script">Con todo nuestro cariño</span><p className="en-footer-date">Elena &amp; Nicolás · 12 de junio de 2027</p></div><div className="en-footer-bottom"><span>Invitación de muestra · Datos ficticios</span><a href="/">Diseñado para recordar <strong>Invitale</strong></a></div></footer>
    </main>
  </div>
}
