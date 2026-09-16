// Insignia de sheriff de juguete (estrella de cinco puntas dentro de un
// círculo con remaches), usada como "orla" detrás del nombre en la cabecera,
// en lugar de la guirnalda floral de las invitaciones de boda.
const InsigniaSheriff = ({ className = '' }) => (
    <svg
        className={`wreath-svg ${className}`}
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <circle cx="150" cy="150" r="138" fill="none" stroke="var(--yellow)" strokeWidth="6" opacity="0.9" />
        <circle cx="150" cy="150" r="122" fill="none" stroke="var(--yellow-deep)" strokeWidth="2" strokeDasharray="2 10" opacity="0.8" />
        <path
            d="M150,40
               L172,110 L246,110 L186,152 L208,222 L150,178 L92,222 L114,152 L54,110 L128,110 Z"
            fill="var(--star)"
            stroke="var(--yellow-deep)"
            strokeWidth="4"
            strokeLinejoin="round"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <circle
                key={a}
                cx={150 + 138 * Math.cos((a * Math.PI) / 180)}
                cy={150 + 138 * Math.sin((a * Math.PI) / 180)}
                r="5"
                fill="var(--red)"
            />
        ))}
    </svg>
)

export default InsigniaSheriff
