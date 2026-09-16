import { useState } from 'react';
import './Regalo.css';
import NubeCorner from '../Ilustraciones/NubeCorner';
import RegaloIlustracion from '../Ilustraciones/RegaloIlustracion';
import Pajarito from '../Ilustraciones/Pajarito';
import useReveal from '../../hooks/useReveal';

const Regalo = () => {
    const [copiado, setCopiado] = useState(false);
    const [revelado, setRevelado] = useState(false);
    const [ref, visible] = useReveal();
    const alias = "ES12 3456 7890 1234 5678 9012"; // IBAN ficticio de ejemplo

    const copiarAlias = () => {
        navigator.clipboard.writeText(alias);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
    };

    return (
        <div className='regalo'>
            <section className="regalo-section">
                <Pajarito top="12%" duration={24} delay={4} claro />
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
                            <NubeCorner corner="tl" className="floral-corner" />
                            <NubeCorner corner="br" className="floral-corner" />

                            <h1 className="regalo-title">Un detalle para José</h1>

                            <p className="regalo-text">
                                Lo más bonito de este día será teneros cerca celebrando con nosotros.
                            </p>

                            <p className="regalo-text subtle">
                                Si aun así queréis tener un detalle con José, podéis colaborar para su
                                primera "misión especial": su cartilla de ahorro.
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

                            <p className="regalo-footer">Lo más importante para nosotros es vuestra presencia.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Regalo;
