import { useState } from 'react';
import './Regalo.css';
import NubeCorner from '../Ilustraciones/NubeCorner';
import RegaloIlustracion from '../Ilustraciones/RegaloIlustracion';
import Pajarito from '../Ilustraciones/Pajarito';
import useReveal from '../../hooks/useReveal';

const Regalo = () => {
    const [revelado, setRevelado] = useState(false);
    const [ref, visible] = useReveal();

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

                            <p className="eyebrow mb-2">Mesa de regalos</p>
                            <h1 className="regalo-title">¡Tu compañía ya es un regalo!</h1>

                            <p className="regalo-text">
                                Lo más bonito de este día será teneros cerca celebrando con nosotros.
                            </p>

                            <p className="regalo-text subtle">
                                Si aun así queréis tener un detalle con José, dispondremos de una mesa de
                                regalos en la propia celebración donde podréis dejarlo el mismo día.
                            </p>

                            <div className="regalo-divider"></div>

                            <p className="regalo-footer">¡Gracias por hacer este día aún más especial!</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Regalo;
