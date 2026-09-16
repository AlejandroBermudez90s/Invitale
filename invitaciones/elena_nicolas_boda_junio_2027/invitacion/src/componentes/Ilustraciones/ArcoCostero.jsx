// Ilustración plana de un arco de flores frente al mar, usado como imagen
// destacada del lugar de la celebración. Mismo estilo que las demás
// ilustraciones del evento: formas planas, sin fotografía real.
const ArcoCostero = ({ className = '' }) => (
    <svg
        className={`arco-costero-svg ${className}`}
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Ilustración de un arco de flores frente al mar"
    >
        <defs>
            <linearGradient id="cielo-arco" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#eaf1f2" />
                <stop offset="100%" stopColor="#cfe3ec" />
            </linearGradient>
            <linearGradient id="mar-arco" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8fb6c9" />
                <stop offset="100%" stopColor="#2f6690" />
            </linearGradient>
        </defs>

        <rect width="400" height="300" fill="url(#cielo-arco)" />
        <rect x="0" y="165" width="400" height="45" fill="url(#mar-arco)" />
        <path d="M0,165 Q100,159 200,165 T400,165" fill="none" stroke="#fdf6e6" strokeWidth="1.6" opacity="0.6" />
        <rect x="0" y="205" width="400" height="95" fill="var(--sage-pale)" />

        {/* Camino hacia el arco */}
        <path d="M170,300 L188,210 L212,210 L230,300 Z" fill="var(--ivory)" opacity="0.75" />

        {/* Patas del arco */}
        <rect x="140" y="120" width="12" height="150" fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="1" />
        <rect x="248" y="120" width="12" height="150" fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="1" />

        {/* Arco superior */}
        <path
            d="M140,130 Q200,58 260,130"
            fill="none"
            stroke="var(--ivory)"
            strokeWidth="12"
        />
        <path
            d="M140,130 Q200,58 260,130"
            fill="none"
            stroke="var(--charcoal)"
            strokeWidth="1"
            opacity="0.4"
        />

        {/* Guirnalda floral sobre el arco */}
        {Array.from({ length: 9 }).map((_, i) => {
            const t = i / 8
            const x = 140 + t * 120
            const y = 130 - Math.sin(t * Math.PI) * 72
            const flower = i % 2 === 0
            return (
                <g key={i} transform={`translate(${x},${y})`}>
                    {flower ? (
                        <>
                            {[0, 72, 144, 216, 288].map((a) => (
                                <ellipse key={a} cx="0" cy="-6" rx="4.4" ry="7.5" fill="var(--blush)" opacity="0.92" transform={`rotate(${a})`} />
                            ))}
                            <circle r="3" fill="var(--gold)" />
                        </>
                    ) : (
                        <path d="M0,10 Q7,0 0,-10 Q-7,0 0,10 Z" fill="var(--leaf)" opacity="0.9" />
                    )}
                </g>
            )
        })}

        {/* Flores trepando por las patas */}
        <g transform="translate(146,205)">
            <path d="M0,40 Q-4,10 0,-34" fill="none" stroke="var(--leaf)" strokeWidth="1.4" opacity="0.7" />
            <circle cx="-2" cy="-10" r="4" fill="var(--blush)" opacity="0.85" />
            <circle cx="2" cy="8" r="3.6" fill="var(--gold)" opacity="0.85" />
            <circle cx="-3" cy="24" r="3.6" fill="var(--blush)" opacity="0.85" />
        </g>
        <g transform="translate(254,205) scale(-1,1)">
            <path d="M0,40 Q-4,10 0,-34" fill="none" stroke="var(--leaf)" strokeWidth="1.4" opacity="0.7" />
            <circle cx="-2" cy="-10" r="4" fill="var(--blush)" opacity="0.85" />
            <circle cx="2" cy="8" r="3.6" fill="var(--gold)" opacity="0.85" />
            <circle cx="-3" cy="24" r="3.6" fill="var(--blush)" opacity="0.85" />
        </g>
    </svg>
)

export default ArcoCostero
