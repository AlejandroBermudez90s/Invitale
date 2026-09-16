import { useEffect, useRef, useState } from 'react'

// Hook de scroll-reveal: el elemento referenciado permanece oculto hasta que
// entra en el viewport, momento en el que se marca como visible una única vez.
export function useReveal(options) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true)
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return [ref, visible]
}

export default useReveal
