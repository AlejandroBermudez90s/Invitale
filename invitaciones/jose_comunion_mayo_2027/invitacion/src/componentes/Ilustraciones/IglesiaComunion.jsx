// Ilustración plana y alegre de una parroquia de pueblo, sin foto real
// disponible. Estilo simplificado a juego con el resto de la invitación.
const IglesiaComunion = ({ className = '' }) => (
    <svg
        className={`iglesia-svg ${className}`}
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Ilustración de la parroquia"
    >
        <defs>
            <linearGradient id="cielo-iglesia" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#bfe4fa" />
                <stop offset="100%" stopColor="#e8f6ff" />
            </linearGradient>
        </defs>

        <rect width="400" height="300" fill="url(#cielo-iglesia)" />
        <g fill="var(--cloud)" opacity="0.9">
            <ellipse cx="70" cy="55" rx="30" ry="16" />
            <ellipse cx="95" cy="48" rx="18" ry="12" />
            <ellipse cx="320" cy="40" rx="26" ry="14" />
        </g>
        <rect x="0" y="235" width="400" height="65" fill="var(--green)" opacity="0.5" />

        {/* Cuerpo de la parroquia */}
        <rect x="140" y="170" width="120" height="68" fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="1.2" />
        <path d="M133,170 L200,128 L267,170 Z" fill="var(--red)" />

        {/* Puerta */}
        <path d="M188,238 V206 a12 12 0 0 1 24 0 V238 Z" fill="var(--wood-deep)" opacity="0.9" />

        {/* Rosetón */}
        <circle cx="200" cy="188" r="10" fill="none" stroke="var(--yellow)" strokeWidth="1.6" />
        <circle cx="200" cy="188" r="3" fill="var(--yellow)" />

        {/* Campanario */}
        <rect x="170" y="92" width="20" height="48" fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="1.2" />
        <path d="M165,92 L180,62 L195,92 Z" fill="var(--red)" />
        <circle cx="180" cy="112" r="4" fill="none" stroke="var(--charcoal)" strokeWidth="1" />

        {/* Cruz */}
        <line x1="180" y1="62" x2="180" y2="44" stroke="var(--charcoal)" strokeWidth="1.6" />
        <line x1="174" y1="49" x2="186" y2="49" stroke="var(--charcoal)" strokeWidth="1.6" />

        {/* Estrella en el cielo, guiño al theming */}
        <path d="M320,80 L323,88 L331,88 L325,93 L327,101 L320,96 L313,101 L315,93 L309,88 L317,88 Z" fill="var(--star)" opacity="0.9" />
    </svg>
)

export default IglesiaComunion
