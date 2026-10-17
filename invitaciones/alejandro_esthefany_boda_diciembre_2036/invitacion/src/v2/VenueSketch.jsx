import iglesia from './assets/iglesia-majada-ilustracion.webp'
import alcazar from './assets/alcazar-ilustracion-detallada.webp'

export default function VenueSketch({ kind }) {
  const church = kind === 'church'
  return <img className="ae-venue-sketch"
    src={church ? iglesia : alcazar}
    width="1536" height="1024" loading="lazy"
    alt={church ? 'Ilustración de la iglesia de La Majada, Mazarrón, Murcia: fachada blanca, espadaña, balcón y zócalo rojizo' : 'Ilustración detallada del Alcázar de Segovia, con sus torreones de pizarra, la torre de Juan II y la base rocosa'} />
}
