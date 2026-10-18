import Arrow from "./Arrow";
import HeroDeck from "./HeroDeck";

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
      <HeroDeck />
      <div className="hero-footnote"><span>Bodas · Quinceañeras · Comuniones · Bautizos · Celebraciones</span><a href="#galeria">Explora Invitale <Arrow down /></a></div>
    </section>
  );
}
