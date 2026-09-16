import './Ubicacion.css'
import ErmitaSantElm from '../Ilustraciones/ErmitaSantElm'
import FincaGinesters from '../Ilustraciones/FincaGinesters'
import useReveal from '../../hooks/useReveal'

const Ubicacion = () => {
    const [ceremoniaRef, ceremoniaVisible] = useReveal()
    const [banqueteRef, banqueteVisible] = useReveal()

    const ceremonia = {
        eyebrow: 'Ceremonia',
        nombre: 'Ermita de Sant Elm',
        direccion: 'Costa Brava, Girona',
        hora: '19:00 h',
        parking: 'Cerca',
        mapaLink: 'https://www.google.com/maps/search/?api=1&query=Sant+Elm+Costa+Brava',
    }

    const banquete = {
        eyebrow: 'Banquete',
        nombre: 'Finca Els Ginesters',
        direccion: 'Costa Brava, Girona',
        hora: '21:00 h',
        parking: 'Cerca',
        mapaLink: 'https://www.google.com/maps/search/?api=1&query=Costa+Brava+Girona',
    }

    return (
        <div className="ubicacion-wrapper">
            <div ref={ceremoniaRef} className={`ubicacion-item reveal reveal-left ${ceremoniaVisible ? 'is-visible' : ''}`}>
                <div className="ubicacion-imagen-wrap recorte-tijeras">
                    <ErmitaSantElm />
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

            <div ref={banqueteRef} className={`ubicacion-item reveal reveal-right ${banqueteVisible ? 'is-visible' : ''}`}>
                <div className="ubicacion-imagen-wrap recorte-tijeras">
                    <FincaGinesters className="ken-burns" />
                </div>

                <p className="ubicacion-eyebrow">{banquete.eyebrow}</p>
                <h2 className="ubicacion-titulo">{banquete.nombre}</h2>
                <p className="ubicacion-direccion">{banquete.direccion}</p>

                <a href={banquete.mapaLink} target="_blank" rel="noopener noreferrer" className="btn-ubicacion">
                    Cómo llegar
                    <i className="bi bi-arrow-up-right ms-2"></i>
                </a>

                <div className="ubicacion-datos">
                    <div className="ubicacion-dato">
                        <span className="ubicacion-dato-valor">{banquete.hora}</span>
                        <span className="ubicacion-dato-label">Hora</span>
                    </div>
                    <div className="ubicacion-dato-divisor"></div>
                    <div className="ubicacion-dato">
                        <span className="ubicacion-dato-valor">{banquete.parking}</span>
                        <span className="ubicacion-dato-label">Parking</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ubicacion
