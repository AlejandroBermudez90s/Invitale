import { useEffect, useRef, useState } from 'react'

const Audio = () => {
    const audioRef = useRef(null)
    const [hasInteracted, setHasInteracted] = useState(false)

    useEffect(() => {
        const audio = audioRef.current
        
        // Intentar autoplay
        const tryAutoplay = async () => {
            try {
                await audio.play()
            } catch {
                console.log("Autoplay bloqueado")
            }
        }

        tryAutoplay()

        // Reproducir con la primera interacción
        const playOnInteraction = async () => {
            if (hasInteracted) return
            
            try {
                await audio.play()
                setHasInteracted(true)
            } catch {
                console.log("Error al reproduicir audio")
            }
        }

        // Escuchar múltiples eventos
        const events = ['click', 'touchstart', 'scroll', 'keydown']
        
        events.forEach(event => {
            document.addEventListener(event, playOnInteraction, { passive: true })
        })

        // Cleanup
        return () => {
            events.forEach(event => {
                document.removeEventListener(event, playOnInteraction)
            })
        }
    }, [hasInteracted])

    return (
        <audio 
            ref={audioRef}
            loop
            preload="auto"
        >
            <source src={`${import.meta.env.BASE_URL}tiempo_de_vals.mp3`} type="audio/mpeg" />
        </audio>
    )
}

export default Audio