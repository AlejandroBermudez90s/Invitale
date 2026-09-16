import './Ubicacion.css'
import IglesiaComunion from '../Ilustraciones/IglesiaComunion'
import SalonFiesta from '../Ilustraciones/SalonFiesta'
import useReveal from '../../hooks/useReveal'

const Ubicacion = () => {
    const [ceremoniaRef, ceremoniaVisible] = useReveal()
    const [fiestaRef, fiestaVisible] = useReveal()

    const ceremonia = {
        eyebrow: 'Ceremonia',
        nombre: 'Parroquia San Roque',
        direccion: 'Calle Mayor, 12',
        hora: '12:00 h',
        parking: 'Cerca',
        mapaLink: 'https://www.google.com/maps/search/?api=1&query=Parroquia+San+Roque',
    }

    const fiesta = {
        eyebrow: 'Fiesta',
        nombre: 'Restaurante La Pradera',
        direccion: 'Camino del Bosque, 4',
        hora: '13:30 h',
        parking: 'Sí',
        mapaLink: 'https://www.google.com/maps/search/?api=1&query=Restaurante+La+Pradera',
    }

    return (
        <div className="ubicacion-wrapper">
            <div ref={ceremoniaRef} className={`ubicacion-item reveal reveal-left ${ceremoniaVisible ? 'is-visible' : ''}`}>
                <div className="ubicacion-imagen-wrap recorte-tijeras">
                    <IglesiaComunion />
                </div>

                <p className="ubicacion-eyebrow">{ceremonia.eyebrow}</p>
                <h2 className="ubicacion-titulo">{ceremonia.nombre}</h2>
                <p className="ubicacion-direccion">{ceremonia.direccion}</p>

                <a href={ceremonia.mapaLink} target="_blank" rel="noopener noreferrer" className="btn-ubicacion">
                    Cómo llegar
                    <i className="bi bi-arrow-up-right ms-2"></i>
                </a>

                <div className="ubicacion-datos">
                    <div className="ubicacion-dato">
                        <span className="ubicacion-dato-valor">{ceremonia.hora}</span>
                        <span className="ubicacion-dato-label">Hora</span>
                    </div>
                    <div className="ubicacion-dato-divisor"></div>
                    <div className="ubicacion-dato">
                        <span className="ubicacion-dato-valor">{ceremonia.parking}</span>
                        <span className="ubicacion-dato-label">Parking</span>
                    </div>
                </div>
            </div>

            <div ref={fiestaRef} className={`ubicacion-item reveal reveal-right ${fiestaVisible ? 'is-visible' : ''}`}>
                <div className="ubicacion-imagen-wrap recorte-tijeras">
                    <SalonFiesta />
                </div>

                <p className="ubicacion-eyebrow">{fiesta.eyebrow}</p>
                <h2 className="ubicacion-titulo">{fiesta.nombre}</h2>
                <p className="ubicacion-direccion">{fiesta.direccion}</p>

                <a href={fiesta.mapaLink} target="_blank" rel="noopener noreferrer" className="btn-ubicacion">
                    Cómo llegar
                    <i className="bi bi-arrow-up-right ms-2"></i>
                </a>

                <div className="ubicacion-datos">
                    <div className="ubicacion-dato">
                        <span className="ubicacion-dato-valor">{fiesta.hora}</span>
                        <span className="ubicacion-dato-label">Hora</span>
                    </div>
                    <div className="ubicacion-dato-divisor"></div>
                    <div className="ubicacion-dato">
                        <span className="ubicacion-dato-valor">{fiesta.parking}</span>
                        <span className="ubicacion-dato-label">Parking</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ubicacion
