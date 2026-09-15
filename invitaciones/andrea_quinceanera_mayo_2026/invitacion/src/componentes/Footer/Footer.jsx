import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container text-center">
                {/* Ornamento superior */}
                <div className="footer-ornament">
                    <div className="ornament-line"></div>
                </div>

                {/* Mensaje de Despedida */}
                <div className="footer-thanks">
                    <h2 className="thanks-title">¡Te esperamos!</h2>
                    <p className="thanks-text">
                        Gracias por dedicar un momento a leer nuestra invitación.
                        <br />
                        Tu presencia es lo que hará este día inolvidable.
                    </p>
                </div>

                {/* Divisor decorativo */}
                <div className="footer-divider"></div>
                <br />

                {/* Firma de marca */}
                <div className="professional-badge">
                    <span className='firmado'>Diseñado por </span>
                    <img
                        src="/brand/isotipo-oscuro.png"
                        alt="Invitale"
                        className="brand-isotipo"
                    />
                    <span className='firmado'>Invitale</span>
                </div>

                {/* Redes sociales */}
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