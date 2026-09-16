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
            <pattern id="patron-nubes" width="320" height="260" patternUnits="userSpaceOnUse">
                <g fill="var(--cloud)" opacity="0.55">
                    <ellipse cx="55" cy="50" rx="30" ry="18" />
                    <ellipse cx="80" cy="42" rx="20" ry="14" />
                    <ellipse cx="32" cy="40" rx="16" ry="11" />
                </g>
                <g fill="var(--cloud)" opacity="0.4">
                    <ellipse cx="230" cy="170" rx="26" ry="16" />
                    <ellipse cx="252" cy="160" rx="17" ry="12" />
                    <ellipse cx="205" cy="160" rx="14" ry="10" />
                </g>
                <path d="M150,90 L153,98 L162,98 L155,103 L157,112 L150,107 L143,112 L145,103 L138,98 L147,98 Z" fill="var(--star)" opacity="0.55" />
                <path d="M270,30 L272,35 L277,35 L273,38 L274,44 L270,41 L266,44 L267,38 L263,35 L268,35 Z" fill="var(--star)" opacity="0.4" />
                <path d="M20,190 L22,195 L27,195 L23,198 L24,204 L20,201 L16,204 L17,198 L13,195 L18,195 Z" fill="var(--star)" opacity="0.4" />
            </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#patron-nubes)" />
    </svg>
)

export default CieloNubes
