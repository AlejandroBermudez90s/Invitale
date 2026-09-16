import './CodigoVestimenta.css'
import SiluetasBaile from '../Ilustraciones/SiluetasBaile'
import FloralCorner from '../Ilustraciones/FloralCorner'
import Pajarito from '../Ilustraciones/Pajarito'
import useReveal from '../../hooks/useReveal'

const paleta = [
    { nombre: 'Azul océano', color: 'var(--sage-deep)' },
    { nombre: 'Hortensia', color: 'var(--terracotta)' },
    { nombre: 'Dorado arena', color: 'var(--gold)' },
    { nombre: 'Marfil', color: 'var(--ivory)' },
]

const CodigoVestimenta = () => {
    const [ref, visible] = useReveal()

    return (
        <section className="vestimenta-section">
            <div className="postal-fondo vestimenta-fondo"></div>
            <FloralCorner corner="tl" className="floral-corner" />
            <FloralCorner corner="tr" className="floral-corner" />
            <FloralCorner corner="bl" className="floral-corner" />
            <FloralCorner corner="br" className="floral-corner" />
            <Pajarito top="10%" duration={26} delay={4} />

            <div ref={ref} className={`vestimenta-inner stagger ${visible ? 'is-visible' : ''}`}>
                <p className="eyebrow mb-2">Etiqueta</p>
                <h2 className="vestimenta-titulo fuente">Código de vestimenta</h2>

                <div className="siluetas-marco">
                    <SiluetasBaile />
                </div>

                <p className="vestimenta-texto fuenteParrafo">
                    Elegancia costera: colores suaves, telas ligeras y calzado apto para arena y césped.
                </p>

                <div className="paleta-grid">
                    {paleta.map((tono) => (
                        <div className="paleta-item" key={tono.nombre}>
                            <span className="paleta-swatch" style={{ background: tono.color }}></span>
                            <span className="paleta-nombre">{tono.nombre}</span>
                        </div>
                    ))}
                </div>

                <p className="vestimenta-nota">
                    Un pequeño favor: dejadnos el blanco y el marfil completo a la novia
                </p>
            </div>
        </section>
    )
}

export default CodigoVestimenta
