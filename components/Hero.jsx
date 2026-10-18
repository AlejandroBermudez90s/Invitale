import Image from "next/image";
import Arrow from "./Arrow";

export default function Hero() {
  return (
    <section id="top" className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Invitaciones digitales a medida</p>
        <h1 id="hero-title">Tu historia, <em>hecha invitación.</em></h1>
        <p className="hero-description">Hay momentos que se recuerdan para siempre. Empieza a vivir el tuyo con una invitación tan especial como lo que vas a celebrar.</p>
        <div className="hero-actions">
          <a href="#galeria" className="button button-primary">Descubre las invitaciones <Arrow /></a>
          <a href="#contacto" className="text-link">Hablemos de tu evento <Arrow diagonal /></a>
        </div>
        <p className="hero-signature">Diseñado para recordar</p>
      </div>
      <div className="hero-showcase">
        <div className="showcase-composition">
          <div className="showcase-card showcase-card-back">
            <Image src="/gallery/alejandro-y-esthefany/portada-v2.webp" alt="Diseño floral de la invitación de Alejandro y Esthefany" width={600} height={750} priority sizes="(min-width: 900px) 270px, 45vw" />
          </div>
          <a href="/elena-y-nicolas/" target="_blank" rel="noopener noreferrer" className="showcase-card showcase-card-front" aria-label="Descubrir la invitación de Elena y Nicolás (abre en otra pestaña)">
            <Image src="/gallery/elena-y-nicolas/portada-mar-v1.webp" alt="Invitación de Elena y Nicolás, ilustrada con una acuarela de la Costa Brava" width={600} height={750} priority sizes="(min-width: 900px) 300px, 52vw" />
            <span className="showcase-open"><Arrow diagonal /><span className="sr-only">Abrir invitación</span></span>
          </a>
        </div>
        <p className="showcase-caption"><span className="caption-line" /> Pequeños detalles. Grandes recuerdos.</p>
      </div>
      <div className="hero-footnote"><span>Bodas · Quinceañeras · Comuniones · Bautizos · Celebraciones</span><a href="#galeria">Explora Invitale <Arrow down /></a></div>
    </section>
  );
}
