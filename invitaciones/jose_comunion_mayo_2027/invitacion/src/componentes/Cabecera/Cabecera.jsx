import { useEffect, useState } from 'react'
import './Cabecera.css'
import InsigniaSheriff from '../Ilustraciones/InsigniaSheriff'
import NubeCorner from '../Ilustraciones/NubeCorner'
import CieloNubes from '../Ilustraciones/CieloNubes'
import Pajarito from '../Ilustraciones/Pajarito'
import PersonajeToyStory from '../Ilustraciones/PersonajeToyStory'
import buzz from '../../assets/buzz.png'
import jessie from '../../assets/jessie.png'

const Cabecera = () => {
    const [entrada, setEntrada] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setEntrada(true), 250)
        return () => clearTimeout(t)
    }, [])

    return (
        <div className={`cabecera-hero ${entrada ? 'entrada' : ''}`}>
            <CieloNubes />
            <NubeCorner corner="tl" className="floral-corner hero-corner" />
            <NubeCorner corner="br" className="floral-corner hero-corner" />
            <Pajarito top="14%" duration={24} delay={2} />

            <div className="cabecera-spotlight" aria-hidden="true"></div>

            <PersonajeToyStory nombre="Buzz" src={buzz} className="personaje-buzz reveal-item delay-1" style={{ top: '5%', right: '3%', width: 'clamp(90px, 17vw, 190px)' }} />
            <PersonajeToyStory nombre="Jessie" src={jessie} className="personaje-jessie reveal-item delay-2" style={{ bottom: '7%', left: '2%', width: 'clamp(75px, 14vw, 155px)' }} />

            <div className="cabecera-marco">
                <p className="cabecera-eyebrow reveal-item delay-1">¡Al infinito y mi Primera Comunión!</p>

                <div className="cabecera-monograma reveal-item delay-2">
                    <div className="cabecera-wreath"><InsigniaSheriff /></div>
                    <div className="cabecera-nombres">
                        <span className="nombre rotulo-juguete">José</span>
                    </div>
                </div>

                <p className="cabecera-banner reveal-item delay-4">
                    <span className="banner-rojo">Mi Primera Comunión</span>
                </p>

                <p className="cabecera-fecha reveal-item delay-5">15 · 05 · 2027</p>
                <p className="cabecera-lugar reveal-item delay-6">Parroquia San Roque</p>
            </div>

            <a href="#textoIntroduccion" className="cabecera-scroll reveal-item delay-6" aria-label="Seguir bajando">
                <span className="linea-scroll"></span>
                <i className="bi bi-chevron-down"></i>
            </a>
        </div>
    )
}

export default Cabecera
