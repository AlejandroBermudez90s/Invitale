// Ilustración plana de una finca de jardín junto al mar, usada como imagen
// del banquete. Mismo estilo que las demás ilustraciones del evento.
const FincaGinesters = ({ className = '' }) => (
    <svg
        className={`finca-svg ${className}`}
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Ilustración de una finca de jardín junto al mar, iluminada al atardecer"
    >
        <defs>
            <linearGradient id="cielo-finca" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2f6690" />
                <stop offset="60%" stopColor="#e7cf9e" />
                <stop offset="100%" stopColor="#f2ddb8" />
            </linearGradient>
        </defs>

        <rect width="400" height="300" fill="url(#cielo-finca)" />
        <circle cx="316" cy="150" r="26" fill="#fff3d6" opacity="0.9" />
        <rect x="0" y="232" width="400" height="68" fill="var(--leaf)" opacity="0.5" />

        {/* Casa de la finca */}
        <rect x="70" y="176" width="130" height="60" fill="var(--ivory)" stroke="var(--charcoal)" strokeWidth="1.1" />
        <path d="M62,176 L135,140 L208,176 Z" fill="var(--terracotta-deep)" />
        <rect x="118" y="200" width="34" height="36" fill="var(--sage-deep)" opacity="0.75" />
        <rect x="82" y="196" width="18" height="18" fill="var(--sage-pale)" stroke="var(--charcoal)" strokeWidth="0.8" />
        <rect x="172" y="196" width="18" height="18" fill="var(--sage-pale)" stroke="var(--charcoal)" strokeWidth="0.8" />

        {/* Guirnaldas de luces sobre la mesa */}
        <path d="M220,150 Q270,120 320,150 Q290,180 340,196" fill="none" stroke="var(--gold)" strokeWidth="1.2" opacity="0.8" />
        {[[220, 150], [244, 136], [270, 128], [296, 132], [320, 150], [305, 165], [325, 182], [340, 196]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="var(--gold)" opacity="0.9" />
        ))}

        {/* Mesa larga con mantel */}
        <rect x="228" y="222" width="150" height="10" fill="var(--ivory)" />
        <rect x="238" y="232" width="6" height="34" fill="var(--rock)" opacity="0.8" />
        <rect x="358" y="232" width="6" height="34" fill="var(--rock)" opacity="0.8" />

        {/* Centros florales sobre la mesa */}
        {[260, 300, 340].map((x, i) => (
            <g key={i} transform={`translate(${x},220)`}>
                {[0, 90, 180, 270].map((a) => (
                    <ellipse key={a} cx="0" cy="-5" rx="3.6" ry="6" fill="var(--blush)" opacity="0.9" transform={`rotate(${a})`} />
                ))}
                <circle r="2.4" fill="var(--gold)" />
            </g>
        ))}

        {/* Cipreses */}
        <path d="M40,232 L50,150 L60,232 Z" fill="var(--sage-deep)" opacity="0.85" />
        <path d="M20,232 L30,168 L40,232 Z" fill="var(--sage-deep)" opacity="0.7" />
    </svg>
)

export default FincaGinesters
