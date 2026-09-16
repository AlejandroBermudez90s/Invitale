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

        {/* Macetas con flores a cada lado */}
        <g transform="translate(96,660)">
            <path d="M-22,0 L22,0 L16,52 L-16,52 Z" fill="var(--rock)" opacity="0.85" />
            <path d="M0,-6 Q-16,-30 -4,-52 Q4,-34 0,-6 Z" fill="var(--leaf)" opacity="0.9" />
            <path d="M0,-6 Q16,-34 8,-58 Q-2,-38 0,-6 Z" fill="var(--sage)" opacity="0.9" />
            {[0, 72, 144, 216, 288].map((a) => (
                <ellipse key={a} cx="0" cy="-46" rx="6" ry="11" fill="var(--blush)" opacity="0.9" transform={`rotate(${a} 0 -46)`} />
            ))}
            <circle cx="0" cy="-46" r="4" fill="var(--gold)" />
        </g>
        <g transform="translate(504,660) scale(-1,1)">
            <path d="M-22,0 L22,0 L16,52 L-16,52 Z" fill="var(--rock)" opacity="0.85" />
            <path d="M0,-6 Q-16,-30 -4,-52 Q4,-34 0,-6 Z" fill="var(--leaf)" opacity="0.9" />
            <path d="M0,-6 Q16,-34 8,-58 Q-2,-38 0,-6 Z" fill="var(--sage)" opacity="0.9" />
            {[0, 72, 144, 216, 288].map((a) => (
                <ellipse key={a} cx="0" cy="-46" rx="6" ry="11" fill="var(--blush)" opacity="0.9" transform={`rotate(${a} 0 -46)`} />
            ))}
            <circle cx="0" cy="-46" r="4" fill="var(--gold)" />
        </g>

        {/* Marco del arco */}
        <path
            d="M-10,800 V210 Q-10,-40 300,-40 Q610,-40 610,210 V800"
            fill="none"
            stroke="var(--ivory)"
            strokeWidth="70"
        />
        <path
            d="M-10,800 V210 Q-10,-40 300,-40 Q610,-40 610,210 V800"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="3"
            opacity="0.6"
        />

        {/* Cortinas veladas recogidas */}
        <path d="M40,760 C10,540 34,300 92,150 C104,270 92,520 116,760 Z" fill="var(--ivory)" opacity="0.35" />
        <path d="M560,760 C590,540 566,300 508,150 C496,270 508,520 484,760 Z" fill="var(--ivory)" opacity="0.35" />
        <ellipse cx="92" cy="430" rx="14" ry="30" fill="var(--gold)" opacity="0.5" />
        <ellipse cx="508" cy="430" rx="14" ry="30" fill="var(--gold)" opacity="0.5" />
    </svg>
)

export default VentanaMar
