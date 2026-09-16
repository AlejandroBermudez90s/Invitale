// Capa fija de grano de papel superpuesta a toda la invitación, para que el
// fondo se sienta como papel de acuarela en vez de un color plano.
const TexturaPapel = () => (
    <div className="textura-papel" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="ruido-papel">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="ruido" />
                <feColorMatrix in="ruido" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#ruido-papel)" />
        </svg>
    </div>
)

export default TexturaPapel
