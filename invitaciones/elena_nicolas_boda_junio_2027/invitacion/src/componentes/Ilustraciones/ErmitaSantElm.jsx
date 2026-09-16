// Ilustración plana de una pequeña ermita costera, a juego con el estilo del
// resto de ilustraciones del evento. Sin foto real disponible.
const ErmitaSantElm = ({ className = '' }) => (
    <svg
        className={`ermita-svg ${className}`}
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Ilustración de una ermita frente al mar"
    >
        <defs>
            <linearGradient id="cielo-ermita" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f3ede0" />
                <stop offset="100%" stopColor="#cfe3ec" />
            </linearGradient>
        </defs>

        <rect width="400" height="300" fill="url(#cielo-ermita)" />
        <rect x="0" y="230" width="400" height="18" fill="var(--sage-deep)" opacity="0.55" />
        <rect x="0" y="248" width="400" height="52" fill="var(--sage-pale)" />

        {/* Palmeras */}
        <path d="M84,248 V178" stroke="var(--rock)" strokeWidth="4" />
        <path d="M84,182 Q60,168 46,178 M84,182 Q108,168 122,178 M84,180 Q86,158 74,146 M84,180 Q98,160 108,150" fill="none" stroke="var(--leaf)" strokeWidth="4" strokeLinecap="round" />
        <path d="M316,248 V186" stroke="var(--rock)" strokeWidth="4" />
        <path d="M316,190 Q294,178 282,186 M316,190 Q338,178 350,186 M316,188 Q318,168 308,158" fill="none" stroke="var(--leaf)" strokeWidth="4" strokeLinecap="round" />

        {/* Cuerpo de la ermita */}
        <rect x="150" y="176" width="100" height="64" fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="1.2" />
        <path d="M144,176 L200,138 L256,176 Z" fill="var(--terracotta-deep)" />

        {/* Puerta en arco */}
        <path d="M190,240 V212 a10 10 0 0 1 20 0 V240 Z" fill="var(--sage-deep)" opacity="0.85" />

        {/* Ventana circular */}
        <circle cx="200" cy="196" r="9" fill="none" stroke="var(--gold)" strokeWidth="1.4" />
        <circle cx="200" cy="196" r="2.6" fill="var(--gold)" />

        {/* Campanario */}
        <rect x="182" y="104" width="16" height="40" fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="1.1" />
        <path d="M178,104 L190,80 L202,104 Z" fill="var(--terracotta-deep)" />
        <circle cx="190" cy="120" r="3.4" fill="none" stroke="var(--charcoal)" strokeWidth="0.9" />

        {/* Cruz */}
        <line x1="190" y1="80" x2="190" y2="64" stroke="var(--charcoal)" strokeWidth="1.3" />
        <line x1="185" y1="68" x2="195" y2="68" stroke="var(--charcoal)" strokeWidth="1.3" />
    </svg>
)

export default ErmitaSantElm
