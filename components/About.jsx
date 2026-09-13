export default function About() {
  return (
    <section id="sobre-mi" className="bg-cream px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-[1fr_2fr] sm:gap-16">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-gold">
          Sobre InvitAle
        </p>

        <div className="max-w-prose font-body text-lg leading-relaxed text-ink/85">
          <p>
            Diseño y desarrollo invitaciones digitales a medida, pensadas para
            que cada evento tenga una presentación tan cuidada como la
            celebración misma. Desde la Región de Murcia, trabajo con
            parejas, familias y empresas que buscan algo distinto a una
            plantilla: una pieza elegante, funcional y con identidad propia.
          </p>
          <p className="mt-6">
            Cada proyecto combina diseño visual y desarrollo web — cuenta
            atrás, ubicación, confirmación de asistencia y todo lo que tu
            evento necesite, en una sola página, lista para compartir.
          </p>
        </div>
      </div>
    </section>
  );
}
