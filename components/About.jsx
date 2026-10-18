import Image from "next/image";
import Arrow from "./Arrow";

export default function About() {
  return (
    <section id="sobre-mi" className="about-section section-shell" aria-labelledby="about-title">
      <div className="about-brand" aria-hidden="true"><Image src="/brand/isotipo-claro.png" alt="" width={707} height={715} className="brand-light" /><Image src="/brand/isotipo-oscuro.png" alt="" width={320} height={300} className="brand-dark" /><span>Tu momento.<br />Tu recuerdo.<br /><em>Tu historia.</em></span></div>
      <div className="about-copy"><p className="eyebrow">El estudio · Alejandro Bermúdez</p><h2 id="about-title">El cuidado está<br />en <em>cada detalle.</em></h2><p>Soy Alejandro, la persona detrás de Invitale. Diseño y desarrollo invitaciones digitales a medida desde la Región de Murcia, uniendo sensibilidad visual y una experiencia sencilla de disfrutar.</p><p>Todo parte de tu historia: los colores, el lugar, lo que quieres transmitir. De ahí nace una invitación con identidad propia, pensada para emocionar desde el primer instante.</p><a href="#contacto" className="text-link">Demos forma a tu idea <Arrow diagonal /></a></div>
    </section>
  );
}
