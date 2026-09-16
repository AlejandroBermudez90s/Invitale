import './ConfirmarAsistencia.css'
import NubeCorner from '../Ilustraciones/NubeCorner'
import Pajarito from '../Ilustraciones/Pajarito'
import { useState, useEffect, useRef } from "react";

const ConfirmarAsistencia = () => {
    const [form, setForm] = useState({
        nombre: "",
        asistencia: "Sí",
        acompanantes: "",
        alergias: "",
        comentarios: ""
    });
    const [enviado, setEnviado] = useState(false);
    const [enviando, setEnviando] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const tituloRef = useRef(null)

    useEffect(() => {
        if (enviado && tituloRef.current) {
            tituloRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, [enviado]);

    const enviarOtra = () => {
        setForm({ nombre: "", asistencia: "Sí", acompanantes: "", alergias: "", comentarios: "" });
        setEnviado(false);
    };

    // Invitación de ejemplo: no hay backend real, se simula el envío.
    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviando(true);

        setTimeout(() => {
            setEnviando(false);
            setEnviado(true);
        }, 900);
    };

    return (
        <section className="confirmar-asistencia-section">
            <Pajarito top="8%" duration={22} delay={7} reverse />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        {!enviado ? (
                            <div className="confirmar-card">
                                <NubeCorner corner="tr" className="floral-corner" />
                                <div className="card-body p-4 p-md-5">
                                    <div className="text-center mb-4">
                                        <div className="icon-wrapper mb-3">
                                            <i className="bi bi-stars"></i>
                                        </div>
                                        <h2 ref={tituloRef} className="fw-bold titulo-confirmar mb-2">Confirmar asistencia</h2>
                                        <p className="texto-confirmar mb-1">
                                            Completad el formulario para uniros a la misión de José
                                        </p>
                                        <p className="fecha-limite">
                                            Antes del 15 de abril de 2027
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-people-fill me-2"></i>
                                                Familia
                                            </label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                className="form-control form-control-lg"
                                                placeholder="Ejemplo: Familia Pérez"
                                                required
                                                value={form.nombre}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-check-circle-fill me-2"></i>
                                                ¿Asistiréis?
                                            </label>
                                            <select
                                                name="asistencia"
                                                className="form-select form-select-md"
                                                value={form.asistencia}
                                                onChange={handleChange}
                                            >
                                                <option value="Sí">Sí</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-person-fill-add me-2"></i>
                                                Número de personas
                                            </label>
                                            <input
                                                type="number"
                                                name="acompanantes"
                                                className="form-control form-control-md"
                                                min="0"
                                                max="10"
                                                placeholder="Ejemplo: 2"
                                                value={form.acompanantes}
                                                onChange={handleChange}
                                            />
                                            <small className="text-muted">Incluye a todos los asistentes</small>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-egg-fried me-2"></i>
                                                Alergias o intolerancias
                                            </label>
                                            <input
                                                type="text"
                                                name="alergias"
                                                className="form-control form-control-md"
                                                placeholder="Ejemplo: frutos secos"
                                                value={form.alergias}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-card-text me-2"></i>
                                                Nombres de asistentes
                                            </label>
                                            <textarea
                                                name="comentarios"
                                                className="form-control"
                                                rows="3"
                                                placeholder="Ejemplo: Ana, Luis"
                                                value={form.comentarios}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-confirmar w-100 py-3"
                                            disabled={enviando}
                                        >
                                            {enviando ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="bi bi-send-fill me-2"></i>
                                                    Confirmar asistencia
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <div className="success-message-wrapper">
                                <div className="card success-card border-0 shadow-lg">
                                    <div className="card-body p-5 text-center">
                                        <div className="success-icon-wrapper mb-4">
                                            <div className="success-checkmark">
                                                <i className="bi bi-check-lg"></i>
                                            </div>
                                        </div>
                                        <h3 ref={tituloRef} className="fw-bold mb-3 success-title">
                                            ¡Confirmación recibida!
                                        </h3>
                                        <p className="lead mb-4">
                                            Gracias por confirmar vuestra asistencia. ¡Nos vemos en la misión!
                                        </p>
                                        <button
                                            className="btn btn-outline-confirmar mt-2"
                                            onClick={enviarOtra}
                                        >
                                            <i className="bi bi-arrow-counterclockwise me-2"></i>
                                            Enviar otra respuesta
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConfirmarAsistencia;
