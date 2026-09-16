import './Footer.css';
import Wreath from '../Ilustraciones/Wreath';
import Pajarito from '../Ilustraciones/Pajarito';
import useReveal from '../../hooks/useReveal';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [ref, visible] = useReveal();

    return (
        <footer className="footer-section">
            <div className="postal-fondo footer-fondo"></div>
            <Pajarito top="18%" duration={25} delay={2} claro />
            <div ref={ref} className={`container text-center stagger ${visible ? 'is-visible' : ''}`}>
                <div className="footer-wreath">
                    <Wreath />
                    <span className="footer-monograma" aria-hidden="true">æ</span>
                </div>

                <div className="footer-thanks">
                    <h2 className="thanks-title">¡Os esperamos!</h2>
                    <p className="thanks-text">
                        Gracias por dedicar un momento a leer nuestra invitación.
                        <br />
                        Vuestra presencia es lo que hará este día inolvidable.
                    </p>
                </div>

                <div className="footer-divider"></div>

                <a
                    href="https://invitale.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="professional-badge"
                    aria-label="Invitale - ir a invitale.es"
                >
                    <span className='firmado'>Diseñado por </span>
                    <img
                        src={`${import.meta.env.BASE_URL}isotipo-oscuro.png`}
                        alt="Invitale"
                        className="brand-isotipo"
                    />
                    <span className='firmado'>Invitale</span>
                </a>

                <div className="footer-social">
                    <a
                        href="https://instagram.com/invitalecontacto"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="social-link"
                    >
                        <svg viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.3" />
                            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
                            <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
                        </svg>
                    </a>
                    <a
                        href="https://wa.me/34633368059"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="social-link"
                    >
                        <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.3" />
                            <path
                                d="M8 16l.9-2.7a4.6 4.6 0 1 1 2 1.9L8 16Z"
                                stroke="currentColor"
                                strokeWidth="1.3"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://tiktok.com/@invitalecontacto"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="social-link"
                    >
                        <svg viewBox="0 0 24 24" fill="none">
                            <path
                                d="M14 3v10.8a2.9 2.9 0 1 1-2.4-2.86V8.4a5.3 5.3 0 1 0 4.9 5.28V9.6a6.6 6.6 0 0 0 3.9 1.28V8.4a3.9 3.9 0 0 1-3.9-3.9V3H14Z"
                                stroke="currentColor"
                                strokeWidth="1.1"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
                <div>
                    <p className="copyright-text">
                        <i className="bi bi-c-circle"></i> {currentYear} Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
