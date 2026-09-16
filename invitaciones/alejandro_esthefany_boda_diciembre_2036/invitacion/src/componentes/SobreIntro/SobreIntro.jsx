import { useState } from 'react'
import './SobreIntro.css'
import '../Cabecera/Cabecera.css'
import Wreath from '../Ilustraciones/Wreath'
import FloralCorner from '../Ilustraciones/FloralCorner'

// La carta reutiliza las clases de Cabecera.css para que, al terminar de
// ampliarse a pantalla completa, sea visualmente idéntica a la cabecera real
// que queda debajo — el intercambio al desmontar este componente es invisible.
const SobreIntro = ({ onAbrir }) => {
    const [abriendo, setAbriendo] = useState(false)

    const handleAbrir = () => {
        if (abriendo) return
        setAbriendo(true)
        setTimeout(onAbrir, 2500)
    }

    return (
        <div
            className={`sobre-overlay ${abriendo ? 'abriendo' : ''}`}
            onClick={handleAbrir}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleAbrir() }}
            aria-label="Abrir invitación"
        >
            <FloralCorner corner="tl" className="floral-corner sobre-corner" />
            <FloralCorner corner="tr" className="floral-corner sobre-corner" />
            <FloralCorner corner="bl" className="floral-corner sobre-corner" />
            <FloralCorner corner="br" className="floral-corner sobre-corner" />

            <div className="sobre">
                <div className="sobre-cuerpo"></div>

                <div className="sobre-cinta"></div>

                <div className="sobre-ramita">
                    <svg viewBox="0 0 40 60" aria-hidden="true">
                        <path d="M20,60 Q14,38 20,18" fill="none" stroke="var(--sage-deep)" strokeWidth="1.1" opacity="0.8" />
                        <path d="M20,36 Q10,30 6,18" fill="none" stroke="var(--sage-deep)" strokeWidth="1" opacity="0.75" />
                        <ellipse cx="6" cy="16" rx="5" ry="9" fill="var(--leaf)" opacity="0.9" transform="rotate(-30 6 16)" />
                        <path d="M20,22 Q28,17 34,20" fill="none" stroke="var(--sage-deep)" strokeWidth="1" opacity="0.75" />
                        <ellipse cx="34" cy="18" rx="4.5" ry="8" fill="var(--sage)" opacity="0.9" transform="rotate(35 34 18)" />
                        {[0, 72, 144, 216, 288].map((a) => (
                            <ellipse key={a} cx="20" cy="10" rx="4" ry="7" fill="var(--blush)" opacity="0.92" transform={`rotate(${a} 20 18)`} />
                        ))}
                        <circle cx="20" cy="18" r="2.6" fill="var(--gold)" />
                    </svg>
                </div>

                <svg className="sobre-solapa" viewBox="0 0 100 58" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="solapa-gradiente" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--sage-deep)" />
                            <stop offset="100%" stopColor="var(--sage)" />
                        </linearGradient>
                    </defs>
                    <polygon points="0,0 100,0 50,58" fill="url(#solapa-gradiente)" stroke="var(--gold)" strokeWidth="0.5" strokeOpacity="0.55" />
                </svg>

                <div className="sobre-sello">
                    <svg viewBox="0 0 60 60" className="sello-flor" aria-hidden="true">
                        {[0, 72, 144, 216, 288].map((a) => (
                            <ellipse key={a} cx="30" cy="19" rx="6.5" ry="11" fill="currentColor" opacity="0.92" transform={`rotate(${a} 30 30)`} />
                        ))}
                        <circle cx="30" cy="30" r="4.2" fill="currentColor" />
                    </svg>
                </div>

                <div className="sobre-texto">
                    <p className="sobre-nombres">Alejandro &amp; Esthefany</p>
                </div>
            </div>

            <div className="carta cabecera-hero entrada">
                <FloralCorner corner="tl" className="floral-corner hero-corner" />
                <FloralCorner corner="tr" className="floral-corner hero-corner" />
                <FloralCorner corner="bl" className="floral-corner hero-corner" />
                <FloralCorner corner="br" className="floral-corner hero-corner" />

                <div className="cabecera-marco">
                    <p className="cabecera-eyebrow reveal-item">Nos casamos</p>

                    <div className="cabecera-monograma reveal-item">
                        <div className="cabecera-wreath"><Wreath /></div>
                        <div className="cabecera-nombres">
                            <span className="nombre">Alejandro</span>
                            <span className="ampersand">&amp;</span>
                            <span className="nombre">Esthefany</span>
                        </div>
                    </div>

                    <p className="cabecera-fecha reveal-item">26 · 12 · 2036</p>
                    <p className="cabecera-lugar reveal-item">Segovia, España</p>
                </div>
            </div>
        </div>
    )
}

export default SobreIntro
