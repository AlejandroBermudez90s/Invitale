export default function Contact() {
  // Sustituye por tus datos reales
  const email = "hola@invitale.es";
  const whatsapp = "https://wa.me/34XXXXXXXXX";
  const instagram = "https://instagram.com/invitale";

  return (
    <section
      id="contacto"
      className="bg-navy px-6 py-24 text-center sm:px-10"
    >
      <div className="mx-auto max-w-xl">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-gold">
          Hablemos de tu evento
        </p>

        <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
          Cuéntame qué estás celebrando
        </h2>

        <p className="mt-4 font-body text-cream/70">
          Escríbeme y diseñamos juntos la invitación digital para tu boda,
          quinceañera, bautizo, comunión, cumpleaños o evento corporativo.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 font-body text-sm sm:flex-row sm:justify-center sm:gap-8">
          <a
            href={`mailto:${email}`}
            className="text-cream/90 transition-colors hover:text-gold"
          >
            {email}
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/90 transition-colors hover:text-gold"
          >
            WhatsApp
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/90 transition-colors hover:text-gold"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
