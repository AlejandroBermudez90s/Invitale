import { useState, useEffect, useMemo } from 'react'
import './CuentaAtras.css'

const CuentaAtras = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    // Ceremonia: 26 de diciembre de 2036 a las 19:00
    const eventDate = useMemo(() => new Date('2036-12-26T19:00:00'), [])

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
                <span className="fecha-dia-semana">Viernes</span>
                <span className="fecha-dia-numero">26</span>
                <span className="fecha-mes-anio">Diciembre de 2024</span>
                <span className="fecha-hora">19:00 h</span>
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
        </div>
    )
}

export default CuentaAtras
