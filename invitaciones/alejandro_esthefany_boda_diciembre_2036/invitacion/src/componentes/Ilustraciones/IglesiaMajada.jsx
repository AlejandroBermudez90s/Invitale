// Ilustración plana de una pequeña iglesia de pueblo, a juego con el estilo
// de CastilloSegovia. Sin foto real disponible, se ilustra para mantener la
// coherencia artística del resto de la invitación.
const IglesiaMajada = ({ className = '' }) => (
    <svg
        className={`iglesia-svg ${className}`}
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Ilustración de la Iglesia de la Majada"
    >
        <defs>
            <linearGradient id="cielo-iglesia" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f3ede0" />
                <stop offset="100%" stopColor="#e6d8c3" />
            </linearGradient>
        </defs>

        <rect width="400" height="300" fill="url(#cielo-iglesia)" />
        <rect x="0" y="235" width="400" height="65" fill="var(--sage)" opacity="0.35" />

        {/* Cipreses */}
        <path d="M85,235 L96,145 L107,235 Z" fill="var(--sage-deep)" opacity="0.85" />
        <path d="M295,235 L306,155 L317,235 Z" fill="var(--sage-deep)" opacity="0.85" />

        {/* Cuerpo de la iglesia */}
        <rect x="140" y="170" width="120" height="68" fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="1.2" />
        <path d="M133,170 L200,128 L267,170 Z" fill="var(--terracotta-deep)" />

        {/* Puerta */}
        <path d="M188,238 V206 a12 12 0 0 1 24 0 V238 Z" fill="var(--charcoal)" opacity="0.85" />

        {/* Rosetón */}
        <circle cx="200" cy="188" r="10" fill="none" stroke="var(--gold)" strokeWidth="1.4" />
        <circle cx="200" cy="188" r="3" fill="var(--gold)" />

        {/* Campanario */}
        <rect x="170" y="92" width="20" height="48" fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="1.2" />
        <path d="M165,92 L180,62 L195,92 Z" fill="var(--terracotta-deep)" />
        <circle cx="180" cy="112" r="4" fill="none" stroke="var(--charcoal)" strokeWidth="1" />

        {/* Cruz */}
        <line x1="180" y1="62" x2="180" y2="44" stroke="var(--charcoal)" strokeWidth="1.4" />
        <line x1="174" y1="49" x2="186" y2="49" stroke="var(--charcoal)" strokeWidth="1.4" />
    </svg>
)

export default IglesiaMajada
