// Nube de esquina con estrellitas, decoración reutilizada en varias secciones
// (equivalente al FloralCorner de las invitaciones de boda, pero con el cielo
// de nubes y estrellas propio del theming Toy Story).
const TRANSFORMS = {
    bl: undefined,
    br: 'scaleX(-1)',
    tl: 'scaleY(-1)',
    tr: 'scale(-1,-1)',
}

const NubeCorner = ({ className = '', corner = 'bl' }) => (
    <svg
        className={`floral-corner-svg ${corner} ${className}`}
        style={TRANSFORMS[corner] ? { transform: TRANSFORMS[corner] } : undefined}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <g fill="var(--cloud)" opacity="0.95">
            <ellipse cx="22" cy="100" rx="22" ry="14" />
            <ellipse cx="42" cy="92" rx="16" ry="12" />
            <ellipse cx="10" cy="90" rx="12" ry="9" />
        </g>
        <g fill="var(--star)" opacity="0.95">
            <path d="M70,30 L74,42 L86,42 L76,50 L80,62 L70,54 L60,62 L64,50 L54,42 L66,42 Z" />
        </g>
        <g fill="var(--yellow)" opacity="0.9">
            <path d="M92,58 L94,64 L100,64 L95,68 L97,74 L92,70 L87,74 L89,68 L84,64 L90,64 Z" />
        </g>
        <circle cx="30" cy="55" r="2.6" fill="var(--ivory)" opacity="0.85" />
        <circle cx="55" cy="20" r="2" fill="var(--ivory)" opacity="0.75" />
    </svg>
)

export default NubeCorner
