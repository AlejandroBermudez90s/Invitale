import { useState } from 'react';
import './Dinero.css';
import FloralCorner from '../Ilustraciones/FloralCorner';
import RegaloIlustracion from '../Ilustraciones/RegaloIlustracion';
import Pajarito from '../Ilustraciones/Pajarito';
import useReveal from '../../hooks/useReveal';

const Dinero = () => {
    const [copiado, setCopiado] = useState(false);
    const [revelado, setRevelado] = useState(false);
    const [ref, visible] = useReveal();
    const alias = "ES45 2038 1234 5600 0045 7821"; // IBAN ficticio de ejemplo

    const copiarAlias = () => {
        navigator.clipboard.writeText(alias);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
    };

    return (
        <div className='dinero'>
            <section className="regalo-section">
                <Pajarito top="12%" duration={26} delay={4} claro />
                <div className="container text-center">
                    {!revelado ? (
                        <button
                            ref={ref}
                            type="button"
                            className={`regalo-teaser reveal reveal-scale ${visible ? 'is-visible' : ''}`}
                            onClick={() => setRevelado(true)}
                        >
                            <RegaloIlustracion />
                            <span className="regalo-teaser-texto">Toca para abrir</span>
                        </button>
                    ) : (
                        <div className="regalo-card mx-auto regalo-card-revelada">
                            <FloralCorner corner="tl" className="floral-corner" />
                            <FloralCorner corner="br" className="floral-corner" />

                            <h1 className="regalo-title">Nuestra luna de miel</h1>

                            <p className="regalo-text">
                                No hay mejor regalo que celebrar este día junto a ti.
                            </p>

                            <p className="regalo-text subtle">
                                Si aun así deseas tener un detalle, nos encantaría que nos ayudaras a construir recuerdos en nuestro viaje de novios.
                            </p>

                            <div className="copiar-contenedor mt-4">
                                <p className="alias-label">Nº de cuenta:</p>
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
                    )}
                </div>
            </section>
        </div>
    );
};

export default Dinero;
