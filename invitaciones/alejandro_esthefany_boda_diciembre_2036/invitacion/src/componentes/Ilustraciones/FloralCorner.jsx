// Ramillete floral de esquina, reutilizado como decoración en varias secciones.
// Autoría base: crece desde la esquina inferior izquierda; `corner` orienta el
// mismo dibujo hacia cualquier esquina mediante espejado.
const TRANSFORMS = {
    bl: undefined,
    br: 'scaleX(-1)',
    tl: 'scaleY(-1)',
    tr: 'scale(-1,-1)',
}

const FloralCorner = ({ className = '', corner = 'bl' }) => (
    <svg
        className={`floral-corner-svg pintura ${corner} ${className}`}
        style={TRANSFORMS[corner] ? { transform: TRANSFORMS[corner] } : undefined}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M6,114 Q30,80 20,50 Q40,70 55,45"
            fill="none"
            stroke="var(--sage-deep)"
            strokeWidth="1.2"
            opacity="0.55"
        />
        <g transform="translate(22,60) rotate(-20)">
            <path d="M0,17 Q11,0 0,-17 Q-11,0 0,17 Z" fill="var(--leaf)" opacity="0.9" />
        </g>
        <g transform="translate(40,38) rotate(15)">
            <path d="M0,15 Q10,0 0,-15 Q-10,0 0,15 Z" fill="var(--sage)" opacity="0.85" />
        </g>
        <g transform="translate(53,45)">
            {[0, 72, 144, 216, 288].map((a) => (
                <ellipse key={a} cx="0" cy="-8.5" rx="5" ry="8.5" fill="var(--blush)" opacity="0.92" transform={`rotate(${a})`} />
            ))}
            <circle r="3.4" fill="var(--gold)" />
        </g>
        <circle cx="14" cy="98" r="2" fill="var(--terracotta)" opacity="0.7" />
        <circle cx="66" cy="30" r="1.6" fill="var(--gold)" opacity="0.8" />
        <circle cx="30" cy="20" r="1.4" fill="var(--terracotta)" opacity="0.6" />
    </svg>
)

export default FloralCorner
