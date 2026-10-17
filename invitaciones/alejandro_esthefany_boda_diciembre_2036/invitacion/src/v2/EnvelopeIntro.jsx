import { useEffect, useRef, useState } from 'react'
import sobre from './assets/sobre-relieve.webp'
import './EnvelopeIntro.css'

// La misma duración coordina la última transición CSS y la entrega del foco.
const OPENING_DURATION = 7600

export default function EnvelopeIntro({ reducedMotion, onReveal, onOpened }) {
  const [opening, setOpening] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!opening) return
    dialogRef.current?.focus({ preventScroll: true })
    const revealTimer = window.setTimeout(onReveal, reducedMotion ? 0 : 5300)
    const timer = window.setTimeout(onOpened, reducedMotion ? 0 : OPENING_DURATION)
    return () => { window.clearTimeout(revealTimer); window.clearTimeout(timer) }
  }, [opening, reducedMotion, onReveal, onOpened])

  return <section ref={dialogRef} tabIndex={-1} className={`ae-envelope${opening ? ' ae-envelope-opening' : ''}`} role="dialog" aria-modal="true" aria-labelledby="ae-envelope-title" aria-describedby="ae-envelope-instruction">
    <div className="ae-envelope-heading">
      <p className="ae-kicker">Hay historias que merecen una carta</p>
      <h1 id="ae-envelope-title">Alejandro <span>&amp;</span> Esthefany</h1>
      <p className="ae-envelope-date">26 de diciembre de 2036 · Segovia</p>
    </div>

    <div className="ae-envelope-stage">
      <div className="ae-envelope-shadow" aria-hidden="true" />
      <div className="ae-envelope-object" aria-hidden="true" style={{ '--ae-envelope-image': `url("${sobre}")` }}>
        <div className="ae-envelope-lining" />
        <div className="ae-envelope-letter">
          <span className="ae-letter-kicker">Con cariño, para ti</span>
          <span className="ae-letter-names">Alejandro<i>&amp;</i>Esthefany</span>
          <span className="ae-letter-rule" />
          <span className="ae-letter-date">26 · XII · 2036</span>
          <span className="ae-letter-script">El principio de nuestro siempre</span>
        </div>
        <div className="ae-envelope-front"><div className="ae-envelope-paper-patch" /></div>
        <div className="ae-envelope-flap"><div className="ae-envelope-flap-face"><div className="ae-envelope-paper-patch" /></div><div className="ae-envelope-flap-back" /></div>
        <div className="ae-envelope-seal" />
        <div className="ae-envelope-closed-art" />
      </div>
      <button className="ae-envelope-touch" autoFocus disabled={opening} onClick={() => setOpening(true)} aria-label="Romper el sello y abrir la invitación" />
    </div>

    <div className="ae-envelope-actions">
      <p id="ae-envelope-instruction" className="ae-envelope-dedication">Toca el sello para abrir</p>
      <p className="ae-envelope-hint" role="status">{opening ? 'Nuestra historia está a punto de comenzar…' : 'Una carta, para ti'}</p>
    </div>
  </section>
}
