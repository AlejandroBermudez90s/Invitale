// Siluetas planas de invitados bailando, usadas como ilustración del código
// de vestimenta. Los tonos de cada silueta citan la paleta de color sugerida.
const Figura = ({ x, color, falda = false, brazoArriba = 'izq' }) => (
    <g transform={`translate(${x},0)`}>
        <circle cx="0" cy="10" r="8" fill="var(--charcoal)" opacity="0.85" />
        {falda ? (
            <path d="M0,20 L-13,66 Q0,76 13,66 Z" fill={color} />
        ) : (
            <path d="M-9,20 L-11,70 L-2,70 L0,40 L2,70 L11,70 L9,20 Z" fill={color} />
        )}
        <path
            d={brazoArriba === 'izq'
                ? 'M-8,26 Q-22,20 -26,2'
                : 'M-8,26 Q-16,40 -12,56'}
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
        />
        <path
            d={brazoArriba === 'der'
                ? 'M8,26 Q22,20 26,2'
                : 'M8,26 Q16,40 12,56'}
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
        />
    </g>
)

const SiluetasBaile = ({ className = '' }) => (
    <svg
        className={`siluetas-baile-svg ${className}`}
        viewBox="0 0 320 100"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Siluetas de invitados bailando"
    >
        <Figura x={40} color="var(--sage-deep)" brazoArriba="der" />
        <Figura x={110} color="var(--terracotta)" falda brazoArriba="izq" />
        <Figura x={200} color="var(--gold)" falda brazoArriba="der" />
        <Figura x={270} color="var(--leaf)" brazoArriba="izq" />
    </svg>
)

export default SiluetasBaile
