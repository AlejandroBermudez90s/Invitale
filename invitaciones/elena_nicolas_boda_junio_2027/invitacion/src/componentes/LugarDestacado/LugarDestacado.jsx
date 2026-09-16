import './LugarDestacado.css'
import ArcoCostero from '../Ilustraciones/ArcoCostero'
import FloralCorner from '../Ilustraciones/FloralCorner'
import Pajarito from '../Ilustraciones/Pajarito'
import useReveal from '../../hooks/useReveal'

const LugarDestacado = () => {
    const [ref, visible] = useReveal()

    return (
        <section className="lugar-destacado-section">
            <div className="postal-fondo lugar-destacado-fondo"></div>
            <FloralCorner corner="tl" className="floral-corner" />
            <FloralCorner corner="tr" className="floral-corner" />
            <FloralCorner corner="bl" className="floral-corner" />
            <FloralCorner corner="br" className="floral-corner" />
            <Pajarito top="92%" duration={25} delay={5} />

            <div ref={ref} className={`lugar-destacado-inner stagger ${visible ? 'is-visible' : ''}`}>
                <p className="eyebrow mb-2">Nuestro rincón favorito</p>
                <h2 className="lugar-titulo fuente">Os esperamos en la Costa Brava</h2>

                <div className="arco-marco">
                    <ArcoCostero className="ken-burns" />
                </div>

                <div className="lugar-texto-tarjeta">
                    <p className="lugar-texto fuenteParrafo mb-0">
                        Frente al mar, entre arcos de flores y luz de atardecer,
                        celebraremos el comienzo de nuestra nueva vida juntos.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LugarDestacado
