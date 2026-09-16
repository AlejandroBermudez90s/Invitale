import './LugarDestacado.css'
import SalonFiesta from '../Ilustraciones/SalonFiesta'
import NubeCorner from '../Ilustraciones/NubeCorner'
import Pajarito from '../Ilustraciones/Pajarito'
import PersonajeToyStory from '../Ilustraciones/PersonajeToyStory'
import woody from '../../assets/woody.png'
import useReveal from '../../hooks/useReveal'

const LugarDestacado = () => {
    const [ref, visible] = useReveal()

    return (
        <section className="lugar-destacado-section">
            <div className="postal-fondo lugar-destacado-fondo"></div>
            <NubeCorner corner="tr" className="floral-corner" />
            <NubeCorner corner="bl" className="floral-corner" />
            <Pajarito top="90%" duration={23} delay={5} />
            <PersonajeToyStory nombre="Woody" src={woody} className="personaje-woody" style={{ top: '22%', left: '2%', width: 'clamp(65px, 15vw, 150px)' }} />

            <div ref={ref} className={`lugar-destacado-inner stagger ${visible ? 'is-visible' : ''}`}>
                <p className="eyebrow mb-2">Nuestra base de misión</p>
                <h2 className="lugar-titulo fuente">¡Os esperamos en la fiesta!</h2>

                <div className="salon-marco">
                    <SalonFiesta className="ken-burns" />
                </div>

                <div className="lugar-texto-tarjeta">
                    <p className="lugar-texto fuenteParrafo mb-0">
                        Entre nubes, banderines y muchas sorpresas, celebraremos el gran día de José
                        rodeados de toda su tripulación favorita.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LugarDestacado
