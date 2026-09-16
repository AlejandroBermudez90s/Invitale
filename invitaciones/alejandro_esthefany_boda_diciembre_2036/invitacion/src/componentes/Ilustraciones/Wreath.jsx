// Guirnalda floral abierta (herradura) en línea plana estilo "Canva",
// hecha con hojas y flores repetidas alrededor de un arco de -120° a 120°.
const UNITS = [
    { angle: -120, type: 'leaf' },
    { angle: -90, type: 'flower' },
    { angle: -60, type: 'leaf' },
    { angle: -30, type: 'flower' },
    { angle: 0, type: 'leaf' },
    { angle: 30, type: 'flower' },
    { angle: 60, type: 'leaf' },
    { angle: 90, type: 'flower' },
    { angle: 120, type: 'leaf' },
]

const Leaf = () => (
    <g transform="translate(150,26)">
        <path d="M0,20 Q10,0 0,-20 Q-10,0 0,20 Z" fill="var(--leaf)" opacity="0.92" />
        <line x1="0" y1="17" x2="0" y2="-17" stroke="var(--sage-deep)" strokeWidth="0.6" opacity="0.5" />
    </g>
)

const Flower = () => (
    <g transform="translate(150,30)">
        {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="0" cy="-8" rx="4.6" ry="8" fill="var(--blush)" opacity="0.92" transform={`rotate(${a})`} />
        ))}
        <circle r="3.2" fill="var(--gold)" />
    </g>
)

const Wreath = ({ className = '' }) => (
    <svg
        className={`wreath-svg pintura ${className}`}
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        {UNITS.map(({ angle, type }, i) => (
            <g key={i} transform={`rotate(${angle} 150 150)`}>
                {type === 'leaf' ? <Leaf /> : <Flower />}
            </g>
        ))}
    </svg>
)

export default Wreath
