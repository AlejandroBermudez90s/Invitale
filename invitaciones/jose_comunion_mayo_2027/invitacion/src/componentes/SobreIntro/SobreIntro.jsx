import { useState } from 'react'
import './SobreIntro.css'
import '../Cabecera/Cabecera.css'
import InsigniaSheriff from '../Ilustraciones/InsigniaSheriff'
import NubeCorner from '../Ilustraciones/NubeCorner'
import CieloNubes from '../Ilustraciones/CieloNubes'

// El cofre de juguetes reutiliza las clases de Cabecera.css para que, al
// terminar de ampliarse a pantalla completa, sea visualmente idéntico a la
// cabecera real que queda debajo — el intercambio al desmontar este
// componente es invisible.
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
            <NubeCorner corner="tl" className="floral-corner sobre-corner" />
            <NubeCorner corner="br" className="floral-corner sobre-corner" />

            <div className="cofre">
                <div className="cofre-cuerpo"></div>
                <div className="cofre-tapa">
                    <div className="cofre-tapa-borde"></div>
                </div>

                <div className="cofre-sello">
                    <svg viewBox="0 0 60 60" className="sello-estrella" aria-hidden="true">
                        <path d="M30,6 L37,24 L57,24 L41,36 L47,55 L30,44 L13,55 L19,36 L3,24 L23,24 Z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            <div className="carta cabecera-hero entrada">
                <CieloNubes />
                <NubeCorner corner="tl" className="floral-corner hero-corner" />
                <NubeCorner corner="br" className="floral-corner hero-corner" />
                <div className="cabecera-spotlight" aria-hidden="true"></div>

                <div className="cabecera-marco">
                    <p className="cabecera-eyebrow reveal-item">Toca para abrir</p>

                    <div className="cabecera-monograma reveal-item">
                        <div className="cabecera-wreath"><InsigniaSheriff /></div>
                        <div className="cabecera-nombres">
                            <span className="nombre rotulo-juguete">José</span>
                        </div>
                    </div>

                    <p className="cabecera-banner reveal-item">
                        <span className="banner-rojo">Mi Primera Comunión</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SobreIntro
