import CuentaAtras from "../CuentaAtras/CuentaAtras"
import Ubicacion from "../Ubicacion/Ubicacion"
import Itinerario from "../Itinerario/Itinerario"
import NubeCorner from "../Ilustraciones/NubeCorner"
import Pajarito from "../Ilustraciones/Pajarito"
import './Detalles.css'
import useReveal from "../../hooks/useReveal"

const Detalles = () => {
    const [headerRef, headerVisible] = useReveal()
    const [cuentaRef, cuentaVisible] = useReveal()

    return (
        <div className="detalles-section">
            <div className="postal-fondo detalles-fondo"></div>
            <NubeCorner corner="tl" className="floral-corner" />
            <NubeCorner corner="tr" className="floral-corner" />
            <NubeCorner corner="bl" className="floral-corner" />
            <NubeCorner corner="br" className="floral-corner" />
            <Pajarito top="4%" duration={25} delay={2} />
            <Pajarito top="42%" duration={28} delay={12} reverse />
            <Pajarito top="80%" duration={23} delay={6} />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">

                        <div ref={headerRef} className={`text-center mb-5 section-header stagger ${headerVisible ? 'is-visible' : ''}`}>
                            <h2 className="display-4 fw-bold mb-3 fuente">
                                Detalles de la misión
                            </h2>
                            <p className="lead fuenteParrafo mb-0">
                                Todo lo que necesitas saber para acompañar a José ese día
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
