// Regalo envuelto en línea plana, usado como teaser antes de revelar la
// tarjeta de aportación económica.
const RegaloIlustracion = ({ className = '' }) => (
    <svg
        className={`regalo-svg ${className}`}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Regalo envuelto"
    >
        <rect x="22" y="52" width="76" height="52" rx="2" fill="var(--terracotta)" stroke="var(--terracotta-deep)" strokeWidth="1.2" />
        <rect x="22" y="52" width="76" height="13" fill="var(--terracotta-deep)" />
        <rect x="53" y="52" width="14" height="52" fill="var(--gold)" opacity="0.9" />
        <path
            d="M60,52 C45,52 40,36 52,34 C58,33 60,40 60,46 C60,40 62,33 68,34 C80,36 75,52 60,52 Z"
            fill="var(--gold)"
            stroke="var(--terracotta-deep)"
            strokeWidth="1"
        />
    </svg>
)

export default RegaloIlustracion
