import './TextoIntroduccion.css'
import { useEffect } from 'react';

const TextoIntroduccion = () => {

  useEffect(() => {
    const elementos = document.querySelectorAll('.animar');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.3
    });

    elementos.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="texto-introduccion-section">
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            {/* Contenedor de poema elegante */}
            <div className="text-center section-header">
              
              {/* Ornamento superior */}
              <div className="ornamento-superior animar">
                <div className="linea-decorativa"></div>
                <i className="bi bi-heart-fill corazon-icono"></i>
                <div className="linea-decorativa"></div>
              </div>

              {/* Texto poético con espaciado elegante */}
              <blockquote className="poema-container">
                <p className="verso fuenteParrafo animar delay-1">
                  Hay momentos en la vida que marcan el corazón para siempre…
                </p>
                
                <p className="verso fuenteParrafo animar delay-2">
                  Muy pronto viviré uno de los días más importantes de mi vida,
                </p>
                
                <p className="verso fuenteParrafo animar delay-2">
                  dejando atrás mi niñez para comenzar una nueva etapa.
                </p>

                <div className="separador-verso animar delay-3">• • •</div>

                <p className="verso fuenteParrafo animar delay-4">
                  Tu presencia es el mejor regalo que puedo recibir
                </p>
                
                <p className="verso fuenteParrafo animar delay-4">
                  en esta celebración única, donde brindaremos
                </p>
                
                <p className="verso fuenteParrafo animar delay-5">
                  por la alegría de vivir y los hermosos recuerdos
                </p>
                
                <p className="verso fuenteParrafo animar delay-5">
                  que aún están por venir.
                </p>

                {/* Firma elegante */}
                <footer className="blockquote-footer firma-elegante animar delay-6">
                  <cite className='cita' title="Andrea">Andrea</cite>
                </footer>
              </blockquote>
              <div className='boton-container animar delay-8'>
                <a href="#detalles" className="btn btn-outline-light btn-elegante px-4 py-2">
                  <span>Ver detalles de la celebración</span>
                </a>
              </div>
              {/* Ornamento inferior con botón */}
              <div className="ornamento-inferior animar delay-7">
                <div className="linea-decorativa"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextoIntroduccion