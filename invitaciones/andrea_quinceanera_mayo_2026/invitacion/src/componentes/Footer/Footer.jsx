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
                    <div className="footer-heart">💙</div>
                </div>

                {/* Divisor decorativo */}
                <div className="footer-divider"></div>
                <br />
                {/* Información del Desarrollador */}
                <div className="developer-section">
                    <p className="developer-name">
                        Desarrollado por <strong>Alejandro Bermúdez</strong>
                    </p>
                    <p className="copyright-text">
                        <i className="bi bi-c-circle"></i> {currentYear} Todos los derechos reservados
                    </p>
                    <p className="rights-text">
                        Este diseño y código son propiedad exclusiva del autor.
                        Prohibida su reproducción total o parcial sin autorización expresa.
                    </p>
                </div>

                {/* Firma profesional */}
                <div className="professional-badge">
                    <i className="bi bi-code-slash"></i>
                    <span className='firmado'>InvitAle</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;