import { useEffect, useState } from 'react'
import './Cabecera.css'
import Wreath from '../Ilustraciones/Wreath'
import FloralCorner from '../Ilustraciones/FloralCorner'
import Pajarito from '../Ilustraciones/Pajarito'

const Cabecera = () => {
    const [entrada, setEntrada] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setEntrada(true), 250)
        return () => clearTimeout(t)
    }, [])

    return (
        <div className={`cabecera-hero ${entrada ? 'entrada' : ''}`}>
            <FloralCorner corner="tl" className="floral-corner hero-corner" />
            <FloralCorner corner="tr" className="floral-corner hero-corner" />
            <FloralCorner corner="bl" className="floral-corner hero-corner" />
            <FloralCorner corner="br" className="floral-corner hero-corner" />
            <Pajarito top="14%" duration={24} delay={1} />
            <Pajarito top="78%" duration={28} delay={9} reverse />

            <div className="cabecera-marco">
                <p className="cabecera-eyebrow reveal-item delay-1">Nos casamos</p>

                <div className="cabecera-monograma reveal-item delay-2">
                    <div className="cabecera-wreath"><Wreath /></div>
                    <div className="cabecera-nombres">
                        <span className="nombre">Alejandro</span>
                        <span className="ampersand">&amp;</span>
                        <span className="nombre">Esthefany</span>
                    </div>
                </div>

                <p className="cabecera-fecha reveal-item delay-4">26 · 12 · 2036</p>
                <p className="cabecera-lugar reveal-item delay-5">Segovia, España</p>
            </div>

            <a href="#textoIntroduccion" className="cabecera-scroll reveal-item delay-6" aria-label="Seguir bajando">
                <span className="linea-scroll"></span>
                <i className="bi bi-chevron-down"></i>
            </a>
        </div>
    )
}

export default Cabecera
