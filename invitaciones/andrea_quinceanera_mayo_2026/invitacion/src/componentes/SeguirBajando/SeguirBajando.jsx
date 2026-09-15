import './SeguirBajando.css'

const SeguirBajando = () => {
    return (
        <section className='seguir-bajando-section d-flex align-items-center justify-content-center'>
            <div className='container text-center'>
                <div className="decorative-line mb-4"></div>

                <h2 className='fuente-pregunta'>
                    ¿SEGURO QUE QUIERES SEGUIR BAJANDO?
                </h2>
                <br />
                <br />
                <h4 className='fuente-pregunta2'>
                    Si quieres, ¡adelante! 
                </h4>
                <br />
                <p className='fuente-pregunta2'>
                    Y si te da pereza, Ale te deja aquí un botón 😁
                </p>
                <div className="flecha-animada mt-5">
                    <i className="bi bi-chevron-double-down"></i>
                </div>
                <div className="dinero">
                    <a href="#atrapado" className="btn btn-no-tocar mt-4 px-5">
                        NO TOCAR
                    </a>
                </div>
                <p className='fuente-subtitulo mt-3'>
                    Hay cosas que es mejor no tocar...
                </p>

                <div className="decorative-line mt-4"></div>
            </div>
        </section>
    )
}

export default SeguirBajando