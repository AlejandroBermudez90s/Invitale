import { useState } from 'react';
import './Dinero.css';

const Dinero = () => {
    const [copiado, setCopiado] = useState(false);
    const alias = "ES72 0182 1086 6902 0162 8165"; // <--- Cambia esto por tu Alias real

    const copiarAlias = () => {
        navigator.clipboard.writeText(alias);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000); // El mensaje desaparece a los 2s
    };

    return (
        <div className='dinero'>
            <section className="regalo-section">
                <div className="container text-center">
                    <div className="regalo-card mx-auto">
                        <span className="regalo-icon">🎁</span>

                        <h1 className="regalo-title">Gracias por acompañarnos</h1>

                        <p className="regalo-text">
                            No hay mejor regalo que celebrar este día tan especial contigo.
                        </p>

                        <p className="regalo-text subtle">
                            Pero si deseas tener un detalle…
                        </p>

                        {/* BLOQUE DE COPIAR ALIAS */}
                        <div className="copiar-contenedor mt-4">
                            <p className="alias-label">Nº Cuenta:</p>
                            <div className="alias-box" onClick={copiarAlias}>
                                <span className="alias-texto">{alias}</span>
                                <button className="btn-copiar">
                                    {copiado ? "¡COPIADO!" : "COPIAR"}
                                </button>
                            </div>
                        </div>

                        <div className="regalo-divider"></div>

                        <p className="regalo-footer">
                            Lo más importante para nosotros es tu presencia.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dinero;