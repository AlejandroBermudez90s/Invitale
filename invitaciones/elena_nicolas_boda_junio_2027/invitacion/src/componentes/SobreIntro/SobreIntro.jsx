import { useState } from 'react'
import './SobreIntro.css'
import '../Cabecera/Cabecera.css'
import VentanaMar from '../Ilustraciones/VentanaMar'

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
                            <stop offset="0%" stopColor="#3d6f8f" />
                            <stop offset="100%" stopColor="#123049" />
                        </linearGradient>
                    </defs>
                    <polygon points="0,0 100,0 50,58" fill="url(#solapa-gradiente)" stroke="var(--gold)" strokeWidth="0.5" strokeOpacity="0.55" />
                </svg>

                <div className="sobre-sello">
                    <span className="sello-iniciales">E&amp;N</span>
                </div>

                <p className="sobre-texto">Querido invitado,<br />estás invitado a nuestra boda</p>
            </div>

            <div className="carta cabecera-hero entrada">
                <div className="cabecera-fondo" aria-hidden="true">
                    <VentanaMar className="cabecera-ilustracion" />
                </div>
                <div className="cabecera-velo" aria-hidden="true"></div>

                <div className="cabecera-marco">
                    <p className="cabecera-eyebrow reveal-item">Nos casamos</p>

                    <div className="cabecera-nombres reveal-item">
                        <span className="nombre">Elena</span>
                        <span className="ampersand">&amp;</span>
                        <span className="nombre">Nicolás</span>
                    </div>

                    <p className="cabecera-fecha reveal-item">12 · 06 · 2027</p>
                    <p className="cabecera-lugar reveal-item">Costa Brava, España</p>
                </div>
            </div>
        </div>
    )
}

export default SobreIntro
