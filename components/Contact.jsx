import { WhatsappIcon, InstagramIcon, TiktokIcon, MailIcon } from "./ContactIcons";
import Arrow from "./Arrow";

export default function Contact() {
  return (
    <section id="contacto" className="contact-section" aria-labelledby="contact-title"><div className="section-shell contact-layout">
      <div className="contact-copy"><p className="eyebrow">Tu próximo gran momento</p><h2 id="contact-title">Todo empieza<br />con un <em>«te invito».</em></h2><p>Cuéntame qué estás celebrando.<br />Me encantará diseñar el comienzo de tu historia.</p><a href="https://wa.me/34633368059" target="_blank" rel="noopener noreferrer" className="button button-gold"><WhatsappIcon className="contact-cta-icon" />Hablemos por WhatsApp<Arrow diagonal /></a></div>
      <div className="contact-details"><p className="contact-details-label">En contacto</p><a href="mailto:invitalecontacto@gmail.com" className="contact-email">invitalecontacto@gmail.com<Arrow diagonal /></a><a href="https://wa.me/34633368059" target="_blank" rel="noopener noreferrer" className="contact-phone">+34 633 36 80 59</a><div className="contact-socials"><a href="https://instagram.com/invitalecontacto" target="_blank" rel="noopener noreferrer"><InstagramIcon />Instagram<Arrow diagonal /></a><a href="https://tiktok.com/@invitalecontacto" target="_blank" rel="noopener noreferrer"><TiktokIcon />TikTok<Arrow diagonal /></a><a href="mailto:invitalecontacto@gmail.com" aria-label="Escribir un correo a Invitale" className="contact-mail-icon"><MailIcon /></a></div><p className="contact-location">Desde Murcia, para tu celebración.</p></div>
    </div></section>
  );
}
