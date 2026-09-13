import { WhatsappIcon, InstagramIcon, TiktokIcon, MailIcon } from "./ContactIcons";

const contactos = [
  { Icon: WhatsappIcon, label: "633 36 80 59", href: "https://wa.me/34633368059" },
  { Icon: InstagramIcon, label: "@invitale", href: "https://instagram.com/invitale" },
  { Icon: TiktokIcon, label: "@invitale", href: "https://tiktok.com/@invitale" },
  { Icon: MailIcon, label: "invitale@gmail.com", href: "mailto:invitale@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contacto" className="bg-paper px-6 py-24 text-center transition-colors duration-300 dark:bg-night sm:px-10">
      <div className="mx-auto max-w-md">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-gold">Hablemos de tu evento</p>
        <h2 className="mt-4 font-display text-3xl text-ink dark:text-cream sm:text-4xl">Cuéntame qué estás celebrando</h2>
        <p className="mt-4 font-body text-ink/70 dark:text-cream/70">
          Bodas, quinceañeras, bautizos, comuniones, cumpleaños o eventos corporativos — diseñamos juntos tu invitación digital.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 font-display text-lg text-ink/90 dark:text-cream/90">
          {contactos.map(({ Icon, label, href }) => (
            <a
              key={label + href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 transition-colors hover:text-gold"
            >
              <Icon className="h-6 w-6 text-gold" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}