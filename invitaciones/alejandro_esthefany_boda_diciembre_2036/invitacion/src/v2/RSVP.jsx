import { useEffect, useRef, useState } from 'react'
import WrittenText from './WrittenText'
import InvitationIcon from './InvitationIcon'
import BotanicalAccent from './BotanicalAccent'
import EnvironmentalSketch from './EnvironmentalSketch'

export default function RSVP() {
  const [expanded, setExpanded] = useState(false)
  const [sent, setSent] = useState(false)
  const panelRef = useRef(null)
  const nameRef = useRef(null)
  const resultRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!expanded) return
    nameRef.current?.focus({ preventScroll: true })
    panelRef.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' })
  }, [expanded])
  useEffect(() => { if (sent) resultRef.current?.focus() }, [sent])

  return <section className="ae-rsvp ae-section" id="confirmar" aria-labelledby="ae-rsvp-title">
    <BotanicalAccent side="right" birds />
    <div className="ae-rsvp-intro">
      <div className="ae-rsvp-seal" aria-hidden="true"><InvitationIcon name="pencil" /></div>
      <p className="ae-kicker"><WrittenText text="Nos falta tu sí" /></p>
      <h2 id="ae-rsvp-title"><WrittenText text="¿Nos acompañas?" /></h2>
      <p><WrittenText text="Tenemos un sitio reservado para ti." /><br /><WrittenText text="Confírmanos antes del 26 de junio de 2036." /></p>
      <span className="ae-script"><WrittenText text="Contigo será más bonito" /></span>
      <button ref={triggerRef} className="ae-button ae-rsvp-trigger" aria-expanded={expanded} aria-controls="ae-rsvp-panel" onClick={() => setExpanded(value => !value)}>
        <InvitationIcon name="pencil" />{expanded ? 'Cerrar confirmación' : 'Rellenar confirmación de asistencia'}
      </button>
    </div>
    <div ref={panelRef} id="ae-rsvp-panel" className="ae-form-paper" hidden={!expanded}>
      <p className="ae-demo-note">Invitación de muestra · Las respuestas no se envían ni se guardan.</p>
      {sent ? <div className="ae-success">
        <span aria-hidden="true">✓</span>
        <h3 ref={resultRef} tabIndex={-1}>¡Gracias por probarla!</h3>
        <p>Así se verá la confirmación en tu invitación. Esta respuesta es solo una demostración.</p>
        <button className="ae-button" onClick={() => { setSent(false); requestAnimationFrame(() => nameRef.current?.focus()) }}>Probar otra respuesta</button>
      </div> : <form onSubmit={event => { event.preventDefault(); setSent(true) }}>
        <label htmlFor="ae-family">Tu nombre o familia</label>
        <input ref={nameRef} id="ae-family" name="nombre" autoComplete="name" placeholder="Familia Pérez" required maxLength={120} />
        <label htmlFor="ae-attending">¿Podrás venir?</label>
        <select id="ae-attending" name="asistencia"><option>Sí, allí estaremos</option><option>No podremos acompañaros</option></select>
        <label htmlFor="ae-guests">Número de personas, incluyéndote</label>
        <input id="ae-guests" name="personas" type="number" min="1" max="10" defaultValue="1" required />
        <label htmlFor="ae-names">Nombres de quienes asistirán</label>
        <textarea id="ae-names" name="asistentes" rows="3" placeholder="Para preparar cada detalle…" maxLength={1000} />
        <button className="ae-button ae-button-solid" type="submit">Confirmar asistencia <span aria-hidden="true">↗</span></button>
      </form>}
      <button className="ae-text-button ae-form-close" onClick={() => { setExpanded(false); triggerRef.current?.focus() }}>Cerrar confirmación</button>
    </div>
    <EnvironmentalSketch motif="rings" />
  </section>
}
