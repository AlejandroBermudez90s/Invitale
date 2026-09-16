// Ilustración plana del salón/restaurante donde se celebra la fiesta:
// una caseta de madera con banderines y globos, sin foto real disponible.
const SalonFiesta = ({ className = '' }) => (
    <svg
        className={`salon-svg ${className}`}
        viewBox="0 0 400 320"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Ilustración del salón de la fiesta"
    >
        <defs>
            <clipPath id="arco-postal">
                <path d="M40,320 L40,160 A160,160 0 0 1 360,160 L360,320 Z" />
            </clipPath>
            <linearGradient id="cielo-fiesta" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4fa8e0" />
                <stop offset="55%" stopColor="#7cc3ec" />
                <stop offset="100%" stopColor="#cfe9fb" />
            </linearGradient>
        </defs>

        <g clipPath="url(#arco-postal)">
            <rect x="0" y="0" width="400" height="320" fill="url(#cielo-fiesta)" />

            {/* Sol */}
            <circle cx="320" cy="65" r="30" fill="var(--yellow)" opacity="0.95" />

            {/* Nubes */}
            <g fill="var(--cloud)" opacity="0.95">
                <ellipse cx="90" cy="55" rx="30" ry="16" />
                <ellipse cx="115" cy="48" rx="18" ry="12" />
                <ellipse cx="65" cy="48" rx="14" ry="10" />
            </g>

            {/* Colina de césped */}
            <path d="M0,230 Q80,205 160,222 T400,215 V320 H0 Z" fill="var(--green)" />

            {/* Guirnalda de banderines */}
            <path d="M40,140 Q200,110 360,140" stroke="var(--wood-deep)" strokeWidth="2" fill="none" />
            {[60, 110, 160, 210, 260, 310, 340].map((x, i) => (
                <path
                    key={x}
                    d={`M${x},${140 - Math.sin((x / 360) * Math.PI) * 22} l-9,16 l18,0 Z`}
                    fill={i % 2 === 0 ? 'var(--red)' : 'var(--yellow)'}
                />
            ))}

            {/* Caseta de madera */}
            <rect x="140" y="196" width="120" height="80" fill="var(--wood)" stroke="var(--wood-deep)" strokeWidth="1.4" />
            <rect x="140" y="196" width="120" height="10" fill="var(--wood-deep)" opacity="0.6" />
            <path d="M130,196 L200,155 L270,196 Z" fill="var(--red)" />
            <rect x="188" y="236" width="24" height="40" fill="var(--wood-deep)" />
            <rect x="152" y="214" width="20" height="18" fill="var(--sky-pale)" stroke="var(--wood-deep)" strokeWidth="1" />
            <rect x="228" y="214" width="20" height="18" fill="var(--sky-pale)" stroke="var(--wood-deep)" strokeWidth="1" />

            {/* Globos */}
            <circle cx="110" cy="180" r="14" fill="var(--red)" />
            <circle cx="290" cy="185" r="13" fill="var(--yellow)" />
            <circle cx="305" cy="205" r="11" fill="var(--green)" />
            <line x1="110" y1="194" x2="110" y2="215" stroke="var(--wood-deep)" strokeWidth="1" />
            <line x1="290" y1="198" x2="290" y2="218" stroke="var(--wood-deep)" strokeWidth="1" />
            <line x1="305" y1="216" x2="305" y2="232" stroke="var(--wood-deep)" strokeWidth="1" />
        </g>

        {/* Marco en arco */}
        <path
            d="M40,320 L40,160 A160,160 0 0 1 360,160 L360,320"
            fill="none"
            stroke="var(--yellow)"
            strokeWidth="3"
            opacity="0.9"
        />
    </svg>
)

export default SalonFiesta
