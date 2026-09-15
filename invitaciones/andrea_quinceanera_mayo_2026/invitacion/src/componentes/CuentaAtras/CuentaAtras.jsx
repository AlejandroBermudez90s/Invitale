import { useState, useEffect, useMemo } from 'react'
import './CuentaAtras.css'

const CuentaAtras = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    // Fecha del evento: 16 de mayo de 2026 a las 19:00
    // useMemo evita que se recree en cada render
    const eventDate = useMemo(() => new Date('2026-05-16T19:00:00'), [])

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

    // Generar calendario de mayo 2026
    const generateCalendar = () => {
        const daysInMonth = 31
        const firstDayOfMonth = new Date('2026-05-01').getDay() // 0 = Domingo
        // Ajustar para que lunes sea el primer día (0=lun, 6=dom)
        const firstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1
        const calendar = []
        
        // Días vacíos antes del primer día
        for (let i = 0; i < firstDay; i++) {
            calendar.push(<div key={`empty-${i}`} className="calendar-day empty"></div>)
        }
        
        // Días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            const isEventDay = day === 16
            calendar.push(
                <div 
                    key={day} 
                    className={`calendar-day ${isEventDay ? 'event-day' : ''}`}
                >
                    {day}
                    {isEventDay && <div className="event-marker">★</div>}
                </div>
            )
        }
        
        return calendar
    }

    return (
        <div className="fuente row g-4">
            {/* Cuenta Atrás */}
            <div className="col-12 col-lg-6">
                <div className="card countdown-card h-100">
                    <div className="card-body text-center">
                        <h3 className="mb-4 fw-bold text-primary">Faltan...</h3>
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
                </div>
            </div>

            {/* Calendario */}
            <div className="col-12 col-lg-6">
                <div className="card calendar-card h-100">
                    <div className="card-body">
                        <h3 className="text-center mb-4 fw-bold text-primary">Mayo 2026</h3>
                        <div className="calendar-weekdays">
                            <div>Lun</div>
                            <div>Mar</div>
                            <div>Mié</div>
                            <div>Jue</div>
                            <div>Vie</div>
                            <div>Sáb</div>
                            <div>Dom</div>
                        </div>
                        <div className="calendar-grid">
                            {generateCalendar()}
                        </div>
                        <div className="text-center mt-3">
                            <span className="badge bg-primary fs-6 px-3 py-2">
                                Sábado 16 de Mayo - 19:00h
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CuentaAtras