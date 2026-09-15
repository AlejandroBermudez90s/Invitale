import './DressCode.css'

const DressCode = () => {
    return (
        <div className="dresscode-container">
            <div className="text-center mb-5">
                <h2 className="fw-bold text-primary mb-4">
                    <i className="bi bi-stars me-2"></i>
                    Código de vestimenta
                </h2>
                <p className="text-muted">Vístete elegante para esta ocasión tan especial</p>
            </div>
            {/* Color Reservado - Minimalista */}
            <div className="reserved-color-section">
                <p className="reserved-label">Color Reservado</p>
                <div className="color-sample" style={{backgroundColor: '#0808e7'}}>
                    <span className="color-name">Azul Rey</span>
                </div>
                <p className="reserved-note">Exclusivo para la quinceañera</p>
            </div>

            {/* Dress Code - Dos columnas limpias */}
            <div className="dresscode-grid">
                {/* Ellas */}
                <div className="dresscode-column">
                    <h3 className="column-title">Ellas</h3>
                    <ul className="text-center dresscode-list">
                        <li>Bellas y divinas</li>
                    </ul>
                </div>

                {/* Ellos */}
                <div className="dresscode-column">
                    <h3 className="column-title">Ellos</h3>
                    <ul className="text-center dresscode-list">
                        <li>Guapos y elegantes</li>
                    </ul>
                </div>
            </div>

            {/* Nota final - Sutil */}
            <p className="final-note">
                <i class="bi bi-info-circle"></i>
                Obligatorio traer ganas de bailar
            </p>
        </div>
    )
}

export default DressCode