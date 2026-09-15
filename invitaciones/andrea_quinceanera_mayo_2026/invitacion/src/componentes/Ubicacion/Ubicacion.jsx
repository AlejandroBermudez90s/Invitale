import './Ubicacion.css'

const Ubicacion = () => {
    // Aquí puedes cambiar las coordenadas y la dirección
    const direccion = "Puerto de Mazarrón"
    const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.7886364583!2d-1.2905964884911538!3d37.56004327192363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd64a158f4f77bfd%3A0x4a3a8eedd5cbfb4d!2sHotel%20Playa%20Grande!5e0!3m2!1ses!2ses!4v1770226934444!5m2!1ses!2ses"
    const googleMapsDirectionsUrl = "https://maps.app.goo.gl/1Bj1ATQmb9188Hdm8"

    return ( 
        <div className="card ubicacion-card border-0 shadow-sm">
            <div className="card-body p-4">
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary mb-2">
                        <i className="bi bi-geo-alt-fill me-2"></i>
                        Hotel PLaya Grande
                    </h2>
                    <p className="text-muted mb-0">{direccion}</p>
                </div>

                {/* Mapa embebido con aspect ratio 16:9 */}
                <div className="ratio ratio-16x9 mb-4 rounded overflow-hidden shadow-sm">
                    <iframe 
                        src={googleMapsEmbedUrl}
                        style={{ border: 0 }}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación del evento"
                    ></iframe>
                </div>

                {/* Botón de cómo llegar */}
                <div className="text-center">
                    <a 
                        href={googleMapsDirectionsUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg px-4 py-3 shadow-sm"
                    >
                        <i className="bi bi-pin-map-fill me-2"></i>
                        Cómo llegar
                        <i className="bi bi-box-arrow-up-right ms-2"></i>
                    </a>
                </div>

                {/* Información adicional opcional */}
                <div className="mt-4 p-3 bg-light rounded">
                    <div className="row text-center g-3">
                        <div className="col-6">
                            <i className="bi bi-clock-fill text-primary fs-4"></i>
                            <p className="mb-0 mt-2 small fw-semibold">Hora de llegada</p>
                            <p className="mb-0 text-muted small">19:00 h</p>
                        </div>
                        <div className="col-6">
                            <i className="bi bi-p-circle-fill text-primary fs-4"></i>
                            <p className="mb-0 mt-2 small fw-semibold">Parking</p>
                            <p className="mb-0 text-muted small">Disponible - Hotel y alrededores</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ubicacion