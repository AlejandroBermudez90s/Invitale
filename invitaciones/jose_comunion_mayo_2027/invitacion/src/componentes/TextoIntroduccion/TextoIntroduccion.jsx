import './TextoIntroduccion.css'
import NubeCorner from '../Ilustraciones/NubeCorner'
import Pajarito from '../Ilustraciones/Pajarito'
import useReveal from '../../hooks/useReveal'

const TextoIntroduccion = () => {
    const [ref, visible] = useReveal()

    return (
        <div className="texto-introduccion-section">
            <div className="postal-fondo texto-introduccion-fondo"></div>
            <NubeCorner corner="tl" className="floral-corner" />
            <NubeCorner corner="tr" className="floral-corner" />
            <NubeCorner corner="bl" className="floral-corner" />
            <NubeCorner corner="br" className="floral-corner" />
            <Pajarito top="10%" duration={24} delay={3} reverse />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-7">
                        <div ref={ref} className={`text-center section-header stagger ${visible ? 'is-visible' : ''}`}>

                            <p className="verso fuenteParrafo">
                                ¡Hola! Soy José y este año viviré una aventura todavía más grande que llegar
                                hasta Star Command.
                            </p>

                            <p className="verso fuenteParrafo">
                                El día de mi Primera Comunión quiero compartir la mesa junto a mi familia
                                y mis amigos de juguete favoritos.
                            </p>

                            <p className="script-quote">¡Al infinito... y mucho más allá!</p>

                            <p className="verso fuenteParrafo">
                                Ven a celebrar conmigo este día tan especial,
                            </p>

                            <p className="verso fuenteParrafo">
                                habrá risas, sorpresas y mucha fiesta hasta que se ponga el sol.
                            </p>

                            <p className="firma-elegante">
                                <cite>José</cite>
                            </p>

                            <div className="boton-container">
                                <a href="#detalles" className="btn btn-elegante px-4 py-2">
                                    <span>Ver detalles de la misión</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextoIntroduccion
