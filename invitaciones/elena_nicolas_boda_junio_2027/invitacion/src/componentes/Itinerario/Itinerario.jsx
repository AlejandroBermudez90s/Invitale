import './Itinerario.css'
import useReveal from '../../hooks/useReveal'

const eventos = [
    {
        hora: '18:30',
        titulo: 'Llegada y bienvenida',
        icono: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 44 V29" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M20 44 L22 29" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                <path d="M28 44 L26 29" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                <circle cx="24" cy="15" r="6" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="15" cy="21" r="4.5" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="33" cy="21" r="4.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M16 33 Q24 28 32 33" stroke="currentColor" strokeWidth="1.2" />
            </svg>
        ),
    },
    {
        hora: '19:00',
        titulo: 'Ceremonia',
        icono: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6 V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M20.5 9 H27.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M14 20 L24 13 L34 20 V40 H14 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M20 40 V30 H28 V40" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M10 40 H38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        hora: '20:00',
        titulo: 'Cóctel frente al mar',
        icono: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 8 V22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M11.5 8 V16 a3.5 3.5 0 0 0 7 0 V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M15 22 V40" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M34 8 V40" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M30 8 c0 6 8 6 8 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        hora: '21:00',
        titulo: 'Banquete',
        icono: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 8 V18 M16 8 V18 M19 8 V18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                <path d="M13 18 Q13 23 16 23 Q19 23 19 18" stroke="currentColor" strokeWidth="1.2" />
                <path d="M16 23 V40" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M32 8 C36 8 36 17 32 20 V40" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        hora: '23:30',
        titulo: 'Baile de los novios',
        icono: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="24" r="9" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="29" cy="24" r="9" stroke="currentColor" strokeWidth="1.4" />
            </svg>
        ),
    },
    {
        hora: '00:30',
        titulo: 'Fiesta hasta el amanecer',
        icono: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="17" r="9" stroke="currentColor" strokeWidth="1.4" />
                <path d="M24 8 V26 M15 17 H33 M17.5 10.5 L30.5 23.5 M30.5 10.5 L17.5 23.5" stroke="currentColor" strokeWidth="0.9" opacity="0.65" />
                <path d="M24 26 V40" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
]

const Itinerario = () => {
    const [ref, visible] = useReveal()

    return (
        <div ref={ref} className={`itinerario stagger ${visible ? 'is-visible' : ''}`}>
            {eventos.map((ev, i) => (
                <div className="itinerario-item" key={ev.titulo}>
                    {i < eventos.length - 1 && <div className="itinerario-linea" />}
                    <div className="itinerario-icono">{ev.icono}</div>
                    <div className="itinerario-texto">
                        <span className="itinerario-hora">{ev.hora}</span>
                        <span className="itinerario-titulo">{ev.titulo}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Itinerario
