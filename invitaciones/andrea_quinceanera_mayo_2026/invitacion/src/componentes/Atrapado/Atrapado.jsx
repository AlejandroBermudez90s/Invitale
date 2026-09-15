import { useEffect, useRef, useState } from "react";
import "./Atrapado.css";

const Atrapado = () => {
    const sectionRef = useRef(null);
    // Esta es la clave: una variable que impida que el observer te re-atrapado
    const [dejandoSeccion, setDejandoSeccion] = useState(false);

    const liberar = () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
    };

    const bloquear = () => {
        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
    };

    useEffect(() => {
        const activarTrampa = () => {
            if (dejandoSeccion) return; // Si estamos saliendo, no bloquees

            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                if (window.location.hash === "#atrapado" && !dejandoSeccion) {
                    bloquear();
                }
            }, 800);
        };

        const handleHashChange = () => {
            if (window.location.hash === "#atrapado") {
                setDejandoSeccion(false); // Reset por si vuelve a entrar
                activarTrampa();
            } else if (window.location.hash === "#dinero") {
                // Al ir a dinero, nos aseguramos de estar libres
                liberar();
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                // SOLO atrapamos si NO estamos en proceso de salida
                if (entry.isIntersecting && window.location.hash !== "#atrapado" && !dejandoSeccion) {
                    window.location.hash = "atrapado";
                }
            },
            { threshold: 0.8 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            observer.disconnect();
            window.removeEventListener("hashchange", handleHashChange);
            liberar();
        };
    }, [dejandoSeccion]); // Importante añadir la dependencia

    const handleIrADinero = () => {
        setDejandoSeccion(true); // ¡Activamos el pase VIP para salir!
        
        const scrollY = document.body.style.top;
        liberar();
        
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
        
        // El link href="#dinero" hará el resto sin que el observer moleste
    };

    return (
        <section id="atrapado" ref={sectionRef} className="regalo-section">
            <div className="regalo-card text-center shadow-lg">
                <span className="regalo-icon">🧐</span>
                <h1 className="regalo-title">🔒 ¡ATRAPADO! 🔒</h1>
                <div className="regalo-divider"></div>
                <p className="regalo-text emphasis">Si es que para que tocas...</p>
                <p className="regalo-text subtle">
                    Una vez aquí, no podrás salir hasta que aceptes que eres muy curioso/a.
                </p>
                
                <a 
                    href="#dinero" 
                    className="btn-regalo" 
                    onClick={handleIrADinero}
                >
                    LO ADMITO
                </a>
                
                <p className="regalo-footer mt-4">Pero quiero seguir curioseando</p>
            </div>
        </section>
    );
};

export default Atrapado;