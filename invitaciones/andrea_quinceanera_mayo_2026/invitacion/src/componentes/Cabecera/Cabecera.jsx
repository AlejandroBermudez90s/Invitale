import { useState } from 'react'
import './Cabecera.css'

const Cabecera = () => {
    const [hasClicked, setHasClicked] = useState(false)

    const handleButterflyClick = () => {
        setHasClicked(true)
    }

    return (
        <div className={`cabecera ${hasClicked ? 'focused' : 'blurred'}`}>
            {/* Pantalla de intro con mariposa */}
            {!hasClicked && (
                <div className="intro-overlay">
                    <p className="intro-text">Toca las mariposas</p>
                    <img 
                        src={`${import.meta.env.BASE_URL}mariposas_gif.gif`}
                        alt="Mariposa" 
                        className="butterfly"
                        onClick={handleButterflyClick}
                    />
                </div>
            )}

            {/* Contenido principal - aparece después del clic */}
            <div className={`main-content ${hasClicked ? 'visible' : ''}`}>
                <div className="texto">
                    <h1 className="andrea">Andrea</h1>
                </div>
				<h2 className="andrea2">15 Años</h2>
                <div className='boton'>
                    <a href="#textoIntroduccion" className="btn shadow-sm">
                        <i className="bi bi-chevron-down"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cabecera