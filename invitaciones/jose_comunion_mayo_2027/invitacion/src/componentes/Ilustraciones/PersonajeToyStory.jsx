import './PersonajeToyStory.css'

// Recorte PNG (sin fondo) de un personaje de Toy Story, posicionado de forma
// absoluta sobre la sección. Se dimensiona solo por `width` (un valor CSS,
// idealmente un clamp() con vw para que escale de forma fluida en móvil) y
// deja que la altura se ajuste sola a la proporción real de cada imagen, en
// vez de forzar una caja cuadrada que recortaría al personaje.
// Si no recibe `src` (personaje todavía sin recorte disponible), muestra un
// marcador con el nombre en su lugar.
const PersonajeToyStory = ({ nombre, src, className = '', style }) => (
    <div className={`personaje-toystory ${className}`} style={style} aria-hidden="true">
        {src ? (
            <img src={src} alt={nombre} loading="lazy" />
        ) : (
            <div className="personaje-placeholder">{nombre}</div>
        )}
    </div>
)

export default PersonajeToyStory
