// Caja de juguete envuelta con una estrella de sheriff en la tapa, usada
// como teaser antes de revelar la tarjeta de aportación económica.
const RegaloIlustracion = ({ className = '' }) => (
    <svg
        className={`regalo-svg ${className}`}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Caja de regalo"
    >
        <rect x="20" y="52" width="80" height="54" rx="4" fill="var(--red)" stroke="var(--red-deep)" strokeWidth="1.4" />
        <rect x="20" y="52" width="80" height="14" fill="var(--red-deep)" />
        <rect x="52" y="52" width="16" height="54" fill="var(--yellow)" opacity="0.95" />
        <path
            d="M60,52 L64,40 L72,40 L66,32 L74,26 L64,26 L60,16 L56,26 L46,26 L54,32 L48,40 L56,40 Z"
            fill="var(--yellow)"
            stroke="var(--yellow-deep)"
            strokeWidth="1.2"
        />
    </svg>
)

export default RegaloIlustracion
