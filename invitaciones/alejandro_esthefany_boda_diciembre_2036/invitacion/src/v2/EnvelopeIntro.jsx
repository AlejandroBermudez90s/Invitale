import { useEffect, useRef, useState } from 'react'
import sobre from './assets/sobre-floral-ligero.webp'
import papel from './assets/sobre-floral-papel.webp'
import './EnvelopeIntro.css'

// La misma duración coordina la última transición CSS y la entrega del foco.
const OPENING_DURATION = 6200
const REVEAL_DELAY = 2600

export default function EnvelopeIntro({ reducedMotion, onReveal, onOpened }) {
  const [opening, setOpening] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!opening) return
    dialogRef.current?.focus({ preventScroll: true })
    const revealTimer = window.setTimeout(onReveal, reducedMotion ? 0 : REVEAL_DELAY)
    const timer = window.setTimeout(onOpened, reducedMotion ? 0 : OPENING_DURATION)
    return () => { window.clearTimeout(revealTimer); window.clearTimeout(timer) }
  }, [opening, reducedMotion, onReveal, onOpened])

  return <section ref={dialogRef} tabIndex={-1} className={`ae-envelope${opening ? ' ae-envelope-opening' : ''}`} role="dialog" aria-modal="true" aria-labelledby="ae-envelope-title" aria-describedby="ae-envelope-instruction">
    <div className="ae-envelope-heading">
      <p className="ae-kicker">Hay historias que merecen una carta</p>
      <h1 id="ae-envelope-title">Alejandro <span>&amp;</span> Esthefany</h1>
      <p className="ae-envelope-date">26 de diciembre de 2036</p>
    </div>

    <div className="ae-envelope-stage">
      <div className="ae-envelope-object" aria-hidden="true" style={{ '--ae-envelope-image': `url("${papel}")`, '--ae-envelope-seal-image': `url("${sobre}")` }}>
        <div className="ae-envelope-lining" />
        <div className="ae-envelope-back-panel" />
        <div className="ae-envelope-front" />
        <div className="ae-envelope-flap"><div className="ae-envelope-flap-face" /><div className="ae-envelope-flap-back" /></div>
        <div className="ae-envelope-seal" />
      </div>
      <button className="ae-envelope-touch" autoFocus disabled={opening} onClick={() => setOpening(true)} aria-label="Romper el sello y abrir la invitación" />
    </div>

    <p id="ae-envelope-instruction" className="ae-envelope-instruction">toca el sello para abrir la invitación</p>
  </section>
}
