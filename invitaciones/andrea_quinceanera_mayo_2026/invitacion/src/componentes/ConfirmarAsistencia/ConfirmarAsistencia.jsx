import './ConfirmarAsistencia.css'
import { useState, useEffect, useRef } from "react";

const ConfirmarAsistencia = () => {
    const [form, setForm] = useState({
        nombre: "",
        asistencia: "Sí",
        acompanantes: "",
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

    useEffect(() => {
        if (tituloRef.current) {
            tituloRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, []);

    const tituloRef = useRef(null)
    const cerrarAcordeon = () => {
        const collapse = document.getElementById("collapseConfirmar");
        if (collapse) {
            const bsCollapse =
                window.bootstrap.Collapse.getInstance(collapse) ||
                new window.bootstrap.Collapse(collapse);
            bsCollapse.hide();
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setEnviando(true);

        try {
            await fetch("https://script.google.com/macros/s/AKfycbz-v0L1sezgItQDUvDFwyUC7IDBN8sdIsKMoEBfsOQiYnvJImdR8CJ08r3BakoJnUH_/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            // Simular delay para mostrar el loading
            setTimeout(() => {
                setEnviando(false);
                setEnviado(true);
            }, 100);
        } catch (error) {
            console.error("Error al enviar:", error);
            setEnviando(false);
            // setEnviado(true); // Cambiar a true de todas formas para testing
        }
    };

    return (
        <section className="confirmar-asistencia-section">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        {!enviado ? (
                            <div className="card confirmar-card border-0 shadow-lg">
                                <div className="card-body p-4 p-md-5">
                                    {/* Título */}
                                    <div className="text-center mb-4">
                                        <div className="icon-wrapper mb-3">
                                            <i className="bi bi-envelope-heart-fill"></i>
                                        </div>
                                        <h2 ref={tituloRef} className="fw-bold mb-2">Confirmar asistencia</h2>
                                        <p className="text-muted">
                                            Por favor, completa el formulario para confirmar tu asistencia
                                        </p>
                                    </div>

                                    {/* Formulario */}
                                    <form onSubmit={handleSubmit}>
                                        {/* Nombre de Familia */}
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-people-fill me-2"></i>
                                                Familia
                                            </label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                className="form-control form-control-lg"
                                                placeholder="Ejemplo: Familia Bermúdez"
                                                required
                                                value={form.nombre}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* Asistencia */}
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-check-circle-fill me-2"></i>
                                                ¿Asistirás?
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

                                        {/* Número de personas */}
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
                                                placeholder="Ejemplo: 4"
                                                value={form.acompanantes}
                                                onChange={handleChange}
                                            />
                                            <small className="text-muted">Incluye a todos los asistentes</small>
                                        </div>

                                        {/* Nombres */}
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-card-text me-2"></i>
                                                Nombres de asistentes
                                            </label>
                                            <textarea
                                                name="comentarios"
                                                className="form-control"
                                                rows="3"
                                                placeholder="Ejemplo: Andrea, Ana, Wachi, Alejandro"
                                                value={form.comentarios}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* Botón de envío */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg w-100 py-3"
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
                            /* Mensaje de éxito */
                            <div className="success-message-wrapper">
                                <div className="card success-card border-0 shadow-lg">
                                    <div className="card-body p-5 text-center">
                                        <div className="success-icon-wrapper mb-4">
                                            <div className="success-checkmark">
                                                <i className="bi bi-check-lg"></i>
                                            </div>
                                        </div>
                                        <h3 className="fw-bold mb-3 text-success">
                                            ¡Confirmación recibida!
                                        </h3>
                                        <p className="lead mb-4">
                                            Gracias por confirmar tu asistencia.
                                        </p>
                                        <button
                                            className="btn btn-outline-primary mt-2"
                                            onClick={cerrarAcordeon}
                                        >
                                            <i className="bi bi-chevron-up me-2"></i>
                                            Cerrar
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
