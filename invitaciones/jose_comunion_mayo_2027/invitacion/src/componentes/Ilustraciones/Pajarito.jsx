import './Pajarito.css'

// Estrella fugaz que cruza suavemente la sección dejando una estela de
// brillo. Puramente decorativa (aria-hidden), sustituye al pajarito de las
// invitaciones florales por un guiño al cielo estrellado de Toy Story.
const Pajarito = ({ className = '', top = '20%', duration = 22, delay = 0, reverse = false, claro = false }) => (
    <div
        className={`pajarito ${reverse ? 'pajarito-reverso' : ''} ${claro ? 'pajarito-claro' : ''} ${className}`}
        style={{ top, animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
        aria-hidden="true"
    >
        <span className="pajarito-estela"></span>
        <svg viewBox="0 0 40 20" className="pajarito-svg" xmlns="http://www.w3.org/2000/svg">
            <path d="M6,10 L8,14 L12,14 L9,16.5 L10,20.5 L6,18 L2,20.5 L3,16.5 L0,14 L4,14 Z" fill="currentColor" />
            <path d="M10 9 Q20 5 30 8" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />
        </svg>
    </div>
)

export default Pajarito
