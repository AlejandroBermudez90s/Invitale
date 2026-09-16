// Capa fija de grano superpuesta a toda la invitación, para que el fondo de
// cielo no se sienta como un color plano sino con textura suave.
const TexturaPapel = () => (
    <div className="textura-papel" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="ruido-papel">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="ruido" />
                <feColorMatrix in="ruido" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.045 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#ruido-papel)" />
        </svg>
    </div>
)

export default TexturaPapel
