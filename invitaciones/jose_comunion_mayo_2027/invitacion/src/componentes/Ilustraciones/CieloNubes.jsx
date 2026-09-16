import './CieloNubes.css'

// Fondo de cielo azul con nubes y estrellas en patrón repetido, el motivo
// clásico del papel de la habitación de Toy Story. Puramente decorativo,
// se coloca como capa de fondo detrás del contenido de cada sección.
const CieloNubes = ({ className = '' }) => (
    <svg
        className={`cielo-nubes ${className}`}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
    >
        <defs>
            <pattern id="patron-nubes" width="200" height="160" patternUnits="userSpaceOnUse">
                <g fill="var(--cloud)" opacity="0.9">
                    <ellipse cx="40" cy="40" rx="30" ry="18" />
                    <ellipse cx="62" cy="32" rx="20" ry="14" />
                    <ellipse cx="20" cy="30" rx="16" ry="11" />
                </g>
                <g fill="var(--cloud)" opacity="0.75">
                    <ellipse cx="150" cy="110" rx="26" ry="16" />
                    <ellipse cx="170" cy="102" rx="17" ry="12" />
                    <ellipse cx="130" cy="102" rx="14" ry="10" />
                </g>
                <path d="M100,60 L103,68 L112,68 L105,73 L107,82 L100,77 L93,82 L95,73 L88,68 L97,68 Z" fill="var(--star)" opacity="0.85" />
                <path d="M175,20 L177,25 L182,25 L178,28 L179,34 L175,31 L171,34 L172,28 L168,25 L173,25 Z" fill="var(--star)" opacity="0.7" />
                <path d="M15,120 L17,125 L22,125 L18,128 L19,134 L15,131 L11,134 L12,128 L8,125 L13,125 Z" fill="var(--star)" opacity="0.7" />
            </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#patron-nubes)" />
    </svg>
)

export default CieloNubes
