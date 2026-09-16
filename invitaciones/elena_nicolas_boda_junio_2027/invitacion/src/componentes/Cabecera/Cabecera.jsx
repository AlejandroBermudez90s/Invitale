import { useEffect, useState } from 'react'
import './Cabecera.css'
import VentanaMar from '../Ilustraciones/VentanaMar'
import Pajarito from '../Ilustraciones/Pajarito'

const Cabecera = () => {
    const [entrada, setEntrada] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setEntrada(true), 250)
        return () => clearTimeout(t)
    }, [])

    return (
        <div className={`cabecera-hero ${entrada ? 'entrada' : ''}`}>
            <div className="cabecera-fondo" aria-hidden="true">
                <VentanaMar className="cabecera-ilustracion" />
            </div>
            <div className="cabecera-velo" aria-hidden="true"></div>
            <Pajarito top="14%" duration={24} delay={1} claro />
            <Pajarito top="76%" duration={28} delay={9} reverse claro />

            <div className="cabecera-marco">
                <p className="cabecera-eyebrow reveal-item delay-1">Nos casamos</p>

                <div className="cabecera-nombres reveal-item delay-2">
                    <span className="nombre">Elena</span>
                    <span className="ampersand">&amp;</span>
                    <span className="nombre">Nicolás</span>
                </div>

                <p className="cabecera-fecha reveal-item delay-4">12 · 06 · 2027</p>
                <p className="cabecera-lugar reveal-item delay-5">Costa Brava, España</p>
            </div>

            <a href="#textoIntroduccion" className="cabecera-scroll reveal-item delay-6" aria-label="Seguir bajando">
                <span className="linea-scroll"></span>
                <i className="bi bi-chevron-down"></i>
            </a>
        </div>
    )
}

export default Cabecera
