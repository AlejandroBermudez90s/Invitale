import './TextoIntroduccion.css'
import FloralCorner from '../Ilustraciones/FloralCorner'
import Pajarito from '../Ilustraciones/Pajarito'
import useReveal from '../../hooks/useReveal'

const TextoIntroduccion = () => {
    const [ref, visible] = useReveal()

    return (
        <div className="texto-introduccion-section">
            <div className="postal-fondo texto-introduccion-fondo"></div>
            <FloralCorner corner="tl" className="floral-corner" />
            <FloralCorner corner="tr" className="floral-corner" />
            <FloralCorner corner="bl" className="floral-corner" />
            <FloralCorner corner="br" className="floral-corner" />
            <Pajarito top="10%" duration={26} delay={3} reverse />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-7">
                        <div ref={ref} className={`text-center section-header stagger ${visible ? 'is-visible' : ''}`}>

                            <p className="verso fuenteParrafo">
                                Hay caminos que empiezan en un puerto cualquiera y terminan llevándote a casa.
                            </p>

                            <p className="verso fuenteParrafo">
                                El nuestro empezó frente al mar, en una tarde que no sabíamos que lo cambiaría todo,
                            </p>

                            <p className="verso fuenteParrafo">
                                y hoy nos trae hasta aquí, listos para prometernos para siempre.
                            </p>

                            <p className="script-quote">Nuestra historia de amor</p>

                            <p className="verso fuenteParrafo">
                                Queremos compartir este día contigo,
                            </p>

                            <p className="verso fuenteParrafo">
                                frente al horizonte que tanto queremos,
                            </p>

                            <p className="verso fuenteParrafo">
                                brindando por lo que fuimos, lo que somos y lo que seremos.
                            </p>

                            <p className="firma-elegante">
                                <cite>Elena &amp; Nicolás</cite>
                            </p>

                            <div className="boton-container">
                                <a href="#detalles" className="btn btn-elegante px-4 py-2">
                                    <span>Ver detalles de la celebración</span>
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
