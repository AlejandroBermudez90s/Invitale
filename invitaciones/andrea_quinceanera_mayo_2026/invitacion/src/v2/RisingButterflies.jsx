import { useEffect, useRef, useState } from 'react'
import butterfly from './assets/mariposa-azul.webp'
import './RisingButterflies.css'

function createButterfly(id, progress = 0) {
  const duration = 14 + Math.random() * 6
  const left = 6 + Math.random() * 88
  return {
    id,
    style: {
      '--x': `${left}%`,
      '--size': `${18 + Math.random() * 10}px`,
      '--drift': `${-35 + Math.random() * 70}px`,
      '--tilt': `${-15 + Math.random() * 30}deg`,
      '--duration': `${duration}s`,
      '--delay': `${-progress * duration}s`,
      '--opacity': left > 20 && left < 80 ? .25 : .35,
      '--wing-duration': `${3 + Math.random() * 3}s`,
    },
  }
}

export default function RisingButterflies() {
  const nextId = useRef(3)
  const [butterflies, setButterflies] = useState(() => [
    createButterfly(0, .12), createButterfly(1, .46), createButterfly(2, .78),
  ])

  useEffect(() => {
    let timer
    function scheduleNext() {
      timer = window.setTimeout(() => {
        if (!document.hidden) {
          const next = createButterfly(nextId.current++)
          // Límite de seguridad si una pestaña suspende los eventos de animación.
          setButterflies(current => [...current.slice(-7), next])
        }
        scheduleNext()
      }, 2800 + Math.random() * 1800)
    }
    scheduleNext()
    return () => window.clearTimeout(timer)
  }, [])

  return <div className="a-butterfly-stream" aria-hidden="true">
    {butterflies.map(({ id, style }) => <span
      key={id}
      className="a-rising-butterfly"
      data-flight-id={id}
      style={style}
      onAnimationEnd={event => {
        if (event.target === event.currentTarget) {
          setButterflies(current => current.filter(item => item.id !== id))
        }
      }}
    ><img src={butterfly} width="320" height="320" alt="" /></span>)}
  </div>
}
