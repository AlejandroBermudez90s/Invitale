// Ilustración plana (no fotografía) del Alcázar de Segovia, enmarcada en un
// arco tipo postal. Se ilustra en vez de usar una foto de stock para mantener
// coherencia con el estilo artístico/floral pedido y evitar dependencias de
// licencias de imagen externas.
const CastilloSegovia = ({ className = '' }) => (
    <svg
        className={`castillo-svg ${className}`}
        viewBox="0 0 400 320"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Ilustración del Alcázar de Segovia"
    >
        <defs>
            <clipPath id="arco-postal">
                <path d="M40,320 L40,160 A160,160 0 0 1 360,160 L360,320 Z" />
            </clipPath>
            <linearGradient id="cielo-atardecer" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f6ead9" />
                <stop offset="55%" stopColor="#f3ddc6" />
                <stop offset="100%" stopColor="#e9c9a8" />
            </linearGradient>
        </defs>

        <g clipPath="url(#arco-postal)">
            <rect x="0" y="0" width="400" height="320" fill="url(#cielo-atardecer)" />

            {/* Sol con halo */}
            <circle cx="300" cy="75" r="46" fill="var(--gold)" opacity="0.12" />
            <circle cx="300" cy="75" r="32" fill="var(--gold)" opacity="0.18" />
            <circle cx="300" cy="75" r="20" fill="var(--gold)" opacity="0.85" />

            {/* Pájaros */}
            <path d="M110,60 q6,-7 12,0 q6,-7 12,0" fill="none" stroke="var(--charcoal)" strokeWidth="1.4" opacity="0.5" />
            <path d="M160,42 q5,-6 10,0 q5,-6 10,0" fill="none" stroke="var(--charcoal)" strokeWidth="1.3" opacity="0.45" />
            <path d="M75,95 q5,-6 10,0 q5,-6 10,0" fill="none" stroke="var(--charcoal)" strokeWidth="1.3" opacity="0.4" />

            {/* Colina lejana */}
            <path d="M0,230 Q80,205 160,222 T400,215 V320 H0 Z" fill="var(--sage)" opacity="0.35" />

            {/* Peñasco */}
            <path
                d="M60,320 L70,255 Q100,235 130,248 L150,225 Q175,210 195,222 L215,205 Q245,215 255,240 L285,230 Q320,240 330,265 L340,320 Z"
                fill="var(--rock)"
            />
            <path d="M60,320 L70,255 Q100,235 130,248 L150,225 Q175,210 195,222 L200,320 Z" fill="var(--rock)" opacity="0.85" />

            {/* Vegetación al pie del peñasco */}
            <circle cx="85" cy="258" r="10" fill="var(--sage-deep)" opacity="0.8" />
            <circle cx="100" cy="264" r="7" fill="var(--leaf)" opacity="0.8" />
            <circle cx="300" cy="248" r="9" fill="var(--sage-deep)" opacity="0.8" />
            <circle cx="315" cy="256" r="6" fill="var(--leaf)" opacity="0.8" />

            {/* Muralla base */}
            <rect x="140" y="196" width="130" height="34" fill="var(--charcoal)" />
            <path d="M140,196 h10 v-8 h8 v8 h10 v-8 h8 v8 h10 v-8 h8 v8 h10 v-8 h8 v8 h10 v-8 h8 v8 h10 v8 h-130 Z" fill="var(--charcoal)" />

            {/* Torre izquierda */}
            <rect x="150" y="130" width="26" height="70" fill="var(--charcoal)" />
            <path d="M147,130 L163,92 L179,130 Z" fill="var(--terracotta-deep)" />

            {/* Torre derecha */}
            <rect x="228" y="140" width="24" height="60" fill="var(--charcoal)" />
            <path d="M225,140 L240,105 L255,140 Z" fill="var(--terracotta-deep)" />

            {/* Torre central (Torre de Juan II, más alta y protagonista) */}
            <rect x="187" y="95" width="30" height="105" fill="var(--charcoal)" opacity="0.95" />
            <path d="M184,95 L202,40 L220,95 Z" fill="var(--terracotta-deep)" />
            <line x1="202" y1="40" x2="202" y2="22" stroke="var(--charcoal)" strokeWidth="1.4" />
            <path d="M202,22 L214,27 L202,32 Z" fill="var(--terracotta)" />

            {/* Pequeños vanos */}
            <rect x="197" y="150" width="6" height="10" fill="var(--cream)" opacity="0.6" />
            <rect x="160" y="160" width="5" height="9" fill="var(--cream)" opacity="0.55" />
            <rect x="237" y="165" width="5" height="9" fill="var(--cream)" opacity="0.55" />
        </g>

        {/* Marco en arco */}
        <path
            d="M40,320 L40,160 A160,160 0 0 1 360,160 L360,320"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="2.5"
            opacity="0.85"
        />
    </svg>
)

export default CastilloSegovia
