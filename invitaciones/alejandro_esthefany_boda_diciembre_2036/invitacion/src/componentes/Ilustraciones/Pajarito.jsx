import './Pajarito.css'

// Pajarito de línea que cruza suavemente la sección dejando una pequeña
// estela de brillo. Puramente decorativo (aria-hidden), no debe robar
// protagonismo: opacidad baja y movimiento lento.
const Pajarito = ({ className = '', top = '20%', duration = 22, delay = 0, reverse = false, claro = false }) => (
    <div
        className={`pajarito ${reverse ? 'pajarito-reverso' : ''} ${claro ? 'pajarito-claro' : ''} ${className}`}
        style={{ top, animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
        aria-hidden="true"
    >
        <span className="pajarito-estela"></span>
        <svg viewBox="0 0 40 20" className="pajarito-svg" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2 10 Q10 0 20 8 Q30 0 38 10"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
            />
        </svg>
    </div>
)

export default Pajarito
