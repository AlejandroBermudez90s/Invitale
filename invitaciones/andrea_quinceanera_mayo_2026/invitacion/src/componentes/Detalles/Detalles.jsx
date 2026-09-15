import CuentaAtras from "../CuentaAtras/CuentaAtras"
import Ubicacion from "../Ubicacion/Ubicacion"
import './Detalles.css'
import DressCode from "../DressCode/DressCode"
import ConfirmarAsistencia from "../ConfirmarAsistencia/ConfirmarAsistencia"
import { useEffect, useRef } from "react" // <-- Añadimos useRef

const Detalles = () => {
    // Referencia al contenedor principal del acordeón
    const accordionRef = useRef(null);

    useEffect(() => {
        const accordionElement = accordionRef.current;
        if (!accordionElement) return;

        // Cambiamos 'shown' (al terminar) por 'show' (al empezar el clic)
        const handleShow = (e) => {
            const accordionItem = e.target.closest('.accordion-item');
            if (!accordionItem) return;

            // 1. Obtenemos todos los items para saber el orden
            const allItems = Array.from(accordionElement.querySelectorAll('.accordion-item'));
            const targetIndex = allItems.indexOf(accordionItem);
            
            let heightToSubtract = 0;
            
            // 2. Revisamos si hay algún acordeón abierto por ENCIMA del que acabamos de hacer clic
            for (let i = 0; i < targetIndex; i++) {
                const openCollapse = allItems[i].querySelector('.accordion-collapse.show');
                if (openCollapse) {
                    // Si está arriba y se va a cerrar, obtenemos su altura para restarla
                    heightToSubtract = openCollapse.getBoundingClientRect().height;
                    break;
                }
            }

            const offset = 100; // Ajuste para el margen superior
            
            // 3. Calculamos la posición actual y le restamos la altura del que va a desaparecer
            const elementPosition = accordionItem.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset - heightToSubtract;

            // 4. Hacemos el scroll INMEDIATAMENTE
            // Usamos un pequeño setTimeout (10ms) solo para que el navegador procese el clic antes de mover
            setTimeout(() => {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        };

        // Escuchamos el evento 'show' (cuando arranca) en lugar de 'shown' (cuando termina)
        accordionElement.addEventListener('show.bs.collapse', handleShow);

        // Cleanup
        return () => {
            accordionElement.removeEventListener('show.bs.collapse', handleShow);
        };
    }, []);

    return (
        <div className="detalles-section">
            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        
                        <div className="text-center mb-5 section-header">
                            <div className="decorative-line mb-3"></div>
                            <h2 className="display-4 fw-bold text-white mb-3 fuente">
                                Detalles de la celebración
                            </h2>
                            <p className="lead text-white-50 mb-4 fuenteParrafo">
                                Todo lo que necesitas saber para este día tan especial
                            </p>
                            <div className="decorative-line"></div>
                        </div>

                        {/* AÑADIMOS LA REFERENCIA AQUÍ */}
                        <div className="accordion accordion-custom" id="accordionDetalles" ref={accordionRef}>
                            
                            {/* Cuenta Atrás */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseCuenta"
                                        aria-expanded="false"
                                        aria-controls="collapseCuenta"
                                    >
                                        <div className="accordion-icon-wrapper me-3">
                                            <i className="bi bi-calendar-event"></i>
                                        </div>
                                        <span className="accordion-title">Fecha y hora</span>
                                    </button>
                                </h2>
                                <div
                                    id="collapseCuenta"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionDetalles"
                                >
                                    <div className="accordion-body">
                                        <CuentaAtras />
                                    </div>
                                </div>
                            </div>

                            {/* Ubicación */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseUbicacion"
                                        aria-expanded="false"
                                        aria-controls="collapseUbicacion"
                                    >
                                        <div className="accordion-icon-wrapper me-3">
                                            <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <span className="accordion-title">Ubicación</span>
                                    </button>
                                </h2>
                                <div
                                    id="collapseUbicacion"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionDetalles"
                                >
                                    <div className="accordion-body">
                                        <Ubicacion />
                                    </div>
                                </div>
                            </div>

                            {/* Código de Vestimenta */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseCodigo"
                                        aria-expanded="false"
                                        aria-controls="collapseCodigo"
                                    >
                                        <div className="accordion-icon-wrapper me-3">
                                            <i className="bi bi-palette-fill"></i>
                                        </div>
                                        <span className="accordion-title">Dress code</span>
                                    </button>
                                </h2>
                                <div
                                    id="collapseCodigo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionDetalles"
                                >
                                    <div className="accordion-body">
                                        <DressCode />
                                    </div>
                                </div>
                            </div>

                            {/* Confirmar Asistencia */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseConfirmar"
                                        aria-expanded="false"
                                        aria-controls="collapseConfirmar"
                                    >
                                        <div className="accordion-icon-wrapper me-3">
                                            <i className="bi bi-check-circle-fill"></i>
                                        </div>
                                        <span className="accordion-title">Confirmar asistencia</span>
                                    </button>
                                </h2>

                                <div
                                    id="collapseConfirmar"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionDetalles"
                                >
                                    <div className="accordion-body">
                                        <ConfirmarAsistencia />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalles