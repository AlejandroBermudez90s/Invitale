import CuentaAtras from "../CuentaAtras/CuentaAtras"
import Ubicacion from "../Ubicacion/Ubicacion"
import Itinerario from "../Itinerario/Itinerario"
import FloralCorner from "../Ilustraciones/FloralCorner"
import Pajarito from "../Ilustraciones/Pajarito"
import './Detalles.css'
import useReveal from "../../hooks/useReveal"

const Detalles = () => {
    const [headerRef, headerVisible] = useReveal()
    const [cuentaRef, cuentaVisible] = useReveal()

    return (
        <div className="detalles-section">
            <div className="postal-fondo detalles-fondo"></div>
            <FloralCorner corner="tl" className="floral-corner" />
            <FloralCorner corner="tr" className="floral-corner" />
            <FloralCorner corner="bl" className="floral-corner" />
            <FloralCorner corner="br" className="floral-corner" />
            <Pajarito top="4%" duration={27} delay={2} />
            <Pajarito top="42%" duration={30} delay={12} reverse />
            <Pajarito top="80%" duration={24} delay={6} />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">

                        <div ref={headerRef} className={`text-center mb-5 section-header stagger ${headerVisible ? 'is-visible' : ''}`}>
                            <h2 className="display-4 fw-bold mb-3 fuente">
                                Detalles de la celebración
                            </h2>
                            <p className="lead fuenteParrafo mb-0">
                                Todo lo que necesitas saber para acompañarnos ese día
                            </p>
                        </div>

                        <Itinerario />

                        <div ref={cuentaRef} className={`detalle-bloque reveal ${cuentaVisible ? 'is-visible' : ''}`}>
                            <p className="detalle-bloque-eyebrow">Cuenta atrás</p>
                            <CuentaAtras />
                        </div>

                        <div className="detalle-bloque">
                            <Ubicacion />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalles
