// Ilustración de fondo para la cabecera: un arco abierto al mar al atardecer,
// con cortinas veladas y la silueta de la pareja mirando al horizonte.
// Estilo plano/pintado, a juego con el resto de ilustraciones del evento.
const VentanaMar = ({ className = '' }) => (
    <svg
        className={`ventana-mar-svg ${className}`}
        viewBox="0 0 600 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Arco abierto al mar al atardecer, con la silueta de la pareja"
    >
        <defs>
            <linearGradient id="cielo-mar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#123049" />
                <stop offset="38%" stopColor="#2f6690" />
                <stop offset="62%" stopColor="#8fb6c9" />
                <stop offset="78%" stopColor="#f2ddb8" />
                <stop offset="100%" stopColor="#dcc190" />
            </linearGradient>
            <linearGradient id="agua-mar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e7cf9e" />
                <stop offset="35%" stopColor="#6fa0b8" />
                <stop offset="100%" stopColor="#1c4a63" />
            </linearGradient>
            <radialGradient id="sol-mar" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff3d6" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#fff3d6" stopOpacity="0" />
            </radialGradient>
        </defs>

        {/* Cielo y mar de fondo */}
        <rect width="600" height="800" fill="url(#cielo-mar)" />
        <circle cx="300" cy="452" r="120" fill="url(#sol-mar)" />
        <circle cx="300" cy="452" r="42" fill="#fbe9c4" opacity="0.85" />
        <rect x="0" y="452" width="600" height="348" fill="url(#agua-mar)" />
        <path d="M0,452 Q150,446 300,452 T600,452" fill="none" stroke="#fbe9c4" strokeWidth="2" opacity="0.5" />
        <path d="M0,486 Q150,478 300,486 T600,486" fill="none" stroke="#fbe9c4" strokeWidth="1.4" opacity="0.35" />
        <path d="M0,522 Q150,514 300,522 T600,522" fill="none" stroke="#fbe9c4" strokeWidth="1.2" opacity="0.25" />

        {/* Aves lejanas */}
        <path d="M120,150 q8,-9 16,0 q8,-9 16,0" fill="none" stroke="#fdf6e6" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
        <path d="M430,110 q7,-8 14,0 q7,-8 14,0" fill="none" stroke="#fdf6e6" strokeWidth="1.8" opacity="0.55" strokeLinecap="round" />

        {/* Suelo del balcón */}
        <rect x="0" y="690" width="600" height="110" fill="var(--rock)" opacity="0.22" />

        {/* Silueta de la pareja mirando al mar */}
        <g fill="var(--charcoal)" opacity="0.92">
            <path d="M262,700 C260,640 266,600 268,566 C269,548 280,534 296,534 C312,534 322,548 323,566 C324,600 320,636 322,700 Z" />
            <circle cx="295" cy="514" r="17" />
            <path d="M338,702 C334,646 342,598 338,566 C336,548 348,534 364,534 C382,534 394,550 393,570 C390,606 396,650 394,702 Z" />
            <circle cx="364" cy="513" r="18" />
            <path d="M320,600 Q330,590 340,600" fill="none" stroke="var(--charcoal)" strokeWidth="4" opacity="0.5" />
        </g>

        {/* Macetas con flores a cada lado, cerca del centro para que no se
            recorten en encuadres muy estrechos (móvil) */}
        <g transform="translate(146,700)">
            <path d="M-18,0 L18,0 L13,44 L-13,44 Z" fill="var(--rock)" opacity="0.85" />
            <path d="M0,-5 Q-13,-26 -3,-44 Q3,-29 0,-5 Z" fill="var(--leaf)" opacity="0.9" />
            <path d="M0,-5 Q13,-29 7,-50 Q-2,-32 0,-5 Z" fill="var(--sage)" opacity="0.9" />
            {[0, 72, 144, 216, 288].map((a) => (
                <ellipse key={a} cx="0" cy="-40" rx="5" ry="9" fill="var(--blush)" opacity="0.9" transform={`rotate(${a} 0 -40)`} />
            ))}
            <circle cx="0" cy="-40" r="3.4" fill="var(--gold)" />
        </g>
        <g transform="translate(454,700) scale(-1,1)">
            <path d="M-18,0 L18,0 L13,44 L-13,44 Z" fill="var(--rock)" opacity="0.85" />
            <path d="M0,-5 Q-13,-26 -3,-44 Q3,-29 0,-5 Z" fill="var(--leaf)" opacity="0.9" />
            <path d="M0,-5 Q13,-29 7,-50 Q-2,-32 0,-5 Z" fill="var(--sage)" opacity="0.9" />
            {[0, 72, 144, 216, 288].map((a) => (
                <ellipse key={a} cx="0" cy="-40" rx="5" ry="9" fill="var(--blush)" opacity="0.9" transform={`rotate(${a} 0 -40)`} />
            ))}
            <circle cx="0" cy="-40" r="3.4" fill="var(--gold)" />
        </g>

        {/* Marco del arco — estrecho y centrado para sobrevivir al recorte
            horizontal en encuadres muy verticales (móvil) */}
        <path
            d="M212,770 V260 Q212,88 300,88 Q388,88 388,260 V770"
            fill="none"
            stroke="var(--ivory)"
            strokeWidth="46"
        />
        <path
            d="M212,770 V260 Q212,88 300,88 Q388,88 388,260 V770"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="2.4"
            opacity="0.6"
        />

        {/* Cortinas veladas recogidas, justo dentro del arco */}
        <path d="M228,748 C210,600 220,420 250,262 C258,350 251,540 264,748 Z" fill="var(--ivory)" opacity="0.4" />
        <path d="M372,748 C390,600 380,420 350,262 C342,350 349,540 336,748 Z" fill="var(--ivory)" opacity="0.4" />
        <ellipse cx="252" cy="440" rx="9" ry="20" fill="var(--gold)" opacity="0.55" />
        <ellipse cx="348" cy="440" rx="9" ry="20" fill="var(--gold)" opacity="0.55" />
    </svg>
)

export default VentanaMar
