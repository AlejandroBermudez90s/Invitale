import { useState, useEffect, useMemo } from 'react'
import './CuentaAtras.css'

const CuentaAtras = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    // Ceremonia: 15 de mayo de 2027 a las 12:00
    const eventDate = useMemo(() => new Date('2027-05-15T12:00:00'), [])

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date()
            const difference = eventDate - now

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [eventDate])

    return (
        <div className="countdown-card fuente">
            <div className="fecha-destacada">
                <span className="fecha-dia-semana">Sábado</span>
                <span className="fecha-dia-numero rotulo-juguete">15</span>
                <span className="fecha-mes-anio">Mayo de 2027</span>
                <span className="fecha-hora">12:00 h</span>
            </div>

            <div className="countdown-grid">
                <div className="countdown-item">
                    <div className="countdown-number">{timeLeft.days}</div>
                    <div className="countdown-label">Días</div>
                </div>
                <div className="countdown-item">
                    <div className="countdown-number">{timeLeft.hours}</div>
                    <div className="countdown-label">Horas</div>
                </div>
                <div className="countdown-item">
                    <div className="countdown-number">{timeLeft.minutes}</div>
                    <div className="countdown-label">Minutos</div>
                </div>
                <div className="countdown-item">
                    <div className="countdown-number">{timeLeft.seconds}</div>
                    <div className="countdown-label">Segundos</div>
                </div>
            </div>

            <p className="countdown-nota">¡No faltes a la misión!</p>
        </div>
    )
}

export default CuentaAtras
